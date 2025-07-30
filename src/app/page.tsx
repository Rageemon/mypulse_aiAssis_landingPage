import Image from "next/image";
import Header from "@/components/header";
import { CardContainer, CardBody } from "@/components/ui/3d-card";
import Link from "next/link";
import { AnimatedBeamGrid } from "@/components/animatedbeam";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
import {Compare} from "@/components/ui/compare";

// Import all images
import coverImg from "../../public/images/cover-img-p-800.png";
import vector1 from "../../public/images/Vector-1.png";
import vector2 from "../../public/images/Vector-2.png";
import vector3 from "../../public/images/Vector-3.png";
import manWorking1 from "../../public/images/a-man-working-in-a-call-center-8867431.png";
import manWorking2 from "../../public/images/a-man-working-in-a-call-center-8867431-2.png";
import abTesting from "../../public/images/AB-Testing.png";
import changeMobile from "../../public/images/Change.png";
import change from "../../public/images/Change.png";
import arrow from "../../public/images/arrow.png";
import predict from "../../public/images/predict.svg";
import insights from "../../public/images/insights.svg";
import sku from "../../public/images/sku.svg";
import compare from "../../public/images/compare1.png";
import compare2 from "../../public/images/compare2.png";
import ai1 from "../../public/images/I01.png";
import ai2 from "../../public/images/I02.png";
import ai3 from "../../public/images/I03.png";
import FeaturesHoverGrid from "@/components/features";

export default function Home() {

  const testimonials = [
    {
      src: "/images/I01.png",
      quote: "MyPulse AI transformed our product listings completely. Sales increased by 40% in just the first month!",
     
    },
    {
      src: "/images/I02.png",
      quote: "The AI-generated descriptions are incredibly engaging. Our conversion rates have never been higher!",
      
    },
    {
      src: "/images/I03.png",
      quote: "Saves us hours of work every week. The automated keyword optimization is a game-changer!",
     
    },
  ];
  

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
      <section className="font-sans text-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Main Hero Content: Text on left, Image on right (on desktop) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight">
              AI Assistant
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-white">
              Let AI do the heavy lifting - boost sales by 30% <br />
              with smarter, faster automation.
            </p>
            <div className="mt-8">
              <a 
                href="https://mypulse.pro/register" 
                className="inline-block bg-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 hover:bg-purple-700 hover:scale-105 transform"
              >
                Try Now for Free
              </a>
            </div>
            <div className="mt-10 text-white">
              <p className="text-xl md:text-2xl leading-relaxed">
                Are you a fashion seller? MyPulse's AI Assistant helps you to boost your sales, improve SEO, and save hours of manual work! — <strong className="text-white">boost sales by 30%.</strong>
              </p>
            </div>
          </div>
          
          {/* Image Content (with responsive switching) */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            {/* Image for larger screens */}
            <Image 
              src={coverImg} 
              loading="lazy" 
              width={422} 
              height={376} 
              alt="AI Assistant dashboard preview" 
              className="hidden lg:block"
            />
            {/* Image for smaller screens */}
            <Image 
              src={coverImg} 
              loading="lazy" 
              width={350} 
              height={311} // Adjusted height to maintain aspect ratio for the new width
              alt="AI Assistant dashboard preview" 
              className="block lg:hidden"
            />
          </div>
        </div>
        
        {/* Secondary Description */}
        <div className="text-center mt-20">
            <p className="text-xl font-bold text-white">
                Elevate Your Business with <span className="italic">My</span>Pulse’s AI Assistant for Effortless Growth!
            </p>
            <p className="mt-2 text-lg text-white">
                Unlock New Opportunities and Maximize Efficiency with Cutting-Edge AI Support!
            </p>
        </div>

      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 pt-4 pb-8 sm:px-6 lg:px-8">
       
          
        <FeaturesHoverGrid/>
          
      
      </div>
    </section>

    <section className="py-20 px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <AnimatedBeamGrid/>
      </div>
    </section>

    

    <section className="py-16">
        <div className="container mx-auto px-8 lg:px-12 space-y-20">
          {/* Feature 1: Product Descriptions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-5">
              <div className="flex items-center space-x-3">
                <Image src={vector1} loading="lazy" width={40} height={40} alt="Description icon" />
                <h2 className="text-3xl font-bold text-white">Create Stunning Product Descriptions</h2>
              </div>
              {/* Image for mobile */}
              <div className="lg:hidden">
                 <Image src={manWorking1} loading="lazy" width={350} height={350} alt="Man working in a call center" className="rounded-lg shadow-md mx-auto" />
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Image src="https://cdn.prod.website-files.com/61a0db9411201997c3ebd0d7/670f72bb1d4ac4f92efb358f_Vectors-Wrapper.svg" loading="lazy" width={20} height={20} alt="Pink tick" className="mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Conversion Rate Boost: </span>
                    <span className="text-white">Product descriptions enhanced by AI show a <strong>35% increase</strong> in conversion rates.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Image src="https://cdn.prod.website-files.com/61a0db9411201997c3ebd0d7/670f72bb1d4ac4f92efb358f_Vectors-Wrapper.svg" loading="lazy" width={20} height={20} alt="Pink tick" className="mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">SEO Impact: </span>
                    <span className="text-white">Optimized descriptions bring a <strong>25% boost</strong> in search visibility on average.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Image src="https://cdn.prod.website-files.com/61a0db9411201997c3ebd0d7/670f72bb1d4ac4f92efb358f_Vectors-Wrapper.svg" loading="lazy" width={20} height={20} alt="Pink tick" className="mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Time Saved: </span>
                    <span className="text-white">Reduce description-writing time by 80%, freeing up hours for other tasks.</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-lg font-semibold text-white mb-2">Try AI-Powered Descriptions Now</p>
                <Link href="https://mypulse.pro/register" className="inline-block bg-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors">
                  Watch It In Action
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex flex-col items-center">
              <Image src={manWorking1} loading="lazy" width={350} height={350} alt="Man at computer optimizing keywords" className="rounded-lg shadow-lg" />
              <p className="mt-4 text-sm text-white italic text-center max-w-sm">Prompt: Watch the magic unfold! In just seconds, MyPulse’s AI Assistant crafts stunning, SEO-optimized product descriptions that get your products noticed.</p>
            </div>
          </div>

          {/* Feature 2: A/B Test Images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="hidden lg:flex flex-col items-center lg:order-1">
              <Image src={abTesting} loading="lazy" width={350} height={350} alt="A/B testing interface" className="rounded-lg shadow-lg" />
              <p className="mt-4 text-sm text-white italic text-center max-w-sm"><strong>Prompt</strong>: Which image wins? Let the AI decide! Watch side-by-side A/B tests show you which visuals drive clicks and conversions. No more guesswork, just results!</p>
            </div>
             <div className="flex flex-col space-y-5 lg:order-2">
              <div className="flex items-center space-x-3">
                <Image src={vector2} loading="lazy" width={40} height={40} alt="A/B test icon" />
                <h2 className="text-3xl font-bold text-white">A/B Test Images</h2>
              </div>
              {/* Image for mobile */}
              <div className="lg:hidden">
                <Image src={abTesting} loading="lazy" width={350} height={350} alt="A/B testing interface" className="rounded-lg shadow-md mx-auto" />
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Image src="https://cdn.prod.website-files.com/61a0db9411201997c3ebd0d7/670f72bb1d4ac4f92efb358f_Vectors-Wrapper.svg" loading="lazy" width={20} height={20} alt="Pink tick" className="mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">CTR Difference: </span>
                    <span className="text-white">A/B-tested images result in a 2x increase in Click-Through Rate (CTR).</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Image src="https://cdn.prod.website-files.com/61a0db9411201997c3ebd0d7/670f72bb1d4ac4f92efb358f_Vectors-Wrapper.svg" loading="lazy" width={20} height={20} alt="Pink tick" className="mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Conversion Lift: </span>
                    <span className="text-white">Optimized images have a <strong>25% higher</strong> conversion rate compared to manually selected images.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Image src="https://cdn.prod.website-files.com/61a0db9411201997c3ebd0d7/670f72bb1d4ac4f92efb358f_Vectors-Wrapper.svg" loading="lazy" width={20} height={20} alt="Pink tick" className="mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Sales Impact: </span>
                    <span className="text-white">A/B tested visuals drive <strong>15% more</strong> sales in the first month.</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-lg font-semibold text-white mb-2">Let AI Pick Your Winning Images</p>
                <Link href="https://mypulse.pro/register" className="inline-block bg-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors">
                  Start Testing
                </Link>
              </div>
            </div>
          </div>

          {/* Feature 3: Keyword Optimization */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-5">
              <div className="flex items-center space-x-3">
                <Image src={vector3} loading="lazy" width={40} height={40} alt="Keyword icon" />
                <h2 className="text-3xl font-bold text-white">Optimize Keywords Effortlessly</h2>
              </div>
              {/* Image for mobile */}
              <div className="lg:hidden">
                <Image src={manWorking2} loading="lazy" width={350} height={350} alt="Man at computer optimizing keywords" className="rounded-lg shadow-md mx-auto" />
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                   <Image src="https://cdn.prod.website-files.com/61a0db9411201997c3ebd0d7/670f72bb1d4ac4f92efb358f_Vectors-Wrapper.svg" loading="lazy" width={20} height={20} alt="Pink tick" className="mt-1 flex-shrink-0" />
                   <div>
                    <span className="font-semibold text-white">SEO Ranking Improvement: </span>
                    <span className="text-white">Keyword-optimized listings see an <strong>18% increase</strong> in organic search rankings.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                   <Image src="https://cdn.prod.website-files.com/61a0db9411201997c3ebd0d7/670f72bb1d4ac4f92efb358f_Vectors-Wrapper.svg" loading="lazy" width={20} height={20} alt="Pink tick" className="mt-1 flex-shrink-0" />
                   <div>
                    <span className="font-semibold text-white">Traffic Growth: </span>
                    <span className="text-white">Boost traffic by <strong>20%</strong> within the first 3 months with AI-driven keyword optimization.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                   <Image src="https://cdn.prod.website-files.com/61a0db9411201997c3ebd0d7/670f72bb1d4ac4f92efb358f_Vectors-Wrapper.svg" loading="lazy" width={20} height={20} alt="Pink tick" className="mt-1 flex-shrink-0" />
                   <div>
                    <span className="font-semibold text-white">Time Saved: </span>
                    <span className="text-white">Spend <strong>90% less</strong> time on SEO optimization with AI doing the work.</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-lg font-semibold text-white mb-2">Optimize Your Keywords in Seconds</p>
                <Link href="https://mypulse.pro/register" className="inline-block bg-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors">
                  Try Now
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex flex-col items-center">
              <Image src={manWorking2} loading="lazy" width={350} height={350} alt="Man at computer optimizing keywords" className="rounded-lg shadow-lg" />
              <p className="mt-4 text-sm text-white italic text-center max-w-sm"><strong>Prompt</strong>: Effortless SEO? Yes, please! MyPulse’s AI Assistant optimizes your keywords in seconds, boosting visibility while you focus on what you love: growing your brand</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-8 lg:px-12">
        {/* Header Button */}
        <div className="text-center mb-12">
          <button className="bg-white text-gray-800 font-semibold py-3 px-6 rounded-full shadow-md">
            AI Assistant Features
          </button>
        </div>

        {/* Before vs. After Grid */}
        
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Box 2: AI Generation Tool */}
          <CardContainer containerClassName="py-0">
            <CardBody className="h-auto w-full">
              <div className=" rounded-xl shadow-lg p-6 flex flex-col items-center text-center h-full transform lg:scale-105">
                <h1 className="text-3xl font-bold text-purple-600 mb-4">
                  MyPulse AI<br />Generation Tool ✨
                </h1>
                
                <ul className="mt-4 space-y-3 text-left">
                  <li className="flex items-start">
                    <Image src={arrow} alt="arrow icon" width={20} height={20} className="mr-3 mt-1" />
                    <span className="text-white text-lg">Utilizes AI to enhance product images with customizable backgrounds.</span>
                  </li>
                  <li className="flex items-start">
                    <Image src={arrow} alt="arrow icon" width={20} height={20} className="mr-3 mt-1" />
                    <span className="text-white text-lg">Generates high-quality images in less than 30 seconds.</span>
                  </li>
                  <li className="flex items-start">
                    <Image src={arrow} alt="arrow icon" width={20} height={20} className="mr-3 mt-1" />
                    <span className="text-white text-lg">Automatically crafts professional product descriptions.</span>
                  </li>
                </ul>
              </div>
            </CardBody>
          </CardContainer>

      <div className="flex justify-center">
        <Compare
          firstImage={compare2.src} // Final Look (After) - shows when slider is to the left
          secondImage={compare.src} // Preview Look (Before) - shows when slider is to the right
          className="w-[300px] h-[600px]"
          slideMode="drag"
          showHandlebar={true}
          initialSliderPercentage={30} // Start showing more of the "Final Look"
        />
       
      </div>
       </div>
       </section>

      {/* Gallery Section - Simplified to a responsive grid */}
      <section className="py-16 px-8 lg:px-12">
        <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
                Explore the <span className="text-purple-600">MyPulse</span> Gallery of AI-Generated
            </h1>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Fashion Images</h1>
        </div>
        {/* The slider is converted to a static, responsive grid. For a functional slider, a library like Swiper.js or Embla Carousel is recommended. */}
        
        <div className="mt-16">
        
          <AnimatedTestimonials testimonials={testimonials as any} />
        </div>
      </section>

      {/* Footer CTA and Solutions */}
      <footer className=" mt-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 py-12">
            <div className="bg-purple-600 text-white text-center rounded-xl p-10 mb-16">
                <h2 className="text-3xl font-bold">Turn Browsers into Buyers with AI Magic ✨</h2>
                <p className="mt-4 max-w-2xl mx-auto">
                    Unlock the power of AI today and see your sales take off. Our AI Assistant will transform your product listings in just a few clicks.
                </p>
                <div className="mt-8">
                    <a 
                        href="https://www.mypulse.my/#contact-us"
                        className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full inline-block transition-transform duration-300 hover:scale-105"
                    >
                        Learn More
                    </a>
                </div>
            </div>

            <div className="text-center mb-10">
                <p className="text-2xl font-semibold text-white">
                    Explore More <span className="font-bold">MyPulse's</span> Solutions
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-lg overflow-hidden">
                <CardContainer containerClassName="py-0">
                  <CardBody className="h-auto w-full">
                    <a href="https://www.mypulse.my/financial-pulse" target="_blank" rel="noopener noreferrer" className=" p-6 flex flex-col items-center text-center transition duration-300">
                        <Image src={predict} alt="Financial Pulse Icon" width={40} height={40} className="mb-4" />
                        <h3 className="text-xl font-bold text-white">Financial Pulse</h3>
                        <p className="text-white mt-2">Track profit, loss, and OPEX in one dashboard with personalized pricing insights.</p>
                    </a>
                  </CardBody>
                </CardContainer>
                 <CardContainer containerClassName="py-0">
                  <CardBody className="h-auto w-full">
                    <a href="https://www.mypulse.my/multichannel-insights-hub" target="_blank" rel="noopener noreferrer" className="p-6 flex flex-col items-center text-center transition duration-300">
                        <Image src={insights} alt="Insights Hub Icon" width={40} height={40} className="mb-4" />
                        <h3 className="text-xl font-bold text-white">Multichannel Insights Hub</h3>
                        <p className="text-white mt-2">Real-time sales and cost tracking across multiple marketplaces, manage unlimited shops seamlessly.</p>
                    </a>
                  </CardBody>
                </CardContainer>
                 <CardContainer containerClassName="py-0">
                  <CardBody className="h-auto w-full">
                    <a href="http://www.mypulse.my/skuperformance-tracker" target="_blank" rel="noopener noreferrer" className="p-6 flex flex-col items-center text-center transition duration-300">
                        <Image src={sku} alt="SKU Tracker Icon" width={40} height={40} className="mb-4" />
                        <h3 className="text-xl font-bold text-white">SKU Performer Tracker</h3>
                        <p className="text-white mt-2">Gain insights into product performance, track sales, predict revenue, and optimize inventory.</p>
                    </a>
                  </CardBody>
                </CardContainer>
            </div>
        </div>
      </footer>
      </main>
    </div>
  );
}
