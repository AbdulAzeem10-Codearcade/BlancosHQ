"use client"

import { SectionGlow } from "./section-glow"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#303134] bg-background">
      <SectionGlow variant="footer" />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-card border border-[#303134]">
                <span className="font-serif text-xl font-bold text-[#4285F4]">B</span>
              </div>
              <span className="font-serif text-xl font-bold text-[#e3e3e3]">
                Blancos<span className="text-[#4285F4]">HQ</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#9aa0a6]">
              Building Future-Ready Digital Solutions. We transform ambitious
              ideas into scalable digital products.
            </p>
            {/* Google color bar */}
            <div className="mt-6 flex gap-1.5">
              <span className="h-1 w-8 rounded-full bg-[#4285F4]" />
              <span className="h-1 w-8 rounded-full bg-[#EA4335]" />
              <span className="h-1 w-8 rounded-full bg-[#FBBC05]" />
              <span className="h-1 w-8 rounded-full bg-[#34A853]" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#e3e3e3]">
              Quick Links
            </h4>
            <nav className="mt-4 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#9aa0a6] transition-colors hover:text-[#8ab4f8]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Recap */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#e3e3e3]">
              Get in Touch
            </h4>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[#9aa0a6]">
              <a
                href="mailto:hello@blancoshq.com"
                className="transition-colors hover:text-[#8ab4f8]"
              >
                hello@blancoshq.com
              </a>
              <a
                href="tel:+15551234567"
                className="transition-colors hover:text-[#8ab4f8]"
              >
                +1 (555) 123-4567
              </a>
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#303134] pt-8 sm:flex-row">
          <p className="text-xs text-[#9aa0a6]">
            &copy; 2026 Blancos HQ. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-[#9aa0a6] transition-colors hover:text-[#8ab4f8]">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-[#9aa0a6] transition-colors hover:text-[#8ab4f8]">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
