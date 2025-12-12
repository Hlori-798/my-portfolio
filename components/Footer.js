import { FaEnvelope, FaGithub, FaMapMarkerAlt } from "react-icons/fa"


export default function Footer() {
    return(
        <footer className="bg-stone-100 border-t border-stone-200 mt-20">
            <div className="space-y-6max-w-4xl mx-auto px-4 py-12">

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">


                    {/* left side of footer */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold text-stone-900 mb-2">Hlori Manganyi</h2>
                        <p className="text-stone-600">Full stack Developer</p>
                    </div>

                    {/* right side of footer (links) */}
                    {/* Email */}
                    <div className="flex gap-6">
                        <FaEnvelope className="text-xl text-purple-400"/>
                        <a href="mailto:manganyihlori@gmail.com" className="text-stone-600 
                            hover:text-purple-400 transition-colors text-sm">
                                Email
                        </a>
                    </div>

                    {/* GitHub */}
                    <div className="flex items-center gap-4">
                        <FaGithub className="text-xl text-teal-400"/>
                        <a href="https://github.com/Hlori-798" target="_blank" 
                            rel="noopener noreferrer" className="text-stone-600 
                            hover:text-teal-400 transition-colors text-sm">
                            GitHub
                        </a>
                    </div>

                    {/* Location */}
                    <div className ="flex items-center gap-4">
                        <FaMapMarkerAlt className="text-xl text-orange-300" />
                            <p className="text-stone-600 hover:text-orange-300 
                                transition-colors text-sm">Johannesburg, South Africa</p>
                    </div>
                </div>
                {/* bottom text */}
                <div className="text-center pt-8 border-t border-stone-200">
                    <p className="text-stone-500 text-sm">
                        &copy; {new Date().getFullYear()} Hlori Manganyi. Built with Next.js & Supabase.
                    </p>
                </div>    
            </div>
        </footer>
    );
}