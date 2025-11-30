"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const caseStudies = [
  {
    title: "Global Bank Digital Transformation",
    category: "Financial Services",
    description:
      "Modernized legacy systems for a Fortune 100 bank, reducing operational costs by 40% and improving customer satisfaction scores by 65%.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    metrics: [
      { label: "Cost Reduction", value: "40%" },
      { label: "Time Saved", value: "60%" },
    ],
  },
  {
    title: "Healthcare Platform Innovation",
    category: "Healthcare",
    description:
      "Built a comprehensive telehealth platform serving 2M+ patients, enabling seamless virtual care delivery during critical times.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    metrics: [
      { label: "Users", value: "2M+" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
  {
    title: "Retail E-commerce Revolution",
    category: "Retail",
    description:
      "Transformed traditional retail operations into an omnichannel powerhouse, increasing online revenue by 300% in 18 months.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    metrics: [
      { label: "Revenue Growth", value: "300%" },
      { label: "Market Expansion", value: "15 Countries" },
    ],
  },
];

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-24 sm:py-32 bg-accent/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-muted-foreground">
            Real results from our partnerships with industry leaders
          </p>
        </motion.div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="glass-effect rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                  <div className="relative h-[300px] lg:h-full rounded-2xl overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="flex flex-col justify-center space-y-6">
                    <div>
                      <div className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary mb-4">
                        {study.category}
                      </div>
                      <h3 className="text-3xl font-bold mb-4">{study.title}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {study.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx}>
                          <div className="text-3xl font-bold text-gradient mb-1">
                            {metric.value}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      className="w-fit rounded-full group/btn"
                    >
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
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
