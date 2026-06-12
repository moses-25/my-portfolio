import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

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

const whatsappNumber = '254757268162';
const whatsappLink = `https://wa.me/${whatsappNumber}`;

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Please enter your name';
    if (!form.email.trim()) newErrors.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Please enter a valid email address';
    if (!form.subject.trim()) newErrors.subject = 'Please enter a subject';
    if (!form.message.trim()) newErrors.message = 'Please enter your message';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject,
      message: form.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setSuccess('Message sent');
        setForm(initialState);
        setIsSubmitting(false);
        setTimeout(() => setSuccess(''), 4000);
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        setSuccess('Something went wrong. Please try again.');
        setIsSubmitting(false);
        setTimeout(() => setSuccess(''), 4000);
      });
  };

  return (
    <section id="contact" className="relative bg-black py-12 md:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Heading & Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-oswald font-bold text-white leading-tight tracking-wider">
              CONTACT US
            </h2>
            <p className="mt-2 text-gray-500 text-sm md:text-base max-w-md font-oswald">
              Have a project in mind? Let's work together to build something great.
            </p>

            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white/70" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-widest font-oswald">Location</p>
                  <p className="text-gray-400 text-sm font-oswald">Nairobi, Kenya</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white/70" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-widest font-oswald">Phone</p>
                  <p className="text-gray-400 text-sm font-oswald">+254 757 268 162</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white/70" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-widest font-oswald">Email</p>
                  <p className="text-gray-400 text-sm font-oswald">mosesotieno8363@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src="/QR.png"
                  alt="Scan to chat on WhatsApp"
                  width={140}
                  height={140}
                  className="bg-white p-2"
                  loading="lazy"
                />
              </a>
              <p className="mt-2 text-gray-500 text-sm font-oswald tracking-wider">scan we connect</p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-5 md:p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-400 text-xs uppercase tracking-widest mb-2 font-oswald">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-lg text-white px-4 py-3 placeholder-gray-600 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-200 text-base font-oswald"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-400 text-xs uppercase tracking-widest mb-2 font-oswald">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="e.g. you@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg text-white px-4 py-3 placeholder-gray-600 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-200 text-base font-oswald"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-400 text-xs uppercase tracking-widest mb-2 font-oswald">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    className="w-full bg-white/5 border border-white/10 rounded-lg text-white px-4 py-3 placeholder-gray-600 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-200 text-base font-oswald"
                  />
                  {errors.subject && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-400 text-xs uppercase tracking-widest mb-2 font-oswald">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-lg text-white px-4 py-3 placeholder-gray-600 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-200 text-base resize-none font-oswald"
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                  )}
                </div>

                {success && (
                  <div className="border border-green-500/40 bg-green-500/10 rounded-lg px-5 py-4">
                    <p className="text-green-400 text-sm">{success}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-white text-black font-medium text-sm uppercase tracking-widest rounded-lg hover:bg-white/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-oswald"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
