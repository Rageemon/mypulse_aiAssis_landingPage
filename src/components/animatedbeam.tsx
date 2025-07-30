"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils"; // Assuming you have this utility function
import Image from "next/image";
import { AnimatedBeam } from "@/components/ui/animated-beam"; // Assuming this is the path to your component
import logo from "../../public/images/webclip.png";
// --- A. UPDATED ANIMATED BEAM COMPONENTS ---

// 1. Container for the Central Logo
const LogoContainer = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 bg-black text-white shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
          className,
        )}
      >
        {children}
      </div>
    );
  },
);
LogoContainer.displayName = 'LogoContainer';


// 2. Simple Node for Each Feature
const FeatureNode = forwardRef<HTMLDivElement, { children: React.ReactNode, className?: string }>(
    ({ children, className }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "p-4 bg-black/60 backdrop-blur-lg rounded-2xl border border-white/[0.2] text-center text-lg text-white/90 w-48", // Increased font size from text-sm to text-lg
                    className
                )}
            >
                {children}
            </div>
        );
    }
);
FeatureNode.displayName = 'FeatureNode';


// 3. Main Animated Beam Grid Component (with new compact layout)
export function AnimatedBeamGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const feature1Ref = useRef<HTMLDivElement>(null);
  const feature2Ref = useRef<HTMLDivElement>(null);
  const feature3Ref = useRef<HTMLDivElement>(null);
  const feature4Ref = useRef<HTMLDivElement>(null);
  const feature5Ref = useRef<HTMLDivElement>(null);
  const feature6Ref = useRef<HTMLDivElement>(null);

  const features = [
    "Customizable templates for images and descriptions",
    "Fast, automated creation of product images",
    "High-resolution, multi-platform outputs",
    "Multi-platform optimization for visuals and text",
    "A/B testing for image and description performance",
    "Automated SEO keyword suggestions"
  ];

  const featureRefs = [feature1Ref, feature2Ref, feature3Ref, feature4Ref, feature5Ref, feature6Ref];

  return (
    <div
      className="relative flex w-full max-w-3xl mx-auto items-center justify-center overflow-hidden rounded-lg p-4"
      ref={containerRef}
    >
      <div className="grid grid-cols-3 grid-rows-2 items-center justify-items-center gap-x-12 gap-y-16">
        {/* Row 1 */}
        <FeatureNode ref={feature1Ref}>{features[0]}</FeatureNode>
        <FeatureNode ref={feature2Ref}>{features[1]}</FeatureNode>
        <FeatureNode ref={feature3Ref}>{features[2]}</FeatureNode>
        
        {/* Row 2 */}
        <FeatureNode ref={feature4Ref}>{features[3]}</FeatureNode>
        <div className="flex items-center justify-center">
            <LogoContainer ref={logoRef}>
                <AppLogo />
            </LogoContainer>
        </div>
        <FeatureNode ref={feature5Ref}>{features[4]}</FeatureNode>
        
        {/* Row 3 - Centered for the last item */}
        <div className="col-span-3 flex justify-center">
            <FeatureNode ref={feature6Ref}>{features[5]}</FeatureNode>
        </div>
      </div>

      {/* Mapping over features to create a beam for each */}
      {featureRefs.map((ref, i) => (
        <AnimatedBeam
          key={i}
          containerRef={containerRef as React.RefObject<HTMLElement>}
          fromRef={logoRef as React.RefObject<HTMLElement>}
          toRef={ref as React.RefObject<HTMLElement>}
          duration={3 + i * 0.5} // Stagger the animation duration
          delay={i * 0.2}
          curvature={50} // Adjust curvature of the beam
          endYOffset={ref === feature6Ref ? -10 : 10} // Adjust end point for better visuals
        />
      ))}
    </div>
  );
}

// Simple App Logo Component (Now uses an Image tag)
const AppLogo = () => (
    <Image
        src={logo} // <-- REPLACE with your logo's src
        width={40}
        height={40}
        alt="App Logo"
        className="rounded-full object-cover"
    />
);


// --- B. MAIN APP COMPONENT (EXAMPLE USAGE) ---
export default function App() {
  return (
    <div className="bg-gray-900 min-h-screen w-full flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2070&auto=format&fit=crop')"}}>
       <AnimatedBeamGrid />
    </div>
  )
}
