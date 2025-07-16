// src/components/ScrollIndicator.jsx
import React from 'react';
import { ChevronsDown } from 'lucide-react';

export default function ScrollIndicator() {
  return (
    <section className="flex flex-col items-center py-8">
      <ChevronsDown 
        className="
          w-6 h-6 text-black 
          animate-bounce 
          md:w-8 md:h-8 
          lg:w-10 lg:h-10
        " 
      />
      <span className="mt-2 text-black uppercase tracking-wider text-xs md:text-sm lg:text-base">
        Begin your journey
      </span>
    </section>
  );
}
