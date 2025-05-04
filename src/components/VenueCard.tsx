
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Users, Star } from 'lucide-react';
import { Venue } from '@/data/venuesData';

interface VenueCardProps {
  venue: Venue;
}

const VenueCard: React.FC<VenueCardProps> = ({ venue }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={venue.images[0]} 
          alt={venue.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute bottom-2 right-2">
          <div className="bg-white rounded-full px-2 py-1 flex items-center text-xs font-semibold">
            <Star className="h-3 w-3 text-yellow-500 mr-1" />
            {venue.rating}
            <span className="text-gray-500 ml-1">({venue.reviews})</span>
          </div>
        </div>
      </div>

      <CardContent className="pt-4 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-1 line-clamp-1">{venue.name}</h3>
          <div className="flex items-start mb-2">
            <MapPin className="h-4 w-4 text-gray-500 mr-1 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-600 line-clamp-1">
              {venue.location.city}, {venue.location.state}
            </span>
          </div>
          <div className="flex items-center mb-3">
            <Users className="h-4 w-4 text-gray-500 mr-1" />
            <span className="text-sm text-gray-600">Up to {venue.capacity} guests</span>
          </div>
        </div>

        <div className="mt-auto pt-3 border-t flex items-center justify-between">
          <div>
            <span className="text-lg font-semibold">${venue.price}</span>
            <span className="text-gray-500 text-sm">/hour</span>
          </div>
          <Link to={`/venue/${venue.id}`}>
            <Button variant="outline" size="sm">View Details</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default VenueCard;
