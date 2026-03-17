// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: "",
  clientId: "",
  token: "",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      // ─── CONFIGURACIÓ GENERAL ─────────────────────────────────────────
      {
        name: "settings",
        label: "\u2699\uFE0F Configuraci\xF3 general",
        path: "src/content",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          global: true
        },
        match: { include: "settings" },
        fields: [
          { type: "string", name: "siteName", label: "Nom del site" },
          { type: "image", name: "logo", label: "Logo nav", uploadDir: () => "public" },
          { type: "image", name: "logoFooter", label: "Logo footer", uploadDir: () => "public" },
          { type: "string", name: "phoneSantanyi", label: "Tel\xE8fon Santany\xED" },
          { type: "string", name: "phoneCalaDor", label: "Tel\xE8fon Cala d'Or" },
          { type: "string", name: "emailSantanyi", label: "Email Santany\xED" },
          { type: "string", name: "emailCalaDor", label: "Email Cala d'Or" },
          { type: "string", name: "instagram", label: "Instagram URL" },
          { type: "string", name: "facebook", label: "Facebook URL" },
          { type: "string", name: "whatsapp", label: "WhatsApp (sense +)" },
          { type: "string", name: "addressSantanyi", label: "Adre\xE7a Santany\xED" },
          { type: "string", name: "addressCalaDor", label: "Adre\xE7a Cala d'Or" },
          { type: "string", name: "googleMapsSantanyi", label: "Google Maps Santany\xED" },
          { type: "string", name: "googleMapsCalaDor", label: "Google Maps Cala d'Or" }
        ]
      },
      // ─── MENÚ DE NAVEGACIÓ ────────────────────────────────────────────
      {
        name: "navigation",
        label: "\u{1F9ED} Men\xFA de navegaci\xF3",
        path: "src/content",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          global: true
        },
        match: { include: "navigation" },
        fields: [
          { type: "string", name: "ctaDayPassLabelCa", label: "Bot\xF3 Day Pass (CA)" },
          { type: "string", name: "ctaDayPassLabelEs", label: "Bot\xF3 Day Pass (ES)" },
          { type: "string", name: "ctaDayPassLabelEn", label: "Bot\xF3 Day Pass (EN)" },
          { type: "string", name: "ctaDayPassLabelDe", label: "Bot\xF3 Day Pass (DE)" },
          { type: "string", name: "ctaDayPassUrl", label: "URL Day Pass" },
          { type: "string", name: "ctaBookLabelCa", label: "Bot\xF3 Reserva (CA)" },
          { type: "string", name: "ctaBookLabelEs", label: "Bot\xF3 Reserva (ES)" },
          { type: "string", name: "ctaBookLabelEn", label: "Bot\xF3 Reserva (EN)" },
          { type: "string", name: "ctaBookLabelDe", label: "Bot\xF3 Reserva (DE)" },
          { type: "string", name: "ctaBookUrl", label: "URL Reserva" },
          {
            type: "object",
            name: "items",
            label: "Elements del men\xFA",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.labelCa || "Element" }) },
            fields: [
              { type: "string", name: "labelCa", label: "Nom (CA)" },
              { type: "string", name: "labelEs", label: "Nom (ES)" },
              { type: "string", name: "labelEn", label: "Nom (EN)" },
              { type: "string", name: "labelDe", label: "Nom (DE)" },
              { type: "string", name: "href", label: "URL (ex: /natacio)" }
            ]
          }
        ]
      },
      // ─── HERO PORTADA ─────────────────────────────────────────────────
      {
        name: "hero",
        label: "\u{1F9B8} Hero portada",
        path: "src/content",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          global: true
        },
        match: { include: "hero" },
        fields: [
          { type: "string", name: "badgeCa", label: "Badge (CA)" },
          { type: "string", name: "badgeEs", label: "Badge (ES)" },
          { type: "string", name: "badgeEn", label: "Badge (EN)" },
          { type: "string", name: "badgeDe", label: "Badge (DE)" },
          { type: "string", name: "titleCa", label: "T\xEDtol (CA)", ui: { component: "textarea" } },
          { type: "string", name: "titleEs", label: "T\xEDtol (ES)", ui: { component: "textarea" } },
          { type: "string", name: "titleEn", label: "T\xEDtol (EN)", ui: { component: "textarea" } },
          { type: "string", name: "titleDe", label: "T\xEDtol (DE)", ui: { component: "textarea" } },
          { type: "string", name: "subtitleCa", label: "Subt\xEDtol (CA)", ui: { component: "textarea" } },
          { type: "string", name: "subtitleEs", label: "Subt\xEDtol (ES)", ui: { component: "textarea" } },
          { type: "string", name: "subtitleEn", label: "Subt\xEDtol (EN)", ui: { component: "textarea" } },
          { type: "string", name: "subtitleDe", label: "Subt\xEDtol (DE)", ui: { component: "textarea" } },
          { type: "string", name: "ctaPrimaryCa", label: "Bot\xF3 principal (CA)" },
          { type: "string", name: "ctaPrimaryEs", label: "Bot\xF3 principal (ES)" },
          { type: "string", name: "ctaPrimaryEn", label: "Bot\xF3 principal (EN)" },
          { type: "string", name: "ctaPrimaryDe", label: "Bot\xF3 principal (DE)" },
          {
            type: "object",
            name: "stats",
            label: "Estad\xEDstiques",
            list: true,
            ui: { itemProps: (item) => ({ label: `${item?.icon || ""} ${item?.number || ""} ${item?.labelCa || "Estad\xEDstica"}` }) },
            fields: [
              { type: "string", name: "icon", label: "Emoji icona" },
              { type: "string", name: "number", label: "N\xFAmero" },
              { type: "string", name: "labelCa", label: "Text (CA)" },
              { type: "string", name: "labelEs", label: "Text (ES)" },
              { type: "string", name: "labelEn", label: "Text (EN)" },
              { type: "string", name: "labelDe", label: "Text (DE)" }
            ]
          },
          { type: "image", name: "heroImage", label: "Foto de fons hero", uploadDir: () => "public/images" }
        ]
      },
      // ─── PREUS ────────────────────────────────────────────────────────
      {
        name: "preus",
        label: "\u{1F4B6} Preus i tarifes",
        path: "src/content",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          global: true
        },
        match: { include: "preus" },
        fields: [
          // ── Hero ──
          { type: "string", name: "heroBadgeCa", label: "Badge hero (CA)" },
          { type: "string", name: "heroBadgeEs", label: "Badge hero (ES)" },
          { type: "string", name: "heroBadgeEn", label: "Badge hero (EN)" },
          { type: "string", name: "heroBadgeDe", label: "Badge hero (DE)" },
          { type: "string", name: "heroTitleCa", label: "T\xEDtol hero (CA)" },
          { type: "string", name: "heroTitleEs", label: "T\xEDtol hero (ES)" },
          { type: "string", name: "heroTitleEn", label: "T\xEDtol hero (EN)" },
          { type: "string", name: "heroTitleDe", label: "T\xEDtol hero (DE)" },
          { type: "string", name: "heroSubtitleCa", label: "Subt\xEDtol hero (CA)", ui: { component: "textarea" } },
          { type: "string", name: "heroSubtitleEs", label: "Subt\xEDtol hero (ES)", ui: { component: "textarea" } },
          { type: "string", name: "heroSubtitleEn", label: "Subt\xEDtol hero (EN)", ui: { component: "textarea" } },
          { type: "string", name: "heroSubtitleDe", label: "Subt\xEDtol hero (DE)", ui: { component: "textarea" } },
          // ── Secció abonaments ──
          { type: "string", name: "membershipsTitleCa", label: "T\xEDtol abonaments (CA)" },
          { type: "string", name: "membershipsTitleEs", label: "T\xEDtol abonaments (ES)" },
          { type: "string", name: "membershipsTitleEn", label: "T\xEDtol abonaments (EN)" },
          { type: "string", name: "membershipsTitleDe", label: "T\xEDtol abonaments (DE)" },
          { type: "string", name: "membershipsSubCa", label: "Subt\xEDtol abonaments (CA)", ui: { component: "textarea" } },
          { type: "string", name: "membershipsSubEs", label: "Subt\xEDtol abonaments (ES)", ui: { component: "textarea" } },
          { type: "string", name: "membershipsSubEn", label: "Subt\xEDtol abonaments (EN)", ui: { component: "textarea" } },
          { type: "string", name: "membershipsSubDe", label: "Subt\xEDtol abonaments (DE)", ui: { component: "textarea" } },
          { type: "string", name: "membershipsNoteCa", label: "Nota abonaments (CA)", ui: { component: "textarea" } },
          { type: "string", name: "membershipsNoteEs", label: "Nota abonaments (ES)", ui: { component: "textarea" } },
          { type: "string", name: "membershipsNoteEn", label: "Nota abonaments (EN)", ui: { component: "textarea" } },
          { type: "string", name: "membershipsNoteDe", label: "Nota abonaments (DE)", ui: { component: "textarea" } },
          { type: "string", name: "membershipsCtaCa", label: "Bot\xF3 abonament (CA)" },
          { type: "string", name: "membershipsCtaEs", label: "Bot\xF3 abonament (ES)" },
          { type: "string", name: "membershipsCtaEn", label: "Bot\xF3 abonament (EN)" },
          { type: "string", name: "membershipsCtaDe", label: "Bot\xF3 abonament (DE)" },
          {
            type: "object",
            name: "plans",
            label: "Plans de preus",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.nameCa || "Pla" }) },
            fields: [
              { type: "string", name: "nameCa", label: "Nom (CA)" },
              { type: "string", name: "nameEs", label: "Nom (ES)" },
              { type: "string", name: "nameEn", label: "Nom (EN)" },
              { type: "string", name: "nameDe", label: "Nom (DE)" },
              { type: "string", name: "price", label: "Preu (\u20AC)" },
              {
                type: "string",
                name: "period",
                label: "Per\xEDode",
                options: [
                  { label: "/mes", value: "mes" },
                  { label: "/trimestre", value: "trimestre" },
                  { label: "/any", value: "any" },
                  { label: "/sessi\xF3", value: "sessio" }
                ]
              },
              { type: "string", name: "ageCa", label: "Edat (CA)" },
              { type: "string", name: "ageEs", label: "Edat (ES)" },
              { type: "string", name: "ageEn", label: "Edat (EN)" },
              { type: "string", name: "ageDe", label: "Edat (DE)" },
              { type: "string", name: "badgeCa", label: "Badge (CA)" },
              { type: "string", name: "badgeEs", label: "Badge (ES)" },
              { type: "string", name: "badgeEn", label: "Badge (EN)" },
              { type: "string", name: "badgeDe", label: "Badge (DE)" },
              { type: "string", name: "descCa", label: "Descripci\xF3 (CA)", ui: { component: "textarea" } },
              { type: "string", name: "descEs", label: "Descripci\xF3 (ES)", ui: { component: "textarea" } },
              { type: "string", name: "descEn", label: "Descripci\xF3 (EN)", ui: { component: "textarea" } },
              { type: "string", name: "descDe", label: "Descripci\xF3 (DE)", ui: { component: "textarea" } },
              { type: "string", name: "featuresCa", label: "Features (CA) \u2013 una per l\xEDnia", list: true },
              { type: "string", name: "featuresEs", label: "Features (ES) \u2013 una per l\xEDnia", list: true },
              { type: "string", name: "featuresEn", label: "Features (EN) \u2013 una per l\xEDnia", list: true },
              { type: "string", name: "featuresDe", label: "Features (DE) \u2013 una per l\xEDnia", list: true },
              { type: "boolean", name: "highlighted", label: "Destacat?" }
            ]
          },
          // ── Serveis addicionals ──
          { type: "string", name: "extraTitleCa", label: "T\xEDtol serveis extra (CA)" },
          { type: "string", name: "extraTitleEs", label: "T\xEDtol serveis extra (ES)" },
          { type: "string", name: "extraTitleEn", label: "T\xEDtol serveis extra (EN)" },
          { type: "string", name: "extraTitleDe", label: "T\xEDtol serveis extra (DE)" },
          {
            type: "object",
            name: "extraServices",
            label: "Serveis addicionals",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.nameCa || "Servei" }) },
            fields: [
              { type: "string", name: "nameCa", label: "Nom (CA)" },
              { type: "string", name: "nameEs", label: "Nom (ES)" },
              { type: "string", name: "nameEn", label: "Nom (EN)" },
              { type: "string", name: "nameDe", label: "Nom (DE)" },
              { type: "string", name: "price", label: "Preu" },
              { type: "string", name: "noteCa", label: "Nota (CA)" },
              { type: "string", name: "noteEs", label: "Nota (ES)" },
              { type: "string", name: "noteEn", label: "Nota (EN)" },
              { type: "string", name: "noteDe", label: "Nota (DE)" }
            ]
          },
          // ── Referral ──
          { type: "string", name: "referralTitleCa", label: "T\xEDtol referral (CA)" },
          { type: "string", name: "referralTitleEs", label: "T\xEDtol referral (ES)" },
          { type: "string", name: "referralTitleEn", label: "T\xEDtol referral (EN)" },
          { type: "string", name: "referralTitleDe", label: "T\xEDtol referral (DE)" },
          { type: "string", name: "referralDescCa", label: "Desc referral (CA)", ui: { component: "textarea" } },
          { type: "string", name: "referralDescEs", label: "Desc referral (ES)", ui: { component: "textarea" } },
          { type: "string", name: "referralDescEn", label: "Desc referral (EN)", ui: { component: "textarea" } },
          { type: "string", name: "referralDescDe", label: "Desc referral (DE)", ui: { component: "textarea" } },
          { type: "string", name: "referralCtaCa", label: "Bot\xF3 referral (CA)" },
          { type: "string", name: "referralCtaEs", label: "Bot\xF3 referral (ES)" },
          { type: "string", name: "referralCtaEn", label: "Bot\xF3 referral (EN)" },
          { type: "string", name: "referralCtaDe", label: "Bot\xF3 referral (DE)" }
        ]
      },
      // ─── HORARIS ──────────────────────────────────────────────────────
      {
        name: "horaris",
        label: "\u{1F5D3}\uFE0F Horaris",
        path: "src/content",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          global: true,
          router: () => "/horaris"
        },
        match: { include: "horaris" },
        fields: [
          { type: "string", name: "temporada", label: "Temporada (ex: Hivern 2024-25)" },
          { type: "image", name: "pdfSantanyi", label: "PDF Horari Santany\xED", uploadDir: () => "public/pdfs" },
          { type: "image", name: "pdfCalaDor", label: "PDF Horari Cala d'Or", uploadDir: () => "public/pdfs" },
          // ── Etiquetes capçalera ──
          { type: "string", name: "activityLabelCa", label: "Columna Activitat (CA)" },
          { type: "string", name: "activityLabelEs", label: "Columna Activitat (ES)" },
          { type: "string", name: "activityLabelEn", label: "Columna Activitat (EN)" },
          { type: "string", name: "activityLabelDe", label: "Columna Activitat (DE)" },
          { type: "string", name: "dayLabelDl", label: "Dilluns etiqueta" },
          { type: "string", name: "dayLabelDm", label: "Dimarts etiqueta" },
          { type: "string", name: "dayLabelDc", label: "Dimecres etiqueta" },
          { type: "string", name: "dayLabelDj", label: "Dijous etiqueta" },
          { type: "string", name: "dayLabelDv", label: "Divendres etiqueta" },
          { type: "string", name: "dayLabelDs", label: "Dissabte etiqueta" },
          // ── Nota peu ──
          { type: "string", name: "footerNoteCa", label: "Nota peu (CA)" },
          { type: "string", name: "footerNoteEs", label: "Nota peu (ES)" },
          { type: "string", name: "footerNoteEn", label: "Nota peu (EN)" },
          { type: "string", name: "footerNoteDe", label: "Nota peu (DE)" },
          // ── Files horari ──
          {
            type: "object",
            name: "rows",
            label: "Files de l'horari",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.activitat || "Activitat" }) },
            fields: [
              { type: "string", name: "activitat", label: "Activitat" },
              { type: "string", name: "dilluns", label: "Dilluns" },
              { type: "string", name: "dimarts", label: "Dimarts" },
              { type: "string", name: "dimecres", label: "Dimecres" },
              { type: "string", name: "dijous", label: "Dijous" },
              { type: "string", name: "divendres", label: "Divendres" },
              { type: "string", name: "dissabte", label: "Dissabte" }
            ]
          }
        ]
      },
      // ─── PÀGINA SANTANYÍ ──────────────────────────────────────────────
      {
        name: "paginaSantanyi",
        label: "\u{1F4CD} P\xE0gina Santany\xED",
        path: "src/content",
        format: "json",
        ui: { allowedActions: { create: false, delete: false }, global: true, router: () => "/santanyi" },
        match: { include: "pagina-santanyi" },
        fields: [
          // ── Hero ──
          { type: "string", name: "heroBadgeCa", label: "Badge hero (CA)" },
          { type: "string", name: "heroBadgeEs", label: "Badge hero (ES)" },
          { type: "string", name: "heroBadgeEn", label: "Badge hero (EN)" },
          { type: "string", name: "heroBadgeDe", label: "Badge hero (DE)" },
          { type: "string", name: "heroTitleCa", label: "T\xEDtol hero (CA)" },
          { type: "string", name: "heroTitleEs", label: "T\xEDtol hero (ES)" },
          { type: "string", name: "heroTitleEn", label: "T\xEDtol hero (EN)" },
          { type: "string", name: "heroTitleDe", label: "T\xEDtol hero (DE)" },
          { type: "string", name: "heroDescCa", label: "Descripci\xF3 hero (CA)", ui: { component: "textarea" } },
          { type: "string", name: "heroDescEs", label: "Descripci\xF3 hero (ES)", ui: { component: "textarea" } },
          { type: "string", name: "heroDescEn", label: "Descripci\xF3 hero (EN)", ui: { component: "textarea" } },
          { type: "string", name: "heroDescDe", label: "Descripci\xF3 hero (DE)", ui: { component: "textarea" } },
          { type: "string", name: "heroAddress", label: "Adre\xE7a hero" },
          { type: "string", name: "heroPhone", label: "Tel\xE8fon" },
          { type: "string", name: "heroMapsUrl", label: "URL Google Maps" },
          { type: "string", name: "heroMapsLabelCa", label: "Bot\xF3 Maps (CA)" },
          { type: "string", name: "heroMapsLabelEs", label: "Bot\xF3 Maps (ES)" },
          { type: "string", name: "heroMapsLabelEn", label: "Bot\xF3 Maps (EN)" },
          { type: "string", name: "heroMapsLabelDe", label: "Bot\xF3 Maps (DE)" },
          // ── Galeria fotos ──
          {
            type: "object",
            name: "gallery",
            label: "Galeria fotos",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.alt || "Foto" }) },
            fields: [
              { type: "image", name: "src", label: "Imatge", uploadDir: () => "public/images" },
              { type: "string", name: "alt", label: "Text alternatiu" },
              { type: "string", name: "size", label: "Mida (large/small)", options: ["large", "small"] }
            ]
          },
          // ── Serveis ──
          { type: "string", name: "servicesTitleCa", label: "T\xEDtol serveis (CA)" },
          { type: "string", name: "servicesTitleEs", label: "T\xEDtol serveis (ES)" },
          { type: "string", name: "servicesTitleEn", label: "T\xEDtol serveis (EN)" },
          { type: "string", name: "servicesTitleDe", label: "T\xEDtol serveis (DE)" },
          {
            type: "object",
            name: "services",
            label: "Serveis",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.titleCa || "Servei" }) },
            fields: [
              { type: "string", name: "icon", label: "Emoji" },
              { type: "string", name: "titleCa", label: "T\xEDtol (CA)" },
              { type: "string", name: "titleEs", label: "T\xEDtol (ES)" },
              { type: "string", name: "titleEn", label: "T\xEDtol (EN)" },
              { type: "string", name: "titleDe", label: "T\xEDtol (DE)" },
              { type: "string", name: "descCa", label: "Descripci\xF3 (CA)", ui: { component: "textarea" } },
              { type: "string", name: "descEs", label: "Descripci\xF3 (ES)", ui: { component: "textarea" } },
              { type: "string", name: "descEn", label: "Descripci\xF3 (EN)", ui: { component: "textarea" } },
              { type: "string", name: "descDe", label: "Descripci\xF3 (DE)", ui: { component: "textarea" } }
            ]
          },
          // ── Contacte / mapa ──
          { type: "string", name: "mapTitleCa", label: "T\xEDtol mapa (CA)" },
          { type: "string", name: "mapTitleEs", label: "T\xEDtol mapa (ES)" },
          { type: "string", name: "mapTitleEn", label: "T\xEDtol mapa (EN)" },
          { type: "string", name: "mapTitleDe", label: "T\xEDtol mapa (DE)" },
          { type: "string", name: "addressLabelCa", label: "Etiqueta adre\xE7a (CA)" },
          { type: "string", name: "addressLabelEs", label: "Etiqueta adre\xE7a (ES)" },
          { type: "string", name: "addressLabelEn", label: "Etiqueta adre\xE7a (EN)" },
          { type: "string", name: "addressLabelDe", label: "Etiqueta adre\xE7a (DE)" },
          { type: "string", name: "fullAddress", label: "Adre\xE7a completa", ui: { component: "textarea" } },
          { type: "string", name: "email", label: "Email" },
          { type: "string", name: "mapBtnCa", label: "Bot\xF3 Google Maps (CA)" },
          { type: "string", name: "mapBtnEs", label: "Bot\xF3 Google Maps (ES)" },
          { type: "string", name: "mapBtnEn", label: "Bot\xF3 Google Maps (EN)" },
          { type: "string", name: "mapBtnDe", label: "Bot\xF3 Google Maps (DE)" }
        ]
      },
      // ─── PÀGINA CALA D'OR ──────────────────────────────────────────────
      {
        name: "paginaCalaDor",
        label: "\u{1F4CD} P\xE0gina Cala d'Or",
        path: "src/content",
        format: "json",
        ui: { allowedActions: { create: false, delete: false }, global: true, router: () => "/cala-dor" },
        match: { include: "pagina-cala-dor" },
        fields: [
          // ── Hero ──
          { type: "string", name: "heroBadgeCa", label: "Badge hero (CA)" },
          { type: "string", name: "heroBadgeEs", label: "Badge hero (ES)" },
          { type: "string", name: "heroBadgeEn", label: "Badge hero (EN)" },
          { type: "string", name: "heroBadgeDe", label: "Badge hero (DE)" },
          { type: "string", name: "heroTitleCa", label: "T\xEDtol hero (CA)" },
          { type: "string", name: "heroTitleEs", label: "T\xEDtol hero (ES)" },
          { type: "string", name: "heroTitleEn", label: "T\xEDtol hero (EN)" },
          { type: "string", name: "heroTitleDe", label: "T\xEDtol hero (DE)" },
          { type: "string", name: "heroDescCa", label: "Descripci\xF3 hero (CA)", ui: { component: "textarea" } },
          { type: "string", name: "heroDescEs", label: "Descripci\xF3 hero (ES)", ui: { component: "textarea" } },
          { type: "string", name: "heroDescEn", label: "Descripci\xF3 hero (EN)", ui: { component: "textarea" } },
          { type: "string", name: "heroDescDe", label: "Descripci\xF3 hero (DE)", ui: { component: "textarea" } },
          { type: "string", name: "heroAddress", label: "Adre\xE7a hero" },
          { type: "string", name: "heroPhone", label: "Tel\xE8fon" },
          { type: "string", name: "heroMapsUrl", label: "URL Google Maps" },
          { type: "string", name: "heroMapsLabelCa", label: "Bot\xF3 Maps (CA)" },
          { type: "string", name: "heroMapsLabelEs", label: "Bot\xF3 Maps (ES)" },
          { type: "string", name: "heroMapsLabelEn", label: "Bot\xF3 Maps (EN)" },
          { type: "string", name: "heroMapsLabelDe", label: "Bot\xF3 Maps (DE)" },
          // ── Galeria fotos ──
          {
            type: "object",
            name: "gallery",
            label: "Galeria fotos",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.alt || "Foto" }) },
            fields: [
              { type: "image", name: "src", label: "Imatge", uploadDir: () => "public/images" },
              { type: "string", name: "alt", label: "Text alternatiu" },
              { type: "string", name: "size", label: "Mida (large/small)", options: ["large", "small"] }
            ]
          },
          // ── Serveis ──
          { type: "string", name: "servicesTitleCa", label: "T\xEDtol serveis (CA)" },
          { type: "string", name: "servicesTitleEs", label: "T\xEDtol serveis (ES)" },
          { type: "string", name: "servicesTitleEn", label: "T\xEDtol serveis (EN)" },
          { type: "string", name: "servicesTitleDe", label: "T\xEDtol serveis (DE)" },
          {
            type: "object",
            name: "services",
            label: "Serveis",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.titleCa || "Servei" }) },
            fields: [
              { type: "string", name: "icon", label: "Emoji" },
              { type: "string", name: "titleCa", label: "T\xEDtol (CA)" },
              { type: "string", name: "titleEs", label: "T\xEDtol (ES)" },
              { type: "string", name: "titleEn", label: "T\xEDtol (EN)" },
              { type: "string", name: "titleDe", label: "T\xEDtol (DE)" },
              { type: "string", name: "descCa", label: "Descripci\xF3 (CA)", ui: { component: "textarea" } },
              { type: "string", name: "descEs", label: "Descripci\xF3 (ES)", ui: { component: "textarea" } },
              { type: "string", name: "descEn", label: "Descripci\xF3 (EN)", ui: { component: "textarea" } },
              { type: "string", name: "descDe", label: "Descripci\xF3 (DE)", ui: { component: "textarea" } }
            ]
          },
          // ── Contacte / mapa ──
          { type: "string", name: "mapTitleCa", label: "T\xEDtol mapa (CA)" },
          { type: "string", name: "mapTitleEs", label: "T\xEDtol mapa (ES)" },
          { type: "string", name: "mapTitleEn", label: "T\xEDtol mapa (EN)" },
          { type: "string", name: "mapTitleDe", label: "T\xEDtol mapa (DE)" },
          { type: "string", name: "addressLabelCa", label: "Etiqueta adre\xE7a (CA)" },
          { type: "string", name: "addressLabelEs", label: "Etiqueta adre\xE7a (ES)" },
          { type: "string", name: "addressLabelEn", label: "Etiqueta adre\xE7a (EN)" },
          { type: "string", name: "addressLabelDe", label: "Etiqueta adre\xE7a (DE)" },
          { type: "string", name: "fullAddress", label: "Adre\xE7a completa", ui: { component: "textarea" } },
          { type: "string", name: "email", label: "Email" },
          { type: "string", name: "mapBtnCa", label: "Bot\xF3 Google Maps (CA)" },
          { type: "string", name: "mapBtnEs", label: "Bot\xF3 Google Maps (ES)" },
          { type: "string", name: "mapBtnEn", label: "Bot\xF3 Google Maps (EN)" },
          { type: "string", name: "mapBtnDe", label: "Bot\xF3 Google Maps (DE)" },
          // ── Galeria contacte ──
          {
            type: "object",
            name: "contactGallery",
            label: "Fotos secci\xF3 contacte",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.alt || "Foto" }) },
            fields: [
              { type: "image", name: "src", label: "Imatge", uploadDir: () => "public/images" },
              { type: "string", name: "alt", label: "Text alternatiu" }
            ]
          }
        ]
      },
      // ─── GALERIA SANTANYÍ ─────────────────────────────────────────────
      {
        name: "galeriaSantanyi",
        label: "\u{1F4F8} Galeria Santany\xED",
        path: "src/content",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          global: true
        },
        match: { include: "galeria-santanyi" },
        fields: [
          {
            type: "object",
            name: "fotos",
            label: "Fotos",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.alt || "Foto" }) },
            fields: [
              { type: "image", name: "imatge", label: "Foto", uploadDir: () => "public/images" },
              { type: "string", name: "alt", label: "Descripci\xF3 (alt text)" }
            ]
          }
        ]
      },
      // ─── GALERIA CALA D'OR ────────────────────────────────────────────
      {
        name: "galeriaCalaDor",
        label: "\u{1F4F8} Galeria Cala d'Or",
        path: "src/content",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          global: true
        },
        match: { include: "galeria-cala-dor" },
        fields: [
          {
            type: "object",
            name: "fotos",
            label: "Fotos",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.alt || "Foto" }) },
            fields: [
              { type: "image", name: "imatge", label: "Foto", uploadDir: () => "public/images" },
              { type: "string", name: "alt", label: "Descripci\xF3 (alt text)" }
            ]
          }
        ]
      },
      // ─── TRUST BAR ────────────────────────────────────────────────────
      {
        name: "trustbar",
        label: "\u{1F4CA} Trust Bar (xifres clau)",
        path: "src/content",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          global: true
        },
        match: { include: "trustbar" },
        fields: [
          {
            type: "object",
            name: "items",
            label: "Xifres",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.value ? `${item.value} \u2014 ${item.labelCa}` : "Xifra" }) },
            fields: [
              { type: "string", name: "value", label: "Valor (ex: 550+)" },
              { type: "string", name: "labelCa", label: "Text (CA)" },
              { type: "string", name: "labelEs", label: "Text (ES)" },
              { type: "string", name: "labelEn", label: "Text (EN)" },
              { type: "string", name: "labelDe", label: "Text (DE)" },
              {
                type: "string",
                name: "icon",
                label: "Icona",
                options: [
                  { label: "Persones", value: "users" },
                  { label: "Premi", value: "award" },
                  { label: "Activitat", value: "activity" },
                  { label: "Llibre", value: "book" },
                  { label: "Ubicaci\xF3", value: "map-pin" }
                ]
              }
            ]
          }
        ]
      },
      // ─── SERVEIS ──────────────────────────────────────────────────────
      {
        name: "serveis",
        label: "\u{1F3CA} Serveis (grid)",
        path: "src/content",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          global: true
        },
        match: { include: "serveis" },
        fields: [
          { type: "string", name: "titleCa", label: "T\xEDtol secci\xF3 (CA)" },
          { type: "string", name: "titleEs", label: "T\xEDtol secci\xF3 (ES)" },
          { type: "string", name: "titleEn", label: "T\xEDtol secci\xF3 (EN)" },
          { type: "string", name: "titleDe", label: "T\xEDtol secci\xF3 (DE)" },
          { type: "string", name: "subtitleCa", label: "Subt\xEDtol secci\xF3 (CA)", ui: { component: "textarea" } },
          { type: "string", name: "subtitleEs", label: "Subt\xEDtol secci\xF3 (ES)", ui: { component: "textarea" } },
          { type: "string", name: "subtitleEn", label: "Subt\xEDtol secci\xF3 (EN)", ui: { component: "textarea" } },
          { type: "string", name: "subtitleDe", label: "Subt\xEDtol secci\xF3 (DE)", ui: { component: "textarea" } },
          {
            type: "object",
            name: "items",
            label: "Serveis",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.titleCa || "Servei" }) },
            fields: [
              { type: "string", name: "titleCa", label: "T\xEDtol (CA)" },
              { type: "string", name: "titleEs", label: "T\xEDtol (ES)" },
              { type: "string", name: "titleEn", label: "T\xEDtol (EN)" },
              { type: "string", name: "titleDe", label: "T\xEDtol (DE)" },
              { type: "string", name: "descCa", label: "Descripci\xF3 (CA)", ui: { component: "textarea" } },
              { type: "string", name: "descEs", label: "Descripci\xF3 (ES)", ui: { component: "textarea" } },
              { type: "string", name: "descEn", label: "Descripci\xF3 (EN)", ui: { component: "textarea" } },
              { type: "string", name: "descDe", label: "Descripci\xF3 (DE)", ui: { component: "textarea" } },
              { type: "string", name: "href", label: "URL (ex: /natacio)" },
              { type: "image", name: "img", label: "Icona/Imatge", uploadDir: () => "public/images" },
              {
                type: "string",
                name: "color",
                label: "Color",
                options: ["blue", "purple", "green", "orange", "red", "teal"].map((c) => ({ label: c, value: c }))
              }
            ]
          }
        ]
      },
      // ─── PÀGINA DAY PASS ───────────────────────────────────────────────
      {
        name: "paginaDayPass",
        label: "\u{1F3AB} P\xE0gina Day Pass",
        path: "src/content",
        format: "json",
        ui: { allowedActions: { create: false, delete: false }, global: true, router: () => "/day-pass" },
        match: { include: "pagina-daypass" },
        fields: [
          // ── Hero ──
          { type: "string", name: "heroBadgeCa", label: "Badge (CA)" },
          { type: "string", name: "heroBadgeEs", label: "Badge (ES)" },
          { type: "string", name: "heroBadgeEn", label: "Badge (EN)" },
          { type: "string", name: "heroBadgeDe", label: "Badge (DE)" },
          { type: "string", name: "heroTitle", label: "T\xEDtol principal" },
          { type: "string", name: "heroSubtitleCa", label: "Subt\xEDtol (CA)" },
          { type: "string", name: "heroSubtitleEs", label: "Subt\xEDtol (ES)" },
          { type: "string", name: "heroSubtitleEn", label: "Subt\xEDtol (EN)" },
          { type: "string", name: "heroSubtitleDe", label: "Subt\xEDtol (DE)" },
          { type: "string", name: "heroDescCa", label: "Descripci\xF3 (CA)", ui: { component: "textarea" } },
          { type: "string", name: "heroDescEs", label: "Descripci\xF3 (ES)", ui: { component: "textarea" } },
          { type: "string", name: "heroDescEn", label: "Descripci\xF3 (EN)", ui: { component: "textarea" } },
          { type: "string", name: "heroDescDe", label: "Descripci\xF3 (DE)", ui: { component: "textarea" } },
          // ── Preus ──
          { type: "string", name: "pricePool", label: "Preu Piscina (n\xFAmero)" },
          { type: "string", name: "pricePoolGym", label: "Preu Piscina+Gimn\xE0s (n\xFAmero)" },
          { type: "string", name: "poolLabelCa", label: "Etiqueta piscina (CA)" },
          { type: "string", name: "poolLabelEs", label: "Etiqueta piscina (ES)" },
          { type: "string", name: "poolLabelEn", label: "Etiqueta piscina (EN)" },
          { type: "string", name: "poolLabelDe", label: "Etiqueta piscina (DE)" },
          { type: "string", name: "poolGymLabelCa", label: "Etiqueta piscina+gym (CA)" },
          { type: "string", name: "poolGymLabelEs", label: "Etiqueta piscina+gym (ES)" },
          { type: "string", name: "poolGymLabelEn", label: "Etiqueta piscina+gym (EN)" },
          { type: "string", name: "poolGymLabelDe", label: "Etiqueta piscina+gym (DE)" },
          { type: "string", name: "perDayCa", label: "Per dia (CA)" },
          { type: "string", name: "perDayEs", label: "Per dia (ES)" },
          { type: "string", name: "perDayEn", label: "Per dia (EN)" },
          { type: "string", name: "perDayDe", label: "Per dia (DE)" },
          { type: "string", name: "includesCa", label: "Inclou (CA)" },
          { type: "string", name: "includesEs", label: "Inclou (ES)" },
          { type: "string", name: "includesEn", label: "Inclou (EN)" },
          { type: "string", name: "includesDe", label: "Inclou (DE)" },
          // ── Secció "Què inclou" ──
          { type: "string", name: "sectionTitleCa", label: "T\xEDtol secci\xF3 inclou (CA)" },
          { type: "string", name: "sectionTitleEs", label: "T\xEDtol secci\xF3 inclou (ES)" },
          { type: "string", name: "sectionTitleEn", label: "T\xEDtol secci\xF3 inclou (EN)" },
          { type: "string", name: "sectionTitleDe", label: "T\xEDtol secci\xF3 inclou (DE)" },
          {
            type: "object",
            name: "poolFeatures",
            label: "Caracter\xEDstiques Piscina",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.textCa || "Caracter\xEDstica" }) },
            fields: [
              { type: "string", name: "textCa", label: "Text (CA)" },
              { type: "string", name: "textEs", label: "Text (ES)" },
              { type: "string", name: "textEn", label: "Text (EN)" },
              { type: "string", name: "textDe", label: "Text (DE)" }
            ]
          },
          {
            type: "object",
            name: "poolGymFeatures",
            label: "Caracter\xEDstiques Piscina+Gym",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.textCa || "Caracter\xEDstica" }) },
            fields: [
              { type: "string", name: "textCa", label: "Text (CA)" },
              { type: "string", name: "textEs", label: "Text (ES)" },
              { type: "string", name: "textEn", label: "Text (EN)" },
              { type: "string", name: "textDe", label: "Text (DE)" }
            ]
          },
          { type: "string", name: "poolBtnCa", label: "Bot\xF3 acci\xF3 (CA)" },
          { type: "string", name: "poolBtnEs", label: "Bot\xF3 acci\xF3 (ES)" },
          { type: "string", name: "poolBtnEn", label: "Bot\xF3 acci\xF3 (EN)" },
          { type: "string", name: "poolBtnDe", label: "Bot\xF3 acci\xF3 (DE)" },
          // ── Instal·lacions ──
          { type: "string", name: "facilitiesTitleCa", label: "T\xEDtol instal\xB7lacions (CA)" },
          { type: "string", name: "facilitiesTitleEs", label: "T\xEDtol instal\xB7lacions (ES)" },
          { type: "string", name: "facilitiesTitleEn", label: "T\xEDtol instal\xB7lacions (EN)" },
          { type: "string", name: "facilitiesTitleDe", label: "T\xEDtol instal\xB7lacions (DE)" },
          // ── Formulari ──
          { type: "string", name: "formTitleCa", label: "T\xEDtol formulari (CA)" },
          { type: "string", name: "formTitleEs", label: "T\xEDtol formulari (ES)" },
          { type: "string", name: "formTitleEn", label: "T\xEDtol formulari (EN)" },
          { type: "string", name: "formTitleDe", label: "T\xEDtol formulari (DE)" },
          { type: "string", name: "formSubtitleCa", label: "Subt\xEDtol formulari (CA)" },
          { type: "string", name: "formSubtitleEs", label: "Subt\xEDtol formulari (ES)" },
          { type: "string", name: "formSubtitleEn", label: "Subt\xEDtol formulari (EN)" },
          { type: "string", name: "formSubtitleDe", label: "Subt\xEDtol formulari (DE)" }
        ]
      },
      // ─── DAY PASS ─────────────────────────────────────────────────────
      {
        name: "daypass",
        label: "\u{1F3AB} Day Pass CTA",
        path: "src/content",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          global: true
        },
        match: { include: "daypass" },
        fields: [
          { type: "string", name: "badgeCa", label: "Badge (CA)" },
          { type: "string", name: "badgeEs", label: "Badge (ES)" },
          { type: "string", name: "badgeEn", label: "Badge (EN)" },
          { type: "string", name: "badgeDe", label: "Badge (DE)" },
          { type: "string", name: "titleCa", label: "T\xEDtol (CA)" },
          { type: "string", name: "titleEs", label: "T\xEDtol (ES)" },
          { type: "string", name: "titleEn", label: "T\xEDtol (EN)" },
          { type: "string", name: "titleDe", label: "T\xEDtol (DE)" },
          { type: "string", name: "subtitleCa", label: "Subt\xEDtol (CA)", ui: { component: "textarea" } },
          { type: "string", name: "subtitleEs", label: "Subt\xEDtol (ES)", ui: { component: "textarea" } },
          { type: "string", name: "subtitleEn", label: "Subt\xEDtol (EN)", ui: { component: "textarea" } },
          { type: "string", name: "subtitleDe", label: "Subt\xEDtol (DE)", ui: { component: "textarea" } },
          { type: "string", name: "pricePool", label: "Preu Piscina (\u20AC)" },
          { type: "string", name: "pricePoolGym", label: "Preu Piscina+Gimn\xE0s (\u20AC)" },
          { type: "string", name: "poolLabelCa", label: "Etiqueta piscina (CA)" },
          { type: "string", name: "poolLabelEs", label: "Etiqueta piscina (ES)" },
          { type: "string", name: "poolLabelEn", label: "Etiqueta piscina (EN)" },
          { type: "string", name: "poolLabelDe", label: "Etiqueta piscina (DE)" },
          { type: "string", name: "poolGymLabelCa", label: "Etiqueta piscina+gym (CA)" },
          { type: "string", name: "poolGymLabelEs", label: "Etiqueta piscina+gym (ES)" },
          { type: "string", name: "poolGymLabelEn", label: "Etiqueta piscina+gym (EN)" },
          { type: "string", name: "poolGymLabelDe", label: "Etiqueta piscina+gym (DE)" },
          { type: "string", name: "perDayCa", label: "Per dia (CA)" },
          { type: "string", name: "perDayEs", label: "Per dia (ES)" },
          { type: "string", name: "perDayEn", label: "Per dia (EN)" },
          { type: "string", name: "perDayDe", label: "Per dia (DE)" },
          { type: "string", name: "includesCa", label: "Inclou (CA)" },
          { type: "string", name: "includesEs", label: "Inclou (ES)" },
          { type: "string", name: "includesEn", label: "Inclou (EN)" },
          { type: "string", name: "includesDe", label: "Inclou (DE)" },
          { type: "string", name: "ctaCa", label: "Bot\xF3 CTA (CA)" },
          { type: "string", name: "ctaEs", label: "Bot\xF3 CTA (ES)" },
          { type: "string", name: "ctaEn", label: "Bot\xF3 CTA (EN)" },
          { type: "string", name: "ctaDe", label: "Bot\xF3 CTA (DE)" },
          { type: "string", name: "bannerCtaCa", label: "CTA banner (CA)" },
          { type: "string", name: "bannerCtaEs", label: "CTA banner (ES)" },
          { type: "string", name: "bannerCtaEn", label: "CTA banner (EN)" },
          { type: "string", name: "bannerCtaDe", label: "CTA banner (DE)" },
          { type: "string", name: "orCa", label: "Alternativa CTA (CA)" },
          { type: "string", name: "orEs", label: "Alternativa CTA (ES)" },
          { type: "string", name: "orEn", label: "Alternativa CTA (EN)" },
          { type: "string", name: "orDe", label: "Alternativa CTA (DE)" },
          {
            type: "object",
            name: "buttons",
            label: "\u{1F518} Botons addicionals",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.labelCa || "Bot\xF3" }) },
            fields: [
              { type: "string", name: "labelCa", label: "Text (CA)" },
              { type: "string", name: "labelEs", label: "Text (ES)" },
              { type: "string", name: "labelEn", label: "Text (EN)" },
              { type: "string", name: "labelDe", label: "Text (DE)" },
              { type: "string", name: "url", label: "URL o tel: o https://" },
              {
                type: "string",
                name: "style",
                label: "Estil",
                options: [
                  { label: "Principal (blanc)", value: "primary" },
                  { label: "Secundari (transparent)", value: "secondary" },
                  { label: "Groc/Ambre", value: "amber" }
                ]
              },
              { type: "boolean", name: "external", label: "Obre en nova pestanya?" }
            ]
          }
        ]
      },
      // ─── APP PROMO ────────────────────────────────────────────────────
      {
        name: "appPromo",
        label: "\u{1F4F1} App Promo",
        path: "src/content",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          global: true
        },
        match: { include: "app-promo" },
        fields: [
          { type: "string", name: "badgeCa", label: "Badge (CA)" },
          { type: "string", name: "badgeEs", label: "Badge (ES)" },
          { type: "string", name: "badgeEn", label: "Badge (EN)" },
          { type: "string", name: "badgeDe", label: "Badge (DE)" },
          { type: "string", name: "titleCa", label: "T\xEDtol (CA)" },
          { type: "string", name: "titleEs", label: "T\xEDtol (ES)" },
          { type: "string", name: "titleEn", label: "T\xEDtol (EN)" },
          { type: "string", name: "titleDe", label: "T\xEDtol (DE)" },
          { type: "string", name: "subtitleCa", label: "Subt\xEDtol (CA)", ui: { component: "textarea" } },
          { type: "string", name: "subtitleEs", label: "Subt\xEDtol (ES)", ui: { component: "textarea" } },
          { type: "string", name: "subtitleEn", label: "Subt\xEDtol (EN)", ui: { component: "textarea" } },
          { type: "string", name: "subtitleDe", label: "Subt\xEDtol (DE)", ui: { component: "textarea" } },
          { type: "string", name: "ctaCa", label: "Bot\xF3 App (CA)" },
          { type: "string", name: "ctaEs", label: "Bot\xF3 App (ES)" },
          { type: "string", name: "ctaEn", label: "Bot\xF3 App (EN)" },
          { type: "string", name: "ctaDe", label: "Bot\xF3 App (DE)" },
          {
            type: "object",
            name: "features",
            label: "Funcionalitats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.textCa || "Funcionalitat" }) },
            fields: [
              { type: "string", name: "textCa", label: "Text (CA)" },
              { type: "string", name: "textEs", label: "Text (ES)" },
              { type: "string", name: "textEn", label: "Text (EN)" },
              { type: "string", name: "textDe", label: "Text (DE)" }
            ]
          },
          { type: "image", name: "mockupImage", label: "Imatge mockup app", uploadDir: () => "public/images" }
        ]
      },
      // ─── PÀGINA GIMNÀS ────────────────────────────────────────────────
      {
        name: "paginaGimnas",
        label: "\u{1F3CB}\uFE0F P\xE0gina Gimn\xE0s",
        path: "src/content",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          global: true,
          router: () => "/gimnas"
        },
        match: { include: "pagina-gimnas" },
        fields: [
          { type: "string", name: "heroBadgeCa", label: "Badge hero (CA)" },
          { type: "string", name: "heroBadgeEs", label: "Badge hero (ES)" },
          { type: "string", name: "heroBadgeEn", label: "Badge hero (EN)" },
          { type: "string", name: "heroBadgeDe", label: "Badge hero (DE)" },
          { type: "string", name: "heroTitleCa", label: "T\xEDtol hero (CA)", ui: { component: "textarea" } },
          { type: "string", name: "heroTitleEs", label: "T\xEDtol hero (ES)", ui: { component: "textarea" } },
          { type: "string", name: "heroTitleEn", label: "T\xEDtol hero (EN)", ui: { component: "textarea" } },
          { type: "string", name: "heroTitleDe", label: "T\xEDtol hero (DE)", ui: { component: "textarea" } },
          { type: "string", name: "heroSubtitleCa", label: "Subt\xEDtol hero (CA)", ui: { component: "textarea" } },
          { type: "string", name: "heroSubtitleEs", label: "Subt\xEDtol hero (ES)", ui: { component: "textarea" } },
          { type: "string", name: "heroSubtitleEn", label: "Subt\xEDtol hero (EN)", ui: { component: "textarea" } },
          { type: "string", name: "heroSubtitleDe", label: "Subt\xEDtol hero (DE)", ui: { component: "textarea" } },
          { type: "string", name: "heroCtaCa", label: "CTA hero (CA)" },
          { type: "string", name: "heroCtaEs", label: "CTA hero (ES)" },
          { type: "string", name: "heroCtaEn", label: "CTA hero (EN)" },
          { type: "string", name: "heroCtaDe", label: "CTA hero (DE)" },
          { type: "string", name: "heroCtaUrl", label: "URL CTA hero" },
          { type: "string", name: "trainingymTitleCa", label: "T\xEDtol Trainingym (CA)" },
          { type: "string", name: "trainingymTitleEs", label: "T\xEDtol Trainingym (ES)" },
          { type: "string", name: "trainingymTitleEn", label: "T\xEDtol Trainingym (EN)" },
          { type: "string", name: "trainingymTitleDe", label: "T\xEDtol Trainingym (DE)" },
          { type: "string", name: "trainingymSubtitleCa", label: "Text Trainingym (CA)", ui: { component: "textarea" } },
          { type: "string", name: "trainingymSubtitleEs", label: "Text Trainingym (ES)", ui: { component: "textarea" } },
          { type: "string", name: "trainingymSubtitleEn", label: "Text Trainingym (EN)", ui: { component: "textarea" } },
          { type: "string", name: "trainingymSubtitleDe", label: "Text Trainingym (DE)", ui: { component: "textarea" } },
          { type: "image", name: "trainingymImage", label: "Imatge Trainingym", uploadDir: () => "public/images" },
          {
            type: "object",
            name: "trainingymFeatures",
            label: "Funcionalitats Trainingym",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.textCa || "Funcionalitat" }) },
            fields: [
              { type: "string", name: "textCa", label: "Text (CA)" },
              { type: "string", name: "textEs", label: "Text (ES)" },
              { type: "string", name: "textEn", label: "Text (EN)" },
              { type: "string", name: "textDe", label: "Text (DE)" }
            ]
          },
          { type: "string", name: "equipmentTitleCa", label: "T\xEDtol equipament (CA)" },
          { type: "string", name: "equipmentTitleEs", label: "T\xEDtol equipament (ES)" },
          { type: "string", name: "equipmentTitleEn", label: "T\xEDtol equipament (EN)" },
          { type: "string", name: "equipmentTitleDe", label: "T\xEDtol equipament (DE)" },
          {
            type: "object",
            name: "equipment",
            label: "Equipament",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.nameCa || "Equip" }) },
            fields: [
              { type: "string", name: "nameCa", label: "Nom (CA)" },
              { type: "string", name: "nameEs", label: "Nom (ES)" },
              { type: "string", name: "nameEn", label: "Nom (EN)" },
              { type: "string", name: "nameDe", label: "Nom (DE)" },
              { type: "string", name: "count", label: "Quantitat" },
              { type: "string", name: "icon", label: "Icona (emoji)" }
            ]
          },
          { type: "string", name: "ctaTitleCa", label: "T\xEDtol CTA final (CA)" },
          { type: "string", name: "ctaTitleEs", label: "T\xEDtol CTA final (ES)" },
          { type: "string", name: "ctaTitleEn", label: "T\xEDtol CTA final (EN)" },
          { type: "string", name: "ctaTitleDe", label: "T\xEDtol CTA final (DE)" },
          { type: "string", name: "ctaSubtitleCa", label: "Subt\xEDtol CTA final (CA)" },
          { type: "string", name: "ctaSubtitleEs", label: "Subt\xEDtol CTA final (ES)" },
          { type: "string", name: "ctaSubtitleEn", label: "Subt\xEDtol CTA final (EN)" },
          { type: "string", name: "ctaSubtitleDe", label: "Subt\xEDtol CTA final (DE)" },
          { type: "string", name: "ctaBtn1Ca", label: "Bot\xF3 1 (CA)" },
          { type: "string", name: "ctaBtn1Es", label: "Bot\xF3 1 (ES)" },
          { type: "string", name: "ctaBtn1En", label: "Bot\xF3 1 (EN)" },
          { type: "string", name: "ctaBtn1De", label: "Bot\xF3 1 (DE)" },
          { type: "string", name: "ctaBtn1Url", label: "URL Bot\xF3 1" },
          { type: "string", name: "ctaBtn2Ca", label: "Bot\xF3 2 (CA)" },
          { type: "string", name: "ctaBtn2Es", label: "Bot\xF3 2 (ES)" },
          { type: "string", name: "ctaBtn2En", label: "Bot\xF3 2 (EN)" },
          { type: "string", name: "ctaBtn2De", label: "Bot\xF3 2 (DE)" },
          { type: "string", name: "ctaBtn2Url", label: "URL Bot\xF3 2" },
          // ── Secció Schedule ──
          { type: "string", name: "scheduleNoteCa", label: "Nota horari (CA)" },
          { type: "string", name: "scheduleNoteEs", label: "Nota horari (ES)" },
          { type: "string", name: "scheduleNoteEn", label: "Nota horari (EN)" },
          { type: "string", name: "scheduleNoteDe", label: "Nota horari (DE)" },
          { type: "string", name: "scheduleLinkCa", label: "Bot\xF3 horari (CA)" },
          { type: "string", name: "scheduleLinkEs", label: "Bot\xF3 horari (ES)" },
          { type: "string", name: "scheduleLinkEn", label: "Bot\xF3 horari (EN)" },
          { type: "string", name: "scheduleLinkDe", label: "Bot\xF3 horari (DE)" }
        ]
      },
      // ─── PÀGINA NATACIÓ ───────────────────────────────────────────────
      {
        name: "paginaNatacio",
        label: "\u{1F3CA} P\xE0gina Nataci\xF3",
        path: "src/content",
        format: "json",
        ui: { allowedActions: { create: false, delete: false }, global: true, router: () => "/natacio" },
        match: { include: "pagina-natacio" },
        fields: [
          { type: "string", name: "heroBadgeCa", label: "Badge hero (CA)" },
          { type: "string", name: "heroBadgeEs", label: "Badge hero (ES)" },
          { type: "string", name: "heroBadgeEn", label: "Badge hero (EN)" },
          { type: "string", name: "heroBadgeDe", label: "Badge hero (DE)" },
          { type: "string", name: "heroTitleCa", label: "T\xEDtol hero (CA)", ui: { component: "textarea" } },
          { type: "string", name: "heroTitleEs", label: "T\xEDtol hero (ES)", ui: { component: "textarea" } },
          { type: "string", name: "heroTitleEn", label: "T\xEDtol hero (EN)", ui: { component: "textarea" } },
          { type: "string", name: "heroTitleDe", label: "T\xEDtol hero (DE)", ui: { component: "textarea" } },
          { type: "string", name: "heroSubtitleCa", label: "Subt\xEDtol hero (CA)", ui: { component: "textarea" } },
          { type: "string", name: "heroSubtitleEs", label: "Subt\xEDtol hero (ES)", ui: { component: "textarea" } },
          { type: "string", name: "heroSubtitleEn", label: "Subt\xEDtol hero (EN)", ui: { component: "textarea" } },
          { type: "string", name: "heroSubtitleDe", label: "Subt\xEDtol hero (DE)", ui: { component: "textarea" } },
          { type: "string", name: "heroCtaCa", label: "CTA 1 (CA)" },
          { type: "string", name: "heroCtaEs", label: "CTA 1 (ES)" },
          { type: "string", name: "heroCtaEn", label: "CTA 1 (EN)" },
          { type: "string", name: "heroCtaDe", label: "CTA 1 (DE)" },
          { type: "string", name: "heroCtaUrl", label: "URL CTA 1" },
          { type: "string", name: "heroCta2Ca", label: "CTA 2 (CA)" },
          { type: "string", name: "heroCta2Es", label: "CTA 2 (ES)" },
          { type: "string", name: "heroCta2En", label: "CTA 2 (EN)" },
          { type: "string", name: "heroCta2De", label: "CTA 2 (DE)" },
          { type: "string", name: "heroCta2Url", label: "URL CTA 2" },
          // ── Secció "Per què" ──
          { type: "string", name: "whyTitleCa", label: "T\xEDtol Per qu\xE8 (CA)" },
          { type: "string", name: "whyTitleEs", label: "T\xEDtol Per qu\xE8 (ES)" },
          { type: "string", name: "whyTitleEn", label: "T\xEDtol Per qu\xE8 (EN)" },
          { type: "string", name: "whyTitleDe", label: "T\xEDtol Per qu\xE8 (DE)" },
          { type: "image", name: "whyImage", label: "Imatge Per qu\xE8 (principal)", uploadDir: () => "public/images" },
          {
            type: "object",
            name: "whyGallery",
            label: "Galeria fotos Per qu\xE8",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.alt || "Foto" }) },
            fields: [
              { type: "image", name: "src", label: "Imatge", uploadDir: () => "public/images" },
              { type: "string", name: "alt", label: "Text alternatiu" }
            ]
          },
          {
            type: "object",
            name: "whyItems",
            label: "Avantatges nataci\xF3",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.textCa || "Avantatge" }) },
            fields: [
              { type: "string", name: "textCa", label: "Text (CA)" },
              { type: "string", name: "textEs", label: "Text (ES)" },
              { type: "string", name: "textEn", label: "Text (EN)" },
              { type: "string", name: "textDe", label: "Text (DE)" }
            ]
          },
          // ── Secció Cursos ──
          { type: "string", name: "coursesTitleCa", label: "T\xEDtol cursos (CA)" },
          { type: "string", name: "coursesTitleEs", label: "T\xEDtol cursos (ES)" },
          { type: "string", name: "coursesTitleEn", label: "T\xEDtol cursos (EN)" },
          { type: "string", name: "coursesTitleDe", label: "T\xEDtol cursos (DE)" },
          { type: "string", name: "coursesSubCa", label: "Subt\xEDtol cursos (CA)" },
          { type: "string", name: "coursesSubEs", label: "Subt\xEDtol cursos (ES)" },
          { type: "string", name: "coursesSubEn", label: "Subt\xEDtol cursos (EN)" },
          { type: "string", name: "coursesSubDe", label: "Subt\xEDtol cursos (DE)" },
          { type: "string", name: "coursesCtaCa", label: "Bot\xF3 cursos (CA)" },
          { type: "string", name: "coursesCtaEs", label: "Bot\xF3 cursos (ES)" },
          { type: "string", name: "coursesCtaEn", label: "Bot\xF3 cursos (EN)" },
          { type: "string", name: "coursesCtaDe", label: "Bot\xF3 cursos (DE)" },
          { type: "string", name: "coursesCtaUrl", label: "URL bot\xF3 cursos" },
          {
            type: "object",
            name: "courses",
            label: "Cursos de nataci\xF3",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.nameCa || "Curs" }) },
            fields: [
              { type: "string", name: "nameCa", label: "Nivell (CA)" },
              { type: "string", name: "nameEs", label: "Nivell (ES)" },
              { type: "string", name: "nameEn", label: "Nivell (EN)" },
              { type: "string", name: "nameDe", label: "Nivell (DE)" },
              { type: "string", name: "age", label: "Edat (ex: 6-8)" },
              { type: "string", name: "max", label: "M\xE0x alumnes" }
            ]
          },
          // ── Secció Natació lliure ──
          { type: "string", name: "freeTitleCa", label: "T\xEDtol nat. lliure (CA)" },
          { type: "string", name: "freeTitleEs", label: "T\xEDtol nat. lliure (ES)" },
          { type: "string", name: "freeTitleEn", label: "T\xEDtol nat. lliure (EN)" },
          { type: "string", name: "freeTitleDe", label: "T\xEDtol nat. lliure (DE)" },
          { type: "string", name: "freeDescCa", label: "Desc. nat. lliure (CA)", ui: { component: "textarea" } },
          { type: "string", name: "freeDescEs", label: "Desc. nat. lliure (ES)", ui: { component: "textarea" } },
          { type: "string", name: "freeDescEn", label: "Desc. nat. lliure (EN)", ui: { component: "textarea" } },
          { type: "string", name: "freeDescDe", label: "Desc. nat. lliure (DE)", ui: { component: "textarea" } },
          { type: "string", name: "freeCtaCa", label: "Bot\xF3 nat. lliure (CA)" },
          { type: "string", name: "freeCtaEs", label: "Bot\xF3 nat. lliure (ES)" },
          { type: "string", name: "freeCtaEn", label: "Bot\xF3 nat. lliure (EN)" },
          { type: "string", name: "freeCtaDe", label: "Bot\xF3 nat. lliure (DE)" },
          { type: "string", name: "freeCtaUrl", label: "URL bot\xF3 nat. lliure" }
        ]
      },
      // ─── PÀGINA ACTIVITATS ────────────────────────────────────────────
      {
        name: "paginaActivitats",
        label: "\u{1F3C3} P\xE0gina Activitats",
        path: "src/content",
        format: "json",
        ui: { allowedActions: { create: false, delete: false }, global: true, router: () => "/activitats" },
        match: { include: "pagina-activitats" },
        fields: [
          { type: "string", name: "heroBadgeCa", label: "Badge hero (CA)" },
          { type: "string", name: "heroBadgeEs", label: "Badge hero (ES)" },
          { type: "string", name: "heroBadgeEn", label: "Badge hero (EN)" },
          { type: "string", name: "heroBadgeDe", label: "Badge hero (DE)" },
          { type: "string", name: "heroTitleCa", label: "T\xEDtol hero (CA)", ui: { component: "textarea" } },
          { type: "string", name: "heroTitleEs", label: "T\xEDtol hero (ES)", ui: { component: "textarea" } },
          { type: "string", name: "heroTitleEn", label: "T\xEDtol hero (EN)", ui: { component: "textarea" } },
          { type: "string", name: "heroTitleDe", label: "T\xEDtol hero (DE)", ui: { component: "textarea" } },
          { type: "string", name: "heroSubtitleCa", label: "Subt\xEDtol hero (CA)", ui: { component: "textarea" } },
          { type: "string", name: "heroSubtitleEs", label: "Subt\xEDtol hero (ES)", ui: { component: "textarea" } },
          { type: "string", name: "heroSubtitleEn", label: "Subt\xEDtol hero (EN)", ui: { component: "textarea" } },
          { type: "string", name: "heroSubtitleDe", label: "Subt\xEDtol hero (DE)", ui: { component: "textarea" } },
          { type: "string", name: "heroCtaCa", label: "CTA hero (CA)" },
          { type: "string", name: "heroCtaEs", label: "CTA hero (ES)" },
          { type: "string", name: "heroCtaEn", label: "CTA hero (EN)" },
          { type: "string", name: "heroCtaDe", label: "CTA hero (DE)" },
          { type: "string", name: "heroCtaUrl", label: "URL CTA hero" },
          { type: "string", name: "heroCta2Ca", label: "CTA 2 hero (CA)" },
          { type: "string", name: "heroCta2Es", label: "CTA 2 hero (ES)" },
          { type: "string", name: "heroCta2En", label: "CTA 2 hero (EN)" },
          { type: "string", name: "heroCta2De", label: "CTA 2 hero (DE)" },
          { type: "string", name: "heroCta2Url", label: "URL CTA 2 hero" },
          // ── Secció llista activitats ──
          { type: "string", name: "allTitleCa", label: "T\xEDtol secci\xF3 activitats (CA)" },
          { type: "string", name: "allTitleEs", label: "T\xEDtol secci\xF3 activitats (ES)" },
          { type: "string", name: "allTitleEn", label: "T\xEDtol secci\xF3 activitats (EN)" },
          { type: "string", name: "allTitleDe", label: "T\xEDtol secci\xF3 activitats (DE)" },
          { type: "string", name: "allSubCa", label: "Subt\xEDtol activitats (CA)" },
          { type: "string", name: "allSubEs", label: "Subt\xEDtol activitats (ES)" },
          { type: "string", name: "allSubEn", label: "Subt\xEDtol activitats (EN)" },
          { type: "string", name: "allSubDe", label: "Subt\xEDtol activitats (DE)" },
          // ── Secció CTA final ──
          { type: "string", name: "ctaTitleCa", label: "T\xEDtol CTA (CA)" },
          { type: "string", name: "ctaTitleEs", label: "T\xEDtol CTA (ES)" },
          { type: "string", name: "ctaTitleEn", label: "T\xEDtol CTA (EN)" },
          { type: "string", name: "ctaTitleDe", label: "T\xEDtol CTA (DE)" },
          { type: "string", name: "ctaSubCa", label: "Subt\xEDtol CTA (CA)" },
          { type: "string", name: "ctaSubEs", label: "Subt\xEDtol CTA (ES)" },
          { type: "string", name: "ctaSubEn", label: "Subt\xEDtol CTA (EN)" },
          { type: "string", name: "ctaSubDe", label: "Subt\xEDtol CTA (DE)" },
          { type: "string", name: "ctaBtnCa", label: "Bot\xF3 CTA 1 (CA)" },
          { type: "string", name: "ctaBtnEs", label: "Bot\xF3 CTA 1 (ES)" },
          { type: "string", name: "ctaBtnEn", label: "Bot\xF3 CTA 1 (EN)" },
          { type: "string", name: "ctaBtnDe", label: "Bot\xF3 CTA 1 (DE)" },
          { type: "string", name: "ctaBtnUrl", label: "URL bot\xF3 CTA 1" },
          { type: "string", name: "ctaBtn2Ca", label: "Bot\xF3 CTA 2 (CA)" },
          { type: "string", name: "ctaBtn2Es", label: "Bot\xF3 CTA 2 (ES)" },
          { type: "string", name: "ctaBtn2En", label: "Bot\xF3 CTA 2 (EN)" },
          { type: "string", name: "ctaBtn2De", label: "Bot\xF3 CTA 2 (DE)" },
          { type: "string", name: "ctaBtn2Url", label: "URL bot\xF3 CTA 2" },
          {
            type: "object",
            name: "activities",
            label: "Activitats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.name || "Activitat" }) },
            fields: [
              { type: "string", name: "name", label: "Nom" },
              { type: "string", name: "emoji", label: "Emoji" },
              { type: "string", name: "intensityCa", label: "Intensitat (CA)" },
              { type: "string", name: "intensityEs", label: "Intensitat (ES)" },
              { type: "string", name: "intensityEn", label: "Intensitat (EN)" },
              { type: "string", name: "intensityDe", label: "Intensitat (DE)" },
              { type: "string", name: "days", label: "Dies (ex: Dl/Dc/Dv)" },
              { type: "string", name: "time", label: "Horari (ex: 9:00\u201310:00)" },
              { type: "string", name: "location", label: "Ubicaci\xF3 (ex: Santany\xED + Cala d'Or)" }
            ]
          }
        ]
      },
      // ─── PÀGINA PÀDEL ─────────────────────────────────────────────────
      {
        name: "paginaPadel",
        label: "\u{1F3BE} P\xE0gina P\xE0del",
        path: "src/content",
        format: "json",
        ui: { allowedActions: { create: false, delete: false }, global: true, router: () => "/padel" },
        match: { include: "pagina-padel" },
        fields: [
          { type: "string", name: "heroBadgeCa", label: "Badge hero (CA)" },
          { type: "string", name: "heroBadgeEs", label: "Badge hero (ES)" },
          { type: "string", name: "heroBadgeEn", label: "Badge hero (EN)" },
          { type: "string", name: "heroBadgeDe", label: "Badge hero (DE)" },
          { type: "string", name: "heroTitleCa", label: "T\xEDtol hero (CA)", ui: { component: "textarea" } },
          { type: "string", name: "heroTitleEs", label: "T\xEDtol hero (ES)", ui: { component: "textarea" } },
          { type: "string", name: "heroTitleEn", label: "T\xEDtol hero (EN)", ui: { component: "textarea" } },
          { type: "string", name: "heroTitleDe", label: "T\xEDtol hero (DE)", ui: { component: "textarea" } },
          { type: "string", name: "heroSubtitleCa", label: "Subt\xEDtol hero (CA)", ui: { component: "textarea" } },
          { type: "string", name: "heroSubtitleEs", label: "Subt\xEDtol hero (ES)", ui: { component: "textarea" } },
          { type: "string", name: "heroSubtitleEn", label: "Subt\xEDtol hero (EN)", ui: { component: "textarea" } },
          { type: "string", name: "heroSubtitleDe", label: "Subt\xEDtol hero (DE)", ui: { component: "textarea" } },
          { type: "string", name: "heroCtaCa", label: "Bot\xF3 Playtomic (CA)" },
          { type: "string", name: "heroCtaEs", label: "Bot\xF3 Playtomic (ES)" },
          { type: "string", name: "heroCtaEn", label: "Bot\xF3 Playtomic (EN)" },
          { type: "string", name: "heroCtaDe", label: "Bot\xF3 Playtomic (DE)" },
          { type: "string", name: "heroCtaUrl", label: "URL Playtomic" },
          { type: "string", name: "heroCta2Ca", label: "Bot\xF3 2 (CA)" },
          { type: "string", name: "heroCta2Es", label: "Bot\xF3 2 (ES)" },
          { type: "string", name: "heroCta2En", label: "Bot\xF3 2 (EN)" },
          { type: "string", name: "heroCta2De", label: "Bot\xF3 2 (DE)" },
          { type: "string", name: "heroCta2Url", label: "URL bot\xF3 2" },
          // ── Secció features ──
          { type: "string", name: "featuresTitleCa", label: "T\xEDtol features (CA)" },
          { type: "string", name: "featuresTitleEs", label: "T\xEDtol features (ES)" },
          { type: "string", name: "featuresTitleEn", label: "T\xEDtol features (EN)" },
          { type: "string", name: "featuresTitleDe", label: "T\xEDtol features (DE)" },
          {
            type: "object",
            name: "features",
            label: "Caracter\xEDstiques",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.titleCa || "Feature" }) },
            fields: [
              { type: "string", name: "icon", label: "Emoji" },
              { type: "string", name: "titleCa", label: "T\xEDtol (CA)" },
              { type: "string", name: "titleEs", label: "T\xEDtol (ES)" },
              { type: "string", name: "titleEn", label: "T\xEDtol (EN)" },
              { type: "string", name: "titleDe", label: "T\xEDtol (DE)" },
              { type: "string", name: "descCa", label: "Descripci\xF3 (CA)", ui: { component: "textarea" } },
              { type: "string", name: "descEs", label: "Descripci\xF3 (ES)", ui: { component: "textarea" } },
              { type: "string", name: "descEn", label: "Descripci\xF3 (EN)", ui: { component: "textarea" } },
              { type: "string", name: "descDe", label: "Descripci\xF3 (DE)", ui: { component: "textarea" } }
            ]
          },
          // ── Il·lustració pista ──
          { type: "string", name: "courtLabel", label: "Etiqueta pista" },
          { type: "string", name: "courtSublabel", label: "Subetiqueta pista" },
          { type: "string", name: "playtomicLabel", label: "Bot\xF3 Playtomic pista" },
          { type: "string", name: "playtomicUrl", label: "URL Playtomic" },
          // ── Secció preus ──
          { type: "string", name: "pricingTitleCa", label: "T\xEDtol preus (CA)" },
          { type: "string", name: "pricingTitleEs", label: "T\xEDtol preus (ES)" },
          { type: "string", name: "pricingTitleEn", label: "T\xEDtol preus (EN)" },
          { type: "string", name: "pricingTitleDe", label: "T\xEDtol preus (DE)" },
          {
            type: "object",
            name: "pricingSlots",
            label: "Franges horari/preu",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.labelCa || "Franja" }) },
            fields: [
              { type: "string", name: "labelCa", label: "Franja (CA)" },
              { type: "string", name: "labelEs", label: "Franja (ES)" },
              { type: "string", name: "labelEn", label: "Franja (EN)" },
              { type: "string", name: "labelDe", label: "Franja (DE)" },
              { type: "string", name: "hours", label: "Hores" },
              { type: "string", name: "price", label: "Preu" }
            ]
          },
          { type: "string", name: "pricingNoteCa", label: "Nota preus (CA)", ui: { component: "textarea" } },
          { type: "string", name: "pricingNoteEs", label: "Nota preus (ES)", ui: { component: "textarea" } },
          { type: "string", name: "pricingNoteEn", label: "Nota preus (EN)", ui: { component: "textarea" } },
          { type: "string", name: "pricingNoteDe", label: "Nota preus (DE)", ui: { component: "textarea" } }
        ]
      },
      // ─── PÀGINA CONTACTE ──────────────────────────────────────────────
      {
        name: "paginaContacte",
        label: "\u{1F4DE} P\xE0gina Contacte",
        path: "src/content",
        format: "json",
        ui: { allowedActions: { create: false, delete: false }, global: true, router: () => "/contacte" },
        match: { include: "pagina-contacte" },
        fields: [
          { type: "string", name: "heroTitleCa", label: "T\xEDtol (CA)" },
          { type: "string", name: "heroTitleEs", label: "T\xEDtol (ES)" },
          { type: "string", name: "heroTitleEn", label: "T\xEDtol (EN)" },
          { type: "string", name: "heroTitleDe", label: "T\xEDtol (DE)" },
          { type: "string", name: "heroSubtitleCa", label: "Subt\xEDtol (CA)", ui: { component: "textarea" } },
          { type: "string", name: "heroSubtitleEs", label: "Subt\xEDtol (ES)", ui: { component: "textarea" } },
          { type: "string", name: "heroSubtitleEn", label: "Subt\xEDtol (EN)", ui: { component: "textarea" } },
          { type: "string", name: "heroSubtitleDe", label: "Subt\xEDtol (DE)", ui: { component: "textarea" } },
          // ── Santanyí ──
          { type: "string", name: "loc1Name", label: "Nom ubicaci\xF3 1" },
          { type: "string", name: "loc1Address", label: "Adre\xE7a 1", ui: { component: "textarea" } },
          { type: "string", name: "loc1Phone", label: "Tel\xE8fon 1" },
          { type: "string", name: "loc1Email", label: "Email 1" },
          // ── Cala d'Or ──
          { type: "string", name: "loc2Name", label: "Nom ubicaci\xF3 2" },
          { type: "string", name: "loc2Address", label: "Adre\xE7a 2", ui: { component: "textarea" } },
          { type: "string", name: "loc2Phone", label: "Tel\xE8fon 2" },
          { type: "string", name: "loc2Email", label: "Email 2" },
          // ── Social ──
          { type: "string", name: "followUsCa", label: "Segueix-nos (CA)" },
          { type: "string", name: "followUsEs", label: "Segueix-nos (ES)" },
          { type: "string", name: "followUsEn", label: "Segueix-nos (EN)" },
          { type: "string", name: "followUsDe", label: "Segueix-nos (DE)" },
          { type: "string", name: "instagramHandle", label: "Instagram handle" },
          { type: "string", name: "instagramUrl", label: "Instagram URL" },
          { type: "string", name: "instagramFollowers", label: "Seguidors Instagram" },
          { type: "string", name: "followersCa", label: "Etiqueta seguidors (CA)" },
          { type: "string", name: "followersEs", label: "Etiqueta seguidors (ES)" },
          { type: "string", name: "followersEn", label: "Etiqueta seguidors (EN)" },
          { type: "string", name: "followersDe", label: "Etiqueta seguidors (DE)" },
          // ── WhatsApp ──
          // ── Horaris d'obertura ──
          { type: "string", name: "scheduleTitleCa", label: "T\xEDtol horaris (CA)" },
          { type: "string", name: "scheduleTitleEs", label: "T\xEDtol horaris (ES)" },
          { type: "string", name: "scheduleTitleEn", label: "T\xEDtol horaris (EN)" },
          { type: "string", name: "scheduleTitleDe", label: "T\xEDtol horaris (DE)" },
          { type: "string", name: "weekdaysLabelCa", label: "Dies laborables (CA)" },
          { type: "string", name: "weekdaysLabelEs", label: "Dies laborables (ES)" },
          { type: "string", name: "weekdaysLabelEn", label: "Dies laborables (EN)" },
          { type: "string", name: "weekdaysLabelDe", label: "Dies laborables (DE)" },
          { type: "string", name: "weekdaysHours", label: "Horari dies laborables" },
          { type: "string", name: "saturdayLabelCa", label: "Dissabte (CA)" },
          { type: "string", name: "saturdayLabelEs", label: "Dissabte (ES)" },
          { type: "string", name: "saturdayLabelEn", label: "Dissabte (EN)" },
          { type: "string", name: "saturdayLabelDe", label: "Dissabte (DE)" },
          { type: "string", name: "saturdayHours", label: "Horari dissabte" },
          { type: "string", name: "sundayLabelCa", label: "Diumenge (CA)" },
          { type: "string", name: "sundayLabelEs", label: "Diumenge (ES)" },
          { type: "string", name: "sundayLabelEn", label: "Diumenge (EN)" },
          { type: "string", name: "sundayLabelDe", label: "Diumenge (DE)" },
          { type: "string", name: "sundayHours", label: "Horari diumenge" },
          // ── Títol formulari ──
          { type: "string", name: "formTitleCa", label: "T\xEDtol formulari (CA)" },
          { type: "string", name: "formTitleEs", label: "T\xEDtol formulari (ES)" },
          { type: "string", name: "formTitleEn", label: "T\xEDtol formulari (EN)" },
          { type: "string", name: "formTitleDe", label: "T\xEDtol formulari (DE)" },
          { type: "string", name: "formSubtitleCa", label: "Subt\xEDtol formulari (CA)" },
          { type: "string", name: "formSubtitleEs", label: "Subt\xEDtol formulari (ES)" },
          { type: "string", name: "formSubtitleEn", label: "Subt\xEDtol formulari (EN)" },
          { type: "string", name: "formSubtitleDe", label: "Subt\xEDtol formulari (DE)" },
          // ── WhatsApp ──
          { type: "string", name: "waLabelCa", label: "Etiqueta WhatsApp (CA)" },
          { type: "string", name: "waLabelEs", label: "Etiqueta WhatsApp (ES)" },
          { type: "string", name: "waLabelEn", label: "Etiqueta WhatsApp (EN)" },
          { type: "string", name: "waLabelDe", label: "Etiqueta WhatsApp (DE)" },
          { type: "string", name: "waMessageCa", label: "Missatge WhatsApp (CA)", ui: { component: "textarea" } },
          { type: "string", name: "waMessageEs", label: "Missatge WhatsApp (ES)", ui: { component: "textarea" } },
          { type: "string", name: "waMessageEn", label: "Missatge WhatsApp (EN)", ui: { component: "textarea" } },
          { type: "string", name: "waMessageDe", label: "Missatge WhatsApp (DE)", ui: { component: "textarea" } }
        ]
      },
      // ─── PÀGINES GENERALS (escalable) ────────────────────────────────
      {
        name: "pagines",
        label: "\u{1F4C4} P\xE0gines generals",
        path: "src/content/pagines",
        format: "json",
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => (values?.titleCa || "pagina").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-").replace(/[^\w-]/g, "")
          }
        },
        fields: [
          // ── SEO ──────────────────────────────────────────────────────
          { type: "string", name: "seoTitleCa", label: "\u{1F50D} SEO T\xEDtol (CA)" },
          { type: "string", name: "seoTitleEs", label: "\u{1F50D} SEO T\xEDtol (ES)" },
          { type: "string", name: "seoTitleEn", label: "\u{1F50D} SEO T\xEDtol (EN)" },
          { type: "string", name: "seoTitleDe", label: "\u{1F50D} SEO T\xEDtol (DE)" },
          { type: "string", name: "seoDescCa", label: "\u{1F50D} SEO Descripci\xF3 (CA)", ui: { component: "textarea" } },
          { type: "string", name: "seoDescEs", label: "\u{1F50D} SEO Descripci\xF3 (ES)", ui: { component: "textarea" } },
          { type: "string", name: "seoDescEn", label: "\u{1F50D} SEO Descripci\xF3 (EN)", ui: { component: "textarea" } },
          { type: "string", name: "seoDescDe", label: "\u{1F50D} SEO Descripci\xF3 (DE)", ui: { component: "textarea" } },
          // ── HERO ─────────────────────────────────────────────────────
          {
            type: "string",
            name: "heroBg",
            label: "Color fons hero",
            options: [
              { label: "Blau (principal)", value: "blue" },
              { label: "Porpra (gimn\xE0s)", value: "purple" },
              { label: "Taronja (p\xE0del)", value: "orange" },
              { label: "Verd", value: "green" },
              { label: "Fosc (piscina)", value: "pool" }
            ]
          },
          { type: "string", name: "heroBadgeCa", label: "Badge hero (CA)" },
          { type: "string", name: "heroBadgeEs", label: "Badge hero (ES)" },
          { type: "string", name: "heroBadgeEn", label: "Badge hero (EN)" },
          { type: "string", name: "heroBadgeDe", label: "Badge hero (DE)" },
          { type: "string", name: "heroTitleCa", label: "T\xEDtol hero (CA)", ui: { component: "textarea" } },
          { type: "string", name: "heroTitleEs", label: "T\xEDtol hero (ES)", ui: { component: "textarea" } },
          { type: "string", name: "heroTitleEn", label: "T\xEDtol hero (EN)", ui: { component: "textarea" } },
          { type: "string", name: "heroTitleDe", label: "T\xEDtol hero (DE)", ui: { component: "textarea" } },
          { type: "string", name: "heroSubtitleCa", label: "Subt\xEDtol hero (CA)", ui: { component: "textarea" } },
          { type: "string", name: "heroSubtitleEs", label: "Subt\xEDtol hero (ES)", ui: { component: "textarea" } },
          { type: "string", name: "heroSubtitleEn", label: "Subt\xEDtol hero (EN)", ui: { component: "textarea" } },
          { type: "string", name: "heroSubtitleDe", label: "Subt\xEDtol hero (DE)", ui: { component: "textarea" } },
          { type: "string", name: "heroCtaCa", label: "Bot\xF3 CTA (CA)" },
          { type: "string", name: "heroCtaEs", label: "Bot\xF3 CTA (ES)" },
          { type: "string", name: "heroCtaEn", label: "Bot\xF3 CTA (EN)" },
          { type: "string", name: "heroCtaDe", label: "Bot\xF3 CTA (DE)" },
          { type: "string", name: "heroCtaUrl", label: "URL bot\xF3 CTA" },
          // ── CONTINGUT RICH-TEXT ───────────────────────────────────────
          { type: "rich-text", name: "contingutCa", label: "\u{1F4DD} Contingut (CA)" },
          { type: "rich-text", name: "contingutEs", label: "\u{1F4DD} Contingut (ES)" },
          { type: "rich-text", name: "contingutEn", label: "\u{1F4DD} Contingut (EN)" },
          { type: "rich-text", name: "contingutDe", label: "\u{1F4DD} Contingut (DE)" },
          // ── CTA FINAL ────────────────────────────────────────────────
          { type: "string", name: "ctaTitleCa", label: "T\xEDtol CTA final (CA)" },
          { type: "string", name: "ctaTitleEs", label: "T\xEDtol CTA final (ES)" },
          { type: "string", name: "ctaTitleEn", label: "T\xEDtol CTA final (EN)" },
          { type: "string", name: "ctaTitleDe", label: "T\xEDtol CTA final (DE)" },
          { type: "string", name: "ctaBtn1Ca", label: "Bot\xF3 1 (CA)" },
          { type: "string", name: "ctaBtn1Es", label: "Bot\xF3 1 (ES)" },
          { type: "string", name: "ctaBtn1En", label: "Bot\xF3 1 (EN)" },
          { type: "string", name: "ctaBtn1De", label: "Bot\xF3 1 (DE)" },
          { type: "string", name: "ctaBtn1Url", label: "URL bot\xF3 1" },
          { type: "string", name: "ctaBtn2Ca", label: "Bot\xF3 2 (CA)" },
          { type: "string", name: "ctaBtn2Es", label: "Bot\xF3 2 (ES)" },
          { type: "string", name: "ctaBtn2En", label: "Bot\xF3 2 (EN)" },
          { type: "string", name: "ctaBtn2De", label: "Bot\xF3 2 (DE)" },
          { type: "string", name: "ctaBtn2Url", label: "URL bot\xF3 2" }
        ]
      },
      // ─── NOTÍCIES ─────────────────────────────────────────────────────
      {
        name: "noticies",
        label: "\u{1F4E2} Not\xEDcies i novetats",
        path: "src/content/noticies",
        format: "json",
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => values?.titolCa?.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "") || "noticia"
          }
        },
        fields: [
          { type: "string", name: "titolCa", label: "T\xEDtol (CA)" },
          { type: "string", name: "titolEs", label: "T\xEDtol (ES)" },
          { type: "string", name: "titolEn", label: "T\xEDtol (EN)" },
          { type: "string", name: "titolDe", label: "T\xEDtol (DE)" },
          { type: "datetime", name: "data", label: "Data de publicaci\xF3" },
          { type: "image", name: "imatge", label: "Imatge destacada", uploadDir: () => "public/images/noticies" },
          { type: "rich-text", name: "contingutCa", label: "Contingut (CA)" },
          { type: "rich-text", name: "contingutEs", label: "Contingut (ES)" },
          { type: "boolean", name: "publicada", label: "Publicada" }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
