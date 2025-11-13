import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/tours", label: "Tours" },
    { to: "/contact", label: "Contact" },
    { to: "/guide", label: "Guide" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold tracking-wide">
          <img src="/logo.svg" alt="logo" className="h-8 w-auto" />
          <span className="hidden sm:inline-block">SriLanka<span className="text-emerald-600">Tours</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `hover:text-emerald-600 transition-colors ${
                  isActive ? "text-emerald-600 font-medium" : "text-foreground"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right Side Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" className="font-medium hover:text-emerald-600">
            Sign in
          </Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
            Register
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <nav className="mt-8 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `text-lg hover:text-emerald-600 ${
                        isActive ? "text-emerald-600 font-medium" : "text-foreground"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
                <div className="mt-6 border-t pt-4 flex flex-col gap-2">
                  <Button variant="outline" onClick={() => setOpen(false)}>
                    Sign in
                  </Button>
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white" onClick={() => setOpen(false)}>
                    Register
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
