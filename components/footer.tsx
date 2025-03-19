import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">Portfolio</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              A creative developer focused on building modern, responsive web applications with a focus on user
              experience.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium">Links</h3>
              <nav className="mt-4 flex flex-col space-y-2 text-sm">
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
                <Link href="/#about" className="hover:text-primary">
                  About
                </Link>
                <Link href="/#services" className="hover:text-primary">
                  Services
                </Link>
                <Link href="/#portfolio" className="hover:text-primary">
                  Portfolio
                </Link>
                <Link href="/#contact" className="hover:text-primary">
                  Contact
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-medium">Services</h3>
              <nav className="mt-4 flex flex-col space-y-2 text-sm">
                <Link href="/#services" className="hover:text-primary">
                  Website Development
                </Link>
                <Link href="/#services" className="hover:text-primary">
                  Management Systems
                </Link>
                <Link href="/#services" className="hover:text-primary">
                  Artificial Intelligence
                </Link>
                <Link href="/#services" className="hover:text-primary">
                  SaaS Development
                </Link>
              </nav>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">Stay Connected</h3>
            <div className="mt-4 flex space-x-4"> 
              <Link
                href="https://x.com/hashir_jamal18"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border p-2 hover:bg-primary hover:text-primary-foreground"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://github.com/hashirjamal"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border p-2 hover:bg-primary hover:text-primary-foreground"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link> 
              <Link
                href="https://www.linkedin.com/in/hashir-jamal-0a6503214"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border p-2 hover:bg-primary hover:text-primary-foreground"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            {/* <p className="mt-4 text-sm text-muted-foreground">Subscribe to my newsletter for the latest updates.</p>
            <form className="mt-2 flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-l-md border bg-background px-3 py-2 text-sm"
                required
              />
              <button
                type="submit"
                className="rounded-r-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
              >
                Subscribe
              </button>
            </form> */}
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} DEVFOLIO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

