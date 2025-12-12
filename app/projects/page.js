import { supabase } from '@/lib/supabase'
import Link from "next/link"

export default async function Projects() {
  // Fetches all projects from Supabase
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">My Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects?.map((project) => {
            // Converts skills string into array for display
            const skillsArray = project.skills ? project.skills.split(",") : []

            return (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="block bg-white shadow p-6 rounded-lg hover:shadow-lg transition">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skillsArray.map((skill) => (
                    <span
                      key={skill}
                      className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                      {skill.trim()}
                    </span>
                  ))}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
