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
    <section ref={ref} className="relative overflow-hidden bg-[#000000] py-24 md:py-32">
      <SectionGlow variant="values" />
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-[#303134] bg-card px-4 py-1.5 text-sm font-medium text-[#9aa0a6] animate-fast-blink ${isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
          >
            <span className="flex h-2 w-2 rounded-full bg-[#34A853] animate-glow-pulse" />
            Our Values
          </div>
          <ScrollFloat
            containerClassName="mt-6"
            textClassName="font-serif text-3xl font-bold text-[#e3e3e3] md:text-5xl italic break-words"
          >
            What drives everything we build
          </ScrollFloat>
        </div>

        {/* Values Cards */}
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {values.map((value, i) => (
            <div key={value.title} className="relative h-full">
              {/* Ultra dense foggy glow background - multiple layers wrapping all borders */}
              <div 
                className="absolute -inset-8 rounded-[40px] opacity-100 blur-[60px] pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${value.color}FF 0%, ${value.color}EE 15%, ${value.color}CC 30%, ${value.color}AA 45%, transparent 70%)`,
                }}
              />
              <div 
                className="absolute -inset-7 rounded-[38px] opacity-100 blur-[50px] pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${value.color}FF 0%, ${value.color}DD 18%, ${value.color}BB 35%, ${value.color}99 48%, transparent 68%)`,
                }}
              />
              <div 
                className="absolute -inset-6 rounded-[36px] opacity-100 blur-[40px] pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${value.color}FF 0%, ${value.color}DD 20%, ${value.color}BB 38%, ${value.color}88 50%, transparent 65%)`,
                }}
              />
              <div 
                className="absolute -inset-5 rounded-[34px] opacity-100 blur-[30px] pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${value.color}FF 0%, ${value.color}CC 25%, ${value.color}AA 42%, ${value.color}77 55%, transparent 62%)`,
                }}
              />
              <div 
                className="absolute -inset-4 rounded-[32px] opacity-100 blur-[20px] pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${value.color}FF 0%, ${value.color}BB 30%, ${value.color}99 45%, ${value.color}66 58%, transparent 60%)`,
                }}
              />
              <div 
                className="absolute -inset-3 rounded-[30px] opacity-100 blur-[15px] pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${value.color}FF 0%, ${value.color}AA 35%, ${value.color}88 48%, ${value.color}55 60%, transparent 58%)`,
                }}
              />
              
              <div
                className={`relative magic-border group flex flex-col rounded-3xl border border-[#303134] bg-[#1e1f20] p-10 transition-all duration-300 hover:-translate-y-1 ${isInView ? "animate-fade-in-up" : "opacity-0"
                  }`}
                style={{ animationDelay: `${(i + 1) * 150}ms` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 20px 40px ${value.color}80, 0 0 100px ${value.color}70`;
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
