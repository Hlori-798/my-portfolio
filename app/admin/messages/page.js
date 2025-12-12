"use client"
import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import Link from "next/link"

export default function Messages() {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [deleteId, setDeleteId] = useState(null)

  /** Fetches all contact form messages from Supabase */
  useEffect(() => {
    async function fetchMessages() {
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .order("created_at", { ascending: false })
        
      if (!error) setMessages(data || [])
        setLoading(false)
    }

    fetchMessages()
}, [])

/** Deletes a message from Supabase */
async function deleteMessage(id) {
  const { error } = await supabase
    .from("messages")
    .delete()
    .eq("id", id)
    
  if (!error) {
    setMessages(messages.filter(msg => msg.id !== id))
    setDeleteId(null)
  }
}

if (loading) { 
  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center"> 
      <p className="text-stone-600">Loading...</p>
    </div>
  )
}

return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 py-16">

        {/* bacck button */}
        <Link href="/admin/dashboard" className="inline-flex items-center text-stone-600
          hover:text-stone-900 mb-8 transition-colors">
            Back
        </Link>

        <h1 className="text-4xl font-bold text-stone-900 mb-8">Messages</h1>

        {/* when there are no messages */}
        {messages.length === 0 && (
          <div className="bg-white border border-stone-200 rounded-xl p-8 text-center">
            <p className="text-stone-600">No messages yet.</p>
          </div>
        )}
          
        {/* All messages */}
        <div className="space-y-4">
            {messages.map(msg => (
              <div key={msg.id} className="bg-white border border-stone-200 p-6 rounded-xl">

                {/* message header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="font-semibold text-stone-900 text-lg">{msg.name} </p>
                    <p className="text-stone-600">{msg.message}</p>
                    <p className="text-stone-500 text-sm mt-1">{new Date(msg.created_at).toLocaleString("en-ZA", {
                      year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit"
                    })}</p>
                  </div>

                {/* delete button */}
                <button onClick={() => deleteMessage(msg.id)} className="px-4 py-2 bg-red-100 
                  text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm">
                    Delete
                </button>
              </div>

              {/* message content */}
              <div className="pt-4 border-t border-stone-200">
                <p className="text-stone-800 leading-relaxed">{msg.email}</p>
              </div>

              {/* delete confirmation */}
              {deleteId === msg.id && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-700 mb-3">
                    Are you sure you want to delete this message? This action cannont be undone.
                  </p>
                  <div className="flex-gap-3">
                    <button onClick={() => handleDelete(msg.id)}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 
                        transition-colors text-sm"> Delete
                    </button>
                    <button onClick={() => setDeleteId(null)}
                      className="px-4 py-2 bg-stone-200 text-stone-900 rounded-lg 
                      hover:bg-stone-300 transition-colors text-sm"> Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
              ))}
          </div>
      </div>
    </div>

  )
}