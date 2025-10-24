import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto py-10 px-4">
            <title>Toy-Topia | Privacy</title>
            <h2 className="text-3xl font-bold text-purple-700 mb-6">Privacy Policy</h2>
            <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                <p>We value your privacy. This policy explains how we collect, use, and protect your personal information when you use our platform.</p>
                <p>We collect basic information such as your name, email address, and profile photo when you register or log in. This data is used to personalize your experience and provide secure access.</p>
                <p>We do not sell, rent, or share your personal information with third parties except as required by law or to improve our services.</p>
                <p>All data is stored securely and access is restricted to authorized personnel only. We use Firebase Authentication to manage user accounts and protect your data.</p>
                <p>You have the right to update or delete your account information at any time. For assistance, contact our support team.</p>
                <p>We may update this policy occasionally. Continued use of the platform implies your acceptance of the updated policy.</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
