import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
  ];

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-blush-200 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" data-ocid="nav.link">
            <span className="font-script text-3xl text-gold">
              E-Invite Studio
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid="nav.link"
                className={`font-sans text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? "text-gold border-b-2 border-gold pb-0.5"
                    : "text-foreground/70 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex">
            <Link to="/order" data-ocid="nav.primary_button">
              <Button className="bg-gold text-white hover:bg-gold-dark shadow-gold uppercase tracking-wider text-xs font-semibold rounded-full px-6">
                Order Now
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-foreground/70 hover:text-gold"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden py-4 border-t border-blush-200 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid="nav.link"
                onClick={() => setOpen(false)}
                className={`font-sans text-sm font-medium px-2 py-1 ${
                  isActive(link.to) ? "text-gold" : "text-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/order"
              onClick={() => setOpen(false)}
              data-ocid="nav.primary_button"
            >
              <Button className="bg-gold text-white hover:bg-gold-dark rounded-full w-full uppercase tracking-wider text-xs font-semibold">
                Order Now
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
