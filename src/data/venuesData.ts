
export interface Venue {
  id: string;
  name: string;
  location: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  price: number;
  capacity: number;
  amenities: string[];
  description: string;
  images: string[];
  rating: number;
  reviews: number;
  eventTypes: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  availabilityCalendar: {
    date: string;
    timeSlots: {
      start: string;
      end: string;
      isBooked: boolean;
    }[];
  }[];
}

const venues: Venue[] = [
  {
    id: "1",
    name: "Grand Harmony Hall",
    location: {
      address: "123 Main Street",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      coordinates: {
        lat: 40.7128,
        lng: -74.0060
      }
    },
    price: 250, // per hour
    capacity: 300,
    amenities: ["WiFi", "Parking", "Catering", "Sound System", "Projector", "Dance Floor", "Bar"],
    description: "Grand Harmony Hall is a beautiful, spacious venue perfect for large weddings and corporate events. The elegant chandeliers, marble flooring, and large windows create a sophisticated atmosphere that will impress your guests. Our venue also features a professional sound system and lighting for an unforgettable experience.",
    images: [
      "https://images.unsplash.com/photo-1551038247-3d9af20df552",
      "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
      "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
      "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    ],
    rating: 4.8,
    reviews: 124,
    eventTypes: ["Wedding", "Corporate", "Conference", "Gala"],
    faqs: [
      {
        question: "Do you provide catering services?",
        answer: "Yes, we offer full-service catering with a variety of menu options. You can also bring your own caterer for an additional fee."
      },
      {
        question: "Is parking available?",
        answer: "We offer free parking for up to 150 vehicles. Valet service is available for an additional fee."
      },
      {
        question: "What is your cancellation policy?",
        answer: "Cancellations made 60+ days before the event receive a 90% refund. 30-59 days before: 50% refund. Less than 30 days: no refund."
      }
    ],
    availabilityCalendar: [
      {
        date: "2025-05-15",
        timeSlots: [
          { start: "09:00", end: "12:00", isBooked: false },
          { start: "13:00", end: "16:00", isBooked: true },
          { start: "17:00", end: "20:00", isBooked: false },
          { start: "20:00", end: "23:00", isBooked: true }
        ]
      },
      {
        date: "2025-05-16",
        timeSlots: [
          { start: "09:00", end: "12:00", isBooked: false },
          { start: "13:00", end: "16:00", isBooked: false },
          { start: "17:00", end: "20:00", isBooked: false },
          { start: "20:00", end: "23:00", isBooked: false }
        ]
      }
    ]
  },
  {
    id: "2",
    name: "Riverside Pavilion",
    location: {
      address: "456 River Avenue",
      city: "Chicago",
      state: "IL",
      zipCode: "60601",
      coordinates: {
        lat: 41.8781,
        lng: -87.6298
      }
    },
    price: 180,
    capacity: 150,
    amenities: ["WiFi", "Outdoor Space", "Catering", "Sound System", "Bar", "Scenic Views"],
    description: "Riverside Pavilion offers stunning waterfront views and an elegant atmosphere for your special event. The floor-to-ceiling windows showcase the beautiful river and city skyline, creating a magical backdrop. The venue features both indoor and outdoor spaces, allowing your guests to enjoy the fresh air and scenic views.",
    images: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
      "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
    ],
    rating: 4.6,
    reviews: 89,
    eventTypes: ["Wedding", "Party", "Corporate", "Reception"],
    faqs: [
      {
        question: "Is the outdoor area covered?",
        answer: "The main outdoor pavilion is covered, but we also have open-air spaces. In case of inclement weather, we can move events to our indoor space."
      },
      {
        question: "Can we bring our own alcohol?",
        answer: "We have a full service bar, but you can bring your own alcohol for a corkage fee of $15 per bottle."
      },
      {
        question: "Are there noise restrictions?",
        answer: "Music must be lowered at 10 PM and ended by 11 PM due to local regulations."
      }
    ],
    availabilityCalendar: [
      {
        date: "2025-05-15",
        timeSlots: [
          { start: "10:00", end: "14:00", isBooked: true },
          { start: "15:00", end: "19:00", isBooked: false },
          { start: "20:00", end: "00:00", isBooked: false }
        ]
      },
      {
        date: "2025-05-16",
        timeSlots: [
          { start: "10:00", end: "14:00", isBooked: false },
          { start: "15:00", end: "19:00", isBooked: true },
          { start: "20:00", end: "00:00", isBooked: true }
        ]
      }
    ]
  },
  {
    id: "3",
    name: "Urban Loft Space",
    location: {
      address: "789 Industrial Blvd",
      city: "Los Angeles",
      state: "CA",
      zipCode: "90001",
      coordinates: {
        lat: 34.0522,
        lng: -118.2437
      }
    },
    price: 200,
    capacity: 120,
    amenities: ["WiFi", "Industrial Kitchen", "Exposed Brick", "High Ceilings", "Sound System", "Rooftop Access"],
    description: "Urban Loft Space is a trendy, modern venue with industrial charm. The exposed brick walls, large windows, and high ceilings create a unique atmosphere perfect for creative events. This versatile space can be transformed to match any style, from elegant weddings to casual corporate gatherings.",
    images: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    ],
    rating: 4.7,
    reviews: 76,
    eventTypes: ["Wedding", "Corporate", "Party", "Photoshoot", "Product Launch"],
    faqs: [
      {
        question: "Is the kitchen available for our caterers?",
        answer: "Yes, our industrial kitchen is available for your caterers to use. It includes commercial ovens, refrigeration, and prep space."
      },
      {
        question: "Do you have a preferred vendor list?",
        answer: "We have a list of recommended vendors but you're welcome to bring your own. All vendors must provide proof of insurance."
      },
      {
        question: "Is the space wheelchair accessible?",
        answer: "Yes, our venue is fully accessible with elevators to all floors including the rooftop."
      }
    ],
    availabilityCalendar: [
      {
        date: "2025-05-15",
        timeSlots: [
          { start: "08:00", end: "12:00", isBooked: false },
          { start: "13:00", end: "17:00", isBooked: false },
          { start: "18:00", end: "22:00", isBooked: true }
        ]
      },
      {
        date: "2025-05-16",
        timeSlots: [
          { start: "08:00", end: "12:00", isBooked: true },
          { start: "13:00", end: "17:00", isBooked: true },
          { start: "18:00", end: "22:00", isBooked: false }
        ]
      }
    ]
  },
  {
    id: "4",
    name: "Sunset Garden",
    location: {
      address: "1010 Palm Drive",
      city: "Miami",
      state: "FL",
      zipCode: "33101",
      coordinates: {
        lat: 25.7617,
        lng: -80.1918
      }
    },
    price: 220,
    capacity: 200,
    amenities: ["Outdoor Space", "Gardens", "Pool", "Lighting", "Parking", "Bridal Suite"],
    description: "Sunset Garden is a tropical paradise perfect for outdoor events. Our lush gardens, elegant pool area, and stunning sunset views create a magical atmosphere for weddings and special celebrations. The property features multiple outdoor spaces and a covered pavilion for ceremonies and receptions.",
    images: [
      "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      "https://images.unsplash.com/photo-1551038247-3d9af20df552",
      "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e"
    ],
    rating: 4.9,
    reviews: 112,
    eventTypes: ["Wedding", "Reception", "Party", "Corporate Retreat"],
    faqs: [
      {
        question: "What happens in case of rain?",
        answer: "We have a beautiful covered pavilion and indoor backup spaces that can accommodate your full guest count in case of inclement weather."
      },
      {
        question: "Are there accommodations nearby?",
        answer: "We have partnerships with several local hotels that offer special rates for our clients' guests."
      },
      {
        question: "Can we have a ceremony rehearsal?",
        answer: "Yes, we include a one-hour rehearsal time in all wedding packages, scheduled based on availability."
      }
    ],
    availabilityCalendar: [
      {
        date: "2025-05-15",
        timeSlots: [
          { start: "10:00", end: "15:00", isBooked: false },
          { start: "16:00", end: "21:00", isBooked: true }
        ]
      },
      {
        date: "2025-05-16",
        timeSlots: [
          { start: "10:00", end: "15:00", isBooked: true },
          { start: "16:00", end: "21:00", isBooked: false }
        ]
      }
    ]
  },
  {
    id: "5",
    name: "Mountain View Lodge",
    location: {
      address: "500 Highland Road",
      city: "Denver",
      state: "CO",
      zipCode: "80201",
      coordinates: {
        lat: 39.7392,
        lng: -104.9903
      }
    },
    price: 275,
    capacity: 180,
    amenities: ["Scenic Views", "Fireplace", "Outdoor Ceremony Space", "Rustic Decor", "Bar", "Bridal Suite", "Accommodation"],
    description: "Mountain View Lodge offers a rustic yet elegant venue with breathtaking mountain views. The beautiful wood beams, stone fireplace, and floor-to-ceiling windows create a warm, inviting atmosphere. Perfect for weddings and retreats, our venue combines natural beauty with modern amenities.",
    images: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
      "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
      "https://images.unsplash.com/photo-1500673922987-e212871fec22"
    ],
    rating: 4.8,
    reviews: 92,
    eventTypes: ["Wedding", "Retreat", "Corporate", "Family Reunion"],
    faqs: [
      {
        question: "Is lodging available on-site?",
        answer: "Yes, we have 15 rooms that can accommodate up to 40 guests. Additional lodging options are available nearby."
      },
      {
        question: "Can we have both our ceremony and reception here?",
        answer: "Absolutely! We offer ceremony sites with mountain backdrops and indoor/outdoor reception options."
      },
      {
        question: "Is the venue available year-round?",
        answer: "Yes, we operate year-round. Winter events feature cozy fireplaces and snow-capped mountain views, while summer events can utilize our expansive outdoor spaces."
      }
    ],
    availabilityCalendar: [
      {
        date: "2025-05-15",
        timeSlots: [
          { start: "10:00", end: "17:00", isBooked: true },
          { start: "18:00", end: "23:00", isBooked: false }
        ]
      },
      {
        date: "2025-05-16",
        timeSlots: [
          { start: "10:00", end: "17:00", isBooked: false },
          { start: "18:00", end: "23:00", isBooked: true }
        ]
      }
    ]
  },
  {
    id: "6",
    name: "Historic Opera House",
    location: {
      address: "300 Broadway Street",
      city: "Nashville",
      state: "TN",
      zipCode: "37201",
      coordinates: {
        lat: 36.1627,
        lng: -86.7816
      }
    },
    price: 320,
    capacity: 250,
    amenities: ["Stage", "Historic Architecture", "Premium Sound System", "Balcony", "Dressing Rooms", "Bar"],
    description: "The Historic Opera House is a landmark venue featuring stunning architecture and excellent acoustics. The ornate details, grand stage, and historical significance make this a unique setting for special events. Perfect for performances, weddings, and galas, this venue offers a touch of vintage elegance.",
    images: [
      "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
      "https://images.unsplash.com/photo-1551038247-3d9af20df552",
      "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
      "https://images.unsplash.com/photo-1500673922987-e212871fec22"
    ],
    rating: 4.7,
    reviews: 85,
    eventTypes: ["Wedding", "Concert", "Gala", "Theatrical Performance", "Corporate"],
    faqs: [
      {
        question: "Can we bring in outside entertainers?",
        answer: "Yes, our stage is perfect for bands, DJs, and other entertainers. We have professional sound and lighting systems available."
      },
      {
        question: "Is there a green room or dressing area?",
        answer: "We have three dressing rooms backstage with mirrors, lighting, and private bathrooms."
      },
      {
        question: "Does the venue have good acoustics?",
        answer: "Yes, our opera house was designed for optimal acoustics and has been preserved through careful restorations."
      }
    ],
    availabilityCalendar: [
      {
        date: "2025-05-15",
        timeSlots: [
          { start: "09:00", end: "16:00", isBooked: false },
          { start: "17:00", end: "23:00", isBooked: false }
        ]
      },
      {
        date: "2025-05-16",
        timeSlots: [
          { start: "09:00", end: "16:00", isBooked: true },
          { start: "17:00", end: "23:00", isBooked: true }
        ]
      }
    ]
  }
];

export default venues;
