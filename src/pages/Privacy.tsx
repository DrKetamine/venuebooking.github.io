
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last Updated: May 4, 2025</p>
        
        <div className="prose max-w-none">
          <p className="mb-6">
            At TheVenueBooking, we take your privacy seriously. This Privacy Policy describes how we collect, use, and share your personal information when you use our website and services.
          </p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">Information We Collect</h2>
          <p className="mb-4">We collect information that you provide directly to us, including:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Personal information (name, email address, phone number)</li>
            <li>Account information when you register</li>
            <li>Transaction information when you book a venue</li>
            <li>Communications with us or venue owners through our platform</li>
            <li>Venue information if you list a venue on our platform</li>
          </ul>
          
          <p className="mb-4">We also automatically collect certain information when you use our website:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Usage information (pages visited, actions taken)</li>
            <li>Device information (IP address, browser type, operating system)</li>
            <li>Location information</li>
            <li>Cookies and similar technologies</li>
          </ul>
          
          <h2 className="text-xl font-bold mt-8 mb-4">How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send you technical notices, updates, and support messages</li>
            <li>Respond to your comments and questions</li>
            <li>Personalize your experience</li>
            <li>Monitor and analyze trends, usage, and activities</li>
            <li>Detect, prevent, and address fraud and other illegal activities</li>
            <li>Comply with legal obligations</li>
          </ul>
          
          <h2 className="text-xl font-bold mt-8 mb-4">Sharing of Information</h2>
          <p className="mb-4">We may share your information with:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Venue owners when you make a booking</li>
            <li>Service providers who perform services on our behalf</li>
            <li>Professional advisors (lawyers, accountants, etc.)</li>
            <li>In response to legal requirements</li>
            <li>In connection with a merger, sale, or acquisition</li>
          </ul>
          
          <h2 className="text-xl font-bold mt-8 mb-4">Your Choices</h2>
          <p className="mb-4">You have several choices regarding your information:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Account Information: You can update your account information through your account settings.</li>
            <li>Promotional Communications: You can opt out of receiving promotional emails by following the instructions in those emails.</li>
            <li>Cookies: You can modify your browser settings to decline cookies.</li>
          </ul>
          
          <h2 className="text-xl font-bold mt-8 mb-4">Data Retention</h2>
          <p className="mb-6">
            We store the information we collect about you for as long as necessary for the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
          </p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">Security</h2>
          <p className="mb-6">
            We implement reasonable measures to help protect your information from loss, theft, misuse, and unauthorized access. However, no security system is impenetrable, and we cannot guarantee the security of your information.
          </p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">Changes to this Policy</h2>
          <p className="mb-6">
            We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email or through our website prior to the changes becoming effective.
          </p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">Contact Us</h2>
          <p className="mb-6">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="mb-6">
            <strong>Email:</strong> privacy@thevenuebooking.com<br />
            <strong>Address:</strong> 123 Event Avenue, Suite 100, San Francisco, CA 94105
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
