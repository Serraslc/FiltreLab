"use client";

import { motion } from "framer-motion";
import { Link2, BrainCircuit, Trophy } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Link2,
    title: "Link Yapıştır",
    description: "Trendyol, Hepsiburada veya Amazon'dan beğendiğin ürünün linkini kopyala ve yapıştır.",
    color: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/20",
    iconColor: "text-cyan-400",
    numColor: "text-cyan-500/30",
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "AI Analiz Eder",
    description: "Yapay zeka fiyat geçmişini, satıcı güvenilirliğini ve kullanıcı uygunluk skorunu saniyeler içinde hesaplar.",
    color: "from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/20",
    iconColor: "text-purple-400",
    numColor: "text-purple-500/30",
  },
  {
    number: "03",
    icon: Trophy,
    title: "En İyi Ürünü Bul",
    description: "Sana özel filtrelenmiş sonuçlarla en ideal seçim doğrudan karşına gelir, karar vermek artık çok kolay.",
    color: "from-fuchsia-500/20 to-fuchsia-500/5",
    border: "border-fuchsia-500/20",
    iconColor: "text-fuchsia-400",
    numColor: "text-fuchsia-500/30",
  },
];

export function HowItWorks() {
  return (
    <section className="relative w-full py-24 px-6 overflow-hidden">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-purple-500/8 blur-3xl dark:bg-purple-500/12" />
        <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-cyan-500/8 blur-3xl dark:bg-cyan-500/12" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/25 bg-purple-500/10 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-purple-400 dark:text-purple-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
            Nasıl Çalışır?
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl">
            3 adımda akıllı alışveriş
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-7 text-gray-500 dark:text-gray-400">
            FiltreLAB ile doğru ürüne ulaşmak hiç bu kadar hızlı olmamıştı.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid gap-6 md:grid-cols-3">
          {/* Connector line (desktop only) */}
          <div className="pointer-events-none absolute left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] top-[3.25rem] hidden h-px bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-fuchsia-500/20 md:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-3xl border ${step.border} bg-gradient-to-b ${step.color} p-8 backdrop-blur-sm dark:bg-opacity-50`}
            >
              {/* Big number */}
              <span className={`absolute right-6 top-4 text-7xl font-black leading-none select-none ${step.numColor}`}>
                {step.number}
              </span>

              {/* Icon circle */}
              <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${step.border} bg-white/60 dark:bg-white/5 shadow-sm`}>
                <step.icon className={`h-5 w-5 ${step.iconColor}`} strokeWidth={1.8} />
              </div>

              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
              <p className="text-[15px] leading-7 text-gray-500 dark:text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
