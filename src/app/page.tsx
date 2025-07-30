import Image from "next/image";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "../../public/images/cover-img-p-500.png";
import Link from "next/link";
export default function Home() {
  const stats = [
    {
      icon: "📈",
      title: "2x Higher Click-Through Rates",
      color: "brand-cyan"
    },
    {
      icon: "💰",
      title: "30% Faster Sales Growth",
      color: "brand-purple"
    },
    {
      icon: "⏰",
      title: "Save 10 Hours of Manual Work Per Week!",
      color: "brand-pink"
    }
  ];

  const features = [
    "Customizable templates for images and descriptions",
    "Fast, automated creation of product images and descriptions",
    "High-resolution, multi-platform optimized outputs",
    "Multi-platform optimization for both visuals and text",
    "A/B testing for image and description performance",
    "Automated SEO keyword suggestions"
  ];
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
      <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
              AI
              <br />
              Assistant
            </h1>
            <div className="space-y-2">
              <p className="text-xl text-white/90">
                Let AI do the heavy lifting
              </p>
              <p className="text-xl text-white/90">
                - boost sales by 30%
              </p>
              <p className="text-xl text-white/90">
                with smarter, faster automation.
              </p>
            </div>
          </div>
          
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Try Now for Free
          </Button>
        </div>

        {/* Right Image */}
        <div className="relative">
          <Image
            src={heroImage}
            alt="Two excited women in summer clothing"
            className="w-full h-auto animate-float"
            priority
          />
        </div>
      </div>
    </section>
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="text-white">Elevate Your Business with </span>
            <span className="italic">My</span>
            <span className="font-bold">Pulse</span>
            <span className="text-white">'s AI Assistant for Effortless Growth!</span>
          </h2>
          <p className="text-xl text-white/80">
            Unlock New Opportunities and Maximize Efficiency with Cutting-Edge AI Support!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card border-none p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">{stat.icon}</div>
              <h3 className="text-xl font-bold text-white">{stat.title}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 p-4">
              <div className="w-6 h-6 rounded-full bg-brand-cyan flex-shrink-0 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-white/90">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16">
        <div className="container mx-auto px-4 space-y-20">
          {/* Feature 1: Product Descriptions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-5">
              <div className="flex items-center space-x-3">
                <Image src="/images/Vector-1.png" loading="lazy" width={40} height={40} alt="Description icon" />
                <h2 className="text-3xl font-bold text-gray-900">Create Stunning Product Descriptions</h2>
              </div>
              {/* Image for mobile */}
              <div className="lg:hidden">
                 <Image src="/images/a-man-working-in-a-call-center-8867431.png" loading="lazy" width={350} height={350} alt="Man working in a call center" className="rounded-lg shadow-md mx-auto" />
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Image src="https://cdn.prod.website-files.com/61a0db9411201997c3ebd0d7/670f72bb1d4ac4f92efb358f_Vectors-Wrapper.svg" loading="lazy" width={20} height={20} alt="Pink tick" className="mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-800">Conversion Rate Boost: </span>
                    <span className="text-gray-600">Product descriptions enhanced by AI show a <strong>35% increase</strong> in conversion rates.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Image src="https://cdn.prod.website-files.com/61a0db9411201997c3ebd0d7/670f72bb1d4ac4f92efb358f_Vectors-Wrapper.svg" loading="lazy" width={20} height={20} alt="Pink tick" className="mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-800">SEO Impact: </span>
                    <span className="text-gray-600">Optimized descriptions bring a <strong>25% boost</strong> in search visibility on average.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Image src="https://cdn.prod.website-files.com/61a0db9411201997c3ebd0d7/670f72bb1d4ac4f92efb358f_Vectors-Wrapper.svg" loading="lazy" width={20} height={20} alt="Pink tick" className="mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-800">Time Saved: </span>
                    <span className="text-gray-600">Reduce description-writing time by 80%, freeing up hours for other tasks.</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-lg font-semibold text-gray-800 mb-2">Try AI-Powered Descriptions Now</p>
                <Link href="https://mypulse.pro/register" className="inline-block bg-pink-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-pink-700 transition-colors">
                  Watch It In Action
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex flex-col items-center">
              <Image src="/images/a-man-working-in-a-call-center-8867431.png" loading="lazy" width={350} height={350} alt="Man working in a call center" className="rounded-lg shadow-lg" />
              <p className="mt-4 text-sm text-gray-500 italic text-center max-w-sm">Prompt: Watch the magic unfold! In just seconds, MyPulse’s AI Assistant crafts stunning, SEO-optimized product descriptions that get your products noticed.</p>
            </div>
          </div>

          {/* Feature 2: A/B Test Images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="hidden lg:flex flex-col items-center lg:order-1">
              <Image src="/images/AB-Testing.png" loading="lazy" width={350} height={350} alt="A/B testing interface" className="rounded-lg shadow-lg" />
              <p className="mt-4 text-sm text-gray-500 italic text-center max-w-sm"><strong>Prompt</strong>: Which image wins? Let the AI decide! Watch side-by-side A/B tests show you which visuals drive clicks and conversions. No more guesswork, just results!</p>
            </div>
             <div className="flex flex-col space-y-5 lg:order-2">
              <div className="flex items-center space-x-3">
                <Image src="/images/Vector-2.png" loading="lazy" width={40} height={40} alt="A/B test icon" />
                <h2 className="text-3xl font-bold text-gray-900">A/B Test Images</h2>
              </div>
              {/* Image for mobile */}
              <div className="lg:hidden">
                <Image src="/images/AB-Testing.png" loading="lazy" width={350} height={350} alt="A/B testing interface" className="rounded-lg shadow-md mx-auto" />
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Image src="https://cdn.prod.website-files.com/61a0db9411201997c3ebd0d7/670f72bb1d4ac4f92efb358f_Vectors-Wrapper.svg" loading="lazy" width={20} height={20} alt="Pink tick" className="mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-800">CTR Difference: </span>
                    <span className="text-gray-600">A/B-tested images result in a 2x increase in Click-Through Rate (CTR).</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Image src="https://cdn.prod.website-files.com/61a0db9411201997c3ebd0d7/670f72bb1d4ac4f92efb358f_Vectors-Wrapper.svg" loading="lazy" width={20} height={20} alt="Pink tick" className="mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-800">Conversion Lift: </span>
                    <span className="text-gray-600">Optimized images have a <strong>25% higher</strong> conversion rate compared to manually selected images.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Image src="https://cdn.prod.website-files.com/61a0db9411201997c3ebd0d7/670f72bb1d4ac4f92efb358f_Vectors-Wrapper.svg" loading="lazy" width={20} height={20} alt="Pink tick" className="mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-800">Sales Impact: </span>
                    <span className="text-gray-600">A/B tested visuals drive <strong>15% more</strong> sales in the first month.</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-lg font-semibold text-gray-800 mb-2">Let AI Pick Your Winning Images</p>
                <Link href="https://mypulse.pro/register" className="inline-block bg-pink-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-pink-700 transition-colors">
                  Start Testing
                </Link>
              </div>
            </div>
          </div>

          {/* Feature 3: Keyword Optimization */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-5">
              <div className="flex items-center space-x-3">
                <Image src="/images/Vector-3.png" loading="lazy" width={40} height={40} alt="Keyword icon" />
                <h2 className="text-3xl font-bold text-gray-900">Optimize Keywords Effortlessly</h2>
              </div>
              {/* Image for mobile */}
              <div className="lg:hidden">
                <Image src="/images/a-man-working-in-a-call-center-8867431-2.png" loading="lazy" width={350} height={350} alt="Man at computer optimizing keywords" className="rounded-lg shadow-md mx-auto" />
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                   <Image src="https://cdn.prod.website-files.com/61a0db9411201997c3ebd0d7/670f72bb1d4ac4f92efb358f_Vectors-Wrapper.svg" loading="lazy" width={20} height={20} alt="Pink tick" className="mt-1 flex-shrink-0" />
                   <div>
                    <span className="font-semibold text-gray-800">SEO Ranking Improvement: </span>
                    <span className="text-gray-600">Keyword-optimized listings see an <strong>18% increase</strong> in organic search rankings.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                   <Image src="https://cdn.prod.website-files.com/61a0db9411201997c3ebd0d7/670f72bb1d4ac4f92efb358f_Vectors-Wrapper.svg" loading="lazy" width={20} height={20} alt="Pink tick" className="mt-1 flex-shrink-0" />
                   <div>
                    <span className="font-semibold text-gray-800">Traffic Growth: </span>
                    <span className="text-gray-600">Boost traffic by <strong>20%</strong> within the first 3 months with AI-driven keyword optimization.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                   <Image src="https://cdn.prod.website-files.com/61a0db9411201997c3ebd0d7/670f72bb1d4ac4f92efb358f_Vectors-Wrapper.svg" loading="lazy" width={20} height={20} alt="Pink tick" className="mt-1 flex-shrink-0" />
                   <div>
                    <span className="font-semibold text-gray-800">Time Saved: </span>
                    <span className="text-gray-600">Spend <strong>90% less</strong> time on SEO optimization with AI doing the work.</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-lg font-semibold text-gray-800 mb-2">Optimize Your Keywords in Seconds</p>
                <Link href="https://mypulse.pro/register" className="inline-block bg-pink-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-pink-700 transition-colors">
                  Try Now
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex flex-col items-center">
              <Image src="/images/a-man-working-in-a-call-center-8867431-2.png" loading="lazy" width={350} height={350} alt="Man at computer optimizing keywords" className="rounded-lg shadow-lg" />
              <p className="mt-4 text-sm text-gray-500 italic text-center max-w-sm"><strong>Prompt</strong>: Effortless SEO? Yes, please! MyPulse’s AI Assistant optimizes your keywords in seconds, boosting visibility while you focus on what you love: growing your brand</p>
            </div>
          </div>
        </div>
      </section>

      <div className=" font-sans">
      <section className="py-12 px-4 md:px-8">
        {/* Header Button */}
        <div className="text-center mb-12">
          <button className="bg-white text-gray-800 font-semibold py-3 px-6 rounded-full shadow-md">
            AI Assistant Features
          </button>
        </div>

        {/* Before vs. After Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Box 1: Preview Look (Before) */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center h-full">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Preview Look</h1>
            <Image
              src="/images/ai-girl-preview.png"
              alt="Low-resolution product preview"
              width={262}
              height={262}
              className="rounded-md"
            />
            <ul className="mt-6 space-y-3 text-left">
              <li className="flex items-start">
                <Image src="/images/cross.png" alt="cross icon" width={20} height={20} className="mr-3 mt-1" />
                <span className="text-gray-600">Low-resolution product image with plain background.</span>
              </li>
              <li className="flex items-start">
                <Image src="/images/cross.png" alt="cross icon" width={20} height={20} className="mr-3 mt-1" />
                <span className="text-gray-600">Lacks professional presentation and engaging context.</span>
              </li>
              <li className="flex items-start">
                <Image src="/images/cross.png" alt="cross icon" width={20} height={20} className="mr-3 mt-1" />
                <span className="text-gray-600">No optimized or detailed product description available.</span>
              </li>
            </ul>
          </div>

          {/* Box 2: AI Generation Tool */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center h-full transform lg:scale-105">
            <h1 className="text-2xl font-bold text-pink-600 mb-4">
              MyPulse AI<br />Generation Tool ✨
            </h1>
            <div className="relative w-full flex justify-center items-center my-4">
                {/* For smaller screens */}
                <Image src="/images/Change-mobile.png" alt="Arrow pointing right" width={40} height={40} className="lg:hidden" />
                {/* For larger screens */}
                <Image src="/images/Change.png" alt="Arrow pointing right" width={100} height={50} className="hidden lg:block" />
            </div>
            <ul className="mt-4 space-y-3 text-left">
              <li className="flex items-start">
                <Image src="/images/arrow.png" alt="arrow icon" width={20} height={20} className="mr-3 mt-1" />
                <span className="text-gray-600">Utilizes AI to enhance product images with customizable backgrounds.</span>
              </li>
              <li className="flex items-start">
                <Image src="/images/arrow.png" alt="arrow icon" width={20} height={20} className="mr-3 mt-1" />
                <span className="text-gray-600">Generates high-quality images in less than 30 seconds.</span>
              </li>
              <li className="flex items-start">
                <Image src="/images/arrow.png" alt="arrow icon" width={20} height={20} className="mr-3 mt-1" />
                <span className="text-gray-600">Automatically crafts professional product descriptions.</span>
              </li>
            </ul>
          </div>

          {/* Box 3: Final Look (After) */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center h-full">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Final Look!</h1>
            <figure>
              <Image
                src="/images/icon.png"
                alt="AI-generated high-quality product"
                width={262}
                height={262}
                className="rounded-md"
              />
              <figcaption className="mt-4 text-sm italic text-gray-500 bg-gray-100 p-3 rounded-md">
                “This pastel-blue lace dress offers a delicate floral design with three-quarter sleeves. Its elegant, fitted silhouette is perfect for daytime outings or semi-formal occasions, blending comfort and timeless style.”
              </figcaption>
            </figure>
            <ul className="mt-6 space-y-3 text-left">
              <li className="flex items-start">
                 <Image src="https://cdn.prod.website-files.com/61a0db9411201997c3ebd0d7/670e2e17c543c456e28735ce_Vectors-Wrapper.svg" alt="tick icon" width={20} height={20} className="mr-3 mt-1" />
                <span className="text-gray-600">High-resolution, visually appealing product images.</span>
              </li>
              <li className="flex items-start">
                 <Image src="https://cdn.prod.website-files.com/61a0db9411201997c3ebd0d7/670e2e17c543c456e28735ce_Vectors-Wrapper.svg" alt="tick icon" width={20} height={20} className="mr-3 mt-1" />
                <span className="text-gray-600">Engaging, keyword-optimized product descriptions.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Gallery Section - Simplified to a responsive grid */}
      <section className="py-16 px-4">
        <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                Explore the <span className="text-pink-600">MyPulse</span> Gallery of AI-Generated
            </h1>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Fashion Images</h1>
        </div>
        {/* The slider is converted to a static, responsive grid. For a functional slider, a library like Swiper.js or Embla Carousel is recommended. */}
        <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="h-96 bg-gray-300 rounded-lg bg-cover bg-center" style={{backgroundImage: "url('/images/ai-slide-1.jpg')"}}></div>
            <div className="h-96 bg-gray-300 rounded-lg bg-cover bg-center" style={{backgroundImage: "url('/images/ai-slide-2.jpg')"}}></div>
            <div className="h-96 bg-gray-300 rounded-lg bg-cover bg-center" style={{backgroundImage: "url('/images/ai-slide-3.jpg')"}}></div>
        </div>
      </section>

      {/* Footer CTA and Solutions */}
      <footer className="bg-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="bg-pink-600 text-white text-center rounded-xl p-10 mb-16">
                <h2 className="text-3xl font-bold">Turn Browsers into Buyers with AI Magic ✨</h2>
                <p className="mt-4 max-w-2xl mx-auto">
                    Unlock the power of AI today and see your sales take off. Our AI Assistant will transform your product listings in just a few clicks.
                </p>
                <div className="mt-8">
                    <a 
                        href="https://www.mypulse.my/#contact-us"
                        className="bg-white text-pink-600 font-bold py-3 px-8 rounded-full inline-block transition-transform duration-300 hover:scale-105"
                    >
                        Learn More
                    </a>
                </div>
            </div>

            <div className="text-center mb-10">
                <p className="text-2xl font-semibold text-gray-700">
                    Explore More <span className="font-bold">MyPulse's</span> Solutions
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 rounded-lg overflow-hidden">
                <a href="https://www.mypulse.my/financial-pulse" target="_blank" rel="noopener noreferrer" className="bg-white p-6 flex flex-col items-center text-center transition duration-300 hover:bg-gray-50">
                    <Image src="/images/predict.svg" alt="Financial Pulse Icon" width={40} height={40} className="mb-4" />
                    <h3 className="text-xl font-bold text-gray-800">Financial Pulse</h3>
                    <p className="text-gray-500 mt-2">Track profit, loss, and OPEX in one dashboard with personalized pricing insights.</p>
                </a>
                 <a href="https://www.mypulse.my/multichannel-insights-hub" target="_blank" rel="noopener noreferrer" className="bg-white p-6 flex flex-col items-center text-center transition duration-300 hover:bg-gray-50">
                    <Image src="/images/insights.svg" alt="Insights Hub Icon" width={40} height={40} className="mb-4" />
                    <h3 className="text-xl font-bold text-gray-800">Multichannel Insights Hub</h3>
                    <p className="text-gray-500 mt-2">Real-time sales and cost tracking across multiple marketplaces, manage unlimited shops seamlessly.</p>
                </a>
                 <a href="http://www.mypulse.my/skuperformance-tracker" target="_blank" rel="noopener noreferrer" className="bg-white p-6 flex flex-col items-center text-center transition duration-300 hover:bg-gray-50">
                    <Image src="/images/sku.svg" alt="SKU Tracker Icon" width={40} height={40} className="mb-4" />
                    <h3 className="text-xl font-bold text-gray-800">SKU Performer Tracker</h3>
                    <p className="text-gray-500 mt-2">Gain insights into product performance, track sales, predict revenue, and optimize inventory.</p>
                </a>
            </div>
        </div>
      </footer>
    </div>
      </main>
    </div>
  );
}
