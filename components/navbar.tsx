"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import PillNav from "./ui/pill-nav"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Careers", href: "#careers" },
]

const googleColors = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [colorIndex, setColorIndex] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Cycle through Google colors for HQ
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % googleColors.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <nav 
      className="fixed inset-x-0 top-0 transition-all duration-300"
      style={{ zIndex: 50 }}
    >
      <div 
        className="mx-auto px-6 md:px-10 transition-all duration-300 relative"
        style={{
          paddingTop: scrolled ? '12px' : '16px',
          paddingBottom: scrolled ? '12px' : '16px',
          backgroundColor: scrolled ? 'rgba(30, 31, 32, 0.95)' : 'rgba(18, 19, 20, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: scrolled ? '1px solid rgba(48, 49, 52, 0.5)' : '1px solid rgba(48, 49, 52, 0.2)'
        }}
      >
        {/* Subtle Google Color Accent Line */}
        <div 
          className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-300"
          style={{
            background: 'linear-gradient(90deg, #4285F4 0%, #EA4335 33%, #FBBC05 66%, #34A853 100%)',
            opacity: scrolled ? 0.6 : 0.3
          }}
        />

        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-1 select-none group"
          >
            <span
              className="font-serif font-extrabold text-[#e3e3e3] transition-all duration-300"
              style={{ fontSize: scrolled ? '1.1rem' : '1.4rem' }}
            >
              Blancos
              <span 
                className="transition-colors duration-500"
                style={{ color: googleColors[colorIndex] }}
              >
                HQ
              </span>
            </span>
          </a>

          {/* PillNav - Centered on Desktop */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <PillNav
              logo={
                <span 
                  className="font-bold text-lg transition-colors duration-500"
                  style={{ color: googleColors[colorIndex] }}
                >
                  B
                </span>
              }
              items={navLinks}
              baseColor="#000000"
              pillColor="#1e1f20"
              hoveredPillTextColor="#ffffff"
              pillTextColor="#e3e3e3"
            />
          </div>

          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(66,133,244,0.25)] transition-all hover:shadow-[0_0_30px_rgba(66,133,244,0.45)] hover:brightness-110 relative overflow-hidden group"
            style={{ 
              backgroundColor: googleColors[colorIndex],
            }}
          >
            {/* Animated gradient overlay */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `linear-gradient(135deg, ${googleColors[colorIndex]}00 0%, ${googleColors[(colorIndex + 1) % 4]}40 100%)`
              }}
            />
            <span className="relative z-10">Contact Us</span>
            <ArrowRight size={15} className="relative z-10 transition-transform group-hover:translate-x-1" />
          </a>

          {/* Mobile PillNav */}
          <div className="md:hidden">
            <PillNav
              logo={
                <span 
                  className="font-bold text-base transition-colors duration-500"
                  style={{ color: googleColors[colorIndex] }}
                >
                  B
                </span>
              }
              items={navLinks}
              baseColor="#000000"
              pillColor="#1e1f20"
              hoveredPillTextColor="#ffffff"
              pillTextColor="#e3e3e3"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}
