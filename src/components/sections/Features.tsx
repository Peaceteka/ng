'use client';

import { BoltIcon, GlobeAltIcon, ServerIcon, ShieldCheckIcon, ChatBubbleLeftRightIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const features = [
  {
    name: 'Pan-African Reach',
    description:
      'Connect with customers across 50+ networks in Africa with a single API integration. We handle the complexity of local regulations and carrier relationships.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Enterprise-Grade Reliability',
    description:
      '99.9% uptime with built-in failover and intelligent routing. Your messages are delivered when they matter most.',
    icon: ServerIcon,
  },
  {
    name: 'Lightning Fast',
    description:
      'Low-latency message delivery optimized for African networks. Get messages delivered in milliseconds, not seconds.',
    icon: BoltIcon,
  },
  {
    name: 'Secure & Compliant',
    description:
      'End-to-end encryption and GDPR compliance. Your data is protected with enterprise-grade security measures.',
    icon: ShieldCheckIcon,
  },
];

// Floating notification component
const NotificationBubble = ({ icon: Icon, text, delay, position }: { icon: any, text: string, delay: number, position: { top: string, left: string } }) => (
  <motion.div
    className="absolute z-0 bg-gray-800/90 backdrop-blur-sm p-3 rounded-lg shadow-lg flex items-center space-x-2 border border-gray-700"
    initial={{ opacity: 0, y: 20, scale: 0.8 }}
    animate={{ 
      opacity: [0, 1, 1, 0],
      y: [20, 0, -10, -30],
      scale: [0.8, 1.1, 1, 0.9],
    }}
    transition={{ 
      duration: 6,
      delay,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 10
    }}
    style={position}
  >
    <Icon className="h-5 w-5 text-blue-500" />
    <span className="text-sm font-medium text-gray-200">{text}</span>
  </motion.div>
);

export default function Features() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation variants for the features
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="features" className="relative pt-24 pb-16 bg-gradient-to-b from-gray-900 to-gray-800 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Diagonal divider */}
      <div className="absolute -top-0.5 left-0 right-0 h-24 bg-gradient-to-b from-white/5 to-transparent -skew-y-1 origin-top-left"></div>
      <div className="absolute -top-0.5 left-0 right-0 h-24 bg-gray-900 -skew-y-1 origin-top-left -z-10"></div>
      {/* Animated background elements */}
      {mounted && (
        <>
          <NotificationBubble 
            icon={ChatBubbleLeftRightIcon} 
            text="New message from Kenya" 
            delay={0} 
            position={{ top: '15%', left: '10%' }} 
          />
          <NotificationBubble 
            icon={EnvelopeIcon} 
            text="Email notification" 
            delay={2} 
            position={{ top: '25%', right: '15%' }} 
          />
          <NotificationBubble 
            icon={PhoneIcon} 
            text="Incoming call" 
            delay={4} 
            position={{ bottom: '30%', left: '20%' }} 
          />
        </>
      )}
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10 [mask-image:linear-gradient(0deg,#000,transparent)]">
        <div className="absolute inset-0 bg-grid-blue-500/20 [mask-image:linear-gradient(0deg,#000,transparent_10%)]" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to scale your messaging
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Powerful features designed to help you build and scale your messaging infrastructure.
          </p>
        </motion.div>

        <motion.div 
          className="mt-16 relative z-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                className="group relative bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-700/50 hover:shadow-lg transition-all duration-300 hover:border-blue-500/30"
                variants={item}
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04)' }}
              >
                <div className="absolute -top-6 left-8 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/20">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-8 text-xl font-semibold text-white">{feature.name}</h3>
                <p className="mt-3 text-base text-gray-300 leading-relaxed">{feature.description}</p>
                {index % 2 === 0 && (
                  <div className="absolute -right-3 -bottom-3 h-24 w-24 rounded-full bg-blue-500/5 -z-10"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="mt-20 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-block bg-gray-800/60 backdrop-blur-sm px-8 py-6 rounded-2xl border border-gray-700/50 shadow-sm">
            <p className="text-lg text-gray-200">
              Need something more? Our platform is fully customizable to fit your exact requirements.
            </p>
            <div className="mt-4">
              <a
                href="#contact"
                className="inline-flex items-center text-base font-medium text-blue-600 hover:text-blue-700 group transition-colors"
              >
                Talk to an expert 
                <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
