import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Brain, Dumbbell, Radiation as Meditation, Apple, Users, MapPin, ChevronLeft, Bot } from 'lucide-react';

interface SidebarProps {
  onToggle: () => void;
}

const menuItems = [
  { path: '/dashboard', icon: LayoutDashboard, label: 'Home' },
  { path: '/ai-assessment', icon: Bot, label: 'AI Assessment' },
  { path: '/workouts', icon: Dumbbell, label: 'Yoga & Gym' },
  { path: '/meditation', icon: Meditation, label: 'Meditation' },
  { path: '/diet', icon: Apple, label: 'Diet Planner' },
  { path: '/community', icon: Users, label: 'Community' },
  { path: '/local-classes', icon: MapPin, label: 'Find Classes' },
];

export default function Sidebar({ onToggle }: SidebarProps) {
  const location = useLocation();

  return (
    <motion.div
      className="h-screen w-70 bg-white/10 backdrop-blur-xl border-r border-white/20 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <Link to="/dashboard" className="flex items-center space-x-3">
            <Brain className="w-8 h-8 text-emerald-400" />
            <span className="text-2xl font-bold text-white">VitalSync</span>
          </Link>
          <button
            onClick={onToggle}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
          </button>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className="block"
              >
                <motion.div
                  className={`
                    flex items-center space-x-3 px-4 py-3 rounded-lg
                    transition-colors duration-200
                    ${isActive ? 'bg-white/20 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'}
                  `}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <item.icon className={`w-5 h-5 ${isActive ? 'text-emerald-400' : ''}`} />
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      className="absolute left-0 w-1 h-8 bg-emerald-400 rounded-r-full"
                      layoutId="activeIndicator"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                      }}
                    />
                  )}
                </motion.div>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="p-4 rounded-lg bg-gradient-to-r from-violet-600/20 to-emerald-400/20 backdrop-blur-sm border border-white/10">
          <h4 className="text-white font-medium mb-2">Need Help?</h4>
          <p className="text-white/70 text-sm">
            Our AI assistant is here 24/7 to help you achieve your wellness goals.
          </p>
          <button className="mt-3 w-full px-4 py-2 rounded-lg bg-white/10 text-white text-sm hover:bg-white/20 transition-colors">
            Chat with AI
          </button>
        </div>
      </div>
    </motion.div>
  );
}