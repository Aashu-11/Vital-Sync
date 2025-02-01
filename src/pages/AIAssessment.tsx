import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Brain, Heart, Activity, ChevronRight, Dumbbell, Apple, Medal } from 'lucide-react';

export default function AIAssessment() {
  const [selectedAssessment, setSelectedAssessment] = useState<string | null>(null);
  const [progress, setProgress] = useState({
    mental: 65,
    physical: 78,
    lifestyle: 82
  });

  const assessments = [
    {
      icon: Brain,
      title: "Mental Health",
      description: "Assess your stress levels and emotional well-being",
      color: "from-violet-600 to-violet-400",
      metrics: ["Stress Level", "Sleep Quality", "Mood Patterns"],
    },
    {
      icon: Heart,
      title: "Physical Health",
      description: "Evaluate your fitness and vital signs",
      color: "from-emerald-600 to-emerald-400",
      metrics: ["Heart Rate", "BMI", "Activity Level"],
    },
    {
      icon: Activity,
      title: "Lifestyle Analysis",
      description: "Review your daily habits and routines",
      color: "from-blue-600 to-blue-400",
      metrics: ["Diet Quality", "Exercise Routine", "Work-Life Balance"],
    },
  ];

  const recentActivities = [
    {
      icon: Dumbbell,
      title: "Workout Plan Generated",
      description: "Custom HIIT program based on your fitness level",
      date: "2 hours ago",
    },
    {
      icon: Apple,
      title: "Nutrition Update",
      description: "New meal plan based on your preferences",
      date: "Yesterday",
    },
    {
      icon: Medal,
      title: "Achievement Unlocked",
      description: "Completed 7-day streak of assessments",
      date: "3 days ago",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 p-8"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-20 h-20 mx-auto mb-6 rounded-full  to-emerald-400 flex items-center justify-center"
          >
            <Bot className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-4xl font-bold text-white mb-4">AI Health Assessment</h1>
          <p className="text-white/70">Your personalized health journey starts here</p>
        </div>

        {/* Assessment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {assessments.map((assessment, index) => (
            <motion.div
              key={assessment.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedAssessment(assessment.title)}
              className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 cursor-pointer transform transition-all hover:scale-105 hover:bg-white/20"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${assessment.color} flex items-center justify-center mb-4`}>
                <assessment.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{assessment.title}</h3>
              <p className="text-white/70 mb-4">{assessment.description}</p>
              
              {/* Progress Bar */}
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  transition={{ duration: 1.5, delay: index * 0.2 }}
                  className={`h-full bg-gradient-to-r ${assessment.color}`}
                />
              </div>
              <div className="flex justify-between text-sm text-white/50">
                <span>Progress</span>
              </div>

              {/* Metrics */}
              <div className="mt-4 space-y-2">
                {assessment.metrics.map((metric, i) => (
                  <div key={i} className="flex items-center text-sm text-white/70">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/10 backdrop-blur-xl rounded-xl p-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Recent Activities</h2>
          <div className="space-y-6">
            {recentActivities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-600 to-emerald-400 flex items-center justify-center flex-shrink-0">
                  <activity.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-medium">{activity.title}</h4>
                  <p className="text-white/70 text-sm">{activity.description}</p>
                  <p className="text-white/50 text-xs mt-1">{activity.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating Action Button */}
        <div className="fixed bottom-8 right-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-emerald-400 text-white font-medium flex items-center space-x-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <Bot className="w-5 h-5" />
            <span>Start New Assessment</span>
          </motion.button>
        </div>

        {/* Assessment Modal */}
        <AnimatePresence>
          {selectedAssessment && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
              onClick={() => setSelectedAssessment(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-900/90 backdrop-blur-xl rounded-2xl p-8 max-w-2xl w-full mx-4 border border-white/20"
                onClick={e => e.stopPropagation()}
              >
                <h2 className="text-2xl font-bold text-white mb-6">{selectedAssessment} Assessment</h2>
                <p className="text-white/70 mb-6">Complete this assessment to receive personalized recommendations for your health journey.</p>
                <div className="space-y-4 mb-8">
                  {/* Sample assessment questions would go here */}
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="text-white mb-2">Question 1 of 5</p>
                    <p className="text-white/90 mb-4">How would you rate your current energy levels?</p>
                    <div className="flex gap-4">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <button
                          key={rating}
                          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                        >
                          {rating}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-4">
                  <button
                    onClick={() => setSelectedAssessment(null)}
                    className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-emerald-400 text-white hover:opacity-90 transition-opacity">
                    Continue
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}