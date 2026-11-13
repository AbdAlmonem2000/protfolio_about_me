'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { ImSpinner2 } from 'react-icons/im';
import emailjs from '@emailjs/browser';

// EmailJS settings (dashboard.emailjs.com). The public key is meant to be public.
const EMAILJS_SERVICE_ID = 'service_bn831oo';
const EMAILJS_TEMPLATE_ID = 'template_idrkvvi';
const EMAILJS_PUBLIC_KEY = 'M6ejWvi6OcjsdaK8a';

const initialForm = { name: '', email: '', message: '' };

const inputClass =
  'w-full rounded-xl border border-gray-300 bg-white p-3 outline-none transition-all duration-300 focus:border-purple-500 focus:bg-purple-50/50 focus:ring-4 focus:ring-purple-100';

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  // hide the status message after a few seconds
  useEffect(() => {
    if (!status.text) return;
    const t = setTimeout(() => setStatus({ type: '', text: '' }), 6000);
    return () => clearTimeout(t);
  }, [status]);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', text: '' });

    // Send the values under the common variable names so they match the EmailJS template
    // whichever of them it uses ({{user_name}}, {{from_name}}, {{name}} ...).
    const params = {
      user_name: form.name,
      from_name: form.name,
      name: form.name,
      user_email: form.email,
      from_email: form.email,
      email: form.email,
      reply_to: form.email,
      message: form.message,
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params, { publicKey: EMAILJS_PUBLIC_KEY });
      setStatus({ type: 'success', text: "Message sent successfully! I'll get back to you soon." });
      setForm(initialForm);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({
        type: 'error',
        text: 'Something went wrong while sending. Please try again or contact me on WhatsApp.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-gray-50 px-4 py-24 md:px-10">
      <div className="bg-blob -right-20 top-10 h-72 w-72 bg-purple-200" />

      <h2 className="relative mb-12 text-center text-4xl font-extrabold" data-aos="fade-down">
        Get In <span className="gradient-text">Touch</span>
      </h2>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-10 md:grid-cols-2">
        {/* Left: Info */}
        <div
          className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br from-purple-700 via-purple-600 to-fuchsia-600 px-6 py-11 text-white shadow-2xl"
          data-aos="fade-right"
        >
          <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/10" />
          <div className="absolute -right-12 -bottom-12 h-52 w-52 rounded-full bg-white/10" />

          <h3 className="relative mb-8 text-2xl font-bold">Find Me ↷</h3>

          <a
            href="mailto:monem.sal1012@gmail.com"
            className="relative mb-5 flex items-center gap-3 font-semibold transition hover:translate-x-1"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20"><FaEnvelope /></span>
            monem.sal1012@gmail.com
          </a>

          {[
            { tel: '+201116008738', wa: '201116008738', label: '+20 111 600 8738' },
            { tel: '+966538259830', wa: '966538259830', label: '+966 53 825 9830' },
          ].map((p) => (
            <div key={p.tel} className="relative mb-4 flex items-center gap-3 font-semibold">
              <a href={`tel:${p.tel}`} aria-label={`Call ${p.label}`} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition hover:-translate-y-1 hover:bg-white/30">
                <FaPhoneAlt />
              </a>
              <a
                href={`https://wa.me/${p.wa}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp ${p.label}`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/80 transition hover:-translate-y-1 hover:bg-green-500"
              >
                <FaWhatsapp />
              </a>
              <span>{p.label}</span>
            </div>
          ))}
        </div>

        {/* Right: Form */}
        <form onSubmit={sendEmail} className="space-y-4 rounded-2xl bg-white p-6 shadow-2xl" data-aos="fade-left">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" className={inputClass} required />
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className={inputClass} required />
          </div>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            rows="6"
            className={inputClass}
            required
          />

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="group flex cursor-pointer items-center gap-2 rounded-full bg-linear-to-r from-purple-700 to-fuchsia-600 px-7 py-3 font-semibold text-white shadow-lg shadow-purple-500/30 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? (
              <>
                <ImSpinner2 className="animate-spin" /> Sending...
              </>
            ) : (
              <>
                Send
                <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </>
            )}
          </motion.button>

          <AnimatePresence mode="wait">
            {status.text && (
              <motion.p
                key={status.text}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                role="status"
                className={`flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium ${
                  status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                }`}
              >
                {status.type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
                {status.text}
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </div>
    </section>
  );
}
