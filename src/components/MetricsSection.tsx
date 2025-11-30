"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Globe, Award } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: 2500,
    suffix: "+",
    label: "Projects Delivered",
    color: "text-chart-1",
  },
  {
    icon: Users,
    value: 850,
    suffix: "+",
    label: "Team Members",
    color: "text-chart-2",
  },
  {
    icon: Globe,
    value: 45,
    suffix: "",
    label: "Countries Served",
    color: "text-chart-3",
  },
  {
    icon: Award,
    value: 120,
    suffix: "+",
    label: "Industry Awards",
    color: "text-chart-4",
  },
];

function useInView(ref: React.RefObject<HTMLElement>) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isInView;
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-5xl sm:text-6xl font-bold">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export function MetricsSection() {
  return (
    <section className="py-24 sm:py-32 bg-accent/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">
            Proven Track Record
          </h2>
          <p className="text-lg text-muted-foreground">
            Numbers that speak to our commitment to excellence and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="glass-effect rounded-2xl p-8 h-full transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="flex flex-col items-center text-center">
                  <div className={`mb-4 ${metric.color}`}>
                    <metric.icon className="h-12 w-12" strokeWidth={1.5} />
                  </div>
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                  <div className="mt-4 text-base font-medium text-muted-foreground">
                    {metric.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
