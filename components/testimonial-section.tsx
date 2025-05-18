"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Working with NEXTWEB transformed our online presence. Their attention to detail and responsive design expertise resulted in a website that truly represents our brand.",
    author: "Alex Johnson",
    role: "CEO",
    company: "TechInnovate",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    content: "The team at NEXTWEB delivered beyond our expectations. Our new website is not only visually stunning but also performs exceptionally well, leading to a significant increase in conversions.",
    author: "Samantha Williams",
    role: "Marketing Director",
    company: "GrowthFirst",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    content: "I was impressed by how quickly NEXTWEB understood our vision and translated it into a beautiful, functional website. Their expertise and dedication made the entire process smooth and enjoyable.",
    author: "Michael Chen",
    role: "Founder",
    company: "InnovateLabs",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  
  const goToNext = useCallback(() => {
    if (isAnimating) return;
    setDirection('right');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  }, [isAnimating]);

  const goToPrev = useCallback(() => {
    if (isAnimating) return;
    setDirection('left');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 300);
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(goToNext, 10000);
    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it – hear from some of our satisfied clients.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Quote className="absolute text-primary/10 h-24 w-24 -top-6 -left-6 z-0" />
          
          <div className="relative overflow-hidden">
            <div 
              className={cn(
                "transition-transform duration-300 ease-in-out",
                isAnimating && direction === 'right' ? "-translate-x-10 opacity-0" : "",
                isAnimating && direction === 'left' ? "translate-x-10 opacity-0" : "",
              )}
            >
              <Card className="border-0 shadow-none bg-transparent">
                <CardContent className="pt-6">
                  <p className="text-xl md:text-2xl italic text-center mb-8 relative z-10">
                    "{testimonials[currentIndex].content}"
                  </p>
                  
                  <div className="flex flex-col items-center">
                    <Avatar className="h-16 w-16 mb-4 border-2 border-primary/20">
                      <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].author} />
                      <AvatarFallback>{testimonials[currentIndex].author.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <h4 className="font-semibold text-lg">{testimonials[currentIndex].author}</h4>
                      <p className="text-muted-foreground">
                        {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-primary" : "bg-primary/20"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-background/80 shadow-sm backdrop-blur-sm opacity-70 hover:opacity-100 transition-opacity"
              onClick={goToPrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-background/80 shadow-sm backdrop-blur-sm opacity-70 hover:opacity-100 transition-opacity"
              onClick={goToNext}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}