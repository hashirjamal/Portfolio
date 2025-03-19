import { Bot, Code, Monitor, Palette, Rocket, Search } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: <Code className="h-12 w-12 text-primary" />,
      title: "WEB DEVELOPMENT",
      description: "Building responsive, fast, and accessible websites using modern frameworks and best practices.",
    },
    {
      icon: <Monitor className="h-12 w-12 text-primary"/>,
      title: "Management Systems",
      description: "Developing productive management systems which streamlines and automates business operations.",
    },
    {
      icon: <Bot className="h-12 w-12 text-primary"/>,
      title: "Artificial Intelligence",
      description: "Integrating AI systems in your business to automate workflow.",
    },
    {
      icon: <Rocket className="h-12 w-12 text-primary" />,
      title: "SaaS Development",
      description: "Developing high performance SaaS apps to fuel startups and enrich their vision.",
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">SERVICE OFFERS</h2>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
            I offer a range of services to help businesses and individuals establish a strong online presence and
            achieve their digital goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 text-center"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

