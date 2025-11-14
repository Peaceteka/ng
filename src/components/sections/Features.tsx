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
const NotificationBubble = ({ 
  icon: Icon, 
  text, 
  delay, 
  position 
}: { 
  icon: any, 
  text: string, 
  delay: number, 
  position: { 
    top?: string, 
    right?: string, 
    bottom?: string, 
    left?: string 
  } 
}) => (
  <motion.div
    className="absolute flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-md"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ 
      opacity: [0, 1, 1, 0],
      scale: [0.9, 1.05, 1, 0.95],
      y: [0, -5, 0, 5]
    }}
    transition={{ 
      duration: 6,
      delay,
      repeat: Infinity,
      repeatDelay: 4,
      times: [0, 0.2, 0.8, 1]
    }}
    style={{
      ...position,
      zIndex: 10
    }}
  >
    <Icon className="h-4 w-4 text-blue-600" />
    <span className="text-sm font-medium text-gray-800">{text}</span>
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
    <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
      {/* Diagonal divider */}
      <div className="absolute -top-0.5 left-0 right-0 h-24 bg-white -skew-y-1 origin-top-left -z-10"></div>
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
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-gray-200/50" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to scale your messaging
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
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
                className="group relative bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                variants={item}
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04)' }}
              >
                <div className="absolute -top-6 left-8 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-md">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-8 text-xl font-semibold text-gray-900">{feature.name}</h3>
                <p className="mt-3 text-base text-gray-600 leading-relaxed">{feature.description}</p>
                {index % 2 === 0 && (
                  <div className="absolute -right-4 -bottom-4 h-32 w-32 rounded-full bg-blue-100/50 blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
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
          <div className="inline-block bg-white px-8 py-6 rounded-2xl border border-gray-100 shadow-sm">
            <p className="text-lg text-gray-700">
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
