import { motion } from "motion/react";
import { IconBrandLinkedin, IconMail, IconHeart } from "@tabler/icons-react";

export function Footer() {
  const socialLinks = [
    {
      icon: IconBrandLinkedin,
      href: "https://www.linkedin.com/in/suresh-kumar-s-b05918144/",
      label: "LinkedIn",
      color: "#6366F1",
    },
    {
      icon: IconMail,
      href: "mailto:sureshkmr131097@gmail.com",
      label: "Email",
      color: "#A5B4FC",
    },
  ];

  return (
    <footer className="relative px-6 py-12 mt-32">
      {/* Gradient separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, #6366F1, #22D3EE, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl flex items-center justify-center glass"
              style={{
                border: `1px solid ${social.color}30`,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.1,
                backgroundColor: `${social.color}20`,
                boxShadow: `0 10px 30px ${social.color}30`,
              }}
              whileTap={{ scale: 0.9 }}
              aria-label={social.label}
            >
              <social.icon size={22} color={social.color} stroke={2} />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p
            className="flex items-center justify-center gap-2"
            style={{
              fontSize: "0.938rem",
              color: "#94a3b8",
            }}
          >
            Made with{" "}
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <IconHeart size={16} color="#ef4444" fill="#ef4444" />
            </motion.span>{" "}
            by Suresh Kumar S
          </p>
          <p
            style={{
              fontSize: "0.875rem",
              color: "#64748b",
              marginTop: "0.5rem",
            }}
          >
            © {new Date().getFullYear()} All rights reserved
          </p>
        </motion.div>

        {/* Decorative gradient orb */}
        <motion.div
          className="absolute bottom-0 left-1/2 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.1), transparent 70%)",
            filter: "blur(60px)",
            transform: "translate(-50%, 50%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </footer>
  );
}
