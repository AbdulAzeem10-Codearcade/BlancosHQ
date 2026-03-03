"use client"

/**
 * Reusable background glow component for sections.
 * Places blurry, semi-circular gradient orbs using Google's brand colors.
 * Each variant provides a unique arrangement so no two sections look the same.
 */

type GlowOrb = {
  color: string
  size: string
  position: string
  opacity: string
  blur: string
  shape?: string
}

const variants: Record<string, GlowOrb[]> = {
  hero: [
    { color: "#4285F4", size: "w-[700px] h-[700px]", position: "absolute -top-60 left-[10%]", opacity: "opacity-[0.07]", blur: "blur-[150px]", shape: "rounded-full" },
    { color: "#EA4335", size: "w-[500px] h-[500px]", position: "absolute top-[30%] -right-40", opacity: "opacity-[0.05]", blur: "blur-[130px]", shape: "rounded-full" },
    { color: "#34A853", size: "w-[600px] h-[400px]", position: "absolute -bottom-40 left-[20%]", opacity: "opacity-[0.05]", blur: "blur-[140px]", shape: "rounded-[40%]" },
    { color: "#FBBC05", size: "w-[300px] h-[300px]", position: "absolute top-[20%] left-[60%]", opacity: "opacity-[0.04]", blur: "blur-[100px]", shape: "rounded-full" },
  ],
  about: [
    { color: "#4285F4", size: "w-[600px] h-[600px]", position: "absolute -top-40 -right-40", opacity: "opacity-[0.06]", blur: "blur-[140px]", shape: "rounded-[35%]" },
    { color: "#FBBC05", size: "w-[500px] h-[500px]", position: "absolute top-[50%] -left-60", opacity: "opacity-[0.05]", blur: "blur-[130px]", shape: "rounded-full" },
    { color: "#34A853", size: "w-[400px] h-[300px]", position: "absolute -bottom-32 right-[20%]", opacity: "opacity-[0.04]", blur: "blur-[120px]", shape: "rounded-[40%]" },
  ],
  values: [
    { color: "#EA4335", size: "w-[550px] h-[550px]", position: "absolute -top-48 left-[5%]", opacity: "opacity-[0.06]", blur: "blur-[140px]", shape: "rounded-[30%]" },
    { color: "#34A853", size: "w-[450px] h-[450px]", position: "absolute top-[40%] -right-32", opacity: "opacity-[0.05]", blur: "blur-[120px]", shape: "rounded-full" },
    { color: "#FBBC05", size: "w-[350px] h-[250px]", position: "absolute -bottom-20 left-[40%]", opacity: "opacity-[0.04]", blur: "blur-[110px]", shape: "rounded-[45%]" },
  ],
  services: [
    { color: "#4285F4", size: "w-[500px] h-[500px]", position: "absolute -top-32 -left-40", opacity: "opacity-[0.06]", blur: "blur-[130px]", shape: "rounded-full" },
    { color: "#EA4335", size: "w-[600px] h-[400px]", position: "absolute top-[60%] -right-60", opacity: "opacity-[0.05]", blur: "blur-[140px]", shape: "rounded-[35%]" },
    { color: "#34A853", size: "w-[400px] h-[400px]", position: "absolute top-[20%] right-[30%]", opacity: "opacity-[0.03]", blur: "blur-[120px]", shape: "rounded-full" },
    { color: "#FBBC05", size: "w-[300px] h-[300px]", position: "absolute -bottom-40 left-[15%]", opacity: "opacity-[0.05]", blur: "blur-[110px]", shape: "rounded-[40%]" },
  ],
  team: [
    { color: "#FBBC05", size: "w-[600px] h-[500px]", position: "absolute -top-48 right-[10%]", opacity: "opacity-[0.06]", blur: "blur-[140px]", shape: "rounded-[38%]" },
    { color: "#4285F4", size: "w-[450px] h-[450px]", position: "absolute top-[50%] -left-48", opacity: "opacity-[0.05]", blur: "blur-[130px]", shape: "rounded-full" },
    { color: "#EA4335", size: "w-[350px] h-[250px]", position: "absolute -bottom-24 right-[30%]", opacity: "opacity-[0.04]", blur: "blur-[110px]", shape: "rounded-[42%]" },
  ],
  projects: [
    { color: "#34A853", size: "w-[650px] h-[650px]", position: "absolute -top-60 -left-40", opacity: "opacity-[0.07]", blur: "blur-[150px]", shape: "rounded-[32%]" },
    { color: "#4285F4", size: "w-[500px] h-[400px]", position: "absolute top-[40%] -right-48", opacity: "opacity-[0.05]", blur: "blur-[130px]", shape: "rounded-full" },
    { color: "#FBBC05", size: "w-[400px] h-[300px]", position: "absolute bottom-[10%] left-[30%]", opacity: "opacity-[0.04]", blur: "blur-[120px]", shape: "rounded-[40%]" },
    { color: "#EA4335", size: "w-[300px] h-[300px]", position: "absolute top-[15%] left-[50%]", opacity: "opacity-[0.03]", blur: "blur-[100px]", shape: "rounded-full" },
  ],
  plans: [
    { color: "#4285F4", size: "w-[550px] h-[550px]", position: "absolute -top-44 left-[20%]", opacity: "opacity-[0.06]", blur: "blur-[140px]", shape: "rounded-[36%]" },
    { color: "#34A853", size: "w-[500px] h-[400px]", position: "absolute top-[55%] -right-48", opacity: "opacity-[0.05]", blur: "blur-[130px]", shape: "rounded-full" },
    { color: "#EA4335", size: "w-[400px] h-[300px]", position: "absolute -bottom-32 -left-32", opacity: "opacity-[0.04]", blur: "blur-[110px]", shape: "rounded-[42%]" },
  ],
  careers: [
    { color: "#EA4335", size: "w-[500px] h-[500px]", position: "absolute -top-36 -right-32", opacity: "opacity-[0.06]", blur: "blur-[130px]", shape: "rounded-[34%]" },
    { color: "#FBBC05", size: "w-[450px] h-[350px]", position: "absolute top-[50%] -left-48", opacity: "opacity-[0.05]", blur: "blur-[120px]", shape: "rounded-full" },
    { color: "#4285F4", size: "w-[350px] h-[250px]", position: "absolute -bottom-20 right-[25%]", opacity: "opacity-[0.04]", blur: "blur-[110px]", shape: "rounded-[40%]" },
  ],
  contact: [
    { color: "#4285F4", size: "w-[600px] h-[600px]", position: "absolute -top-52 -left-48", opacity: "opacity-[0.07]", blur: "blur-[150px]", shape: "rounded-full" },
    { color: "#34A853", size: "w-[500px] h-[400px]", position: "absolute top-[30%] -right-40", opacity: "opacity-[0.05]", blur: "blur-[130px]", shape: "rounded-[38%]" },
    { color: "#FBBC05", size: "w-[400px] h-[400px]", position: "absolute -bottom-40 left-[35%]", opacity: "opacity-[0.05]", blur: "blur-[120px]", shape: "rounded-full" },
    { color: "#EA4335", size: "w-[300px] h-[200px]", position: "absolute top-[60%] left-[10%]", opacity: "opacity-[0.03]", blur: "blur-[100px]", shape: "rounded-[45%]" },
  ],
  footer: [
    { color: "#4285F4", size: "w-[500px] h-[300px]", position: "absolute -top-32 right-[20%]", opacity: "opacity-[0.05]", blur: "blur-[120px]", shape: "rounded-[40%]" },
    { color: "#EA4335", size: "w-[400px] h-[300px]", position: "absolute top-[40%] -left-40", opacity: "opacity-[0.04]", blur: "blur-[110px]", shape: "rounded-full" },
  ],
}

export function SectionGlow({ variant }: { variant: keyof typeof variants }) {
  const orbs = variants[variant] || variants.hero

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {orbs.map((orb, i) => (
        <div
          key={i}
          className={`${orb.position} ${orb.size} ${orb.opacity} ${orb.blur} ${orb.shape}`}
          style={{ backgroundColor: orb.color }}
        />
      ))}
    </div>
  )
}
