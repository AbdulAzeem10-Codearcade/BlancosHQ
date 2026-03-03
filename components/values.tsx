"use client"

import { Heart, Eye, UserCheck } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { SectionGlow } from "./section-glow"
import ScrollFloat from "./ui/scroll-float"

const values = [
  {
    icon: Heart,
    title: "Obsessive Ownership",
    description:
      "We own the outcomes, not just the code. Every project is treated as if it were our own, ensuring unmatched dedication and quality.",
    color: "#EA4335",
    glowClass: "glow-border-red",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    description:
      "No black boxes or unclear processes. We believe in open communication, clear progress tracking, and honest feedback at every stage.",
    color: "#4285F4",
    glowClass: "glow-border-blue",
  },
  {
    icon: UserCheck,
    title: "Users First",
    description:
      "Every decision starts with the end user. We build human-centric products that are intuitive, accessible, and delightful to use.",
    color: "#34A853",
    glowClass: "glow-border-green",
  },
]

export function Values() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="relative overflow-hidden bg-background py-24 md:py-32">
      <SectionGlow variant="values" />
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-[#303134] bg-[#28292a] px-4 py-1.5 text-sm font-medium text-[#8ab4f8] ${isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
          >
            Our Values
          </div>
          <ScrollFloat
            containerClassName="mt-6"
            textClassName="font-serif text-3xl font-bold text-[#e3e3e3] text-balance md:text-5xl"
          >
            What drives everything we build
          </ScrollFloat>
        </div>

        {/* Values Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {values.map((value, i) => (
            <div
              key={value.title}
              className={`magic-border group flex flex-col rounded-3xl border border-[#303134] bg-[#1e1f20] p-10 transition-all duration-300 hover:-translate-y-1 ${isInView ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={{ animationDelay: `${(i + 1) * 150}ms` }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 20px 40px ${value.color}40`;
                e.currentTarget.style.borderColor = `${value.color}60`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#303134';
              }}
            >
              {/* Image placeholder area with colored glow */}
              <div
                className="img-placeholder mb-8 flex h-48 w-full items-center justify-center rounded-2xl border border-[#303134] transition-transform group-hover:scale-[1.02]"
              >
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div
                    className="flex h-20 w-20 items-center justify-center rounded-3xl"
                    style={{ backgroundColor: `${value.color}15`, color: value.color }}
                  >
                    <value.icon size={40} />
                  </div>
                  <span className="text-xs text-[#9aa0a6]">Your image here</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#e3e3e3]">{value.title}</h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-[#9aa0a6]">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
