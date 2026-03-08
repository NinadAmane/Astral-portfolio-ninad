import React, { useState, useRef, useEffect } from "react";
import { motion, useSpring, AnimatePresence } from "framer-motion";
import { Home, User, Code2, Briefcase, Mail } from "lucide-react";

interface NavItem {
  label: string;
  id: string;
  icon: React.ReactNode;
}

/**
 * Vertical Dark Adaptive Navigation Sidebar
 * Smart navigation with scroll detection and hover expansion
 */
export const PillBase: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [expanded, setExpanded] = useState(false);
  const [hovering, setHovering] = useState(false);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navItems: NavItem[] = [
    { label: "Home", id: "home", icon: <Home className="w-5 h-5" /> },
    { label: "About", id: "about", icon: <User className="w-5 h-5" /> },
    { label: "Skills", id: "skills", icon: <Code2 className="w-5 h-5" /> },
    { label: "Projects", id: "projects", icon: <Briefcase className="w-5 h-5" /> },
    { label: "Contact", id: "contact", icon: <Mail className="w-5 h-5" /> },
  ];

  // Spring animations for smooth motion
  const sidebarWidth = useSpring(64, { stiffness: 300, damping: 25, mass: 1 });

  // Handle hover expansion
  useEffect(() => {
    if (hovering) {
      setExpanded(true);
      sidebarWidth.set(160);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    } else {
      hoverTimeoutRef.current = setTimeout(() => {
        setExpanded(false);
        sidebarWidth.set(64);
      }, 200);
    }

    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, [hovering, sidebarWidth]);

  const handleMouseEnter = () => setHovering(true);
  const handleMouseLeave = () => setHovering(false);

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);

    // Scroll to the section on the page if it exists
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }

    setHovering(false);
  };

  // Sync activeSection with page scroll
  useEffect(() => {
    const sections = navItems.map((item) => item.id);
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-2xl z-50 overflow-hidden flex flex-col items-start justify-center py-4"
      style={{
        width: sidebarWidth,
        minHeight: "340px",
        background: `rgba(15, 15, 17, 0.4)`,
        backdropFilter: `blur(12px)`,
        border: `1px solid rgba(255, 255, 255, 0.08)`,
        boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.6), inset 0 0 0 1px rgba(255, 255, 255, 0.05)`,
        transition: "border-color 0.3s ease-out",
      }}
    >
      {/* Glossy inner reflection */}
      <div className="absolute inset-0 pointer-events-none rounded-2xl border-[0.5px] border-white/10" />

      {/* Navigation items container */}
      <div className="w-full flex flex-col items-start justify-evenly gap-4 px-2">
        {navItems.map((item) => {
          const isActive = item.id === activeSection;

          return (
            <button
              key={item.id}
              onClick={() => handleSectionClick(item.id)}
              className="relative group w-full flex items-center justify-start gap-4 rounded-xl px-2.5 py-3 transition-colors duration-300"
              style={{
                color: isActive ? "#fff" : "rgba(255, 255, 255, 0.5)",
                background: isActive ? "rgba(255, 255, 255, 0.05)" : "transparent",
              }}
            >
              <div
                className="shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{
                  color: isActive ? "#818cf8" : "inherit" // indigo-400 for active icon
                }}
              >
                {item.icon}
              </div>

              {/* Text Label */}
              <AnimatePresence mode="popLayout">
                {expanded && (
                  <motion.div
                    initial={{ opacity: 0, x: -10, filter: "blur(2px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: -10, filter: "blur(2px)" }}
                    transition={{ duration: 0.2 }}
                    className="whitespace-nowrap font-medium text-sm tracking-wide"
                  >
                    {item.label}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Active Indicator Line */}
              {isActive && (
                <motion.div
                  layoutId="active-indicator"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-indigo-500 rounded-r-full"
                  style={{
                    boxShadow: "0 0 10px rgba(99, 102, 241, 0.5)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              {/* Hover highlight background */}
              {!isActive && (
                <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              )}
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default PillBase;
