import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FiSend } from 'react-icons/fi';

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
const USER_ID = import.meta.env.VITE_USER_ID;

emailjs.init(USER_ID);

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
        <section id="contact" className="py-16 px-4 bg-gray-950 text-white">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-center text-3xl font-bold mb-10">Let's Connect</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {['name', 'email'].map((field) => (
                        <div key={field} className="relative">
                            <input
                                type={field === 'email' ? 'email' : 'text'}
                                name={field}
                                id={field}
                                required
                                value={formData[field as 'name' | 'email']}
                                onChange={handleChange}
                                placeholder=" "
                                className="w-full px-4 pt-6 pb-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-600 peer"
                            />
                            <label
                                htmlFor={field}
                                className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm"
                            >
                                {field === 'name' ? 'Your Name' : 'Your Email'}
                            </label>
                        </div>
                    ))}

                    <div className="relative">
                        <textarea
                            name="message"
                            id="message"
                            rows={5}
                            required
                            value={formData.message}
                            onChange={handleChange}
                            placeholder=" "
                            className="w-full px-4 pt-6 pb-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-600 peer"
                        />
                        <label
                            htmlFor="message"
                            className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm"
                        >
                            Your Message
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full bg-purple-600 hover:bg-purple-400 transition-all px-6 py-3 rounded-md flex items-center justify-center gap-2 font-medium disabled:opacity-50"
                    >
                        <FiSend className="text-lg" />
                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>

                    {status === 'success' && (
                        <p className="text-center text-green-400">Message sent successfully!</p>
                    )}
                    {status === 'error' && (
                        <p className="text-center text-red-400">Something went wrong. Please try again.</p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;
