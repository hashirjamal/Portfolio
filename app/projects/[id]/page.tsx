import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return Object.keys(projects).map((id) => ({ id }));
}
const projects = {
  "tms": {
    title: "Training Management System",
    category: "Web Development",
    collaborators: "Muneer Hussain, Tazeen Amir, Ibad Ali, Nashwah Muhammad, Eraj Tanweer",
    completionDate: "October 2024",
    technologies: ["React", "Express.js", "Tailwind CSS", "Material UI", "My SQL"],
    description:
      "A centralized platform for an educational instution to manage their trainings of employees along with their feedback, attendance and billing",
    challenge:
      "The training department of the institution had to manage trainings manually on papers and the information was scattered on flat files.",
    solution:
      "Our team implemented a centeralized web based platform which automated the whole training lifecycle of the organization leading to high productivity and less manual intervention.",
    images: [
      "/tms-2.png",
      "/tms-3.png",
      "/tms-4.png",
      "/tms-5.png",
      
    ],
    mainImg:"/tms-1.png",
    videoUrl: "https://www.example.com/video.mp4",
    liveUrl: "https://example.com",
    githubUrl: null,
  },
  "Resume-Evaluator": {
    title: "AI Resume Evaluator",
    category: "Web Dev and AI",
    collaborators: "Tazeen Amir, Eraj Tanweer",
    completionDate: "Septemnber 2024",
    technologies: ["NEXT Js", "Gen AI", "Pinecone", "Hugging Face","MUI","RAG"],
    description:
      "A SaaS app which enables candidates to evaluate their CV against the JD and seek advice and score from AI to optimize their CV.",
    challenge:
      "Candidates struggle to tailor their CV according to the JD. Increasing competition and use of ATS amplifies the need for tailoring Resume against the JD",
    solution:
      "Our team developed a platform which lets user upload their Cv and JD. The platform then evaluates the CV with respect to the given JD and generates a score and set of advices to improve skill set and CV in order to become the best fit for the job.",
    images: [
      "/teal2.png",
      "/teal3.png",
      "/teal4.png",
      "/teal1.png",
     
    ],
    mainImg:"/teal3.png",
    videoUrl: "https://www.example.com/video.mp4",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/hashirjamal/tealhq-clone/tree/hashir",
  },
  ManageWare: {
    title: "Warehouse Management System",
    category: "Web Application",
    collaborators: "Self",
    completionDate: "March 2025",
    technologies: ["React", "Express", "Mongo DB", "Tailwind CSS", "Shadcn"],
    description:
      `[This Project is Under Development]. 
      An interactive analytics based warehouse management system which lets warehouse owners manage their inventory, purchase and sale orders.`,
    challenge:
      "Manually managing warehouse operations can be tough at large scale.",
    solution:
      "I implemented a one stop platform which reduces human effort required to maintain the record of inventory. Moreover, it provides insights and analytics about the warehouse",
    images: [
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
    ],
    mainImg:"",
    videoUrl: "https://www.example.com/video.mp4",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
  },
  "LearnFlow": {
    title: "Academic Document Sharing Platform",
    category: "Web App and AI",
    collaborators: "Tazeen Amir, Eraj Tanweer",
    completionDate: "Feb 2025",
    technologies: ["React", "Express JS", "Hugging Face", "Gen AI","RAG"],
    description:
      "A one stop platform for researchers and students to store and share their documents along with Chat with PDF and flashcard generation features.",
    challenge:
      "Researchers and students find it tough to share lengthy documents and review them again and again.",
    solution:
      "Our team implemented a platform which lets user store and share their academic documents in the form of collection and they no more have to read whole documents while reviewing them, AI will generate flashcards and the chatbot will retrieve all the necessary information from the document.",
    images: [
      "/lf2.png",
      "/lf3.png",
      "/lf4.png",
      "/lf5.png",
      
    ],
    mainImg:"/lf1.png",
    videoUrl: "https://www.example.com/video.mp4",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/ErajT/iba-hackathon",
  },
}


export default function ProjectPage({ params }: ProjectPageProps) {
  // This would typically come from a database or CMS
  


  const project = projects[params.id as keyof typeof projects];


  if (!project) {
    return (
      <>
        <Navbar />
        <div className="container py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="mb-8">The project you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/#portfolio">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="py-12">
        <div className="container px-4 md:px-6">
          {/* Back button */}
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link href="/#portfolio">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>
          </div>

          {/* Project header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
            <p className="text-xl text-muted-foreground mt-2">{project.category}</p>
          </div>

          {/* Main project image */}
          <div className="mb-12 overflow-hidden rounded-lg">
            <Image
              src={project.mainImg || "/placeholder.svg"}
              alt={project.title}
              width={1200}
              height={600}
              className="w-full object-cover"
            />
          </div>

          {/* Project details */}
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-muted-foreground">{project.description}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-muted-foreground">{project.challenge}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">The Solution</h2>
                <p className="text-muted-foreground">{project.solution}</p>
              </div>

              {/* Project gallery */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Project Gallery</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {project.images.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} - Image ${index + 2}`}
                        width={600}
                        height={400}
                        className="w-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Project video */}
              {/* {project.videoUrl && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Project Demo</h2>
                  <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                    <video controls className="h-full w-full" poster={project.images[0]}>
                      <source src={project.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              )} */}
            </div>

            <div className="space-y-8">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-xl font-bold mb-4">Project Details</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="font-medium text-muted-foreground">Collaborators</dt>
                    <dd>{project.collaborators}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-muted-foreground">Completed</dt>
                    <dd>{project.completionDate}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-muted-foreground">Technologies</dt>
                    <dd>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="space-y-4">
                {/* {project.liveUrl && (
                  <Button className="w-full" asChild>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live Site
                    </Link>
                  </Button>
                )} */}
                {project.githubUrl && (
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Source Code
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

