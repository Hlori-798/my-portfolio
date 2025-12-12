"use client"
import { useState } from "react"
import { supabase } from "@/lib/supabase"
import Link from "next/link"
import { useRouter } from "next/navigation"


export default function NewProject() {
    const router = useRouter()

    // form fields
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [skills, setSkills] = useState("")
    const [github, setGithub] = useState("")
    const [live, setLive] = useState("")

    // UI state
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    /** Handles form submission and inserts a new project into Supabase */
    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        setError("")

        const { error } = await supabase.from("projects").insert([
            {
                title, description, skills, github, live,
            },
        ])
        if(error) {
            setError(error.message) 
            setLoading(false)
            return
        }
        // Redirects after it's sucessful
        router.push("/admin/projects")
    }
    
    return(
        <div className="min-h-screen bg-stone-50">
            <div className="max-w-2xl mx-auto px-4 py-16">

                {/* back button */}
                <Link href="/admin/projects" className="inline-flex items-center 
                    text-stone-600 hover:text-stone-900 mb-8 transition-colors">
                    Back </Link>


                <h1 className="text-4xl font-bold text-stone-900 mb-8">Add new Project</h1>
                
                {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-sm text-red-700">{error}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="bg-white border border-stone-200 rounded-xl p-8 space-y-6">
                    {/* title */}
                    <div>
                        <label className="block font-semibold text-gray-900 mb-1">Project Title</label>
                        <input type="text" className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 
                            focus:ring-purple-400 focus:border-transparent text-stone-900" value={title}
                            onChange={(e) => setTitle(e.target.value)} required/>
                    </div>

                    {/* description */}
                    <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">Description</label>
                        <textarea className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 
                            focus:ring-purple-400 focus:border-transparent text-stone-900" rows="4" value={description}
                            onChange={(e) => setDescription(e.target.value)} required></textarea>
                    </div>

                    {/* skills */}
                    <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">Skills (comma-separated)</label>
                        <input type="text" className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 
                            focus:ring-purple-400 focus:border-transparent text-stone-900" placeholder="Example: React, JavaScript, CSS"
                            value={skills} onChange={(e) => setSkills(e.target.value)}/>
                    </div>

                    {/* github */}
                    <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">GitHub URL</label>
                        <input type="url" className="w-full px-4 py-3 border border-stone-300 rounded-lg 
                            focus:ring-2 focus:ring-purple-400 focus:border-transparent text-stone-900" value={github}
                            onChange={(e) => setGithub(e.target.value)}/>
                    </div>

                    {/* live url */}
                    <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">Live Project URL</label>
                        <input type="url" className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 
                            focus:ring-purple-400 focus:border-transparent text-stone-900" value={live}
                            onChange={(e) => setLive(e.target.value)}/>
                    </div>

                    {/* submit button */}
                    <button type="submit" disabled={loading} className="bw-full bg-stone-900 text-white py-3 
                        rounded-lg font-medium hover:bg-stone-800 transition-colors disabled:opacity-50">
                        {loading ? "Saving..." : "Add Project"}
                    </button>
                </form>
            </div>
        </div>
    )
}