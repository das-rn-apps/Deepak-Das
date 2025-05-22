// File: src/components/sections/Contact.tsx

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        emailjs
            .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
            .then(() => {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch(() => {
                setStatus('error');
            });
    };

    return (
        <section id="contact" className="py-20 px-4 bg-gray-900">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Contact Me</h2>
                <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6 text-left">
                    <div>
                        <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-900 border-gray-700 text-white"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-900 border-gray-700 text-white"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-900 border-gray-700 text-white"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition disabled:opacity-50"
                    >
                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>
                    {status === 'success' && (
                        <p className="mt-4 text-green-400">Message sent successfully!</p>
                    )}
                    {status === 'error' && (
                        <p className="mt-4 text-red-400">Something went wrong. Please try again.</p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;
