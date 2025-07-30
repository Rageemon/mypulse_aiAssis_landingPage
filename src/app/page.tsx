import Image from "next/image";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import heroImage from "../../public/images/cover-img-p-500.png";
export default function Home() {
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
      </main>
    </div>
  );
}
