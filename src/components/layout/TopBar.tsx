import { motion } from 'framer-motion';
import { Menu, Bell, Search, User } from 'lucide-react';

interface TopBarProps {
  onMenuClick: () => void;
}

export default function TopBar({ onMenuClick }: TopBarProps) {
  return (
    <motion.header
      className="h-16 border-b border-white/20 bg-white/10 backdrop-blur-xl relative z-10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="h-full px-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <Menu className="w-5 h-5 text-white" />
          </button>

          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="
                w-64 px-4 py-2 pl-10 rounded-lg
                bg-white/10 border border-white/20
                text-white placeholder-white/50
                focus:outline-none focus:ring-2 focus:ring-violet-500
                transition-all duration-300
              "
            />
            <Search className="w-4 h-4 text-white/50 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <motion.button
            className="p-2 rounded-lg hover:bg-white/10 transition-colors relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Bell className="w-5 h-5 text-white" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-400 rounded-full" />
          </motion.button>

          <motion.button
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-600 to-emerald-400 flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <span className="text-white">Aayush Kolte</span>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}