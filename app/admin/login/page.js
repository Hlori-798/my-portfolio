"use client"
import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import Link from "next/link"


export default function AdminLogin( ) {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleLogin(e) {
        e.preventDefault()
        setLoading(true)
        setError("")

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            setError(error.message)
            setLoading(false)
        } else {
            router.push("/admin/dashboard")
        }
    }
    return (
        <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4">
            <div className="w-full max-w-md">

                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-stone-900 mb-2">Admin Login</h1>
                    <p className="text-stone-600">Sign in to manage your portfolio</p>
                </div>

                {/* Login form */}
                <div className="bg-white border border-stone-200 rounded-xl p-8 shadow-sm">

                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                            <p className="text-sm text-red-700">{error}</p>
                        </div>
                    )}
                     
                     <form onSubmit={handleLogin} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-stone-700 mb-2">
                                Email Address:</label>
                            <input type="email" vlaue={email} onChange={(e) => setEmail(e.target.value)}
                                placeholder="admin@example.com" className="w-full border border-stone-300 
                                rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500
                                focus:border-transparent text-stone-900 placeholder:text-stone-400" required/>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-stone-700 mb-2">
                                Password:</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password" className="w-full border border-stone-300 rounded-lg 
                                focus:ring-2 focus:ring-purple-400 focus:border-transparent focus:border-transparent 
                                text-stone-900 placeholder:text-stone-400" required/>
                        </div>

                        <button type="submit" disabled={loading} className="w-full bg-stone-900 text-white py-3 rounded-lg 
                            font-medium hover:bg-stone-800 transition-colors disabled:opacity-50">
                            {loading ? "Signing In..." : "Sign In"}
                        </button>
                     </form>
                </div>

                {/* Back to home */}
                <div className="mt-6 text-center">
                    <Link href="/" className="text-stone-600 hover:text-stone-900 
                        transition-colors text-sm">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    )
}