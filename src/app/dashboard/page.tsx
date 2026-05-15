"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { simulateAIAnalysis, type AIAnalysisResult } from "@/lib/mockAi";
import { ScanTimeline } from "@/components/ui/ScanTimeline";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { FinalVerdict } from "@/components/ui/FinalVerdict";
import { ShieldAlert, PackageX, BrainCircuit, ArrowLeft, Star, TrendingUp, Zap, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function DashboardContent() {
  const searchParams = useSearchParams();
  const url = searchParams.get("url") || "";

  const [isScanning, setIsScanning] = useState(true);
  const [result, setResult] = useState<AIAnalysisResult | null>(null);
  
  type StepStatus = "pending" | "scanning" | "completed";
  const [timelineSteps, setTimelineSteps] = useState<{id: number, message: string, status: StepStatus}[]>([
    { id: 1, message: "Ürün linki inceleniyor...", status: "pending" },
    { id: 2, message: "Yorumlar analiz ediliyor...", status: "pending" },
    { id: 3, message: "Sahte yorum kalıpları aranıyor...", status: "pending" },
    { id: 4, message: "İade riski hesaplanıyor...", status: "pending" },
    { id: 5, message: "Alternatif ürünler karşılaştırılıyor...", status: "pending" },
    { id: 6, message: "Nihai karar oluşturuluyor...", status: "pending" }
  ]);

  useEffect(() => {
    let mounted = true;
    
    const runAnalysis = async () => {
      const data = await simulateAIAnalysis(url, (stepIndex) => {
        if (!mounted) return;
        setTimelineSteps(prev => prev.map((step, idx) => {
          if (idx < stepIndex) return { ...step, status: "completed" };
          if (idx === stepIndex) return { ...step, status: "scanning" };
          return step;
        }));
      });
      
      if (mounted) {
        setResult(data);
        setTimeout(() => setIsScanning(false), 800); // Small delay to let the user see all completed
      }
    };

    runAnalysis();

    return () => { mounted = false; };
  }, [url]);

  if (isScanning) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[var(--bg-card)] border border-white/10 rounded-3xl p-12 w-full max-w-2xl shadow-2xl backdrop-blur-xl"
        >
          <div className="text-center mb-12">
            <BrainCircuit className="w-16 h-16 text-[var(--neon-blue)] mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl font-bold mb-2">FiltreLab Analiz Motoru Devrede</h2>
            <p className="text-gray-400">Bu ürün için binlerce veri noktası analiz ediliyor...</p>
          </div>
          <ScanTimeline steps={timelineSteps} />
        </motion.div>
      </div>
    );
  }

  if (!result) return null;

  return (
    <div className="min-h-screen p-6 md:p-12 relative">
      {/* Abstract Background */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[var(--neon-purple)] opacity-10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-[var(--neon-blue)] opacity-10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Aramaya Dön
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Product Info */}
          <div className="lg:col-span-4 space-y-6">
            <AnimatedCard className="p-0 overflow-hidden" delay={0.1}>
              <div className="relative h-64 w-full">
                <Image src={result.image} alt={result.productName} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 leading-tight">{result.productName}</h2>
                <div className="text-3xl font-black text-[var(--neon-blue)] neon-text-blue">{result.price}</div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2} className="bg-gradient-to-br from-gray-900 to-black border-[var(--neon-blue)]/20">
              <div className="flex items-center mb-4">
                <BrainCircuit className="w-6 h-6 text-[var(--neon-blue)] mr-3" />
                <h3 className="text-lg font-bold">Alışveriş Davranışı Analizi</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                {result.psychologyWarning}
              </p>
            </AnimatedCard>
          </div>

          {/* Right Column: Analytics & Verdict */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Top row analytics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatedCard delay={0.3}>
                <div className="flex items-center mb-6">
                  <ShieldAlert className="w-6 h-6 text-[var(--neon-pink)] mr-3" />
                  <h3 className="text-lg font-bold">Sahte Yorum Riski</h3>
                </div>
                <div className="flex items-end mb-4">
                  <span className="text-5xl font-black">%{result.fakeReviewRisk}</span>
                  <span className="text-gray-400 ml-2 mb-1">risk skoru</span>
                </div>
                <ProgressBar value={result.fakeReviewRisk} color={result.fakeReviewRisk > 50 ? "var(--neon-pink)" : "var(--neon-green)"} showValue={false} />
                <p className="text-sm text-gray-400 mt-4">{result.fakeReviewExplanation}</p>
              </AnimatedCard>

              <AnimatedCard delay={0.4}>
                <div className="flex items-center mb-6">
                  <PackageX className="w-6 h-6 text-[var(--neon-purple)] mr-3" />
                  <h3 className="text-lg font-bold">İade Olasılığı</h3>
                </div>
                <div className="flex items-end mb-4">
                  <span className="text-5xl font-black text-[var(--neon-purple)]">{result.returnProbability}</span>
                </div>
                <ProgressBar value={result.returnProbability === "Yüksek" ? 85 : result.returnProbability === "Orta" ? 50 : 15} color="var(--neon-purple)" showValue={false} />
                <p className="text-sm text-gray-400 mt-4">{result.returnReasonExplanation}</p>
              </AnimatedCard>
            </div>

            {/* Middle row scores */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AnimatedCard delay={0.5} className="flex flex-col items-center justify-center text-center p-4">
                <Star className="w-8 h-8 text-yellow-500 mb-2" />
                <div className="text-3xl font-bold">{result.trustScore}/100</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Güven Skoru</div>
              </AnimatedCard>
              
              <AnimatedCard delay={0.6} className="flex flex-col items-center justify-center text-center p-4">
                <TrendingUp className="w-8 h-8 text-[var(--neon-green)] mb-2" />
                <div className="text-3xl font-bold">{result.sentimentScore}/10</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Yorum Duygu Skoru</div>
              </AnimatedCard>

              <AnimatedCard delay={0.7} className="flex flex-col items-center justify-center text-center p-4">
                <Zap className="w-8 h-8 text-[var(--neon-blue)] mb-2" />
                <div className="text-3xl font-bold">{result.pricePerformanceScore}/10</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Fiyat / Performans</div>
              </AnimatedCard>
            </div>

            {/* Final Verdict */}
            <FinalVerdict decision={result.finalDecision} reason={result.decisionReason} />

            {/* Alternatives */}
            {result.betterAlternatives.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-8"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Sparkles className="w-5 h-5 text-[var(--neon-blue)] mr-2" />
                  Daha İyi Alternatif Bulundu
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {result.betterAlternatives.map((alt, i) => (
                    <AnimatedCard key={i} className="flex items-center p-4 gap-4 bg-white/5 border-white/10 hover:bg-white/10">
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <Image src={alt.image} alt={alt.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg">{alt.name}</h4>
                        <p className="text-sm text-[var(--neon-blue)] font-bold">{alt.price}</p>
                        <p className="text-sm text-gray-400 mt-1">{alt.reason}</p>
                      </div>
                    </AnimatedCard>
                  ))}
                </div>
              </motion.div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white">Yükleniyor...</div>}>
      <DashboardContent />
    </Suspense>
  );
}
