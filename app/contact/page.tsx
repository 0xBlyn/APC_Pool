"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import Image from "next/image"
import contact from "@/public/images/contact.png"
import { Mail, Phone } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div>
      <div className="bg-[#00A3C4] text-white py-6">
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

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <p className="text-black text-2xl font-bold mb-6">
              Fill out the form below, and we&apos;ll get back to you as soon as possible!
            </p>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#191919] font-bold text-lg mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...form.register("name")}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-[#191919] font-bold text-lg mb-1">
                    Your Phone number <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...form.register("phone")}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter your phone"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#191919] font-bold text-lg mb-1">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  {...form.register("email")}
                  type="email"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-[#191919] font-bold text-lg mb-1">Message</label>
                <textarea
                  {...form.register("message")}
                  className="w-full px-3 py-2 border rounded-md min-h-[120px]"
                  placeholder="Anything you would like us to know"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#00A3C4] hover:bg-[#008CAD] text-white py-3 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="relative h-[550px] rounded-3xl overflow-hidden">
            <Image
              src={contact}
              alt="Modern pool design"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

