"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import contact from "@/public/images/contact.png"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-[#00B5E2] text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <div className="flex justify-center gap-8">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:contact@poolside.com">contact@poolside.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:+234809797087">+234 809 7978 087</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">
              Fill out the form below, and we'll get back to you as soon as possible!
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold mb-2">
                  Your Name <span className="text-[#F20707]">*</span>
                </label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-lg font-semibold mb-2">
                  Your Phone number <span className="text-[#F20707]">*</span>
                </label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-semibold mb-2">
                  Your Email <span className="text-[#F20707]">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-semibold mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <Button type="submit" className="w-full h-[45px] rounded-none text-xl font-bold text-white bg-[#00A3C4] hover:bg-[#0099CC]">
                Submit
              </Button>
            </form>
          </div>

          {/* Image */}
          <div className="rounded-lg px-[3%] overflow-hidden shadow-lg">
            <Image
              src={contact}
              alt="Modern pool with wooden deck"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

