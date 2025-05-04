
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  MapPin,
  Users,
  Star,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Calendar
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import venues from '@/data/venuesData';

const VenueDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const venue = venues.find(v => v.id === id);
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAllImages, setShowAllImages] = useState(false);
  
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

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === venue.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? venue.images.length - 1 : prev - 1
    );
  };

  const handleBookNow = () => {
    navigate(`/booking/${venue.id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back to search */}
      <Button 
        variant="ghost" 
        className="mb-4 pl-0 text-gray-600"
        onClick={() => navigate(-1)}
      >
        <ChevronLeft className="mr-1 h-4 w-4" />
        Back to search
      </Button>

      {/* Image Gallery */}
      <div className="relative mb-8">
        {/* Main Image */}
        <div className="relative h-64 md:h-96 lg:h-[500px] overflow-hidden rounded-lg">
          <img
            src={venue.images[currentImageIndex]}
            alt={`${venue.name} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
          
          {/* Image Navigation */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {venue.images.map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrentImageIndex(i)}
              />
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white/90"
            onClick={prevImage}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white/90"
            onClick={nextImage}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        
        {/* Thumbnail Preview */}
        <div className="hidden md:flex gap-2 mt-2">
          {venue.images.slice(0, showAllImages ? venue.images.length : 4).map((image, i) => (
            <div 
              key={i}
              className={`w-24 h-16 rounded overflow-hidden cursor-pointer ${
                i === currentImageIndex ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setCurrentImageIndex(i)}
            >
              <img
                src={image}
                alt={`${venue.name} thumbnail ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          
          {!showAllImages && venue.images.length > 4 && (
            <button
              className="w-24 h-16 flex items-center justify-center bg-gray-100 rounded text-sm font-medium"
              onClick={() => setShowAllImages(true)}
            >
              +{venue.images.length - 4} more
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Venue Details */}
        <div className="lg:col-span-2">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold">{venue.name}</h1>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-500 mr-1" />
                <span className="font-semibold">{venue.rating}</span>
                <span className="text-gray-500 ml-1">({venue.reviews} reviews)</span>
              </div>
            </div>
            
            <div className="flex items-center text-gray-600 mb-4">
              <MapPin className="h-5 w-5 mr-1" />
              <span>
                {venue.location.address}, {venue.location.city}, {venue.location.state} {venue.location.zipCode}
              </span>
            </div>
            
            <div className="flex items-center text-gray-600">
              <Users className="h-5 w-5 mr-1" />
              <span>Up to {venue.capacity} guests</span>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          {/* Description */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <p className="text-gray-700 whitespace-pre-line">{venue.description}</p>
          </div>
          
          {/* Amenities */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3">
              {venue.amenities.map((amenity) => (
                <div key={amenity} className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* FAQs */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {venue.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          {/* Location Map Placeholder */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Location</h2>
            <div className="border rounded-md bg-gray-100 h-80 flex items-center justify-center">
              <p className="text-gray-500">Map view is not available in this MVP version</p>
            </div>
          </div>
        </div>
        
        {/* Booking Card */}
        <div>
          <Card className="sticky top-6">
            <CardContent className="p-6">
              <div className="mb-4 flex items-baseline justify-between">
                <div>
                  <span className="text-2xl font-bold">${venue.price}</span>
                  <span className="text-gray-500">/hour</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  <span>{venue.rating} ({venue.reviews})</span>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              {/* Availability Button */}
              <div className="mb-4">
                <div className="bg-gray-50 p-3 rounded-md flex items-center mb-4">
                  <Calendar className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="font-medium">Check availability</p>
                    <p className="text-sm text-gray-500">Select dates to see available time slots</p>
                  </div>
                </div>
                
                {/* Mock Calendar */}
                <div className="border rounded-md bg-gray-50 h-56 flex items-center justify-center mb-4">
                  <p className="text-gray-500">Calendar view in MVP version</p>
                </div>
              </div>
              
              {/* Book Now Button */}
              <Button 
                className="w-full bg-primary hover:bg-primary/90"
                onClick={handleBookNow}
              >
                Book This Venue
              </Button>
              
              <p className="text-center text-xs text-gray-500 mt-2">
                You won't be charged yet
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VenueDetail;
