import React from 'react';

const ContactUs = () => {
    return (
        <div className="max-w-4xl mx-auto p-10">
            <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-8">Contact Us</h1>
            <p className="text-lg text-gray-700 text-center mb-6">Have questions or need support? We’d love to hear from you!</p>

            <form className="space-y-6">
                <input type="text" placeholder="Your Name" className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <input type="email" placeholder="Your Email" className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <textarea placeholder="Your Message" rows="5" className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
                    Send Message
                </button>
            </form>

            <div className="mt-10 text-center">
                <h2 className="text-xl font-semibold mb-2">Other Ways to Reach Us</h2>
                <p className="text-gray-700">📧 Email: support@toytopia.com</p>
                <p className="text-gray-700">📞 Phone: +880-1234-567890</p>
                <p className="text-gray-700">🏢 Address: Toytopia HQ, Dhaka, Bangladesh</p>
            </div>
        </div>
    );
};

export default ContactUs;