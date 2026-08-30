import { Menu, X } from "lucide-react";
import Button from "../components/Button";
import { useEffect, useState } from "react";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },
];





const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(scrollY > 50);
        };




        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <header className={`fixed top-0 left-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} right-0  z-50`}>
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="flex items-center">
                    <img
                        src={`${import.meta.env.BASE_URL}INSGT.jpg`}
                        alt="Logo"
                        className="h-18 w-auto rounded-full object-contain hover:opacity-80 transition-opacity"
                    />
                </a>
                {/* Start Desktop navbar */}

                <div className="hidden md:flex items-center gap-2">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {
                            navLinks.map((link) => (
                                <a className="font-bold px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full"
                                    key={link.href} href={link.href}
                                >{link.label}
                                </a>
                            ))
                        }
                    </div>
                </div>

                {/* Start CTA */}

                <div className="hidden md:block">
                    <Button size="sm">Contact Me</Button>
                </div>

                {/* End CTA Button */}

                {/* End Desktop navbar */}


                {/* Satrt Mobile navbar */}
                <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* le conditionnement pour créer le responsive design sur mobile se place toujours après la nav */}
            {/* Mobile Menu */}
            {isMobileMenuOpen && (<div className="md:hidden glass-strong animate-fade-in">
                <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                    {
                        navLinks.map((link, index) => (
                            <a className="text-lg text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                                key={index} href={link.href} onClick={() => setIsMobileMenuOpen(false)}
                            >{link.label}
                            </a>
                        ))
                    }

                    <Button onClick={() => setIsMobileMenuOpen(false)}>
                        Contact Me
                    </Button>
                </div>
            </div>)
            }
            {/* End Mobile navbar */}
        </header>
    );

};

export default Navbar;