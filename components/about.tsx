"use client"

import { Users, Zap, Shield, MessageCircle } from "lucide-react"
import { AnimatedCounter } from "./animated-counter"
import { SectionGlow } from "./section-glow"
import ScrollFloat from "./ui/scroll-float"
import { useInView } from "@/hooks/use-in-view"

const differentiators = [
  {
    icon: Users,
    title: "Direct Engineering Collaboration",
    description: "No middle management. Talk directly to the engineers building your product.",
    glowColor: "#4285F4",
    glowClass: "glow-border-blue",
  },
  {
    icon: Zap,
    title: "Production-Ready Standards",
    description: "Every line of code is built to scale, tested, and production-ready from day one.",
    glowColor: "#34A853",
    glowClass: "glow-border-green",
  },
  {
    icon: Shield,
    title: "Scalable Architecture",
    description: "We design systems that grow with your business, handling millions of users.",
    glowColor: "#FBBC05",
    glowClass: "glow-border-yellow",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description: "Transparent updates, honest timelines, and no surprises along the way.",
    glowColor: "#EA4335",
    glowClass: "glow-border-red",
  },
]

const aboutStats = [
  { value: 5, suffix: "+", label: "Years Experience", color: "#4285F4" },
  { value: 30, suffix: "+", label: "Team Members", color: "#FBBC05" },
  { value: 100, suffix: "+", label: "Happy Clients", color: "#34A853" },
]

export function About() {
  const { ref, isInView } = useInView()

  return (
    <section id="about" ref={ref} className="relative overflow-hidden bg-background py-24 md:py-32">
      <SectionGlow variant="about" />
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-[#303134] bg-[#28292a] px-4 py-1.5 text-sm font-medium text-[#8ab4f8] ${isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
          >
            About Us
          </div>
          <ScrollFloat
            containerClassName="mt-6"
            textClassName="font-serif text-3xl font-bold text-[#e3e3e3] text-balance md:text-5xl"
          >
            Your Technical Co-Founders
          </ScrollFloat>
          <p
            className={`mt-4 text-lg leading-relaxed text-[#9aa0a6] text-pretty ${isInView ? "animate-fade-in-up animation-delay-200" : "opacity-0"
              }`}
          >
            Blancos HQ is not just an agency. We are your technical co-founders
            who turn complex problems into elegant, scalable solutions.
          </p>
        </div>

        <div
          className={`mx-auto mt-12 max-w-4xl w-full ${isInView ? "animate-fade-in-up animation-delay-200" : "opacity-0"}`}
        >
          <div className="grid-parent h-[300px] md:h-[400px] w-full">
            <div className="grid-div1 rounded-3xl border border-[#303134] bg-card overflow-hidden">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" alt="Team" />
            </div>
            <div className="grid-div2 rounded-3xl border border-[#303134] bg-card overflow-hidden">
              <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" alt="Office" />
            </div>
            <div className="grid-div3 rounded-3xl border border-[#303134] bg-card overflow-hidden">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" alt="Planning" />
            </div>
            <div className="grid-div4 rounded-3xl border border-[#303134] bg-card overflow-hidden">
              <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" alt="Code" />
            </div>
          </div>
        </div>

        {/* Differentiators Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item, i) => (
            <div
              key={item.title}
              className={`magic-border group rounded-3xl border border-[#303134] bg-card p-8 transition-all duration-300 hover:-translate-y-1 ${isInView ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={{ 
                animationDelay: `${(i + 3) * 100}ms`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 20px 40px ${item.glowColor}40`;
                e.currentTarget.style.borderColor = `${item.glowColor}60`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#303134';
              }}
            >
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl transition-all"
                style={{ backgroundColor: `${item.glowColor}15`, color: item.glowColor }}
              >
                <item.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-[#e3e3e3]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#9aa0a6]">{item.description}</p>
            </div>
          ))}
        </div>

        {/* About Stats */}
        <div
          className={`mx-auto mt-20 grid max-w-3xl grid-cols-3 gap-8 rounded-3xl border border-[#303134] bg-card p-8 md:p-12 ${isInView ? "animate-fade-in-up animation-delay-600" : "opacity-0"
            }`}
        >
          {aboutStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-3xl font-bold md:text-4xl" style={{ color: stat.color }}>
                {isInView ? (
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                ) : (
                  <span>{"0"}{stat.suffix}</span>
                )}
              </div>
              <p className="mt-1 text-xs font-medium text-[#9aa0a6] md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
