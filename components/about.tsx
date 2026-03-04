"use client"

import { Users, Zap, Shield, MessageCircle } from "lucide-react"
import { AnimatedCounter } from "./animated-counter"
import { SectionGlow } from "./section-glow"
import ScrollFloat from "./ui/scroll-float"
import { useInView } from "@/hooks/use-in-view"
import CardSwap, { Card } from "./ui/card-swap"

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
    <section id="about" ref={ref} className="relative overflow-hidden bg-[#000000] py-24 md:py-32">
      <SectionGlow variant="about" />
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-[#303134] bg-[#28292a] px-4 py-1.5 text-sm font-medium text-[#8ab4f8] ${isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
          >
            About Us
          </div>
          <ScrollFloat
            containerClassName="mt-6"
            textClassName="font-serif text-3xl font-bold text-[#e3e3e3] md:text-5xl italic break-words"
          >
            Your Technical Co-Founders
          </ScrollFloat>
          <p
            className={`mt-4 text-lg leading-relaxed text-[#9aa0a6] text-pretty mb-8 ${isInView ? "animate-fade-in-up animation-delay-200" : "opacity-0"
              }`}
          >
            Blancos HQ is not just an agency. We are your technical co-founders
            who turn complex problems into elegant, scalable solutions.
          </p>
          
          {/* CardSwap centered beneath text */}
          <div
            className={`flex justify-center items-center w-full min-h-[450px] pt-8 ${isInView ? "animate-fade-in-up animation-delay-300" : "opacity-0"}`}
          >
            <CardSwap
              width={500}
              height={320}
              cardDistance={35}
              verticalDistance={45}
              delay={4000}
              pauseOnHover={true}
              skewAmount={4}
              easing="elastic"
            >
              <Card customClass="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                  className="w-full h-full object-cover" 
                  alt="Team collaboration" 
                />
              </Card>
              <Card customClass="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop" 
                  className="w-full h-full object-cover" 
                  alt="Modern office space" 
                />
              </Card>
              <Card customClass="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                  className="w-full h-full object-cover" 
                  alt="Strategic planning" 
                />
              </Card>
              <Card customClass="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop" 
                  className="w-full h-full object-cover" 
                  alt="Code development" 
                />
              </Card>
            </CardSwap>
          </div>
        </div>

        {/* Differentiators Grid */}
        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item, i) => (
            <div key={item.title} className="relative h-full">
              {/* Google-style subtle glow - soft and elegant */}
              <div 
                className="absolute -inset-20 rounded-[56px] opacity-30 blur-[140px] pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${item.glowColor}50 0%, ${item.glowColor}30 25%, transparent 60%)`,
                }}
              />
              <div 
                className="absolute -inset-12 rounded-[48px] opacity-40 blur-[100px] pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${item.glowColor}40 0%, ${item.glowColor}20 30%, transparent 65%)`,
                }}
              />
              
              <div
                className={`relative group rounded-3xl border border-[#303134] bg-[#1e1f20] p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-opacity-60 ${isInView ? "animate-fade-in-up" : "opacity-0"
                  }`}
                style={{ 
                  animationDelay: `${i * 100}ms`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 20px 40px ${item.glowColor}30, 0 0 80px ${item.glowColor}20`;
                  e.currentTarget.style.borderColor = `${item.glowColor}80`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#303134';
                }}
              >
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${item.glowColor}20`, color: item.glowColor }}
              >
                <item.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-[#e3e3e3]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#9aa0a6] flex-1">{item.description}</p>
            </div>
            </div>
          ))}
        </div>

        {/* About Stats */}
        <div
          className={`mx-auto mt-20 grid max-w-3xl grid-cols-3 gap-8 rounded-3xl border border-[#303134] bg-[#1e1f20] p-8 md:p-12 backdrop-blur-sm ${isInView ? "animate-fade-in-up animation-delay-600" : "opacity-0"
            }`}
        >
          {aboutStats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div 
                className="font-serif text-3xl font-bold md:text-4xl transition-all duration-300 group-hover:scale-110" 
                style={{ color: stat.color }}
              >
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
