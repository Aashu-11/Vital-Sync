import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

const activities = [
  {
    time: '07:00 AM',
    title: 'Morning Yoga',
    description: 'Start your day with energizing poses',
    category: 'workout',
  },
  {
    time: '09:00 AM',
    title: 'Meditation Session',
    description: '15-minute mindfulness practice',
    category: 'meditation',
  },
  {
    time: '01:00 PM',
    title: 'Nutrition Check',
    description: 'Track your lunch and water intake',
    category: 'diet',
  },
  {
    time: '05:00 PM',
    title: 'Evening Workout',
    description: 'Strength training session',
    category: 'workout',
  },
];

const categoryColors = {
  workout: 'bg-violet-400',
  meditation: 'bg-emerald-400',
  diet: 'bg-blue-400',
};

export default function ActivityTimeline() {
  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Today's Schedule</h3>
        <div className="flex items-center space-x-2 text-white/70">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">March 14, 2024</span>
        </div>
      </div>

      <div className="space-y-6">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.time}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-white/20"
          >
            <div className={`absolute left-0 top-2 w-2 h-2 rounded-full ${categoryColors[activity.category as keyof typeof categoryColors]} transform -translate-x-1`} />
            
            <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-medium">{activity.title}</h4>
                <div className="flex items-center space-x-1 text-white/70">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{activity.time}</span>
                </div>
              </div>
              <p className="text-white/70 text-sm">{activity.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}