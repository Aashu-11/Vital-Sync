import { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Brain, Dumbbell, HeartPulse, Star, Users, Apple, Award } from 'lucide-react'; // Add new icons
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useNavigate } from 'react-router-dom'; // Add this import

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) { // Accept onLogin prop
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Add this line

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'username' && password === 'password') {
      // Handle successful login
      console.log('Logged in successfully');
      onLogin(); // Call onLogin prop
      navigate('/dashboard'); 
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-violet-900 flex items-center justify-center p-4" // Plain violet background
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-violet-900" /> // Plain violet background
        <FloatingElements />
      </div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-6xl relative flex"
      >
        <div className="w-1/2 p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">"Your journey to wellness begins here"</h1>
          </div>
          <div className="space-y-6">
            <FeatureCard icon={HeartPulse} title="Health Monitoring" description="Track your heart rate, steps, and more with real-time data." />
            <FeatureCard icon={Dumbbell} title="Personalized Workouts" description="Get customized workout plans tailored to your fitness goals." />
            <FeatureCard icon={Brain} title="Mindfulness & Meditation" description="Access guided meditation sessions to improve your mental well-being." />
            <FeatureCard icon={Apple} title="Nutrition Tracking" description="Log your meals and monitor your daily nutritional intake." />
            <FeatureCard icon={Users} title="Community Support" description="Join a community of like-minded individuals for support and motivation." />
            <FeatureCard icon={Award} title="Achievements & Rewards" description="Earn badges and rewards for reaching your fitness milestones." />
          </div>
        </div>

        <div className="w-1/2 backdrop-blur-xl bg-white/10 p-8 rounded-2xl shadow-2xl border border-white/20 flex flex-col items-center justify-center"> {/* Add justify-center */}
          <div className="text-center mb-8">
            <HeartPulse className="w-16 h-16 text-white mx-auto mb-2" /> {/* Increase size */}
            <h1 className="text-4xl font-bold text-white mb-2">VitalSync</h1>
            <p className="text-white/80">Your journey to wellness begins here</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6 w-full">
            <Input
              label="Username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full"
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
            />

            <Button type="submit" className="w-full">
              Sign In
            </Button>
            <div className="text-white/70 text-center mt-4">
              <p>Username: <strong>username</strong></p>
              <p>Password: <strong>password</strong></p>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
}

interface FeatureCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg shadow-lg"
    >
      <Icon className="w-12 h-12 text-violet-400" />
      <div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </motion.div>
  );
}

function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4"
      >
        <Activity className="w-12 h-12 text-violet-400/30" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1/3 right-1/4"
      >
        <Brain className="w-16 h-16 text-emerald-400/30" />
      </motion.div>

      <motion.div
        animate={{
          y: [-20, 0, -20],
          rotate: [10, 0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 left-1/3"
      >
        <Dumbbell className="w-20 h-20 text-violet-500/30" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute top-1/2 right-1/3"
      >
      </motion.div>

      <motion.div
        animate={{
          y: [0, 25, 0],
          rotate: [0, -15, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute bottom-1/3 right-1/4"
      >
        <HeartPulse className="w-24 h-24 text-violet-600/30" /> {/* Increase size */}
      </motion.div>

      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 8, -8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute top-1/4 right-1/3"
      >
      </motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -12, 12, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
        className="absolute bottom-1/4 left-1/4"
      >
      </motion.div>
    </div>
  );
}