import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";
import { IconSchool, IconCalendar, IconMapPin } from "@tabler/icons-react";

export function Education() {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [80, 0, 0, -80]);
  const scale = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-32"
      id="education"
    >
      <motion.div 
        className="max-w-4xl w-full"
        style={{ opacity, y, scale }}
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
            Education
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
          initial={{ opacity: 0, y: 80, rotateX: -20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ y: -10, scale: 1.02, rotateX: 2 }}
          className="glass rounded-3xl p-10 md:p-12 relative overflow-hidden group"
          style={{
            border: "1px solid rgba(99, 102, 241, 0.3)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background:
                "radial-gradient(circle at top right, rgba(99, 102, 241, 0.15), rgba(34, 211, 238, 0.1), transparent)",
            }}
          />

          {/* Floating decorative elements */}
          <motion.div
            className="absolute top-10 right-10 w-32 h-32 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(99, 102, 241, 0.2), transparent)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="absolute bottom-10 left-10 w-24 h-24 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(34, 211, 238, 0.2), transparent)",
            }}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [360, 180, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <div className="relative z-10">
            {/* Icon */}
            <motion.div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8"
              style={{
                background: "linear-gradient(135deg, #6366F1, #22D3EE)",
                boxShadow: "0 20px 60px rgba(99, 102, 241, 0.3)",
              }}
              whileHover={{ rotate: 360, scale: 1.15 }}
              transition={{ duration: 0.8 }}
            >
              <IconSchool size={36} color="#F1F5F9" stroke={2} />
            </motion.div>

            {/* Degree */}
            <motion.h3
              className="text-center mb-2"
              style={{
                fontSize: "2rem",
                fontWeight: 700,
                color: "#F1F5F9",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Bachelor of Engineering
            </motion.h3>

            <motion.p
              className="text-center mb-6"
              style={{
                fontSize: "1.25rem",
                color: "#94a3b8",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Engineering
            </motion.p>

            {/* University */}
            <motion.h4
              className="text-center mb-8"
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                background: "linear-gradient(135deg, #6366F1, #22D3EE)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              RV College of Engineering
            </motion.h4>

            {/* Details */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(99, 102, 241, 0.2)",
                    border: "1px solid rgba(99, 102, 241, 0.3)",
                  }}
                >
                  <IconCalendar size={22} color="#6366F1" stroke={2} />
                </div>
                <div>
                  <p style={{ fontSize: "0.813rem", color: "#94a3b8" }}>Duration</p>
                  <p style={{ fontSize: "1rem", fontWeight: 600, color: "#F1F5F9" }}>
                    2015 - 2019
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(34, 211, 238, 0.2)",
                    border: "1px solid rgba(34, 211, 238, 0.3)",
                  }}
                >
                  <IconMapPin size={22} color="#22D3EE" stroke={2} />
                </div>
                <div>
                  <p style={{ fontSize: "0.813rem", color: "#94a3b8" }}>Location</p>
                  <p style={{ fontSize: "1rem", fontWeight: 600, color: "#F1F5F9" }}>
                    Bangalore, India
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Additional info */}
            <motion.div
              className="glass rounded-2xl p-6 text-center"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(99, 102, 241, 0.2)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              whileHover={{ backgroundColor: "rgba(99, 102, 241, 0.05)" }}
            >
              <p style={{ fontSize: "0.938rem", color: "#cbd5e1", lineHeight: 1.7 }}>
                Built a strong foundation in computer science, software engineering principles,
                and modern development practices. Specialized in web technologies and user
                interface design.
              </p>
            </motion.div>
          </div>

          {/* Border glow on hover */}
          <motion.div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              border: "2px solid transparent",
              backgroundImage: "linear-gradient(135deg, #6366F1, #22D3EE)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              opacity: 0,
            }}
            whileHover={{ opacity: 0.5 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
