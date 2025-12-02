import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { IconMail, IconBrandLinkedin, IconBrandGithub, IconDownload, IconMapPin, IconBriefcase, IconPhone, IconExternalLink } from "@tabler/icons-react";

export function Contact() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  const contactInfo = [
    {
      icon: IconMail,
      label: "Email",
      value: "sureshkmr131097@gmail.com",
      href: "mailto:sureshkmr131097@gmail.com",
      color: "#6366F1",
    },
    {
      icon: IconPhone,
      label: "Phone",
      value: "+91 7892474801",
      href: "tel:+917892474801",
      color: "#22D3EE",
    },
    {
      icon: IconMapPin,
      label: "Location",
      value: "Bangalore, India",
      href: "#",
      color: "#A5B4FC",
    },
  ];

  const socialLinks = [
    {
      icon: IconBrandLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/suresh-kumar-s-b05918144",
      href: "https://www.linkedin.com/in/suresh-kumar-s-b05918144/",
      color: "#0A66C2",
      description: "Connect with me",
    },
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-32"
      id="contact"
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
            Let's Connect
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
            Open to exciting opportunities in frontend development
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Information Cards */}
            <div className="space-y-4">
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "#F1F5F9",
                  marginBottom: "1rem",
                }}
              >
                Contact Information
              </h3>
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="glass rounded-2xl p-5 flex items-center gap-4 group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ 
                    x: 8, 
                    scale: 1.02,
                    boxShadow: `0 15px 40px ${item.color}20`,
                  }}
                  style={{ 
                    display: "flex", 
                    textDecoration: "none",
                    border: `1px solid ${item.color}30`,
                  }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}, ${item.color}cc)`,
                      boxShadow: `0 8px 25px ${item.color}30`,
                    }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon size={22} color="#F1F5F9" stroke={2} />
                  </motion.div>
                  <div>
                    <p style={{ fontSize: "0.813rem", color: "#94a3b8", marginBottom: "2px" }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: "1rem", fontWeight: 600, color: "#F1F5F9" }}>
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "#F1F5F9",
                  marginBottom: "1rem",
                }}
              >
                Professional Profiles
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass rounded-2xl p-5 flex items-center justify-between group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ 
                      x: 8, 
                      scale: 1.02,
                      boxShadow: `0 15px 40px ${link.color}20`,
                    }}
                    style={{ 
                      display: "flex", 
                      textDecoration: "none",
                      border: `1px solid ${link.color}30`,
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${link.color}, ${link.color}cc)`,
                          boxShadow: `0 8px 25px ${link.color}30`,
                        }}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <link.icon size={22} color="#F1F5F9" stroke={2} />
                      </motion.div>
                      <div>
                        <p style={{ fontSize: "1rem", fontWeight: 600, color: "#F1F5F9" }}>
                          {link.label}
                        </p>
                        <p style={{ fontSize: "0.813rem", color: "#94a3b8" }}>
                          {link.description}
                        </p>
                      </div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0.5 }}
                      whileHover={{ opacity: 1, x: 3 }}
                    >
                      <IconExternalLink size={20} color="#94a3b8" />
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Availability & Resume */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Availability Status */}
            <motion.div 
              className="glass rounded-3xl p-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02, y: -5 }}
              style={{
                border: "1px solid rgba(34, 211, 238, 0.3)",
                background: "rgba(34, 211, 238, 0.05)",
              }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background: "radial-gradient(circle at center, rgba(34, 211, 238, 0.15), transparent)",
                }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="w-3 h-3 rounded-full"
                    style={{ background: "#22D3EE" }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [1, 0.7, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <span style={{ fontSize: "0.938rem", color: "#22D3EE", fontWeight: 600 }}>
                    Available for Opportunities
                  </span>
                </div>
                
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#F1F5F9",
                    marginBottom: "1rem",
                  }}
                >
                  Open to New Roles
                </h3>
                
                <p style={{ fontSize: "0.938rem", color: "#cbd5e1", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                  Currently seeking <span style={{ color: "#22D3EE", fontWeight: 600 }}>Senior Frontend Developer</span> or <span style={{ color: "#6366F1", fontWeight: 600 }}>React Engineer</span> positions where I can contribute my 5+ years of expertise in building scalable, high-performance web applications.
                </p>

                <div className="flex flex-wrap gap-3">
                  {["Full-time", "Remote / Hybrid", "Immediate Joiner"].map((tag, i) => (
                    <motion.span
                      key={i}
                      className="px-4 py-2 rounded-full text-sm"
                      style={{
                        background: "rgba(34, 211, 238, 0.1)",
                        border: "1px solid rgba(34, 211, 238, 0.3)",
                        color: "#22D3EE",
                        fontWeight: 500,
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Download Resume Card */}
            <motion.a
              href="/assets/Resume.pdf"
              download="Suresh_Kumar_S_Resume.pdf"
              className="glass rounded-3xl p-8 block group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
              style={{ 
                textDecoration: "none",
                border: "1px solid rgba(99, 102, 241, 0.3)",
              }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: "radial-gradient(circle at center, rgba(99, 102, 241, 0.2), transparent)",
                }}
              />
              
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "#F1F5F9",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Download Resume
                  </h3>
                  <p style={{ fontSize: "0.938rem", color: "#94a3b8" }}>
                    Get my complete work history and qualifications
                  </p>
                </div>
                <motion.div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #6366F1, #22D3EE)",
                    boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)",
                  }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconDownload size={28} color="#F1F5F9" stroke={2} />
                </motion.div>
              </div>
            </motion.a>

            {/* Current Role Info */}
            <motion.div 
              className="glass rounded-3xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              style={{
                border: "1px solid rgba(99, 102, 241, 0.3)",
              }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #6366F1, #22D3EE)",
                    boxShadow: "0 8px 25px rgba(99, 102, 241, 0.3)",
                  }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <IconBriefcase size={22} color="#F1F5F9" stroke={2} />
                </motion.div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: 600,
                      color: "#F1F5F9",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Currently at OpenText
                  </h3>
                  <p style={{ fontSize: "0.938rem", color: "#94a3b8", lineHeight: 1.7 }}>
                    Software Engineer II, working on enterprise frontend solutions with React and TypeScript. Looking for new challenges and growth opportunities.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
