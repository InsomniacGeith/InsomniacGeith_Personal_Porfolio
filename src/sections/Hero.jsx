import { ArrowRight, Download, ChevronDown,} from "lucide-react";
import Button from "../components/Button";
import AnimatedBorderButton from "../components/AnimatedBorderButton";

// const skills=[
//     "HTML5",
//     "CSS3",
//     "JavaScript",
//     "Django Framework Rest",
//     "Laravel",
//     "FilamntPHP",
//     "Livewire",
//     "TailWind CSS",
//     "React",
//     "Flutter",
//     "Figma",
//     "StarUML",
//     "Drawio",
//     "Microsoft PackOffice", 
//     "Windows OS",
//     "MySQL",
//     "Laragon",
//     "FireBase",
//     "GitHub Actions",
// ];
const skills = [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Django REST Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
    { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Windows OS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" },
    // images locales dans public /skills/
    { name: "Livewire", icon: "/skills/livewire_logo.png" },
    { name: "Laragon", icon: "/skills/laragon_logo.png" },
    { name: "StarUML", icon: "/skills/staruml_logo.png" },
    { name: "Drawio", icon: "/skills/draw-io_logo.png" },
    { name: "PackOffice", icon: "/skills/pacoffice_logo.png" },

];





const Hero = () => {

    return <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Start BackgroundImage */}

        <div className="absolute inset-0">
            <img src="/hero_image.jpg"
                alt="Hero image"
                className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background">

            </div>
        </div>
        {/* End BackgroundImage */}

        {/* Start Green Dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

            {[...Array(30)].map((_, i) => (
                <div className="absolute w-1.5 h-1.5 rounded-full opacity-60"

                    style={{
                        backgroundColor: "#20B2A6",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `slow-drift ${15 + Math.random() * 20
                            }s ease-in-out infinite`,
                        animationDelay: `${Math.random * 5}s`
                    }}

                />
            ))}

        </div>

        {/* End Green Dots */}

        {/* Start Content */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Start Left Column - Text Content */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            Software Engineer ° Flutter Specialiste
                        </span>
                    </div>
                    {/* Start HeadLine */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold leading-tight animate-fade-in animation-delay-100">
                            Crafting <span className="text-primary glow-text">digital</span>
                            <br />
                            experiences with
                            <br />
                            <span className="font-serif italic font-normal text-white">
                                precision
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-800">
                            Hi, I'm Eudes Paulin - a Software Engineer specializing in Mobile and
                            Web Developpement. I build scalable, performant web and mobile applications that users love
                        </p>
                    </div>
                    {/* End HeadLine */}
                    {/* Start CTAs(les boutons) */}
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                        <Button size="lg" className="cursor-pointer">
                            Contact Me
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                        <AnimatedBorderButton>
                             Download CV
                            <Download className="w-5 h-5" />
                        </AnimatedBorderButton>
                    </div>
                    {/* Start CTAs(les boutons) */}
                </div>
                {/* End Left Column - Text Content */}

                {/*Start Social links */}
                {/* <div>
                    <span>Follow : </span>
                    {[
                        { icon: Github, href: "#" },
                        { icon: Facebook, href: "#" },
                        { icon: Twitter, href: "#" }
                    ].map((social, idx)=>(
                        <a>{<social.icon/>}</a>
                    ))}
                </div> */}
                {/*End Social links */}


                {/* Start Rigth Column - Profile Image */}
                <div className="relative animate-fade-in animation-delay-300">
                    {/* Profile image */}
                    <div className="relative max-w-md mx-auto">
                        <div className="
                       absolute inset-0
                       rounded-3xl bg-gradient-to-br
                        from-primary/30 via-transparent
                       to-primary/10 blur-2xl animate-pulse
                       "/>
                        <div className="relative glass rounded-2xl p-2 glow-border">
                            <img src="/profil_photo.jpg"
                                alt="Eudes Paulin"
                                className="w-full aspect-auto object-cover rounded-2xl"
                            />
                            {/* Floating badge */}
                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-sm font-medium">
                                        Available Work
                                    </span>
                                </div>
                            </div>



                            {/* Stats Badge */}
                            <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animation-delay-500">
                                <div className="text-2xl font-bold text-primary">3+</div>
                                <div className="text-xs text-muted-foreground">Years Exp.</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Rigth Column - Profile Image */}
            </div>
            {/* Skills */}
            {/* <div className="mt-20 animate-fade-in animation-delay-600">
            <p className="text-sm text-muted-foreground mb-6 text-center">Technologie I work with</p>
            <div className="relative overflow-hidden">
                <div className="flex animate-marquee">
                    {[...skills, ...skills].map((skill, idx)=>(
                        <div key={idx} className="flex-shrink-0 px-8 py-4">
                            <span>{skill}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div> */}

            <div className="mt-20 animate-fade-in animation-delay-600">
                <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work with</p>

                {/* Conteneur avec un dégradé de flou sur les côtés pour masquer l'entrée/sortie (Effet Masque) */}
                <div className="relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-background after:to-transparent">

                    {/* Le conteneur qui défile */}
                    <div className="flex animate-marquee whitespace-nowrap gap-8 items-center w-max">
                        {[...skills, ...skills].map((skill, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-3 flex-shrink-0 bg-card/40 border border-border/40 px-6 py-3 rounded-full hover:border-primary/50 transition-colors duration-300"
                            >
                                {/* Le logo en image */}
                                <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    className={`w-6 h-6 object-contain transition-all duration-300 ${skill.name.includes("GitHub") ? "invert brightness-200" : ""
                                        }`}


                                    onError={(e) => { e.target.src = "https://placehold.co/24?text=" + skill.name[0] }}
                                />
                                {/* Le nom de la techno */}
                                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
            <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary">
                <span className="text-xs uppercase tracking-wider">Scroll</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
        </div>
        {/* End Content */}


    </section>;
};

export default Hero;