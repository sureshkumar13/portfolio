import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { IconTrendingUp, IconClock, IconTarget, IconAward } from "@tabler/icons-react";

export function Achievements() {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [80, 0, 0, -80]);

  const achievements = [
    {
      icon: IconTrendingUp,
      value: 25,
      suffix: "%",
      label: "User Engagement Increase",
      color: "#6366F1",
      description: "Through UI/UX optimization",
    },
    {
      icon: IconClock,
      value: 95,
      suffix: "%",
      label: "System Uptime",
      color: "#22D3EE",
      description: "For critical applications",
    },
    {
      icon: IconTarget,
      value: 99.99,
      suffix: "%",
      label: "Application Availability",
      color: "#A5B4FC",
      description: "Industry-leading reliability",
    },
    {
      icon: IconAward,
      value: 5,
      suffix: "+",
      label: "Years Experience",
      color: "#818cf8",
      description: "Building modern web apps",
    },
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-32"
      id="achievements"
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
            Achievements
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
            Delivering measurable impact through exceptional frontend engineering
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function AchievementCard({
  achievement,
  index,
}: {
  achievement: any;
  index: number;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const stepValue = achievement.value / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            if (currentStep <= steps) {
              setCount(Math.min(stepValue * currentStep, achievement.value));
            } else {
              clearInterval(timer);
              setCount(achievement.value);
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [hasAnimated, achievement.value]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -15, scale: 1.05, rotateY: 5 }}
      className="glass rounded-3xl p-8 relative overflow-hidden group"
      style={{
        border: `1px solid ${achievement.color}30`,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle at center, ${achievement.color}30, transparent)`,
        }}
      />

      {/* Pulsing glow effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at center, ${achievement.color}15, transparent)`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 text-center">
        {/* Icon */}
        <motion.div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
          style={{
            background: `linear-gradient(135deg, ${achievement.color}, ${achievement.color}cc)`,
            boxShadow: `0 10px 40px ${achievement.color}40`,
          }}
          whileHover={{ rotate: 360, scale: 1.15 }}
          transition={{ duration: 0.8 }}
        >
          <achievement.icon size={28} color="#F1F5F9" stroke={2} />
        </motion.div>

        {/* Counter */}
        <div className="mb-3">
          <motion.span
            style={{
              fontSize: "3.5rem",
              fontWeight: 800,
              background: `linear-gradient(135deg, ${achievement.color}, #F1F5F9)`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1,
            }}
          >
            {count.toFixed(achievement.value % 1 !== 0 ? 2 : 0)}
          </motion.span>
          <span
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              color: achievement.color,
            }}
          >
            {achievement.suffix}
          </span>
        </div>

        {/* Label */}
        <h3
          style={{
            fontSize: "1.125rem",
            fontWeight: 600,
            marginBottom: "0.5rem",
            color: "#F1F5F9",
          }}
        >
          {achievement.label}
        </h3>

        {/* Description */}
        <p style={{ fontSize: "0.875rem", color: "#94a3b8" }}>
          {achievement.description}
        </p>
      </div>

      {/* Decorative corner accent */}
      <motion.div
        className="absolute top-0 right-0 w-24 h-24 rounded-full"
        style={{
          background: `radial-gradient(circle, ${achievement.color}20, transparent)`,
          transform: "translate(50%, -50%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.5,
        }}
      />

      {/* Border glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          border: `2px solid ${achievement.color}`,
          opacity: 0,
        }}
        whileHover={{ opacity: 0.6 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
