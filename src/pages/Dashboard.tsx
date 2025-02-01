import { motion } from 'framer-motion';
import { Dumbbell, Brain, Apple, Users, Award, Zap, Target, Crown, Flame, Heart } from 'lucide-react';
import HealthMetricsCard from '../components/dashboard/HealthMetricsCard';
import ActivityTimeline from '../components/dashboard/ActivityTimeline';

const mockHealthMetrics = {
  heartRate: 72,
  steps: 8432,
  calories: 1200,
  hydration: 75,
  sleep: 7.5,
  stress: 35,
  mood: 'happy' as const,
};

const quickActions = [
  {
    icon: Dumbbell,
    label: 'Start Workout',
    color: 'from-violet-600 to-violet-400',
  },
  {
    icon: Brain,
    label: 'Meditate',
    color: 'from-emerald-600 to-emerald-400',
  },
  {
    icon: Apple,
    label: 'Log Meal',
    color: 'from-blue-600 to-blue-400',
  },
  {
    icon: Users,
    label: 'Community',
    color: 'from-pink-600 to-pink-400',
  },
];

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-3xl font-bold text-white mb-2"
          >
            Welcome back, Aayush!
          </motion.h1>
          <motion.p
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/70"
          >
            Here's your health overview for today
          </motion.p>
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex space-x-4"
        >
          {quickActions.map((action, index) => (
            <motion.button
              key={action.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                px-4 py-3 rounded-xl
                bg-gradient-to-r ${action.color}
                text-white font-medium
                flex items-center space-x-2
                shadow-lg shadow-black/25
              `}
            >
              <action.icon className="w-5 h-5" />
              <span>{action.label}</span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <HealthMetricsCard metrics={mockHealthMetrics} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActivityTimeline />
        
        <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
          <h3 className="text-xl font-semibold text-white mb-6">AI Insights</h3>
          <div className="space-y-4">
            {[
              {
                title: "Hydration Alert",
                message: "You're slightly below your daily water goal. Consider drinking a glass of water now.",
                type: "warning",
              },
              {
                title: "Sleep Pattern",
                message: "Your sleep quality has improved by 15% this week. Keep maintaining your bedtime routine!",
                type: "success",
              },
              {
                title: "Workout Suggestion",
                message: "Based on your goals, we recommend a 30-minute strength training session today.",
                type: "info",
              },
            ].map((insight, index) => (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors"
              >
                <h4 className="text-white font-medium mb-2">{insight.title}</h4>
                <p className="text-white/70 text-sm">{insight.message}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievement Badges Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20"
      >
        <h3 className="text-xl font-semibold text-white mb-6">Achievement Badges</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              icon: Crown,
              name: "Fitness Royalty",
              description: "Completed 100 workouts",
              color: "bg-gradient-to-br from-yellow-400 to-amber-600"
            },
            {
              icon: Zap,
              name: "Power Warrior",
              description: "Hit personal records 10 times",
              color: "bg-gradient-to-br from-purple-500 to-indigo-600"
            },
            {
              icon: Target,
              name: "Goal Crusher",
              description: "Achieved all monthly targets",
              color: "bg-gradient-to-br from-emerald-400 to-green-600"
            },
            {
              icon: Flame,
              name: "Streak Master",
              description: "30-day workout streak",
              color: "bg-gradient-to-br from-red-400 to-rose-600"
            },
            {
              icon: Heart,
              name: "Wellness Guru",
              description: "Perfect health score for a week",
              color: "bg-gradient-to-br from-pink-400 to-rose-600"
            },
            {
              icon: Award,
              name: "Elite Athlete",
              description: "Top 1% in fitness rankings",
              color: "bg-gradient-to-br from-blue-400 to-indigo-600"
            }
          ].map((badge, index) => (
            <motion.div
              key={badge.name}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className={`p-3 rounded-full ${badge.color} mb-3 shadow-lg`}>
                <badge.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-1">{badge.name}</h4>
              <p className="text-white/70 text-sm">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}