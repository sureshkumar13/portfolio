import { motion, useScroll, useTransform, useSpring, useMotionValue, useVelocity, useAnimationFrame } from "motion/react";
import { IconChevronDown, IconSparkles, IconCode, IconBolt, IconBrandReact, IconBrandTypescript, IconStars, IconFileDownload, IconBriefcase } from "@tabler/icons-react";
import { useState, useEffect, useRef } from "react";

export function Hero() {
  const roles = [
    "Front-End Developer",
    "React Engineer", 
    "TypeScript Specialist",
    "Software Engineer",
    "UI Engineer",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // Scroll-based animations with spring physics
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.5], [1, 0.85]);
  const y = useTransform(smoothProgress, [0, 0.5], [0, 150]);
  const blur = useTransform(smoothProgress, [0, 0.5], [0, 10]);

  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(99, 102, 241, 0.2)"
                strokeWidth="1"
              />
            </pattern>
            <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(99, 102, 241, 0)" />
              <stop offset="50%" stopColor="rgba(99, 102, 241, 0.3)" />
              <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
          <rect width="100%" height="100%" fill="url(#grid-gradient)" />
        </svg>
      </div>

      {/* Gradient Orbs - Non-overlapping */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.25), transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.2), transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/2 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(165, 180, 252, 0.15), transparent 70%)",
          filter: "blur(70px)",
          transform: "translateX(-50%)",
        }}
        animate={{
          scale: [1, 1.4, 1],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Enhanced Floating Particles with Stagger */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => {
          const icons = [IconCode, IconBolt, IconSparkles, IconBrandReact, IconBrandTypescript, IconStars];
          const Icon = icons[i % icons.length];
          const colors = ["#6366F1", "#22D3EE", "#A5B4FC", "#818cf8", "#67e8f9"];
          
          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute"
              style={{
                left: `${8 + (i * 4.5) % 85}%`,
                top: `${15 + (i * 8) % 70}%`,
              }}
              initial={{ opacity: 0, scale: 0, rotate: -45 }}
              animate={{
                opacity: [0, 0.7, 0.5, 0],
                scale: [0.5, 1.2, 1, 0.5],
                y: [0, -80, -160, -240],
                x: [0, (i % 2 === 0 ? 20 : -20), 0],
                rotate: [0, 90, 180, 270],
              }}
              transition={{
                duration: 10 + (i % 4) * 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <Icon 
                size={16 + (i % 4) * 6} 
                color={colors[i % colors.length]}
                style={{ 
                  opacity: 0.5,
                  filter: "blur(0.3px)",
                }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Floating Tech Icons with Enhanced 3D Effect */}
      {[
        { Icon: IconBrandReact, x: "8%", y: "25%", delay: 0, color: "#22D3EE" },
        { Icon: IconBrandTypescript, x: "88%", y: "20%", delay: 0.5, color: "#6366F1" },
        { Icon: IconCode, x: "12%", y: "70%", delay: 1, color: "#A5B4FC" },
        { Icon: IconBolt, x: "85%", y: "65%", delay: 1.5, color: "#818cf8" },
      ].map((item, i) => (
        <motion.div
          key={`tech-icon-${i}`}
          className="absolute hidden md:block"
          style={{
            left: item.x,
            top: item.y,
            perspective: "1000px",
          }}
          initial={{ opacity: 0, scale: 0, rotateY: -90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{
            duration: 1,
            delay: item.delay + 1,
            type: "spring",
            stiffness: 100,
          }}
        >
          <motion.div
            className="w-16 h-16 rounded-2xl glass flex items-center justify-center"
            style={{
              background: `${item.color}15`,
              border: `1px solid ${item.color}30`,
              boxShadow: `0 8px 32px ${item.color}20`,
              transformStyle: "preserve-3d",
            }}
            animate={{
              y: [0, -12, 0],
              rotateY: [0, 10, 0, -10, 0],
              rotateX: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.2,
              rotateY: 180,
              boxShadow: `0 20px 50px ${item.color}40`,
            }}
          >
            <item.Icon size={28} color={item.color} />
          </motion.div>
        </motion.div>
      ))}

      {/* Main Content with Scroll Animation */}
      <motion.div 
        className="relative z-10 text-center px-6 max-w-6xl w-full"
        style={{ opacity, scale, y }}
      >
        {/* Welcome Badge */}
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 inline-block"
        >
          <motion.div
            className="glass rounded-full px-6 py-3 inline-flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            style={{
              border: "1px solid rgba(99, 102, 241, 0.3)",
              background: "rgba(99, 102, 241, 0.05)",
            }}
          >
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <IconSparkles size={18} color="#22D3EE" />
            </motion.div>
            <span style={{ fontSize: "0.938rem", color: "#A5B4FC", fontWeight: 500 }}>
              Open to new opportunities
            </span>
          </motion.div>
        </motion.div>

        {/* Name - No Overlap */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.h1
            style={{
              fontSize: "clamp(2.5rem, 7vw, 6.5rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              background: "linear-gradient(135deg, #F1F5F9 0%, #6366F1 50%, #22D3EE 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "200% 200%",
              position: "relative",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Suresh Kumar S
            
            {/* Subtle glow */}
            <motion.span
              className="absolute inset-0 -z-10"
              style={{
                background: "linear-gradient(135deg, #6366F1, #22D3EE)",
                filter: "blur(50px)",
                opacity: 0.2,
              }}
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Suresh Kumar S
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Typing Effect Role - Fixed Height to Prevent Overlap */}
        <motion.div 
          className="mb-10"
          style={{ minHeight: "80px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2">
            <motion.h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                fontWeight: 400,
                color: "#A5B4FC",
                textShadow: "0 0 40px rgba(165, 180, 252, 0.3)",
                minHeight: "1.2em",
              }}
            >
              {displayedText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                style={{
                  display: "inline-block",
                  width: "3px",
                  height: "0.9em",
                  background: "#22D3EE",
                  marginLeft: "4px",
                  verticalAlign: "middle",
                }}
              />
            </motion.h2>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          className="max-w-3xl mx-auto mb-12"
          style={{
            fontSize: "1.125rem",
            color: "#cbd5e1",
            lineHeight: 1.8,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Crafting{" "}
          <span style={{ color: "#22D3EE", fontWeight: 600 }}>
            exceptional digital experiences
          </span>{" "}
          with 5+ years of expertise in React, TypeScript, and modern web technologies
        </motion.p>

        {/* CTA Buttons - Job Focused */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.a
            href="#experience"
            className="group relative px-8 py-4 rounded-xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #6366F1, #22D3EE)",
              fontWeight: 600,
              cursor: "pointer",
              textDecoration: "none",
              color: "#F1F5F9",
              fontSize: "1rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 50px rgba(99, 102, 241, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, #22D3EE, #6366F1)",
                opacity: 0,
              }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
            <span style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: "8px" }}>
              <IconBriefcase size={20} />
              View Experience
            </span>
          </motion.a>

          <motion.a
            href="#projects"
            className="group relative px-8 py-4 rounded-xl overflow-hidden"
            style={{
              fontWeight: 600,
              cursor: "pointer",
              textDecoration: "none",
              color: "#F1F5F9",
              fontSize: "1rem",
              border: "2px solid #6366F1",
              background: "rgba(99, 102, 241, 0.1)",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
            whileHover={{ 
              scale: 1.05, 
              background: "rgba(99, 102, 241, 0.25)",
              borderColor: "#22D3EE",
              boxShadow: "0 15px 40px rgba(99, 102, 241, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <IconCode size={20} />
            View Projects
          </motion.a>

          <motion.a
            href="/assets/Resume.pdf"
            download="Suresh_Kumar_S_Resume.pdf"
            className="group relative px-8 py-4 rounded-xl overflow-hidden"
            style={{
              fontWeight: 600,
              cursor: "pointer",
              textDecoration: "none",
              color: "#F1F5F9",
              fontSize: "1rem",
              border: "2px solid #22D3EE",
              background: "rgba(34, 211, 238, 0.1)",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
            whileHover={{ 
              scale: 1.05, 
              background: "rgba(34, 211, 238, 0.25)",
              borderColor: "#6366F1",
              boxShadow: "0 15px 40px rgba(34, 211, 238, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <IconFileDownload size={20} />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Stats Cards - Job Focused */}
        <motion.div
          className="flex flex-wrap gap-6 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          {[
            { label: "Years Experience", value: "5+", icon: IconStars, color: "#6366F1" },
            { label: "Projects Delivered", value: "50+", icon: IconCode, color: "#22D3EE" },
            { label: "Uptime Maintained", value: "99.9%", icon: IconSparkles, color: "#A5B4FC" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glass rounded-2xl px-6 py-4 min-w-[150px]"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: 1.5 + index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.08,
                boxShadow: `0 20px 40px ${stat.color}25`,
              }}
              style={{
                border: `1px solid ${stat.color}30`,
                background: `${stat.color}08`,
              }}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  <stat.icon size={24} color={stat.color} />
                </motion.div>
                <div
                  style={{ 
                    fontSize: "2rem", 
                    fontWeight: 800,
                    background: `linear-gradient(135deg, ${stat.color}, #F1F5F9)`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.value}
                </div>
              </div>
              <div style={{ fontSize: "0.813rem", color: "#94a3b8" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 1, 1, 0],
          y: [0, 10, 10, 0],
        }}
        transition={{
          opacity: { delay: 2, duration: 2, repeat: Infinity, repeatDelay: 1 },
          y: { delay: 2, duration: 2, repeat: Infinity, repeatDelay: 1 },
        }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 glass rounded-full px-4 py-3"
          style={{
            border: "1px solid rgba(99, 102, 241, 0.3)",
            background: "rgba(99, 102, 241, 0.05)",
          }}
          whileHover={{ scale: 1.1 }}
        >
          <span style={{ fontSize: "0.75rem", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px" }}>
            Scroll
          </span>
          <IconChevronDown size={20} color="#6366F1" />
        </motion.div>
      </motion.div>
    </section>
  );
}
