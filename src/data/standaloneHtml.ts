export const STANDALONE_HTML_CODE = `<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ECOSYS — Workwear Essentials & Daily Apparel</title>
  <meta name="description" content="Workwear Essentials for a Better Tomorrow. Small Changes, Big Impact. Katalog resmi brand pakaian mahasiswa Ecosys." />
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Outfit:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            display: ['Outfit', 'sans-serif'],
            sans: ['Plus Jakarta Sans', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace'],
          },
          colors: {
            canvas: '#F4F1EA',
            surface: '#ECE8DF',
            charcoal: '#1A1A18',
            olive: '#464A3B',
            khaki: '#B4A182',
            sage: '#69725E',
            navy: '#1C2433',
          }
        }
      }
    }
  </script>
  <style>
    .bubble-logo {
      font-family: 'Outfit', sans-serif;
      font-weight: 800;
      letter-spacing: 0.05em;
      color: #EAE4D8;
      text-shadow: 0 2px 0 #D5CFC4, 0 4px 0 #B8B0A0, 0 10px 24px rgba(0,0,0,0.85);
    }
  </style>
</head>
<body class="bg-canvas text-charcoal font-sans antialiased selection:bg-olive selection:text-canvas">

  <!-- 1. HEADER / NAVIGASI -->
  <header class="sticky top-0 z-40 bg-canvas/95 backdrop-blur-md border-b border-[#DCD6C8]">
    <div class="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-8">
      <a href="#beranda" class="font-display text-2xl font-extrabold tracking-widest text-charcoal whitespace-nowrap shrink-0">ECOSYS</a>
      <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-[#4A4943]">
        <a href="#beranda" class="hover:text-charcoal transition-colors whitespace-nowrap shrink-0">Beranda</a>
        <a href="#katalog" class="hover:text-charcoal transition-colors whitespace-nowrap shrink-0">Katalog</a>
        <a href="#tentang" class="hover:text-charcoal transition-colors whitespace-nowrap shrink-0">Tentang Kami</a>
        <a href="#kontak" class="hover:text-charcoal transition-colors whitespace-nowrap shrink-0">Kontak</a>
      </nav>
      <div class="flex items-center gap-3 shrink-0">
        <a href="https://id.shp.ee/11Z9X7Uo" target="_blank" rel="noopener noreferrer" class="px-4 py-2 text-xs sm:text-sm font-semibold text-canvas bg-charcoal hover:bg-olive rounded-lg transition-colors whitespace-nowrap shrink-0">
          Belanja di Shopee
        </a>
      </div>
    </div>
  </header>

  <!-- 2. HERO SECTION -->
  <section id="beranda" class="py-12 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
      <!-- Left Column: Copy & CTA -->
      <div class="lg:col-span-7 flex flex-col justify-between py-2">
        <div>
          <p class="text-xs font-mono tracking-wider uppercase text-olive mb-4">Koleksi Esensial Mahasiswa · Earth-Tone Series</p>
          <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal leading-[1.08] mb-6">
            Workwear Essentials for a Better Tomorrow.
          </h1>
          <p class="text-base sm:text-lg text-[#4A4943] leading-relaxed max-w-2xl mb-4">
            <strong class="text-charcoal font-semibold">Small Changes, Big Impact.</strong> Dirancang khusus untuk ritme harian mahasiswa yang mengutamakan kerapian, material katun tebal bernapas, serta siluet kasual berkelas dari ruang kuliah hingga studio.
          </p>
          <div class="text-xs text-[#5C5A53] flex flex-wrap items-center gap-2 mb-8">
            <span>Cotton Twill 280 GSM</span>
            <span>·</span>
            <span>100% Cotton Oxford</span>
            <span>·</span>
            <span>Garment Washed</span>
            <span>·</span>
            <span>Less Waste, More Tomorrow</span>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-3.5 pt-2">
          <a href="https://id.shp.ee/11Z9X7Uo" target="_blank" rel="noopener noreferrer" class="px-6 py-3.5 bg-charcoal text-canvas text-sm font-semibold rounded-lg hover:bg-olive transition-colors whitespace-nowrap">
            Beli via Shopee Official
          </a>
          <a href="https://wa.me/6285815921255?text=Halo%20Ecosys,%20saya%20ingin%20bertanya%20tentang%20katalog%20produk" target="_blank" rel="noopener noreferrer" class="px-6 py-3.5 border border-charcoal text-charcoal text-sm font-semibold rounded-lg hover:bg-surface transition-colors whitespace-nowrap">
            WhatsApp (+62 858-1592-1255)
          </a>
          <a href="https://www.tiktok.com/@ecosys39?_r=1&_t=ZS-9ARm5ttfoBR" target="_blank" rel="noopener noreferrer" class="px-5 py-3.5 border border-[#C8C1B2] bg-surface text-charcoal text-sm font-semibold rounded-lg hover:bg-charcoal hover:text-canvas transition-colors whitespace-nowrap">
            TikTok @ecosys39
          </a>
        </div>
      </div>

      <!-- Right Column: Iconic Black 3D Bubble Logo Card (Gambar 1) -->
      <div class="lg:col-span-5 bg-[#0A0A09] rounded-2xl p-10 sm:p-14 flex flex-col items-center justify-between text-center border border-[#262624] min-h-[340px]">
        <span class="text-[11px] font-mono tracking-widest text-[#8E8B82] uppercase">ECOSYS APPAREL STUDIO</span>
        <div class="my-auto py-8">
          <div class="bubble-logo text-5xl sm:text-6xl tracking-wider select-none">ECOSYS</div>
          <p class="mt-4 text-xs tracking-[0.22em] text-[#A5A198] uppercase">Small Changes, Big Impact</p>
        </div>
        <div class="w-full pt-4 border-t border-[#1F1F1D] flex items-center justify-between text-xs text-[#8E8B82]">
          <span>Less Waste, More Tomorrow</span>
          <span class="font-mono">@ecosys39</span>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. KATALOG PRODUK RESMI (Workshirt Series & Essential Shirt) -->
  <section id="katalog" class="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#DCD6C8]">
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
      <div>
        <p class="text-xs font-mono uppercase tracking-wider text-olive mb-2">01. Katalog Produk Resmi</p>
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-charcoal">Koleksi Esensial Ecosys</h2>
      </div>
      <p class="text-sm text-[#4A4943] max-w-md">
        Tersedia dalam palet warna earth-tone netral yang hangat, bersih, dan mudah dipadukan untuk aktivitas kampus sehari-hari.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Produk 1: Workshirt Series -->
      <article class="bg-surface border border-[#D8D2C5] rounded-xl overflow-hidden flex flex-col justify-between">
        <div class="p-6 sm:p-8">
          <div class="text-xs text-[#5C5A53] mb-2">Workshirt Series · Cotton Twill 280 GSM (Garment Washed)</div>
          <h3 class="font-display text-2xl font-bold text-charcoal mb-2">Workshirt Series — Vintage Modern</h3>
          <p class="text-sm text-[#4A4943] leading-relaxed mb-5">
            Mengadaptasi vibe workshirt ikonik ala Von Dutch dengan sentuhan minimalis khas Ecosys. Dilengkapi 2 saku dada berkancing, bordir logo oval dada kiri, tag samping clean, dan label leher minimalis.
          </p>
          <div class="mb-5">
            <p class="text-xs font-semibold text-charcoal mb-2">Pilihan Warna:</p>
            <div class="flex items-center gap-4 text-xs text-[#4A4943]">
              <span class="inline-flex items-center gap-1.5"><span class="w-4 h-4 rounded-full bg-[#464A3B] border border-black/20"></span>Olive Green</span>
              <span class="inline-flex items-center gap-1.5"><span class="w-4 h-4 rounded-full bg-[#B4A182] border border-black/20"></span>Khaki</span>
              <span class="inline-flex items-center gap-1.5"><span class="w-4 h-4 rounded-full bg-[#242523] border border-black/20"></span>Black</span>
            </div>
          </div>
          <ul class="text-xs text-[#3A3935] space-y-1.5 border-t border-[#D8D2C5] pt-4">
            <li>· Material: Cotton Twill 280 GSM (Garment Washed)</li>
            <li>· Fit: Boxy Relaxed Fit (Lengan Pendek)</li>
            <li>· Detail: Saku dada kancing, bordir oval, label leher & tag samping</li>
          </ul>
        </div>
        <div class="px-6 sm:px-8 py-4 bg-[#E5E0D5] border-t border-[#D8D2C5] flex items-center justify-between">
          <span class="font-mono font-semibold text-base text-charcoal">Rp 189.000</span>
          <a href="https://id.shp.ee/11Z9X7Uo" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 bg-charcoal text-canvas text-xs font-semibold rounded-lg hover:bg-olive transition-colors">
            Pesan Sekarang
          </a>
        </div>
      </article>

      <!-- Produk 2: Essential Shirt -->
      <article class="bg-surface border border-[#D8D2C5] rounded-xl overflow-hidden flex flex-col justify-between">
        <div class="p-6 sm:p-8">
          <div class="text-xs text-[#5C5A53] mb-2">Essential Shirt · Cotton Oxford (100% Cotton)</div>
          <h3 class="font-display text-2xl font-bold text-charcoal mb-2">Essential Shirt — Clean Look</h3>
          <p class="text-sm text-[#4A4943] leading-relaxed mb-5">
            Desain klasik lengan panjang dengan sentuhan modern terinspirasi style Lacoste. Lembut, adem, breathable, dengan detail kerah button-down, kancing senada, dan logo bordir minimalis ecosys.
          </p>
          <div class="mb-5">
            <p class="text-xs font-semibold text-charcoal mb-2">Pilihan Warna:</p>
            <div class="flex items-center gap-4 text-xs text-[#4A4943]">
              <span class="inline-flex items-center gap-1.5"><span class="w-4 h-4 rounded-full bg-[#EAE6DF] border border-black/20"></span>Off White</span>
              <span class="inline-flex items-center gap-1.5"><span class="w-4 h-4 rounded-full bg-[#69725E] border border-black/20"></span>Sage Green</span>
              <span class="inline-flex items-center gap-1.5"><span class="w-4 h-4 rounded-full bg-[#1C2433] border border-black/20"></span>Navy Blue</span>
            </div>
          </div>
          <ul class="text-xs text-[#3A3935] space-y-1.5 border-t border-[#D8D2C5] pt-4">
            <li>· Material: Cotton Oxford (100% Cotton) Breathable</li>
            <li>· Fit: Regular Fit (Lengan Panjang)</li>
            <li>· Detail: Kerah button-down, saku dada, bordir minimalis</li>
          </ul>
        </div>
        <div class="px-6 sm:px-8 py-4 bg-[#E5E0D5] border-t border-[#D8D2C5] flex items-center justify-between">
          <span class="font-mono font-semibold text-base text-charcoal">Rp 179.000</span>
          <a href="https://id.shp.ee/11Z9X7Uo" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 bg-charcoal text-canvas text-xs font-semibold rounded-lg hover:bg-olive transition-colors">
            Pesan Sekarang
          </a>
        </div>
      </article>
    </div>
  </section>

  <!-- 4. TENTANG KAMI & KONTAK -->
  <section id="tentang" class="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#DCD6C8]">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <p class="text-xs font-mono uppercase tracking-wider text-olive mb-2">02. Filosofi Brand</p>
        <h2 class="font-display text-3xl font-bold text-charcoal mb-4">Less Waste, More Tomorrow.</h2>
        <p class="text-sm sm:text-base text-[#4A4943] leading-relaxed mb-4">
          ECOSYS lahir dari gagasan sederhana: mahasiswa membutuhkan pakaian harian yang rapi, tahan lama, dan tidak lekang oleh tren musiman. Dengan material pilihan seperti Cotton Twill 280 GSM dan 100% Cotton Oxford, setiap potong kemeja dirancang untuk menemani perjalanan akademik hingga profesional.
        </p>
      </div>
      <div id="kontak" class="bg-surface border border-[#D8D2C5] rounded-xl p-8">
        <h3 class="font-display text-xl font-bold text-charcoal mb-2">Pemesanan & Sosial Media Resmi</h3>
        <p class="text-sm text-[#4A4943] mb-6">
          Klik tombol di bawah untuk pemesanan langsung melalui toko resmi Shopee Ecosys, konsultasi via WhatsApp, atau ikuti konten terbaru kami di TikTok.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <a href="https://id.shp.ee/11Z9X7Uo" target="_blank" rel="noopener noreferrer" class="text-center px-4 py-3 bg-charcoal text-canvas text-xs sm:text-sm font-semibold rounded-lg hover:bg-olive transition-colors">
            Shopee Official
          </a>
          <a href="https://wa.me/6285815921255" target="_blank" rel="noopener noreferrer" class="text-center px-4 py-3 border border-charcoal text-charcoal text-xs sm:text-sm font-semibold rounded-lg hover:bg-canvas transition-colors">
            WA: +62 858-1592-1255
          </a>
          <a href="https://www.tiktok.com/@ecosys39?_r=1&_t=ZS-9ARm5ttfoBR" target="_blank" rel="noopener noreferrer" class="text-center px-4 py-3 border border-charcoal text-charcoal text-xs sm:text-sm font-semibold rounded-lg hover:bg-canvas transition-colors">
            TikTok @ecosys39
          </a>
        </div>
      </div>
    </div>
  </section>

  <footer class="border-t border-[#DCD6C8] py-8 px-4 sm:px-8 text-center text-xs text-[#5C5A53]">
    <p>© 2026 ECOSYS — Workwear Essentials for a Better Tomorrow. Small Changes, Big Impact.</p>
  </footer>
</body>
</html>`;
