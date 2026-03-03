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
    <section ref={ref} className="relative overflow-hidden bg-background py-24 md:py-32">
      <SectionGlow variant="plans" />
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-[#303134] bg-[#28292a] px-4 py-1.5 text-sm font-medium text-[#8ab4f8] ${isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
          >
            Plans
          </div>
          <ScrollFloat
            containerClassName="mt-6"
            textClassName="font-serif text-3xl font-bold text-[#e3e3e3] text-balance md:text-5xl"
          >
            Find the right plan for your project
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
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`magic-border group relative flex flex-col rounded-3xl border-2 bg-card p-8 transition-all duration-300 md:p-10 hover:-translate-y-1 ${isInView ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={{
                animationDelay: `${(i + 2) * 150}ms`,
                borderColor: plan.badge ? plan.color : '#303134',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 20px 40px ${plan.color}40`;
                e.currentTarget.style.borderColor = `${plan.color}80`;
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
          ))}
        </div>
      </div>
    </section>
  )
}
