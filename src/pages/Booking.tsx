
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
    <div className="container mx-auto px-4 py-8 md:py-12">
      <Button 
        variant="outline" 
        className="mb-6" 
        onClick={() => navigate(`/venue/${id}`)}
      >
        <ChevronLeft className="mr-1 h-4 w-4" /> Back to Venue
      </Button>
      
      <h1 className="text-2xl md:text-3xl font-bold mb-2">Book {venue.name}</h1>
      <p className="text-gray-600 mb-8">Fill in the details below to complete your booking</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Event Details Section */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  {/* New checkboxes for services */}
                  <div>
                    <Label className="block mb-2">Services</Label>
                    <div className="space-y-2">
                      <div>
                        <input
                          type="checkbox"
                          id="cleaning"
                          name="cleaning"
                          checked={formData.cleaning}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <Label htmlFor="cleaning">Cleaning</Label>
                      </div>
                      
                      <div>
                        <input
                          type="checkbox"
                          id="bar"
                          name="bar"
                          checked={formData.bar}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <Label htmlFor="bar">Bar</Label>
                      </div>
                      
                      <div>
                        <input
                          type="checkbox"
                          id="catering"
                          name="catering"
                          checked={formData.catering}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <Label htmlFor="catering">Catering</Label>
                      </div>
                      
                      <div>
                        <input
                          type="checkbox"
                          id="decorators"
                          name="decorators"
                          checked={formData.decorators}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <Label htmlFor="decorators">Decorators</Label>
                      </div>
                      
                      <div>
                        <input
                          type="checkbox"
                          id="projector"
                          name="projector"
                          checked={formData.projector}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <Label htmlFor="projector">Projector</Label>
                      </div>
                      
                      <div>
                        <input
                          type="checkbox"
                          id="microphone"
                          name="microphone"
                          checked={formData.microphone}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <Label htmlFor="microphone">Microphone</Label>
                      </div>
                    </div>
                  </div>
                  
                  {/* Special Requests Section */}
                  <div>
                    <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md mt-1 h-24"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
        </div>
        
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
