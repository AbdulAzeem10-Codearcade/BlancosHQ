"use client"

import { Check, ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { SectionGlow } from "./section-glow"
import ScrollFloat from "./ui/scroll-float"

const plans = [
  {
    name: "Starter",
    tagline: "Perfect for MVPs and early-stage startups",
    highlights: [
      "Single web or mobile app",
      "Up to 3 core features",
      "Basic UI/UX design",
      "1 round of revisions",
      "2-week sprint delivery",
      "Deployment & handoff",
    ],
    color: "#4285F4",
    glowClass: "glow-border-blue",
    badge: null,
    cta: "Get Started",
  },
  {
    name: "Growth",
    tagline: "For scaling products with advanced needs",
    highlights: [
      "Full-stack web + mobile app",
      "AI/ML feature integration",
      "Advanced UI/UX with design system",
      "DevOps & CI/CD pipeline",
      "Cloud infrastructure setup",
      "3 rounds of revisions",
      "Dedicated project manager",
      "4-week sprint delivery",
    ],
    color: "#34A853",
    glowClass: "glow-border-green",
    badge: "Most Popular",
    cta: "Start Project",
  },
  {
    name: "Enterprise",
    tagline: "Custom solutions for large-scale operations",
    highlights: [
      "Unlimited applications",
      "Full AI/ML & automation suite",
      "Enterprise-grade architecture",
      "24/7 dedicated support",
      "Custom cloud infrastructure",
      "Ongoing maintenance & updates",
      "Direct CTO collaboration",
      "Flexible sprint scheduling",
    ],
    color: "#FBBC05",
    glowClass: "glow-border-yellow",
    badge: null,
    cta: "Contact Sales",
  },
]

export function Plans() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#000000] py-24 md:py-32">
      <SectionGlow variant="plans" />
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-[#303134] bg-card px-4 py-1.5 text-sm font-medium text-[#9aa0a6] animate-fast-blink ${isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
          >
            <span className="flex h-2 w-2 rounded-full bg-[#34A853] animate-glow-pulse" />
            Plans
          </div>
          <ScrollFloat
            containerClassName="mt-6"
            textClassName="font-serif text-3xl font-bold text-[#e3e3e3] md:text-5xl italic break-words"
          >
            Find the right plan for your 
            project
          </ScrollFloat>
          <p
            className={`mt-4 text-lg leading-relaxed text-[#9aa0a6] text-pretty ${isInView ? "animate-fade-in-up animation-delay-200" : "opacity-0"
              }`}
          >
            Whether you are launching an MVP or scaling an enterprise platform,
            we have a plan that fits.
          </p>
        </div>

        {/* Plans Grid - Google One dark style */}
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          {plans.map((plan, i) => (
            <div key={plan.name} className="relative h-full">
              {/* Ultra dense foggy glow background - multiple layers wrapping all borders */}
              <div 
                className="absolute -inset-8 rounded-[40px] opacity-100 blur-[60px] pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${plan.color}FF 0%, ${plan.color}EE 15%, ${plan.color}CC 30%, ${plan.color}AA 45%, transparent 70%)`,
                }}
              />
              <div 
                className="absolute -inset-7 rounded-[38px] opacity-100 blur-[50px] pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${plan.color}FF 0%, ${plan.color}DD 18%, ${plan.color}BB 35%, ${plan.color}99 48%, transparent 68%)`,
                }}
              />
              <div 
                className="absolute -inset-6 rounded-[36px] opacity-100 blur-[40px] pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${plan.color}FF 0%, ${plan.color}DD 20%, ${plan.color}BB 38%, ${plan.color}88 50%, transparent 65%)`,
                }}
              />
              <div 
                className="absolute -inset-5 rounded-[34px] opacity-100 blur-[30px] pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${plan.color}FF 0%, ${plan.color}CC 25%, ${plan.color}AA 42%, ${plan.color}77 55%, transparent 62%)`,
                }}
              />
              <div 
                className="absolute -inset-4 rounded-[32px] opacity-100 blur-[20px] pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${plan.color}FF 0%, ${plan.color}BB 30%, ${plan.color}99 45%, ${plan.color}66 58%, transparent 60%)`,
                }}
              />
              <div 
                className="absolute -inset-3 rounded-[30px] opacity-100 blur-[15px] pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${plan.color}FF 0%, ${plan.color}AA 35%, ${plan.color}88 48%, ${plan.color}55 60%, transparent 58%)`,
                }}
              />
              
              <div
                className={`relative group flex flex-col h-full rounded-3xl border-2 border-[#303134] bg-[#1e1f20] p-8 transition-all duration-300 md:p-10 hover:-translate-y-2 ${isInView ? "animate-fade-in-up" : "opacity-0"
                  }`}
                style={{
                  animationDelay: `${i * 150}ms`,
                  borderColor: plan.badge ? plan.color : '#303134',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 20px 40px ${plan.color}70, 0 0 100px ${plan.color}60`;
                  e.currentTarget.style.borderColor = `${plan.color}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = plan.badge ? plan.color : '#303134';
                }}
              >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span
                    className="rounded-full px-4 py-1.5 text-xs font-bold text-white shadow-md"
                    style={{ backgroundColor: plan.color, boxShadow: `0 0 15px ${plan.color}40` }}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan icon accent */}
              <div
                className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${plan.color}15` }}
              >
                <div className="h-4 w-4 rounded-full" style={{ backgroundColor: plan.color }} />
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#e3e3e3]">{plan.name}</h3>
              <p className="mt-2 text-sm text-[#9aa0a6]">{plan.tagline}</p>

              {/* Features */}
              <ul className="mt-8 flex flex-1 flex-col gap-3.5">
                {plan.highlights.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={18} className="mt-0.5 shrink-0" style={{ color: plan.color }} />
                    <span className="text-sm text-[#e3e3e3]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all"
                style={
                  plan.badge
                    ? {
                      backgroundColor: plan.color,
                      color: '#ffffff',
                      boxShadow: `0 0 20px ${plan.color}30`,
                    }
                    : {
                      border: `1px solid ${plan.color}40`,
                      color: plan.color,
                      backgroundColor: `${plan.color}08`,
                    }
                }
              >
                {plan.cta}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
