import { motion } from 'framer-motion';
import { Apple, Coffee, Utensils, Pizza, Plus, ChevronRight, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/Button';

const meals = [
  {
    type: "Breakfast",
    time: "8:00 AM",
    calories: 450,
    image: "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=1000",
    items: ["Oatmeal", "Banana", "Almonds"],
  },
  {
    type: "Lunch",
    time: "1:00 PM",
    calories: 650,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1000",
    items: ["Grilled Chicken", "Quinoa", "Vegetables"],
  },
  {
    type: "Dinner",
    time: "7:00 PM",
    calories: 550,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=1000",
    items: ["Salmon", "Brown Rice", "Broccoli"],
  },
];

const nutritionStats = [
  { label: "Calories", value: 1650, target: 2000, icon: Pizza, color: "text-orange-400" },
  { label: "Protein", value: 95, target: 120, unit: "g", icon: TrendingUp, color: "text-blue-400" },
  { label: "Carbs", value: 210, target: 250, unit: "g", icon: Apple, color: "text-green-400" },
  { label: "Fat", value: 55, target: 65, unit: "g", icon: Coffee, color: "text-yellow-400" },
];

export default function Diet() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Diet Planner</h1>
          <p className="text-white/70">Track your nutrition and maintain a healthy diet</p>
        </div>
        <Button className="flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Log Meal</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {nutritionStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20"
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
              <span className="text-white/50 text-sm">
                Target: {stat.target}{stat.unit || ''}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">{stat.label}</h3>
            <div className="flex items-end space-x-2">
              <span className="text-2xl font-bold text-white">
                {stat.value}
              </span>
              <span className="text-white/50 text-sm mb-1">
                {stat.unit || ''}
              </span>
            </div>
            <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(stat.value / stat.target) * 100}%` }}
                transition={{ delay: 0.5, duration: 1 }}
                className={`h-full ${stat.color} bg-current`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {meals.map((meal, index) => (
          <motion.div
            key={meal.type}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-xl"
          >
            <div className="absolute inset-0">
              <img
                src={meal.image}
                alt={meal.type}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
            </div>
            
            <div className="relative p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{meal.type}</h3>
                  <p className="text-white/70">{meal.time}</p>
                </div>
                <span className="text-emerald-400 font-semibold">
                  {meal.calories} cal
                </span>
              </div>
              
              <div className="space-y-2">
                {meal.items.map((item, i) => (
                  <div
                    key={item}
                    className="flex items-center space-x-2 text-white/70"
                  >
                    <Utensils className="w-4 h-4" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="secondary"
                className="mt-4 w-full flex items-center justify-between group-hover:bg-white/20"
              >
                <span>View Details</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20"
      >
        <h3 className="text-xl font-bold text-white mb-6">Weekly Progress</h3>
        <div className="grid grid-cols-7 gap-4">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
            <div key={day} className="text-center">
              <div className="text-white/70 mb-2">{day}</div>
              <motion.div
                className="h-32 bg-white/10 rounded-lg relative overflow-hidden"
                initial={{ height: 0 }}
                animate={{ height: 128 }}
                transition={{ delay: index * 0.1, duration: 1 }}
              >
                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-400 to-violet-600"
                  initial={{ height: 0 }}
                  animate={{ height: `${Math.random() * 100}%` }}
                  transition={{ delay: index * 0.1, duration: 1 }}
                />
              </motion.div>
              <div className="mt-2 text-white/50 text-sm">
                {Math.floor(1500 + Math.random() * 1000)}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}