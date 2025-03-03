import Link from "next/link"
import { Calendar } from "lucide-react"

interface BlogPostProps {
  title: string
  excerpt: string
  date: string
  slug: string
}

export default function BlogPost({ title, excerpt, date, slug }: BlogPostProps) {
  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 transition-all hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10">
      <Link href={slug}>
        <h3 className="text-xl font-bold mb-3 hover:text-blue-400 transition-colors">{title}</h3>
      </Link>
      <p className="text-gray-400 mb-4">{excerpt}</p>
      <div className="flex items-center text-gray-500 text-sm">
        <Calendar size={14} className="mr-1" />
        <span>{date}</span>
      </div>
    </div>
  )
}

