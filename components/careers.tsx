"use client"

import { MapPin, ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { SectionGlow } from "./section-glow"
import ScrollFloat from "./ui/scroll-float"

const openings = [
  {
    department: "Engineering",
    title: "Senior Full Stack Developer",
    type: "Remote",
    color: "#4285F4",
  },
  {
    department: "AI Team",
    title: "ML/AI Engineer",
    type: "Hybrid",
    color: "#34A853",
  },
  {
    department: "Design",
    title: "UI/UX Designer",
    type: "Remote",
    color: "#EA4335",
  },
  {
    department: "Infrastructure",
    title: "DevOps Engineer",
    type: "Remote",
    color: "#FBBC05",
  },
]

export function Careers() {
  const { ref, isInView } = useInView()

  return (
    <section id="careers" ref={ref} className="relative overflow-hidden bg-[#000000] py-24 md:py-32">
      <SectionGlow variant="careers" />
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-[#303134] bg-card px-4 py-1.5 text-sm font-medium text-[#9aa0a6] animate-fast-blink ${isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
          >
            <span className="flex h-2 w-2 rounded-full bg-[#EA4335] animate-glow-pulse" />
            Careers
          </div>
          <ScrollFloat
            containerClassName="mt-6"
            textClassName="font-serif text-3xl font-bold text-[#e3e3e3] md:text-5xl italic break-words"
          >
            Join our growing team
          </ScrollFloat>
          <p
            className={`mt-4 text-lg leading-relaxed text-[#9aa0a6] text-pretty ${isInView ? "animate-fade-in-up animation-delay-200" : "opacity-0"
              }`}
          >
            {"We're"} looking for talented people to help us build the future of
            digital products.
          </p>
        </div>

        {/* Job Listings */}
        <div className="mx-auto mt-16 max-w-3xl flex flex-col gap-4">
          {openings.map((job, i) => (
            <a
              key={job.title}
              href="#contact"
              className={`magic-border group flex flex-col gap-4 rounded-2xl border border-[#303134] bg-card p-6 transition-all duration-300 sm:flex-row sm:items-center sm:justify-between ${isInView ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={{
                animationDelay: `${(i + 2) * 100}ms`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.borderColor = `${job.color}40`
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.borderColor = '#303134'
              }}
            >
              <div className="flex items-center gap-4">
                <span
                  className="rounded-xl px-3 py-1.5 text-xs font-bold"
                  style={{ backgroundColor: `${job.color}15`, color: job.color }}
                >
                  {job.department}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-[#e3e3e3]">{job.title}</h3>
                  <div className="mt-1 flex items-center gap-1.5 text-xs text-[#9aa0a6]">
                    <MapPin size={12} />
                    {job.type}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: job.color }}>
                Apply Now
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>

        {/* Open Application CTA */}
        <div
          className={`mx-auto mt-12 max-w-3xl rounded-3xl border border-dashed border-[#303134] bg-card p-8 text-center ${isInView ? "animate-fade-in-up animation-delay-600" : "opacity-0"
            }`}
        >
          <p className="text-base text-[#9aa0a6]">{"Don't"} see a position that fits?</p>
          <p className="mt-1 text-sm text-[#9aa0a6]">{"We'd"} still love to hear from you.</p>
          <a
            href="#contact"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#4285F4] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-[0_0_20px_rgba(66,133,244,0.3)]"
          >
            Send Open Application
          </a>
        </div>
      </div>
    </section>
  )
}
