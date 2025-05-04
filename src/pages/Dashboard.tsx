
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { 
  Plus, 
  MapPin, 
  User,
  Calendar,
  PenBox,
  Trash,
  Upload,
  CheckCircle,
  Image
} from 'lucide-react';
import venues from '@/data/venuesData';

const Dashboard: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOwner, setIsOwner] = useState(true); // Default to venue owner view
  
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [accountType, setAccountType] = useState('owner');
  
  const [addVenueMode, setAddVenueMode] = useState(false);
  
  // Mock login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would verify credentials here
    setIsLoggedIn(true);
  };
  
  // Mock register
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would create a user here
    setIsLoggedIn(true);
    setIsOwner(accountType === 'owner');
  };
  
  // Mock logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setAddVenueMode(false);
  };
  
  // Toggle add venue mode
  const toggleAddVenueMode = () => {
    setAddVenueMode(!addVenueMode);
  };
  
  // Mock venue form submission
  const handleVenueSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would submit this data to create a new venue
    setAddVenueMode(false);
    alert('Venue added successfully!');
  };
  
  // If not logged in, show auth form
  if (!isLoggedIn) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Welcome to TheVenueBooking</h1>
          <p className="text-gray-600 mt-2">Sign in to your account or register to get started</p>
        </div>
        
        <Tabs defaultValue="login">
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="login">Log In</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleLogin}>
                  <div className="mb-4">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary">
                    Log In
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="register">
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleRegister}>
                  <div className="mb-4">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={registerName}
                      onChange={(e) => setRegisterName(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <Label htmlFor="registerEmail">Email</Label>
                    <Input
                      id="registerEmail"
                      type="email"
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <Label htmlFor="registerPassword">Password</Label>
                    <Input
                      id="registerPassword"
                      type="password"
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <Label>Account Type</Label>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <div 
                        className={`border rounded p-3 text-center cursor-pointer ${accountType === 'owner' ? 'border-primary bg-primary/5' : ''}`}
                        onClick={() => setAccountType('owner')}
                      >
                        <User className="h-5 w-5 mx-auto mb-1" />
                        <span className="text-sm">Venue Owner</span>
                      </div>
                      
                      <div 
                        className={`border rounded p-3 text-center cursor-pointer ${accountType === 'organizer' ? 'border-primary bg-primary/5' : ''}`}
                        onClick={() => setAccountType('organizer')}
                      >
                        <Calendar className="h-5 w-5 mx-auto mb-1" />
                        <span className="text-sm">Event Organizer</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary">
                    Register
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    );
  }

  // Venue owner dashboard
  if (isOwner) {
    // If in add venue mode, show the venue form
    if (addVenueMode) {
      return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="flex justify-between items-center mb-8">
            <Button 
              variant="ghost" 
              onClick={() => setAddVenueMode(false)}
            >
              &larr; Back to Venues
            </Button>
            <Button variant="ghost" onClick={handleLogout}>
              Log Out
            </Button>
          </div>
          
          <h1 className="text-3xl font-bold mb-8">Add New Venue</h1>
          
          <form onSubmit={handleVenueSubmit} className="space-y-8">
            {/* Basic Information */}
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="venueName">Venue Name</Label>
                  <Input id="venueName" required />
                </div>
                
                <div>
                  <Label htmlFor="venueCapacity">Capacity</Label>
                  <Input id="venueCapacity" type="number" min="1" required />
                </div>
                
                <div>
                  <Label htmlFor="venuePrice">Price per hour ($)</Label>
                  <Input id="venuePrice" type="number" min="1" step="0.01" required />
                </div>
                
                <div>
                  <Label htmlFor="venuePhone">Contact Phone</Label>
                  <Input id="venuePhone" required />
                </div>
              </div>
            </div>
            
            {/* Location */}
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4">Location</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="venueAddress">Street Address</Label>
                  <Input id="venueAddress" required />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="venueCity">City</Label>
                    <Input id="venueCity" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="venueState">State</Label>
                    <select 
                      id="venueState" 
                      className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                      required
                    >
                      <option value="">Select State</option>
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      {/* Add all states */}
                      <option value="NY">New York</option>
                      <option value="CA">California</option>
                      <option value="TX">Texas</option>
                      {/* ... */}
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="venueZip">ZIP Code</Label>
                    <Input id="venueZip" required />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              
              <div>
                <Label htmlFor="venueDescription">Venue Description</Label>
                <textarea 
                  id="venueDescription" 
                  className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  placeholder="Describe your venue..."
                  required
                />
              </div>
            </div>
            
            {/* Amenities */}
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4">Amenities</h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {['WiFi', 'Parking', 'Catering', 'Sound System', 'Projector', 'Dance Floor', 'Bar', 'Kitchen', 'Outdoor Space', 'Lighting', 'Stage', 'Accessible'].map((amenity) => (
                  <label key={amenity} className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                    <span>{amenity}</span>
                  </label>
                ))}
              </div>
            </div>
            
            {/* Event Types */}
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4">Suitable for Event Types</h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {['Wedding', 'Corporate', 'Party', 'Conference', 'Gala', 'Reception', 'Product Launch', 'Photoshoot'].map((type) => (
                  <label key={type} className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </div>
            
            {/* Images */}
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4">Images</h2>
              
              <div className="flex flex-wrap gap-4">
                {/* Image upload UI */}
                <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center cursor-pointer hover:border-primary">
                  <Upload className="h-8 w-8 text-gray-400" />
                  <span className="text-sm text-gray-500 mt-1">Add Photo</span>
                </div>
                {/* Mock existing image */}
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-32 h-32 relative group">
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <button className="p-1 bg-white rounded-full">
                        <PenBox className="h-4 w-4" />
                      </button>
                      <button className="p-1 bg-white rounded-full">
                        <Trash className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="w-full h-full bg-gray-200 rounded-md flex items-center justify-center">
                      <Image className="h-8 w-8 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-2">Upload at least 5 high-quality images of your venue.</p>
            </div>
            
            {/* Availability */}
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4">Availability</h2>
              
              <div>
                <p className="text-sm text-gray-600 mb-4">
                  Set your regular availability. You'll be able to block specific dates later from your dashboard.
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                    <label key={day} className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" defaultChecked={day !== 'Sunday'} />
                      <span>{day}</span>
                    </label>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <Label htmlFor="openTime">Opening Time</Label>
                    <Input type="time" id="openTime" defaultValue="09:00" />
                  </div>
                  
                  <div>
                    <Label htmlFor="closeTime">Closing Time</Label>
                    <Input type="time" id="closeTime" defaultValue="22:00" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end space-x-4">
              <Button type="button" variant="outline" onClick={() => setAddVenueMode(false)}>
                Cancel
              </Button>
              <Button type="submit" className="bg-primary">
                Save Venue
              </Button>
            </div>
          </form>
        </div>
      );
    }
    
    // Default venue owner dashboard
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Venue Owner Dashboard</h1>
          <Button variant="ghost" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
        
        <Tabs defaultValue="venues">
          <TabsList className="mb-8 w-full justify-start">
            <TabsTrigger value="venues">My Venues</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="settings">Account Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="venues">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Your Venues</h2>
              <Button 
                onClick={toggleAddVenueMode}
                className="bg-primary"
              >
                <Plus className="h-4 w-4 mr-2" /> Add New Venue
              </Button>
            </div>
            
            {venues.slice(0, 3).map((venue) => (
              <Card key={venue.id} className="mb-4">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-48 h-40">
                      <img 
                        src={venue.images[0]} 
                        alt={venue.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="p-4 flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-semibold text-lg">{venue.name}</h3>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <PenBox className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-600 mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{venue.location.city}, {venue.location.state}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-gray-100 text-xs px-2 py-1 rounded">${venue.price}/hr</span>
                        <span className="bg-gray-100 text-xs px-2 py-1 rounded">Capacity: {venue.capacity}</span>
                      </div>
                      
                      <div className="mt-3 flex items-center">
                        <span className="text-sm">Status:</span>
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3 mr-1" /> Active
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="bookings">
            <h2 className="text-xl font-semibold mb-6">Upcoming Bookings</h2>
            
            <div className="space-y-4">
              {[1, 2, 3].map((booking) => (
                <Card key={booking} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <div>
                        <p className="font-semibold">
                          Grand Harmony Hall - {booking === 1 ? 'Wedding' : booking === 2 ? 'Corporate Event' : 'Party'}
                        </p>
                        <p className="text-sm text-gray-600">
                          {new Date().toLocaleDateString()} • 2:00 PM - 7:00 PM
                        </p>
                        <div className="flex items-center mt-1">
                          <User className="h-4 w-4 mr-1 text-gray-500" /> 
                          <span className="text-sm">{booking === 1 ? 'Sarah Johnson' : booking === 2 ? 'Michael Chen' : 'Emma Rodriguez'}</span>
                        </div>
                      </div>
                      
                      <div className="mt-3 sm:mt-0">
                        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Confirmed
                        </div>
                        <p className="text-sm mt-1">
                          <span className="font-medium">Total:</span> ${booking * 100 + 500}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="settings">
            <div className="max-w-2xl">
              <h2 className="text-xl font-semibold mb-6">Account Settings</h2>
              
              <form className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="accountName">Full Name</Label>
                    <Input id="accountName" defaultValue="Jane Smith" />
                  </div>
                  
                  <div>
                    <Label htmlFor="accountEmail">Email</Label>
                    <Input id="accountEmail" type="email" defaultValue="jane@example.com" />
                  </div>
                  
                  <div>
                    <Label htmlFor="accountPhone">Phone</Label>
                    <Input id="accountPhone" defaultValue="(555) 123-4567" />
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="font-medium">Change Password</h3>
                  
                  <div>
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  
                  <div>
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  
                  <div>
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button type="submit" className="bg-primary">
                    Save Changes
                  </Button>
                </div>
              </form>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    );
  }
  
  // Event organizer dashboard
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Event Organizer Dashboard</h1>
        <Button variant="ghost" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
      
      <Tabs defaultValue="bookings">
        <TabsList className="mb-8 w-full justify-start">
          <TabsTrigger value="bookings">My Bookings</TabsTrigger>
          <TabsTrigger value="favorites">Favorite Venues</TabsTrigger>
          <TabsTrigger value="settings">Account Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="bookings">
          <h2 className="text-xl font-semibold mb-6">Your Upcoming Events</h2>
          
          {/* Mock bookings */}
          {[1, 2].map((booking) => (
            <Card key={booking} className="mb-4">
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-40 h-32 mb-4 md:mb-0 md:mr-4">
                    <img 
                      src={venues[booking].images[0]} 
                      alt={venues[booking].name}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{venues[booking].name}</h3>
                        <p className="text-sm text-gray-600">
                          {venues[booking].location.city}, {venues[booking].location.state}
                        </p>
                        <p className="mt-2">
                          <span className="font-medium">Date:</span> May {10 + booking}, 2025
                        </p>
                        <p>
                          <span className="font-medium">Time:</span> 2:00 PM - 8:00 PM
                        </p>
                      </div>
                      
                      <div className="mt-3 md:mt-0 md:text-right">
                        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-2">
                          Confirmed
                        </div>
                        <p>
                          <span className="font-medium">Event Type:</span> {booking === 1 ? 'Corporate Event' : 'Wedding'}
                        </p>
                        <p>
                          <span className="font-medium">Total Paid:</span> ${booking * 200 + 1000}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        Contact Venue
                      </Button>
                      <Button variant="outline" size="sm">
                        Cancel Booking
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="favorites">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Your Favorite Venues</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {venues.slice(3, 6).map(venue => (
              <Card key={venue.id} className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={venue.images[0]} 
                    alt={venue.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-semibold">{venue.name}</h3>
                  <p className="text-sm text-gray-600">
                    {venue.location.city}, {venue.location.state}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span>${venue.price}/hr</span>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="settings">
          <div className="max-w-2xl">
            <h2 className="text-xl font-semibold mb-6">Account Settings</h2>
            
            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="accountName">Full Name</Label>
                  <Input id="accountName" defaultValue="Mark Wilson" />
                </div>
                
                <div>
                  <Label htmlFor="accountEmail">Email</Label>
                  <Input id="accountEmail" type="email" defaultValue="mark@example.com" />
                </div>
                
                <div>
                  <Label htmlFor="accountPhone">Phone</Label>
                  <Input id="accountPhone" defaultValue="(555) 987-6543" />
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="font-medium">Change Password</h3>
                
                <div>
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                
                <div>
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" type="password" />
                </div>
                
                <div>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button type="submit" className="bg-primary">
                  Save Changes
                </Button>
              </div>
            </form>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
