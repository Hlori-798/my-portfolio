"use client"
import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import Link from "next/link"
import { supabase } from "@/lib/supabase"

export default function DeleteProject() {
  const router = useRouter();
  const { id } = useParams();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /** Fetches the projects info and confirms delete action */
  useEffect(() => {
    async function fetchProject() {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        setError("Failed to load project");
      } else {
        setProject(data);
      }
      setLoading(false);
    }

    fetchProject()
  }, [id])

  /** Deletes the selected project from Supabase */
  async function handleDelete() {
    const { error } = await supabase
      .from("projects").delete().eq("id", id);

    if (error) {
      setError(error.message);
    } else {
      router.push("/admin/projects")
    }
  }

  if (loading) { return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center">
      <p className="p-6">Loading...</p>
    </div>
    )} 


  if (error) { return ( 
    <div className="min-h-screen bg-stone-50 flex items-center justify-center">
      <p className="p-6 text-red-500">{error}</p>
    </div>
  )}

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-2xl mx-auto px-4 py-16">

        <Link href="/admin/projects" className="inline-flex items-center 
          text-stone-600 hover:text-stone-900 mb-8 transition-colors">
          Back to Projects</Link>

        <div className="bg-white border border-stone-200 rounded-xl p-8">
          <h1 className="text-3xl font-bold text-stone-900 mb-6">Delete Project</h1>
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-stone-700">
              Are you sure you want to delete the project: <strong className="text-red-700">
                {project.title}</strong>? This action cannot be undone.
            </p>
          </div>

          <div className="flex gap-4">
            <button onClick={handleDelete}
              className="flex-1 bg-red-600 text-white py-3 rounded-lg font-medium 
              hover:bg-red-700 transition-colors">
              Yes, Delete
            </button>

            <button onClick={() => router.push("/admin/projects")}
              className="flex-1 bg-stone-200 text-stone-900 py-3 rounded-lg 
              font-medium hover:bg-stone-300 transition-colors">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
