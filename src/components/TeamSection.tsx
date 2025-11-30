"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Sarah Chen",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Michael Rodriguez",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Emily Watson",
    role: "Chief Operating Officer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "David Kim",
    role: "VP of Engineering",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Lisa Thompson",
    role: "VP of Design",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "James Anderson",
    role: "VP of Sales",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    linkedin: "#",
    twitter: "#",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">
            Leadership Team
          </h2>
          <p className="text-lg text-muted-foreground">
            Meet the visionaries driving our mission forward
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-card border border-border transition-all duration-300 hover:border-primary hover:shadow-xl">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                    <a
                      href={member.linkedin}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href={member.twitter}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                      aria-label={`${member.name}'s Twitter profile`}
                    >
                      <Twitter className="h-5 w-5 text-white" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
