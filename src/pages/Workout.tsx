import { motion } from 'framer-motion';
import { Dumbbell, Play, Clock, Flame, ChevronRight, Star } from 'lucide-react';
import { Button } from '../components/ui/Button';

const workoutCategories = [
  {
    title: "Yoga Flow",
    duration: "30 min",
    calories: 150,
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "HIIT Training",
    duration: "45 min",
    calories: 400,
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Strength Training",
    duration: "60 min",
    calories: 300,
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000",
  },
];

export default function Workout() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Workout & Yoga</h1>
          <p className="text-white/70">Personalized workouts tailored to your goals</p>
        </div>
        <Button className="flex items-center space-x-2">
          <Play className="w-4 h-4" />
          <span>Quick Start</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {workoutCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-xl"
          >
            <div className="absolute inset-0">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
            </div>
            
            <div className="relative p-6 h-full flex flex-col justify-between min-h-[320px]">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                <div className="flex items-center space-x-4 text-white/70">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {category.duration}
                  </div>
                  <div className="flex items-center">
                    <Flame className="w-4 h-4 mr-1" />
                    {category.calories} cal
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < 3 ? 'text-yellow-400' : 'text-white/30'}`}
                      fill={i < 3 ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                <Button
                  variant="secondary"
                  className="w-full flex items-center justify-between group-hover:bg-white/20"
                >
                  <span>Start Workout</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20"
        >
          <h3 className="text-xl font-bold text-white mb-4">Weekly Progress</h3>
          <div className="space-y-4">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
              <div key={day} className="flex items-center">
                <span className="w-10 text-white/70">{day}</span>
                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.random() * 100}%` }}
                    transition={{ delay: index * 0.1, duration: 1 }}
                    className="h-full bg-gradient-to-r from-violet-600 to-emerald-400"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20"
        >
          <h3 className="text-xl font-bold text-white mb-4">Upcoming Classes</h3>
          <div className="space-y-4">
            {[
              { time: '10:00 AM', title: 'Morning Yoga', instructor: 'Khyati Sachdev' },
              { time: '2:00 PM', title: 'HIIT Cardio', instructor: 'Kanishk Ghai' },
              { time: '5:30 PM', title: 'Power Yoga', instructor: 'Sarah Sharma' },
            ].map((session, index) => (
              <motion.div
                key={session.time}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <div>
                  <p className="text-white font-medium">{session.title}</p>
                  <p className="text-white/50 text-sm">{session.instructor}</p>
                </div>
                <div className="text-right">
                  <p className="text-emerald-400">{session.time}</p>
                  <Button variant="ghost" size="sm" className="mt-1">
                    Join
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Trainer Communication Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20"
      >
        <h3 className="text-xl font-bold text-white mb-6">Connect with Expert Trainers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Fitness Trainers</h4>
            {[
              {
                name: "Katrina Patil",
                specialty: "HIIT & Strength",
                availability: "Available Now",
                image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=200",
                status: "online"
              },
              {
                name: "Dakshita Bhatt",
                specialty: "Bodyweight & Cardio",
                availability: "Available in 30m",
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
                status: "away"
              }
            ].map((trainer) => (
              <motion.div
                key={trainer.name}
                className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="relative">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-gray-900 ${
                    trainer.status === 'online' ? 'bg-emerald-400' : 'bg-yellow-400'
                  }`} />
                </div>
                <div className="flex-1">
                  <h5 className="text-white font-medium">{trainer.name}</h5>
                  <p className="text-white/70 text-sm">{trainer.specialty}</p>
                </div>
                <div className="text-right">
                  <span className="text-emerald-400 text-sm">{trainer.availability}</span>
                  <Button variant="ghost" size="sm" className="mt-1">
                    Chat Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Yoga Instructors</h4>
            {[
              {
                name: "Priya Sharma",
                specialty: "Vinyasa & Meditation",
                availability: "In Session",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
                status: "busy"
              },
              {
                name: "Krish Nayak",
                specialty: "Hatha & Yin Yoga",
                availability: "Available Now",
                image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=200",
                status: "online"
              }
            ].map((instructor) => (
              <motion.div
                key={instructor.name}
                className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="relative">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-gray-900 ${
                    instructor.status === 'online' ? 'bg-emerald-400' : instructor.status === 'busy' ? 'bg-red-400' : 'bg-yellow-400'
                  }`} />
                </div>
                <div className="flex-1">
                  <h5 className="text-white font-medium">{instructor.name}</h5>
                  <p className="text-white/70 text-sm">{instructor.specialty}</p>
                </div>
                <div className="text-right">
                  <span className={`text-sm ${
                    instructor.status === 'online' ? 'text-emerald-400' : instructor.status === 'busy' ? 'text-red-400' : 'text-yellow-400'
                  }`}>{instructor.availability}</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="mt-1"
                    disabled={instructor.status === 'busy'}
                  >
                    {instructor.status === 'busy' ? 'Notify Me' : 'Chat Now'}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}