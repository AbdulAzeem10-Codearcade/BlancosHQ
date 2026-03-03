"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { SectionGlow } from "./section-glow"
import ScrollFloat from "./ui/scroll-float"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@blancoshq.com",
    href: "mailto:hello@blancoshq.com",
    color: "#4285F4",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    color: "#34A853",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: "#",
    color: "#EA4335",
  },
]

export function Contact() {
  const { ref, isInView } = useInView()
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for reaching out! We will get back to you soon.")
    setFormState({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden bg-background py-24 md:py-32">
      <SectionGlow variant="contact" />
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-[#303134] bg-[#28292a] px-4 py-1.5 text-sm font-medium text-[#8ab4f8] ${isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
          >
            Contact Us
          </div>
          <ScrollFloat
            containerClassName="mt-6"
            textClassName="font-serif text-3xl font-bold text-[#e3e3e3] text-balance md:text-5xl"
          >
            Let's build something amazing together
          </ScrollFloat>
          <p
            className={`mt-4 text-lg leading-relaxed text-[#9aa0a6] text-pretty ${isInView ? "animate-fade-in-up animation-delay-200" : "opacity-0"
              }`}
          >
            Ready to transform your ideas into reality? Reach out and start the
            conversation.
          </p>
        </div>

        <div
          className={`mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-5 ${isInView ? "animate-fade-in-up animation-delay-300" : "opacity-0"
            }`}
        >
          {/* Contact Info */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="magic-border group flex items-start gap-4 rounded-2xl border border-[#303134] bg-card p-5 transition-all duration-300"
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = `${item.color}40`
                  el.style.boxShadow = `0 0 15px ${item.color}10`
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = '#303134'
                }}
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <item.icon size={20} style={{ color: item.color }} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#9aa0a6]">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#e3e3e3]">{item.value}</p>
                </div>
              </a>
            ))}

            {/* Contact image placeholder */}
            <div className="img-placeholder rounded-2xl border border-[#303134] h-40 flex items-center justify-center">
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#4285F4]" />
                  <span className="h-2 w-2 rounded-full bg-[#EA4335]" />
                  <span className="h-2 w-2 rounded-full bg-[#FBBC05]" />
                  <span className="h-2 w-2 rounded-full bg-[#34A853]" />
                </div>
                <span className="text-xs text-[#9aa0a6]">Contact image</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="magic-border flex flex-col gap-5 lg:col-span-3 rounded-3xl border border-[#303134] bg-card p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[#e3e3e3]">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-[#303134] bg-background px-4 py-3 text-sm text-[#e3e3e3] placeholder:text-[#9aa0a6]/50 focus:border-[#4285F4] focus:outline-none focus:ring-2 focus:ring-[#4285F4]/20 transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[#e3e3e3]">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-[#303134] bg-background px-4 py-3 text-sm text-[#e3e3e3] placeholder:text-[#9aa0a6]/50 focus:border-[#4285F4] focus:outline-none focus:ring-2 focus:ring-[#4285F4]/20 transition-all"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-[#e3e3e3]">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={formState.subject}
                onChange={handleChange}
                placeholder="Project inquiry"
                className="w-full rounded-xl border border-[#303134] bg-background px-4 py-3 text-sm text-[#e3e3e3] placeholder:text-[#9aa0a6]/50 focus:border-[#4285F4] focus:outline-none focus:ring-2 focus:ring-[#4285F4]/20 transition-all"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[#e3e3e3]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formState.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="w-full resize-none rounded-xl border border-[#303134] bg-background px-4 py-3 text-sm text-[#e3e3e3] placeholder:text-[#9aa0a6]/50 focus:border-[#4285F4] focus:outline-none focus:ring-2 focus:ring-[#4285F4]/20 transition-all"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4285F4] px-8 py-3.5 text-base font-semibold text-white shadow-[0_0_20px_rgba(66,133,244,0.2)] transition-all hover:shadow-[0_0_30px_rgba(66,133,244,0.4)] hover:brightness-110"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
