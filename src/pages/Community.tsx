import { motion } from 'framer-motion';
import { MessageSquare, Heart, Share2, Users, Award, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/Button';

const posts = [
  {
    id: 1,
    author: {
      name: "Sanyogeeta",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
      badge: "Fitness Pro",
    },
    content: "Just completed a 30-day yoga challenge! Here's what I learned about consistency and mindfulness...",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000",
    likes: 234,
    comments: 45,
    shares: 12,
    category: "Success Story",
  },
  {
    id: 2,
    author: {
      name: "Harsh Patil",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
      badge: "Nutrition Expert",
    },
    content: "Quick tip: Start your day with a glass of warm lemon water to boost your metabolism and improve digestion...",
    image: "https://images.unsplash.com/photo-1507281549113-040fcfef650e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    likes: 156,
    comments: 23,
    shares: 8,
    category: "Nutrition Tips",
  },
  {
    id: 3,
    author: {
      name: "Aarya narang",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
      badge: "Wellness Coach",
    },
    content: "Looking for meditation buddies! Join our daily morning meditation sessions starting next week...",
    image: "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?auto=format&fit=crop&q=80&w=1000",
    likes: 89,
    comments: 34,
    shares: 5,
    category: "Community",
  },
  {
    id: 4,
    author: {
      name: "Hitanshu rathi",
      avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=150",
      badge: "Yoga Enthusiast",
    },
    content: "Exploring the benefits of daily yoga practice. Join me on this journey!",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 120,
    comments: 30,
    shares: 10,
    category: "Yoga",
  },
  {
    id: 5,
    author: {
      name: "Aayush Kolte",
      avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=150",
      badge: "Health Coach",
    },
    content: "Top 5 healthy snacks to keep you energized throughout the day.",
    image: "https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    likes: 200,
    comments: 40,
    shares: 15,
    category: "Nutrition",
  },
  {
    id: 6,
    author: {
      name: "Khyati sharma",
      avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=150",
      badge: "Fitness Trainer",
    },
    content: "Join our community workout sessions every weekend!",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000",
    likes: 180,
    comments: 50,
    shares: 20,
    category: "Fitness",
  },
 
  
];

export default function Community() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Community</h1>
          <p className="text-white/70">Connect with fellow wellness enthusiasts</p>
        </div>
        <Button className="flex items-center space-x-2">
          <MessageSquare className="w-4 h-4" />
          <span>New Post</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-xl rounded-xl overflow-hidden border border-white/20"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-white font-medium">{post.author.name}</h3>
                      <span className="text-emerald-400 text-sm">{post.author.badge}</span>
                    </div>
                  </div>
                  <span className="text-white/50 text-sm">{post.category}</span>
                </div>

                <p className="text-white/90 mb-4">{post.content}</p>

                {post.image && (
                  <img
                    src={post.image}
                    alt="Post content"
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                )}

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <Button variant="ghost" className="text-white/70 hover:text-white">
                    <Heart className="w-5 h-5 mr-2" />
                    {post.likes}
                  </Button>
                  <Button variant="ghost" className="text-white/70 hover:text-white">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    {post.comments}
                  </Button>
                  <Button variant="ghost" className="text-white/70 hover:text-white">
                    <Share2 className="w-5 h-5 mr-2" />
                    {post.shares}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20"
          >
            <h3 className="text-xl font-bold text-white mb-4">Community Stats</h3>
            <div className="space-y-4">
              {[
                { icon: Users, label: "Active Members", value: "2.4k" },
                { icon: MessageSquare, label: "Daily Posts", value: "156" },
                { icon: Award, label: "Success Stories", value: "432" },
                { icon: TrendingUp, label: "Monthly Growth", value: "+15%" },
              ].map((stat, index) => (
              <div key={stat.label} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white/70">{stat.label}</span>
                </div>
                <span className="text-white font-semibold">{stat.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20"
        >
          <h3 className="text-xl font-bold text-white mb-4">Trending Topics</h3>
          <div className="space-y-3">
            {[
              "30-Day Yoga Challenge",
              "Mindful Meditation",
              "Healthy Meal Prep",
              "Home Workouts",
              "Mental Wellness",
            ].map((topic, index) => (
              <div
                key={topic}
                className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              >
                <span className="text-white/90">{topic}</span>
                <span className="text-emerald-400 text-sm">
                  {Math.floor(Math.random() * 100 + 10)} posts
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}