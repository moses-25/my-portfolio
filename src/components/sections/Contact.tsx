import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

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

const whatsappNumber = '254748867064';
const whatsappLink = `https://wa.me/${whatsappNumber}`;
const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=120x120&bgcolor=ffffff&color=000000&data=${encodeURIComponent(whatsappLink)}`;

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
    setTimeout(() => {
      setSuccess("Message sent successfully. I'll get back to you soon.");
      setForm(initialState);
      setIsSubmitting(false);
      setTimeout(() => setSuccess(''), 4000);
    }, 800);
  };

  return (
    <section id="contact" className="relative bg-black py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Heading & Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              CONTACT US
            </h2>
            <p className="mt-3 text-gray-500 text-sm md:text-base max-w-md">
              Have a project in mind? Let's work together to build something great.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white/70" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-widest">Location</p>
                  <p className="text-gray-400 text-sm">Nairobi, Kenya</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white/70" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-widest">Phone</p>
                  <p className="text-gray-400 text-sm">+254 757 268 162</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white/70" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-widest">Email</p>
                  <p className="text-gray-400 text-sm">mosesotieno8363@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src={qrSrc}
                  alt="Scan to chat on WhatsApp"
                  width={100}
                  height={100}
                  className="bg-white p-2"
                  loading="lazy"
                />
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-7">
              <div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-white/10 text-white py-3 placeholder-gray-700 focus:outline-none focus:border-white transition-colors duration-200 text-base"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-white/60">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-white/10 text-white py-3 placeholder-gray-700 focus:outline-none focus:border-white transition-colors duration-200 text-base"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-white/60">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full bg-transparent border-b border-white/10 text-white py-3 placeholder-gray-700 focus:outline-none focus:border-white transition-colors duration-200 text-base"
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-white/60">{errors.subject}</p>
                )}
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full bg-transparent border-b border-white/10 text-white py-3 placeholder-gray-700 focus:outline-none focus:border-white transition-colors duration-200 text-base resize-none"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-white/60">{errors.message}</p>
                )}
              </div>

              {success && (
                <div className="border border-white/20 bg-white/5 px-4 py-3">
                  <p className="text-white/80 text-sm">{success}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-white text-black font-medium text-sm uppercase tracking-widest hover:bg-white/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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
    </section>
  );
};

export default Contact;
