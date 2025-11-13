'use client';

import { CountryProvider } from '@/context/CountryContext';

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <CountryProvider>
      {children}
    </CountryProvider>
  );
}
