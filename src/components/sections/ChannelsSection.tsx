'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaSms, FaWhatsapp, FaEnvelope, FaGlobe, FaTachometerAlt, FaCheck, FaPaperPlane, FaChartLine, FaUsers, FaRocket } from 'react-icons/fa';

const channels = [
  {
    icon: <FaSms className="h-10 w-10" />,
    name: 'Bulk SMS',
    description: 'Send high-volume SMS campaigns with instant delivery across Africa',
    features: [
      'Global SMS delivery',
      'Sender ID customization',
      'Unicode support',
      'Delivery reports'
    ],
    stats: [
      { value: '99.9%', label: 'delivery' },
      { value: '<1s', label: 'speed' },
      { value: '15+ countries', label: 'coverage' }
    ],
    cta: 'Try Bulk SMS',
    gradient: 'from-purple-500 to-indigo-600',
    hoverGradient: 'from-purple-600 to-indigo-700'
  },
  {
    icon: <FaWhatsapp className="h-10 w-10" />,
    name: 'WhatsApp Business',
    description: 'Rich messaging with templates, buttons, and interactive media',
    features: [
      'WhatsApp Business API',
      'Rich media support',
      'Template messages',
      'Two-way conversations'
    ],
    stats: [
      { value: '4x higher', label: 'engagement' },
      { value: '2B+ users', label: 'reach' },
      { value: 'Real-time', label: 'response' }
    ],
    cta: 'Try WhatsApp Business',
    gradient: 'from-green-500 to-teal-600',
    hoverGradient: 'from-green-600 to-teal-700'
  },
  {
    icon: <FaEnvelope className="h-10 w-10" />,
    name: 'Email Campaigns',
    description: 'Professional email marketing with advanced analytics and automation',
    features: [
      'WYSIWYG editor',
      'A/B testing',
      'Automation workflows',
      'Analytics dashboard'
    ],
    stats: [
      { value: '98%', label: 'deliverability' },
      { value: 'Real-time', label: 'tracking' },
      { value: '500+', label: 'templates' }
    ],
    cta: 'Try Email Campaigns',
    gradient: 'from-amber-500 to-orange-600',
    hoverGradient: 'from-amber-600 to-orange-700'
  }
];

const FeatureItem = ({ text }: { text: string }) => (
  <motion.li 
    className="flex items-start py-1"
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
  >
    <FaCheck className="h-4 w-4 mt-1 mr-2 text-green-400 flex-shrink-0" />
    <span className="text-gray-200">{text}</span>
  </motion.li>
);

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <motion.div 
    className="text-center p-3 bg-white/5 rounded-lg backdrop-blur-sm"
    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
    transition={{ duration: 0.2 }}
  >
    <div className="text-xl font-bold text-white">{value}</div>
    <div className="text-xs text-gray-300 mt-1">{label}</div>
  </motion.div>
);

export default function ChannelsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Any channel. Anywhere.
          </motion.h2>
          <motion.p 
            className="mt-4 text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Connect with your customers on their preferred channels with our unified messaging platform
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {channels.map((channel, index) => (
            <motion.div
              key={channel.name}
              className={`group relative overflow-hidden rounded-2xl p-0.5 bg-gradient-to-br ${channel.gradient} ${channel.hoverGradient}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative bg-gray-900 p-6 h-full rounded-xl">
                <div className={`flex items-center justify-center h-20 w-20 rounded-2xl mb-6 bg-gradient-to-br ${channel.gradient} text-white`}>
                  {channel.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{channel.name}</h3>
                <p className="text-gray-300 mb-6">{channel.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {channel.features.map((feature, i) => (
                    <FeatureItem key={i} text={feature} />
                  ))}
                </ul>
                
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {channel.stats.map((stat, i) => (
                    <StatItem key={i} value={stat.value} label={stat.label} />
                  ))}
                </div>
                
                <motion.button
                  className={`w-full py-3 px-6 rounded-lg font-medium text-white bg-gradient-to-r ${channel.gradient} hover:opacity-90 transition-all duration-300 flex items-center justify-center`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {channel.cta}
                  <FaRocket className="ml-2" />
                </motion.button>
                
                <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
