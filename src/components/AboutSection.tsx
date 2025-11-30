"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import Image from "next/image";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower organizations worldwide with innovative technology solutions that drive sustainable growth and create lasting value.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the global leader in enterprise technology, recognized for excellence, innovation, and unwavering commitment to client success.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, excellence, innovation, and collaboration form the foundation of everything we do and every relationship we build.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-accent/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">
            About Us
          </h2>
          <p className="text-lg text-muted-foreground">
            Building tomorrow's solutions today with passion and purpose
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden glass-effect">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Modern office workspace"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">
              Leading Innovation Since 2008
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For over 15 years, we've been at the forefront of digital transformation,
              helping businesses navigate the complexities of modern technology.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of world-class experts combines deep industry knowledge with
              cutting-edge technical expertise to deliver solutions that not only
              meet today's challenges but anticipate tomorrow's opportunities.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From startups to Fortune 500 companies, we've partnered with
              organizations across every major industry to drive growth, efficiency,
              and innovation at scale.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="glass-effect rounded-2xl p-8 h-full">
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-primary/10 p-3 text-primary">
                  <value.icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
