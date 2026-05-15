"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag, Zap, ShieldAlert, Sparkles, Play } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatedCard } from "@/components/ui/AnimatedCard";

export default function Home() {
  const [url, setUrl] = useState("");
  const router = useRouter();

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    router.push(`/dashboard?url=${encodeURIComponent(url)}`);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[var(--neon-blue)] opacity-20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[var(--neon-purple)] opacity-20 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl w-full text-center z-10"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-[var(--neon-blue)]" />
          <span className="text-sm font-medium text-gray-300">Yapay zeka destekli alışveriş analizi</span>
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            Filtre
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] neon-text-blue">
            LAB
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          FiltreLab, ürün yorumlarını, sahte yorum riskini, iade olasılığını ve fiyat/performans dengesini analiz ederek daha bilinçli alışveriş kararları vermeni sağlar.
        </p>

        <form onSubmit={handleAnalyze} className="relative max-w-2xl mx-auto mb-6 group">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] opacity-30 blur-xl rounded-full group-hover:opacity-50 transition-opacity duration-500" />
          <div className="relative flex items-center bg-[var(--bg-card)] border border-white/10 rounded-full p-2 shadow-2xl backdrop-blur-xl">
            <Search className="w-6 h-6 text-gray-400 ml-4" />
            <input
              type="url"
              placeholder="Ürün linkini buraya yapıştırın..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              className="flex-1 bg-transparent border-none outline-none text-white px-4 py-4 text-lg placeholder:text-gray-500"
            />
            <button
              type="submit"
              className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors duration-200 flex items-center whitespace-nowrap"
            >
              Ürünü Analiz Et
              <Zap className="w-5 h-5 ml-2" />
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center mb-20">
          <button className="text-gray-400 hover:text-white flex items-center transition-colors">
            <Play className="w-5 h-5 mr-2" />
            Demo İzle
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <AnimatedCard delay={0.4}>
            <ShieldAlert className="w-8 h-8 text-[var(--neon-pink)] mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Sahte Yorum Tespiti</h3>
            <p className="text-gray-400 text-sm">Yapay zeka binlerce yorumu tarar ve bot hesapları, sahte övgüleri anında tespit eder.</p>
          </AnimatedCard>
          <AnimatedCard delay={0.5}>
            <ShoppingBag className="w-8 h-8 text-[var(--neon-blue)] mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">İade Riski Tahmini</h3>
            <p className="text-gray-400 text-sm">Ürünün dayanıklılık ve kullanım şikayetlerine dayanarak iade olasılığını önceden hesaplar.</p>
          </AnimatedCard>
          <AnimatedCard delay={0.6}>
            <Zap className="w-8 h-8 text-[var(--neon-purple)] mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Alışveriş Davranışı Uyarısı</h3>
            <p className="text-gray-400 text-sm">Dürtüsel alışveriş tetikleyicilerini saptar ve daha rasyonel kararlar vermenize yardımcı olur.</p>
          </AnimatedCard>
        </div>
      </motion.div>
    </main>
  );
}
