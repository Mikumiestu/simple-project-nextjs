"use client";

import { useState } from "react";
import { 
  Layers, 
  Smartphone, 
  Zap, 
  Shield, 
  Check, 
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    title: "Responsive Design",
    description: "Websites that look beautiful on all devices, from desktop to mobile.",
    icon: <Smartphone className="h-10 w-10 text-chart-1" />,
  },
  {
    title: "Lightning Fast",
    description: "Optimized for speed and performance to keep your visitors engaged.",
    icon: <Zap className="h-10 w-10 text-chart-2" />,
  },
  {
    title: "SEO Optimized",
    description: "Structured to help search engines find and rank your content higher.",
    icon: <Sparkles className="h-10 w-10 text-chart-3" />,
  },
  {
    title: "Secure & Reliable",
    description: "Built with security best practices to keep your data safe and sound.",
    icon: <Shield className="h-10 w-10 text-chart-4" />,
  },
  {
    title: "Modern Stack",
    description: "Using the latest technologies to ensure your site stays current.",
    icon: <Layers className="h-10 w-10 text-chart-5" />,
  },
  {
    title: "Quality Assurance",
    description: "Thoroughly tested to ensure everything works flawlessly.",
    icon: <Check className="h-10 w-10 text-chart-1" />,
  },
];

export function FeatureSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Powerful Features for Modern Websites
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to create stunning, high-performance web experiences that captivate your audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className={cn(
                "group relative overflow-hidden transition-all duration-300 border border-border/50 hover:border-primary/20 hover:shadow-md",
                hoveredIndex === index ? "scale-[1.02]" : ""
              )}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
              
              <CardHeader>
                <div className="mb-4 p-3 rounded-lg inline-block bg-muted/50 group-hover:bg-muted transition-colors duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl transition-colors duration-300">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}