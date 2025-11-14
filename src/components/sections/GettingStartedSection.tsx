'use client';

import { motion } from 'framer-motion';
import { FiCheckCircle, FiArrowRight, FiCode, FiSettings, FiSend, FiTrendingUp } from 'react-icons/fi';

const steps = [
  {
    number: '01',
    title: 'Sign Up & Get API Keys',
    description: 'Create your account and receive instant access to your API credentials. No waiting, no approval process.',
    icon: <FiCode className="h-6 w-6 text-blue-500" />
  },
  {
    number: '02',
    title: 'Configure Your Channels',
    description: 'Set up SMS, WhatsApp, and Email channels with our intuitive dashboard. Customize settings in minutes.',
    icon: <FiSettings className="h-6 w-6 text-purple-500" />
  },
  {
    number: '03',
    title: 'Send Your First Message',
    description: 'Use our APIs or dashboard to send your first message. Watch real-time delivery confirmations roll in.',
    icon: <FiSend className="h-6 w-6 text-green-500" />
  },
  {
    number: '04',
    title: 'Scale & Monitor',
    description: 'Leverage our analytics dashboard to optimize campaigns and scale to millions of messages seamlessly.',
    icon: <FiTrendingUp className="h-6 w-6 text-amber-500" />
  }
];

const StepCard = ({ step, index }: { step: typeof steps[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 p-0.5 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10 h-full rounded-2xl bg-white p-6">
        <div className="flex items-start">
          <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-lg font-bold text-white shadow-sm">
            {step.number}
          </div>
          
          <div>
            <div className="flex items-center">
              <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
              <div className="ml-3 rounded-full bg-green-50 p-1.5 text-green-500">
                {step.icon}
              </div>
            </div>
            <p className="mt-2 text-gray-600">{step.description}</p>
            
            {index < steps.length - 1 && (
              <div className="absolute -bottom-4 -right-4 -rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-8 w-8 text-blue-400">
                  <FiArrowRight className="h-full w-full" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const GettingStartedSection = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 mb-4">
            <FiCheckCircle className="mr-2 h-4 w-4" />
            Get Started in 5 Minutes
          </div>
          
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            From signup to sending your first message
          </h2>
          
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Our streamlined process gets you up and running faster than any other platform.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 rounded-2xl bg-gradient-to-r from-blue-50 to-blue-100 p-6 sm:p-8 w-full max-w-4xl mx-auto border border-blue-100">
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-900">Ready to get started?</h3>
              <p className="mt-1 text-gray-600">Join thousands of businesses that trust GreySilicon for their communication needs.</p>
            </div>
            <div className="flex-shrink-0">
              <motion.a
                href="/signup"
                className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 font-medium text-white shadow-md shadow-blue-500/20 transition-all hover:from-blue-500 hover:to-blue-600 hover:shadow-lg hover:shadow-blue-500/30"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Free Trial
                <FiArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GettingStartedSection;
