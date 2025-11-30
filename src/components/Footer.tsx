"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

const offices = [
  {
    city: "New York",
    address: "123 Fifth Avenue, NY 10001",
    phone: "+1 (555) 123-4567",
  },
  {
    city: "London",
    address: "456 Oxford Street, W1D 1BS",
    phone: "+44 20 1234 5678",
  },
  {
    city: "Singapore",
    address: "789 Marina Bay, 018956",
    phone: "+65 1234 5678",
  },
  {
    city: "Tokyo",
    address: "321 Shibuya, 150-0002",
    phone: "+81 3 1234 5678",
  },
];

const footerLinks = {
  Company: ["About Us", "Careers", "Press", "Partners"],
  Solutions: ["Cloud Services", "Data Analytics", "Cybersecurity", "AI & ML"],
  Resources: ["Blog", "Case Studies", "Documentation", "Support"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Compliance"],
};

export function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <footer id="contact" className="bg-card border-t border-border">
      {/* Contact Form Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to transform your business? Let's start a conversation.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="mt-2 min-h-[120px]"
                />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-full">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Global Offices */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Global Offices</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {offices.map((office, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-semibold text-lg">{office.city}</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 flex-shrink-0" />
                      <span>{office.phone}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 glass-effect rounded-2xl">
              <h4 className="font-semibold mb-3">General Inquiries</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:info@enterprise.com" className="hover:text-primary transition-colors">
                    info@enterprise.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-2 md:col-span-4 lg:col-span-1">
              <Link href="/" className="text-2xl font-serif font-bold">
                Enterprise
              </Link>
              <p className="mt-4 text-sm text-muted-foreground">
                Building tomorrow's solutions today with innovation and excellence.
              </p>
              <div className="flex gap-4 mt-6">
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-semibold mb-4">{title}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Enterprise. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Designed with excellence for the modern enterprise
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
