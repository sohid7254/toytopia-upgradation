import React from "react";

const Support = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Header */}
            <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">Support & Help</h1>

            {/* FAQ Section */}
            <div className="mb-10">
                <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <details className="bg-gray-100 p-4 rounded-lg">
                        <summary className="cursor-pointer font-medium">How can I track my toy order?</summary>
                        <p className="mt-2 text-gray-700">You can track your order from the "Orders" section in your account dashboard.</p>
                    </details>

                    <details className="bg-gray-100 p-4 rounded-lg">
                        <summary className="cursor-pointer font-medium">What is Toytopia’s return policy?</summary>
                        <p className="mt-2 text-gray-700">We offer a 7-day return policy for unused toys in original packaging.</p>
                    </details>

                    <details className="bg-gray-100 p-4 rounded-lg">
                        <summary className="cursor-pointer font-medium">Do you provide international shipping?</summary>
                        <p className="mt-2 text-gray-700">Yes, Toytopia ships worldwide with standard delivery charges.</p>
                    </details>
                </div>
            </div>

            {/* Contact Form */}
            <div>
                <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                <form className="space-y-4">
                    <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    <textarea placeholder="Your Message" rows="4" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                    <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Support;
