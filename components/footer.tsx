import Link from "next/link"
import { Facebook, Instagram, Linkedin, Send, PhoneIcon as WhatsApp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact Us", href: "/contact" },
]

const services = [
  { name: "Custom Pool Design", href: "/services/design" },
  { name: "Pool Construction & Installation", href: "/services" },
  { name: "Pool Renovation & Remodeling", href: "/services" },
  { name: "Pool Maintenance & Repairs", href: "/services" },
  { name: "Water Features & Landscaping", href: "/services" },
]

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "WhatsApp", icon: WhatsApp, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-[#000E18] text-white px-[5%]">
      <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">APC Pool</h2>
            <p className="text-lg text-gray-300">
              Transforming outdoor spaces with innovative pool designs and expert craftsmanship.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <Link key={item.name} href={item.href} className="text-gray-400 transition-colors hover:text-white">
                  <item.icon className="h-5 w-5" />
                  <span className="sr-only">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 transition-colors hover:text-white hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-4 space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 transition-colors hover:text-white hover:underline"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="mt-2 text-sm text-gray-300">with Pool Design Trends & Tips</p>
            <p className="mt-2 text-sm text-gray-400">Subscribe to receive exclusive offers</p>
            <form className="mt-4 flex gap-2">
              <Input
                type="email"
                placeholder="Enter Email"
                className="bg-gray-800 text-white placeholder:text-gray-400"
              />
              <Button size="icon" className="bg-[#00B5E2] hover:bg-[#0099CC]">
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} poolside | All Rights Reserved |{" "}
            <Link href="/privacy" className="hover:text-white hover:underline">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="/terms" className="hover:text-white hover:underline">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

