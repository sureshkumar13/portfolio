import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Tech Stack", href: "#tech" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: isScrolled
          ? "rgba(15, 23, 42, 0.8)"
          : "transparent",
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        borderBottom: isScrolled
          ? "1px solid rgba(99, 102, 241, 0.2)"
          : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          style={{
            fontSize: "1.5rem",
            fontWeight: 800,
            textDecoration: "none",
            background: "linear-gradient(135deg, #6366F1, #22D3EE)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          SK
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              style={{
                fontSize: "0.938rem",
                fontWeight: 500,
                color: "#94a3b8",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              whileHover={{ 
                color: "#22D3EE",
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href={`${import.meta.env.BASE_URL}/assets/Resume.pdf`}
            download="Suresh_Kumar_S_Resume.pdf"
            className="px-6 py-2 rounded-lg flex items-center gap-2"
            style={{
              background: "linear-gradient(135deg, #6366F1, #22D3EE)",
              color: "#F1F5F9",
              fontWeight: 600,
              textDecoration: "none",
              fontSize: "0.938rem",
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center"
          style={{
            background: "rgba(99, 102, 241, 0.1)",
            border: "1px solid rgba(99, 102, 241, 0.3)",
          }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? (
            <IconX size={24} color="#6366F1" />
          ) : (
            <IconMenu2 size={24} color="#6366F1" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 glass rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          style={{
            background: "rgba(15, 23, 42, 0.95)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(99, 102, 241, 0.2)",
          }}
        >
          <div className="flex flex-col p-4">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="px-4 py-3 rounded-lg"
                style={{
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "#94a3b8",
                  textDecoration: "none",
                }}
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ 
                  backgroundColor: "rgba(99, 102, 241, 0.1)",
                  color: "#22D3EE",
                  x: 5,
                }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="/assets/Resume.pdf"
              download="Suresh_Kumar_S_Resume.pdf"
              className="mt-2 px-4 py-3 rounded-lg text-center"
              style={{
                background: "linear-gradient(135deg, #6366F1, #22D3EE)",
                color: "#F1F5F9",
                fontWeight: 600,
                textDecoration: "none",
                fontSize: "1rem",
              }}
              onClick={() => setIsMobileMenuOpen(false)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
