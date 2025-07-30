"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { SparklesCore } from "@/components/ui/sparkles"; // Assuming path
import { IconDotsVertical } from "@tabler/icons-react"; // Assuming path
import { cn } from "@/lib/utils"; // Assuming path
import aiGirlPreview from "../../public/images/ai-girl-preview.png";
import changeMobile from "../../public/images/Change.png";
import change from "../../public/images/Change.png";
import arrow from "../../public/images/arrow.png";
import icon from "../../public/images/icon.png";
import cross from "../../public/images/cross.png";
// --- A. YOUR ACETERNITY UI COMPARE COMPONENT ---

const MemoizedSparklesCore = React.memo(SparklesCore);

const Compare = ({
  firstImage = "",
  secondImage = "",
  className,
  firstImageClassName,
  secondImageClassname,
  initialSliderPercentage = 50,
  slideMode = "hover",
  showHandlebar = true,
  autoplay = false,
  autoplayDuration = 5000,
}: {
  firstImage?: string;
  secondImage?: string;
  className?: string;
  firstImageClassName?: string;
  secondImageClassname?: string;
  initialSliderPercentage?: number;
  slideMode?: "hover" | "drag";
  showHandlebar?: boolean;
  autoplay?: boolean;
  autoplayDuration?: number;
}) => {
  const [sliderXPercent, setSliderXPercent] = useState(initialSliderPercentage);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = useCallback(() => {
    if (!autoplay) return;
    const startTime = Date.now();
    const animate = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = (elapsedTime % (autoplayDuration * 2)) / autoplayDuration;
      const percentage = progress <= 1 ? progress * 100 : (2 - progress) * 100;
      setSliderXPercent(percentage);
      autoplayRef.current = setTimeout(animate, 16);
    };
    animate();
  }, [autoplay, autoplayDuration]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  function mouseEnterHandler() {
    setIsMouseOver(true);
    stopAutoplay();
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    if (slideMode === "hover") {
      setSliderXPercent(initialSliderPercentage);
    }
    if (slideMode === "drag") {
      setIsDragging(false);
    }
    startAutoplay();
  }

  const handleStart = useCallback((clientX: number) => {
    if (slideMode === "drag") {
      setIsDragging(true);
    }
  }, [slideMode]);

  const handleEnd = useCallback(() => {
    if (slideMode === "drag") {
      setIsDragging(false);
    }
  }, [slideMode]);

  const handleMove = useCallback((clientX: number) => {
    if (!sliderRef.current) return;
    if (slideMode === "hover" || (slideMode === "drag" && isDragging)) {
      const rect = sliderRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percent = (x / rect.width) * 100;
      requestAnimationFrame(() => {
        setSliderXPercent(Math.max(0, Math.min(100, percent)));
      });
    }
  }, [slideMode, isDragging]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => handleStart(e.clientX), [handleStart]);
  const handleMouseUp = useCallback(() => handleEnd(), [handleEnd]);
  const handleMouseMove = useCallback((e: React.MouseEvent) => handleMove(e.clientX), [handleMove]);
  const handleTouchStart = useCallback((e: React.TouchEvent) => { if (!autoplay) { handleStart(e.touches[0].clientX); } }, [handleStart, autoplay]);
  const handleTouchEnd = useCallback(() => { if (!autoplay) { handleEnd(); } }, [handleEnd, autoplay]);
  const handleTouchMove = useCallback((e: React.TouchEvent) => { if (!autoplay) { handleMove(e.touches[0].clientX); } }, [handleMove, autoplay]);

  return (
    <div
      ref={sliderRef}
      className={cn("w-full h-auto overflow-hidden relative", className)}
      style={{ cursor: slideMode === "drag" ? "grab" : "col-resize" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={mouseLeaveHandler}
      onMouseEnter={mouseEnterHandler}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      <AnimatePresence initial={false}>
        <motion.div
          className="h-full w-px absolute top-0 m-auto z-30 bg-gradient-to-b from-transparent from-[5%] to-[95%] via-indigo-500 to-transparent"
          style={{ left: `${sliderXPercent}%`, top: "0", zIndex: 40 }}
          transition={{ duration: 0 }}
        >
          <div className="w-36 h-full [mask-image:radial-gradient(100px_at_left,white,transparent)] absolute top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-indigo-400 via-transparent to-transparent z-20 opacity-50" />
          <div className="w-10 h-1/2 [mask-image:radial-gradient(50px_at_left,white,transparent)] absolute top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-cyan-400 via-transparent to-transparent z-10 opacity-100" />
          <div className="w-10 h-3/4 top-1/2 -translate-y-1/2 absolute -right-10 [mask-image:radial-gradient(100px_at_left,white,transparent)]">
            <MemoizedSparklesCore background="transparent" minSize={0.4} maxSize={1} particleDensity={1200} className="w-full h-full" particleColor="#FFFFFF" />
          </div>
          {showHandlebar && (
            <div className="h-5 w-5 rounded-md top-1/2 -translate-y-1/2 bg-white z-30 -right-2.5 absolute flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40]">
              <IconDotsVertical className="h-4 w-4 text-black" />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="overflow-hidden w-full h-full relative z-20 pointer-events-none">
        <AnimatePresence initial={false}>
          {firstImage && (
            <motion.div
              className={cn("absolute inset-0 z-20 rounded-2xl shrink-0 w-full h-full select-none overflow-hidden", firstImageClassName)}
              style={{ clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)` }}
              transition={{ duration: 0 }}
            >
              <img alt="first" src={firstImage} className={cn("absolute inset-0 z-20 rounded-2xl shrink-0 w-full h-full select-none object-cover", firstImageClassName)} draggable={false} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence initial={false}>
        {secondImage && (
          <motion.img className={cn("absolute top-0 left-0 z-[19] rounded-2xl w-full h-full select-none object-cover", secondImageClassname)} alt="second" src={secondImage} draggable={false} />
        )}
      </AnimatePresence>
    </div>
  );
};


// --- B. PLACEHOLDER ASSETS AND COMPONENTS ---


const CardContainer = ({ children, className, containerClassName }: { children: React.ReactNode; className?: string; containerClassName?: string; }) => (
  <div className={twMerge("h-full w-full rounded-xl border border-white/[0.2]", containerClassName)}>
    <div className={twMerge("h-full w-full rounded-xl bg-black/60 backdrop-blur-lg", className)}>
      {children}
    </div>
  </div>
);

const CardBody = ({ children, className }: { children: React.ReactNode; className?: string; }) => (
  <div className={twMerge("h-full w-full p-6", className)}>
    {children}
  </div>
);


// --- C. RESTRUCTURED FEATURE COMPARISON SECTION ---

export function FeatureComparisonSection() {
  return (
    <div className="font-sans w-full">
      <section className="py-12 px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <button className="bg-white text-gray-800 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-200 transition-colors">
            AI Assistant Features
          </button>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3">
            <CardContainer>
              <CardBody>
                <h1 className="text-2xl font-bold text-white mb-4 text-center">Before vs. After</h1>
                <Compare
                  firstImage={aiGirlPreview.src ?? aiGirlPreview}
                  secondImage={icon.src ?? icon}
                  className="rounded-xl overflow-hidden w-full h-auto aspect-square"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-white">
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start">
                      <Image src={cross} alt="cross icon" width={20} height={20} className="mr-3 mt-1 flex-shrink-0 rounded-full" />
                      <span>Low-resolution product image with plain background.</span>
                    </li>
                    <li className="flex items-start">
                      <Image src={cross} alt="cross icon" width={20} height={20} className="mr-3 mt-1 flex-shrink-0 rounded-full" />
                      <span>Lacks professional presentation and engaging context.</span>
                    </li>
                  </ul>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start">
                      <Image src="https://cdn.prod.website-files.com/61a0db9411201997c3ebd0d7/670e2e17c543c456e28735ce_Vectors-Wrapper.svg" alt="tick icon" width={20} height={20} className="mr-3 mt-1" />
                      <span>High-resolution, visually appealing product images.</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="https://cdn.prod.website-files.com/61a0db9411201997c3ebd0d7/670e2e17c543c456e28735ce_Vectors-Wrapper.svg" alt="tick icon" width={20} height={20} className="mr-3 mt-1" />
                      <span>Engaging, keyword-optimized product descriptions.</span>
                    </li>
                  </ul>
                </div>
              </CardBody>
            </CardContainer>
          </div>
          <div className="lg:col-span-2">
            <CardContainer>
              <CardBody>
                <div className="h-full flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold text-purple-400 mb-4">
                    MyPulse AI Generation Tool ✨
                  </h1>
                  <div className="relative w-full flex justify-center items-center my-4">
                    <Image src={change} alt="Arrow pointing right" width={100} height={50} className="hidden lg:block" />
                    <Image src={changeMobile} alt="Arrow pointing down" width={40} height={40} className="lg:hidden" />
                  </div>
                  <ul className="mt-4 space-y-3 text-left text-white">
                    <li className="flex items-start">
                      <Image src={arrow} alt="arrow icon" width={20} height={20} className="mr-3 mt-1 flex-shrink-0 rounded-full" />
                      <span>Utilizes AI to enhance product images with customizable backgrounds.</span>
                    </li>
                    <li className="flex items-start">
                      <Image src={arrow} alt="arrow icon" width={20} height={20} className="mr-3 mt-1 flex-shrink-0 rounded-full" />
                      <span>Generates high-quality images in less than 30 seconds.</span>
                    </li>
                    <li className="flex items-start">
                      <Image src={arrow} alt="arrow icon" width={20} height={20} className="mr-3 mt-1 flex-shrink-0 rounded-full" />
                      <span>Automatically crafts professional product descriptions.</span>
                    </li>
                  </ul>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </section>
    </div>
  );
}

// --- D. MAIN APP COMPONENT (EXAMPLE USAGE) ---
export default function App() {
  return (
    <div className="bg-gray-900 min-h-screen w-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2070&auto=format&fit=crop')" }}>
      <FeatureComparisonSection />
    </div>
  );
}
