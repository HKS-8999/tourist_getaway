import React, { useState } from 'react';

// Reusable Input component for the form
const Input = ({ id, name, type = 'text', placeholder, value, onChange, required = false, label }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1">
            {label}
        </label>
        <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className="w-full px-4 py-2.5 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-150 ease-in-out"
        />
    </div>
);

// Reusable Textarea component for the form
const Textarea = ({ id, name, placeholder, value, onChange, required = false, rows = 4, label }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1">
            {label}
        </label>
        <textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            rows={rows}
            className="w-full px-4 py-2.5 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-150 ease-in-out"
        />
    </div>
);

// Main ContactUsPage component
function ContactUsPage() {
    // State for form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    // State for submission status message
    const [submissionMessage, setSubmissionMessage] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation check
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setSubmissionMessage('Please fill out all fields.');
            return;
        }
        // Simulate form submission
        console.log('Form data submitted:', formData);
        setSubmissionMessage(`Thank you, ${formData.name}! Your message about "${formData.subject}" has been received.`);
        // Reset form fields
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Clear message after a few seconds
        setTimeout(() => setSubmissionMessage(''), 5000);
    };

    return (
        <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Get in Touch</h1>
                <p className="text-lg text-slate-600">
                    We'd love to hear from you! Whether you have a question about our packages, pricing, or anything else, our team is ready to answer all your questions.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
                {/* Contact Form Section */}
                <div className="bg-white p-8 rounded-xl shadow-2xl border border-slate-200">
                    <h2 className="text-2xl font-semibold text-slate-700 mb-6">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <Input
                            id="name"
                            name="name"
                            label="Full Name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            label="Email Address"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <Input
                            id="subject"
                            name="subject"
                            label="Subject"
                            placeholder="Question about a tour"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                        <Textarea
                            id="message"
                            name="message"
                            label="Your Message"
                            placeholder="Enter your message here..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                    {/* Submission message display area */}
                    {submissionMessage && (
                        <p className={`mt-4 text-sm p-3 rounded-md ${submissionMessage.startsWith('Thank') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {submissionMessage}
                        </p>
                    )}
                </div>

                {/* Contact Information Section */}
                <div className="space-y-8">
                    <div className="bg-white p-8 rounded-xl shadow-2xl border border-slate-200">
                        <h2 className="text-2xl font-semibold text-slate-700 mb-4">Contact Information</h2>
                        <p className="text-slate-600 mb-6">
                            Feel free to reach out to us through any of the following methods:
                        </p>
                        <ul className="space-y-4 text-slate-600">
                            <li className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-3 text-sky-600 shrink-0 mt-1">
                                    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                                    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                                </svg>
                                <div>
                                    <strong className="block text-slate-700">Email:</strong>
                                    <a href="mailto:info@touristgetaway.com" className="hover:text-sky-600 transition-colors">info@touristgetaway.com</a>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-3 text-sky-600 shrink-0 mt-1">
                                    <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.001c.063.263.01.54-.152.755L4.97 9.185A13.26 13.26 0 009.185 13.03l2.26-1.684a1.5 1.5 0 01.755-.152l3.001.716A1.5 1.5 0 0118 13.352V14.5a1.5 1.5 0 01-1.5 1.5h-1.054A13.94 13.94 0 012 3.5z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <strong className="block text-slate-700">Phone:</strong>
                                    <a href="tel:+1234567890" className="hover:text-sky-600 transition-colors">+1 (234) 567-890</a>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-3 text-sky-600 shrink-0 mt-1">
                                    <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.01a5.741 5.741 0 00.281-.145l.005-.002.001-.001L10 18.933zM10 20a1 1 0 01-.692-.29l-5.001-5A1 1 0 015 13.707V10a5 5 0 014.268-4.932A4.977 4.977 0 0110 5c.828 0 1.599.208 2.276.568A5 5 0 0115 10v3.707a1 1 0 01.308 1.002l-5.001 5A1 1 0 0110 20zm0-12.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <strong className="block text-slate-700">Address:</strong>
                                    123 Adventure Lane, Travel City, TC 54321
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-2xl border border-slate-200">
                        <h2 className="text-2xl font-semibold text-slate-700 mb-4">Business Hours</h2>
                        <ul className="space-y-2 text-slate-600">
                            <li><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</li>
                            <li><strong>Saturday:</strong> 10:00 AM - 4:00 PM</li>
                            <li><strong>Sunday:</strong> Closed</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUsPage;
