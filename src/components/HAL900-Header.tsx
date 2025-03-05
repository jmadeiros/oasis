import Link from "next/link"
import Image from "next/image"

export function HAL900Header() {
  return (
    <header className="fixed w-full z-50 bg-black bg-opacity-50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <Image src="/wework-logo-white.png" alt="WeWork" width={100} height={30} />
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/locations" className="text-white hover:text-gray-300">
            Locations
          </Link>
          <Link href="/solutions" className="text-white hover:text-gray-300">
            Solutions
          </Link>
          <Link href="/enterprise" className="text-white hover:text-gray-300">
            Enterprise
          </Link>
          <Link href="/ideas" className="text-white hover:text-gray-300">
            Ideas
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="bg-white text-black font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300">
            Find a workspace
          </button>
          <select className="bg-transparent border-none text-white">
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="fr">FR</option>
          </select>
        </div>
      </div>
    </header>
  )
}

