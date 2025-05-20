// File: src/components/sections/Contact.tsx

import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        }, 1500);
    };

    return (
        <section id="contact" className="py-20 px-4 bg-gray-900">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
                    Contact Me
                </h2>
                <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6 text-left">
                    <div>
                        <label htmlFor="name" className="block text-gray-300 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-900 border-gray-700 text-white"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block  text-gray-300 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-900 border-gray-700 text-white"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block  text-gray-300 mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-900 border-gray-700 text-white"
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
                        <p className="mt-4  text-green-400">Message sent successfully!</p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;
