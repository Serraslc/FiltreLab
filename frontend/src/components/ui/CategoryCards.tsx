"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    href: "/kadin",
    label: "Kadın",
    emoji: "👗",
    description: "Elbise, bluz, pantolon ve daha fazlası",
    gradient: "from-pink-500/15 via-fuchsia-500/10 to-purple-500/15",
    border: "border-pink-400/20 hover:border-pink-400/40",
    badge: "bg-pink-500/10 text-pink-500 dark:text-pink-400",
    arrow: "text-pink-400",
  },
  {
    href: "/erkek",
    label: "Erkek",
    emoji: "👔",
    description: "Gömlek, pantolon, spor giyim ve aksesuar",
    gradient: "from-blue-500/15 via-cyan-500/10 to-indigo-500/15",
    border: "border-blue-400/20 hover:border-blue-400/40",
    badge: "bg-blue-500/10 text-blue-500 dark:text-blue-400",
    arrow: "text-blue-400",
  },
  {
    href: "/aksesuar",
    label: "Aksesuar",
    emoji: "💎",
    description: "Çanta, saat, takı ve stil tamamlayıcıları",
    gradient: "from-amber-500/15 via-yellow-500/10 to-orange-500/15",
    border: "border-amber-400/20 hover:border-amber-400/40",
    badge: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    arrow: "text-amber-400",
  },
];

export function CategoryCards() {
  return (
    <section className="w-full py-16 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-10 flex items-end justify-between"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
              Kategorilere Göz At
            </h2>
            <p className="mt-2 text-[15px] text-gray-500 dark:text-gray-400">
              Hangi kategoride alışveriş yapıyorsun?
            </p>
          </div>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={cat.href}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border ${cat.border} bg-gradient-to-br ${cat.gradient} p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.10)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.40)]`}
              >
                {/* Emoji */}
                <span className="mb-6 block text-5xl leading-none">{cat.emoji}</span>

                <div>
                  <span className={`mb-3 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest ${cat.badge}`}>
                    {cat.label}
                  </span>
                  <p className="text-[15px] leading-6 text-gray-600 dark:text-gray-300">{cat.description}</p>
                </div>

                <div className={`mt-6 flex items-center gap-1.5 text-sm font-semibold ${cat.arrow} transition-transform duration-300 group-hover:translate-x-1`}>
                  Keşfet
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
