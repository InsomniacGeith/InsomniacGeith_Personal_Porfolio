import { ArrowUpRight } from "lucide-react";
import AnimatedBorderButton from "../components/AnimatedBorderButton";




// Composant SVG autonome pour GitHub
const GithubIcon = ({ className = "w-5 h-5" }) => (
    <svg
        className={className}
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
);

const projects = [
    {
        title: "E-commerce application for ONE-J TECH",
        description: "Design and development of an e-commerce platform capable of operating independently of social networks, offering immediate, global availability of the company's product range.",
        image: "/projects/app_commerce.png",
        tags: ["Flutter", "Android Studio", "API Web Tokens"],
        link: "#",
        
    },
    {
        title: "IT Product Management Platform",
        description: "The project involved developing a complete and secure administration interface (Admin Dashboard). This solution is built on the powerful Django framework.",
        image: "/projects/project_two.png",
        tags: ["Html5", "Bootstrap5", "JavaScript", "Django Frameworks Rest", "SQL", "MySQL Command Line 8.0", "API Web Tokens"],
        link: "#",
        
    },
    {
        title: "Car Rental Platform",
        description: "The main goal of this project was to develop a mobile application that facilitates vehicle booking for customers and allows vehicle owners to monetize their assets. The application offers real-time vehicle monitoring and integrates secure mobile payments.",
        image: "/projects/cart_central.png",
        tags: ["Flutter", "Laravel", "SQL", "Laragon", "Laragon CMD"],
        link: "#",
        
    },
    {
        title: "Corporate website",
        description: "The primary goal was to design a corporate website to enhance the institution's visibility.",
        image: "/projects/institutional_website.png",
        tags: ["Html5", "Bootsrap5", "JavaScript", "CSS3"],
        link: "https://insomniacgeith.github.io/Financia/",
        
    },
    {
        title: "SIGES Plateform",
        description: "SIGES brings together student data, grades, absences, finances, and communication on a single platform, with secure access tailored to each institution and role.",
        image: "/projects/siges_plateform.png",
        tags: ["Angular", "Laravel", "SQL", "Laragon", "Laragon CMD", "API Web Tokens","GitHub","Github actions", "Autommation", "CI/CD"],
        link: "https://orangered-mongoose-184570.hostingersite.com/",
        
    },
    {
        title: "SICOLO —SSIP—",
        description: "Employability tracking platform for UOB students across all levels of study.",
        image: "/projects/SSIP.png",
        tags: ["Angular", "Laravel", "SQL", "Laragon", "Laragon CMD", "API Web Tokens","GitHub","Github actions", "Autommation", "CI/CD"],
        link: "https://sicolo.univuob.org/",
        
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* Bg glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Featured Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Projects that
                        <span className="font-serif italic font-normal text-white">
                            {" "}make an impact.
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A selection of my recent work, from complex mobile applications to
                        innovative tools that solve real-world problems.
                    </p>
                </div>

                {/* projects grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-60" />

                                {/* Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                    >
                                        <ArrowUpRight className="w-5 h-5" />
                                    </a>
                                    
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary
                                    group-hover:translate-x-1
                                    group-hover:translate-y-1 transition-all
                                    " />
                                </div>
                                <p className="text-muted-foregroundd text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2">{project.tags.map((tag, tagIdx) => (
                                    <span className="px-4 py-1.5 rounded-full bg-surface">{tag}</span>
                                ))}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All CTA */}
                <div className="text-center mt-12 animate fade-in animatio-delay-500">
                    <AnimatedBorderButton>
                        View All Projects
                        <ArrowUpRight className="w-5 h-5" />
                    </AnimatedBorderButton>
                </div>

            </div>
        </section>
    );
};

export default Projects; 