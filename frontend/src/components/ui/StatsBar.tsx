"use client";

import { motion } from "framer-motion";
import { BarChart3, Users, Layers, ShieldCheck } from "lucide-react";

const stats = [
  { icon: BarChart3, value: "12.400+", label: "Ürün Analiz Edildi", color: "text-cyan-500 dark:text-cyan-400" },
  { icon: Users,     value: "4.800+",  label: "Mutlu Kullanıcı",    color: "text-purple-500 dark:text-purple-400" },
  { icon: Layers,    value: "3",        label: "Platform Destekleniyor", color: "text-fuchsia-500 dark:text-fuchsia-400" },
  { icon: ShieldCheck, value: "%94",   label: "Doğruluk Oranı",    color: "text-emerald-500 dark:text-emerald-400" },
];

export function StatsBar() {
  return (
    <section className="w-full border-y border-gray-200/60 dark:border-white/8 bg-white/50 dark:bg-white/[0.03] backdrop-blur-sm px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-2 text-center"
            >
              <div className={`mb-1 ${stat.color}`}>
                <stat.icon className="h-5 w-5" strokeWidth={1.8} />
              </div>
              <span className="text-3xl font-black tracking-tight text-gray-900 dark:text-white md:text-4xl">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
