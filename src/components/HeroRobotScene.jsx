import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const MODEL_URL = '/models/RobotExpressive.glb';

const CAMERA = {
  fov: 34,
  near: 0.1,
  far: 100,
  position: { x: 0, y: 1.6, z: 6.0 },
  lookAt: { x: 0, y: 1.0, z: 0 }
};

const ROBOT = {
  position: { x: 0, y: -0.85, z: -1.5 },
  scale: 0.7,
  rotationY: Math.PI * 0.03
};

const LIGHTS = {
  ambient: { color: 0x8aa0ff, intensity: 0.95 },
  key: { color: 0xe6f21d, intensity: 1.85, position: [3.8, 4.7, 4.2] },
  rim: { color: 0xff3b2f, intensity: 1.2, position: [-3.3, 2.5, -2.9] },
  fill: { color: 0x1f3cde, intensity: 1.65, distance: 16, position: [0.1, 1.35, 2.25] }
};

const BRAND_PALETTE = [0x1f3cde, 0x2d57ff, 0x112b99, 0xe6f21d, 0xff3b2f];

const SEQUENCE = [
  { names: [ 'Running'], duration: 1.6, loop: THREE.LoopRepeat, moveForward: true },
  { names: ['Jump'], duration: 1.4, loop: THREE.LoopOnce },
  { names: ['Dance'], duration: 2.5, loop: THREE.LoopRepeat },
  { names: ['Wave', 'Hello'], duration: 1.8, loop: THREE.LoopOnce }
];

function pickBrandColor(index) {
  if (index % 9 === 0) return 0xff3b2f;
  if (index % 5 === 0) return 0xe6f21d;
  if (index % 2 === 0) return 0x2d57ff;
  return BRAND_PALETTE[2];
}

function applyBrandMaterial(mesh, colorHex) {
  const cloned = mesh.material?.clone?.();
  if (!cloned) return;

  if ('color' in cloned && cloned.color) cloned.color = new THREE.Color(colorHex);
  if ('emissive' in cloned && cloned.emissive) {
    cloned.emissive = new THREE.Color(0x0a143f);
    cloned.emissiveIntensity = colorHex === 0xe6f21d ? 0.48 : colorHex === 0xff3b2f ? 0.38 : 0.3;
  }
  if ('metalness' in cloned) cloned.metalness = 0.62;
  if ('roughness' in cloned) cloned.roughness = colorHex === 0xe6f21d ? 0.23 : 0.3;
  mesh.material = cloned;
}

function findAction(actions, names) {
  for (const n of names) {
    if (actions[n]) return n;
  }
  return null;
}

export default function HeroRobotScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    let rafId = 0;
    let mixer = null;
    let robot = null;
    let activeAction = null;
    let activeActionName = '';
    const actions = {};

    let phaseIndex = 0;
    let phaseTime = 0;
    let walkStartZ = ROBOT.position.z;
    const walkEndZ = ROBOT.position.z + 0.72;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      CAMERA.fov,
      mount.clientWidth / mount.clientHeight,
      CAMERA.near,
      CAMERA.far
    );
    camera.position.set(CAMERA.position.x, CAMERA.position.y, CAMERA.position.z);
    camera.lookAt(CAMERA.lookAt.x, CAMERA.lookAt.y, CAMERA.lookAt.z);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    // ✅ ADD THESE
     renderer.toneMapping = THREE.ACESFilmicToneMapping;
     renderer.toneMappingExposure = 1;
     renderer.physicallyCorrectLights = true;
    renderer.setClearAlpha(0); 
    mount.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(LIGHTS.ambient.color, LIGHTS.ambient.intensity);
    scene.add(ambient);
    const key = new THREE.DirectionalLight(LIGHTS.key.color, LIGHTS.key.intensity);
    key.position.set(...LIGHTS.key.position);
    scene.add(key);
    const rim = new THREE.DirectionalLight(LIGHTS.rim.color, LIGHTS.rim.intensity);
    rim.position.set(...LIGHTS.rim.position);
    scene.add(rim);
    const fill = new THREE.PointLight(LIGHTS.fill.color, LIGHTS.fill.intensity, LIGHTS.fill.distance);
    fill.position.set(...LIGHTS.fill.position);
    scene.add(fill);

    const activateAction = (name, loopType) => {
      if (!actions[name]) return;
      const next = actions[name];
      if (activeAction === next) return;

      if (activeAction) activeAction.fadeOut(0.35);
      next.reset();
      next.enabled = true;
      next.setEffectiveTimeScale(1);
      next.setEffectiveWeight(1);
      next.clampWhenFinished = loopType === THREE.LoopOnce;
      next.setLoop(loopType, loopType === THREE.LoopOnce ? 1 : Infinity);
      next.fadeIn(0.35).play();

      activeAction = next;
      activeActionName = name;
    };

    const loader = new GLTFLoader();
    loader.load(
      MODEL_URL,
      (gltf) => {
        robot = gltf.scene;
        robot.position.set(ROBOT.position.x, ROBOT.position.y, ROBOT.position.z);
        robot.scale.setScalar(ROBOT.scale);
        robot.rotation.y = ROBOT.rotationY;
        walkStartZ = robot.position.z;

        let paintIndex = 0;
        robot.traverse((node) => {
          if (!node.isMesh) return;
          node.castShadow = false;
          node.receiveShadow = false;
          applyBrandMaterial(node, pickBrandColor(paintIndex));
          paintIndex += 1;
        });
        scene.add(robot);

        if (gltf.animations?.length) {
          mixer = new THREE.AnimationMixer(robot);
          gltf.animations.forEach((clip) => {
            actions[clip.name] = mixer.clipAction(clip);
          });
          const firstName = findAction(actions, SEQUENCE[0].names);
          if (firstName) activateAction(firstName, SEQUENCE[0].loop);
        }
      },
      undefined,
      () => {
        mount.dataset.modelError = '1';
      }
    );

    const clock = new THREE.Clock();
    const animate = () => {
      const dt = clock.getDelta();
      if (mixer) mixer.update(dt);

      if (robot && Object.keys(actions).length) {
        const phase = SEQUENCE[phaseIndex];
        phaseTime += dt;

        const name = findAction(actions, phase.names);
        if (name && activeActionName !== name) {
          activateAction(name, phase.loop);
        }

        if (phase.moveForward) {
          const t = Math.min(phaseTime / phase.duration, 1);
          robot.position.z = THREE.MathUtils.lerp(walkStartZ, walkEndZ, t);
        }

        if (phaseTime >= phase.duration) {
          phaseTime = 0;
          phaseIndex = (phaseIndex + 1) % SEQUENCE.length;

          // New sequence cycle: reset to start position before walking again.
          if (phaseIndex === 0) {
            robot.position.z = walkStartZ;
          }
        }
      }

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      const width = mount.clientWidth || 1;
      const height = mount.clientHeight || 1;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      scene.traverse((obj) => {
        if (!obj.isMesh) return;
        obj.geometry?.dispose?.();
        if (Array.isArray(obj.material)) obj.material.forEach((m) => m?.dispose?.());
        else obj.material?.dispose?.();
      });
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="relative h-full w-full">
      <div ref={mountRef} className="h-full w-full" aria-label="3D animated robot" />
    </div>
  );
}

