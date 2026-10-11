import React, { useState } from 'react';
import {
  ShoppingBag,
  MessageCircle,
  ArrowUpRight,
  Check,
  Copy,
  Ruler,
  SlidersHorizontal,
  Code2,
  Download,
  X,
  Menu,
  ChevronRight,
} from 'lucide-react';
import {
  PRODUCTS,
  ProductItem,
  SHOPEE_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
  TIKTOK_URL,
  TIKTOK_HANDLE,
  getWhatsAppUrl,
} from './data/catalogData';
import {
  EcosysBubbleLogoCard,
  TechnicalGarmentDiagram,
  TikTokIcon,
} from './components/EcosysDiagrams';
import { STANDALONE_HTML_CODE } from './data/standaloneHtml';

export default function App() {
  // Navigation & mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hero visual showcase mode: 'logo' (Image 1), 'workshirt' (Image 2), 'essential' (Image 3)
  const [heroShowcaseTab, setHeroShowcaseTab] = useState<'logo' | 'workshirt' | 'essential'>('logo');

  // Selected color variant per product card (Only 2 products: Workshirt Series & Essential Shirt)
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({
    'workshirt-series': 'olive-green',
    'essential-shirt': 'off-white',
  });

  // Selected size per product card
  const [selectedSizes, setSelectedSizes] = useState<Record<string, 'S' | 'M' | 'L' | 'XL'>>({
    'workshirt-series': 'L',
    'essential-shirt': 'L',
  });

  // Active product in the Deep-Dive Lookbook & Technical Blueprint Viewer
  const [activeBlueprintId, setActiveBlueprintId] = useState<'workshirt-series' | 'essential-shirt'>(
    'workshirt-series'
  );

  // Interactive Student Size Calculator state
  const [studentHeight, setStudentHeight] = useState<number>(172);
  const [studentWeight, setStudentWeight] = useState<number>(65);

  // Quick Order / Detail Modal state
  const [modalProduct, setModalProduct] = useState<ProductItem | null>(null);

  // Standalone HTML Code Viewer Modal state
  const [htmlModalOpen, setHtmlModalOpen] = useState(false);
  const [copiedHtml, setCopiedHtml] = useState(false);
  const [copiedWa, setCopiedWa] = useState(false);

  // Blueprint product
  const blueprintProduct =
    PRODUCTS.find((p) => p.id === activeBlueprintId) || PRODUCTS[0];
  const activeBlueprintColorId =
    selectedColors[blueprintProduct.id] || blueprintProduct.colors[0].id;
  const activeBlueprintColor =
    blueprintProduct.colors.find((c) => c.id === activeBlueprintColorId) ||
    blueprintProduct.colors[0];

  // Calculate recommended size for university students
  const getRecommendedSize = (h: number, w: number): { size: 'S' | 'M' | 'L' | 'XL'; reason: string } => {
    if (w < 58 && h < 168) {
      return {
        size: 'S',
        reason: 'Proporsi rapi dan pas di bahu untuk postur tubuh ramping.',
      };
    }
    if (w <= 69 && h <= 174) {
      return {
        size: 'M',
        reason: 'Potongan ideal untuk siluet clean casual yang nyaman dipakai kuliah seharian.',
      };
    }
    if (w <= 80 && h <= 181) {
      return {
        size: 'L',
        reason: 'Memberikan ruang gerak leluasa dan jatuh kain boxy/regular yang proporsional.',
      };
    }
    return {
      size: 'XL',
      reason: 'Ukuran ekstra lega pada dada dan bahu untuk siluet santai yang berkelas.',
    };
  };

  const sizeRecommendation = getRecommendedSize(studentHeight, studentWeight);

  const handleCopyWhatsApp = () => {
    navigator.clipboard.writeText(WHATSAPP_DISPLAY);
    setCopiedWa(true);
    setTimeout(() => setCopiedWa(false), 2000);
  };

  const handleCopyStandaloneHtml = () => {
    navigator.clipboard.writeText(STANDALONE_HTML_CODE);
    setCopiedHtml(true);
    setTimeout(() => setCopiedHtml(false), 2500);
  };

  const handleDownloadStandaloneHtml = () => {
    const blob = new Blob([STANDALONE_HTML_CODE], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ecosys-katalog-landing-page.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F1EA] text-[#1A1A18]">
      {/* =====================================================================
          1. HEADER / NAVIGASI (Strict 3-Zone Top Bar Contract)
      ===================================================================== */}
      <header className="sticky top-0 z-40 bg-[#F4F1EA]/95 backdrop-blur-md border-b border-[#DCD6C8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element, bold, clean, modern) */}
          <a
            href="#beranda"
            className="font-display text-2xl font-extrabold tracking-[0.14em] text-[#1A1A18] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#464A3B]"
          >
            ECOSYS
          </a>

          {/* Zone 2: 4 Single-line Navigation Links */}
          <nav
            aria-label="Navigasi Utama"
            className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4A4943]"
          >
            <a
              href="#beranda"
              className="hover:text-[#1A1A18] hover:underline underline-offset-8 decoration-[#464A3B] decoration-2 transition-colors whitespace-nowrap shrink-0"
            >
              Beranda
            </a>
            <a
              href="#katalog"
              className="hover:text-[#1A1A18] hover:underline underline-offset-8 decoration-[#464A3B] decoration-2 transition-colors whitespace-nowrap shrink-0"
            >
              Katalog
            </a>
            <a
              href="#tentang-kami"
              className="hover:text-[#1A1A18] hover:underline underline-offset-8 decoration-[#464A3B] decoration-2 transition-colors whitespace-nowrap shrink-0"
            >
              Tentang Kami
            </a>
            <a
              href="#kontak"
              className="hover:text-[#1A1A18] hover:underline underline-offset-8 decoration-[#464A3B] decoration-2 transition-colors whitespace-nowrap shrink-0"
            >
              Kontak
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action + Mobile Menu Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={SHOPEE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-[#F4F1EA] bg-[#1A1A18] hover:bg-[#464A3B] rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Shopee Official</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Buka menu navigasi"
              className="md:hidden p-2 text-[#1A1A18] hover:bg-[#E7E2D6] rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#F4F1EA] border-b border-[#DCD6C8] px-4 pt-2 pb-5 space-y-2">
            <a
              href="#beranda"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-[#1A1A18] border-b border-[#E5DFD3]"
            >
              Beranda
            </a>
            <a
              href="#katalog"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-[#1A1A18] border-b border-[#E5DFD3]"
            >
              Katalog Produk
            </a>
            <a
              href="#tentang-kami"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-[#1A1A18] border-b border-[#E5DFD3]"
            >
              Tentang Kami
            </a>
            <a
              href="#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-[#1A1A18]"
            >
              Kontak &amp; Sosial Media
            </a>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* =====================================================================
            2. HERO SECTION (Logo Timbul/Bubble Ecosys + Slogan + Direct CTAs)
        ===================================================================== */}
        <section
          id="beranda"
          className="max-w-[1280px] mx-auto px-4 sm:px-8 pt-8 sm:pt-14 pb-16 sm:pb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Column: Brand Narrative, Slogans & Direct CTAs */}
            <div className="lg:col-span-7 flex flex-col justify-between py-2">
              <div>
                {/* Unboxed quiet metadata */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#5A584F] mb-5">
                  <span>Koleksi Esensial Mahasiswa</span>
                  <span aria-hidden="true">·</span>
                  <span>Earth-Tone Capsule</span>
                  <span aria-hidden="true">·</span>
                  <span>Less Waste, More Tomorrow</span>
                </div>

                {/* Primary Slogan Headline */}
                <h1
                  className="font-display font-bold text-[#1A1A18] tracking-tight leading-[1.08] mb-5"
                  style={{
                    fontSize: 'clamp(2.25rem, 4.2vw, 3.75rem)',
                    textWrap: 'balance',
                  }}
                >
                  Workwear Essentials for a Better Tomorrow.
                </h1>

                {/* Secondary Slogan & Audience Positioning */}
                <p className="text-lg sm:text-xl font-display font-semibold text-[#464A3B] mb-4">
                  Small Changes, Big Impact.
                </p>

                <p className="text-sm sm:text-base text-[#4A4943] leading-relaxed max-w-[64ch] mb-8">
                  Dirancang untuk keseharian mahasiswa yang mengutamakan tampilan kasual, rapi, bersih, dan berkelas. Menggunakan material pilihan{' '}
                  <strong className="font-semibold text-[#1A1A18]">
                    Cotton Twill 280 GSM (Garment Washed)
                  </strong>{' '}
                  dan{' '}
                  <strong className="font-semibold text-[#1A1A18]">
                    100% Cotton Oxford
                  </strong>{' '}
                  dalam palet warna netral yang tahan lama dan nyaman dipakai dari ruang kuliah hingga aktivitas luar ruang.
                </p>
              </div>

              {/* Primary CTA Group: Shopee, WhatsApp & TikTok */}
              <div>
                <div className="flex flex-wrap items-center gap-3.5 mb-8">
                  <a
                    href={SHOPEE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#1A1A18] hover:bg-[#464A3B] text-[#F4F1EA] text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Belanja di Shopee</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <a
                    href={getWhatsAppUrl(
                      'Halo Admin Ecosys, saya tertarik dengan koleksi kemeja Ecosys (Workshirt Series / Essential Shirt). Boleh info stok ukuran yang tersedia?'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 bg-[#ECE8DF] hover:bg-[#DFD9CC] text-[#1A1A18] border border-[#C8C1B2] text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0"
                  >
                    <MessageCircle className="w-4 h-4 text-[#3D4A35]" />
                    <span>WhatsApp Resmi</span>
                  </a>

                  <a
                    href={TIKTOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#ECE8DF] hover:bg-[#1A1A18] hover:text-[#F4F1EA] text-[#1A1A18] border border-[#C8C1B2] text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0"
                  >
                    <TikTokIcon className="w-4 h-4" />
                    <span>TikTok {TIKTOK_HANDLE}</span>
                  </a>
                </div>

                {/* 2 Core Products Summary Strip */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#DCD6C8]">
                  <div>
                    <div className="font-mono-tabular text-xs text-[#68655B]">
                      PRODUK 01 · COTTON TWILL 280 GSM
                    </div>
                    <div className="font-display font-bold text-base text-[#1A1A18] mt-0.5">
                      Workshirt Series (Boxy Fit)
                    </div>
                    <div className="text-xs text-[#5A584F] mt-0.5">
                      Pilihan Warna: Olive Green · Khaki · Black
                    </div>
                  </div>
                  <div>
                    <div className="font-mono-tabular text-xs text-[#68655B]">
                      PRODUK 02 · 100% COTTON OXFORD
                    </div>
                    <div className="font-display font-bold text-base text-[#1A1A18] mt-0.5">
                      Essential Shirt (Regular Fit)
                    </div>
                    <div className="text-xs text-[#5A584F] mt-0.5">
                      Pilihan Warna: Off White · Sage Green · Navy Blue
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Iconic 3D Bubble Logo (Gambar 1) + Lookbook Switcher */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-[#ECE8DF] border border-[#D8D2C5] rounded-2xl p-4 sm:p-5">
              {/* Interactive Switcher for Hero Visual */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-medium text-[#5A584F]">
                  Identitas &amp; Lookbook
                </span>
                <div className="flex items-center gap-1 p-1 bg-[#DED9CD] rounded-lg">
                  <button
                    type="button"
                    onClick={() => setHeroShowcaseTab('logo')}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                      heroShowcaseTab === 'logo'
                        ? 'bg-[#1A1A18] text-[#F4F1EA]'
                        : 'text-[#4A4943] hover:text-[#1A1A18]'
                    }`}
                  >
                    Logo Utama
                  </button>
                  <button
                    type="button"
                    onClick={() => setHeroShowcaseTab('workshirt')}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                      heroShowcaseTab === 'workshirt'
                        ? 'bg-[#1A1A18] text-[#F4F1EA]'
                        : 'text-[#4A4943] hover:text-[#1A1A18]'
                    }`}
                  >
                    Workshirt
                  </button>
                  <button
                    type="button"
                    onClick={() => setHeroShowcaseTab('essential')}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                      heroShowcaseTab === 'essential'
                        ? 'bg-[#1A1A18] text-[#F4F1EA]'
                        : 'text-[#4A4943] hover:text-[#1A1A18]'
                    }`}
                  >
                    Essential Shirt
                  </button>
                </div>
              </div>

              {/* Main Visual Slot */}
              <div className="flex-1 flex flex-col">
                {heroShowcaseTab === 'logo' && (
                  <div className="flex-1 flex flex-col justify-between bg-[#0A0A09] rounded-xl p-6 sm:p-8 border border-[#242422] min-h-[340px]">
                    <div className="flex items-center justify-between text-[11px] font-mono-tabular text-[#8E8A80]">
                      <span>ECOSYS APPAREL IDENTITY</span>
                      <span>3D EMBOSSED MARK</span>
                    </div>

                    <EcosysBubbleLogoCard compact className="my-auto py-8" />

                    <div className="pt-4 border-t border-[#1E1E1C] flex items-center justify-between text-xs text-[#A09C91]">
                      <span>Workwear Essentials for a Better Tomorrow</span>
                      <span className="font-mono-tabular text-[#EAE4D8]">Small Changes, Big Impact</span>
                    </div>
                  </div>
                )}

                {heroShowcaseTab === 'workshirt' && (
                  <div className="relative flex-1 rounded-xl overflow-hidden bg-[#1A1A18] min-h-[340px]">
                    <img
                      src={PRODUCTS[0].lookbookImage}
                      alt="Model mahasiswa mengenakan Ecosys Workshirt Series warna Olive Green"
                      referrerPolicy="no-referrer"
                      className="w-full h-full max-h-[420px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-5 text-[#F4F1EA]">
                      <div className="text-xs text-[#D5CFC4]">
                        Workshirt Series · Cotton Twill 280 GSM (Garment Washed)
                      </div>
                      <div className="font-display text-lg font-bold mt-0.5">
                        Vintage Boxy Workshirt — Olive Green, Khaki, Black
                      </div>
                    </div>
                  </div>
                )}

                {heroShowcaseTab === 'essential' && (
                  <div className="relative flex-1 rounded-xl overflow-hidden bg-[#1A1A18] min-h-[340px]">
                    <img
                      src={PRODUCTS[1].lookbookImage}
                      alt="Model mahasiswa mengenakan Ecosys Essential Shirt warna Off White"
                      referrerPolicy="no-referrer"
                      className="w-full h-full max-h-[420px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-5 text-[#F4F1EA]">
                      <div className="text-xs text-[#D5CFC4]">
                        Essential Shirt · 100% Cotton Oxford · Clean Look
                      </div>
                      <div className="font-display text-lg font-bold mt-0.5">
                        Classic Button-Down — Off White, Sage Green, Navy Blue
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Caption inside Right Hero Frame */}
              <div className="mt-3 pt-3 border-t border-[#D8D2C5] flex items-center justify-between text-xs text-[#4A4943]">
                <span>Pilih tab di atas untuk melihat logo timbul &amp; foto lookbook</span>
                <a
                  href="#katalog"
                  className="font-semibold text-[#1A1A18] hover:text-[#464A3B] inline-flex items-center gap-1 whitespace-nowrap shrink-0"
                >
                  <span>Lihat Katalog</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            3. BAGIAN KATALOG PRODUK (Hanya 2 Produk Utama: Workshirt & Essential)
        ===================================================================== */}
        <section
          id="katalog"
          className="border-t border-[#DCD6C8] py-16 sm:py-24 px-4 sm:px-8 max-w-[1280px] mx-auto"
        >
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-medium text-[#464A3B] mb-2">
                01. Katalog Produk Resmi · 2 Seri Utama Ecosys
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#1A1A18] tracking-tight">
                Workshirt Series &amp; Essential Shirt
              </h2>
            </div>
            <p className="text-sm text-[#4A4943] max-w-md">
              Dua siluet kemeja esensial dengan karakter material pilihan untuk menemani aktivitas akademik maupun kasual harian mahasiswa.
            </p>
          </div>

          {/* 2-Column Product Catalog Grid (Strictly 2 Products) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PRODUCTS.map((product, index) => {
              const currentColorId =
                selectedColors[product.id] || product.colors[0].id;
              const currentColor =
                product.colors.find((c) => c.id === currentColorId) ||
                product.colors[0];
              const currentSize = selectedSizes[product.id] || 'L';

              const waOrderMessage = `Halo Admin Ecosys, saya ingin memesan:\n- Produk: ${product.name}\n- Warna: ${currentColor.name}\n- Ukuran: ${currentSize}\nMohon info ketersediaan stoknya. Terima kasih!`;

              return (
                <article
                  key={product.id}
                  className="bg-[#ECE8DF] border border-[#D8D2C5] rounded-xl overflow-hidden flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5"
                >
                  {/* Top Image Showcase */}
                  <div>
                    <div className="relative aspect-[4/3] bg-[#E2DDD2] overflow-hidden border-b border-[#D8D2C5]">
                      <img
                        src={product.primaryImage}
                        alt={`${product.name} - ${product.material}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      {/* Active Color Indicator Bar at bottom of image */}
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-5 py-3.5 flex items-center justify-between text-xs text-[#F4F1EA]">
                        <span className="font-medium">
                          Produk 0{index + 1} · Warna dipilih: <strong>{currentColor.name}</strong>
                        </span>
                        <span className="font-mono-tabular opacity-90">{product.code}</span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 sm:p-8">
                      {/* Unboxed Metadata: Category · Material */}
                      <div className="text-xs text-[#5A584F] mb-2 leading-relaxed">
                        <span className="font-semibold text-[#3D4235]">{product.category}</span>
                        <span className="mx-1.5" aria-hidden="true">·</span>
                        <span>{product.material}</span>
                      </div>

                      {/* Product Title & Price */}
                      <div className="flex items-baseline justify-between gap-3 mb-2">
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1A1A18] leading-snug">
                          {product.name}
                        </h3>
                        <span className="font-mono-tabular text-lg font-semibold text-[#1A1A18] whitespace-nowrap shrink-0">
                          {formatRupiah(product.price)}
                        </span>
                      </div>

                      {/* Fit & Inspiration Summary */}
                      <p className="text-xs font-medium text-[#464A3B] mb-3">
                        Fit: {product.fit}
                      </p>
                      <p className="text-sm text-[#4A4943] leading-relaxed mb-6">
                        {product.inspiration}
                      </p>

                      {/* Interactive Color Variant Selector */}
                      <div className="mb-6 pt-5 border-t border-[#DCD6C8]">
                        <div className="flex items-center justify-between text-xs mb-3">
                          <span className="font-semibold text-[#1A1A18]">
                            Pilihan Warna ({product.colors.length} Varian):
                          </span>
                          <span className="text-[#5A584F] font-medium">
                            {currentColor.name}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-2.5">
                          {product.colors.map((color) => {
                            const isSelected = color.id === currentColor.id;
                            return (
                              <button
                                key={color.id}
                                type="button"
                                onClick={() =>
                                  setSelectedColors((prev) => ({
                                    ...prev,
                                    [product.id]: color.id,
                                  }))
                                }
                                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium border transition-colors whitespace-nowrap shrink-0 ${
                                  isSelected
                                    ? 'bg-[#1A1A18] text-[#F4F1EA] border-[#1A1A18]'
                                    : 'bg-[#F4F1EA] text-[#3A3935] border-[#CFC8B8] hover:border-[#1A1A18]'
                                }`}
                              >
                                <span
                                  className="w-3.5 h-3.5 rounded-full border border-black/25 shrink-0"
                                  style={{ backgroundColor: color.hex }}
                                />
                                <span>{color.name}</span>
                              </button>
                            );
                          })}
                        </div>
                        <p className="mt-2.5 text-xs text-[#5A584F] leading-normal">
                          {currentColor.tagNote}
                        </p>
                      </div>

                      {/* Interactive Size Selector */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between text-xs mb-2.5">
                          <span className="font-semibold text-[#1A1A18]">Pilih Ukuran:</span>
                          <a
                            href="#spesifikasi-detail"
                            onClick={() => {
                              if (
                                product.id === 'workshirt-series' ||
                                product.id === 'essential-shirt'
                              ) {
                                setActiveBlueprintId(product.id);
                              }
                            }}
                            className="text-[#464A3B] hover:underline font-medium"
                          >
                            Panduan Ukuran
                          </a>
                        </div>
                        <div className="grid grid-cols-4 gap-2.5">
                          {(['S', 'M', 'L', 'XL'] as const).map((sz) => (
                            <button
                              key={sz}
                              type="button"
                              onClick={() =>
                                setSelectedSizes((prev) => ({
                                  ...prev,
                                  [product.id]: sz,
                                }))
                              }
                              className={`py-2 text-xs font-mono-tabular font-semibold rounded-lg border transition-colors ${
                                currentSize === sz
                                  ? 'bg-[#464A3B] text-[#F4F1EA] border-[#464A3B]'
                                  : 'bg-[#F4F1EA] text-[#1A1A18] border-[#CFC8B8] hover:border-[#1A1A18]'
                              }`}
                            >
                              {sz}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Key Detail Points (Unboxed list) */}
                      <div className="border-t border-[#DCD6C8] pt-4 space-y-2 text-xs text-[#3A3935]">
                        {product.details.map((detail, idx) => (
                          <div key={idx} className="leading-relaxed">
                            <strong className="font-semibold text-[#1A1A18]">
                              · {detail.title}:
                            </strong>{' '}
                            {detail.description}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Action Buttons */}
                  <div className="p-6 sm:p-8 pt-0 space-y-2.5">
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href={SHOPEE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#1A1A18] hover:bg-[#464A3B] text-[#F4F1EA] text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>Beli di Shopee</span>
                      </a>

                      <a
                        href={getWhatsAppUrl(waOrderMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#F4F1EA] hover:bg-[#E2DDD2] text-[#1A1A18] border border-[#1A1A18] text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0"
                      >
                        <MessageCircle className="w-4 h-4 text-[#3D4A35]" />
                        <span>Pesan via WA</span>
                      </a>
                    </div>

                    <button
                      type="button"
                      onClick={() => setModalProduct(product)}
                      className="w-full py-2.5 text-xs font-medium text-[#4A4943] hover:text-[#1A1A18] hover:bg-[#E2DDD2]/60 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                    >
                      <SlidersHorizontal className="w-3.5 h-3.5" />
                      <span>Lihat Blueprint Tampak Depan/Belakang &amp; Detail Lengkap</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* =====================================================================
            3B. BEDAH SPESIFIKASI, BLUEPRINT TAMPAK DEPAN/BELAKANG & SIZE MAHASISWA
            (Mengacu langsung pada Gambar 2 - Workshirt Series & Gambar 3 - Essential Shirt)
        ===================================================================== */}
        <section
          id="spesifikasi-detail"
          className="border-t border-[#DCD6C8] bg-[#ECE8DF]/70 py-16 sm:py-24 px-4 sm:px-8"
        >
          <div className="max-w-[1280px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <div className="text-xs font-medium text-[#464A3B] mb-2">
                  02. Spesifikasi Teknis &amp; Detail Konstruksi (Gambar 2 &amp; Gambar 3)
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1A1A18]">
                  Eksplorasi Material, Detail Bordir &amp; Potongan Kemeja
                </h2>
              </div>

              {/* Switcher between Image 2 (Workshirt Series) and Image 3 (Essential Shirt) */}
              <div className="flex items-center gap-1.5 p-1.5 bg-[#DFD9CC] rounded-xl self-start md:self-auto">
                <button
                  type="button"
                  onClick={() => setActiveBlueprintId('workshirt-series')}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                    activeBlueprintId === 'workshirt-series'
                      ? 'bg-[#1A1A18] text-[#F4F1EA]'
                      : 'text-[#3A3935] hover:text-[#1A1A18]'
                  }`}
                >
                  Workshirt Series (280 GSM)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveBlueprintId('essential-shirt')}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                    activeBlueprintId === 'essential-shirt'
                      ? 'bg-[#1A1A18] text-[#F4F1EA]'
                      : 'text-[#3A3935] hover:text-[#1A1A18]'
                  }`}
                >
                  Essential Shirt (Cotton Oxford)
                </button>
              </div>
            </div>

            {/* Interactive Blueprint Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left 7 Columns: Interactive Tampak Depan & Belakang SVG + Color Swatch Tester */}
              <div className="lg:col-span-7 space-y-6">
                <TechnicalGarmentDiagram
                  type={blueprintProduct.diagramType}
                  primaryHex={activeBlueprintColor.hex}
                  colorName={activeBlueprintColor.name}
                />

                {/* Interactive Swatch Bar for the Technical Blueprint */}
                <div className="bg-[#F4F1EA] border border-[#D8D2C5] rounded-xl p-5">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                    <span className="text-xs font-semibold text-[#1A1A18]">
                      Simulasi Warna pada Blueprint ({blueprintProduct.name}):
                    </span>
                    <span className="text-xs font-mono-tabular text-[#4A4943]">
                      Material: {blueprintProduct.material}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {blueprintProduct.colors.map((c) => {
                      const active = c.id === activeBlueprintColor.id;
                      return (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() =>
                            setSelectedColors((prev) => ({
                              ...prev,
                              [blueprintProduct.id]: c.id,
                            }))
                          }
                          className={`flex items-center gap-3 p-3 rounded-lg border text-left transition-colors ${
                            active
                              ? 'bg-[#1A1A18] text-[#F4F1EA] border-[#1A1A18]'
                              : 'bg-[#ECE8DF] text-[#1A1A18] border-[#D8D2C5] hover:border-[#1A1A18]'
                          }`}
                        >
                          <span
                            className="w-6 h-6 rounded-full border border-black/25 shrink-0"
                            style={{ backgroundColor: c.hex }}
                          />
                          <div className="min-w-0">
                            <div className="text-xs font-semibold truncate">{c.name}</div>
                            <div
                              className={`text-[11px] truncate ${
                                active ? 'text-[#D5CFC4]' : 'text-[#5A584F]'
                              }`}
                            >
                              Klik untuk pratinjau
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Size Chart Table */}
                <div className="bg-[#F4F1EA] border border-[#D8D2C5] rounded-xl p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Ruler className="w-4 h-4 text-[#464A3B]" />
                      <h3 className="font-display text-base font-bold text-[#1A1A18]">
                        Tabel Ukuran Standar Mahasiswa ({blueprintProduct.category})
                      </h3>
                    </div>
                    <span className="text-xs text-[#5A584F]">Satuan: cm (Toleransi ±1 cm)</span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-[#D8D2C5] text-[#5A584F]">
                          <th className="py-2.5 pr-4 font-semibold">Size</th>
                          <th className="py-2.5 px-3 font-semibold">Lebar Dada</th>
                          <th className="py-2.5 px-3 font-semibold">Panjang Baju</th>
                          <th className="py-2.5 px-3 font-semibold">Lebar Bahu</th>
                          <th className="py-2.5 px-3 font-semibold">Panjang Lengan</th>
                          <th className="py-2.5 pl-3 font-semibold">Estimasi Postur</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E5DFD3] font-mono-tabular">
                        {blueprintProduct.sizeChart.map((row) => (
                          <tr key={row.size} className="hover:bg-[#ECE8DF]/60">
                            <td className="py-2.5 pr-4 font-bold text-[#1A1A18]">{row.size}</td>
                            <td className="py-2.5 px-3">{row.chestWidth} cm</td>
                            <td className="py-2.5 px-3">{row.bodyLength} cm</td>
                            <td className="py-2.5 px-3">{row.shoulderWidth} cm</td>
                            <td className="py-2.5 px-3">{row.sleeveLength} cm</td>
                            <td className="py-2.5 pl-3 font-sans text-xs text-[#4A4943]">
                              {row.studentFitNote}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Right 5 Columns: 4 Craftsmanship Callouts + Student Fit Calculator */}
              <div className="lg:col-span-5 space-y-6">
                {/* 4 Detail Callouts */}
                <div className="bg-[#F4F1EA] border border-[#D8D2C5] rounded-xl p-6">
                  <div className="text-xs font-medium text-[#464A3B] mb-1">
                    {blueprintProduct.tagline}
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#1A1A18] mb-2">
                    Detail &amp; Karakter {blueprintProduct.category}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A4943] leading-relaxed mb-5">
                    {blueprintProduct.inspiration}
                  </p>

                  <div className="space-y-4 border-t border-[#DCD6C8] pt-4">
                    {blueprintProduct.details.map((item, index) => (
                      <div key={index} className="pb-3 border-b border-[#E5DFD3] last:border-b-0 last:pb-0">
                        <div className="text-xs font-mono-tabular text-[#68655B]">
                          0{index + 1}. DETAIL KONSTRUKSI
                        </div>
                        <div className="font-display font-bold text-sm text-[#1A1A18] mt-0.5">
                          {item.title}
                        </div>
                        <p className="text-xs text-[#4A4943] leading-relaxed mt-1">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Student Fit & Size Recommender */}
                <div className="bg-[#F4F1EA] border border-[#D8D2C5] rounded-xl p-6">
                  <h3 className="font-display text-base font-bold text-[#1A1A18] mb-1">
                    Cek Rekomendasi Ukuran Mahasiswa
                  </h3>
                  <p className="text-xs text-[#5A584F] mb-4">
                    Geser tinggi dan berat badan Anda untuk menemukan ukuran kemeja Ecosys yang paling proporsional.
                  </p>

                  <div className="space-y-4 mb-5">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <label htmlFor="height-range" className="font-medium text-[#3A3935]">
                          Tinggi Badan:
                        </label>
                        <span className="font-mono-tabular font-semibold text-[#1A1A18]">
                          {studentHeight} cm
                        </span>
                      </div>
                      <input
                        id="height-range"
                        type="range"
                        min={155}
                        max={190}
                        value={studentHeight}
                        onChange={(e) => setStudentHeight(Number(e.target.value))}
                        className="w-full accent-[#464A3B] cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <label htmlFor="weight-range" className="font-medium text-[#3A3935]">
                          Berat Badan:
                        </label>
                        <span className="font-mono-tabular font-semibold text-[#1A1A18]">
                          {studentWeight} kg
                        </span>
                      </div>
                      <input
                        id="weight-range"
                        type="range"
                        min={45}
                        max={98}
                        value={studentWeight}
                        onChange={(e) => setStudentWeight(Number(e.target.value))}
                        className="w-full accent-[#464A3B] cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="bg-[#ECE8DF] border border-[#D8D2C5] rounded-lg p-4 flex items-center justify-between gap-4">
                    <div>
                      <div className="text-xs text-[#5A584F]">Ukuran yang Disarankan:</div>
                      <div className="text-xs text-[#3A3935] mt-1 leading-relaxed">
                        {sizeRecommendation.reason}
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-[#1A1A18] text-[#F4F1EA] font-display text-xl font-bold flex items-center justify-center shrink-0">
                      {sizeRecommendation.size}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            4. TENTANG KAMI & HUBUNGI KAMI (Filosofi Brand + Shopee, WhatsApp & TikTok)
        ===================================================================== */}
        <section
          id="tentang-kami"
          className="border-t border-[#DCD6C8] py-16 sm:py-24 px-4 sm:px-8 max-w-[1280px] mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 6 Columns: Brand Story & Craftsmanship Pillars */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="text-xs font-medium text-[#464A3B] mb-2">
                  03. Tentang Ecosys · Filosofi Desain Minimalis
                </div>
                <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#1A1A18] tracking-tight">
                  Less Waste, More Tomorrow.
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#4A4943] leading-relaxed">
                <strong className="text-[#1A1A18] font-semibold">ECOSYS</strong> hadir untuk menjawab kebutuhan mahasiswa akan pakaian esensial yang rapi, tangguh, dan relevan dipakai berulang kali tanpa tergerus tren sesaat. Kami percaya bahwa{' '}
                <em>&ldquo;Small Changes, Big Impact&rdquo;</em> dimulai dari memilih pakaian berkualitas tinggi yang awet dipakai bertahun-tahun.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#ECE8DF] border border-[#D8D2C5] rounded-xl p-5">
                  <div className="font-mono-tabular text-xs text-[#68655B]">PILAR 01</div>
                  <div className="font-display font-bold text-base text-[#1A1A18] mt-1">
                    Material Tahan Lama
                  </div>
                  <p className="text-xs text-[#4A4943] mt-1.5 leading-relaxed">
                    Menggunakan kain Cotton Twill 280 GSM (Garment Washed) dan 100% Cotton Oxford yang sejuk di kulit serta tidak mudah pudar.
                  </p>
                </div>

                <div className="bg-[#ECE8DF] border border-[#D8D2C5] rounded-xl p-5">
                  <div className="font-mono-tabular text-xs text-[#68655B]">PILAR 02</div>
                  <div className="font-display font-bold text-base text-[#1A1A18] mt-1">
                    Timeless Earth-Tone
                  </div>
                  <p className="text-xs text-[#4A4943] mt-1.5 leading-relaxed">
                    Palet warna Olive Green, Khaki, Black, Off White, Sage Green, dan Navy Blue yang mudah dipadukan untuk setiap suasana kampus.
                  </p>
                </div>
              </div>
            </div>

            {/* Right 6 Columns: Direct Action, WhatsApp & TikTok Hub (#kontak) */}
            <div id="kontak" className="lg:col-span-6">
              <div className="bg-[#ECE8DF] border border-[#D8D2C5] rounded-2xl p-6 sm:p-8 space-y-5">
                <div>
                  <div className="text-xs font-medium text-[#464A3B] mb-1">
                    04. Saluran Pemesanan &amp; Sosial Media Resmi
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#1A1A18]">
                    Pesan Sekarang atau Ikuti Kami
                  </h3>
                  <p className="text-sm text-[#4A4943] mt-2 leading-relaxed">
                    Dapatkan koleksi resmi Ecosys melalui toko Shopee kami, konsultasi stok &amp; ukuran langsung melalui WhatsApp resmi, serta ikuti inspirasi outfit kampus di TikTok resmi kami.
                  </p>
                </div>

                {/* Official Shopee Channel Card */}
                <div className="bg-[#F4F1EA] border border-[#D8D2C5] rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-mono-tabular text-[#68655B]">
                      MARKETPLACE RESMI
                    </div>
                    <div className="font-display text-lg font-bold text-[#1A1A18] mt-0.5">
                      Shopee Official Store Ecosys
                    </div>
                    <div className="text-xs text-[#4A4943] mt-1 font-mono-tabular break-all">
                      {SHOPEE_URL}
                    </div>
                  </div>

                  <a
                    href={SHOPEE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#1A1A18] hover:bg-[#464A3B] text-[#F4F1EA] text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Buka Shopee</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Official TikTok Channel Card */}
                <div className="bg-[#F4F1EA] border border-[#D8D2C5] rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-mono-tabular text-[#68655B]">
                      SOSIAL MEDIA &amp; KONTEN LOOKBOOK
                    </div>
                    <div className="font-display text-lg font-bold text-[#1A1A18] mt-0.5">
                      TikTok Resmi Ecosys ({TIKTOK_HANDLE})
                    </div>
                    <div className="text-xs text-[#4A4943] mt-1">
                      Inspirasi mix &amp; match kemeja kampus, review detail bahan, dan info rilis terbaru.
                    </div>
                  </div>

                  <a
                    href={TIKTOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#1A1A18] hover:bg-[#464A3B] text-[#F4F1EA] text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0"
                  >
                    <TikTokIcon className="w-4 h-4" />
                    <span>Ikuti di TikTok</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Official WhatsApp Channel Card */}
                <div className="bg-[#F4F1EA] border border-[#D8D2C5] rounded-xl p-5 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-xs font-mono-tabular text-[#68655B]">
                        LAYANAN KATALOG &amp; PEMESANAN LANGSUNG
                      </div>
                      <div className="font-display text-lg font-bold text-[#1A1A18] mt-0.5">
                        WhatsApp Resmi Ecosys
                      </div>
                      <div className="text-sm font-mono-tabular font-semibold text-[#3D4A35] mt-1">
                        {WHATSAPP_DISPLAY}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={handleCopyWhatsApp}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-[#ECE8DF] hover:bg-[#DFD9CC] text-[#1A1A18] border border-[#C8C1B2] text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0"
                      >
                        {copiedWa ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#3D4A35]" />
                            <span>Tersalin</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Salin Nomor</span>
                          </>
                        )}
                      </button>

                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                          'Halo Admin Ecosys, saya ingin bertanya seputar katalog produk & pemesanan.'
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#3D4A35] hover:bg-[#2E3828] text-[#F4F1EA] text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Chat WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  {/* Quick Topic Buttons for WhatsApp */}
                  <div className="pt-3 border-t border-[#E5DFD3]">
                    <div className="text-xs text-[#5A584F] mb-2">
                      Pesan Cepat via WhatsApp (Klik topik):
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        {
                          label: 'Tanya Stok Workshirt 280 GSM',
                          msg: 'Halo Ecosys, apakah Workshirt Series (Cotton Twill 280 GSM) warna Olive Green / Khaki / Black masih ready stock?',
                        },
                        {
                          label: 'Tanya Stok Essential Shirt Oxford',
                          msg: 'Halo Ecosys, apakah Essential Shirt (100% Cotton Oxford) warna Off White / Sage Green / Navy Blue masih tersedia?',
                        },
                        {
                          label: 'Konsultasi Ukuran Mahasiswa',
                          msg: `Halo Ecosys, tinggi saya ${studentHeight} cm dan berat ${studentWeight} kg. Apakah ukuran ${sizeRecommendation.size} sudah pas untuk saya?`,
                        },
                      ].map((item, idx) => (
                        <a
                          key={idx}
                          href={getWhatsAppUrl(item.msg)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 bg-[#ECE8DF] hover:bg-[#1A1A18] hover:text-[#F4F1EA] text-[#3A3935] text-xs font-medium rounded-lg transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================================
          5. FOOTER (Quiet Copyright, Site Links, TikTok & Single-File HTML Exporter)
      ===================================================================== */}
      <footer className="border-t border-[#DCD6C8] bg-[#ECE8DF] py-12 px-4 sm:px-8">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="font-display text-xl font-extrabold tracking-[0.14em] text-[#1A1A18]">
              ECOSYS
            </div>
            <p className="text-xs text-[#5A584F] mt-1">
              Workwear Essentials for a Better Tomorrow · Small Changes, Big Impact.
            </p>
            <p className="text-xs text-[#68655B] mt-1">
              © {new Date().getFullYear()} Ecosys Apparel. Hak cipta dilindungi.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[#4A4943]">
            <a href="#beranda" className="hover:text-[#1A1A18]">
              Beranda
            </a>
            <span aria-hidden="true">·</span>
            <a href="#katalog" className="hover:text-[#1A1A18]">
              Katalog
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={SHOPEE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1A1A18]"
            >
              Shopee Official
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#1A1A18]"
            >
              <TikTokIcon className="w-3.5 h-3.5" />
              <span>TikTok {TIKTOK_HANDLE}</span>
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1A1A18]"
            >
              WA: {WHATSAPP_DISPLAY}
            </a>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => setHtmlModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F4F1EA] hover:bg-[#1A1A18] hover:text-[#F4F1EA] text-[#1A1A18] border border-[#C8C1B2] rounded-lg transition-colors font-semibold"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Kode HTML Satu File</span>
            </button>
          </div>
        </div>
      </footer>

      {/* =====================================================================
          MODAL 1: PRODUCT DETAIL & BLUEPRINT VIEWER
      ===================================================================== */}
      {modalProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label={`Detail ${modalProduct.name}`}
        >
          <div className="bg-[#F4F1EA] border border-[#D8D2C5] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-xl">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#DCD6C8]">
              <div>
                <div className="text-xs text-[#5A584F]">
                  {modalProduct.category} · {modalProduct.material}
                </div>
                <h3 className="font-display text-2xl font-bold text-[#1A1A18] mt-0.5">
                  {modalProduct.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setModalProduct(null)}
                aria-label="Tutup detail produk"
                className="p-2 rounded-lg bg-[#ECE8DF] hover:bg-[#1A1A18] hover:text-[#F4F1EA] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="my-6">
              <TechnicalGarmentDiagram
                type={modalProduct.diagramType}
                primaryHex={
                  (
                    modalProduct.colors.find(
                      (c) => c.id === selectedColors[modalProduct.id]
                    ) || modalProduct.colors[0]
                  ).hex
                }
                colorName={
                  (
                    modalProduct.colors.find(
                      (c) => c.id === selectedColors[modalProduct.id]
                    ) || modalProduct.colors[0]
                  ).name
                }
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {modalProduct.details.map((d, i) => (
                <div
                  key={i}
                  className="bg-[#ECE8DF] border border-[#D8D2C5] rounded-xl p-4"
                >
                  <div className="font-display font-bold text-sm text-[#1A1A18]">
                    {d.title}
                  </div>
                  <p className="text-xs text-[#4A4943] mt-1 leading-relaxed">
                    {d.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-[#DCD6C8]">
              <div className="font-mono-tabular text-lg font-bold text-[#1A1A18]">
                {formatRupiah(modalProduct.price)}
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={SHOPEE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#1A1A18] hover:bg-[#464A3B] text-[#F4F1EA] text-xs font-semibold rounded-lg transition-colors"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Beli via Shopee</span>
                </a>
                <a
                  href={getWhatsAppUrl(
                    `Halo Admin Ecosys, saya ingin memesan ${modalProduct.name}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#ECE8DF] hover:bg-[#DFD9CC] text-[#1A1A18] border border-[#1A1A18] text-xs font-semibold rounded-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#3D4A35]" />
                  <span>Pesan via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL 2: STANDALONE SINGLE-FILE HTML CODE VIEWER & DOWNLOADER
      ===================================================================== */}
      {htmlModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Kode HTML Satu File Lengkap"
        >
          <div className="bg-[#F4F1EA] border border-[#D8D2C5] rounded-2xl max-w-4xl w-full max-h-[88vh] flex flex-col overflow-hidden shadow-xl">
            <div className="px-6 py-4 bg-[#ECE8DF] border-b border-[#D8D2C5] flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-display text-lg font-bold text-[#1A1A18]">
                  Kode Lengkap Single-File HTML (Tailwind CSS CDN)
                </h3>
                <p className="text-xs text-[#5A584F]">
                  Siap dijalankan langsung di browser dalam satu file index.html tanpa instalasi.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyStandaloneHtml}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#1A1A18] hover:bg-[#464A3B] text-[#F4F1EA] text-xs font-semibold rounded-lg transition-colors"
                >
                  {copiedHtml ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedHtml ? 'Kode Tersalin!' : 'Salin Kode HTML'}</span>
                </button>
                <button
                  type="button"
                  onClick={handleDownloadStandaloneHtml}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#F4F1EA] hover:bg-[#DFD9CC] text-[#1A1A18] border border-[#1A1A18] text-xs font-semibold rounded-lg transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh .html</span>
                </button>
                <button
                  type="button"
                  onClick={() => setHtmlModalOpen(false)}
                  aria-label="Tutup modal kode"
                  className="p-2 rounded-lg hover:bg-[#DFD9CC] text-[#1A1A18]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-[#141413] text-[#EAE4D8]">
              <pre className="text-xs font-mono leading-relaxed overflow-x-auto select-all">
                <code>{STANDALONE_HTML_CODE}</code>
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
