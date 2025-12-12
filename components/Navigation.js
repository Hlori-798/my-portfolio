import Link from "next/link"

export default function Navigation() {
    return (
        <nav className="bg-white shadow-sm p-6 flex justify-between items-center">
            <div className="text-purple-600 text-2xl font-bold">HN</div>
            <div className="flex gap-6">
                <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">Home</Link>
                <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">About</Link>
                <Link href="/projects" className="text-gray-700 hover:text-purple-600 transition-colors">Projects</Link>
                <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</Link>
                <Link href="/admin/login"className="text-gray-700 hover:text-purple-600">Admin</Link>
            </div>
    </nav>
    )
}