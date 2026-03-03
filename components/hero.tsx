"use client"

import { ArrowRight, Code2, Smartphone, Brain, Cloud, Palette, Workflow } from "lucide-react"
import { AnimatedCounter } from "./animated-counter"
import { useInView } from "@/hooks/use-in-view"
import { Typewriter } from "./ui/typewriter"
import Aurora from "./ui/aurora"

const capabilities = [
  { icon: Code2, label: "Web Development", glow: "glow-border-blue" },
  { icon: Smartphone, label: "App Development", glow: "glow-border-green" },
  { icon: Brain, label: "AI / ML", glow: "glow-border-red" },
  { icon: Cloud, label: "DevOps & Cloud", glow: "glow-border-yellow" },
  { icon: Palette, label: "UI/UX Design", glow: "glow-border-blue" },
  { icon: Workflow, label: "Automation", glow: "glow-border-green" },
]

const stats = [
  { value: 6, suffix: "+", label: "Projects Delivered", color: "#4285F4" },
  { value: 77, suffix: "%", label: "Client Satisfaction", color: "#34A853" },
  { value: 24, suffix: "/7", label: "Dedicated Support", color: "#FBBC05" },
]

export function Hero() {
  const { ref, isInView } = useInView()

  return (
    <section
      id="home"
      ref={ref}
      className="relative overflow-hidden bg-background pt-40 pb-20 md:pt-48 md:pb-32"
    >
      {/* Aurora Background - Google Colors */}
      <div className="absolute inset-0 w-full h-full opacity-70">
        <Aurora
          colorStops={["#4285F4", "#34A853", "#FBBC05", "#EA4335"]}
          amplitude={1.5}
          blend={0.7}
          speed={0.8}
        />
      </div>

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/40 to-background" />

      <div className="relative mx-auto max-w-7xl px-6 z-10">
        {/* Badge */}
        <div className={`flex justify-center mb-8 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#303134] bg-card/80 backdrop-blur-sm px-5 py-2.5 text-sm font-medium text-[#9aa0a6] animate-fast-blink">
            <span className="flex h-2 w-2 rounded-full bg-[#34A853] animate-glow-pulse" />
            Crafting Digital Excellence
          </div>
        </div>

        {/* Title */}
        <h1
          className={`mx-auto max-w-4xl text-center font-serif text-4xl font-bold leading-tight tracking-tight text-[#e3e3e3] text-balance md:text-6xl lg:text-7xl ${isInView ? "animate-fade-in-up animation-delay-100" : "opacity-0"
            }`}
        >
          Building Future-Ready{" "}
          <span className="block mt-2 h-[1.2em]">
            <Typewriter
              className="bg-linear-to-r from-[#4285F4] via-[#34A853] to-[#FBBC05] bg-clip-text text-transparent animate-gradient-x"
              words={[
                "Digital Solutions",
                "Web Solutions",
                "App Solutions",
                "AI/ML Solutions",
                "Automation Solutions"
              ]}
              typingSpeed={100}
              deletingSpeed={50}
              pauseDuration={2500}
            />
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-[#9aa0a6] text-pretty md:text-xl ${isInView ? "animate-fade-in-up animation-delay-200" : "opacity-0"
            }`}
        >
          Blancos HQ transforms ambitious ideas into scalable digital products
          with modern tech stacks and engineering precision.
        </p>

        {/* CTA Buttons */}
        <div
          className={`mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row ${isInView ? "animate-fade-in-up animation-delay-300" : "opacity-0"
            }`}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[#4285F4] px-8 py-3.5 text-base font-semibold text-white shadow-[0_0_25px_rgba(66,133,244,0.3)] transition-all hover:shadow-[0_0_40px_rgba(66,133,244,0.5)] hover:brightness-110"
          >
            Get in Touch
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-[#303134] bg-card/80 backdrop-blur-sm px-8 py-3.5 text-base font-semibold text-[#e3e3e3] transition-all hover:border-[#4285F4]/40 hover:shadow-[0_0_15px_rgba(66,133,244,0.1)]"
          >
            View Projects
          </a>
        </div>

        <div
          className={`mx-auto mt-16 max-w-4xl w-full ${isInView ? "animate-fade-in-up animation-delay-400" : "opacity-0"}`}
        >
          <div className="grid-parent h-[400px] md:h-[600px] w-full">
            <div className="grid-div1 rounded-3xl border border-[#303134] bg-card/80 backdrop-blur-sm overflow-hidden">
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" alt="Tech" />
            </div>
            <div className="grid-div2 rounded-3xl border border-[#303134] bg-card/80 backdrop-blur-sm overflow-hidden">
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" alt="Code" />
            </div>
            <div className="grid-div3 rounded-3xl border border-[#303134] bg-card/80 backdrop-blur-sm overflow-hidden">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" alt="Design" />
            </div>
            <div className="grid-div4 rounded-3xl border border-[#303134] bg-card/80 backdrop-blur-sm overflow-hidden">
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" alt="Cyber" />
            </div>
          </div>
        </div>

        {/* Capability Chips */}
        <div
          className={`mt-16 flex flex-wrap items-center justify-center gap-3 ${isInView ? "animate-fade-in-up animation-delay-500" : "opacity-0"
            }`}
        >
          {capabilities.map((cap, i) => (
            <div
              key={cap.label}
              className={`group flex items-center gap-2.5 rounded-2xl border border-[#303134] bg-card/80 backdrop-blur-sm px-5 py-3 transition-all ${isInView ? "animate-scale-in" : "opacity-0"
                }`}
              style={{ animationDelay: `${(i + 5) * 100}ms` }}
            >
              <cap.icon size={20} className="text-[#4285F4] transition-transform group-hover:scale-110" />
              <span className="text-sm font-medium text-[#e3e3e3]">{cap.label}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          className={`mx-auto mt-20 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3 ${isInView ? "animate-fade-in-up animation-delay-700" : "opacity-0"
            }`}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-4xl font-bold md:text-5xl" style={{ color: stat.color }}>
                {isInView ? (
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                ) : (
                  <span>{"0"}{stat.suffix}</span>
                )}
              </div>
              <p className="mt-2 text-sm font-medium text-[#9aa0a6]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
