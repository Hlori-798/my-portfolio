import { supabase } from "@/lib/supabase"
import Link from "next/link"

export default async function ProjectPage({ params }) {
  const { id } = await params

  // Fetches one project by id
  const { data: project } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single()

  if (!project) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-stone-600 mb-4">Project not found</p>
          <Link href="/projects" className="text-purple-600 hover:text-purple-700">
            Back to Projects</Link>
        </div>
     </div>
    )
  }

  const skillsArray = project.skills ? project.skills.split(",") : []

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 py-16">

        {/* back button */}
        <Link href="/projects" className="inline-flex items-center 
          text-stone-600 hover:text-stone-900 mb-8 transition-colors">
          Back to Projects
        </Link>

        {/* project content */}
        <div className="bg-white border border-stone-200 rounded-xl p-8 lg:p-12">

          {/* project title */}
          <h1 className="text-4xl lg:text-5xl font-bold text-stone-900 mb-6">{project.title}</h1>
          <p className="text-lg text-stone-700 mb-8 leading-relaxed">{project.description}</p>

          {/* skills */}
          {skillsArray.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-stone-900 mb-4">Languages Used</h2>
                <div className="flex flex-wrap gap-2">
                  {skillsArray.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium">
                      {skill.trim()}
                    </span>
                  ))}
                </div>
            </div>
          )}

          {/* links */}
          {project.github || project.live &&  (
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-stone-200">
              {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center 
                 justify-center px-6 py-3 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors">
                View GitHub Repo
              </a>
              )}
              {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center 
                justify-center px-6 py-3 border-2 border-stone-900 text-stone-900 rounded-lg hover:bg-stone-900 
                hover:text-white transition-colors">
                View Live Project
              </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
