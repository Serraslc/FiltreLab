"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { cn } from "./AnimatedCard";

interface FinalVerdictProps {
  decision: "ALINABİLİR" | "BEKLE" | "ÖNERİLMEZ";
  reason: string;
}

export function FinalVerdict({ decision, reason }: FinalVerdictProps) {
  const config = {
    ALINABİLİR: {
      color: "var(--neon-green)",
      bg: "bg-green-500/10",
      border: "border-green-500/30",
      glow: "shadow-[0_0_30px_rgba(57,255,20,0.3)]",
      icon: CheckCircle,
      text: "ALINABİLİR",
    },
    BEKLE: {
      color: "#fbbf24", // Yellow/Orange for wait
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/30",
      glow: "shadow-[0_0_30px_rgba(251,191,36,0.3)]",
      icon: Clock,
      text: "BEKLE",
    },
    ÖNERİLMEZ: {
      color: "var(--neon-pink)", // or red #ef4444
      bg: "bg-red-500/10",
      border: "border-red-500/30",
      glow: "shadow-[0_0_30px_rgba(239,68,68,0.3)]",
      icon: AlertTriangle,
      text: "ÖNERİLMEZ",
    },
  };

  const { color, bg, border, glow, icon: Icon, text } = config[decision];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
      className={cn(
        "rounded-3xl p-8 flex flex-col items-center justify-center text-center border backdrop-blur-md",
        bg, border, glow
      )}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        className="mb-4"
      >
        <Icon className="w-16 h-16" style={{ color, filter: `drop-shadow(0 0 10px ${color})` }} />
      </motion.div>
      
      <h2 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-2">Nihai Karar</h2>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <span 
          className="text-5xl font-black tracking-tighter mb-4 block"
          style={{ color, textShadow: `0 0 20px ${color}` }}
        >
          {text}
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-gray-300 max-w-md mt-4 leading-relaxed"
      >
        {reason}
      </motion.p>
    </motion.div>
  );
}
