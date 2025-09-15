// src/components/sections/Contact.tsx
import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const initialState: FormState = { name: '', email: '', subject: '', message: '' };

const Contact: React.FC = () => {
  const { darkMode } = useTheme();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState<string>('');
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setInView(true);
      });
    }, { threshold: 0.15 });
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Please enter your name.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) newErrors.email = 'Please enter your email.';
    else if (!emailRegex.test(form.email)) newErrors.email = 'Please enter a valid email address.';
    if (!form.subject.trim()) newErrors.subject = 'Please enter a subject.';
    if (!form.message.trim()) newErrors.message = 'Please enter a message.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    // Placeholder submission logic
    setTimeout(() => {
      setSuccess('✅ Your message has been sent successfully!');
      setForm(initialState);
      setTimeout(() => setSuccess(''), 3000);
    }, 600);
  };

  return (
    <section id="contact" ref={sectionRef} className={`relative py-20 ${darkMode ? 'bg-black' : 'bg-white'} transition-colors duration-300`}>
      {/* Background glow/gradient */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-20 w-[32rem] h-[32rem] rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-20 w-[28rem] h-[28rem] rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title + subtitle */}
        <div className={`text-center mb-16 ${inView ? 'animate-fade-up' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white inline-block">
            Get In Touch
          </h2>
          {/* Glowing underline */}
          <div className="mt-3 flex justify-center">
            <div className="relative h-1 w-28 rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-indigo-500 shadow-[0_0_24px_rgba(56,189,248,0.45)] animate-pulse" />
          </div>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-300">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact form */}
          <div className={`${inView ? 'animate-slide-in-left' : ''}`}>
            <form onSubmit={handleSubmit} className={`rounded-2xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-900/70' : 'bg-white'} border border-gray-800 p-6 sm:p-8 backdrop-blur-sm`}>
              {/* Name */}
              <div className="mb-6">
                <div className="relative">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder=" "
                    value={form.name}
                    onChange={handleChange}
                    className={`peer w-full px-4 pt-6 pb-2 rounded-lg bg-transparent border ${darkMode ? 'border-gray-700 text-white' : 'border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-sky-500`}
                    aria-invalid={!!errors.name}
                    aria-describedby="name-error"
                  />
                  <label htmlFor="name" className={`absolute left-4 top-3 text-sm transition-all duration-200 ${darkMode ? 'text-gray-400' : 'text-gray-500'} peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs peer-focus:text-sky-400 ${form.name ? 'top-1 text-xs text-sky-400' : ''}`}>
                    Your Name
                  </label>
                </div>
                {errors.name && <p id="name-error" className="mt-1 text-xs text-red-400">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="mb-6">
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder=" "
                    value={form.email}
                    onChange={handleChange}
                    className={`peer w-full px-4 pt-6 pb-2 rounded-lg bg-transparent border ${darkMode ? 'border-gray-700 text-white' : 'border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-sky-500`}
                    aria-invalid={!!errors.email}
                    aria-describedby="email-error"
                  />
                  <label htmlFor="email" className={`absolute left-4 top-3 text-sm transition-all duration-200 ${darkMode ? 'text-gray-400' : 'text-gray-500'} peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs peer-focus:text-sky-400 ${form.email ? 'top-1 text-xs text-sky-400' : ''}`}>
                    Your Email
                  </label>
                </div>
                {errors.email && <p id="email-error" className="mt-1 text-xs text-red-400">{errors.email}</p>}
              </div>

              {/* Subject */}
              <div className="mb-6">
                <div className="relative">
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder=" "
                    value={form.subject}
                    onChange={handleChange}
                    className={`peer w-full px-4 pt-6 pb-2 rounded-lg bg-transparent border ${darkMode ? 'border-gray-700 text-white' : 'border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-sky-500`}
                    aria-invalid={!!errors.subject}
                    aria-describedby="subject-error"
                  />
                  <label htmlFor="subject" className={`absolute left-4 top-3 text-sm transition-all duration-200 ${darkMode ? 'text-gray-400' : 'text-gray-500'} peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs peer-focus:text-sky-400 ${form.subject ? 'top-1 text-xs text-sky-400' : ''}`}>
                    Subject
                  </label>
                </div>
                {errors.subject && <p id="subject-error" className="mt-1 text-xs text-red-400">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div className="mb-6">
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder=" "
                    value={form.message}
                    onChange={handleChange}
                    className={`peer w-full px-4 pt-6 pb-2 rounded-lg bg-transparent border ${darkMode ? 'border-gray-700 text-white' : 'border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-sky-500`}
                    aria-invalid={!!errors.message}
                    aria-describedby="message-error"
                  />
                  <label htmlFor="message" className={`absolute left-4 top-3 text-sm transition-all duration-200 ${darkMode ? 'text-gray-400' : 'text-gray-500'} peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs peer-focus:text-sky-400 ${form.message ? 'top-1 text-xs text-sky-400' : ''}`}>
                    Your Message
                  </label>
                </div>
                {errors.message && <p id="message-error" className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>

              {/* Success message */}
              {success && (
                <div role="status" className="mb-4 rounded-lg border border-green-700 bg-green-900/40 px-4 py-3 text-green-300">
                  {success}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="group w-full px-6 py-3 rounded-lg bg-gradient-to-r from-sky-600 to-indigo-600 text-white font-medium shadow-lg shadow-sky-700/20 hover:shadow-sky-500/30 transition-all duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                <span className="inline-flex items-center justify-center">
                  <i className="fas fa-paper-plane mr-2"></i>
                  Send Message
                </span>
              </button>
            </form>
          </div>

          {/* Right: Contact info + social */}
          <div className={`${inView ? 'animate-fade-up delay-300' : ''}`}>
            <div className="grid grid-cols-1 gap-4">
              {/* Email */}
              <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-900/70' : 'bg-white'} border border-gray-800 p-6 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-transform hover:-translate-y-0.5`}>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center mr-4">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Email</h4>
                    <p className="text-gray-300">mosesotieno8363@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-900/70' : 'bg-white'} border border-gray-800 p-6 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-transform hover:-translate-y-0.5`}>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center mr-4">
                    <span className="text-2xl">🌎</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Location</h4>
                    <p className="text-gray-300">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-900/70' : 'bg-white'} border border-gray-800 p-6 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-transform hover:-translate-y-0.5`}>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center mr-4">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Working Hours</h4>
                    <p className="text-gray-300">Monday - Friday</p>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-900/70' : 'bg-white'} border border-gray-800 p-6`}>
                <h3 className="font-semibold text-white mb-4">Find me on</h3>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/moses-o-311b2235a"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-12 h-12 rounded-lg bg-[#0A66C2] text-white grid place-items-center transition-transform hover:scale-110 shadow-[0_0_20px_rgba(10,102,194,0.35)]"
                  >
                    <i className="fab fa-linkedin-in text-xl" />
                  </a>
                  <a
                    href="https://github.com/moses-25"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-12 h-12 rounded-lg bg-[#333333] text-white grid place-items-center transition-transform hover:scale-110 shadow-[0_0_20px_rgba(51,51,51,0.35)]"
                  >
                    <i className="fab fa-github text-xl" />
                  </a>
                  <a
                    href="https://twitter.com/moses_kingstone"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="w-12 h-12 rounded-lg bg-[#1DA1F2] text-white grid place-items-center transition-transform hover:scale-110 shadow-[0_0_20px_rgba(29,161,242,0.4)]"
                  >
                    <i className="fab fa-twitter text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
