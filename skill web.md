---
name: web-piscines-santanyi
description: Skill per desenvolupar la web completa de les Piscines Municipals de Santanyí i Cala d'Or (gestionades per Algàlia Esport SL). Frontend amb Astro 5 (SSG/SSR, Tailwind, View Transitions) i backend/admin amb Laravel 12 + Filament 5. Implementa TOTES les millores de l'auditoria de marketing (41/100 → 78/100): multi-pàgina amb SEO local, formulari captació, preus visibles, schema markup, Tourist Day Pass multiidioma, integració Playtomic pàdel, feed Instagram, i panel d'administració Filament per gestionar contingut, horaris, activitats, abonats i reserves. Usa SEMPRE aquesta skill quan es parli de: web piscines santanyí, web cala d'or piscina, piscinessantanyicalador, web Algàlia Esport, web instal·lació esportiva municipal, astro laravel filament piscines, o qualsevol tasca relacionada amb el desenvolupament o millora del site de les piscines de Santanyí/Cala d'Or.
---

# Web Piscines Santanyí i Cala d'Or

Skill per crear la web completa de les Piscines Municipals de Santanyí i Cala d'Or.
Frontend: **Astro 5** (SSG + islands) · Backend/Admin: **Laravel 12 + Filament 5** · API REST entre ambdós.

## Context del projecte

### El client
- **Instal·lacions**: Piscina coberta + gimnàs + fitness a Santanyí + Piscina + gimnàs a Cala d'Or
- **Gestora**: Algàlia Esport SL (concessió municipal, +15 anys experiència gestió esportiva)
- **Ajuntament**: Santanyí (Mallorca)
- **Abonats**: 550+ als primers mesos d'obertura
- **Serveis**: Natació lliure, cursos natació (25 cursos), gimnàs/fitness, activitats dirigides (20+), pàdel (Playtomic), entrenador personal, readaptació lesions
- **Contacte**: Tel 673 00 38 28 · Email piscinasantanyi@algaliasport.net
- **Xarxes**: Instagram @piscinasantanyicalador (1.516 seg.) · Facebook /piscinasantanyi
- **App**: App pròpia PWA per reserves (amb QR d'accés)
- **Web actual**: piscinessantanyicalador.com (single-page HTML bàsic, puntuació marketing 41/100)
- **Idiomes**: Català (principal), Castellà, Anglès (turistes), Alemany (turistes)

### Auditoria de marketing (puntuació actual → objectiu)
| Agent | Actual | Objectiu | Problema principal |
|-------|--------|----------|--------------------|
| Contingut & Copy | 35 | 70 | Copy autocomplaent, sense CTAs ni headlines |
| Conversió & CRO | 28 | 65 | ZERO formularis, preus invisibles, sense prova social |
| SEO | 42 | 78 | Single-page, sense meta tags ni schema |
| Competència | 52 | 75 | Preu imbatible (10€/mes) però amagat |
| Marca | 55 | 80 | IG bo però web no ho reflecteix, 0 ressenyes |
| **GLOBAL** | **41** | **78** | |

## Arquitectura tècnica

```
piscines-santanyi/
├── frontend/                    # Astro 5 (SSG + View Transitions)
│   ├── src/
│   │   ├── layouts/
│   │   │   ├── Base.astro       # Layout base amb SEO, fonts, analytics
│   │   │   └── Page.astro       # Layout pàgina amb nav + footer
│   │   ├── components/
│   │   │   ├── Nav.astro        # Navbar responsive amb language switcher
│   │   │   ├── Hero.astro       # Hero section amb CTA principal
│   │   │   ├── ServicesGrid.astro
│   │   │   ├── PricingTable.astro
│   │   │   ├── Testimonials.astro  # Carrousel testimonis (island React)
│   │   │   ├── TeamGrid.astro
│   │   │   ├── ContactForm.astro   # Formulari captació (island React)
│   │   │   ├── WhatsAppButton.astro
│   │   │   ├── InstagramFeed.astro # Feed IG (island React)
│   │   │   ├── FacilityTabs.astro  # Tabs Santanyí vs Cala d'Or
│   │   │   ├── ScheduleTable.astro
│   │   │   ├── AppPromo.astro      # Promoció app reserves
│   │   │   ├── TrustBar.astro      # 550+ abonats, 15 anys exp.
│   │   │   ├── SchemaMarkup.astro  # JSON-LD structured data
│   │   │   └── DayPassCTA.astro    # Tourist Day Pass CTA
│   │   ├── pages/
│   │   │   ├── index.astro         # Home
│   │   │   ├── natacio.astro
│   │   │   ├── gimnas.astro
│   │   │   ├── activitats.astro
│   │   │   ├── padel.astro
│   │   │   ├── entrenador-personal.astro
│   │   │   ├── preus.astro
│   │   │   ├── horaris.astro
│   │   │   ├── santanyi.astro      # Instal·lació Santanyí
│   │   │   ├── cala-dor.astro      # Instal·lació Cala d'Or
│   │   │   ├── day-pass.astro      # Landing multiidioma turistes
│   │   │   ├── app.astro           # Promoció app reserves
│   │   │   ├── contacte.astro
│   │   │   └── [...lang]/          # i18n routing (ca/es/en/de)
│   │   ├── i18n/
│   │   │   ├── ca.json             # Català (principal)
│   │   │   ├── es.json             # Castellà
│   │   │   ├── en.json             # Anglès
│   │   │   └── de.json             # Alemany
│   │   ├── content/                # Astro Content Collections
│   │   │   ├── activitats/         # MDX per activitat
│   │   │   └── noticies/           # Blog/notícies
│   │   └── styles/
│   │       └── global.css          # Tailwind + custom
│   ├── public/
│   │   ├── images/                 # Fotos instal·lacions (de web actual)
│   │   ├── fonts/
│   │   └── favicon.svg
│   ├── astro.config.mjs
│   ├── tailwind.config.mjs
│   └── package.json
│
├── backend/                     # Laravel 12 + Filament 5
│   ├── app/
│   │   ├── Models/
│   │   │   ├── Facility.php     # Santanyí / Cala d'Or
│   │   │   ├── Activity.php     # Activitats dirigides
│   │   │   ├── Schedule.php     # Horaris per activitat/instal·lació
│   │   │   ├── PricePlan.php    # Plans de preus
│   │   │   ├── TeamMember.php   # Equip (monitors, entrenadors)
│   │   │   ├── Testimonial.php  # Testimonis clients
│   │   │   ├── ContactLead.php  # Leads del formulari
│   │   │   ├── DayPass.php      # Passes de dia (turistes)
│   │   │   ├── Page.php         # Pàgines CMS
│   │   │   ├── Setting.php      # Configuració global
│   │   │   └── MediaItem.php    # Galeria fotos
│   │   ├── Filament/
│   │   │   ├── Resources/       # CRUD per cada model
│   │   │   ├── Pages/
│   │   │   │   └── Dashboard.php
│   │   │   └── Widgets/
│   │   │       ├── LeadsOverview.php
│   │   │       ├── DayPassStats.php
│   │   │       └── AbonatsCounter.php
│   │   └── Http/
│   │       └── Controllers/Api/
│   │           ├── ContentController.php   # API per Astro
│   │           ├── ContactController.php   # Rebre formularis
│   │           └── DayPassController.php   # Gestió day passes
│   ├── database/migrations/
│   └── routes/api.php
│
└── docs/
    ├── AUDIT.md                 # Auditoria marketing completa
    ├── DEPLOYMENT.md            # Instruccions desplegament
    └── API.md                   # Documentació API endpoints
```

## Flux de treball

### FASE 1: Llegir les references ABANS de començar
1. **SEMPRE** llegeix `references/contingut.md` per obtenir tot el copy, textos i dades reals
2. **SEMPRE** llegeix `references/astro-frontend.md` per l'arquitectura Astro
3. **SEMPRE** llegeix `references/laravel-backend.md` per l'arquitectura Laravel/Filament
4. Consulta `references/seo-schema.md` per schema markup i meta tags

### FASE 2: Frontend Astro (setmanes 1-2)
1. Crear projecte Astro 5 amb Tailwind, View Transitions, React islands
2. Configurar i18n (ca/es/en/de) amb routing dinàmic
3. Implementar layout base amb SEO automàtic per pàgina
4. Crear les 13 pàgines amb contingut real (des de `references/contingut.md`)
5. Components interactius com islands React: formulari, testimonis, IG feed
6. Descarregar i usar fotos reals de la web actual
7. WhatsApp flotant, schema markup JSON-LD a cada pàgina
8. Responsive design (mobile-first, la majoria d'usuaris vénen de mòbil)

### FASE 3: Backend Laravel/Filament (setmanes 2-3)
1. Crear projecte Laravel 12, instal·lar Filament 5
2. Models i migracions per a tots els models
3. API REST endpoints per servir contingut a Astro
4. Panel Filament amb recursos per gestionar:
   - Activitats i horaris
   - Plans de preus
   - Membres de l'equip
   - Testimonis
   - Leads del formulari de contacte
   - Day Passes (venuts, usats, pendents)
   - Pàgines i contingut CMS
   - Galeria de fotos per instal·lació
5. Dashboard amb widgets: leads setmanals, day passes venuts, abonats

### FASE 4: Integració i Deploy (setmana 4)
1. Connectar Astro amb l'API Laravel (fetch a build time + ISR)
2. Formulari contacte → POST a Laravel → notificació WhatsApp/email
3. Day Pass → POST a Laravel → Stripe/Bizum → QR per email
4. Desplegament: Astro a Vercel/Netlify, Laravel a servidor existent

## Regles de disseny

### Identitat visual (MANTENIR la de la web actual)
- **Consultar fotos reals** de la web actual a `references/contingut.md`
- Colors: Extreure de la web actual (probablement blaus/blancs/verds piscina)
- Si no es poden extreure, usar: Blau piscina (#0EA5E9), Blanc, Gris fosc (#1E293B)
- Tipografia: System stack o Poppins/DM Sans (moderna, llegible)
- To de veu: Proper, familiar, motivador (variant balear del català)
- SEMPRE prioritzar fotos reals de les instal·lacions sobre imatges genèriques

### Regles de copy (de l'auditoria)
- MAI copy autocomplaent ("som molt dinàmics") → SEMPRE beneficis pel client
- CTAs a CADA secció: "Reserva", "Consulta horaris", "Descarrega l'app"
- Headlines amb benefici + dada concreta: "Des de 10€/mes per a residents"
- Textos curts, escanejables, amb icones i estructura visual
- Prova social SEMPRE visible: 550+ abonats, 15 anys experiència, IG

### Requisits SEO (de l'auditoria)
- Meta title i description únics per CADA pàgina
- Schema JSON-LD a cada pàgina (SportsActivityLocation + SwimmingPool)
- Estructura H1 > H2 > H3 correcta (1 sol H1 per pàgina)
- URLs amigables en català: /natacio, /gimnas, /padel, /preus
- Sitemap XML automàtic + robots.txt
- Open Graph i Twitter Cards per compartir a xarxes

## Comandes

Quan l'usuari demani:
- **"crea la home"** → Genera `src/pages/index.astro` amb Hero, TrustBar, ServicesGrid, PricingTable, Testimonials, ContactForm, WhatsApp
- **"crea la pàgina de preus"** → Genera `src/pages/preus.astro` amb taula completa, Day Pass CTA, programa referits
- **"crea el backend"** → Genera models, migracions, recursos Filament, API controllers
- **"crea el formulari"** → Genera ContactForm React island + endpoint Laravel + notificació
- **"crea el day pass"** → Genera landing multiidioma + Stripe integration + QR generator
- **"crea component [nom]"** → Genera el component Astro/React corresponent
- **"configura i18n"** → Genera arxius de traducció ca/es/en/de i routing dinàmic
- **"schema markup"** → Genera SchemaMarkup.astro amb JSON-LD per SportsActivityLocation
- **"desplegament"** → Genera instruccions i configs per Vercel (Astro) + servidor (Laravel)

## References (LLEGIR ABANS DE CODIFICAR)

| Fitxer | Quan llegir-lo |
|--------|----------------|
| `references/contingut.md` | SEMPRE — Conté tot el copy, dades, textos i fotos reals |
| `references/astro-frontend.md` | Quan creïs qualsevol component o pàgina Astro |
| `references/laravel-backend.md` | Quan creïs models, migracions, Filament resources o API |
| `references/seo-schema.md` | Quan implementis SEO, meta tags o schema markup |
