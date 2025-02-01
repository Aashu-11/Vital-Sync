import { motion } from 'framer-motion';
import { MapPin, Search, Star, Clock, DollarSign, Users } from 'lucide-react';
import { Button } from '../components/ui/Button';

const classes = [
  {
    id: 1,
    name: "Zen Yoga Studio",
    type: "Yoga",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=1000",
    rating: 4.8,
    reviews: 124,
    price: 25,
    distance: "0.8 miles",
    location: {
      lat: 18.9720,
      lng: 72.8512,
      address: "Colaba, Mumbai",
      color: "emerald"
    },
    schedule: [
      { time: "7:00 AM", available: 5 },
      { time: "9:00 AM", available: 3 },
      { time: "5:30 PM", available: 8 },
    ],
  },
  {
    id: 2,
    name: "PowerFit Gym",
    type: "Fitness",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000",
    rating: 4.6,
    reviews: 89,
    price: 30,
    distance: "1.2 miles",
    location: {
      lat: 18.9550,
      lng: 72.8350,
      address: "Worli, Mumbai",
      color: "violet"
    },
    schedule: [
      { time: "6:00 AM", available: 4 },
      { time: "12:00 PM", available: 6 },
      { time: "6:30 PM", available: 2 },
    ],
  },
  {
    id: 3,
    name: "MindBody Center",
    type: "Meditation",
    image: "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?auto=format&fit=crop&q=80&w=1000",
    rating: 4.9,
    reviews: 67,
    price: 20,
    distance: "1.5 miles",
    location: {
      lat: 18.9320,
      lng: 72.8330,
      address: "Bandra West, Mumbai",
      color: "amber"
    },
    schedule: [
      { time: "8:00 AM", available: 10 },
      { time: "2:00 PM", available: 7 },
      { time: "7:00 PM", available: 5 },
    ],
  },
];

export default function LocalClasses() {
  // Function to generate the OpenStreetMap URL with all markers
  const generateMapUrl = () => {
    const baseUrl = "https://www.openstreetmap.org/export/embed.html";
    const bbox = "?bbox=72.8012,18.9220,72.9012,19.0220";
    const markers = classes.map(c => 
      `&marker=${c.location.lat},${c.location.lng}`
    ).join('');
    return `${baseUrl}${bbox}&layer=mapnik${markers}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Find Local Classes</h1>
          <p className="text-white/70">Discover wellness classes near you</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="w-5 h-5 text-white/50 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search classes..."
              className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
          <Button variant="secondary">
            <MapPin className="w-4 h-4 mr-2" />
            Use My Location
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {classes.map((classItem, index) => (
          <motion.div
            key={classItem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/10 backdrop-blur-xl rounded-xl overflow-hidden border border-white/20"
          >
            <div className="relative h-48">
              <img
                src={classItem.image}
                alt={classItem.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xl text-white text-sm">
                {classItem.distance}
              </div>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{classItem.name}</h3>
                  <span className="text-white/70">{classItem.type}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-white font-medium">{classItem.rating}</span>
                  <span className="text-white/50">({classItem.reviews})</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-4 text-white/70">
                <div className="flex items-center">
                  <DollarSign className="w-4 h-4 mr-1" />
                  {classItem.price}/class
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  Limited spots
                </div>
              </div>

              <div className="space-y-2 mb-4">
                {classItem.schedule.map((slot) => (
                  <div
                    key={slot.time}
                    className="flex items-center justify-between p-2 bg-white/5 rounded-lg"
                  >
                    <div className="flex items-center text-white">
                      <Clock className="w-4 h-4 mr-2" />
                      {slot.time}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-emerald-400">{slot.available} spots</span>
                      <Button variant="ghost" size="sm">
                        Book
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="w-full">View Schedule</Button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        {[
          { label: "Yoga Studios", count: 12 },
          { label: "Fitness Centers", count: 8 },
          { label: "Meditation Spaces", count: 5 },
          { label: "Wellness Centers", count: 7 },
        ].map((category, index) => (
          <motion.div
            key={category.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20"
          >
            <h3 className="text-lg font-semibold text-white">{category.label}</h3>
            <p className="text-2xl font-bold text-white mt-2">{category.count}</p>
            <p className="text-white/50 text-sm">Near you</p>
          </motion.div>
        ))}
      </motion.div>

      {/* OpenStreetMap Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20"
      >
        <h3 className="text-xl font-semibold text-white mb-4">Class Locations</h3>
        <div className="h-[400px] rounded-lg overflow-hidden">
          <iframe
            title="Class Locations"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src={generateMapUrl()}
            style={{ border: 0 }}
          ></iframe>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-4">
          {classes.map((classItem) => (
            <motion.div
              key={classItem.id}
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/5 cursor-pointer group"
            >
              <MapPin className={`w-4 h-4 text-${classItem.location.color}-400`} />
              
              <div>
                <span className="text-sm text-white group-hover:text-white/90">{classItem.name}</span>
                <p className="text-xs text-white/50">{classItem.location.address}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}