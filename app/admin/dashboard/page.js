"use client"
import { useEffect,useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { FaEnvelope, FaTasks } from "react-icons/fa"
import Link from "next/link"


export default function AdminDashboard() {
  const [user, setUser] = useState(null)
  const router = useRouter()

  /** Gets the logged in user and restricts acess to the admin dashboard */
  useEffect(() => {
    async function loadUser() {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)

      // If there is no user redirect
      if (!user) {
        router.push("/admin/login")
      }
    }

    loadUser()
  }, [router])

  // logout function
  async function handleLogout() {
    await supabase.auth.signOut()
    router.push("/admin/login")
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 py-16">

        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold text-stone-900 mb-2">Admin Dashboard</h1>
            {user && (
                <p className="text-stone-600 mb-6">Welcome back, {user.email}!</p>
            )}
          </div>
          <button onClick={handleLogout} className="px-6 py-2 bg-stone-200 text-stone-900
            rounded hover:bg-stone-300 transition-colors">Logout
          </button>
        </div>

        {/* Dashboard cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/admin/projects" className="bg-white border border-stone-200 
            rounded-xl p-8 hover:shadow-lg transition-shadow group">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center 
                justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <FaTasks className="text-xl text-teal-400"/>
              </div>  
              <h2 className="text-2xl font-bold text-stone-900 mb-2">Manage Projects</h2>
              <p className="text-stone-600">Add, update, and delete projects</p>
              </Link>

            {/* View messages card */}
            <Link href="/admin/messages" className="bg-white border border-stone-200 
              rounded-xl p-8 hover:shadow-lg transition-shadow groupn">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center 
                  justify-center mb-4 group-hover:bg-teal-200 transition-colors">
                    <FaEnvelope className="text-xl text-purple-400"/>
                </div>
                <h2 className="text-2xl font-bold text-stone-900 mb-2">View Messages</h2>
                <p className="text-stone-600">Read messages from users</p>
                </Link>
        </div>

            {/* Indicates login status */}
            <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <p className="text-sm text-green-800 font-medium">You're logged in as admin</p>
              </div>
            </div>
      </div>
    </div>
  )
}