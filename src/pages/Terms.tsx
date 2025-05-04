
import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        <p className="text-gray-500 mb-8">Last Updated: May 4, 2025</p>
        
        <div className="prose max-w-none">
          <p className="mb-6">
            Please read these Terms and Conditions carefully before using TheVenueBooking platform. By accessing or using our services, you agree to be bound by these Terms.
          </p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-6">
            By creating an account, booking a venue, listing a venue, or otherwise using TheVenueBooking, you agree to these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our services.
          </p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">2. User Accounts</h2>
          <p className="mb-4">When you create an account with us, you must provide accurate and complete information. You are responsible for:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Maintaining the confidentiality of your account credentials</li>
            <li>All activities that occur under your account</li>
            <li>Notifying us immediately of any unauthorized use of your account</li>
          </ul>
          <p className="mb-6">
            We reserve the right to disable any user account if we believe you have violated these Terms.
          </p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">3. Booking Services</h2>
          <p className="mb-4">For Event Organizers:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>You agree to provide accurate information when booking a venue.</li>
            <li>You are responsible for reviewing venue policies before booking.</li>
            <li>Cancellations and modifications are subject to the venue's specific policies.</li>
            <li>You agree to pay all fees associated with your booking.</li>
          </ul>
          
          <p className="mb-4">For Venue Owners:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>You agree to provide accurate information about your venue.</li>
            <li>You are responsible for maintaining accurate availability information.</li>
            <li>You agree to honor all bookings made through our platform.</li>
            <li>You agree to pay all applicable service fees.</li>
          </ul>
          
          <h2 className="text-xl font-bold mt-8 mb-4">4. Payment Terms</h2>
          <p className="mb-6">
            All payments are processed through our secure payment system. We charge a 5% service fee for each booking, which is deducted from the venue owner's payment. Payment methods and processing times are subject to our Payment Policy.
          </p>
          
          <h2 className="text-xl font-bol mt-8 mb-4">5. Prohibited Activities</h2>
          <p className="mb-4">You agree not to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Use our services for any illegal purpose</li>
            <li>Violate any laws or regulations</li>
            <li>Infringe on the rights of others</li>
            <li>Interfere with the proper functioning of our platform</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Post false, misleading, or deceptive content</li>
            <li>Harass, threaten, or abuse others</li>
          </ul>
          
          <h2 className="text-xl font-bold mt-8 mb-4">6. Intellectual Property</h2>
          <p className="mb-6">
            All content, features, and functionality on our platform are owned by TheVenueBooking and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our express permission.
          </p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">7. Limitation of Liability</h2>
          <p className="mb-6">
            TheVenueBooking is not responsible for the actions, content, information, or data of third parties. In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services.
          </p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">8. Disputes</h2>
          <p className="mb-6">
            Any dispute arising from these Terms shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall take place in San Francisco, California, and the language of arbitration shall be English.
          </p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">9. Changes to Terms</h2>
          <p className="mb-6">
            We reserve the right to modify these Terms at any time. If we make material changes, we will notify you by email or through our platform prior to the changes becoming effective.
          </p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">10. Contact Information</h2>
          <p className="mb-6">
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="mb-6">
            <strong>Email:</strong> legal@thevenuebooking.com<br />
            <strong>Address:</strong> 123 Event Avenue, Suite 100, San Francisco, CA 94105
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
