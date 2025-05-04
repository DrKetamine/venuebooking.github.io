
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About TheVenueBooking</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            TheVenueBooking is transforming how people find and book event venues. Our mission is simple: make venue booking transparent, instant, and stress-free.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">Our Story</h2>
          <p className="mb-6">
            Founded in 2025, TheVenueBooking was born from the frustration of planning events and dealing with the time-consuming process of finding suitable venues. Our founders experienced firsthand the challenges of endless emails, phone calls, and waiting for quotes and availability information.
          </p>
          <p className="mb-6">
            We built TheVenueBooking to solve these problems by creating a platform where event organizers can instantly discover, compare, and book venues with complete transparency on pricing and availability.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">Our Mission</h2>
          <p className="mb-6">
            We're on a mission to simplify event planning by connecting event organizers with amazing venues through technology. By removing the friction and uncertainty from venue booking, we empower people to create memorable events without the stress.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">What Makes Us Different</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Instant Availability:</strong> See real-time venue availability and secure your date immediately.</li>
            <li><strong>Transparent Pricing:</strong> All costs are displayed upfront with no hidden fees or surprises.</li>
            <li><strong>Verified Venues:</strong> We personally vet all venues on our platform to ensure quality standards.</li>
            <li><strong>Simplified Booking:</strong> Book your venue in minutes, not days or weeks.</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">Our Team</h2>
          <p className="mb-6">
            TheVenueBooking is powered by a passionate team of event industry experts, tech innovators, and customer experience specialists. We're united by our commitment to transforming the event venue booking experience.
          </p>
          
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-6">Ready to find your perfect venue?</h2>
            <a href="/search" className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
              Start Searching
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
