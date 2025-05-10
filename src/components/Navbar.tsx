
import { ThemeToggle } from "./ThemeToggle";
import { CalendarDays, Home, Map, Globe, Tractor } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-md shadow-md" 
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Tractor className="h-6 w-6 text-agro-green" />
          <span className="text-lg font-display font-bold">AgroEventos</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#inicio" className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
            <Home className="h-4 w-4" />
            <span>Início</span>
          </a>
          <a href="#eventos" className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
            <CalendarDays className="h-4 w-4" />
            <span>Eventos</span>
          </a>
          <a href="#sites" className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
            <Globe className="h-4 w-4" />
            <span>Sites do Agro</span>
          </a>
          <a href="#api" className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
            <Map className="h-4 w-4" />
            <span>APIs e Programas</span>
          </a>
        </nav>
        
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="outline" size="sm" className="hidden md:inline-flex">
            Contato
          </Button>
          <Button className="hidden md:inline-flex">
            Calendário de Eventos
          </Button>
        </div>
      </div>
    </header>
  );
}
