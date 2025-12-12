// About page components
export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        
        {/* Page title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>

        {/* Introduction section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Who I Am</h2>
          <p className="text-gray-700 mb-4">
            I'm Hlori Ntshembho Manganyi, a Full Stack Developer passionate about 
            building practical web applications,I build webapplications that solve real-world problems. 
            I believe in creating software that makes people's lives easier.
          </p>
          <p className="text-gray-700">
            I have build web applications using Python, Django, JavaScript, and React. I enjoy the 
            challenge of breaking down complex problems into solvable, elegant solutions. 
          </p>
        </div>

        {/* Skills section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h2>
          
          {/* Backend skills */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Backend Development</h3>
            <div className="flex flex-wrap gap-2">
              {/* badge like skills */}
              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">Python</span>
              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">Django</span>
              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">SQL</span>
            </div>
          </div>

          {/* Frontend skills */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Frontend Development</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">JavaScript</span>
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">React</span>
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">Next.js</span>
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">HTML/CSS</span>
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">Tailwind CSS</span>
            </div>
          </div>
        </div>

        {/* Certifications section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
          <div className="space-y-4">
            {/* courses */}
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="font-semibold text-stone-900">CS50x: Introduction to Computer Science</h3>
              <p className="text-stone-600">Harvard University (via edX)</p>
              <h3 className="font-semibold text-stone-900">CS50 Python</h3>
              <p className="text-stone-600">Harvard University(via edX)</p>
              <h3 className="font-semibold text-stone-900">CS50’s Web Programming with Python and JavaScript</h3>
              <p className="text-stone-600">Harvard University (via edX)</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}