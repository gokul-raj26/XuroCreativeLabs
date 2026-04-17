import { useMemo, useState } from 'react';
import emailjs from '@emailjs/browser';
import { contactLinks } from '../utils/content';

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  service: 'Brand Identity',
  budget: '5000-10000',
  message: ''
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');

  const emailJsConfigured = useMemo(
    () =>
      !!import.meta.env.VITE_EMAILJS_SERVICE_ID &&
      !!import.meta.env.VITE_EMAILJS_TEMPLATE_ID &&
      !!import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    []
  );

  const onChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');

    try {
      if (emailJsConfigured) {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
      } else {
        window.location.href = `mailto:${contactLinks.email}?subject=New Project Inquiry - ${encodeURIComponent(
          form.service
        )}&body=${encodeURIComponent(`${form.firstName} ${form.lastName}\n${form.email}\n\n${form.message}`)}`;
      }

      setStatus('sent');
      setForm(initialForm);
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={onSubmit} className="glass-panel rounded-sm p-6 md:p-8" aria-label="Contact Xuro CreativeLabs">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-xs uppercase tracking-[0.15em] text-muted">
          First Name
          <input
            required
            name="firstName"
            value={form.firstName}
            onChange={onChange}
            className="mt-2 w-full border border-[rgba(31,60,222,0.3)] bg-[rgba(255,255,255,0.02)] px-4 py-3 text-sm text-text outline-none transition focus:border-electric"
          />
        </label>

        <label className="text-xs uppercase tracking-[0.15em] text-muted">
          Last Name
          <input
            required
            name="lastName"
            value={form.lastName}
            onChange={onChange}
            className="mt-2 w-full border border-[rgba(31,60,222,0.3)] bg-[rgba(255,255,255,0.02)] px-4 py-3 text-sm text-text outline-none transition focus:border-electric"
          />
        </label>
      </div>

      <label className="mt-4 block text-xs uppercase tracking-[0.15em] text-muted">
        Email
        <input
          required
          type="email"
          name="email"
          value={form.email}
          onChange={onChange}
          className="mt-2 w-full border border-[rgba(31,60,222,0.3)] bg-[rgba(255,255,255,0.02)] px-4 py-3 text-sm text-text outline-none transition focus:border-electric"
        />
      </label>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <label className="text-xs uppercase tracking-[0.15em] text-muted">
          Service
          <select
            name="service"
            value={form.service}
            onChange={onChange}
            className="mt-2 w-full border border-[rgba(31,60,222,0.3)] bg-bg2 px-4 py-3 text-sm text-text outline-none transition focus:border-electric"
          >
            <option>Brand Identity</option>
            <option>Motion Design</option>
            <option>Web Design and Dev</option>
            <option>Social Content</option>
            <option>Creative Strategy</option>
          </select>
        </label>

        <label className="text-xs uppercase tracking-[0.15em] text-muted">
          Budget (USD)
          <select
            name="budget"
            value={form.budget}
            onChange={onChange}
            className="mt-2 w-full border border-[rgba(31,60,222,0.3)] bg-bg2 px-4 py-3 text-sm text-text outline-none transition focus:border-electric"
          >
            <option>5000-10000</option>
            <option>10000-25000</option>
            <option>25000-50000</option>
            <option>50000+</option>
          </select>
        </label>
      </div>

      <label className="mt-4 block text-xs uppercase tracking-[0.15em] text-muted">
        Project Brief
        <textarea
          required
          name="message"
          value={form.message}
          onChange={onChange}
          rows={5}
          className="mt-2 w-full resize-y border border-[rgba(31,60,222,0.3)] bg-[rgba(255,255,255,0.02)] px-4 py-3 text-sm text-text outline-none transition focus:border-electric"
        />
      </label>

      <button type="submit" disabled={status === 'sending'} className={`${status === 'sent' ? 'btn-primary' : 'btn-red'} mt-6 disabled:opacity-70`}>
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      <p className="mt-3 text-xs text-muted">
        {status === 'sent' && 'Message sent successfully. We will reach out within 24 hours.'}
        {status === 'error' && 'Something went wrong. Please retry or message us on WhatsApp.'}
      </p>
    </form>
  );
}
