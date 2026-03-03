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
    return (
        <main className="min-h-screen">
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
