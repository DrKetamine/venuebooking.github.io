
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What is TheVenueBooking?",
          answer: "TheVenueBooking is a self-service platform that connects event planners with venue owners. We make it easy to find, compare, and instantly book venues for weddings, corporate events, parties, and more."
        },
        {
          question: "How does TheVenueBooking work?",
          answer: "Our platform provides real-time availability and pricing for venues. You can search by location, date, capacity, and other filters, view detailed information about each venue, and book instantly without the need for back-and-forth communication."
        },
        {
          question: "Is TheVenueBooking available in my city?",
          answer: "We're rapidly expanding to major cities across the US. Currently, we're available in New York, Los Angeles, Chicago, Miami, San Francisco, and many more locations. Search with your location to see venues available in your area."
        }
      ]
    },
    {
      category: "Booking Process",
      questions: [
        {
          question: "How do I book a venue?",
          answer: "Search for venues based on your criteria, select a venue you like, check availability for your desired date and time, fill out the booking form with your event details, and confirm your booking. It's that simple!"
        },
        {
          question: "Can I visit a venue before booking?",
          answer: "While our platform is designed for direct booking, many venue owners offer virtual tours on their listings. If you'd like to visit in person, you can contact the venue owner through our messaging system after creating an account."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. Some venues may also accept direct bank transfers for larger events."
        },
        {
          question: "Is there a fee for using TheVenueBooking?",
          answer: "Our service is free for event planners. We charge venue owners a small service fee for bookings made through our platform."
        }
      ]
    },
    {
      category: "For Event Organizers",
      questions: [
        {
          question: "What information do I need to provide when booking?",
          answer: "You'll need to provide basic contact information, event details (date, time, type of event, number of guests), and payment information to secure your booking."
        },
        {
          question: "Can I modify or cancel my booking?",
          answer: "Yes, you can modify or cancel bookings through your account dashboard. Please note that each venue has its own modification and cancellation policy, which will be clearly displayed before you complete your booking."
        },
        {
          question: "Are there any hidden fees?",
          answer: "No. We're committed to transparency. All fees are clearly displayed during the booking process, and there are no hidden charges. The price you see is the price you pay."
        }
      ]
    },
    {
      category: "For Venue Owners",
      questions: [
        {
          question: "How do I list my venue on TheVenueBooking?",
          answer: "Register as a venue owner, create your venue profile with detailed information and high-quality photos, set your availability and pricing, and publish your listing. Our team may review your submission before it goes live."
        },
        {
          question: "What fees do you charge venue owners?",
          answer: "We charge a 5% service fee on bookings made through our platform. There are no monthly subscription fees or listing fees."
        },
        {
          question: "How do I manage bookings and availability?",
          answer: "After registering as a venue owner, you'll have access to a comprehensive dashboard where you can manage your venue listings, update availability, respond to inquiries, and process bookings."
        },
        {
          question: "When do I receive payment for bookings?",
          answer: "Payments are processed at the time of booking and are transferred to venue owners within 7 business days of the event's completion."
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
      
      <div className="max-w-3xl mx-auto">
        {faqs.map((category, index) => (
          <div key={index} className="mb-10">
            <h2 className="text-2xl font-bold mb-4">{category.category}</h2>
            
            <Accordion type="single" collapsible className="w-full">
              {category.questions.map((faq, faqIndex) => (
                <AccordionItem key={faqIndex} value={`${index}-${faqIndex}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
        
        <div className="mt-12 text-center">
          <h2 className="text-xl font-semibold mb-4">Still have questions?</h2>
          <p className="mb-6">Our team is here to help! Reach out to us for assistance.</p>
          <a href="/contact" className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
