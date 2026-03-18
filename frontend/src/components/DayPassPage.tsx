import { useTina, tinaField } from 'tinacms/dist/react';

type Lang = 'ca' | 'es' | 'en' | 'de';

interface Props {
  query: string; variables: object; data: any;
  lang: Lang;
}

export default function DayPassPage({ query, variables, data, lang }: Props) {
  const { data: d } = useTina({ query, variables, data });
  const g = d?.paginaDayPass ?? {};
  const lk = lang === 'es' ? 'Es' : lang === 'en' ? 'En' : lang === 'de' ? 'De' : 'Ca';
  const tf = (field: string) => d?.paginaDayPass ? tinaField(d.paginaDayPass, field) : undefined;

  const badge       = g[`heroBadge${lk}`]     || g.heroBadgeCa     || 'Turistes · Visitants';
  const title       = g.heroTitle             || 'Day Pass';
  const subtitle    = g[`heroSubtitle${lk}`]  || g.heroSubtitleCa  || 'Accés per 1 dia';
  const desc        = g[`heroDesc${lk}`]      || g.heroDescCa      || '';
  const pricePool   = g.pricePool             || '5';
  const priceGym    = g.pricePoolGym          || '8';
  const poolLabel   = g[`poolLabel${lk}`]     || g.poolLabelCa     || 'Piscina';
  const gymLabel    = g[`poolGymLabel${lk}`]  || g.poolGymLabelCa  || 'Piscina + Gimnàs';
  const perDay      = g[`perDay${lk}`]        || g.perDayCa        || '/ dia';
  const includes    = g[`includes${lk}`]      || g.includesCa      || '';
  const sectionTitle = g[`sectionTitle${lk}`] || g.sectionTitleCa  || 'Què inclou el teu Day Pass';
  const poolFeatures: any[] = g.poolFeatures ?? [];
  const gymFeatures: any[]  = g.poolGymFeatures ?? [];
  const poolBtn     = g[`poolBtn${lk}`]       || g.poolBtnCa       || 'Consultar a recepció';
  const facTitle    = g[`facilitiesTitle${lk}`]|| g.facilitiesTitleCa || 'Disponible a les dues instal·lacions';
  const formTitle   = g[`formTitle${lk}`]     || g.formTitleCa     || 'Consultar sobre Day Pass';
  const formSub     = g[`formSubtitle${lk}`]  || g.formSubtitleCa  || 'Et responem en 24 hores';
  const heroImage   = g.heroImage ? (g.heroImage.startsWith('/') ? g.heroImage : `/images/${g.heroImage}`) : '';

  return (
    <>
      {/* Hero */}
      <section className={`${heroImage ? '' : 'bg-gradient-to-br from-amber-500 via-orange-500 to-red-500'} text-white py-20 relative overflow-hidden`}>
        {heroImage && <>
          <img src={heroImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/85 via-orange-500/70 to-transparent"></div>
        </>}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="dp-hero-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="3" fill="white"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dp-hero-pattern)"/>
          </svg>
        </div>

        <div className="container-site relative z-10 text-center">
          <span className="badge bg-white/20 text-white border border-white/30 mb-4" data-tina-field={tf(`heroBadge${lk}`)}>{badge}</span>
          <h1 className="font-display font-bold text-4xl sm:text-6xl text-white mb-4" data-tina-field={tf('heroTitle')}>{title}</h1>
          <p className="text-white/90 text-2xl font-display mb-4" data-tina-field={tf(`heroSubtitle${lk}`)}>{subtitle}</p>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-10" data-tina-field={tf(`heroDesc${lk}`)}>{desc}</p>

          {/* Price cards */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-3xl px-10 py-8 border border-white/30 text-center min-w-[200px]">
              <div className="text-5xl font-display font-bold text-white" data-tina-field={tf('pricePool')}>{pricePool}€</div>
              <div className="text-white font-semibold mt-2" data-tina-field={tf(`poolLabel${lk}`)}>{poolLabel}</div>
              <div className="text-white/70 text-sm" data-tina-field={tf(`perDay${lk}`)}>{perDay}</div>
            </div>
            <div className="bg-white rounded-3xl px-10 py-8 shadow-2xl text-center min-w-[200px]">
              <div className="text-5xl font-display font-bold text-orange-500" data-tina-field={tf('pricePoolGym')}>{priceGym}€</div>
              <div className="text-gray-800 font-semibold mt-2" data-tina-field={tf(`poolGymLabel${lk}`)}>{gymLabel}</div>
              <div className="text-gray-400 text-sm">{perDay}</div>
            </div>
          </div>

          <div className="text-white/80 text-sm" data-tina-field={tf(`includes${lk}`)}>{includes}</div>

          {/* Language selector */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {[
              { l: 'ca' as Lang, label: '🇪🇸 Català' },
              { l: 'es' as Lang, label: '🇪🇸 Castellano' },
              { l: 'en' as Lang, label: '🇬🇧 English' },
              { l: 'de' as Lang, label: '🇩🇪 Deutsch' },
            ].map(({ l, label }) => (
              <a
                key={l}
                href={l === 'ca' ? '/day-pass' : `/${l}/day-pass`}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${l === lang ? 'bg-white text-orange-600' : 'bg-white/20 text-white hover:bg-white/30 border border-white/30'}`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section bg-white">
        <div className="container-site">
          <h2 className="section-title text-center mb-10" data-tina-field={tf(`sectionTitle${lk}`)}>{sectionTitle}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Pool only */}
            <div className="card p-6 border-2 border-amber-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold text-xl text-dark" data-tina-field={tf(`poolLabel${lk}`)}>{poolLabel}</h3>
                <span className="font-display font-bold text-3xl text-amber-500">{pricePool}€</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                {poolFeatures.map((f: any, i: number) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-amber-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span data-tina-field={tinaField(f, `text${lk}`)}>{f[`text${lk}`] || f.textCa}</span>
                  </li>
                ))}
              </ul>
              <a href="tel:+34673003828" className="mt-5 block text-center py-2.5 bg-amber-500 text-white font-semibold rounded-xl hover:bg-amber-600 transition-colors text-sm" data-tina-field={tf(`poolBtn${lk}`)}>
                {poolBtn}
              </a>
            </div>

            {/* Pool + Gym */}
            <div className="card p-6 border-2 border-orange-400 bg-orange-50/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold text-xl text-dark" data-tina-field={tf(`poolGymLabel${lk}`)}>{gymLabel}</h3>
                <span className="font-display font-bold text-3xl text-orange-500">{priceGym}€</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                {gymFeatures.map((f: any, i: number) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-orange-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span data-tina-field={tinaField(f, `text${lk}`)}>{f[`text${lk}`] || f.textCa}</span>
                  </li>
                ))}
              </ul>
              <a href="tel:+34673003828" className="mt-5 block text-center py-2.5 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors text-sm">
                {poolBtn}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section bg-gray-50">
        <div className="container-site text-center">
          <h2 className="section-title mb-4" data-tina-field={tf(`facilitiesTitle${lk}`)}>{facTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mt-8">
            <div className="card p-5 text-center hover:shadow-md transition-shadow">
              <div className="font-display font-semibold text-dark mb-1">📍 Santanyí</div>
              <div className="text-sm text-gray-500">Carrer Bernat Vidal i Tomàs, 83</div>
              <a href="tel:+34673003828" className="text-primary-600 text-sm font-medium mt-1 block">673 003 828</a>
            </div>
            <div className="card p-5 text-center hover:shadow-md transition-shadow">
              <div className="font-display font-semibold text-dark mb-1">📍 Cala d'Or</div>
              <div className="text-sm text-gray-500">Avinguda Sementer, S/N</div>
              <a href="tel:+34673008715" className="text-teal-600 text-sm font-medium mt-1 block">673 008 715</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form header */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="max-w-lg mx-auto">
            <h2 className="section-title text-center mb-3" data-tina-field={tf(`formTitle${lk}`)}>{formTitle}</h2>
            <p className="section-subtitle text-center mb-8" data-tina-field={tf(`formSubtitle${lk}`)}>{formSub}</p>
          </div>
        </div>
      </section>
    </>
  );
}