export interface ColorVariant {
  id: string;
  name: string;
  hex: string;
  secondaryHex: string;
  textContrast: 'light' | 'dark';
  label: string;
  tagNote: string;
}

export interface ProductDetailPoint {
  title: string;
  description: string;
}

export interface SizeRow {
  size: 'S' | 'M' | 'L' | 'XL';
  chestWidth: number;
  bodyLength: number;
  sleeveLength: number;
  shoulderWidth: number;
  studentFitNote: string;
}

export interface ProductItem {
  id: string;
  code: string;
  name: string;
  subtitle: string;
  tagline: string;
  category: 'Workshirt Series' | 'Essential Shirt';
  material: string;
  fit: string;
  price: number;
  inspiration: string;
  primaryImage: string;
  lookbookImage: string;
  diagramType: 'workshirt' | 'essential';
  colors: ColorVariant[];
  highlights: string[];
  details: ProductDetailPoint[];
  sizeChart: SizeRow[];
}

export const SHOPEE_URL = 'https://id.shp.ee/11Z9X7Uo';
export const WHATSAPP_NUMBER = '6285815921255';
export const WHATSAPP_DISPLAY = '+62 858-1592-1255';
export const TIKTOK_URL = 'https://www.tiktok.com/@ecosys39?_r=1&_t=ZS-9ARm5ttfoBR';
export const TIKTOK_HANDLE = '@ecosys39';

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const PRODUCTS: ProductItem[] = [
  {
    id: 'workshirt-series',
    code: 'ECS-WS01',
    name: 'Workshirt Series — Heavy Twill',
    subtitle: 'Workwear Essentials for a Better Tomorrow',
    tagline: 'Less Waste, More Tomorrow.',
    category: 'Workshirt Series',
    material: 'Cotton Twill 280 GSM (Garment Washed)',
    fit: 'Boxy Relaxed Fit · Lengan Pendek',
    price: 189000,
    inspiration:
      'Mengadaptasi vibe workshirt ikonik ala Von Dutch dengan sentuhan minimalis khas Ecosys. Perpaduan antara kesan vintage, kasual, dan fungsional untuk dipakai sehari-hari di kampus maupun studio.',
    primaryImage: '/src/assets/images/ecosys_workshirt_series_1791662367930.jpg',
    lookbookImage: '/src/assets/images/ecosys_workshirt_model_1791662378454.jpg',
    diagramType: 'workshirt',
    colors: [
      {
        id: 'olive-green',
        name: 'Olive Green',
        hex: '#464A3B',
        secondaryHex: '#36392D',
        textContrast: 'light',
        label: 'Olive Green (Best Seller)',
        tagNote: 'Karakter earth-tone hangat dengan efek garment washed natural',
      },
      {
        id: 'khaki',
        name: 'Khaki',
        hex: '#B4A182',
        secondaryHex: '#9A8769',
        textContrast: 'dark',
        label: 'Khaki',
        tagNote: 'Warna pasir netral yang bersih dan mudah dipadukan dengan celana gelap maupun terang',
      },
      {
        id: 'black',
        name: 'Black',
        hex: '#242523',
        secondaryHex: '#171816',
        textContrast: 'light',
        label: 'Black (Charcoal Washed)',
        tagNote: 'Hitam arang maskulin dengan tekstur twill tegas yang tidak kaku',
      },
    ],
    highlights: [
      'Cotton Twill 280 GSM Premium (Garment Washed)',
      'Tahan Lama dan Nyaman Dipakai Seharian',
      'Simple Logo · Timeless Look',
    ],
    details: [
      {
        title: 'Label Leher Minimalis',
        description: 'Woven neck label bertekstur lembut dengan tipografi ECOSYS dan penanda ukuran yang tidak gatal di kulit.',
      },
      {
        title: 'Detail Logo Bordir Oval',
        description: 'Bordir patch oval presisi tinggi di dada kiri terinspirasi gaya workwear klasik Von Dutch dengan benang kontras.',
      },
      {
        title: 'Dua Saku Dada dengan Kancing',
        description: 'Saku dada simetris dilengkapi flap penutup berkancing senada untuk menyimpan kartu mahasiswa atau kebutuhan harian.',
      },
      {
        title: 'Tag Samping & Back Yoke Label',
        description: 'Dilengkapi woven side tag yang simple dan clean serta aksen label belakang tepat di bawah garis bahu.',
      },
    ],
    sizeChart: [
      { size: 'S', chestWidth: 53, bodyLength: 68, sleeveLength: 23, shoulderWidth: 46, studentFitNote: 'TB 160–167 cm · BB 50–60 kg' },
      { size: 'M', chestWidth: 55, bodyLength: 70, sleeveLength: 24, shoulderWidth: 48, studentFitNote: 'TB 168–174 cm · BB 60–70 kg' },
      { size: 'L', chestWidth: 58, bodyLength: 72, sleeveLength: 25, shoulderWidth: 50, studentFitNote: 'TB 175–180 cm · BB 70–80 kg' },
      { size: 'XL', chestWidth: 61, bodyLength: 74, sleeveLength: 26, shoulderWidth: 52, studentFitNote: 'TB 180–186 cm · BB 80–92 kg' },
    ],
  },
  {
    id: 'essential-shirt',
    code: 'ECS-ES02',
    name: 'Essential Shirt — Oxford Long Sleeve',
    subtitle: 'Clean Look. Lasting Impact.',
    tagline: 'Simple Shirt for a Better Tomorrow.',
    category: 'Essential Shirt',
    material: 'Cotton Oxford (100% Cotton)',
    fit: 'Regular Fit · Lengan Panjang',
    price: 179000,
    inspiration:
      'Desain klasik dengan sentuhan modern. Menghadirkan kesan rapi, bersih, dan tetap kasual, terinspirasi dari ikonik style Lacoste. Timeless design, made for everyday movement.',
    primaryImage: '/src/assets/images/ecosys_essential_shirt_1791662388338.jpg',
    lookbookImage: '/src/assets/images/ecosys_essential_model_1791662401385.jpg',
    diagramType: 'essential',
    colors: [
      {
        id: 'off-white',
        name: 'Off White',
        hex: '#EAE6DF',
        secondaryHex: '#D5CFC4',
        textContrast: 'dark',
        label: 'White (Off White)',
        tagNote: 'Putih tulang bersih dengan bordir ecosys hijau gelap yang memberi kontras berkelas',
      },
      {
        id: 'sage-green',
        name: 'Sage Green',
        hex: '#69725E',
        secondaryHex: '#545C4B',
        textContrast: 'light',
        label: 'Sage Green',
        tagNote: 'Hijau sage kalem bernuansa alam untuk tampilan smart-casual yang segar',
      },
      {
        id: 'navy-blue',
        name: 'Navy Blue',
        hex: '#1C2433',
        secondaryHex: '#121824',
        textContrast: 'light',
        label: 'Navy Blue',
        tagNote: 'Biru dongker pekat yang rapi untuk presentasi kelas, sidang, maupun agenda formal kampus',
      },
    ],
    highlights: [
      'Cotton Oxford (100% Cotton) — Lembut, adem, dan tahan lama',
      'Regular Fit — Nyaman untuk aktivitas sehari-hari',
      'Breathable — Menyerap keringat dengan baik di cuaca tropis',
    ],
    details: [
      {
        title: 'Kerah Button-Down Rapi',
        description: 'Konstruksi kerah dengan kancing pengunci agar tetap tegak dan rapi sepanjang hari kuliah atau presentasi.',
      },
      {
        title: 'Logo Bordir Minimalis',
        description: 'Bordir tipografi lowercase "ecosys" presisi di bagian atas saku dada kiri yang memberikan identitas tegas namun tenang.',
      },
      {
        title: 'Kancing Senada & Saku Dada',
        description: 'Menggunakan kancing matte senada warna kain dengan satu saku dada fungsional berpotongan clean.',
      },
      {
        title: 'Jahitan Rapi, Kuat & Tag Samping',
        description: 'Konstruksi jahitan rantai rapat dilengkapi lipatan punggung (back pleat) untuk ruang gerak bahu yang leluasa.',
      },
    ],
    sizeChart: [
      { size: 'S', chestWidth: 51, bodyLength: 70, sleeveLength: 59, shoulderWidth: 44, studentFitNote: 'TB 160–167 cm · BB 50–58 kg' },
      { size: 'M', chestWidth: 53, bodyLength: 72, sleeveLength: 60, shoulderWidth: 46, studentFitNote: 'TB 168–174 cm · BB 59–68 kg' },
      { size: 'L', chestWidth: 56, bodyLength: 74, sleeveLength: 61, shoulderWidth: 48, studentFitNote: 'TB 175–180 cm · BB 69–78 kg' },
      { size: 'XL', chestWidth: 59, bodyLength: 76, sleeveLength: 62, shoulderWidth: 50, studentFitNote: 'TB 180–186 cm · BB 79–90 kg' },
    ],
  },
];
