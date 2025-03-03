import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl: string
  demoUrl: string
}

export default function ProjectCard({ title, description, image, tags, githubUrl, demoUrl }: ProjectCardProps) {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-gray-800 rounded-md text-xs text-gray-300">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <Link href={githubUrl} className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors">
            <Github size={16} />
            <span>Code</span>
          </Link>
          <Link href={demoUrl} className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors">
            <ExternalLink size={16} />
            <span>Demo</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

