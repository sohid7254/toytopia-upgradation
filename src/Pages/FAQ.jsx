import React from "react";

const faqs = [
    {
        question: "How can I track my toy order?",
        answer: "You can track your order from the 'Orders' section in your account dashboard. Once shipped, you’ll also receive a tracking ID via email.",
    },
    {
        question: "What is Toytopia’s return policy?",
        answer: "We offer a 7-day return policy for unused toys in original packaging. Refunds are processed within 3–5 business days.",
    },
    {
        question: "Do you provide international shipping?",
        answer: "Yes, Toytopia ships worldwide with standard delivery charges. Delivery times vary depending on the region.",
    },
    {
        question: "Are Toytopia toys safe for kids?",
        answer: "All our toys are tested and certified under international child safety standards (ASTM, EN71).",
    },
    {
        question: "Can I cancel my order after placing it?",
        answer: "Yes, you can cancel within 24 hours of placing the order. After that, cancellation depends on shipping status.",
    },
    {
        question: "Do you offer discounts for bulk purchases?",
        answer: "Absolutely! For schools, daycare centers, or bulk buyers, we provide special discounts. Contact support for details.",
    },
];

const FAQ = () => {
    return (
        <div className="max-w-5xl mx-auto p-10">
            {/* Header */}
            <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-10">Frequently Asked Questions</h1>

            {/* FAQ List */}
            <div className="space-y-6">
                {faqs.map((faq, index) => (
                    <details key={index} className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
                        <summary className="cursor-pointer font-semibold text-lg text-indigo-600">{faq.question}</summary>
                        <p className="mt-3 text-gray-700 leading-relaxed">{faq.answer}</p>
                    </details>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
