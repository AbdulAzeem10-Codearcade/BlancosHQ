"use client"

import { useState } from "react"
import { Github, Linkedin, X } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { SectionGlow } from "./section-glow"
import ScrollFloat from "./ui/scroll-float"

const teamMembers = [
  {
    name: "Syed Khadeen",
    role: "Backend Architect & .NET Specialist",
    institution: "FAST NUCES",
    batch: "2022",
    semester: "8th Semester",
    specialization: "Backend Development & .NET Technologies",
    skills: ["ASP.NET Core", "C#", ".NET Framework", "SQL Server", "Azure", "AWS", "Docker", "Kubernetes", "Microservices", "REST APIs", "GraphQL", "Redis"],
    bio: "Backend specialist with deep expertise in .NET ecosystem and cloud infrastructure. Passionate about building scalable, high-performance server-side applications.",
    github: "https://github.com/khadeen",
    linkedin: "https://linkedin.com/in/khadeen",
    color: "#4285F4",
  },
  {
    name: "Abdul Azeem",
    role: "Full Stack Developer",
    institution: "FAST NUCES",
    batch: "2024",
    semester: "4th Semester",
    specialization: "Full Stack Web Development",
    skills: ["React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "TypeScript", "Tailwind CSS", "REST APIs", "GraphQL", "Docker", "Git"],
    bio: "Full stack developer with a passion for creating seamless user experiences. Proficient in modern web technologies and always eager to learn new frameworks.",
    github: "https://github.com/azeem",
    linkedin: "https://linkedin.com/in/azeem",
    color: "#34A853",
  },
  {
    name: "Iqramah Shah",
    role: "Full Stack & AR Developer",
    institution: "FAST NUCES",
    batch: "2022",
    semester: "8th Semester",
    specialization: "Full Stack Development & Augmented Reality",
    skills: ["React", "Next.js", "Node.js", "Express", "MongoDB", "MERN Stack", "Unity", "AR Foundation", "Vuforia", "TypeScript", "Three.js", "WebXR"],
    bio: "Full stack developer with expertise in augmented reality. Combines web development skills with immersive AR experiences to create innovative solutions.",
    github: "https://github.com/iqramah",
    linkedin: "https://linkedin.com/in/iqramah",
    color: "#FBBC05",
  },
]

export function Team() {
  const { ref, isInView } = useInView()
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null)

  return (
    <>
      <section ref={ref} className="relative overflow-hidden bg-[#000000] py-24 md:py-32">
        <SectionGlow variant="team" />
        <div className="relative mx-auto max-w-7xl px-6">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div
              className={`inline-flex items-center gap-2 rounded-full border border-[#303134] bg-card px-4 py-1.5 text-sm font-medium text-[#9aa0a6] animate-fast-blink ${isInView ? "animate-fade-in-up" : "opacity-0"
                }`}
            >
              <span className="flex h-2 w-2 rounded-full bg-[#FBBC05] animate-glow-pulse" />
              Our Team
            </div>
            <ScrollFloat
              containerClassName="mt-6"
              textClassName="font-serif text-3xl font-bold text-[#e3e3e3] md:text-5xl italic break-words"
            >
              Meet the engineers behind the magic
            </ScrollFloat>
            <p
              className={`mt-4 text-lg leading-relaxed text-[#9aa0a6] text-pretty ${isInView ? "animate-fade-in-up animation-delay-200" : "opacity-0"
                }`}
            >
              Our talented team of developers, architects, and designers are
              passionate about building exceptional digital products.
            </p>
          </div>

          {/* Team Cards */}
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
            {teamMembers.map((member, i) => (
              <div key={member.name} className="relative h-full">
                {/* Ultra dense foggy glow background - multiple layers wrapping all borders */}
                <div 
                  className="absolute -inset-8 rounded-[40px] opacity-100 blur-[60px] pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${member.color}FF 0%, ${member.color}EE 15%, ${member.color}CC 30%, ${member.color}AA 45%, transparent 70%)`,
                  }}
                />
                <div 
                  className="absolute -inset-7 rounded-[38px] opacity-100 blur-[50px] pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${member.color}FF 0%, ${member.color}DD 18%, ${member.color}BB 35%, ${member.color}99 48%, transparent 68%)`,
                  }}
                />
                <div 
                  className="absolute -inset-6 rounded-[36px] opacity-100 blur-[40px] pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${member.color}FF 0%, ${member.color}DD 20%, ${member.color}BB 38%, ${member.color}88 50%, transparent 65%)`,
                  }}
                />
                <div 
                  className="absolute -inset-5 rounded-[34px] opacity-100 blur-[30px] pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${member.color}FF 0%, ${member.color}CC 25%, ${member.color}AA 42%, ${member.color}77 55%, transparent 62%)`,
                  }}
                />
                <div 
                  className="absolute -inset-4 rounded-[32px] opacity-100 blur-[20px] pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${member.color}FF 0%, ${member.color}BB 30%, ${member.color}99 45%, ${member.color}66 58%, transparent 60%)`,
                  }}
                />
                <div 
                  className="absolute -inset-3 rounded-[30px] opacity-100 blur-[15px] pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${member.color}FF 0%, ${member.color}AA 35%, ${member.color}88 48%, ${member.color}55 60%, transparent 58%)`,
                  }}
                />
                
                <div
                  onClick={() => setSelectedMember(member)}
                  className={`relative magic-border group rounded-3xl border bg-card p-8 transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-2xl ${isInView ? "animate-fade-in-up" : "opacity-0"
                    }`}
                  style={{ 
                    animationDelay: `${(i + 2) * 150}ms`,
                    borderColor: `${member.color}25`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 20px 40px ${member.color}80, 0 0 100px ${member.color}70`;
                    e.currentTarget.style.borderColor = `${member.color}60`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = `${member.color}25`;
                  }}
                >
                {/* Avatar Placeholder with color glow */}
                <div
                  className="img-placeholder mb-6 flex h-24 w-24 items-center justify-center rounded-full border mx-auto transition-transform group-hover:scale-110"
                  style={{ borderColor: `${member.color}40`, backgroundColor: `${member.color}10` }}
                >
                  <span className="relative z-10 font-serif text-3xl font-bold" style={{ color: member.color }}>
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#e3e3e3] group-hover:text-white transition-colors">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium" style={{ color: member.color }}>
                    {member.role}
                  </p>
                  <p className="mt-1 text-xs text-[#9aa0a6]">
                    {member.institution} • Batch {member.batch}
                  </p>
                </div>

                {/* Social Links */}
                <div className="mt-4 flex justify-center gap-3">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#303134] bg-[#1a1b1c] transition-all hover:scale-110"
                    style={{ 
                      borderColor: `${member.color}30`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = `${member.color}15`;
                      e.currentTarget.style.borderColor = `${member.color}60`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#1a1b1c';
                      e.currentTarget.style.borderColor = `${member.color}30`;
                    }}
                  >
                    <Github size={16} style={{ color: member.color }} />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#303134] bg-[#1a1b1c] transition-all hover:scale-110"
                    style={{ 
                      borderColor: `${member.color}30`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = `${member.color}15`;
                      e.currentTarget.style.borderColor = `${member.color}60`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#1a1b1c';
                      e.currentTarget.style.borderColor = `${member.color}30`;
                    }}
                  >
                    <Linkedin size={16} style={{ color: member.color }} />
                  </a>
                </div>

                {/* Skills Preview */}
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {member.skills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border px-3 py-1 text-xs font-medium transition-all group-hover:scale-105"
                      style={{ 
                        borderColor: `${member.color}20`,
                        color: member.color,
                        backgroundColor: `${member.color}08`
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                  {member.skills.length > 4 && (
                    <span
                      className="rounded-full border px-3 py-1 text-xs font-medium"
                      style={{ 
                        borderColor: `${member.color}20`,
                        color: member.color,
                        backgroundColor: `${member.color}08`
                      }}
                    >
                      +{member.skills.length - 4} more
                    </span>
                  )}
                </div>

                <p className="mt-4 text-center text-xs text-[#9aa0a6]">Click to view full profile</p>
              </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overlay Modal */}
      {selectedMember && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedMember(null)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#1a1b1c] border-2"
            style={{ 
              borderColor: selectedMember.color,
              boxShadow: `0 0 30px ${selectedMember.color}60, 0 0 60px ${selectedMember.color}40, inset 0 0 20px ${selectedMember.color}10`,
              animation: 'borderGlow 3s ease-in-out infinite'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <style>{`
              @keyframes borderGlow {
                0%, 100% { 
                  box-shadow: 0 0 20px ${selectedMember.color}60, 0 0 40px ${selectedMember.color}40, inset 0 0 20px ${selectedMember.color}10;
                }
                50% { 
                  box-shadow: 0 0 40px ${selectedMember.color}80, 0 0 60px ${selectedMember.color}60, inset 0 0 30px ${selectedMember.color}20;
                }
              }
            `}</style>

            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#303134] bg-[#28292a] transition-all hover:scale-110 hover:bg-[#303134]"
            >
              <X size={20} className="text-[#e3e3e3]" />
            </button>

            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div
                  className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full border-4"
                  style={{ 
                    borderColor: `${selectedMember.color}60`,
                    backgroundColor: `${selectedMember.color}15`,
                    boxShadow: `0 0 30px ${selectedMember.color}40`
                  }}
                >
                  <span className="font-serif text-5xl font-bold" style={{ color: selectedMember.color }}>
                    {selectedMember.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-4xl font-bold text-white">{selectedMember.name}</h2>
                  <p className="mt-2 text-xl font-medium" style={{ color: selectedMember.color }}>
                    {selectedMember.role}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 justify-center md:justify-start text-sm text-[#9aa0a6]">
                    <span>{selectedMember.institution}</span>
                    <span>•</span>
                    <span>Batch {selectedMember.batch}</span>
                    <span>•</span>
                    <span>{selectedMember.semester}</span>
                  </div>

                  {/* Social Links */}
                  <div className="mt-4 flex gap-3 justify-center md:justify-start">
                    <a
                      href={selectedMember.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full border transition-all hover:scale-110"
                      style={{ 
                        borderColor: `${selectedMember.color}40`,
                        backgroundColor: `${selectedMember.color}15`
                      }}
                    >
                      <Github size={20} style={{ color: selectedMember.color }} />
                    </a>
                    <a
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full border transition-all hover:scale-110"
                      style={{ 
                        borderColor: `${selectedMember.color}40`,
                        backgroundColor: `${selectedMember.color}15`
                      }}
                    >
                      <Linkedin size={20} style={{ color: selectedMember.color }} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="mt-8">
                <h3 className="text-lg font-bold text-white mb-3">About</h3>
                <p className="text-[#9aa0a6] leading-relaxed">{selectedMember.bio}</p>
              </div>

              {/* Specialization */}
              <div className="mt-6">
                <h3 className="text-lg font-bold text-white mb-3">Specialization</h3>
                <p className="text-[#9aa0a6]">{selectedMember.specialization}</p>
              </div>

              {/* Tech Stack */}
              <div className="mt-6">
                <h3 className="text-lg font-bold text-white mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedMember.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border px-4 py-2 text-sm font-medium transition-all hover:scale-105"
                      style={{ 
                        borderColor: `${selectedMember.color}30`,
                        color: selectedMember.color,
                        backgroundColor: `${selectedMember.color}10`
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
