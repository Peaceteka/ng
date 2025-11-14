'use client';

import { motion } from 'framer-motion';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} className="h-4 w-4 text-yellow-400" />
      ))}
      {hasHalfStar && <FaStarHalfAlt className="h-4 w-4 text-yellow-400" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaStar key={`empty-${i}`} className="h-4 w-4 text-gray-600" />
      ))}
    </div>
  );
};

const companies = [
  { initials: 'TF', name: 'TechFlow' },
  { initials: 'FA', name: 'FinanceApp' },
  { initials: 'ET', name: 'EduTech' },
  { initials: 'RC', name: 'RetailCorp' },
  { initials: 'HC', name: 'HealthCare+' },
  { initials: 'LM', name: 'LogiMove' },
];

const testimonials = [
  {
    quote: "The API integration was seamless. We were up and running in less than 30 minutes. The documentation is excellent and the support team is incredibly responsive.",
    stat: "99.9% delivery rate",
    rating: 5,
    author: {
      initials: 'SC',
      name: 'Sarah Chen',
      title: 'CTO at TechFlow Africa',
      location: 'Nigeria',
      company: 'TechFlow',
      role: 'CTO'
    }
  },
  {
    quote: "Since switching to Grey Silicon, our SMS costs dropped by 40% while delivery rates improved. The dashboard analytics help us optimize our campaigns.",
    stat: "40% cost reduction",
    rating: 4.5,
    author: {
      initials: 'MO',
      name: 'Michael Oduya',
      title: 'Product Manager at FinanceApp Kenya',
      location: 'Kenya',
      company: 'FinanceApp',
      role: 'Product Manager'
    }
  },
  {
    quote: "The WhatsApp Business API integration allowed us to create rich, interactive conversations with our students. Game-changer for student engagement.",
    stat: "300% engagement increase",
    rating: 5,
    author: {
      initials: 'AH',
      name: 'Amina Hassan',
      title: 'Lead Developer at EduTech Solutions',
      location: 'Ghana',
      company: 'EduTech',
      role: 'Lead Developer'
    }
  },
  {
    quote: "Multi-channel campaigns are now effortless. We can coordinate SMS, WhatsApp, and Email from one platform. Our conversion rates have never been higher.",
    stat: "250% conversion increase",
    rating: 4,
    author: {
      initials: 'DM',
      name: 'David Mbeki',
      title: 'Marketing Director at RetailCorp SA',
      location: 'South Africa',
      company: 'RetailCorp',
      role: 'Marketing Director'
    }
  }
];

const stats = [
  { value: '1000+', label: 'Happy Customers' },
  { value: '99.9%', label: 'Average Uptime' },
  { value: '15+', label: 'Countries Covered' },
  { value: '10M+', label: 'Messages Daily' }
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md"
  >
    <div className="relative z-10 h-full p-6">
      <div className="absolute top-6 right-6">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
          <div className="text-2xl font-bold text-blue-600 group-hover:text-blue-700">"</div>
        </div>
      </div>
      
      <div className="pr-10">
        <StarRating rating={testimonial.rating} />
        <p className="my-4 text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{testimonial.quote}</p>
      </div>
      
      <div className="mt-8 pt-4 border-t border-gray-100 group-hover:border-blue-100 transition-colors duration-300">
        <div className="flex items-center">
          <div className="relative
            mr-4 flex h-12 w-12 items-center justify-center rounded-full 
            bg-gradient-to-br from-blue-600 to-blue-700 text-lg font-bold text-white
            group-hover:scale-110 group-hover:shadow-md
            transition-all duration-300
          ">
            {testimonial.author.initials}
            <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-white bg-green-500"></div>
          </div>
          
          <div>
            <p className="font-medium text-gray-900">{testimonial.author.name}</p>
            <p className="text-sm text-gray-600 group-hover:text-blue-700 transition-colors duration-300">
              {testimonial.author.title}
            </p>
            <div className="flex items-center mt-1">
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
                {testimonial.author.company}
              </span>
              <span className="mx-2 text-gray-300">•</span>
              <span className="text-xs text-gray-500">{testimonial.author.location}</span>
            </div>
          </div>
          
          <div className="ml-auto">
            <div className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700 group-hover:bg-green-100 group-hover:text-green-800 transition-colors duration-300">
              {testimonial.stat}
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const CompanyLogo = ({ initials, name }: { initials: string, name: string }) => (
  <div className="flex flex-col items-center">
    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 text-2xl font-bold text-blue-600">
      {initials}
    </div>
    <span className="mt-2 text-sm font-medium text-gray-600">{name}</span>
  </div>
);

const StatCard = ({ value, label }: { value: string, label: string }) => (
  <div className="text-center">
    <div className="text-4xl font-bold text-gray-900 md:text-5xl">{value}</div>
    <div className="mt-2 text-sm font-medium text-gray-600">{label}</div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Loved by developers and <span className="text-blue-600">trusted by enterprises</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Join thousands of companies across Africa who rely on our platform for their critical communications.
          </p>
        </motion.div>

        {/* Company logos */}
        <div className="mb-20">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
            {companies.map((company, index) => (
              <motion.div
                key={company.initials}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CompanyLogo initials={company.initials} name={company.name} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <StatCard value={stat.value} label={stat.label} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
