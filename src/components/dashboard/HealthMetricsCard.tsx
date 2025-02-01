import { motion } from 'framer-motion';
import { Activity, Droplets, Moon, Brain } from 'lucide-react';
import { HealthMetrics } from '../../types/health';

interface HealthMetricsCardProps {
  metrics: HealthMetrics;
}

export default function HealthMetricsCard({ metrics }: HealthMetricsCardProps) {
  const items = [
    {
      icon: Activity,
      label: 'Heart Rate',
      value: `${metrics.heartRate} bpm`,
      color: 'text-red-400',
    },
    {
      icon: Droplets,
      label: 'Hydration',
      value: `${metrics.hydration}%`,
      color: 'text-blue-400',
    },
    {
      icon: Moon,
      label: 'Sleep',
      value: `${metrics.sleep}h`,
      color: 'text-indigo-400',
    },
    {
      icon: Brain,
      label: 'Stress',
      value: `${metrics.stress}%`,
      color: 'text-violet-400',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20"
        >
          <div className="flex items-center space-x-4">
            <div className={`p-3 rounded-lg bg-white/10 ${item.color}`}>
              <item.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-white/70 text-sm">{item.label}</p>
              <p className="text-white text-2xl font-semibold">{item.value}</p>
            </div>
          </div>
          
          <div className="mt-4">
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className={`h-full ${item.color} bg-current`}
                initial={{ width: 0 }}
                animate={{ width: '70%' }}
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}