"use client"
import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import Link from "next/link"
import { useRouter, useParams } from "next/navigation"


export default function EditProject() {
    const router = useRouter()
    const { id } = useParams()

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    // form fields
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [skills, setSkills] = useState("")
    const [github, setGithub] = useState("")
    const [live, setLive] = useState("")

    /** Loads an existing project by its Id from Supabase */
    useEffect(() => {
        const fetchProject = async () => {
            const { data, error } = await supabase
                .from("projects")
                .select("*")
                .eq("id", id)
                .single()

            if (error) {
                setError("Failed to load project")
            } else {
                setTitle(data.title)
                setDescription(data.description)
                setSkills(data.skills || "")
                setGithub(data.github || "")
                setLive(data.live || "")
            }

            setLoading(false)
        }

        fetchProject()
    }, [id])

    /** Saves the updated project information to Supabase */
    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        setError("")

        const { error } = await supabase
            .from("projects")
            .update({ title, description, skills, github, live
            })
            .eq("id", id)

        if (error) {
            setError(error.message)
            setLoading(false)
            return
        } 

        router.push("/admin/projects")
    }

    if (loading) {
        return ( 
            <div className="min-h-screen flex items-center justify-center bg-stone-50">
            <p>Loading...</p>
            </div>
        )
    }

    return(
        <div className="min-h-screen bg-stone-50">
            <div className="max-w-2xl mx-auto px-4 py-16">

                {/* back button */}
                <Link href="/admin/projects" className="inline-flex items-center 
                    text-stone-600 hover:text-stone-900 mb-8 transition-colors">
                    Back to Projects
                </Link>

                    <h1 className="text-4xl font-bold text-stone-900 mb-8">Edit Project</h1>

                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-sm text-red-700">{error}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="bg-white border border-stone-200 
                        rounded-xl p-8 space-y-6">

                        <div>
                            <label className="block text-sm font-medium text-stone-700 mb-2">Title</label>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} 
                                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 
                                focus:ring-purple-400 focus:border-transparent text-stone-900" required/>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-stone-700 mb-2">Description</label>
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} 
                                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 
                                focus:ring-purple-400 focus:border-transparent text-stone-900" required rows="4"></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-stone-700 mb-2">Skills (comma separated)</label>
                            <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} 
                                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-purple-400 
                                focus:border-transparent text-stone-900" placeholder="React, Next.js, Tailwind"/>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-stone-700 mb-2">GitHub URL</label>
                            <input type="url" value={github} onChange={(e) => setGithub(e.target.value)} 
                                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 
                                focus:ring-purple-400 focus:border-transparent text-stone-900"/>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-stone-700 mb-2">Live URL</label>
                            <input type="url" value={live} onChange={(e) => setLive(e.target.value)} 
                                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 
                                focus:ring-purple-400 focus:border-transparent text-stone-900"/>
                        </div>

                        <button type="submit" disabled={loading} className="w-full bg-stone-900 text-white 
                            py-3 rounded-lg font-medium hover:bg-stone-800 transition-colors disabled:opacity-50">
                                {loading ? "Saving..." : "Save Changes"}
                        </button>
                    </form>

            </div>
        </div>
    );
}