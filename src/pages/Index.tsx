import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  X,
  Download,
  Mail,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useProjects } from "@/hooks/useProjects";

// CUSTOMIZATION SECTION - Edit these values to personalize your portfolio
const PORTFOLIO_CONFIG = {
  // Personal Information
  name: "Ninad Amane", // Updated name
  title: "Developer. Designer. Reinventor.", // Change this to your title
  description: "On a mission to build great software — and a greater self.", // Your bio
  email: "ninadamane@gmail.com", // Updated email

  // Profile Photo - Updated with your photo
  profilePhoto: "/lovable-uploads/c3d7913b-63e4-41dd-bc7f-7dbb40d7cf9a.png", // Your uploaded photo

  // Skills and Technologies - Customize this array with your skills
  skills: [
    "Python",
    "HTML",
    "CSS",
    "Javascript",
    "MySQL",
    "MongoDB",
    "C/C++",
    "Java",
    "Notion",
    "Adobe Premiere Pro",
  ],

  // Social Media Links - Update with your actual profiles
  socialLinks: {
    github: "https://github.com/NinadAmane",
    linkedin: "https://www.linkedin.com/in/ninad-amane-126775290/",
    instagram: "https://instagram.com/ninad.gg",
    twitter: "https://x.com/NinadAmane",
  },
};

const Portfolio = () => {
  const { projects, loading } = useProjects();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen gradient-bg scroll-smooth">
      {/* Enhanced Animated Background */}
      <div className="animated-bg">
        <div className="floating-orb floating-orb-1"></div>
        <div className="floating-orb floating-orb-2"></div>
        <div className="floating-orb floating-orb-3"></div>
        <div className="floating-orb floating-orb-4"></div>
        <div className="floating-orb floating-orb-5"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold gradient-text">{PORTFOLIO_CONFIG.name}</div>
              <div className="hidden md:flex space-x-8">
                {["home", "about", "projects", "contact"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-all duration-300 hover:text-purple-400 ${
                      activeSection === section
                        ? "text-purple-400 neon-text"
                        : "text-white/80"
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
              <Button
                onClick={() => window.open("/Ninad-Amane-FlowCV-RESUME.pdf", "_blank")}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>
          </div>
        </nav>

        {/* Home Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-6 pt-20"
        >
          <div className="text-center max-w-4xl mx-auto fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
              {PORTFOLIO_CONFIG.name}
            </h1>
            <h2 className="text-2xl md:text-3xl mb-8 text-white/90 neon-text">
              {PORTFOLIO_CONFIG.title}
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-12 leading-relaxed max-w-2xl mx-auto">
              {PORTFOLIO_CONFIG.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 hover-glow"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black hover-glow"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-white/80 leading-relaxed">
                  I'm Ninad Amane, a self-driven developer currently pursuing a BE
                  in Artificial Intelligence and Machine Learning. I thrive at the
                  intersection of technology, creativity, and self-mastery -
                  building not just applications, but also a better version of
                  myself every day.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  I’ve co-authored research papers, participated in hackathons,
                  and am constantly thinking about how to deliver real value
                  through software — not just pretty UIs, but solutions that solve
                  actual problems.
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-400">
                    Skills & Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {PORTFOLIO_CONFIG.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-white/10 text-white border-purple-400"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="glass-card p-8 rounded-2xl hover-glow">
                  <div className="text-center">
                    <Avatar className="w-48 h-48 mx-auto mb-6 border-4 border-purple-400/30">
                      <AvatarImage
                        src={PORTFOLIO_CONFIG.profilePhoto}
                        alt={PORTFOLIO_CONFIG.name}
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-gradient-to-br from-purple-400 to-blue-500 text-white text-4xl">
                        {PORTFOLIO_CONFIG.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-2xl font-bold mb-4 gradient-text">
                      Ninad Amane
                    </h3>
                    <p className="text-white/70">
                      Committed to staying updated with the latest technologies
                      and best practices in software development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
              My Projects
            </h2>
            {loading ? (
              <div className="text-center text-white/70">
                <div className="animate-spin w-8 h-8 border-2 border-purple-400 border-t-transparent rounded-full mx-auto mb-4"></div>
                Loading projects...
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project: any) => (
                  <Card
                    key={project.id}
                    className="glass-card border-white/20 hover-glow group"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-purple-400">{project.icon}</div>
                        <CardTitle className="text-white group-hover:text-purple-400 transition-colors">
                          {project.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-white/70 leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag: string) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-purple-900/30 text-purple-300 border-purple-400/30"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <Button
                          size="sm"
                          onClick={() => window.open(project.liveUrl, "_blank")}
                          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => window.open(project.githubUrl, "_blank")}
                          className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
              Let's Connect
            </h2>
            <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto">
              I'm always open to new opportunities and interesting projects. Feel
              free to reach out if you'd like to collaborate or just chat about
              technology!
            </p>

            <div className="mx-auto max-w-md mb-12 rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm p-6">
              <div className="flex flex-col items-center text-center gap-3">
                <Mail className="w-6 h-6 text-purple-400" />
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <p className="text-white/70 text-sm">{PORTFOLIO_CONFIG.email}</p>
                <Button
                  asChild
                  className="mt-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
                >
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PORTFOLIO_CONFIG.email)}&su=${encodeURIComponent("Inquiry from Portfolio")}&body=${encodeURIComponent(`Hi ${PORTFOLIO_CONFIG.name},\n\nI came across your portfolio and would like to connect.\n\nBest,`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Compose Email
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex justify-center gap-6">
              {[
                {
                  icon: Github,
                  url: PORTFOLIO_CONFIG.socialLinks.github,
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  url: PORTFOLIO_CONFIG.socialLinks.linkedin,
                  label: "LinkedIn",
                },
                {
                  icon: Instagram,
                  url: PORTFOLIO_CONFIG.socialLinks.instagram,
                  label: "Instagram",
                },
                {
                  icon: X,
                  url: PORTFOLIO_CONFIG.socialLinks.twitter,
                  label: "X.com",
                },
              ].map(({ icon: Icon, url, label }) => (
                <Button
                  key={label}
                  size="lg"
                  variant="outline"
                  onClick={() => window.open(url, "_blank")}
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black hover-glow group"
                >
                  <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="sr-only">{label}</span>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-white/10">
          <div className="container mx-auto text-center">
            <p className="text-white/50">
              &copy; 2024 {PORTFOLIO_CONFIG.name}. Built with React, TypeScript, and
              lots of &hearts;
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
