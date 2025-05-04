
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Filter, Search, ArrowUpDown } from 'lucide-react';
import VenueCard from '@/components/VenueCard';
import venues from '@/data/venuesData';

// Common amenities for filtering
const AMENITIES = [
  'WiFi',
  'Parking',
  'Catering',
  'Sound System',
  'Outdoor Space',
  'Bar',
  'Dance Floor',
  'Kitchen',
];

// Event types for filtering
const EVENT_TYPES = [
  'Wedding',
  'Corporate',
  'Party',
  'Conference',
  'Reception',
  'Gala',
];

const SORT_OPTIONS = [
  { label: 'Price (Low to High)', value: 'price-asc' },
  { label: 'Price (High to Low)', value: 'price-desc' },
  { label: 'Capacity (Low to High)', value: 'capacity-asc' },
  { label: 'Capacity (High to Low)', value: 'capacity-desc' },
  { label: 'Rating (High to Low)', value: 'rating-desc' },
];

const SearchResults: React.FC = () => {
  const location = useLocation();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [filteredVenues, setFilteredVenues] = useState(venues);
  const [sortOption, setSortOption] = useState('price-asc');
  
  // Filter states
  const [searchQuery, setSearchQuery] = useState(location.state?.location || '');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [capacityRange, setCapacityRange] = useState<[number, number]>([0, 500]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [selectedEventTypes, setSelectedEventTypes] = useState<string[]>(
    location.state?.eventType ? [location.state.eventType] : []
  );
  
  // Apply filters when filter states change
  useEffect(() => {
    let result = venues;
    
    // Search query filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        venue => 
          venue.name.toLowerCase().includes(query) || 
          venue.location.city.toLowerCase().includes(query) ||
          venue.location.state.toLowerCase().includes(query)
      );
    }
    
    // Price range filter
    result = result.filter(
      venue => venue.price >= priceRange[0] && venue.price <= priceRange[1]
    );
    
    // Capacity range filter
    result = result.filter(
      venue => venue.capacity >= capacityRange[0] && venue.capacity <= capacityRange[1]
    );
    
    // Amenities filter
    if (selectedAmenities.length > 0) {
      result = result.filter(
        venue => selectedAmenities.every(amenity => venue.amenities.includes(amenity))
      );
    }
    
    // Event types filter
    if (selectedEventTypes.length > 0) {
      result = result.filter(
        venue => selectedEventTypes.some(eventType => 
          venue.eventTypes.map(et => et.toLowerCase()).includes(eventType.toLowerCase())
        )
      );
    }
    
    // Apply sorting
    switch (sortOption) {
      case 'price-asc':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'capacity-asc':
        result = [...result].sort((a, b) => a.capacity - b.capacity);
        break;
      case 'capacity-desc':
        result = [...result].sort((a, b) => b.capacity - a.capacity);
        break;
      case 'rating-desc':
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    
    setFilteredVenues(result);
  }, [searchQuery, priceRange, capacityRange, selectedAmenities, selectedEventTypes, sortOption]);
  
  // Toggle amenity selection
  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities(prev => 
      prev.includes(amenity) 
        ? prev.filter(a => a !== amenity) 
        : [...prev, amenity]
    );
  };
  
  // Toggle event type selection
  const toggleEventType = (eventType: string) => {
    setSelectedEventTypes(prev => 
      prev.includes(eventType) 
        ? prev.filter(et => et !== eventType) 
        : [...prev, eventType]
    );
  };
  
  // Toggle mobile filters
  const toggleMobileFilters = () => {
    setMobileFiltersOpen(prev => !prev);
  };
  
  // Reset all filters
  const resetFilters = () => {
    setSearchQuery('');
    setPriceRange([0, 500]);
    setCapacityRange([0, 500]);
    setSelectedAmenities([]);
    setSelectedEventTypes([]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Search Results</h1>
      
      {/* Top bar - Search and Sort */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
        <div className="relative w-full md:w-72">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <Input 
            type="text"
            placeholder="City, state, or venue name"
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex items-center space-x-2 w-full md:w-auto">
          <Button 
            variant="outline" 
            size="sm"
            className="md:hidden"
            onClick={toggleMobileFilters}
          >
            <Filter className="h-4 w-4 mr-2" /> Filters
          </Button>
          
          <div className="flex items-center space-x-2">
            <ArrowUpDown className="h-4 w-4 text-gray-400" />
            <select
              className="bg-transparent border-none text-sm focus:outline-none"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters Sidebar - Desktop */}
        <aside className="hidden md:block w-72 flex-shrink-0">
          <div className="bg-white p-4 rounded-lg border">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Filters</h2>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={resetFilters}
                className="text-xs text-gray-500"
              >
                Clear All
              </Button>
            </div>
            
            {/* Price Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Price per hour</h3>
              <Slider
                defaultValue={[0, 500]}
                min={0}
                max={500}
                step={10}
                value={priceRange}
                onValueChange={(value) => setPriceRange(value as [number, number])}
              />
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-500">${priceRange[0]}</span>
                <span className="text-xs text-gray-500">${priceRange[1]}</span>
              </div>
            </div>
            
            {/* Capacity Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Capacity</h3>
              <Slider
                defaultValue={[0, 500]}
                min={0}
                max={500}
                step={10}
                value={capacityRange}
                onValueChange={(value) => setCapacityRange(value as [number, number])}
              />
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-500">{capacityRange[0]} people</span>
                <span className="text-xs text-gray-500">{capacityRange[1]} people</span>
              </div>
            </div>
            
            {/* Event Type Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Event Type</h3>
              <div className="space-y-2">
                {EVENT_TYPES.map((eventType) => (
                  <div key={eventType} className="flex items-center">
                    <Checkbox
                      id={`event-${eventType}`}
                      checked={selectedEventTypes.includes(eventType)}
                      onCheckedChange={() => toggleEventType(eventType)}
                    />
                    <label
                      htmlFor={`event-${eventType}`}
                      className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {eventType}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Amenities Filter */}
            <div>
              <h3 className="text-sm font-medium mb-3">Amenities</h3>
              <div className="space-y-2">
                {AMENITIES.map((amenity) => (
                  <div key={amenity} className="flex items-center">
                    <Checkbox
                      id={`amenity-${amenity}`}
                      checked={selectedAmenities.includes(amenity)}
                      onCheckedChange={() => toggleAmenity(amenity)}
                    />
                    <label
                      htmlFor={`amenity-${amenity}`}
                      className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {amenity}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
        
        {/* Mobile Filters - Slide out */}
        {mobileFiltersOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
            <div className="bg-white h-full w-3/4 max-w-xs p-4 overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Filters</h2>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={toggleMobileFilters}
                  className="text-base"
                >
                  &times;
                </Button>
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                onClick={resetFilters}
                className="mb-4 text-xs"
              >
                Clear All Filters
              </Button>
              
              {/* Price Filter - Mobile */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Price per hour</h3>
                <Slider
                  defaultValue={[0, 500]}
                  min={0}
                  max={500}
                  step={10}
                  value={priceRange}
                  onValueChange={(value) => setPriceRange(value as [number, number])}
                />
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-gray-500">${priceRange[0]}</span>
                  <span className="text-xs text-gray-500">${priceRange[1]}</span>
                </div>
              </div>
              
              {/* Capacity Filter - Mobile */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Capacity</h3>
                <Slider
                  defaultValue={[0, 500]}
                  min={0}
                  max={500}
                  step={10}
                  value={capacityRange}
                  onValueChange={(value) => setCapacityRange(value as [number, number])}
                />
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-gray-500">{capacityRange[0]} people</span>
                  <span className="text-xs text-gray-500">{capacityRange[1]} people</span>
                </div>
              </div>
              
              {/* Event Type Filter - Mobile */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Event Type</h3>
                <div className="space-y-2">
                  {EVENT_TYPES.map((eventType) => (
                    <div key={eventType} className="flex items-center">
                      <Checkbox
                        id={`event-mobile-${eventType}`}
                        checked={selectedEventTypes.includes(eventType)}
                        onCheckedChange={() => toggleEventType(eventType)}
                      />
                      <label
                        htmlFor={`event-mobile-${eventType}`}
                        className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {eventType}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Amenities Filter - Mobile */}
              <div>
                <h3 className="text-sm font-medium mb-3">Amenities</h3>
                <div className="space-y-2">
                  {AMENITIES.map((amenity) => (
                    <div key={amenity} className="flex items-center">
                      <Checkbox
                        id={`amenity-mobile-${amenity}`}
                        checked={selectedAmenities.includes(amenity)}
                        onCheckedChange={() => toggleAmenity(amenity)}
                      />
                      <label
                        htmlFor={`amenity-mobile-${amenity}`}
                        className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {amenity}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <Button 
                  className="w-full bg-primary"
                  onClick={toggleMobileFilters}
                >
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>
        )}
        
        {/* Results Grid */}
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-4">
            Found {filteredVenues.length} venue{filteredVenues.length !== 1 ? 's' : ''}
          </p>
          
          {filteredVenues.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVenues.map(venue => (
                <VenueCard key={venue.id} venue={venue} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No venues found</h3>
              <p className="text-gray-500">Try adjusting your filters to find more options.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={resetFilters}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
