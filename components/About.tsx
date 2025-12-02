import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";
import { IconCode, IconSparkles, IconBolt, IconTarget } from "@tabler/icons-react";

export function About() {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [80, 0, 0, -80]);
  const scale = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);

  const highlights = [
    {
      icon: IconCode,
      title: "5+ Years Experience",
      desc: "Specialized in modern frontend development",
      color: "#6366F1",
    },
    {
      icon: IconSparkles,
      title: "React & TypeScript",
      desc: "Expert in building scalable applications",
      color: "#22D3EE",
    },
    {
      icon: IconBolt,
      title: "Performance Focused",
      desc: "Optimizing for speed and accessibility",
      color: "#A5B4FC",
    },
    {
      icon: IconTarget,
      title: "Product Mindset",
      desc: "Building solutions that drive business value",
      color: "#818cf8",
    },
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-32"
      id="about"
    >
      <motion.div 
        className="max-w-6xl w-full"
        style={{ opacity, y, scale }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
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
            About Me
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

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden"
          whileHover={{ y: -5 }}
        >
          <motion.div
            className="absolute inset-0 opacity-0"
            style={{
              background: "radial-gradient(circle at center, rgba(99, 102, 241, 0.1), transparent)",
            }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <p
            className="relative z-10"
            style={{
              fontSize: "1.25rem",
              lineHeight: 2,
              color: "#e2e8f0",
            }}
          >
            Highly motivated{" "}
            <span style={{ color: "#22D3EE", fontWeight: 600 }}>
              Front-End Developer
            </span>{" "}
            with 5 years of experience building responsive and user-friendly web
            applications. My expertise spans across{" "}
            <span style={{ color: "#6366F1", fontWeight: 600 }}>React</span>,{" "}
            <span style={{ color: "#A5B4FC", fontWeight: 600 }}>TypeScript</span>,{" "}
            and modern JavaScript frameworks. Proven ability to improve user engagement 
            and deliver high-quality code in{" "}
            <span style={{ color: "#22D3EE", fontWeight: 600 }}>Agile</span> environments.
            Seeking a challenging front-end role where I can leverage my skills to create 
            innovative and impactful user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.7, 
                delay: 0.3 + index * 0.12,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ 
                y: -12, 
                scale: 1.05, 
                rotateY: 8,
                boxShadow: `0 25px 50px ${item.color}25`,
              }}
              className="glass rounded-2xl p-6 relative overflow-hidden group"
              style={{
                transformStyle: "preserve-3d",
                border: `1px solid ${item.color}30`,
              }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${item.color}20, transparent)`,
                }}
              />
              <div className="relative z-10">
                <motion.div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}, ${item.color}cc)`,
                    boxShadow: `0 10px 30px ${item.color}30`,
                  }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon size={26} color="#F1F5F9" stroke={2} />
                </motion.div>
                <h3 style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "0.5rem", color: "#F1F5F9" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "#94a3b8", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
