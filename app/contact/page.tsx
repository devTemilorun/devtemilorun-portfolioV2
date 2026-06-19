'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  FaEnvelope, 
  FaPhone, 
  FaLinkedin, 
  FaGithub, 
  FaPaperPlane,
  FaWhatsapp
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Navigation from '@/scenes/Navigation';
import Footer from '@/components/Footer';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Message should be at least 10 characters'),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    setSubmitStatus('loading');
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const json = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! Your message has been sent.');
        reset();
      } else {
        setSubmitStatus('error');
        setSubmitMessage(json.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Network error — please check your connection.');
    }
  };

  return (
    <>
      <Navigation />
      <section className="pt-32 pb-20 bg-white dark:bg-[#0b0f17]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">Contact.</h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
              Let's Work Together
            </p>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto dark:text-gray-300">
              Have a project idea, collaboration, or opportunity? 
              Send me a message — I typically respond within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3 bg-white rounded-xl p-8 shadow-sm border border-gray-100 dark:bg-slate-900 dark:border-slate-800">
              <div className="flex items-center gap-3 mb-8">
                <FaPaperPlane className="text-2xl text-gray-700 dark:text-gray-200" />
                <h2 className="text-2xl font-bold text-black dark:text-white">Send Message</h2>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:border-gray-500 focus:ring-1 focus:ring-gray-500 outline-none transition-all dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:border-gray-500 focus:ring-1 focus:ring-gray-500 outline-none transition-all dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                    placeholder="hello@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    {...register('message')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:border-gray-500 focus:ring-1 focus:ring-gray-500 outline-none transition-all resize-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                    placeholder="Tell me about your project or idea..."
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || submitStatus === 'loading'}
                  className="w-full py-3 px-6 rounded-lg text-white font-semibold text-lg
                  bg-black hover:bg-gray-800 transition-all duration-300
                  disabled:opacity-60 disabled:cursor-not-allowed
                  flex items-center justify-center gap-2"
                >
                  {submitStatus === 'loading' || isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <FaPaperPlane className="text-lg" />
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 text-green-800 rounded-lg text-center border border-green-200">
                    {submitMessage}
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 text-red-800 rounded-lg text-center border border-red-200">
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 dark:bg-slate-900 dark:border-slate-800">
                <h3 className="text-xl font-bold mb-6 text-black dark:text-white">Direct Contact</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 dark:bg-slate-800 dark:text-gray-100">
                      <FaEnvelope />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <a href="mailto:dev.temilorun@gmail.com" className="text-gray-800 hover:text-gray-600 transition-colors font-medium dark:text-gray-100 dark:hover:text-white">
                        dev.temilorun@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 dark:bg-slate-800 dark:text-gray-100">
                      <FaPhone />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                      <a href="tel:+2347031225674" className="text-gray-800 hover:text-gray-600 transition-colors font-medium dark:text-gray-100 dark:hover:text-white">
                        +234 703 122 5674
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 dark:bg-slate-900 dark:border-slate-800">
                <h3 className="text-xl font-bold mb-6 text-black dark:text-white">Connect Online</h3>
                <div className="flex gap-6">
                  <a 
                    href="https://github.com/devTemilorun" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:text-black transition-all dark:bg-slate-800 dark:text-gray-100 dark:hover:bg-slate-700 dark:hover:text-white"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a 
                    href="https://wa.me/2347031225674" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:text-black transition-all dark:bg-slate-800 dark:text-gray-100 dark:hover:bg-slate-700 dark:hover:text-white"
                  >
                    <FaWhatsapp size={20} />
                  </a>
                  <a 
                    href="https://x.com/dev_Temilorun" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:text-black transition-all dark:bg-slate-800 dark:text-gray-100 dark:hover:bg-slate-700 dark:hover:text-white"
                  >
                    <FaXTwitter size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/olawuni-israel-oluwatemilorun-85714a324" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:text-black transition-all dark:bg-slate-800 dark:text-gray-100 dark:hover:bg-slate-700 dark:hover:text-white"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}