
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Calendar, MapPin, Clock, User, Mail, Phone } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Venue } from '@/data/venuesData';

interface LocationState {
  venue: Venue;
  formData: {
    eventType: string;
    date: string;
    startTime: string;
    endTime: string;
    name: string;
    email: string;
    phone: string;
    specialRequests: string;
  };
  total: number;
}

const Confirmation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState | null;
  
  useEffect(() => {
    // Redirect to home if user navigated here directly without state
    if (!state) {
      navigate('/');
    }
  }, [state, navigate]);
  
  if (!state) {
    return null;
  }
  
  const { venue, formData, total } = state;
  
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };
  
  // Generate a random booking ID
  const bookingId = `VB${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Booking Confirmed!</h1>
        <p className="text-gray-600">Your venue has been successfully booked. Below are your booking details.</p>
      </div>
      
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Booking Information</h2>
            <div className="text-right">
              <span className="block text-sm text-gray-500">Booking ID</span>
              <span className="font-medium">{bookingId}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex">
                <Calendar className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Date</p>
                  <p>{formatDate(formData.date)}</p>
                </div>
              </div>
              
              <div className="flex">
                <Clock className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Time</p>
                  <p>{formData.startTime} - {formData.endTime}</p>
                </div>
              </div>
              
              <div className="flex">
                <MapPin className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Venue</p>
                  <p>{venue.name}</p>
                  <p className="text-sm text-gray-600">
                    {venue.location.address}, {venue.location.city}, {venue.location.state} {venue.location.zipCode}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex">
                <User className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Booked By</p>
                  <p>{formData.name}</p>
                </div>
              </div>
              
              <div className="flex">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p>{formData.email}</p>
                </div>
              </div>
              
              <div className="flex">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Phone</p>
                  <p>{formData.phone}</p>
                </div>
              </div>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <div>
            <h3 className="font-medium mb-3">Event Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Event Type</p>
                <p>{formData.eventType}</p>
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-500">Venue Capacity</p>
                <p>Up to {venue.capacity} guests</p>
              </div>
            </div>
            
            {formData.specialRequests && (
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-500">Special Requests</p>
                <p className="bg-gray-50 p-3 rounded-md mt-1 text-sm">{formData.specialRequests}</p>
              </div>
            )}
          </div>
          
          <Separator className="my-6" />
          
          <div>
            <h3 className="font-medium mb-3">Payment Summary</h3>
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="flex justify-between mb-2">
                <span>Venue Rental</span>
                <span>${(total * 0.95).toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Service Fee</span>
                <span>${(total * 0.05).toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold mt-3 pt-3 border-t border-gray-200">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              A confirmation email has been sent to {formData.email}.
            </p>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <Button onClick={() => navigate('/dashboard')} variant="outline">
          View My Bookings
        </Button>
        <Button onClick={() => navigate('/')} className="bg-primary">
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default Confirmation;
