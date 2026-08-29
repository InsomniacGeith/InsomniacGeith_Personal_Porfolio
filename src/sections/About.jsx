import { Code2, Rocket, Lightbulb, Users } from "lucide-react";


const hightLights = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "Writing maintainable, scalable code that stands the test of time",
    },
    {
        icon: Rocket,
        title: "Performance",
        description: "Optimizing for speed and delivering lightning-fast user experiences",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Working closely with teams to bring ideas to life",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "Staying ahaead with the latest technologies and  best pratices",
    },
];


const About = () => {


    return <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Column */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm font font-medium tracking-wider uppercase">
                            About Me
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                    Building the future,
                    <span className="font-serif italic font-normal text-white">
                        {""}
                        One component at a time.
                    </span>
                </h2>
                <div className="space-y-4 text-muted-foreground animate-fade-in animtaion-delay-200">
                    <p>
                        I am passionate about programming. I enjoy working on IT projects and acquiring new skills in this constantly evolving field.
                        Outside of work, I like watching anime, reading manga, playing sports, and playing video games.
                        I am a huge manga fan and am fascinated by the excellence of professional mangaka in their craft.
                        I also enjoy educating myself by reading articles on the history of technology and keeping up with the latest industry trends.
                        I love learning and am always looking for new opportunities to deepen my knowledge and skills.
                    </p>
                    <p>
                        As a versatile and meticulous Full Stack developer, I leverage a broad technological ecosystem to build high-performance, end-to-end applications. Specializing in cross-platform and web development,
                        I combine the power of Flutter (Dart)—for fluid, intuitive mobile interfaces—with the robustness of backend frameworks like Django (Python) or Laravel (PHP).
                        My technical agility also allows me to integrate React (JavaScript) to create modern, dynamic front-end architectures.
                        Committed to code quality and operational efficiency, I manage the entire project lifecycle—from relational database design (MySQL) to deployment—while optimizing teamwork through expert use of version control tools like Git.
                    </p>
                    <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                        <p className="text-lg font-medium italic text-foreground">
                            "My mission is to create digital experience that are not just funtionnal, but truly — products that users
                            love to use and  developpers love to maintain"
                        </p>
                    </div>
                </div>

                </div>
                

                {/* Right Column — Hilights */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {hightLights.map((item, idx) => (
                        <div key={idx} className="glass p-6 rounded-2xl animate-fade-in" 
                        style={{animationDelay: `${(idx  + 1) * 100}ms`}}
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                               <item.icon className="w-6 h-6 text-primary"/>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>;

};

export default About;