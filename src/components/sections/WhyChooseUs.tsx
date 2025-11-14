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
      className="relative py-20 overflow-hidden bg-white"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-700 bg-blue-50 rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Powering Africa's Digital Future
            </h2>
            <p className="mt-4 text-sm text-gray-500">
              No credit card required • Cancel anytime • 30-day free trial
            </p>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just a messaging platform - we're your strategic partner in connecting with Africa.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative group bg-white p-6 rounded-2xl border border-gray-100 hover:border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: feature.delay }}
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
            >
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
              
              {/* Hover accent */}
              <div className="absolute -right-4 -bottom-4 text-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaBolt className="h-12 w-12" />
              </div>
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
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started Free
              <FaBolt className="ml-2" />
            </motion.a>
            <motion.a
              href="/contact"
              className="px-8 py-4 bg-white text-gray-700 border border-gray-200 hover:border-blue-200 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Sales
              <FaBolt className="ml-2 text-blue-600" />
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
