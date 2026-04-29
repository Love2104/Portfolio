import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useTheme } from '../context/ThemeContext';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: 'success' | 'error' | null;
  message: string;
}

const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus({ type: 'error', message: 'All fields are required' });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({ type: 'error', message: 'Please enter a valid email address' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setFormStatus({ type: null, message: '' });

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      const response = await emailjs.send(
        'service_5b2dgrj',
        'template_0cain3s',
        templateParams,
        'CgLRh7-JO_eSyZowT'
      );

      if (response.status === 200) {
        setFormStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
      }
    } catch (error) {
      console.error(error);
      setFormStatus({ type: 'error', message: 'Failed to send message. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = `w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
    theme === 'dark'
      ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400'
      : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
  }`;

  return (
    <section id="contact" className={`py-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        {formStatus.type && (
          <div
            className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
              formStatus.type === 'success'
                ? 'bg-green-100 text-green-700 border border-green-200'
                : 'bg-red-100 text-red-700 border border-red-200'
            }`}
          >
            {formStatus.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
            <span>{formStatus.message}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className={inputClass}
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="email" className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className={inputClass}
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="message" className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="What's on your mind?"
              className={inputClass}
              disabled={isSubmitting}
            ></textarea>
          </div>

          {isSubmitting && (
            <div className={`w-full rounded-full h-1.5 overflow-hidden ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'}`}>
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-1.5 rounded-full w-full animate-progress"></div>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-blue-500/30"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send size={18} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
