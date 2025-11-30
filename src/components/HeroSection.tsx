"use client";

import { ArrowRight, Play } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 gradient-bg opacity-10" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 inline-block"
          >
            <span className="inline-flex items-center rounded-full bg-primary/10 px-6 py-2 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
              Trusted by Fortune 500 Companies
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl mb-6"
          >
            Transform Your{" "}
            <span className="text-gradient">
              Digital Future
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            Leading the way in enterprise innovation with cutting-edge solutions
            that drive growth, efficiency, and unprecedented success for global organizations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="rounded-full text-base px-8 h-14" asChild>
              <a href="#contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full text-base px-8 h-14 glass-effect"
              asChild
            >
              <a href="#case-studies">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </a>
            </Button>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4"
          >
            {[
              { value: "500+", label: "Global Clients" },
              { value: "98%", label: "Satisfaction Rate" },
              { value: "$2B+", label: "Revenue Generated" },
              { value: "15+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col">
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-foreground/40"
          />
        </div>
      </motion.div>
    </section>
  );
}
