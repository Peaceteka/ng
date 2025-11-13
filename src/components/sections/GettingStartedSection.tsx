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
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/0 p-0.5 backdrop-blur-sm"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10 h-full rounded-2xl bg-gradient-to-b from-gray-900 to-gray-800/80 p-6">
        <div className="flex items-start">
          <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-lg font-bold text-white">
            {step.number}
          </div>
          
          <div>
            <div className="flex items-center">
              <h3 className="text-xl font-bold text-white">{step.title}</h3>
              <div className="ml-3 rounded-full bg-green-900/30 p-1.5 text-green-400">
                {step.icon}
              </div>
            </div>
            <p className="mt-2 text-gray-400">{step.description}</p>
            
            {index < steps.length - 1 && (
              <div className="absolute -bottom-4 -right-4 -rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-8 w-8 text-blue-500">
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
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -right-1/4 -top-1/4 h-[800px] w-[800px] rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"></div>
        <div className="absolute -left-1/4 bottom-0 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl"></div>
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center rounded-full bg-blue-900/20 px-4 py-1.5 text-sm font-medium text-blue-400 mb-4">
            <FiCheckCircle className="mr-2 h-4 w-4" />
            Get Started in 5 Minutes
          </div>
          
          <h2 className="mt-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            From signup to sending your first message
          </h2>
          
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
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
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 p-6 sm:p-8 w-full max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="text-xl font-bold text-white">Ready to get started?</h3>
              <p className="mt-1 text-gray-400">Join thousands of businesses that trust GreySilicon for their communication needs.</p>
            </div>
            <div className="flex-shrink-0">
              <motion.a
                href="/signup"
                className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/20 transition-all hover:from-blue-500 hover:to-blue-600 hover:shadow-xl hover:shadow-blue-500/30"
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
