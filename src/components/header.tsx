'use client';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useState } from "react";
import { Menu, GraduationCap } from "lucide-react";
import Link from "next/link";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navigationItems = [
      { name: 'Solutions', href: '/solutions' },
      { name: 'Blog', href: '/blog' },
      { name: 'About us', href: '/about-us' },
    ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <img src="/images/logo.svg" loading="lazy" alt="MyPulse. Smart analytics is simple" className="h-14 w-auto mr-2 drop-shadow-lg rounded" />
        

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-white hover:text-brand-cyan transition-colors">Solutions</a>
          <a href="#" className="text-white hover:text-brand-cyan transition-colors">Blog</a>
          <a href="#" className="text-white hover:text-brand-cyan transition-colors">About us</a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="outline"
            className="border border-purple-500 text-purple-500 bg-transparent hover:bg-purple-500 hover:text-black transition-colors rounded px-4 py-2 font-semibold"
          >
            Free Consultation
          </Button>
          <Button variant="link" className="flex items-center gap-2 text-white hover:text-brand-cyan transition-colors">
            Login
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
          </Button>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="backdrop-blur-md bg-black/20">
            <SheetHeader>
              <SheetTitle className="flex items-center space-x-2">
                <span className="text-lg text-white">
                  mypulse
                </span>
              </SheetTitle>
            </SheetHeader>
            {/* Mobile Navigation */}
            <div className="flex flex-col space-y-4 mt-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-4 pt-4 border-t">
                <Link href="/auth/login">
                  <Button 
                    size="sm" 
                    className="w-full bg-primary text-primary-foreground hover:opacity-90"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/auth/login">
                  <Button 
                    size="sm" 
                    className="border border-purple-500 text-purple-500 bg-transparent hover:bg-purple-500 hover:text-black transition-colors rounded px-4 py-2 font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    Free Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      
    </header>
  );
};

export default Header;