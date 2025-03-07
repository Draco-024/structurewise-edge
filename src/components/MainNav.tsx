
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Search } from "lucide-react";

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              StructoEdge
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/courses" className="text-secondary hover:text-primary transition-colors">
              Courses
            </Link>
            <Link to="/about" className="text-secondary hover:text-primary transition-colors">
              About
            </Link>
            <Button variant="outline" className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              Search Courses
            </Button>
            <Button asChild>
              <Link to="/login">Sign In</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/courses"
                className="block px-3 py-2 rounded-md text-base font-medium text-secondary hover:text-primary hover:bg-gray-50"
              >
                Courses
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-secondary hover:text-primary hover:bg-gray-50"
              >
                About
              </Link>
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-primary hover:bg-primary-dark"
              >
                Sign In
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
