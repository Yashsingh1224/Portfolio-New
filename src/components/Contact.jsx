import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Terminal, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [terminalOutput, setTerminalOutput] = useState(null); // To show success/error logs

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTerminalOutput({ type: 'info', text: 'executing send_protocol...' });

        // REPLACE THESE WITH YOUR ACTUAL IDS FROM EMAILJS
        const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

        emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: "Yash",
                from_email: form.email,
                message: form.message,
            },
            PUBLIC_KEY
        )
            .then(() => {
                setLoading(false);
                setTerminalOutput({ type: 'success', text: 'Packet delivery successful. 200 OK.' });
                setForm({ name: '', email: '', message: '' }); // Clear form

                // Clear success message after 5 seconds
                setTimeout(() => setTerminalOutput(null), 5000);
            })
            .catch((error) => {
                setLoading(false);
                console.error(error);
                setTerminalOutput({ type: 'error', text: 'Error: Connection timed out. Packet lost.' });
            });
    };

    return (
        <section className="py-24 px-6 lg:px-20 bg-white dark:bg-dark-bg">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="w-full bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800"
                >
                    {/* Terminal Header */}
                    <div className="bg-gray-800 px-4 py-3 flex items-center gap-4 border-b border-gray-700">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="text-gray-400 text-sm font-mono flex items-center gap-2">
                            <Terminal size={14} />
                            bash — contact-me.sh
                        </div>
                    </div>

                    {/* Terminal Body */}
                    <div className="p-6 md:p-10 font-mono">
                        <div className="mb-6 text-gray-400">
                            <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> enter your message below to execute send:
                        </div>

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1">
                                    <label className="block text-gray-500 text-xs mb-1">// Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-gray-800/50 border border-gray-700 rounded p-3 text-green-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder-gray-700"
                                        placeholder="Syndicate"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-gray-500 text-xs mb-1">// Your Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-gray-800/50 border border-gray-700 rounded p-3 text-green-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder-gray-700"
                                        placeholder="syndicate.code12@gmail.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-500 text-xs mb-1">// Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-gray-800/50 border border-gray-700 rounded p-3 text-green-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder-gray-700"
                                    placeholder="System.out.println('Hello World!');"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="group flex items-center gap-2 bg-green-500/10 text-green-500 border border-green-500/50 px-6 py-2 rounded hover:bg-green-500 hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 size={16} className="animate-spin" />
                                        <span>$ executing...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>$ execute_send</span>
                                        <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Terminal Output / Success Message */}
                        {terminalOutput && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className={`mt-6 p-4 rounded border-l-4 ${terminalOutput.type === 'success'
                                    ? 'bg-green-500/10 border-green-500 text-green-400'
                                    : 'bg-red-500/10 border-red-500 text-red-400'
                                    }`}
                            >
                                <div className="flex items-center gap-2 text-sm">
                                    {terminalOutput.type === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                                    <span>{terminalOutput.text}</span>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;