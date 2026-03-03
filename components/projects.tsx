"use client"

import { ArrowUpRight, Users, TrendingUp, Clock, Star } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { SectionGlow } from "./section-glow"
import ScrollFloat from "./ui/scroll-float"

const projects = [
  {
    name: "FinanceFlow",
    category: "Financial Management",
    description:
      "A comprehensive financial management platform enabling real-time analytics, budgeting, and reporting.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    color: "#4285F4",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    metrics: {
      revenue: "$2.5M",
      users: "50K+",
      duration: "6 months",
      rating: "4.9/5"
    }
  },
  {
    name: "HealthSync",
    category: "Telemedicine",
    description:
      "Telemedicine system with video consultations and real-time health monitoring dashboards.",
    tags: ["React Native", "Firebase", "WebRTC", "ML"],
    color: "#34A853",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    metrics: {
      revenue: "$1.8M",
      users: "35K+",
      duration: "8 months",
      rating: "4.8/5"
    }
  },
  {
    name: "EcoTrack",
    category: "Sustainability",
    description:
      "Sustainability tracking tools helping enterprises monitor and reduce their environmental impact.",
    tags: ["Next.js", "Python", "TensorFlow", "GCP"],
    color: "#FBBC05",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2070&auto=format&fit=crop",
    metrics: {
      revenue: "$3.2M",
      users: "120K+",
      duration: "10 months",
      rating: "4.9/5"
    }
  },
  {
    name: "LogiChain",
    category: "Blockchain",
    description:
      "Blockchain-powered supply chain platform providing end-to-end transparency and traceability.",
    tags: ["Solidity", "React", "Node.js", "Ethereum"],
    color: "#EA4335",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070&auto=format&fit=crop",
    metrics: {
      revenue: "$4.1M",
      users: "25K+",
      duration: "12 months",
      rating: "5.0/5"
    }
  },
  {
    name: "LearnHub",
    category: "Education",
    description:
      "E-learning platform with personalized learning paths, gamification, and real-time progress tracking.",
    tags: ["Vue.js", "Django", "MongoDB", "Redis"],
    color: "#4285F4",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2070&auto=format&fit=crop",
    metrics: {
      revenue: "$1.5M",
      users: "80K+",
      duration: "7 months",
      rating: "4.7/5"
    }
  },
  {
    name: "SmartRetail",
    category: "Retail Analytics",
    description:
      "AI-powered retail analytics platform with demand forecasting and inventory optimization.",
    tags: ["Python", "TensorFlow", "React", "Azure"],
    color: "#34A853",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
    metrics: {
      revenue: "$2.9M",
      users: "45K+",
      duration: "9 months",
      rating: "4.8/5"
    }
  },
]

export function Projects() {
  const { ref, isInView } = useInView()

  return (
    <section id="projects" ref={ref} className="relative bg-background py-24 md:py-32">
      <SectionGlow variant="projects" />
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-[#303134] bg-[#28292a] px-4 py-1.5 text-sm font-medium text-[#8ab4f8] ${isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
          >
            Featured Projects
          </div>
          <ScrollFloat
            containerClassName="mt-6"
            textClassName="font-serif text-3xl font-bold text-[#e3e3e3] text-balance md:text-5xl"
          >
            Selected work that speaks for itself
          </ScrollFloat>
          <p
            className={`mt-4 text-lg leading-relaxed text-[#9aa0a6] text-pretty ${isInView ? "animate-fade-in-up animation-delay-200" : "opacity-0"
              }`}
          >
            A showcase of projects that demonstrate our expertise across
            industries and technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className={`mt-16 grid gap-8 md:grid-cols-2 lg:gap-10 ${isInView ? "animate-fade-in-up animation-delay-300" : "opacity-0"}`}>
          {projects.map((project, index) => (
            <a 
              key={project.name}
              href={`#project-${index + 1}`}
              id={`project-${index + 1}`}
              className="group block"
            >
              <div
                className="relative flex flex-col overflow-hidden rounded-3xl border bg-card transition-all duration-500 h-full shadow-xl hover:-translate-y-2"
                style={{
                  borderColor: `${project.color}25`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 25px 50px ${project.color}50`;
                  e.currentTarget.style.borderColor = `${project.color}60`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
                  e.currentTarget.style.borderColor = `${project.color}25`;
                }}
              >
                {/* Project Image */}
                <div
                  className="relative h-64 w-full shrink-0 overflow-hidden"
                  style={{
                    borderBottom: `1px solid ${project.color}15`,
                  }}
                >
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold backdrop-blur-md border"
                      style={{
                        backgroundColor: `${project.color}20`,
                        borderColor: `${project.color}40`,
                        color: project.color,
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* View Project Button */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-md"
                      style={{ borderColor: `${project.color}40`, backgroundColor: `${project.color}20` }}
                    >
                      <ArrowUpRight size={18} style={{ color: project.color }} />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="text-3xl font-bold text-[#e3e3e3] group-hover:text-white transition-colors">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-[#9aa0a6]">
                    {project.description}
                  </p>

                  {/* Metrics Grid */}
                  <div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl border border-[#303134] bg-[#1a1b1c] p-6">
                    <div className="flex items-center gap-3">
                      <div 
                        className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${project.color}15` }}
                      >
                        <TrendingUp size={18} style={{ color: project.color }} />
                      </div>
                      <div>
                        <p className="text-xs text-[#9aa0a6]">Revenue</p>
                        <p className="text-lg font-bold text-[#e3e3e3]">{project.metrics.revenue}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div 
                        className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${project.color}15` }}
                      >
                        <Users size={18} style={{ color: project.color }} />
                      </div>
                      <div>
                        <p className="text-xs text-[#9aa0a6]">Active Users</p>
                        <p className="text-lg font-bold text-[#e3e3e3]">{project.metrics.users}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div 
                        className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${project.color}15` }}
                      >
                        <Clock size={18} style={{ color: project.color }} />
                      </div>
                      <div>
                        <p className="text-xs text-[#9aa0a6]">Duration</p>
                        <p className="text-lg font-bold text-[#e3e3e3]">{project.metrics.duration}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div 
                        className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${project.color}15` }}
                      >
                        <Star size={18} style={{ color: project.color }} />
                      </div>
                      <div>
                        <p className="text-xs text-[#9aa0a6]">Rating</p>
                        <p className="text-lg font-bold text-[#e3e3e3]">{project.metrics.rating}</p>
                      </div>
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border px-3 py-1.5 text-xs font-medium transition-all group-hover:scale-105"
                        style={{
                          borderColor: `${project.color}20`,
                          color: project.color,
                          backgroundColor: `${project.color}08`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
