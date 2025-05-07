
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
<div className="container mx-auto px-4 py-8">
  {/* Back navigation */}
  <Button 
    variant="ghost" 
    className="mb-4 pl-0 text-gray-600"
    onClick={() => navigate(-1)}
  >
    <ChevronLeft className="mr-1 h-4 w-4" />
    Back to venue
  </Button>

  <h1 className="text-3xl font-bold mb-8">Book {venue.name}</h1>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    {/* Booking Form */}
    <div className="lg:col-span-2">
      <form onSubmit={handleSubmit}>
        {/* Event Details */}
        <div className="bg-white rounded-lg border p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Event Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Event Type */}
            <div>
              <Label htmlFor="eventType">Event Type</Label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                required
              >
                <option value="">Select event type</option>
                {eventTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div>
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Start Time */}
            <div>
              <Label htmlFor="startTime">Start Time</Label>
              <Input
                id="startTime"
                type="time"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                required
              />
            </div>

            {/* End Time */}
            <div>
              <Label htmlFor="endTime">End Time</Label>
              <Input
                id="endTime"
                type="time"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="bg-white rounded-lg border p-6">
          <h2 className="text-xl font-semibold mb-4">Your Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="cleaning"
                name="cleaning"
                checked={formData.cleaning}
                onChange={handleChange}
                className="h-4 w-4"
              />
              <Label htmlFor="cleaning">Need Cleaning Service</Label>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <input
                type="checkbox"
                id="bar"
                name="bar"
                checked={formData.bar}
                onChange={handleChange}
                className="h-4 w-4"
              />
              <Label htmlFor="bar">Need Bar Service</Label>
            </div>
            <div className="mt-4">
              <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows={4}
                className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
              />
            </div>
          </div>

          <div className="lg:hidden mt-8">
            <Button type="submit" className="w-full bg-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Processing...' : 'Confirm Booking'}
            </Button>
          </div>
        </div>
      </form>
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
