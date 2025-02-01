import { motion } from 'framer-motion';
import { Moon, Sun, Cloud, Wind, Play, Pause, Clock } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../components/ui/Button';

const meditationSessions = [
  {
    title: "Morning Mindfulness",
    duration: "10 min",
    category: "Guided",
    image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=1000",
    icon: Sun,
  },
  {
    title: "Deep Relaxation",
    duration: "20 min",
    category: "Unguided",
    image: "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?auto=format&fit=crop&q=80&w=1000",
    icon: Moon,
  },
  {
    title: "Stress Relief",
    duration: "15 min",
    category: "Breathing",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1000",
    icon: Wind,
  },
  {
    title: "Sleep Better",
    duration: "30 min",
    category: "Guided",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1000",
    icon: Cloud,
  },
];

export default function Meditation() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl font-bold text-white mb-4">Meditation & Mindfulness</h1>
        <p className="text-white/70">Find your inner peace with guided meditation sessions</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/10 backdrop-blur-xl rounded-xl p-8 border border-white/20 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?auto=format&fit=crop&q=80&w=1000"
            alt="Featured meditation"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/90 to-emerald-900/90" />
        </div>

        <div className="relative flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Daily Meditation</h2>
            <p className="text-white/70 mb-4">10-minute guided session for inner peace</p>
            <div className="flex items-center space-x-4 text-white/70">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                10 minutes
              </div>
              <div className="flex items-center">
                <Moon className="w-4 h-4 mr-1" />
                Guided
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-white" />
            ) : (
              <Play className="w-8 h-8 text-white ml-1" />
            )}
          </motion.button>
        </div>

        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8"
          >
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "45%" }}
                transition={{ duration: 2 }}
                className="h-full bg-gradient-to-r from-violet-600 to-emerald-400"
              />
            </div>
            <div className="flex justify-between mt-2 text-white/50 text-sm">
              <span>4:30</span>
              <span>10:00</span>
            </div>
          </motion.div>
        )}
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {meditationSessions.map((session, index) => (
          <motion.div
            key={session.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-xl aspect-[4/5]"
          >
            <div className="absolute inset-0">
              <img
                src={session.image}
                alt={session.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
            </div>
            
            <div className="relative p-6 h-full flex flex-col justify-between">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center">
                <session.icon className="w-6 h-6 text-white" />
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{session.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-white/70">{session.duration}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="bg-white/10 hover:bg-white/20"
                  >
                    Start
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {[
          {
            title: "Mindfulness Streak",
            value: "7 days",
            icon: Sun,
            color: "from-violet-600 to-violet-400",
          },
          {
            title: "Total Minutes",
            value: "420 min",
            icon: Clock,
            color: "from-emerald-600 to-emerald-400",
          },
          {
            title: "Stress Reduction",
            value: "32%",
            icon: Wind,
            color: "from-blue-600 to-blue-400",
          },
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20"
          >
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white">{stat.title}</h3>
            <p className="text-2xl font-bold text-white mt-2">{stat.value}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}