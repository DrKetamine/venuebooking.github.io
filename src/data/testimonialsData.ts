
export interface Testimonial {
  id: string;
  name: string;
  position: string;
  avatar: string;
  text: string;
  eventType: string;
  venue: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    position: "Bride",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    text: "TheVenueBooking made finding our wedding venue so easy! We loved the instant availability feature and transparent pricing. No more waiting for venue managers to get back to us. Our wedding at Grand Harmony Hall was perfect!",
    eventType: "Wedding",
    venue: "Grand Harmony Hall"
  },
  {
    id: "2",
    name: "Michael Chen",
    position: "Event Director",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    text: "As a corporate event planner, efficiency is everything. This platform saved me countless hours of back-and-forth communication. Being able to book Urban Loft Space instantly for our product launch was a game-changer.",
    eventType: "Corporate Event",
    venue: "Urban Loft Space"
  },
  {
    id: "3",
    name: "Emma Rodriguez",
    position: "Birthday Celebrant",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    text: "I was planning my 30th birthday party and needed a venue fast. TheVenueBooking helped me find and book Riverside Pavilion within minutes! The transparent pricing meant no surprise fees, and everything was exactly as promised.",
    eventType: "Birthday Party",
    venue: "Riverside Pavilion"
  }
];

export default testimonials;
