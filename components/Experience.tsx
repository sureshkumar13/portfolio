import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";
import { IconBriefcase, IconCalendar, IconCircleCheck } from "@tabler/icons-react";

export function Experience() {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [80, 0, 0, -80]);

  const experiences = [
    {
      company: "OpenText",
      role: "Software Engineer",
      period: "2024 - Present",
      achievements: [
        "Revamped customer and partner portal homepage using ReactJS and TypeScript, resulting in 25% increase in user engagement",
        "Comprehensive refactor of legacy JavaScript code to TypeScript, enhancing code maintainability and application performance",
        "Proactively addressed security vulnerabilities through POC implementations and thorough analysis",
        "Enabled faster resolution of critical customer-reported bugs and hotfixes with stable and scalable front-end architecture",
      ],
      color: "#6366F1",
    },
    {
      company: "Oracle Cerner Healthcare Solutions PVT LTD",
      role: "Software Engineer 2",
      period: "2019 - 2024",
      achievements: [
        "Developed responsive and accessible user interfaces for Healthelife applications using React",
        "Implemented interactive D3.js data visualizations for historical health data including risk indicators and graphical trends",
        "Led development of Admin Tooling Console using React, enabling clients to configure website data through dynamic UI",
        "Conducted operational reviews achieving 95% uptime for client solutions",
        "Configured and deployed applications using Spinnaker, ensuring 99.99% uptime",
      ],
      color: "#22D3EE",
    },
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-32"
      id="experience"
    >
      <motion.div 
        className="max-w-5xl w-full"
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
            Experience
          </motion.h2>
          <motion.div
            className="w-24 h-1 mx-auto rounded-full"
            style={{
              background: "linear-gradient(90deg, #6366F1, #22D3EE)",
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 w-0.5"
            style={{
              background: "linear-gradient(180deg, #6366F1, #22D3EE)",
              transform: "translateX(-50%)",
              height: "100%",
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative mb-16 md:mb-24 ${
                index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2"
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-8 md:left-1/2 w-5 h-5 rounded-full z-10"
                style={{
                  background: `linear-gradient(135deg, ${exp.color}, #F1F5F9)`,
                  transform: "translate(-50%, 1.5rem)",
                  boxShadow: `0 0 0 6px rgba(15, 23, 42, 1), 0 0 20px ${exp.color}80`,
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3 }}
                whileHover={{ scale: 1.5 }}
              />

              <div
                className={`ml-20 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                }`}
              >
                <motion.div
                  className="glass rounded-2xl p-8 relative overflow-hidden group"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    border: `1px solid ${exp.color}30`,
                  }}
                >
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at ${
                        index % 2 === 0 ? "top right" : "top left"
                      }, ${exp.color}15, transparent)`,
                    }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4 justify-start md:justify-start">
                      <motion.div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: `linear-gradient(135deg, ${exp.color}, ${exp.color}cc)`,
                          boxShadow: `0 10px 30px ${exp.color}30`,
                        }}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconBriefcase size={22} color="#F1F5F9" stroke={2} />
                      </motion.div>
                      <div className="text-left">
                        <h3
                          style={{
                            fontSize: "1.5rem",
                            fontWeight: 700,
                            color: "#F1F5F9",
                            marginBottom: "0.25rem",
                          }}
                        >
                          {exp.role}
                        </h3>
                        <h4
                          style={{ 
                            fontSize: "1.25rem", 
                            fontWeight: 600,
                            color: exp.color,
                          }}
                        >
                          {exp.company}
                        </h4>
                      </div>
                    </div>

                    <div
                      className="flex items-center gap-2 mb-6 justify-start"
                      style={{ color: "#A5B4FC" }}
                    >
                      <IconCalendar size={18} stroke={2} />
                      <span style={{ fontSize: "0.938rem", fontWeight: 500 }}>{exp.period}</span>
                    </div>

                    <ul className="space-y-3 text-left">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + idx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <IconCircleCheck 
                            size={20} 
                            color={exp.color} 
                            className="flex-shrink-0 mt-0.5"
                            stroke={2}
                          />
                          <span style={{ fontSize: "0.938rem", color: "#cbd5e1", lineHeight: 1.6 }}>
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
