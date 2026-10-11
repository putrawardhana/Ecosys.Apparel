import React from 'react';

/**
 * Recreates Image 1: The iconic 3D bubble / embossed off-white "ECOSYS" logo on a deep matte black canvas.
 */
export const EcosysBubbleLogoCard: React.FC<{ className?: string; compact?: boolean }> = ({
  className = '',
  compact = false,
}) => {
  return (
    <div
      className={`relative overflow-hidden bg-[#0A0A09] flex flex-col items-center justify-center select-none ${
        compact ? 'py-10 px-6 rounded-xl' : 'py-16 sm:py-24 px-8 rounded-2xl'
      } ${className}`}
    >
      {/* Subtle radial spotlight in center matching Image 1 */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(238, 233, 222, 0.08) 0%, rgba(10, 10, 9, 0) 65%)',
        }}
      />

      {/* SVG 3D Embossed Bubble Lettering ("ECOSYS") with specular highlights */}
      <div className="relative z-10 w-full max-w-[460px] flex flex-col items-center">
        <svg
          viewBox="0 0 680 180"
          className="w-full h-auto drop-shadow-[0_14px_24px_rgba(0,0,0,0.95)]"
          role="img"
          aria-label="ECOSYS 3D Embossed Brand Logo"
        >
          <defs>
            {/* Warm bone/ivory 3D gradient matching Image 1 */}
            <linearGradient id="ecosysBoneGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FAF7F0" />
              <stop offset="55%" stopColor="#EAE4D8" />
              <stop offset="88%" stopColor="#C9C1B2" />
              <stop offset="100%" stopColor="#A9A090" />
            </linearGradient>

            {/* 3D Bevel & Specular Highlight Filter */}
            <filter id="ecosysBubbleBevel" x="-10%" y="-15%" width="120%" height="135%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="4.5" result="blur" />
              <feOffset in="blur" dx="0" dy="8" result="offsetBlur" />
              <feSpecularLighting
                in="blur"
                surfaceScale="7"
                specularConstant="0.9"
                specularExponent="26"
                lightingColor="#FFFFFF"
                result="specOut"
              >
                <fePointLight x="340" y="-60" z="160" />
              </feSpecularLighting>
              <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
              <feComposite
                in="SourceGraphic"
                in2="specOut"
                operator="arithmetic"
                k1="0"
                k2="1"
                k3="0.45"
                k4="0"
                result="litPaint"
              />
              <feMerge>
                <feMergeNode in="offsetBlur" />
                <feMergeNode in="litPaint" />
              </feMerge>
            </filter>
          </defs>

          <g filter="url(#ecosysBubbleBevel)" fill="url(#ecosysBoneGrad)">
            {/* E - Rounded Bubble Block */}
            <path d="M38 42 C38 33 45 27 55 27 L122 27 C131 27 137 33 137 42 C137 51 131 57 122 57 L74 57 L74 75 L114 75 C122 75 128 81 128 89 C128 97 122 103 114 103 L74 103 L74 123 L124 123 C133 123 139 129 139 138 C139 147 133 153 124 153 L55 153 C45 153 38 147 38 138 Z" />
            {/* C - Soft Sculpted Curve with top notch */}
            <path d="M210 25 C228 25 243 32 248 44 C251 51 246 59 238 61 C230 63 224 58 219 55 C215 52 208 51 201 53 C186 56 179 70 179 90 C179 110 187 123 203 125 C212 126 220 123 227 119 C234 115 243 118 247 126 C251 134 247 144 236 149 C225 154 212 156 198 155 C164 153 142 127 142 90 C142 52 168 25 210 25 Z" />
            {/* O - Inflated Donut Capsule */}
            <path
              fillRule="evenodd"
              d="M312 25 C350 25 375 52 375 90 C375 128 350 155 312 155 C274 155 249 128 249 90 C249 52 274 25 312 25 Z M312 63 C298 63 288 74 288 90 C288 106 298 117 312 117 C326 117 336 106 336 90 C336 74 326 63 312 63 Z"
            />
            {/* S - Bold Organic Bubble S */}
            <path d="M432 25 C454 25 472 32 476 45 C479 53 473 61 464 62 C456 63 450 57 443 54 C436 51 424 51 420 57 C416 63 422 69 436 73 L450 77 C472 83 483 96 483 115 C483 140 461 155 427 155 C403 155 384 147 380 133 C377 124 383 116 392 115 C401 114 407 121 416 124 C425 127 439 127 443 119 C447 112 440 106 625 102 L411 98 C391 92 380 79 380 61 C380 39 401 25 432 25 Z" />
            {/* Y - Rounded Cupped Y with Curved Tail */}
            <path d="M487 44 C487 33 495 26 505 26 C515 26 522 33 522 44 L522 72 C522 83 528 90 537 90 C546 90 552 83 552 72 L552 44 C552 33 560 26 570 26 C580 26 587 33 587 44 L587 109 C587 139 566 155 533 155 C512 155 495 148 491 136 C488 128 494 120 503 119 C511 118 518 124 529 125 C543 126 551 119 551 108 L551 106 C544 111 535 113 525 113 C502 113 487 97 487 73 Z" />
            {/* S - Second Bold Organic Bubble S */}
            <path d="M636 25 C654 25 668 32 672 45 C674 53 669 61 661 62 C653 63 648 57 642 54 C636 51 626 51 622 57 C619 63 624 69 636 73 L649 77 C668 83 677 96 677 115 C677 140 658 155 629 155 C608 155 592 147 589 133 C587 124 592 116 600 115 C608 114 613 121 621 124 C629 127 640 127 644 119 C647 112 641 106 628 102 L616 98 C599 92 590 79 590 61 C590 39 608 25 636 25 Z" />
          </g>

          {/* Subtle top specular shine strokes */}
          <g stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.55" fill="none">
            <path d="M54 34 L120 34" />
            <path d="M188 34 C202 30 220 31 232 37" />
            <path d="M292 34 C306 30 322 30 335 35" />
            <path d="M416 33 C430 30 446 31 458 37" />
            <path d="M501 34 L509 34" />
            <path d="M566 34 L574 34" />
            <path d="M620 33 C632 30 646 31 656 37" />
          </g>
        </svg>
      </div>
    </div>
  );
};

/**
 * Custom Crisp TikTok Brand SVG Icon
 */
export const TikTokIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1Z" />
  </svg>
);

/**
 * Interactive Technical Flat Sketch (Tampak Depan & Tampak Belakang)
 * Matches Image 2 (Workshirt Series) and Image 3 (Essential Shirt) technical blueprints.
 */
export const TechnicalGarmentDiagram: React.FC<{
  type: 'workshirt' | 'essential';
  primaryHex: string;
  secondaryHex?: string;
  colorName: string;
}> = ({ type, primaryHex, colorName }) => {
  const isLightFabric =
    primaryHex.toLowerCase() === '#eae6df' || primaryHex.toLowerCase() === '#b4a182';
  const strokeColor = isLightFabric ? '#2A2A27' : '#EAE6DF';
  const stitchColor = isLightFabric ? 'rgba(42,42,39,0.45)' : 'rgba(234,230,223,0.45)';
  const labelBg = '#EAE6DF';
  const labelText = '#1A1A18';

  if (type === 'workshirt') {
    return (
      <div className="bg-[#ECE8DF] border border-[#D8D2C5] rounded-xl p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-[#D8D2C5]">
          <div className="text-xs font-medium text-[#4A4943]">
            <span>Technical Flat Blueprint</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span className="text-[#1A1A18] font-semibold">Workshirt Series (280 GSM)</span>
          </div>
          <div className="text-xs font-mono-tabular text-[#4A4943]">
            Warna Aktif: <strong className="text-[#1A1A18]">{colorName}</strong>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* TAMPAK DEPAN */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 260 250" className="w-full max-w-[230px] h-auto" role="img" aria-label="Workshirt Tampak Depan">
              {/* Main Boxy Body & Short Sleeves */}
              <path
                d="M78 32 L182 32 L242 88 L214 126 L192 108 L192 218 C150 223 110 223 68 218 L68 108 L46 126 L18 88 Z"
                fill={primaryHex}
                stroke="#1F1F1D"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              {/* Inner Neck Area */}
              <path d="M98 32 L130 72 L162 32 Z" fill="#2E3029" stroke="#1F1F1D" strokeWidth="1.5" />
              {/* Minimalist Neck Label */}
              <rect x="116" y="40" width="28" height="12" rx="1.5" fill={labelBg} stroke="#1F1F1D" strokeWidth="0.8" />
              <text x="130" y="48" textAnchor="middle" fontSize="5.5" fontWeight="700" fill={labelText} fontFamily="Outfit, sans-serif">
                ECOSYS
              </text>
              {/* Open Camp Collar Lapels */}
              <path
                d="M78 32 L98 32 L130 72 L106 80 L94 62 L76 66 Z"
                fill={primaryHex}
                stroke="#1F1F1D"
                strokeWidth="1.8"
              />
              <path
                d="M182 32 L162 32 L130 72 L154 80 L166 62 L184 66 Z"
                fill={primaryHex}
                stroke="#1F1F1D"
                strokeWidth="1.8"
              />
              {/* Center Placket */}
              <line x1="124" y1="72" x2="124" y2="220" stroke={strokeColor} strokeWidth="1" opacity="0.65" />
              <line x1="136" y1="72" x2="136" y2="220" stroke={strokeColor} strokeWidth="1" opacity="0.65" />
              {/* 4 Front Buttons */}
              {[94, 128, 162, 196].map((cy) => (
                <circle key={cy} cx="130" cy={cy} r="3.2" fill="#1F1F1D" stroke={strokeColor} strokeWidth="0.8" />
              ))}
              {/* Left & Right Chest Pockets with Buttoned Flaps */}
              <rect x="80" y="102" width="36" height="40" rx="2" fill={primaryHex} stroke={strokeColor} strokeWidth="1.2" />
              <path d="M80 102 L116 102 L116 114 L98 118 L80 114 Z" fill={primaryHex} stroke={strokeColor} strokeWidth="1.2" />
              <circle cx="98" cy="112" r="2.3" fill="#1F1F1D" stroke={strokeColor} strokeWidth="0.7" />

              <rect x="144" y="102" width="36" height="40" rx="2" fill={primaryHex} stroke={strokeColor} strokeWidth="1.2" />
              <path d="M144 102 L180 102 L180 114 L162 118 L144 114 Z" fill={primaryHex} stroke={strokeColor} strokeWidth="1.2" />
              <circle cx="162" cy="112" r="2.3" fill="#1F1F1D" stroke={strokeColor} strokeWidth="0.7" />

              {/* Von Dutch Inspired Oval Embroidered Logo on Left Chest */}
              <ellipse cx="162" cy="88" rx="16" ry="7.5" fill="#1F1F1D" stroke="#EAE6DF" strokeWidth="1.2" />
              <text x="162" y="90.5" textAnchor="middle" fontSize="6" fontWeight="800" fontStyle="italic" fill="#EAE6DF" fontFamily="Outfit, sans-serif">
                ECOSYS
              </text>

              {/* Side Woven Tag */}
              <rect x="192" y="182" width="5" height="14" fill="#1A1A18" />
              {/* Hem Stitch */}
              <path d="M68 212 C110 217 150 217 192 212" stroke={stitchColor} strokeWidth="1" strokeDasharray="3 2" fill="none" />
            </svg>
            <span className="mt-2 text-xs font-medium text-[#3A3935]">Tampak Depan</span>
          </div>

          {/* TAMPAK BELAKANG */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 260 250" className="w-full max-w-[230px] h-auto" role="img" aria-label="Workshirt Tampak Belakang">
              <path
                d="M78 32 L182 32 L242 88 L214 126 L192 108 L192 218 C150 223 110 223 68 218 L68 108 L46 126 L18 88 Z"
                fill={primaryHex}
                stroke="#1F1F1D"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              {/* Collar Back */}
              <path d="M78 32 Q130 22 182 32 L176 44 Q130 36 84 44 Z" fill={primaryHex} stroke="#1F1F1D" strokeWidth="1.8" />
              {/* Back Shoulder Yoke */}
              <line x1="62" y1="74" x2="198" y2="74" stroke={strokeColor} strokeWidth="1.2" opacity="0.8" />
              <line x1="62" y1="77" x2="198" y2="77" stroke={stitchColor} strokeWidth="1" strokeDasharray="3 2" />
              {/* Back Minimalist ECOSYS Tab on Yoke */}
              <rect x="118" y="70" width="24" height="7" rx="1" fill="#EAE6DF" stroke="#1F1F1D" strokeWidth="0.7" />
              <text x="130" y="75.2" textAnchor="middle" fontSize="4.2" fontWeight="800" fill="#1A1A18" fontFamily="Outfit, sans-serif">
                ECOSYS
              </text>
              {/* Bottom Hem Stitch */}
              <path d="M68 212 C110 217 150 217 192 212" stroke={stitchColor} strokeWidth="1" strokeDasharray="3 2" fill="none" />
            </svg>
            <span className="mt-2 text-xs font-medium text-[#3A3935]">Tampak Belakang</span>
          </div>
        </div>
      </div>
    );
  }

  // ESSENTIAL SHIRT (Long Sleeve Oxford Button-Down)
  return (
    <div className="bg-[#ECE8DF] border border-[#D8D2C5] rounded-xl p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-[#D8D2C5]">
        <div className="text-xs font-medium text-[#4A4943]">
          <span>Technical Flat Blueprint</span>
          <span className="mx-2" aria-hidden="true">·</span>
          <span className="text-[#1A1A18] font-semibold">Essential Shirt (100% Cotton Oxford)</span>
        </div>
        <div className="text-xs font-mono-tabular text-[#4A4943]">
          Warna Aktif: <strong className="text-[#1A1A18]">{colorName}</strong>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
        {/* TAMPAK DEPAN */}
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 260 260" className="w-full max-w-[230px] h-auto" role="img" aria-label="Essential Shirt Tampak Depan">
            {/* Long Sleeves + Curved Regular-Fit Body */}
            <path
              d="M82 32 L178 32 L212 58 L234 212 L204 216 L190 98 L190 214 C162 232 98 232 70 214 L70 98 L56 216 L26 212 L48 58 Z"
              fill={primaryHex}
              stroke="#1F1F1D"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            {/* Cuff Lines */}
            <line x1="28" y1="196" x2="57" y2="200" stroke={strokeColor} strokeWidth="1.2" />
            <line x1="232" y1="196" x2="203" y2="200" stroke={strokeColor} strokeWidth="1.2" />
            {/* Neck Interior & Woven Tag */}
            <path d="M100 32 L130 60 L160 32 Z" fill={primaryHex} stroke="#1F1F1D" strokeWidth="1.2" />
            <rect x="117" y="36" width="26" height="11" rx="1" fill="#F7F4EE" stroke="#1F1F1D" strokeWidth="0.6" />
            <text x="130" y="43.5" textAnchor="middle" fontSize="5" fontWeight="700" fill="#1A1A18" fontFamily="Outfit, sans-serif">
              ECOSYS
            </text>
            {/* Button-Down Collar Points */}
            <path d="M88 30 L130 60 L106 74 L84 48 Z" fill={primaryHex} stroke="#1F1F1D" strokeWidth="1.5" />
            <path d="M172 30 L130 60 L154 74 L176 48 Z" fill={primaryHex} stroke="#1F1F1D" strokeWidth="1.5" />
            {/* Collar Button-Down Dots */}
            <circle cx="105" cy="68" r="1.8" fill={strokeColor} />
            <circle cx="155" cy="68" r="1.8" fill={strokeColor} />

            {/* Placket & Tonal Buttons */}
            <line x1="125" y1="60" x2="125" y2="226" stroke={strokeColor} strokeWidth="1" opacity="0.65" />
            <line x1="135" y1="60" x2="135" y2="226" stroke={strokeColor} strokeWidth="1" opacity="0.65" />
            {[82, 108, 134, 160, 186, 210].map((cy) => (
              <circle key={cy} cx="130" cy={cy} r="2.4" fill={primaryHex} stroke={strokeColor} strokeWidth="1" />
            ))}

            {/* Left Chest Pocket with Minimalist Lowercase "ecosys" Embroidery */}
            <path
              d="M146 98 L178 98 L178 130 L162 138 L146 130 Z"
              fill={primaryHex}
              stroke={strokeColor}
              strokeWidth="1.2"
            />
            <text
              x="162"
              y="94"
              textAnchor="middle"
              fontSize="6.5"
              fontWeight="700"
              fill={isLightFabric ? '#293829' : '#EAE6DF'}
              fontFamily="Outfit, sans-serif"
            >
              ecosys
            </text>
            {/* Side Tag */}
            <rect x="190" y="186" width="4.5" height="12" fill="#1A1A18" />
          </svg>
          <span className="mt-2 text-xs font-medium text-[#3A3935]">Tampak Depan</span>
        </div>

        {/* TAMPAK BELAKANG */}
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 260 260" className="w-full max-w-[230px] h-auto" role="img" aria-label="Essential Shirt Tampak Belakang">
            <path
              d="M82 32 L178 32 L212 58 L234 212 L204 216 L190 98 L190 214 C162 232 98 232 70 214 L70 98 L56 216 L26 212 L48 58 Z"
              fill={primaryHex}
              stroke="#1F1F1D"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            {/* Back Yoke & Box Pleat */}
            <line x1="62" y1="68" x2="198" y2="68" stroke={strokeColor} strokeWidth="1.2" opacity="0.8" />
            <line x1="125" y1="68" x2="125" y2="225" stroke={strokeColor} strokeWidth="0.9" opacity="0.55" />
            <line x1="135" y1="68" x2="135" y2="225" stroke={strokeColor} strokeWidth="0.9" opacity="0.55" />
            {/* Locker Loop Detail */}
            <rect x="124" y="68" width="12" height="5" rx="1" fill={primaryHex} stroke={strokeColor} strokeWidth="0.9" />
            {/* Cuff Lines */}
            <line x1="28" y1="196" x2="57" y2="200" stroke={strokeColor} strokeWidth="1.2" />
            <line x1="232" y1="196" x2="203" y2="200" stroke={strokeColor} strokeWidth="1.2" />
          </svg>
          <span className="mt-2 text-xs font-medium text-[#3A3935]">Tampak Belakang</span>
        </div>
      </div>
    </div>
  );
};
