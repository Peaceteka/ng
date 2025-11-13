import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Country = {
  code: 'KE' | 'UG' | 'RW' | 'TZ';
  name: string;
  flag: string;
  email: string;
  phone: string;
};

export type CountryContextType = {
  country: Country;
  setCountry: (country: Country) => void;
  isLoading: boolean;
};

const defaultCountry: Country = {
  code: 'KE',
  name: 'Kenya',
  flag: '🇰🇪',
  email: 'greysiliconhelpdesk@kenya.com',
  phone: '+254 700 123 456',
};

const countries: Record<string, Country> = {
  KE: {
    code: 'KE',
    name: 'Kenya',
    flag: '🇰🇪',
    email: 'greysiliconhelpdesk@kenya.com',
    phone: '+254 700 123 456',
  },
  UG: {
    code: 'UG',
    name: 'Uganda',
    flag: '🇺🇬',
    email: 'greysiliconhelpdesk@uganda.com',
    phone: '+256 700 654 321',
  },
  RW: {
    code: 'RW',
    name: 'Rwanda',
    flag: '🇷🇼',
    email: 'greysiliconhelpdesk@rwanda.com',
    phone: '+250 788 555 999',
  },
  TZ: {
    code: 'TZ',
    name: 'Tanzania',
    flag: '🇹🇿',
    email: 'greysiliconhelpdesk@tanzania.com',
    phone: '+255 688 888 222',
  },
};

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export const CountryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [country, setCountry] = useState<Country>(defaultCountry);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Try to get country from localStorage first
    const savedCountryCode = localStorage.getItem('selectedCountry') as keyof typeof countries;
    
    if (savedCountryCode && countries[savedCountryCode]) {
      setCountry(countries[savedCountryCode]);
      setIsLoading(false);
      return;
    }

    // If no saved country, detect from IP
    const detectCountry = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const countryCode = data.country_code as keyof typeof countries;
        
        if (countryCode && countries[countryCode]) {
          setCountry(countries[countryCode]);
        } else {
          setCountry(defaultCountry);
        }
      } catch (error) {
        console.error('Error detecting country:', error);
        setCountry(defaultCountry);
      } finally {
        setIsLoading(false);
      }
    };

    detectCountry();
  }, []);

  const updateCountry = (newCountry: Country) => {
    setCountry(newCountry);
    localStorage.setItem('selectedCountry', newCountry.code);
  };

  return (
    <CountryContext.Provider value={{ country, setCountry: updateCountry, isLoading }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = (): CountryContextType => {
  const context = useContext(CountryContext);
  if (context === undefined) {
    throw new Error('useCountry must be used within a CountryProvider');
  }
  return context;
};

export { countries };
