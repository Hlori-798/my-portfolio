"use client"
import { useState } from "react"
import { supabase } from "@/lib/supabase"
import Link from "next/link"

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const { error } = await supabase.from("messages").insert([
      { name, email, message },
    ]);

    if (error) {
      setError(error.message);
    } else {
      setSuccess("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 py16">

      <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Me</h1>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      {success && (
      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
        <p className="text-green-600 mb-4">{success}</p>
      </div>
      )}

        {/* available text container */}
        <div className="mt-8 bg-white border border-stone-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Available for Opportunities</h2>
          <p className="text-stone-700 leading-relaxed">
            I'm currently open to full-stack development positions, freelance projects, 
            and collaborative opportunities. Feel free to reach out!
          </p>
        </div>
        <br/>

        <div className="bg-white border border-stone-200 rounded-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Name & Surname:</label>
              <input type="text" placeholder="Example: John Smith"className="w-full px-4 py-3 border border-stone-300 rounded-lg 
                focus:ring-2 focus:ring-purple-400 focus:border-transparent text-stone-900"
                value={name} onChange={(e) => setName(e.target.value)} required/>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Email:</label>
              <input type="email" placeholder="Example: john@example.com"className="w-full px-4 py-3 border border-stone-300 rounded-lg 
                focus:ring-2 focus:ring-purple-400 focus:border-transparent text-stone-900"
                value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Message:</label>
              <textarea className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 
                focus:ring-purple-400 focus:border-transparent text-stone-900" rows="4"
                value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
            </div>

            <button type="submit" disabled={loading}
              className="w-full bg-stone-900 text-white py-3 rounded-lg font-medium 
              hover:bg-stone-800 transition-colors disabled:opacity-50">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}
