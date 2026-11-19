// Illustrations for the app pages, as inline SVG so they follow the light/dark theme (the i-* classes in
// site.css). They hold no words, only format names and letters that read the same in every language.
// An app uses them by name: `hero` for the big picture at the top, `art` on each feature.

const ART = (() => {
  // A sheet of paper with text lines; `lines` sets how many, `selected` draws the "picked" ring and check.
  function page(x, y, w, h, { lines = 4, selected = false } = {}) {
    const pad = w * 0.16, gap = h / (lines + 2.2);
    let out = `<rect class="i-paper i-outline" x="${x}" y="${y}" width="${w}" height="${h}" rx="${Math.max(3, w * 0.07)}"/>`;
    for (let i = 0; i < lines; i++) {
      const lw = (w - pad * 2) * (i === 0 ? 0.55 : i === lines - 1 ? 0.7 : 1);
      out += `<rect class="${i === 0 ? "i-ink-strong" : "i-ink"}" x="${x + pad}" y="${y + gap * (i + 1)}" width="${lw}" height="${Math.max(2.5, h * 0.045)}" rx="1.5"/>`;
    }
    if (selected) {
      out += `<rect class="i-select" x="${x - 2.5}" y="${y - 2.5}" width="${w + 5}" height="${h + 5}" rx="${Math.max(4, w * 0.09)}"/>`;
      out += `<circle class="i-primary" cx="${x + w}" cy="${y}" r="9"/><path d="M${x + w - 4} ${y}l3 3 5-6" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>`;
    }
    return out;
  }

  // Wi-Fi style waves; `dir` is the direction they spread: "up" or "left".
  function waves(cx, cy, radii, dir) {
    return radii.map((r, i) => {
      const d = dir === "up"
        ? `M${cx - r} ${cy} A${r} ${r} 0 0 1 ${cx + r} ${cy}`
        : `M${cx} ${cy - r} A${r} ${r} 0 0 0 ${cx} ${cy + r}`;
      return `<path class="i-wave" d="${d}" opacity="${1 - i * 0.28}"/>`;
    }).join("");
  }

  function badge(x, y, w, label, color) {
    return `<rect x="${x}" y="${y}" width="${w}" height="18" rx="9" fill="${color}"/>` +
      `<text x="${x + w / 2}" y="${y + 12.8}" text-anchor="middle" class="i-label">${label}</text>`;
  }

  // Network scanner: lid, body, paper coming out, status light.
  function scanner(x, y, s = 1) {
    return `<g transform="translate(${x} ${y}) scale(${s})">
      <rect class="i-paper i-outline" x="22" y="0" width="56" height="18" rx="2"/>
      <rect class="i-ink" x="30" y="6" width="30" height="3" rx="1.5"/>
      <rect class="i-device" x="0" y="12" width="100" height="16" rx="7"/>
      <rect class="i-device-2" x="0" y="24" width="100" height="42" rx="10"/>
      <rect x="16" y="38" width="68" height="5" rx="2.5" fill="#000" opacity=".35"/>
      <circle class="i-accent" cx="84" cy="56" r="4"/>
    </g>`;
  }

  const hero = `
    <svg class="hero-art" viewBox="0 0 480 360" aria-hidden="true">
      <defs><filter id="beam-glow" x="-10%" y="-300%" width="120%" height="700%"><feGaussianBlur stdDeviation="3"/></filter></defs>
      <circle class="i-glow" cx="262" cy="178" r="168"/>
      <g class="i-sparkle">
        <path d="M446 34l3 8 8 3-8 3-3 8-3-8-8-3 8-3z"/>
        <path d="M58 58l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/>
        <circle cx="470" cy="210" r="3"/>
      </g>

      <!-- Desktop window: the Windows app with scanned pages -->
      <rect class="i-shadow" x="98" y="50" width="360" height="240" rx="14"/>
      <rect class="i-surface" x="90" y="40" width="360" height="240" rx="14"/>
      <path class="i-surface-2" d="M104 40h332a14 14 0 0 1 14 14v14H90V54a14 14 0 0 1 14-14z"/>
      <circle cx="108" cy="54" r="4" fill="#f87171"/><circle cx="122" cy="54" r="4" fill="#fbbf24"/><circle cx="136" cy="54" r="4" fill="#34d399"/>
      <path class="i-surface-2" d="M90 68h78v212h-64a14 14 0 0 1-14-14z"/>
      <rect class="i-primary-soft" x="100" y="82" width="58" height="12" rx="6"/>
      <rect class="i-ink" x="102" y="104" width="46" height="5" rx="2.5"/>
      <rect class="i-ink" x="102" y="120" width="52" height="5" rx="2.5"/>
      <rect class="i-ink" x="102" y="136" width="40" height="5" rx="2.5"/>
      ${page(188, 84, 54, 70)}
      ${page(252, 84, 54, 70, { lines: 5, selected: true })}
      ${page(316, 84, 54, 70, { lines: 3 })}
      ${page(380, 84, 54, 70)}
      ${page(188, 168, 54, 70, { lines: 5 })}
      ${page(252, 168, 54, 70, { lines: 3 })}
      <rect class="i-add" x="316" y="168" width="54" height="70" rx="4"/>
      <path class="i-add-plus" d="M343 193v20M333 203h20"/>
      <rect class="i-primary" x="368" y="252" width="68" height="18" rx="9"/>
      <rect x="384" y="259" width="36" height="4" rx="2" fill="#fff" opacity=".9"/>
      <rect class="i-outline" x="90" y="40" width="360" height="240" rx="14" fill="none"/>

      <!-- Network scanner sending pages over Wi-Fi -->
      ${waves(304, 318, [10, 20, 30], "left")}
      ${scanner(318, 286, 1.1)}

      <!-- Phone: the Android app scanning a page -->
      <rect class="i-shadow" x="44" y="114" width="132" height="236" rx="24"/>
      <rect class="i-device" x="36" y="104" width="132" height="236" rx="24"/>
      <rect class="i-surface" x="44" y="116" width="116" height="212" rx="17"/>
      <rect class="i-ink-strong" x="56" y="130" width="46" height="7" rx="3.5"/>
      <circle class="i-ink" cx="146" cy="133.5" r="4"/>
      ${page(62, 150, 80, 104, { lines: 7 })}
      <g class="i-scan-beam">
        <rect x="54" y="150" width="96" height="5" rx="2.5" fill="#22d3ee" filter="url(#beam-glow)"/>
        <rect x="56" y="151" width="92" height="3" rx="1.5" fill="#a5f3fc"/>
      </g>
      <circle class="i-primary" cx="102" cy="298" r="17"/>
      <path d="M94 293v-3h3M110 293v-3h-3M94 303v3h3M110 303v3h-3M95 298h14" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

  const features = {
    scanners: `
      <svg viewBox="0 0 200 120" aria-hidden="true">
        ${waves(100, 50, [12, 23, 34], "up")}
        ${scanner(55, 52, 0.9)}
        <circle class="i-primary" cx="158" cy="30" r="11"/>
        <path d="M152.5 30l4 4 7-8" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,

    pages: `
      <svg viewBox="0 0 200 120" aria-hidden="true">
        <g transform="rotate(-10 58 70)">${page(38, 42, 40, 52)}</g>
        <g transform="rotate(10 142 70)">${page(122, 42, 40, 52, { lines: 3 })}</g>
        <rect class="i-shadow" x="83" y="34" width="44" height="58" rx="4"/>
        ${page(78, 28, 44, 58, { lines: 5, selected: true })}
        <circle class="i-primary" cx="44" cy="30" r="11"/>
        <path d="M40 27.5a5.5 5.5 0 1 1-.5 6M40 24v3.8h3.8" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="160" cy="30" r="11" fill="#dc2626"/>
        <path d="M156 26l8 8M164 26l-8 8" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>
        <path class="i-move" d="M82 104h36M88 99l-6 5 6 5M112 99l6 5-6 5"/>
      </svg>`,

    formats: `
      <svg viewBox="0 0 200 120" aria-hidden="true">
        ${page(36, 16, 62, 84, { lines: 6 })}
        <circle class="i-lens" cx="90" cy="70" r="17"/>
        <path class="i-lens-handle" d="M102 82l13 13"/>
        ${badge(130, 24, 48, "PDF", "#dc2626")}
        ${badge(130, 51, 48, "JPG", "#1d4ed8")}
        ${badge(130, 78, 48, "PNG", "#0e7490")}
      </svg>`,

    merge: `
      <svg viewBox="0 0 200 120" aria-hidden="true">
        ${page(22, 14, 40, 52, { lines: 4 })}
        <rect class="i-paper i-outline" x="34" y="56" width="40" height="52" rx="3"/>
        <rect class="i-photo" x="40" y="62" width="28" height="22" rx="2"/>
        <path d="M40 84l9-10 6 6 4-4 9 8z" fill="#0e7490" opacity=".75"/>
        <circle cx="61" cy="68" r="3" fill="#fbbf24"/>
        <path class="i-arrow" d="M70 40c22 0 26 20 44 20M82 84c16 0 18-24 32-24M106 53l8 7-8 7"/>
        <rect class="i-shadow" x="128" y="22" width="56" height="76" rx="5"/>
        ${page(122, 16, 56, 76, { lines: 6 })}
        ${badge(130, 80, 40, "PDF", "#dc2626")}
      </svg>`,

    languages: `
      <svg viewBox="0 0 200 120" aria-hidden="true">
        <path d="M30 22h52a8 8 0 0 1 8 8v26a8 8 0 0 1-8 8H48l-10 9v-9h-8a8 8 0 0 1-8-8V30a8 8 0 0 1 8-8z" fill="#1d4ed8"/>
        <text x="56" y="52" text-anchor="middle" class="i-glyph">Aa</text>
        <path d="M118 14h52a8 8 0 0 1 8 8v26a8 8 0 0 1-8 8h-8v9l-10-9h-34a8 8 0 0 1-8-8V22a8 8 0 0 1 8-8z" fill="#0e7490"/>
        <text x="144" y="44" text-anchor="middle" class="i-glyph">Åä</text>
        <path d="M76 60h52a8 8 0 0 1 8 8v26a8 8 0 0 1-8 8h-8v9l-10-9H76a8 8 0 0 1-8-8V68a8 8 0 0 1 8-8z" fill="#7c3aed"/>
        <text x="102" y="91" text-anchor="middle" class="i-glyph">أب</text>
      </svg>`,

    themes: `
      <svg viewBox="0 0 200 120" aria-hidden="true">
        <rect x="26" y="20" width="70" height="80" rx="9" fill="#ffffff" stroke="#d5d9e8" stroke-width="1.5"/>
        <path d="M35 20h52a9 9 0 0 1 9 9v5H26v-5a9 9 0 0 1 9-9z" fill="#eef1fa"/>
        <rect x="36" y="46" width="34" height="5" rx="2.5" fill="#c3cbe0"/>
        <rect x="36" y="56" width="50" height="5" rx="2.5" fill="#d5dbea"/>
        <circle cx="61" cy="80" r="8" fill="#f59e0b"/>
        <path d="M61 66v3M61 91v3M47 80h3M72 80h3M51 70l2 2M69 88l2 2M51 90l2-2M69 72l2-2" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/>
        <rect x="104" y="20" width="70" height="80" rx="9" fill="#1b1c22" stroke="#3a3d49" stroke-width="1.5"/>
        <path d="M113 20h52a9 9 0 0 1 9 9v5h-70v-5a9 9 0 0 1 9-9z" fill="#262833"/>
        <rect x="114" y="46" width="34" height="5" rx="2.5" fill="#4a5068"/>
        <rect x="114" y="56" width="50" height="5" rx="2.5" fill="#3a3f52"/>
        <path d="M143 71a10 10 0 1 0 6 16 8 8 0 0 1-6-16z" fill="#c7d2fe"/>
      </svg>`,
  };

  // A small APS Scan app tile (the app icon), `size` px wide.
  function scanTile(x, y, size) {
    return `<g transform="translate(${x} ${y}) scale(${size / 64})">
      <rect width="64" height="64" rx="15" fill="url(#tile-scan)"/>
      <path d="M20 14h17l7 7v27a3 3 0 0 1-3 3H20a3 3 0 0 1-3-3V17a3 3 0 0 1 3-3z" fill="#fff"/>
      <path d="M37 14v7h7z" fill="#c7d2fe"/>
      <g fill="#b8c4e0"><rect x="22" y="22" width="9" height="2.5" rx="1.2"/><rect x="22" y="38" width="17" height="2.5" rx="1.2"/><rect x="22" y="44" width="13" height="2.5" rx="1.2"/></g>
      <rect x="12" y="30" width="40" height="3.5" rx="1.75" fill="#67e8f9"/>
    </g>`;
  }

  // Landing page picture: the download center on a laptop, an app downloading on a phone,
  // and Android / Windows around them.
  const center = `
    <svg class="center-art" viewBox="0 0 540 420" aria-hidden="true">
      <defs>
        <linearGradient id="tile-scan" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3b5bdb"/><stop offset="1" stop-color="#14a3b8"/></linearGradient>
        <linearGradient id="banner" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#3b5bdb" stop-opacity=".22"/><stop offset="1" stop-color="#14a3b8" stop-opacity=".22"/></linearGradient>
      </defs>
      <circle class="i-glow" cx="290" cy="210" r="182"/>
      <g class="i-sparkle">
        <path d="M300 6l3 8 8 3-8 3-3 8-3-8-8-3 8-3z"/>
        <path d="M524 150l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/>
        <circle cx="30" cy="250" r="3.5"/>
        <circle cx="526" cy="292" r="3"/>
      </g>

      <!-- Laptop showing the download center -->
      <rect class="i-shadow" x="140" y="60" width="340" height="228" rx="16"/>
      <rect class="i-device" x="130" y="48" width="340" height="228" rx="16"/>
      <rect class="i-surface" x="140" y="58" width="320" height="208" rx="8"/>
      <path class="i-surface-2" d="M148 58h304a8 8 0 0 1 8 8v18H140V66a8 8 0 0 1 8-8z"/>
      <circle cx="154" cy="71" r="3.5" fill="#f87171"/><circle cx="166" cy="71" r="3.5" fill="#fbbf24"/><circle cx="178" cy="71" r="3.5" fill="#34d399"/>
      <rect class="i-surface i-outline" x="200" y="65" width="150" height="12" rx="6"/>
      <rect x="156" y="96" width="288" height="40" rx="9" fill="url(#banner)"/>
      <rect class="i-ink-strong" x="170" y="106" width="96" height="8" rx="4"/>
      <rect class="i-ink" x="170" y="120" width="140" height="5" rx="2.5"/>
      ${scanTile(160, 150, 52)}
      <rect class="i-select" x="156" y="146" width="60" height="60" rx="16"/>
      <rect class="i-ghost" x="230" y="150" width="52" height="52" rx="14"/>
      <rect class="i-ghost" x="300" y="150" width="52" height="52" rx="14"/>
      <rect class="i-ghost" x="370" y="150" width="52" height="52" rx="14"/>
      <rect class="i-ink-strong" x="164" y="214" width="44" height="5" rx="2.5"/>
      <rect class="i-ink" x="236" y="214" width="40" height="5" rx="2.5"/>
      <rect class="i-ink" x="306" y="214" width="40" height="5" rx="2.5"/>
      <rect class="i-ink" x="376" y="214" width="40" height="5" rx="2.5"/>
      <rect class="i-primary" x="160" y="230" width="52" height="18" rx="9"/>
      <path d="M186 234v9m-4-4 4 4 4-4" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path class="i-device-2" d="M100 276h400l-14 20a10 10 0 0 1-8.2 4.3H122.2a10 10 0 0 1-8.2-4.3z"/>
      <rect x="268" y="276" width="64" height="6" rx="3" fill="#000" opacity=".22"/>

      <!-- Phone downloading APS Scan -->
      <rect class="i-shadow" x="60" y="170" width="128" height="230" rx="24"/>
      <rect class="i-device" x="50" y="160" width="128" height="230" rx="24"/>
      <rect class="i-surface" x="58" y="172" width="112" height="206" rx="17"/>
      <rect class="i-ink" x="98" y="180" width="32" height="5" rx="2.5"/>
      ${scanTile(84, 200, 60)}
      <rect class="i-ink-strong" x="86" y="272" width="56" height="7" rx="3.5"/>
      <rect class="i-ink" x="94" y="285" width="40" height="5" rx="2.5"/>
      <rect class="i-surface-2" x="74" y="306" width="80" height="8" rx="4"/>
      <rect class="i-primary i-progress" x="74" y="306" width="80" height="8" rx="4"/>
      <rect class="i-primary" x="82" y="330" width="64" height="24" rx="12"/>
      <path d="M114 335v10m-4.5-4.5 4.5 4.5 4.5-4.5M107 349h14" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

      <!-- Floating badges -->
      <g class="i-float">
        <circle class="i-shadow" cx="474" cy="76" r="28"/>
        <circle class="i-primary" cx="470" cy="70" r="27"/>
        <path d="M470 56v22m-9-9 9 9 9-9M459 86h22" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <g class="i-float-2">
        <circle cx="54" cy="166" r="15" fill="#16a34a"/>
        <path d="M47 166l5 5 9-10" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <g class="i-float-3">
        <circle class="i-surface i-outline" cx="500" cy="238" r="26"/>
        <path transform="translate(488 226)" fill="#3ddc84" d="M17.6 9.48l1.84-3.18a.38.38 0 0 0-.66-.38l-1.86 3.22a11.4 11.4 0 0 0-9.84 0L5.22 5.92a.38.38 0 0 0-.66.38L6.4 9.48A10.8 10.8 0 0 0 1 18h22a10.8 10.8 0 0 0-5.4-8.52zM7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"/>
      </g>
      <g class="i-float-2">
        <circle class="i-surface i-outline" cx="76" cy="112" r="26"/>
        <path transform="translate(64 100)" fill="#0078d4" d="M3 5.1l7.4-1v7.2H3zm8.3-1.2L21 2.5v8.8h-9.7zM3 12.2h7.4v7.2L3 18.4zm8.3 0H21V21l-9.7-1.4z"/>
      </g>
      <g class="i-float">
        <circle class="i-surface i-outline" cx="470" cy="336" r="26"/>
        <path class="i-apple" transform="translate(458 323)" d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
      </g>
    </svg>`;

  return { hero: { scan: hero }, features, center };
})();
