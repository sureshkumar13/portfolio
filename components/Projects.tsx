import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef, useState } from "react";
import { IconCode, IconChartBar, IconSettings, IconSparkles } from "@tabler/icons-react";

export function Projects() {
  const ref = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [80, 0, 0, -80]);

  const projects = [
    {
      icon: IconSparkles,
      title: "Customer & Partner Portal Revamp",
      description:
        "Led the complete redesign of OpenText's customer and partner portal homepage using ReactJS and TypeScript, resulting in significant user engagement improvements.",
      technologies: ["React", "TypeScript", "REST APIs", "CI/CD"],
      highlights: [
        "25% increase in user engagement",
        "Legacy JS to TypeScript migration",
        "Security vulnerability fixes",
      ],
      color: "#6366F1",
    },
    {
      icon: IconCode,
      title: "HealtheLife Component Library",
      description:
        "Built a comprehensive React component library for healthcare applications with TypeScript, ensuring accessibility and reusability across multiple products.",
      technologies: ["React", "TypeScript", "Styled Components", "Storybook"],
      highlights: [
        "50+ reusable components",
        "Full TypeScript coverage",
        "Accessibility compliant",
      ],
      color: "#22D3EE",
    },
    {
      icon: IconChartBar,
      title: "Health Data Visualizations",
      description:
        "Implemented interactive D3.js data visualizations displaying historical health data, risk indicators, and graphical trends for diabetes and heart disease detection.",
      technologies: ["D3.js", "React", "JavaScript", "SVG"],
      highlights: [
        "Real-time health indicators",
        "Interactive risk charts",
        "Custom trend animations",
      ],
      color: "#A5B4FC",
    },
    {
      icon: IconSettings,
      title: "Admin Tooling Console",
      description:
        "Led development of Admin Tooling Console enabling clients to configure website data through a dynamic UI, integrating both API gem and UI package.",
      technologies: ["React", "Redux", "TypeScript", "REST APIs"],
      highlights: [
        "Dynamic configuration UI",
        "API & UI integration",
        "99.99% uptime achieved",
      ],
      color: "#818cf8",
    },
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-32"
      id="projects"
    >
      <motion.div 
        className="max-w-7xl w-full"
        style={{ opacity, y }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="mb-4"
            style={{ 
              fontSize: "clamp(2.5rem, 5vw, 4rem)", 
              fontWeight: 800,
              background: "linear-gradient(135deg, #6366F1, #22D3EE)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Key Projects
          </motion.h2>
          <motion.div
            className="w-24 h-1 mx-auto rounded-full mb-6"
            style={{
              background: "linear-gradient(90deg, #6366F1, #22D3EE)",
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p
            className="max-w-2xl mx-auto"
            style={{ fontSize: "1.125rem", color: "#94a3b8" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Transforming ideas into impactful digital solutions
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                className="glass rounded-3xl p-8 h-full relative overflow-hidden"
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                style={{
                  border: `1px solid ${project.color}30`,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(circle at ${
                      hoveredIndex === index ? "center" : "top"
                    }, ${project.color}20, transparent)`,
                    opacity: 0,
                  }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Sparkle effect */}
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute top-4 right-4"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                  >
                    <IconSparkles size={24} color={project.color} />
                  </motion.div>
                )}

                {/* Gradient border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    border: `2px solid ${project.color}`,
                    opacity: 0,
                  }}
                  animate={{ opacity: hoveredIndex === index ? 0.6 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)`,
                      boxShadow: `0 10px 40px ${project.color}30`,
                    }}
                    whileHover={{ rotate: 360, scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                  >
                    <project.icon size={28} color="#F1F5F9" stroke={2} />
                  </motion.div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      marginBottom: "1rem",
                      color: "#F1F5F9",
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "0.938rem",
                      color: "#cbd5e1",
                      marginBottom: "1.5rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6 space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <motion.div 
                        key={idx} 
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + idx * 0.1 }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{
                            background: project.color,
                            boxShadow: `0 0 8px ${project.color}`,
                          }}
                        />
                        <span style={{ fontSize: "0.875rem", color: "#94a3b8" }}>
                          {highlight}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className="px-3 py-1 rounded-full glass"
                        style={{
                          fontSize: "0.75rem",
                          color: "#e2e8f0",
                          border: `1px solid ${project.color}40`,
                          background: `${project.color}10`,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + idx * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
