import { useEffect } from "react"
import Lenis from "lenis"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Values } from "@/components/values"
import { Services } from "@/components/services"
import { Team } from "@/components/team"
import { Projects } from "@/components/projects"
import { Plans } from "@/components/plans"
import { Careers } from "@/components/careers"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function App() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
            syncTouch: true,
        })

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    return (
        <main className="min-h-screen overflow-x-hidden">
            <Navbar />
            <Hero />
            <About />
            <Values />
            <Services />
            <Team />
            <Projects />
            <Plans />
            <Careers />
            <Contact />
            <Footer />
        </main>
    )
}
