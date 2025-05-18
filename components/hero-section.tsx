"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-grid-pattern bg-muted/40" />
      
      {/* Gradient blobs */}
      <div 
        className={cn(
          "absolute top-20 left-1/4 w-72 h-72 rounded-full filter blur-3xl opacity-30 animate-blob",
          theme === "dark" ? "bg-chart-1/40" : "bg-chart-1/20"
        )} 
      />
      <div 
        className={cn(
          "absolute top-40 right-1/4 w-72 h-72 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000",
          theme === "dark" ? "bg-chart-2/40" : "bg-chart-2/20"
        )} 
      />
      <div 
        className={cn(
          "absolute -bottom-10 left-1/3 w-72 h-72 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-4000",
          theme === "dark" ? "bg-chart-4/40" : "bg-chart-4/20"
        )} 
      />

      {/* Hero content */}
      <div className="container mx-auto px-4 py-32 md:py-36 lg:py-40 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-chart-1 via-chart-2 to-chart-4 animate-gradient">
            Create Beautiful Web Experiences
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Build stunning, high-performance websites that captivate your audience and drive results with our modern web solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}