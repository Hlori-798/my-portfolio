import Link from 'next/link'

export default function Home() {
  return (
    // Main container, takes full screen height with a gradient background
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-purple-50 to-teal-50">

      {/* Main hero section - centered content */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-4">

       {/* Deco pattern */}
       <div className="mb-12">
        <div className="grid grid-cols-3 gap-2">
            <div className="w-16 h-16 bg-purple-200 rounded-full"></div>
            <div className="w-16 h-16 bg-teal-200 rounded-lg"></div>
            <div className="w-16 h-16 bg-orange-200 rounded-full"></div>
            <div className="w-16 h-16 bg-teal-200 rounded-lg"></div>
            <div className="w-16 h-16 bg-orange-200 rounded-full"></div>
            <div className="w-16 h-16 bg-purple-200 rounded-lg"></div>
            <div className="w-16 h-16 bg-orange-200 rounded-full"></div>
            <div className="w-16 h-16 bg-purple-200 rounded-lg"></div>
            <div className="w-16 h-16 bg-teal-200 rounded-full"></div>
        </div>
       </div>

        {/* Introduction */}
        <h2 className="text-xl md:text-2xl text-stone-600 mb-2 text-center">
          Hello, I am 
        </h2>

        {/* name */}
        <h1 className="text-5xl md:text-7xl font-bold text-stone-900 mb-6 text-center">
           Hlori Ntshembho Manganyi
        </h1>

        {/* title */}
        <p className="text-2xl md:text-3xl text-stone-900 mb-8 text-center font-ligher">
          Full Stack Developer
        </p>

        {/* Short description */}
        <p className="text-lg text-stone-600 max-w-2xl text-center mb-12 leading-relaxed">
          I build practical web applications that solve real-life problems using Python, 
          Django, JavaScript, and React. Explore my projects and feel free to reach out for
           collaborations or inquiries!
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          {/* Button to view projects */}
          <Link href="/projects" className="bg-stone-900 text-white px-8 py-3 rounded-lg font-meduim 
            hover:bg-stone-800 transition-colors">
            View My Projects
          </Link>
          
          {/* Button to contact */}
          <Link href="/contact" className="border-2 border-stone-900 text-stone-900 px-8 py-3 rounded-lg 
            font-meduim hover:bg-stone-900 hover:text-white transition-colors">
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  )
}
