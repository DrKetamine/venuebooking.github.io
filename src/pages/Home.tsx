
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import {
  Calendar,
  MapPin,
  Search,
  CheckCircle,
  DollarSign,
  AlertCircle,
  Users
} from 'lucide-react';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import testimonials from '@/data/testimonialsData';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [searchLocation, setSearchLocation] = useState('');
  const [eventType, setEventType] = useState('');
  const [date, setDate] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/search', { state: { location: searchLocation, eventType, date } });
  };

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center h-[600px] md:h-[700px] flex items-center"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1551038247-3d9af20df552)', 
        }}
      >
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Find and book the perfect venue — instantly.
            </h1>
            <p className="text-xl text-white mb-8">
              Discover amazing spaces for weddings, corporate events, and parties with transparent pricing and no hidden fees.
            </p>
            
            {/* Search Bar */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input 
                    placeholder="Where?" 
                    className="pl-10"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input 
                    type="date" 
                    className="pl-10"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                
                <div>
                  <select 
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                  >
                    <option value="">Event Type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="party">Party</option>
                    <option value="conference">Conference</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="md:col-span-3">
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    <Search className="h-4 w-4 mr-2" /> Search Venues
                  </Button>
                </div>
              </form>
            </div>
            
            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
              <Button variant="default" size="lg" onClick={() => navigate('/search')} className="bg-primary hover:bg-primary/90">
                Search Venues
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate('/dashboard')} className="text-white border-white hover:bg-white/10">
                List Your Venue
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Book With Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full text-primary mb-4">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Instant Availability</h3>
                  <p className="text-gray-600">See real-time availability and book your venue immediately without waiting.</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Feature 2 */}
            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full text-primary mb-4">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
                  <p className="text-gray-600">Clear pricing with all fees displayed upfront. No hidden costs or surprises.</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Feature 3 */}
            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full text-primary mb-4">
                    <AlertCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No Hidden Fees</h3>
                  <p className="text-gray-600">What you see is what you pay. We're committed to honest, straightforward pricing.</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Feature 4 */}
            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full text-primary mb-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Trusted by Organizers</h3>
                  <p className="text-gray-600">Join thousands of event organizers who have successfully booked with us.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Users Say</h2>
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to find your perfect venue?</h2>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" onClick={() => navigate('/search')} className="bg-secondary text-black hover:bg-secondary/90">
              Explore Venues
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/dashboard')} className="text-white border-white hover:bg-white/10">
              Create an Account
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
