'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiExternalLink, FiZap } from 'react-icons/fi';

const integrations = [
  {
    name: 'CRM',
    description: 'Manage relationships with customers, clients, patients, or students. Used by businesses, hospitals, and schools.',
    category: 'Business',
    color: 'from-blue-500 to-blue-600',
    delay: 0.1,
    example: 'Salesforce, HubSpot, Zoho CRM, Bitrix24'
  },
  {
    name: 'ERP',
    description: 'Integrates key operations — finance, HR, inventory, procurement, and more. Used by businesses, hospitals, and government.',
    category: 'Business',
    color: 'from-purple-500 to-indigo-600',
    delay: 0.2,
    example: 'SAP, Oracle ERP, Odoo, Microsoft Dynamics 365'
  },
  {
    name: 'POS',
    description: 'Handle sales transactions, payments, and inventory updates. Perfect for retail, hospital pharmacies, and school canteens.',
    category: 'Retail',
    color: 'from-green-500 to-emerald-600',
    delay: 0.3,
    example: 'Square POS, Lightspeed, Toast, Vend'
  },
  {
    name: 'HMS',
    description: 'Comprehensive hospital management for patients, staff, appointments, billing, and pharmacy operations.',
    category: 'Healthcare',
    color: 'from-red-500 to-pink-600',
    delay: 0.4,
    example: 'MediTech, OpenMRS, eHospital, CareCloud'
  },
  {
    name: 'LMS',
    description: 'Deliver, track, and manage educational content and student performance. Ideal for schools and training centers.',
    category: 'Education',
    color: 'from-yellow-500 to-amber-600',
    delay: 0.5,
    example: 'Moodle, Google Classroom, Canvas, Blackboard'
  },
  {
    name: 'HRMS',
    description: 'Manage employee data, payroll, recruitment, performance, and leave for businesses and organizations.',
    category: 'Business',
    color: 'from-indigo-500 to-violet-600',
    delay: 0.6,
    example: 'BambooHR, Workday, Zoho People, OrangeHRM'
  },
];

const categories = ['All', 'Business', 'Retail', 'Healthcare', 'Education'];

const IntegrationCard = ({ integration, index }: { integration: typeof integrations[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: integration.delay }}
      className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="relative z-10 h-full rounded-2xl bg-white p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <div className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${integration.color} p-3`}>
              <div className="flex h-16 w-16 items-center justify-center">
                <span className="text-xl font-bold text-white">{integration.name}</span>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700">
                {integration.category}
              </div>
              <h3 className="mt-2 text-xl font-bold text-gray-900">{integration.name}</h3>
            </div>
          </div>
          <button className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors">
            <FiExternalLink className="h-5 w-5" />
          </button>
        </div>
        <p className="mt-4 text-gray-600">{integration.description}</p>
            <p className="mt-2 text-sm text-gray-500">
              <span className="font-medium text-gray-700">Examples:</span> {integration.example}
            </p>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex -space-x-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gray-100 shadow-sm"></div>
            ))}
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gray-100 text-xs text-gray-500 shadow-sm">+5</div>
          </div>
          <button className="group/btn flex items-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 text-sm font-medium text-white hover:from-blue-500 hover:to-blue-600">
            <span>Connect</span>
            <FiZap className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
      
      {/* Hover effect */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${integration.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
    </motion.div>
  );
};

export default function Integrations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="integrations" className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50"></div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
            <FiZap className="mr-2 h-4 w-4" />
            Powerful Integrations
          </div>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Connect with your favorite tools
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Seamlessly integrate GreySilicon with your existing workflow and boost productivity.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div 
          className="mt-12 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {categories.map((category, index) => (
            <button
              key={category}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                category === 'All'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Integration Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" ref={ref}>
          {integrations.map((integration, index) => (
            <IntegrationCard key={integration.name} integration={integration} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg text-gray-400">
            Don't see your platform? Our API is designed to work with any system.
          </p>
          <div className="mt-6">
            <motion.a
              href="#contact"
              className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 font-medium text-white shadow-lg shadow-blue-500/20 transition-all hover:from-blue-500 hover:to-blue-600 hover:shadow-xl hover:shadow-blue-500/30"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Request Integration
              <FiZap className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
