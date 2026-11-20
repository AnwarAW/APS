// APS Download Center: the app list (index.html) and every app page (<app>/index.html) run this script.
// An app page says which app it shows with <body data-app="<id>">; the list page has no data-app.

// The public repo that holds every app's releases.
const REPO = "AnwarAW/APS";
const RELEASES_PAGE = `https://github.com/${REPO}/releases`;

// ---------------------------------------------------------------------------------------------------------------
// The apps, in the order they're listed. To add one:
//   1. copy the APS Scan entry below and change it; `id` is also the app page's folder name;
//   2. copy the aps-scan/ folder to a folder named after the new id and change data-app in its index.html;
//   3. tag its releases <tagPrefix><version> (e.g. aps-scan-v1.2.0). The page finds the files by extension.
// ---------------------------------------------------------------------------------------------------------------
const APPS = [
  {
    id: "aps-scan",
    name: "APS Scan",
    tagPrefix: "aps-scan-v",
    icon: cls => `
      <svg class="${cls}" viewBox="0 0 64 64" aria-hidden="true">
        <defs>
          <linearGradient id="scan-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3b5bdb"/><stop offset="1" stop-color="#14a3b8"/></linearGradient>
          <filter id="scan-glow" x="-20%" y="-200%" width="140%" height="500%"><feGaussianBlur stdDeviation="1.2"/></filter>
        </defs>
        <rect width="64" height="64" rx="14" fill="url(#scan-bg)"/>
        <path d="M20 14h17l7 7v27a3 3 0 0 1-3 3H20a3 3 0 0 1-3-3V17a3 3 0 0 1 3-3z" fill="#fff"/>
        <path d="M37 14v7h7z" fill="#c7d2fe"/>
        <g fill="#b8c4e0"><rect x="22" y="20" width="8" height="2" rx="1"/><rect x="22" y="25" width="17" height="2" rx="1"/><rect x="22" y="36" width="17" height="2" rx="1"/><rect x="22" y="41" width="17" height="2" rx="1"/><rect x="22" y="46" width="11" height="2" rx="1"/></g>
        <rect x="12" y="30" width="40" height="3" rx="1.5" fill="#67e8f9" filter="url(#scan-glow)"/>
        <rect x="14" y="30.5" width="36" height="2" rx="1" fill="#cffafe"/>
      </svg>`,
    downloads: [
      { platform: "android", ext: ".apk", requires: { en: "Android 8.0 or newer", sv: "Android 8.0 eller senare", ar: "Android 8.0 أو أحدث" } },
      // iOS apps can't be installed from a file: set `url` to the App Store page once APS Scan is published there.
      // Until then the iOS button stays hidden.
      { platform: "ios", url: "", requires: { en: "iOS 17 or newer", sv: "iOS 17 eller senare", ar: "iOS 17 أو أحدث" } },
      { platform: "windows", ext: ".msi", requires: { en: "Windows 10 and 11", sv: "Windows 10 och 11", ar: "Windows 10 و11" } },
      { platform: "macos", ext: ".dmg", requires: { en: "macOS 14 or newer", sv: "macOS 14 eller senare", ar: "macOS 14 أو أحدث" } },
    ],
    // The big picture at the top of the app page, from ART.hero in art.js.
    hero: "scan",
    // Feature cards on the app page: `art` names a picture in ART.features (art.js); then [title, text] per language.
    features: [
      {
        art: "scanners",
        en: ["Finds your scanner", "Network scanners show up by themselves (eSCL and HP), or add one by its address."],
        sv: ["Hittar din skanner", "Nätverksskannrar dyker upp av sig själva (eSCL och HP), eller lägg till en med dess adress."],
        ar: ["يعثر على ماسحك الضوئي", "تظهر الماسحات الضوئية المتصلة بالشبكة تلقائيًا (<bdi>eSCL</bdi> و<bdi>HP</bdi>)، ويمكنك أيضًا إضافة ماسح بعنوانه."],
      },
      {
        art: "pages",
        en: ["Tidy up pages", "Rotate, reorder and delete scanned pages before you save."],
        sv: ["Snygga till sidorna", "Rotera, ordna om och radera skannade sidor innan du sparar."],
        ar: ["رتّب صفحاتك", "دوّر الصفحات الممسوحة، وغيّر ترتيبها، واحذف ما لا تحتاج إليه قبل الحفظ."],
      },
      {
        art: "formats",
        en: ["Save your way", "PDF, searchable PDF with text you can find and copy, JPEG or PNG."],
        sv: ["Spara som du vill", "PDF, sökbar PDF med text du kan söka i och kopiera, JPEG eller PNG."],
        ar: ["احفظ بالصيغة التي تناسبك", "<bdi>PDF</bdi>، أو <bdi>PDF</bdi> قابل للبحث يمكنك البحث في نصه ونسخه، أو صورة <bdi>JPEG</bdi> أو <bdi>PNG</bdi>."],
      },
      {
        art: "merge",
        en: ["Merge PDFs", "Combine PDFs and images into one PDF, in the order you choose."],
        sv: ["Slå ihop PDF-filer", "Kombinera PDF-filer och bilder till en PDF, i den ordning du vill."],
        ar: ["دمج ملفات <bdi>PDF</bdi>", "اجمع ملفات <bdi>PDF</bdi> والصور في ملف <bdi>PDF</bdi> واحد، بالترتيب الذي تختاره."],
      },
      {
        art: "languages",
        en: ["Three languages", "English, Swedish and Arabic, with a right-to-left layout for Arabic."],
        sv: ["Tre språk", "Engelska, svenska och arabiska, med höger-till-vänster-layout för arabiska."],
        ar: ["ثلاث لغات", "العربية والإنجليزية والسويدية، وتُعرض الواجهة العربية من اليمين إلى اليسار."],
      },
      {
        art: "themes",
        en: ["Light and dark", "Follows your system theme, or pick the one you like."],
        sv: ["Ljust och mörkt", "Följer systemets tema, eller välj det du gillar."],
        ar: ["الوضع الفاتح والداكن", "يتّبع مظهر جهازك، أو اختر المظهر الذي تفضّله."],
      },
    ],
    text: {
      en: {
        tagline: "Scan documents from network scanners and merge PDFs.",
      },
      sv: {
        tagline: "Skanna dokument från nätverksskannrar och slå ihop PDF-filer.",
      },
      ar: {
        tagline: "امسح مستنداتك ضوئيًا من ماسحات الشبكة، وادمج ملفات <bdi>PDF</bdi> بسهولة.",
      },
    },
  },
];

const PLATFORMS = {
  android: {
    name: "Android",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.6 9.48l1.84-3.18a.38.38 0 0 0-.66-.38l-1.86 3.22a11.4 11.4 0 0 0-9.84 0L5.22 5.92a.38.38 0 0 0-.66.38L6.4 9.48A10.8 10.8 0 0 0 1 18h22a10.8 10.8 0 0 0-5.4-8.52zM7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"/></svg>`,
  },
  windows: {
    name: "Windows",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 5.1l7.4-1v7.2H3zm8.3-1.2L21 2.5v8.8h-9.7zM3 12.2h7.4v7.2L3 18.4zm8.3 0H21V21l-9.7-1.4z"/></svg>`,
  },
  ios: {
    name: "iOS",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>`,
  },
  macos: {
    name: "macOS",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>`,
  },
};

const CHEVRON = `<svg class="chevron flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>`;

// Page texts in the app languages. Values may hold <b>/<bdi> markup; {placeholders} are filled in below.
const TEXT = {
  en: {
    dir: "ltr",
    copyright: "© {year} Anwar Abdul Wahhab. All rights reserved.",
    center: "APS Download Center",
    centerDescription: "Download APS apps for Android, iOS, Windows and macOS.",
    languageLabel: "Language",
    downloadsLabel: "Downloads",
    allApps: "All apps",
    appTitle: "{app} · APS Download Center",
    download: { android: "Download for Android", windows: "Download for Windows", ios: "Get it on the App Store", macos: "Download for macOS" },
    features: "What it does",
    installing: "Installing",
    installNote: {
      android: "The app isn't from Google Play, so Android asks first. Open the downloaded file, tap <b>Settings</b>, turn on <b>Allow from this source</b>, go back and tap <b>Install</b>.",
      windows: "If Windows shows \"Windows protected your PC\", click <b>More info</b> and then <b>Run anyway</b>. This appears because the installer isn't signed with a paid certificate. It installs for your user only, no admin rights needed.",
      ios: "Install it from the App Store like any other app.",
      macos: "Open the downloaded file and drag the app to <b>Applications</b>. If macOS says it can't check the app, open <b>System Settings → Privacy & Security</b> and click <b>Open Anyway</b>.",
    },
    version: "Version {version}",
    versionDate: "Version {version} · {date}",
    size: "{size} MB",
    notFound: "This app isn't in the APS Download Center.",
  },
  sv: {
    dir: "ltr",
    copyright: "© {year} Anwar Abdul Wahhab. Alla rättigheter förbehållna.",
    // ­: a soft hyphen, so the long word can break as "nedladdnings-center" in the big landing title.
    center: "APS nedladdnings­center",
    centerDescription: "Ladda ner APS-appar för Android, iOS, Windows och macOS.",
    languageLabel: "Språk",
    downloadsLabel: "Nedladdningar",
    allApps: "Alla appar",
    appTitle: "{app} · APS nedladdningscenter",
    download: { android: "Ladda ner för Android", windows: "Ladda ner för Windows", ios: "Hämta i App Store", macos: "Ladda ner för macOS" },
    features: "Det här kan appen",
    installing: "Installera",
    installNote: {
      android: "Appen kommer inte från Google Play, så Android frågar först. Öppna den nedladdade filen, tryck på <b>Inställningar</b>, slå på <b>Tillåt från den här källan</b>, gå tillbaka och tryck på <b>Installera</b>.",
      windows: "Om Windows visar ”Windows skyddade datorn” klickar du på <b>Mer information</b> och sedan <b>Kör ändå</b>. Det visas eftersom installationsprogrammet inte är signerat med ett betalt certifikat. Det installeras bara för din användare, inga administratörsrättigheter behövs.",
      ios: "Installera den från App Store som vilken app som helst.",
      macos: "Öppna den nedladdade filen och dra appen till <b>Program</b>. Om macOS säger att appen inte kan kontrolleras öppnar du <b>Systeminställningar → Integritet och säkerhet</b> och klickar på <b>Öppna ändå</b>.",
    },
    version: "Version {version}",
    versionDate: "Version {version} · {date}",
    size: "{size} MB",
    notFound: "Den här appen finns inte i APS nedladdningscenter.",
  },
  ar: {
    dir: "rtl",
    copyright: "© {year} أنور عبد الوهاب. جميع الحقوق محفوظة.",
    center: "مركز تنزيلات <bdi>APS</bdi>",
    centerDescription: "نزّل تطبيقات APS لأنظمة Android وiOS وWindows وmacOS.",
    languageLabel: "اللغة",
    downloadsLabel: "التنزيلات",
    allApps: "كل التطبيقات",
    appTitle: "{app} · مركز تنزيلات APS",
    download: { android: "تنزيل لأجهزة <bdi>Android</bdi>", windows: "تنزيل لنظام <bdi>Windows</bdi>", ios: "نزّله من <bdi>App Store</bdi>", macos: "تنزيل لنظام <bdi>macOS</bdi>" },
    features: "مزايا التطبيق",
    installing: "طريقة التثبيت",
    installNote: {
      android: "لأن التطبيق ليس من <bdi>Google Play</bdi>، يطلب منك <bdi>Android</bdi> الإذن أولًا: افتح الملف الذي نزّلته، واضغط <b>الإعدادات</b>، وفعّل <b>السماح من هذا المصدر</b>، ثم ارجع واضغط <b>تثبيت</b>.",
      windows: "إذا ظهرت رسالة «قام <bdi>Windows</bdi> بحماية الكمبيوتر الشخصي»، فانقر <b>مزيد من المعلومات</b> ثم <b>تشغيل على أي حال</b>. تظهر هذه الرسالة لأن برنامج التثبيت غير موقَّع بشهادة مدفوعة. يُثبَّت التطبيق لحسابك وحده، ولا يحتاج إلى صلاحيات المسؤول.",
      ios: "ثبّته من <bdi>App Store</bdi> كأي تطبيق آخر.",
      macos: "افتح الملف الذي نزّلته، ثم اسحب التطبيق إلى مجلد <b>التطبيقات</b>. إذا أفاد <bdi>macOS</bdi> بأنه لا يستطيع التحقق من التطبيق، فافتح <b>إعدادات النظام ← الخصوصية والأمن</b> وانقر <b>فتح على أي حال</b>.",
    },
    version: "الإصدار <bdi>{version}</bdi>",
    versionDate: "الإصدار <bdi>{version}</bdi> · {date}",
    size: "{size} ميغابايت",
    notFound: "لم نعثر على هذا التطبيق في مركز تنزيلات <bdi>APS</bdi>.",
  },
};
// Dates and numbers per language; Arabic keeps Western digits, as in the version numbers.
const LOCALE = { en: "en", sv: "sv-SE", ar: "ar-u-nu-latn" };

const fill = (template, values) => template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
const escapeHtml = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
// For plain-text places like the tab title: no markup, and no soft hyphens (some browsers show those as a gap there).
const stripTags = s => s.replace(/<[^>]+>/g, "").replace(/­/g, "");

// Order: ?lang= in the link, then the visitor's earlier pick, then the browser's languages, then English.
function pickLanguage() {
  const fromUrl = new URLSearchParams(location.search).get("lang");
  if (fromUrl in TEXT) return fromUrl;
  try {
    const saved = localStorage.getItem("lang");
    if (saved in TEXT) return saved;
  } catch (_) { /* storage blocked: fall through */ }
  for (const tag of navigator.languages || [navigator.language || ""]) {
    const base = tag.toLowerCase().split("-")[0];
    if (base in TEXT) return base;
  }
  return "en";
}

let lang = pickLanguage();
let releases = null;   // GitHub's release list, once it has answered (null = not yet / unavailable)
const pageApp = document.body.dataset.app;   // undefined on the list page

// Links between pages keep ?lang= when the visitor arrived with one (it also works when storage is blocked).
function withLang(href) {
  return new URLSearchParams(location.search).has("lang") ? `${href}?lang=${lang}` : href;
}

// The newest published release of an app, found by its tag prefix.
// A download that is a link (`url`, e.g. the App Store) shows only once the link is set; file downloads always show.
const shown = d => d.url === undefined || Boolean(d.url);

function latestRelease(app) {
  if (!releases) return null;
  return releases.find(r => !r.draft && !r.prerelease && r.tag_name.startsWith(app.tagPrefix)) || null;
}

function versionLine(app) {
  const t = TEXT[lang];
  const release = latestRelease(app);
  if (release) {
    const version = escapeHtml(release.tag_name.slice(app.tagPrefix.length));
    const date = release.published_at
      ? escapeHtml(new Date(release.published_at).toLocaleDateString(LOCALE[lang], { year: "numeric", month: "long", day: "numeric" }))
      : "";
    return fill(date ? t.versionDate : t.version, { version, date });
  }
  return "";   // no release yet: show nothing
}

function renderList() {
  const t = TEXT[lang];
  document.title = stripTags(t.center);

  // One row per app, linking to its page: icon, name, tagline, platforms and the latest version.
  document.getElementById("app-list").innerHTML = APPS.map(app => {
    const text = app.text[lang] || app.text.en;
    const chips = app.downloads.filter(shown).map(d => `<span class="chip">${PLATFORMS[d.platform].icon}<bdi>${PLATFORMS[d.platform].name}</bdi></span>`).join("");
    const version = versionLine(app);
    return `
      <li>
        <a class="app-row" href="${withLang(app.id + "/")}">
          ${app.icon("app-row-icon")}
          <div class="app-row-body">
            <h2><bdi>${escapeHtml(app.name)}</bdi></h2>
            <p>${text.tagline}</p>
            <p class="app-facts">${chips}${version ? `<span>${version}</span>` : ""}</p>
          </div>
          ${CHEVRON}
        </a>
      </li>`;
  }).join("");
}

function renderApp() {
  const t = TEXT[lang];
  const back = document.getElementById("back");
  back.href = withLang("../");
  back.querySelector("span").textContent = t.allApps;

  const root = document.getElementById("app");
  const app = APPS.find(a => a.id === pageApp);
  if (!app) {
    document.title = stripTags(t.center);
    root.innerHTML = `<p>${t.notFound}</p>`;
    return;
  }
  const text = app.text[lang] || app.text.en;
  const release = latestRelease(app);
  document.title = fill(t.appTitle, { app: app.name });

  const platforms = app.downloads.filter(shown).map(d => {
    const asset = release && (release.assets || []).find(a => a.name.toLowerCase().endsWith(d.ext));
    const href = d.url || (asset ? asset.browser_download_url : RELEASES_PAGE);
    // Not in <bdi>: the text is already in the page language, and isolating it would flip Arabic word order.
    const parts = [escapeHtml(d.requires[lang] || d.requires.en)];
    if (asset) {
      const size = (asset.size / 1048576).toLocaleString(LOCALE[lang], { minimumFractionDigits: 1, maximumFractionDigits: 1 });
      parts.push(fill(t.size, { size }));
    }
    return `
      <div class="platform">
        <a class="button" href="${escapeHtml(href)}">${PLATFORMS[d.platform].icon}<span>${t.download[d.platform]}</span></a>
        <span class="meta">${parts.join(" · ")}</span>
      </div>`;
  }).join("");

  const notes = app.downloads.filter(shown).map(d => `
    <div class="note">
      <strong><bdi>${PLATFORMS[d.platform].name}</bdi></strong>
      ${t.installNote[d.platform]}
    </div>`).join("");

  const features = app.features.map(f => {
    const [title, body] = f[lang] || f.en;
    return `
      <li class="feature">
        <div class="feature-art">${ART.features[f.art] || ""}</div>
        <h4>${title}</h4>
        <p>${body}</p>
      </li>`;
  }).join("");

  root.innerHTML = `
    <div class="app-hero">
      <div class="app-hero-text">
        <header class="hero">
          ${app.icon("hero-icon")}
          <div>
            <h1><bdi>${escapeHtml(app.name)}</bdi></h1>
            <p class="version">${versionLine(app)}</p>
          </div>
        </header>
        <p class="lead">${text.tagline}</p>
        <section class="platforms" aria-label="${t.downloadsLabel}">${platforms}</section>
      </div>
      ${ART.hero[app.hero] || ""}
    </div>
    <h3>${t.features}</h3>
    <ul class="feature-grid">${features}</ul>
    <h3>${t.installing}</h3>
    ${notes}`;
}

function render() {
  const t = TEXT[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = t.dir;
  document.querySelector('meta[name="description"]').content = t.centerDescription;
  document.querySelector(".languages").setAttribute("aria-label", t.languageLabel);
  for (const button of document.querySelectorAll(".languages button")) {
    button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
  }
  // The copyright line is written per language (the name is in Arabic letters on the Arabic page).
  const footer = document.querySelector(".site-footer p");
  if (footer) footer.innerHTML = fill(t.copyright, { year: `<bdi>${new Date().getFullYear()}</bdi>` });
  // Fixed texts in the HTML: <el data-t="key"> gets TEXT[lang][key].
  for (const el of document.querySelectorAll("[data-t]")) {
    if (t[el.dataset.t] != null) el.innerHTML = t[el.dataset.t];
  }
  if (pageApp) renderApp(); else renderList();
}

document.querySelector(".languages").addEventListener("click", event => {
  const button = event.target.closest("button[data-lang]");
  if (!button) return;
  lang = button.dataset.lang;
  try { localStorage.setItem("lang", lang); } catch (_) { /* not remembered, still switches */ }
  // Keep ?lang= in the address so a copied link opens in the same language.
  try {
    const url = new URL(location.href);
    url.searchParams.set("lang", lang);
    history.replaceState(null, "", url);
  } catch (_) { /* e.g. a local file preview */ }
  render();
});

render();

// One request for all apps: the newest 100 releases are plenty to find each app's latest one.
(async () => {
  try {
    const response = await fetch(`https://api.github.com/repos/${REPO}/releases?per_page=100`, {
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!response.ok) return;
    releases = await response.json();
    render();
  } catch (_) {
    // Offline or rate limited: the buttons still lead to the releases page.
  }
})();
