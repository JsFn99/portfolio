import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import ContactForm from "@/components/contact-form"
import ProjectCard from "@/components/project-card"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-gray-950"></div>
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              AI Engineer & Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Crafting intelligent systems, building seamless experiences, and pushing the boundaries of technology
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-medium flex items-center gap-2 transition-all"
              >
                View Projects <ArrowRight size={18} />
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-md font-medium transition-all"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="animate-bounce">
            <ArrowRight size={24} className="rotate-90" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <Image
                src="/profil.jpg?height=400&width=400"
                alt="Profile"
                width={400}
                height={400}
                className="rounded-xl shadow-2xl border border-gray-800"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-gray-300 mb-4">
                I am Fnine Jasser, a software engineer specializing in AI and data science, passionate about solving complex problems through intelligent systems.
                My expertise includes machine learning, deep learning, and backend development, working with technologies like TensorFlow, FastAPI, and LangChain.
              </p>
              <p className="text-gray-300 mb-6">
                Currently, I’m pursuing a Master’s in Applied AI, refining my skills in building scalable AI solutions. My work spans AI-powered solutions,
                full-stack development, and technical writing, and I also run a blog where I explore topics at the intersection of technology, philosophy, and society.
              </p>
              <p className="text-gray-300 mb-6">
                When I’m not coding, I’m either writing, training, or experimenting with new ideas.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "Java",
                  "JavaScript",
                  "TypeScript",
                  "SQL",
                  "Flutter",
                  "Kotlin",
                  "Hadoop",
                  "Next.js",
                  "TensorFlow",
                  "FastAPI",
                  "LangChain",
                  "Spring Boot",
                  ".NET",
                  "Docker",
                  "Kafka",
                  "Deep Learning",
                  "NLP",
                  "Data Mining",
                ].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Local PDF-RAG with LangChain"
              description="An application that leverages LangChain and llama models to generate high-quality content based on user local data."
              image="/rag.png?height=300&width=500"
              tags={["Python", "LangChain", "StreamLit", "ChromaDB", "Ollama"]}
              githubUrl="#"
              demoUrl="#"
            />
            <ProjectCard
              title="Zombie Land Game JS"
              description="A survival game built with JavaScript and p5.js, where players navigate a zombie-infested world, protect dogs, and use missiles to eliminate threats."
              image="/zombieGame.png?height=300&width=500"
              tags={["JavaScript", "p5.js", "Game Development"]}
              githubUrl="https://github.com/JsFn99/ZombieLand"
              demoUrl="https://jsfn99.github.io/ZombieLand/"
            />
            <ProjectCard
              title="AI Mobile App"
              description="A crossplatform mobile application that holds several artificial intelligence models."
              image="/app.png?height=300&width=500"
              tags={["Flutter", "Dart", "TFLite", "llama", "FireBase", "Gemini", "FastAPI", "Neural Network", "LLM", "RAG"]}
              githubUrl="https://github.com/JsFn99/AiApp"
              demoUrl="#"
            />
            <ProjectCard
              title="Philosophical Blog Platform"
              description="A content-focused blog platform for philosophical discussions, featuring a clean reading experience and robust content management."
              image="/blog.png?height=300&width=500"
              tags={["Astro", "Tailwind CSS", "Markdown", "Vercel", "WordPress"]}
              githubUrl="https://github.com/JsFn99/JasserBlog"
              demoUrl="https://fnine6.wordpress.com"
            />
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">My Certifications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Certification 1 */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Introduction to Big Data with Spark and Hadoop</h3>
              <p className="text-gray-400 mb-4">Learned how to process and analyze big data using Spark and Hadoop tools.</p>
              <div className="flex items-center gap-2 mb-4">
                <img src="https://interbrand.com/wp-content/uploads/2020/10/ibm-square.png" alt="IBM" className="w-8 h-8" />
                <p className="text-gray-500">IBM</p>
              </div>
              <a href="https://www.coursera.org/account/accomplishments/certificate/your-certificate-id" target="_blank" className="text-blue-400 hover:text-blue-500">View Certificate</a>
            </div>

            {/* Certification 2 */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">React Native</h3>
              <p className="text-gray-400 mb-4">Mastered React Native for building mobile applications for both iOS and Android.</p>
              <div className="flex items-center gap-2 mb-4">
                <img src="https://yt3.googleusercontent.com/ytc/AIdro_n94STjDykDksYxhfE4RhM1BT4R2H69tIAHav8jrey03qQ=s900-c-k-c0x00ffffff-no-rj" alt="Meta" className="w-8 h-8" />
                <p className="text-gray-500">Meta</p>
              </div>
              <a href="https://www.coursera.org/account/accomplishments/certificate/your-certificate-id" target="_blank" className="text-blue-400 hover:text-blue-500">View Certificate</a>
            </div>

            {/* Certification 3 */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Building Scalable Java Microservices with Spring Boot and Spring Cloud</h3>
              <p className="text-gray-400 mb-4">Built scalable and reliable Java microservices using Spring Boot and Spring Cloud technologies.</p>
              <div className="flex items-center gap-2 mb-4">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPQEF2XXwt44laODjvpEpvgUlajKbkdmBeEw&s" alt="Google Cloud" className="w-8 h-8" />
                <p className="text-gray-500">Google Cloud</p>
              </div>
              <a href="https://www.coursera.org/account/accomplishments/certificate/your-certificate-id" target="_blank" className="text-blue-400 hover:text-blue-500">View Certificate</a>
            </div>

            {/* Certification 4 */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">What is Data Science?</h3>
              <p className="text-gray-400 mb-4">Gained foundational knowledge in data science and its application in various fields.</p>
              <div className="flex items-center gap-2 mb-4">
                <img src="https://interbrand.com/wp-content/uploads/2020/10/ibm-square.png" alt="IBM" className="w-8 h-8" />
                <p className="text-gray-500">IBM</p>
              </div>
              <a href="https://www.coursera.org/account/accomplishments/certificate/your-certificate-id" target="_blank" className="text-blue-400 hover:text-blue-500">View Certificate</a>
            </div>

            {/* Certification 5 */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Machine Learning with Python</h3>
              <p className="text-gray-400 mb-4">Learned how to apply machine learning algorithms using Python to solve real-world problems.</p>
              <div className="flex items-center gap-2 mb-4">
                <img src="https://interbrand.com/wp-content/uploads/2020/10/ibm-square.png" alt="IBM" className="w-8 h-8" />
                <p className="text-gray-500">IBM</p>
              </div>
              <a href="https://www.coursera.org/account/accomplishments/certificate/your-certificate-id" target="_blank" className="text-blue-400 hover:text-blue-500">View Certificate</a>
            </div>

            {/* Certification 6 */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Introduction to Data Engineering</h3>
              <p className="text-gray-400 mb-4">Covered the fundamentals of data engineering, focusing on designing and managing data pipelines.</p>
              <div className="flex items-center gap-2 mb-4">
                <img src="https://interbrand.com/wp-content/uploads/2020/10/ibm-square.png" alt="IBM" className="w-8 h-8" />
                <p className="text-gray-500">IBM</p>
              </div>
              <a href="https://www.coursera.org/account/accomplishments/certificate/your-certificate-id" target="_blank" className="text-blue-400 hover:text-blue-500">View Certificate</a>
            </div>

            {/* Certification 7 */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Introduction to Containers w/ Docker, Kubernetes & OpenShift</h3>
              <p className="text-gray-400 mb-4">Learned how to use containers with Docker and orchestrate them with Kubernetes and OpenShift.</p>
              <div className="flex items-center gap-2 mb-4">
                <img src="https://interbrand.com/wp-content/uploads/2020/10/ibm-square.png" alt="IBM" className="w-8 h-8" />
                <p className="text-gray-500">IBM</p>
              </div>
              <a href="https://www.coursera.org/account/accomplishments/certificate/your-certificate-id" target="_blank" className="text-blue-400 hover:text-blue-500">View Certificate</a>
            </div>

            {/* Certification 8 */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Data Science Methodology</h3>
              <p className="text-gray-400 mb-4">Learned how to set up a proper Data Science methodology.</p>
              <div className="flex items-center gap-2 mb-4">
                <img src="https://interbrand.com/wp-content/uploads/2020/10/ibm-square.png" alt="IBM" className="w-8 h-8" />
                <p className="text-gray-500">IBM</p>
              </div>
              <a href="https://www.coursera.org/account/accomplishments/certificate/your-certificate-id" target="_blank" className="text-blue-400 hover:text-blue-500">View Certificate</a>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold">JF Portfolio</h3>
              <p className="text-gray-400 mt-2">© 2025 All Rights Reserved</p>
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/JsFn99" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/jasser-fnine/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:fninejasser@hotmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

