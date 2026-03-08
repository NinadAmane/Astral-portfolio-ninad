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
import { PillBase } from "@/components/ui/3d-adaptive-navigation-bar";
import { GradientButton } from "@/components/ui/gradient-button";
import { HeroGeometric, ElegantShape } from "@/components/ui/shape-landing-hero";
import { OrbitingSkills } from "@/components/ui/orbiting-skills";
import { motion } from "framer-motion";
import { Circle, Code2 } from "lucide-react";

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
    "C/C++",
    "HTML/CSS",
    "DSA",
    "OOPs",
    "DBMS",
    "OS",
    "CN",
    "Scikit-Learn",
    "TensorFlow",
    "Neural Networks",
    "Feature Engineering",
    "Text Embeddings",
    "Model Deployment",
    "Sentence Transformers",
    "LLM Integration",
    "Prompt Engineering",
    "Groq API",
    "Llama 3",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Seaborn",
    "Streamlit",
    "Flask",
    "FastAPI",
    "MongoDB",
    "SQL",
    "Git/Github",
    "Postman",
    "Docker",
    "CI/CD",
    "Cloud Computing",
  ],

  // Social Media Links - Update with your actual profiles
  socialLinks: {
    github: "https://github.com/NinadAmane",
    linkedin: "https://www.linkedin.com/in/ninad-amane-126775290/",
    instagram: "https://instagram.com/ninad.gg",
    twitter: "https://x.com/NinadAmane",
    leetcode: "https://leetcode.com/u/ninadamane/", // Update with your actual Leetcode profile
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.1 + i * 0.2,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
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
    <div className="relative min-h-screen bg-[#030303] scroll-smooth font-sans text-white selection:bg-indigo-500/30">
      {/* Global Background Elements from HeroGeometric */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl pointer-events-none z-0" />

      {/* Texture overlay */}
      <div className="animated-bg z-0 hidden md:block" style={{ opacity: 0.4 }}></div>

      {/* Foreground Content */}
      <div className="relative z-10">
        {/* Navigation - replaced with 3D adaptive pill */}
        <div className="fixed top-1/2 -translate-y-1/2 left-4 md:left-6 z-50 flex flex-col items-center pointer-events-auto">
          <PillBase />
        </div>

        {/* Home Section - Hero Geometric */}
        <section
          id="home"
          className="relative w-screen min-h-screen flex items-center justify-center overflow-hidden"
          style={{ marginLeft: "calc(-50vw + 50%)" }}
        >
          <HeroGeometric
            badge={PORTFOLIO_CONFIG.title}
            title1={PORTFOLIO_CONFIG.name.split(" ")[0]}
            title2={PORTFOLIO_CONFIG.name.split(" ").slice(1).join(" ")}
          />
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <ElegantShape
              delay={0.2}
              width={600}
              height={140}
              rotate={12}
              gradient="from-indigo-500/[0.15]"
              className="left-[-10%] top-[10%]"
            />
            <ElegantShape
              delay={0.4}
              width={400}
              height={100}
              rotate={-15}
              gradient="from-rose-500/[0.15]"
              className="right-[-5%] top-[70%]"
            />
          </div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08]">
                <Circle className="h-2 w-2 fill-rose-500/80" />
                <span className="text-sm text-white/60 tracking-wide uppercase">
                  Discover
                </span>
              </div>
            </motion.div>

            <motion.div
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-syne font-bold mb-16 tracking-tighter uppercase bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 text-center">
                About Me
              </h2>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-12 items-center"
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <p className="text-lg text-white/80 leading-relaxed">
                  I'm Ninad Amane, a self-driven developer currently pursuing a
                  BE in Artificial Intelligence and Machine Learning. I thrive
                  at the intersection of technology, creativity, and
                  self-mastery - building not just applications, but also a
                  better version of myself every day.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  I’ve co-authored research papers, built industry grade projects,
                  and am constantly thinking about how to deliver real value
                  through software, not just pretty UIs, but solutions that
                  solve actual problems.
                </p>
              </div>
              <div className="relative">
                <div className="glass-card p-8 rounded-2xl hover-glow">
                  <div className="text-center">
                    <Avatar className="w-48 h-48 mx-auto mb-6 border-4 border-white/10">
                      <AvatarImage
                        src={PORTFOLIO_CONFIG.profilePhoto}
                        alt={PORTFOLIO_CONFIG.name}
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-[#121212] text-white/80 text-4xl">
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
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <ElegantShape
              delay={0.3}
              width={500}
              height={120}
              rotate={-8}
              gradient="from-emerald-500/[0.15]"
              className="right-[-5%] top-[20%]"
            />
          </div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08]">
                <Code2 className="h-4 w-4 text-emerald-500" />
                <span className="text-sm text-white/60 tracking-wide uppercase">
                  Tech Stack
                </span>
              </div>
            </motion.div>

            <motion.div
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-syne font-bold mb-16 tracking-tighter uppercase bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-white/90 to-teal-300 text-center">
                Expertise
              </h2>
            </motion.div>

            <motion.div
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center relative z-10"
            >
              <div className="space-y-6">
                <div className="glass-card p-8 rounded-2xl hover-glow">
                  <h3 className="text-2xl font-semibold text-white/90 mb-6">
                    Core Technologies
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {PORTFOLIO_CONFIG.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-4 py-2 text-sm bg-white/5 hover:bg-white/10 text-white/90 border-white/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative flex justify-center">
                <OrbitingSkills />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <ElegantShape
              delay={0.3}
              width={500}
              height={120}
              rotate={-8}
              gradient="from-violet-500/[0.15]"
              className="left-[5%] bottom-[5%]"
            />
            <ElegantShape
              delay={0.5}
              width={300}
              height={80}
              rotate={20}
              gradient="from-amber-500/[0.15]"
              className="right-[15%] top-[10%]"
            />
          </div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08]">
                <Circle className="h-2 w-2 fill-indigo-500/80" />
                <span className="text-sm text-white/60 tracking-wide uppercase">
                  Portfolio
                </span>
              </div>
            </motion.div>

            <motion.div
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-syne font-bold mb-16 tracking-tighter uppercase bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 text-center">
                Selected Works
              </h2>
            </motion.div>

            {loading ? (
              <div className="text-center text-white/70">
                <div className="animate-spin w-8 h-8 border-2 border-indigo-400 border-t-transparent rounded-full mx-auto mb-4"></div>
                Loading projects...
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project: any) => (
                  <Card
                    key={project.id}
                    className="glass-card border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors hover-glow group"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-indigo-400">{project.icon}</div>
                        <CardTitle className="text-white group-hover:text-indigo-300 transition-colors">
                          {project.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-white/60 leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag: string) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-indigo-900/20 text-indigo-300 border-indigo-500/20"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <Button
                          size="sm"
                          onClick={() => window.open(project.liveUrl, "_blank")}
                          className="bg-indigo-600 hover:bg-indigo-500 text-white border-0 shadow-lg shadow-indigo-500/20"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            window.open(project.githubUrl, "_blank")
                          }
                          className="bg-white/10 border-white/20 text-white font-medium hover:bg-white/20 hover:text-white"
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
        <section id="contact" className="py-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <ElegantShape
              delay={0.4}
              width={600}
              height={140}
              rotate={-25}
              gradient="from-cyan-500/[0.15]"
              className="left-[20%] top-[5%]"
            />
            <ElegantShape
              delay={0.6}
              width={200}
              height={60}
              rotate={12}
              gradient="from-rose-500/[0.15]"
              className="right-[10%] bottom-[10%]"
            />
          </div>
          <div className="container mx-auto text-center relative z-10">
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08]">
                <Circle className="h-2 w-2 fill-cyan-500/80" />
                <span className="text-sm text-white/60 tracking-wide uppercase">
                  Reach Out
                </span>
              </div>
            </motion.div>

            <motion.div
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-syne font-bold mb-8 tracking-tighter uppercase bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                Let's Create<br />Together
              </h2>
              <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto">
                I'm always open to new opportunities and interesting projects.
                Feel free to reach out if you'd like to collaborate or just chat
                about technology!
              </p>
            </motion.div>

            <motion.div
              className="mx-auto max-w-md mb-12 rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm p-6"
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center text-center gap-3">
                <Mail className="w-6 h-6 text-white/80" />
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <p className="text-white/70 text-sm">
                  {PORTFOLIO_CONFIG.email}
                </p>
                <Button
                  asChild
                  className="mt-2 bg-white/10 hover:bg-white/20 text-white border border-white/10 shadow-lg"
                >
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                      PORTFOLIO_CONFIG.email
                    )}&su=${encodeURIComponent(
                      "Inquiry from Portfolio"
                    )}&body=${encodeURIComponent(
                      `Hi ${PORTFOLIO_CONFIG.name},\n\nI came across your portfolio and would like to connect.\n\nBest,`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Compose Email
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center gap-6"
              custom={3}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
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
                  icon: Code2,
                  url: PORTFOLIO_CONFIG.socialLinks.leetcode,
                  label: "Leetcode",
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
                  className="border-white/20 bg-white/5 text-white/80 hover:bg-white/20 hover:text-white hover:border-white/40 hover-glow group"
                >
                  <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="sr-only">{label}</span>
                </Button>
              ))}
            </motion.div>
          </div>
        </section>

        <footer className="py-8 px-6 relative z-10">
          <div className="container mx-auto text-center flex flex-col items-center justify-center gap-4">
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-500/50 to-rose-500/50 rounded-full mb-4"></div>
            <p className="text-white/40 text-sm font-light tracking-wide">
              &copy; 2024 {PORTFOLIO_CONFIG.name}.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
