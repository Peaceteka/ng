'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaBolt, FaShieldAlt, FaChartLine, FaCog, FaGlobeAfrica, FaHeadset } from 'react-icons/fa';

const features = [
  {
    icon: <FaBolt className="h-6 w-6" />,
    title: 'Lightning Fast',
    description: 'Blazing fast message delivery with 99.99% uptime',
    delay: 0.1
  },
  {
    icon: <FaShieldAlt className="h-6 w-6" />,
    title: 'Enterprise Security',
    description: 'End-to-end encryption and compliance with global standards',
    delay: 0.2
  },
  {
    icon: <FaChartLine className="h-6 w-6" />,
    title: 'Real-time Analytics',
    description: 'Powerful insights to optimize your messaging strategy',
    delay: 0.3
  },
  {
    icon: <FaCog className="h-6 w-6" />,
    title: 'Easy Integration',
    description: 'Simple API and comprehensive documentation',
    delay: 0.4
  },
  {
    icon: <FaGlobeAfrica className="h-6 w-6" />,
    title: 'Pan-African Reach',
    description: 'Direct connections to all major African networks',
    delay: 0.5
  },
  {
    icon: <FaHeadset className="h-6 w-6" />,
    title: '24/7 Support',
    description: 'Dedicated support team always ready to help',
    delay: 0.6
  }
];

const LightningBolt = () => {
  const [mounted, setMounted] = useState(false);
  const [positions] = useState(() => ({
    x1: Math.random() * 100,
    x2: Math.random() * 100,
    x3: Math.random() * 100,
    width1: Math.random() * 3 + 1,
    width2: Math.random() * 3 + 1,
    width3: Math.random() * 3 + 1,
  }));

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 overflow-hidden opacity-10" />;
  }

  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      {[1, 2, 3].map((_, i) => {
        const x = positions[`x${i + 1}` as keyof typeof positions];
        const width = positions[`width${i + 1}` as keyof typeof positions];
        
        return (
          <motion.div
            key={i}
            className="absolute h-full bg-gradient-to-b from-yellow-300 to-transparent"
            initial={{ x: `${x}%`, y: -100, opacity: 0 }}
            animate={{
              y: '100vh',
              opacity: [0, 0.7, 0],
              x: `${x}%`,
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
              repeatDelay: 3 + i * 2,
              ease: 'easeInOut'
            }}
            style={{
              left: `${x}%`,
              width: `${width}px`,
            }}
          />
        );
      })}
    </div>
  );
};

export default function WhyChooseUs() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <section 
      ref={ref}
      className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Animated background elements */}
      <LightningBolt />
      
      {/* Glowing orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-400 bg-blue-900/50 rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Powering Africa's Digital Future
            </h2>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just a messaging platform - we're your strategic partner in connecting with Africa.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative group bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: feature.delay }}
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
            >
              {/* Animated background effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
              
              {/* Lightning bolt accent */}
              <motion.div 
                className="absolute -right-4 -bottom-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  x: [0, -10, 10, 0],
                  y: [0, -5, 5, 0],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: 'mirror'
                }}
              >
                <FaBolt className="h-12 w-12 opacity-20" />
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <motion.a
              href="/get-started"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started Free
              <FaBolt className="ml-2" />
            </motion.a>
            <motion.a
              href="/contact"
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Talk to an Expert
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      {/* Custom animations */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
