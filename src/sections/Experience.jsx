const experiences = [
    {

        period: "2020 - 2021",
        role: "BAC D",
        company: "LYCEE PRIVE FONDATION MBELE",
        description: "I was taking my Baccalaureate exam to obtain my diploma.",
        technologies: [],
        current: true
    },
    {
        period: "2021 - 2022",
        role: "first-year student",
        company: "UNIVERSITE NUMERIQUE DU GABON",
        description: "I was pursuing my undergraduate studies in Computer Science.",
        technologies: [],
        current: true
    },
    {
        period: "2022 - 2024",
        role: "second-year student",
        company: "UNIVERSITE NUMERIQUE DU GABON",
        description: "I was pursuing my undergraduate studies in Computer Science.",
        technologies: [],
        current: true
    },
    {
        period: "01 Novembre 2024 - 01 Decembre 2024",
        role: "Intern",
        company: "Xp-Informatique",
        description: "I was working on the redesign of the company's website.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap5",],
        current: true
    },
    {
        period: "2025 - 2026",
        role: "third-year student",
        company: "UNIVERSITE NUMERIQUE DU GABON",
        description: "I was pursuing my undergraduate studies in computer science, specializing as a full-stack web and mobile developer.",
        technologies: ["HTML5", "CSS3", "JavaScript", "StarUML", "Django", "Python", "Flutter", "MySQL", "Api Web Tokens", "GitHub", "Git", "GitHub Desktop", "Git Bash",],
        current: false
    },
    {
        period: "21 Juin 2025 - 21 Septembre 2025",
        role: "Intern",
        company: "ONE-J TECH",
        description: "I worked as an intern developer to design and develop an e-commerce mobile app for the company.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap5", "Django", "Django FrameworkRest", "MySQL", "MySql Commande Line 8.0", "Django serve", "Flutter", "Draw.io"],
        current: true
    },
    {
        period: "Juin 2026 - now",
        role: "Intermediate developer",
        company: "DCRIR : Department of the Computer and Network Resources Center of UOB",
        description: "Currently an intermediate developer working at the CRIR Directorate at UOB.",
        technologies: [],
        current: true
    },
    {
        period: "Août 2026 - now",
        role: "DevOpsSecure Certificate Student",
        company: "CloudOps Engineering Lab",
        description: "Currently undergoing training to obtain a DevOpsSecure Engineer certification at CloudOps Engineering Lab.",
        technologies: ["Linux", "Ubuntu Server", "VirtualBox", "Vagrant", "Docker", "Kubernetes", "GitHub", "GitHub CI/CD", "GitHub Desktop", "Git Bash", "Terraform", "Gitlab", "Prometheus", "AWS", "Ansible", "Nginx", "Apache", "Python", "Pytest"],
        current: true
    },
]







const Experience = () => {
    return <section id="experience" className="py-32 relative overflow-hidden">

        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="container mx-auto px-6 relative z-10">
            {/* Section header */}
            <div className="max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                    Career Journey

                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                    Experience that {""}
                    <span className="font-serif italic font text-white">
                        {""}
                        speaks volumes.
                    </span>
                </h2>

                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    A timeline of my professional growth, from curious beginner to
                    senior engineer leading teams and building products at scale
                </p>
            </div>

            {/* Timeline */}
            <div className="relative">
                <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

                {/* Experience Items */}
                <div className="space-y-12">
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                            style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                        >

                            {/* TimeLine Dot */}
                            <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">

                            {exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"/>}     
                            </div>

                            {/* Content  */}
                            <div className={`pl-8 md:pl-0 ${idx % 2 === 0 
                            ? "md:pr-16 md:text-right" 
                            : "md:col-start-2 md:pl-16"
                            }`}
                            >
                                <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                    <p className="text-muted-foreground">{exp.company}</p>
                                    <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                                    <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0
                                        ? "md:justify-end"
                                        : "md:justify-start"
                                    }`}>
                                        {exp.technologies.map((tech, techIdx) => (
                                            <span key={techIdx} className="px-3 py-1 bg-surface text-xs rounde-full text-muted-foreground">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    </section>;
};

export default Experience;