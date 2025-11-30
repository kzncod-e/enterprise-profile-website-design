"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Database,
  Laptop,
  Lock,
  Smartphone,
  Zap,
  BarChart,
  Cpu,
  Palette,
} from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure designed to grow with your business needs.",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description:
      "Turn your data into actionable insights with advanced analytics platforms.",
  },
  {
    icon: Laptop,
    title: "Enterprise Software",
    description:
      "Custom software solutions tailored to your unique business requirements.",
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    description:
      "Protect your digital assets with industry-leading security solutions.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile apps that deliver exceptional experiences.",
  },
  {
    icon: Zap,
    title: "AI & Automation",
    description:
      "Leverage artificial intelligence to automate and optimize operations.",
  },
  {
    icon: BarChart,
    title: "Business Intelligence",
    description:
      "Make informed decisions with comprehensive BI and reporting tools.",
  },
  {
    icon: Cpu,
    title: "IoT Solutions",
    description:
      "Connect and manage devices with cutting-edge Internet of Things technology.",
  },
  {
    icon: Palette,
    title: "Digital Experience",
    description:
      "Create memorable user experiences with modern design and UX principles.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive solutions designed to accelerate your digital transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative"
            >
              <div className="h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary hover:shadow-xl hover:-translate-y-1">
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-primary/10 p-3 text-primary transition-transform duration-300 group-hover:scale-110">
                  <service.icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
