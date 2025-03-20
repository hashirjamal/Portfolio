import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import "./comp.css"


export default function ProjectsSection() {
  const projects = [
    {
      id: "tms",
      title: "Training Management System",
      category: "Web Development",
      image: "/tms-1.png",
      description:
        "A centralized platform for an educational instution to manage their trainings of employees along with their feedback, attendance and billing",
    },
    {
      id: "Resume-Evaluator",
      title: "AI Resume Evaluator",
      category: "AI SaaS",
      image: "/teal3.png",
      description:
        "A SaaS app which enables candidates to evaluate their CV against the JD and seek advice and score from AI to optimize their CV.",
    },
    {
      id: "ManageWare",
      title: "Warehouse Management System",
      category: "Web Application",
      image: "/placeholder.svg?height=600&width=800",
      description:
      "An interactive analytics based warehouse management system which lets warehouse owners manage their inventory, purchase and sale orders.",
    },
    {
      id: "LearnFlow",
      title: "Academic Document Sharing Platform",
      category: "AI SaaS",
      image: "/lf1.png",
      description:
      "A one stop platform for researchers and students to store and share their documents along with Chat with PDF and flashcard generation features.",
    },
  ]

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">FEATURED PROJECTS</h2>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
            Check out some of my recent work that showcases my skills and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group block overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md"
            >
              <div className="aspect-video w-full overflow-hidden">
              <Image
  src={project.image || "/placeholder.svg"}
  alt={project.title}
  width={800}
  height={600}
  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105 img-sharp"
/>

              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.category}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-full" aria-label="View project">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <p className="mt-3 text-muted-foreground">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
          <Link href="/#contact">

            Want One for Your Business?
          </Link>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

