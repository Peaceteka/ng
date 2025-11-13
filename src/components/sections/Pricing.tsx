'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaCheck, FaCheckCircle, FaPaperPlane, FaRocket, FaStar, FaTrophy } from 'react-icons/fa';

type BillingCycle = 'monthly' | 'annually';

const pricingPlans = [
  {
    name: 'Developer',
    description: 'Perfect for testing and small projects',
    price: 'Free/month',
    subtitle: '$10 free credits',
    features: [
      '10,000 SMS messages',
      '1,000 WhatsApp messages',
      '5,000 Emails',
      'Basic API access',
      'Community support',
      'Standard documentation',
      'Rate limited to 10 msgs/sec'
    ],
    cta: 'Start Free',
    popular: false,
    color: 'from-blue-500 to-blue-600',
    hoverColor: 'from-blue-600 to-blue-700'
  },
  {
    name: 'Startup',
    description: 'For growing businesses and apps',
    price: 'USh29/month',
    subtitle: 'Pay-as-you-go pricing',
    features: [
      'Unlimited messages',
      'All channel APIs',
      'Advanced analytics',
      'Priority support',
      'Custom sender IDs',
      'Webhook support',
      'SDKs & libraries',
      'Up to 100 msgs/sec'
    ],
    cta: 'Get Started',
    popular: true,
    popularText: 'Most Popular',
    color: 'from-purple-500 to-indigo-600',
    hoverColor: 'from-purple-600 to-indigo-700'
  },
  {
    name: 'Business',
    description: 'For established companies at scale',
    price: 'USh99/month',
    subtitle: 'Volume discounts available',
    features: [
      'Everything in Startup',
      'Dedicated support',
      'Custom integrations',
      'Advanced routing',
      'Failover & redundancy',
      'SLA guarantees',
      'Bulk operations',
      'Up to 1,000 msgs/sec'
    ],
    cta: 'Get Started',
    popular: false,
    color: 'from-amber-500 to-orange-600',
    hoverColor: 'from-amber-600 to-orange-700'
  },
  {
    name: 'Enterprise',
    description: 'Custom solutions for large organizations',
    price: 'Custom',
    subtitle: 'Custom volume pricing',
    features: [
      'Everything in Business',
      'Dedicated infrastructure',
      'Custom SLAs',
      '24/7 phone support',
      'Account manager',
      'Custom contracts',
      'On-premise options',
      'Unlimited throughput'
    ],
    cta: 'Contact Sales',
    popular: false,
    color: 'from-gray-600 to-gray-800',
    hoverColor: 'from-gray-700 to-gray-900'
  }
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const toggleBillingCycle = () => {
    setBillingCycle(prev => prev === 'monthly' ? 'annually' : 'monthly');
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section 
      ref={ref}
      className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
      id="pricing"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-5">
        <div className="absolute inset-0 bg-grid-gray-400/20 dark:bg-grid-gray-700/50 [mask-image:linear-gradient(to_bottom,transparent,white,transparent)] dark:[mask-image:linear-gradient(to_bottom,transparent,rgba(0,0,0,0.5),transparent)]"></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 mb-4">
              <FaStar className="mr-2" />
              Simple, Transparent Pricing
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
              Pricing that scales with your business
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Start for free, upgrade as you grow. No hidden fees, cancel anytime.
            </p>
          </motion.div>
        </div>

        {/* Removed billing toggle */}

        <motion.div 
          className="grid gap-8 lg:grid-cols-4 lg:gap-6"
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl bg-white dark:bg-gray-800/50 backdrop-blur-sm border ${
                plan.popular 
                  ? 'border-2 border-blue-500 shadow-xl dark:shadow-blue-900/20' 
                  : 'border-gray-200 dark:border-gray-700'
              } overflow-hidden`}
              variants={item}
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              transition={{ duration: 0.3 }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -mt-3 -mr-3">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg">
                    <FaTrophy className="mr-1" /> {plan.popularText || 'Popular'}
                  </div>
                </div>
              )}
              
              <div className="p-6 sm:p-8">
                <div className={`mb-6 h-1 bg-gradient-to-r ${plan.color} rounded-full`}></div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-extrabold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                  </div>
                  {plan.subtitle && (
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {plan.subtitle}
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4">
                  <motion.button
                    className={`w-full px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r ${plan.color} hover:${plan.hoverColor} transition-all duration-300 flex items-center justify-center`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {plan.cta}
                    {plan.name === 'Developer' ? (
                      <FaRocket className="ml-2" />
                    ) : plan.name === 'Enterprise' ? (
                      <FaPaperPlane className="ml-2" />
                    ) : (
                      <FaCheck className="ml-2" />
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          className="mt-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 mb-4">
              <FaStar className="mr-2" />
              Common Questions
            </span>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
              Frequently asked questions
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to know about our pricing and plans. Can't find the answer you're looking for? 
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                question: 'Is there a free trial available?',
                answer: 'All plans come with a 14-day free trial. No credit card required.'
              },
              {
                question: 'Can I change plans later?',
                answer: 'Absolutely! You can upgrade or downgrade your plan at any time.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, PayPal, and bank transfers.'
              },
              {
                question: 'Do you offer discounts for non-profits?',
                answer: 'Yes, we offer special pricing for non-profit organizations. Please contact our sales team.'
              },
              {
                question: 'How does the free plan work?',
                answer: 'The Developer plan includes $10 free credits to test our platform with no time limit.'
              },
              {
                question: 'What support options are available?',
                answer: 'We offer email support for all plans, with priority support available on higher tiers.'
              },
              {
                question: 'Can I cancel anytime?',
                answer: 'Yes, you can cancel your subscription at any time with no hidden fees.'
              },
              {
                question: 'Is my data secure?',
                answer: 'We use enterprise-grade security and encryption to protect all your data.'
              }
            ].map((faq, index) => (
              <motion.div 
                key={index} 
                className="relative group cursor-pointer"
                whileHover={{ 
                  y: -4,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-sm group-hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 group-hover:border-blue-100 dark:group-hover:border-blue-900/50">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300 mr-3 mt-0.5">
                      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {faq.question}
                      </h4>
                      <motion.p 
                        className="mt-2 text-gray-600 dark:text-gray-300"
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ 
                          opacity: 1,
                          height: 'auto',
                          marginTop: '0.5rem',
                          transition: { duration: 0.3 }
                        }}
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Still have questions? Our team is here to help you 24/7.
            </p>
            <motion.a
              href="/contact"
              className="group inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-sm hover:shadow-md transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Support
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
