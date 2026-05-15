# FiltreLab 🚀

**FiltreLab**, hackathon için tasarlanmış, e-ticaret alışverişlerinde kullanıcılara rehberlik eden yapay zeka destekli bir alışveriş analiz asistanıdır. Kullanıcıların Trendyol, Hepsiburada, Amazon vb. platformlardan aldıkları ürün linklerini analiz ederek, sahte yorumları tespit eder, iade riskini hesaplar ve dürtüsel alışverişlere karşı psikolojik analizler sunar.

## Özellikler ✨

- **Dinamik Kategori Tespiti:** Ürün linkinden (URL) otomatik olarak Kozmetik, Elektronik, Laptop, Telefon, Ayakkabı, Çanta, Saat veya Kahve Makinesi gibi kategorileri tespit eder.
- **Sahte Yorum Analizi:** Bot hesaplar ve sahte övgüleri tarayarak risk skoru çıkarır.
- **İade Olasılığı Tahmini:** Ürünün kullanım şikayetlerine dayanarak iade oranlarını hesaplar.
- **Alışveriş Davranışı Analizi (Psikoloji):** Kullanıcıyı indirim baskısına veya gereksiz lüks harcamalara karşı uyarır.
- **Modern ve Fütüristik Arayüz:** Next.js, TailwindCSS ve Framer Motion ile tasarlanmış karanlık mod ve neon vurgulu cam efekti (glassmorphism) kullanan premium bir tasarım.
- **Nihai Karar Motoru:** Tüm verileri işleyerek ürüne dinamik olarak **ALINABİLİR**, **BEKLE** veya **ÖNERİLMEZ** kararı verir.

## Teknolojiler 🛠

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Stil:** [Tailwind CSS](https://tailwindcss.com/)
- **Animasyon:** [Framer Motion](https://www.framer.com/motion/)
- **İkonlar:** [Lucide React](https://lucide.dev/)
- **Dil:** TypeScript

## Kurulum ve Çalıştırma 💻

Projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyin:

1. Depoyu klonlayın veya proje dosyalarını indirin.
2. Terminali açın ve proje dizinine gidin:
   ```bash
   cd shopwise-ai
   ```
3. Gerekli bağımlılıkları yükleyin:
   ```bash
   npm install
   ```
4. Geliştirme sunucusunu başlatın:
   ```bash
   npm run dev
   ```
5. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine giderek projeyi görüntüleyin.

## Nasıl Test Edilir? 🧪

Ana sayfadaki arama çubuğuna çeşitli e-ticaret linkleri yapıştırın. Sistem dinamik olarak anahtar kelimeleri yakalayacaktır:

- İçinde `laptop` veya `macbook` geçen bir link: **Laptop** analizi çıkarır.
- İçinde `kulaklik` veya `airpods` geçen bir link: **Kulaklık** analizi çıkarır.
- İçinde `serum`, `tonik` veya `kozmetik` geçen bir link: **Kozmetik** analizi çıkarır.
- Herhangi bir kategoriyle eşleşmeyen rastgele bir link: Nötr bir **"Genel Ürün Analizi"** sunar.

Her denemenizde sistem skorları ve analiz yorumlarını **rastgele ve gerçekçi (dinamik)** bir biçimde üreterek uygulamanın yapay zeka entegre edilmiş gibi hissettirmesini sağlar!
