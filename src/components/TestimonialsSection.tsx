"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    content:
      "Working with this team has been transformative for our business. Their expertise and dedication to our success is unmatched in the industry.",
    author: "Jennifer Martinez",
    role: "CEO, TechCorp Global",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    rating: 5,
  },
  {
    content:
      "The level of innovation and professionalism they bring to every project is outstanding. They've become an integral part of our growth strategy.",
    author: "Robert Chang",
    role: "CTO, Innovation Labs",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    rating: 5,
  },
  {
    content:
      "Their solutions have revolutionized how we operate. The ROI has exceeded our expectations, and their ongoing support is exceptional.",
    author: "Amanda Foster",
    role: "COO, Digital Ventures",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
    rating: 5,
  },
];

const clients = [
  { name: "TechCorp", logo: "TC" },
  { name: "GlobalBank", logo: "GB" },
  { name: "HealthPlus", logo: "HP" },
  { name: "RetailPro", logo: "RP" },
  { name: "InnovateCo", logo: "IC" },
  { name: "FinanceHub", logo: "FH" },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by industry leaders around the world
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="glass-effect rounded-2xl p-8 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-lg leading-relaxed mb-6 flex-grow">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-border pt-16"
        >
          <p className="text-center text-sm font-medium text-muted-foreground mb-8">
            Trusted by leading organizations worldwide
          </p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-center justify-center"
              >
                <div className="flex items-center justify-center w-24 h-24 rounded-xl bg-accent/50 text-2xl font-bold text-muted-foreground hover:bg-accent transition-colors">
                  {client.logo}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
