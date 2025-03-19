import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Contact, Download } from "lucide-react"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[500px] aspect-square">
              <Image
                src="/about-us.png?height=600&width=600"
                alt="Developer at desk"
                width={600}
                height={600}
                className="object-contain rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                LET&apos;S INTRODUCE ABOUT MYSELF
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                I'm a passionate Software Engineer with 3 years of experience specializing in Full-Stack Development and AI Engineering. I thrive at the intersection of cutting-edge technology and real-world problem-solving, building scalable applications and integrating intelligent solutions.
                </p>
                <p>
                My expertise spans across modern front-end and back-end frameworks, AI-driven systems, and optimizing user-centric experiences. Whether it's crafting seamless UIs, developing robust APIs, or deploying AI models, I’m always excited to push boundaries and deliver impactful solutions.
                </p>
               
              </div>
            </div>
            <div className="flex mt-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/#contact" >
                Contact Me
              </Link>
                <Contact className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

