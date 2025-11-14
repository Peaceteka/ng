'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useCountry } from '@/context/CountryContext';

// Star component for the background
const Star = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [styles, setStyles] = useState({});
  
  useEffect(() => {
    setIsMounted(true);
    setStyles({
      width: `${Math.random() * 3 + 1}px`,
      height: `${Math.random() * 3 + 1}px`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.5 + 0.1,
      animation: `twinkle ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`
    });
  }, []);
  
  if (!isMounted) return null;
  
  return (
    <div 
      className="absolute rounded-full bg-blue-100"
      style={styles}
    />
  );
};

// Bubble component for the background
const Bubble = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [styles, setStyles] = useState({});
  
  useEffect(() => {
    setIsMounted(true);
    const size = Math.random() * 20 + 10;
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 5;
    
    setStyles({
      width: `${size}px`,
      height: `${size}px`,
      left: `${Math.random() * 100}%`,
      bottom: '0',
      animation: `float ${duration}s ease-in-out ${delay}s infinite`,
    });
  }, []);
  
  if (!isMounted) return null;
  
  return (
    <div 
      className="absolute rounded-full bg-blue-100/50"
      style={styles}
    />
  );
};

// Generate multiple stars and bubbles
const generateElements = (count: number, Component: React.FC) => {
  return Array.from({ length: count }, (_, i) => <Component key={i} />);
};

const navigation = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Integrations', href: '#integrations' },
    { name: 'Pricing', href: '#pricing' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
  ],
  legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  social: [
    {
      name: 'Twitter',
      href: 'https://twitter.com/greysilicon',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/greysilicon',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/greysilicon',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

// Add keyframe animations to global styles
const addKeyframes = () => {
  if (typeof document === 'undefined') return;
  
  const style = document.createElement('style');
  style.textContent = `
    @keyframes twinkle {
      0% { opacity: 0.1; }
      50% { opacity: 1; }
      100% { opacity: 0.1; }
    }
    @keyframes float {
      0% { 
        transform: translateY(0) translateX(0);
        opacity: 0;
      }
      10% { opacity: 0.2; }
      90% { opacity: 0.2; }
      100% { 
        transform: translateY(-100vh) translateX(20px);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
  return () => document.head.removeChild(style);
};

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const { country } = useCountry();
  
  useEffect(() => {
    const cleanup = addKeyframes();
    return () => {
      if (cleanup) {
        cleanup();
      }
    };
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="relative overflow-hidden bg-white border-t border-gray-100" 
      aria-labelledby="footer-heading"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      <div className="relative z-10 container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <motion.div 
            className="space-y-8 xl:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-block"
            >
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                GreySilicon
              </span>
            </motion.div>
            <p className="text-gray-500 text-sm">
              {country?.country_name ? `Serving ${country.country_name}` : 'Loading location...'}
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-gray-800 text-gray-400 transition-all hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.1 }}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                    {item.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.div 
            className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-blue-400 tracking-wider uppercase">
                  Product
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-blue-400 tracking-wider uppercase">
                  Company
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-blue-400 tracking-wider uppercase">
                  Legal
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-blue-400 tracking-wider uppercase">
                  Contact
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <AnimatePresence mode="wait">
                      <motion.a
                        key={`email-${country.code}`}
                        href={`mailto:${country.email}`}
                        className="text-gray-500 hover:text-blue-600 transition-colors duration-200 block"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {country.email}
                      </motion.a>
                    </AnimatePresence>
                  </li>
                  <li>
                    <AnimatePresence mode="wait">
                      <motion.a
                        key={`phone-${country.code}`}
                        href={`tel:${country.phone.replace(/\s+/g, '')}`}
                        className="text-gray-500 hover:text-blue-600 transition-colors duration-200 block"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                      >
                        {country.phone}
                      </motion.a>
                    </AnimatePresence>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Footer bottom */}
      <div className="relative z-10 border-t border-gray-800 mt-12">
        <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} GreySilicon. All rights reserved.
            </p>
            <div className="mt-4 flex space-x-6 md:mt-0">
              {navigation.legal.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <style jsx global>{`
        @keyframes twinkle {
          0% { opacity: 0.1; }
          50% { opacity: 1; }
          100% { opacity: 0.1; }
        }
        @keyframes float {
          0% { 
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% { opacity: 0.2; }
          90% { opacity: 0.2; }
          100% { 
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
          }
        }
      `}</style>
    </footer>
  );
}
