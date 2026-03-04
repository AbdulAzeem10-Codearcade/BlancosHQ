"use client"

import { useState } from "react"
import {
  Code2,
  Smartphone,
  Brain,
  Cloud,
  Palette,
  Workflow,
  X,
} from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { SectionGlow } from "./section-glow"

const services = [
  {
    icon: Code2,
    title: "Full Stack Web Development",
    description: "End-to-end web applications built with modern frameworks like React, Next.js, and Node.js. Cloud-native architecture designed for scale.",
    tags: ["React", "Next.js", "Node.js", "TypeScript"],
    color: "#4285F4",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    detailedDescription: "We build modern, scalable web applications using cutting-edge technologies. Our full-stack solutions combine powerful backends with intuitive frontends to deliver exceptional user experiences.",
    techStack: ["React", "Next.js", "Vue.js", "Angular", "Node.js", "Express", "NestJS", "TypeScript", "JavaScript", "Tailwind CSS", "PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST APIs"],
    caseStudies: [
      { name: "FinanceFlow", result: "Reduced processing time by 60%" },
      { name: "E-commerce Platform", result: "Handled 100K+ concurrent users" },
      { name: "SaaS Dashboard", result: "Improved user engagement by 45%" }
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android, built with React Native and Flutter for seamless user experiences.",
    tags: ["React Native", "Flutter", "iOS", "Android"],
    color: "#34A853",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    detailedDescription: "Create powerful mobile experiences that work seamlessly across iOS and Android. We leverage React Native and Flutter to build high-performance apps with native feel.",
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Expo", "Firebase", "Redux", "MobX", "Native Modules", "Push Notifications", "In-App Purchases", "Maps Integration"],
    caseStudies: [
      { name: "HealthSync", result: "4.8★ rating with 50K+ downloads" },
      { name: "Fitness Tracker", result: "Reduced app size by 40%" },
      { name: "Food Delivery App", result: "99.9% crash-free sessions" }
    ]
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by machine learning, NLP, and computer vision. Transform data into actionable insights and smart automation.",
    tags: ["ML", "NLP", "Computer Vision", "TensorFlow"],
    color: "#EA4335",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    detailedDescription: "Harness the power of artificial intelligence to solve complex problems. From predictive analytics to natural language processing, we build AI solutions that drive business value.",
    techStack: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Hugging Face", "BERT", "GPT", "Computer Vision", "NLP", "Deep Learning", "Neural Networks", "Python", "Jupyter"],
    caseStudies: [
      { name: "Predictive Analytics", result: "95% accuracy in forecasting" },
      { name: "Chatbot Solution", result: "Reduced support tickets by 70%" },
      { name: "Image Recognition", result: "Processing 1000+ images/second" }
    ]
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud Engineering",
    description: "Robust infrastructure on AWS, Azure, and GCP. CI/CD pipelines, Kubernetes orchestration, and automated deployments for reliability.",
    tags: ["AWS", "Azure", "GCP", "Kubernetes"],
    color: "#FBBC05",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    detailedDescription: "Build and maintain scalable cloud infrastructure that grows with your business. We implement DevOps best practices to ensure reliability, security, and performance.",
    techStack: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitLab CI", "GitHub Actions", "Prometheus", "Grafana", "ELK Stack", "Nginx", "Linux"],
    caseStudies: [
      { name: "Microservices Migration", result: "99.99% uptime achieved" },
      { name: "Auto-scaling Solution", result: "Reduced costs by 50%" },
      { name: "CI/CD Pipeline", result: "Deploy time reduced from hours to minutes" }
    ]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Human-centered design from wireframes to polished prototypes. Design systems and interaction design that delight users.",
    tags: ["Figma", "Prototyping", "Design Systems", "UX Research"],
    color: "#4285F4",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064&auto=format&fit=crop",
    detailedDescription: "Create beautiful, intuitive interfaces that users love. Our design process combines user research, prototyping, and testing to deliver exceptional experiences.",
    techStack: ["Figma", "Adobe XD", "Sketch", "InVision", "Framer", "Principle", "Zeplin", "Abstract", "User Research", "Wireframing", "Prototyping", "Design Systems", "Accessibility"],
    caseStudies: [
      { name: "SaaS Redesign", result: "User satisfaction increased by 85%" },
      { name: "Mobile App UI", result: "Reduced user drop-off by 40%" },
      { name: "Design System", result: "Development time reduced by 60%" }
    ]
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Streamline business processes with custom automation solutions. Integrations, optimization, and intelligent workflows.",
    tags: ["Automation", "Integration", "API", "Optimization"],
    color: "#34A853",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop",
    detailedDescription: "Automate repetitive tasks and streamline your business processes. We build custom automation solutions that save time, reduce errors, and increase productivity.",
    techStack: ["Zapier", "Make", "n8n", "Node-RED", "Python", "RPA", "API Integration", "Webhooks", "Cron Jobs", "Message Queues", "Event-Driven Architecture", "Serverless"],
    caseStudies: [
      { name: "Data Pipeline", result: "Processing time reduced by 80%" },
      { name: "Email Automation", result: "Saved 20 hours/week" },
      { name: "Inventory System", result: "Zero stock-out incidents" }
    ]
  },
]

export function Services() {
  const { ref, isInView } = useInView()
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null)

  return (
    <>
      <section id="services" ref={ref} className="relative overflow-hidden bg-[#000000] py-24 md:py-32">
        <SectionGlow variant="services" />
        <div className="relative mx-auto max-w-7xl px-6">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div
              className={`inline-flex items-center gap-2 rounded-full border border-[#303134] bg-card px-4 py-1.5 text-sm font-medium text-[#9aa0a6] animate-fast-blink ${isInView ? "animate-fade-in-up" : "opacity-0"
                }`}
            >
              <span className="flex h-2 w-2 rounded-full bg-[#EA4335] animate-glow-pulse" />
              Our Services
            </div>
            <div
              className={`mt-6 font-serif text-3xl font-bold text-[#e3e3e3] md:text-5xl italic wrap-break-word ${isInView ? "animate-fade-in-up animation-delay-100" : "opacity-0"}`}
            >
              Everything you need to launch and scale
            </div>
            <p
              className={`mt-4 text-lg leading-relaxed text-[#9aa0a6] text-pretty ${isInView ? "animate-fade-in-up animation-delay-200" : "opacity-0"
                }`}
            >
              From web and mobile to AI and cloud, we deliver end-to-end solutions
              that transform your business.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <div key={service.title} className="relative h-full">
                {/* Google-style subtle glow - soft and elegant */}
                <div 
                  className="absolute -inset-20 rounded-[56px] opacity-30 blur-[140px] pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${service.color}50 0%, ${service.color}30 25%, transparent 60%)`,
                  }}
                />
                <div 
                  className="absolute -inset-12 rounded-[48px] opacity-40 blur-[100px] pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${service.color}40 0%, ${service.color}20 30%, transparent 65%)`,
                  }}
                />
                
                <div
                  onClick={() => setSelectedService(service)}
                  className={`relative group flex flex-col h-full overflow-hidden rounded-3xl border border-[#303134] bg-[#1e1f20] transition-all duration-300 hover:-translate-y-2 cursor-pointer ${isInView ? "animate-fade-in-up" : "opacity-0"
                    }`}
                  style={{ 
                    animationDelay: `${(i + 2) * 100}ms`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 20px 40px ${service.color}30, 0 0 80px ${service.color}20`;
                    e.currentTarget.style.borderColor = `${service.color}80`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = '#303134';
                  }}
                >
                {/* Image placeholder with color glow */}
                <div className="img-placeholder relative h-48 w-full flex items-center justify-center border-b overflow-hidden"
                  style={{ borderColor: `${service.color}20` }}
                >
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-2xl transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${service.color}15`, color: service.color }}
                    >
                      <service.icon size={32} />
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <h3 className="text-xl font-bold text-[#e3e3e3] group-hover:text-white transition-colors">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#9aa0a6]">{service.description}</p>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border px-3 py-1 text-xs font-medium transition-all group-hover:scale-105"
                        style={{
                          borderColor: `${service.color}30`,
                          color: service.color,
                          backgroundColor: `${service.color}08`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-center text-xs text-[#9aa0a6]">Click to learn more</p>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overlay Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#1a1b1c] border-2"
            style={{ 
              borderColor: selectedService.color,
              boxShadow: `0 0 30px ${selectedService.color}60, 0 0 60px ${selectedService.color}40, inset 0 0 20px ${selectedService.color}10`,
              animation: 'borderGlow 3s ease-in-out infinite'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <style>{`
              @keyframes borderGlow {
                0%, 100% { 
                  box-shadow: 0 0 20px ${selectedService.color}60, 0 0 40px ${selectedService.color}40, inset 0 0 20px ${selectedService.color}10;
                }
                50% { 
                  box-shadow: 0 0 40px ${selectedService.color}80, 0 0 60px ${selectedService.color}60, inset 0 0 30px ${selectedService.color}20;
                }
              }
            `}</style>

            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#303134] bg-[#28292a] transition-all hover:scale-110 hover:bg-[#303134]"
            >
              <X size={20} className="text-[#e3e3e3]" />
            </button>

            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side - Image */}
              <div className="relative h-64 md:h-full min-h-[400px] overflow-hidden">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-r from-transparent to-[#1a1b1c]" />
                <div 
                  className="absolute top-8 left-8 flex h-20 w-20 items-center justify-center rounded-2xl border-2"
                  style={{ 
                    backgroundColor: `${selectedService.color}20`,
                    borderColor: `${selectedService.color}60`,
                    boxShadow: `0 0 30px ${selectedService.color}40`
                  }}
                >
                  <selectedService.icon size={40} style={{ color: selectedService.color }} />
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-white">{selectedService.title}</h2>
                <p className="mt-4 text-[#9aa0a6] leading-relaxed">
                  {selectedService.detailedDescription}
                </p>

                {/* Tech Stack */}
                <div className="mt-8">
                  <h3 className="text-lg font-bold text-white mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border px-3 py-1.5 text-xs font-medium transition-all hover:scale-105"
                        style={{ 
                          borderColor: `${selectedService.color}30`,
                          color: selectedService.color,
                          backgroundColor: `${selectedService.color}10`
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Case Studies */}
                <div className="mt-8">
                  <h3 className="text-lg font-bold text-white mb-4">Case Studies</h3>
                  <div className="space-y-4">
                    {selectedService.caseStudies.map((study, index) => (
                      <div 
                        key={index}
                        className="rounded-2xl border p-4"
                        style={{ 
                          borderColor: `${selectedService.color}20`,
                          backgroundColor: `${selectedService.color}05`
                        }}
                      >
                        <h4 className="font-semibold text-white">{study.name}</h4>
                        <p className="mt-1 text-sm" style={{ color: selectedService.color }}>
                          {study.result}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <a
                    href="#contact"
                    onClick={() => setSelectedService(null)}
                    className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105"
                    style={{ 
                      backgroundColor: selectedService.color,
                      boxShadow: `0 0 20px ${selectedService.color}40`
                    }}
                  >
                    Get Started with {selectedService.title}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
