
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { ChevronLeft } from 'lucide-react';
import venues from '@/data/venuesData';
import { toast } from '@/components/ui/use-toast';

const eventTypes = [
  "Wedding",
  "Corporate Event",
  "Party",
  "Conference",
  "Gala",
  "Product Launch",
  "Retreat",
  "Other"
];

const Booking: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const venue = venues.find(v => v.id === id);
  
  const [formData, setFormData] = useState({
    eventType: '',
    date: '',
    startTime: '',
    endTime: '',
    name: '',
    email: '',
    phone: '',
    specialRequests: '',
    cleaning: false,
    bar: false,
    catering: false,
    decorators: false,
    projector: false,
    microphone: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, type, value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  
  // Calculate hours difference between start and end time
  const calculateHours = () => {
    if (!formData.startTime || !formData.endTime) return 0;
    
    const start = new Date(`2000-01-01T${formData.startTime}`);
    const end = new Date(`2000-01-01T${formData.endTime}`);
    
    if (end <= start) {
      return 0;
    }
    
    return (end.getTime() - start.getTime()) / (1000 * 60 * 60);
  };
  
  const hours = calculateHours();
  const subtotal = hours * (venue?.price || 0);
  const serviceFee = subtotal * 0.05; // 5% service fee
  const total = subtotal + serviceFee;
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate form
    if (!formData.eventType || !formData.date || !formData.startTime || !formData.endTime || 
        !formData.name || !formData.email || !formData.phone) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all required fields.",
      });
      setIsSubmitting(false);
      return;
    }
    
    // Mock booking submission
    setTimeout(() => {
      navigate('/confirmation', { state: { venue, formData, total } });
    }, 1500);
  };
  
  if (!venue) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Venue not found</h1>
        <p className="mb-6">The venue you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => navigate('/search')}>
          Return to Search
        </Button>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 border w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 border w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 p-2 border w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="mt-1 p-2 border w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Guests</label>
          <input
            type="number"
            name="guests"
            min="1"
            value={formData.guests}
            onChange={handleChange}
            className="mt-1 p-2 border w-full"
            required
          />
        </div>
        <Button type="submit">Book Now</Button>
      </form>
        
        {/* Booking Summary Card */}
        <div>
          <Card className="sticky top-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
              
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <img 
                    src={venue.images[0]} 
                    alt={venue.name}
                    className="w-16 h-16 object-cover rounded-md mr-3"
                  />
                  <div>
                    <h3 className="font-semibold">{venue.name}</h3>
                    <p className="text-sm text-gray-600">
                      {venue.location.city}, {venue.location.state}
                    </p>
                  </div>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              {/* Price Breakdown */}
              <div>
                <div className="flex justify-between mb-2">
                  <span>${venue.price} × {hours} hours</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Service fee</span>
                  <span>${serviceFee.toFixed(2)}</span>
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                
                <p className="text-xs text-gray-500 mt-2">
                  You won't be charged yet. Payment will be processed after confirmation.
                </p>
              </div>
              
              <Button 
                onClick={handleSubmit}
                className="w-full mt-6 bg-primary hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processing...' : 'Confirm Booking'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Booking;
