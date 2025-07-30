"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Import your icons
import clickThroughIcon from "../../public/images/671f222b3822076bf88e120d_Vectors-Wrapper.svg";
import currencyIcon from "../../public/images/Currency-Pound-Increase--Streamline-Ultimate.svg.png";
import timeIcon from "../../public/images/Time-Clock-Hand-1--Streamline-Ultimate.svg.png";
import { AnimatePresence, motion } from "framer-motion";

// --- 1. MODIFIED HOVER EFFECT COMPONENT ---
// I've updated the types for `title` and `description` to accept React.ReactNode

const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: React.ReactNode;
    description: React.ReactNode;
    link?: string; // Made link optional as it's not used in your feature cards
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div // Changed from `a` tag to `div` as a link is not always needed
          key={idx}
          className="relative group block p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gray-400 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

// --- CARD COMPONENTS (MODIFIED) ---
// I've updated the `children` prop type to be more explicit (React.ReactNode)

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black-20 border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};


// --- 2. YOUR FEATURES COMPONENT (IMPLEMENTATION) ---
// This component now correctly uses the modified HoverEffect

export function FeaturesHoverGrid() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={features} />
    </div>
  );
}

const features = [
  {
    title: (
      <div className="flex flex-col items-center text-center">
        <div className="bg-gradient-to-br from-pink-400 to-purple-500 p-4 rounded-full shadow-lg mb-4">
          <Image
            src={clickThroughIcon}
            width={40}
            height={40}
            alt="Click-through rate icon"
            onError={(e) => e.currentTarget.src = 'https://placehold.co/40x40/CF8BF3/FFFFFF?text=CTR'}
          />
        </div>
        <p className="font-semibold text-white text-lg">
          2x Higher Click-Through Rates
        </p>
      </div>
    ),
    description: <></>, // Use an empty fragment if no description is needed
  },
  {
    title: (
      <div className="flex flex-col items-center text-center">
        <div className="bg-gradient-to-br from-pink-400 to-purple-500 p-4 rounded-full shadow-lg mb-4">
          <Image
            src={currencyIcon}
            width={40}
            height={40}
            alt="Sales growth icon"
            onError={(e) => e.currentTarget.src = 'https://placehold.co/40x40/CF8BF3/FFFFFF?text=$$'}
          />
        </div>
        <p className="font-semibold text-white text-lg">
          30% Faster Sales Growth
        </p>
      </div>
    ),
    description: <></>,
  },
  {
    title: (
      <div className="flex flex-col items-center text-center">
        <div className="bg-gradient-to-br from-pink-400 to-purple-500 p-4 rounded-full shadow-lg mb-4">
          <Image
            src={timeIcon}
            width={40}
            height={40}
            alt="Time saving icon"
            onError={(e) => e.currentTarget.src = 'https://placehold.co/40x40/CF8BF3/FFFFFF?text=Time'}
          />
        </div>
        <p className="font-semibold text-white text-lg">
          Save 10 Hours of Manual Work Per Week!
        </p>
      </div>
    ),
    description: <></>,
  },
];

// --- MAIN APP COMPONENT (EXAMPLE USAGE) ---
export default function App() {
  return (
    <div className="">
       <FeaturesHoverGrid />
    </div>
  )
}
