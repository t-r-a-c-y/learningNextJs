"use client"
import link from "next/link"
import { usePathname } from "next/navigation"

const navLinks=[
    {name:"Register", href:"/register"},
    {name:"Login", href:"/login"},
    {name:"Forgot Password", href:"/forgot-password"},
]

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <nav className="mb-6">
        <ul className="flex space-x-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-blue-500 hover:underline ${
                  pathname === link.href ? "font-bold" : ""
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {children}
    </div>
  )
}