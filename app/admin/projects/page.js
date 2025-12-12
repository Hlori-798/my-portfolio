"use client"
import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import Link from "next/link"

export default function AdminProjects(){
    const [projects, setProjects] = useState([])

    /** Loads all the projects from Supabase to display in the admin list */
    useEffect(() => {
        async function loadsProjects() {
            const { data, error } = await supabase
            .from("projects")
            .select("*")
            .order("created_at", { ascending: false })

            setProjects(data || [])
        }
        loadsProjects()
    }, [])

    return (
        <div className="min-h-screen bg-stone-50">
            <div className="max-w-4xl mx-auto px-4 py-16">

                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold text-stone-900">Manage Projects</h1>
                    <div className="flex gap-4">
                        <Link href="/admin/projects/new" className="bg-stone-900 text-white px-6 py-2 
                            rounded-lg hover:bg-stone-800 transition-colors">
                            Add New Project</Link>

                        {/* back button */}
                        <Link href="/admin/dashboard" className="bg-stone-200 text-stone-900 px-6 py-2 
                            rounded-lg hover:bg-stone-300 transition-colors">
                            Back </Link>
                    </div>
                </div>
                        <div className="space-y-4">
                            {projects.map((project) => (
                                <div key={project.id} className="bg-white border border-stone-200 rounded-xl p-6 flex justify-between 
                                    items-center hover:shadow-md transition-shadow">
                                    <div>
                                        <h2 className="text-xl font-semibold text-stone-900">{project.title}</h2>
                                        <p className="text-stone-600 mt-1">{project.description}</p>
                                    </div>
                                    <div className="flex gap-3">   
                                        <Link href={`/admin/projects/${project.id}/edit`} className="px-4 py-2 bg-blue-100 
                                            text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">Edit</Link>
                                        <Link href={`/admin/projects/${project.id}/delete`} className="px-4 py-2 bg-red-100 
                                            text-red-700 rounded-lg hover:bg-red-200 transition-colors">Delete</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
            </div>
        </div>
    ) 
}
