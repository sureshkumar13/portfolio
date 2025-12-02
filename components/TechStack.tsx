import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";
import {
  IconCode,
  IconComponents,
  IconTestPipe,
  IconTool,
  IconDatabase,
  IconPalette,
} from "@tabler/icons-react";

export function TechStack() {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [80, 0, 0, -80]);

  const techCategories = [
    {
      icon: IconCode,
      title: "Languages",
      color: "#6366F1",
      skills: ["HTML", "CSS", "JavaScript (ES6+)", "TypeScript"],
    },
    {
      icon: IconComponents,
      title: "Frameworks & Libraries",
      color: "#22D3EE",
      skills: ["React", "Redux", "D3.js", "Bootstrap", "Context API", "Styled Components"],
    },
    {
      icon: IconTestPipe,
      title: "Testing",
      color: "#A5B4FC",
      skills: ["Jest", "Enzyme", "Storybook"],
    },
    {
      icon: IconTool,
      title: "Tools & DevOps",
      color: "#818cf8",
      skills: ["JIRA", "Jenkins", "Docker", "Splunk", "NewRelic", "CI/CD", "GitHub", "GitLab"],
    },
    {
      icon: IconDatabase,
      title: "Databases",
      color: "#22D3EE",
      skills: ["MySQL", "MongoDB"],
    },
    {
      icon: IconPalette,
      title: "Other Skills",
      color: "#6366F1",
      skills: ["REST API", "Agile", "Scrum", "Microservices", "Webpack", "NPM", "Accessibility", "Internationalization"],
    },
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-32"
      id="tech"
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
            Tech Stack
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
            A comprehensive toolkit for building modern, scalable web applications
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03, rotateY: 5 }}
              className="glass rounded-3xl p-8 relative overflow-hidden group cursor-pointer"
              style={{
                border: `1px solid ${category.color}30`,
                transformStyle: "preserve-3d",
              }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: `radial-gradient(circle at center, ${category.color}20, transparent)`,
                }}
              />

              <div className="relative z-10">
                <motion.div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${category.color}, ${category.color}cc)`,
                    boxShadow: `0 10px 40px ${category.color}30`,
                  }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <category.icon size={28} color="#F1F5F9" stroke={2} />
                </motion.div>

                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    marginBottom: "1rem",
                    color: "#F1F5F9",
                  }}
                >
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      className="px-3 py-1.5 rounded-full text-sm glass"
                      style={{
                        fontSize: "0.813rem",
                        color: "#e2e8f0",
                        border: `1px solid ${category.color}40`,
                        background: `${category.color}10`,
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: `${category.color}20`,
                        y: -3,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  border: `2px solid ${category.color}`,
                  opacity: 0,
                }}
                whileHover={{ opacity: 0.5 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
