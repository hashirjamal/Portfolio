import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Linkedin } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32 overflow-hidden relative">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none ">HELLO,I  AM  </h1>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none tracking-wider">HASHIR JAMAL</h2>
              <p className="text-xl text-muted-foreground md:text-2xl mt-4">SOFTWARE ENGINEER</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="#contact">
                HIRE ME
              </Link>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
                <Link href="https://www.linkedin.com/in/hashir-jamal-0a6503214"
                 target="_blank"
                rel="noopener noreferrer"
                >
              <Button size="lg" variant="outline">
                My LinkedIn
                <Linkedin className="ml-2 h-4 w-4" />
              </Button>
                </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-square">
              <Image
                src="/home-right.png?height=600&width=600"
                alt="Developer illustration"
                width={600}
                height={600}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute text-[200px] font-bold text-gray-100 opacity-10 -z-10 -left-20 top-1/2 transform -translate-y-1/2">
        DEV
      </div>
    </section>
  )
}

