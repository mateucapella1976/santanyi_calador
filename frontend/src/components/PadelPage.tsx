import { useTina, tinaField } from 'tinacms/dist/react';

type Lang = 'ca' | 'es' | 'en' | 'de';

function localePath(lang: Lang, path: string) {
  return lang === 'ca' ? path : `/${lang}${path}`;
}

interface Props {
  query: string; variables: object; data: any;
  lang: Lang;
}

export default function PadelPage({ query, variables, data, lang }: Props) {
  const { data: d } = useTina({ query, variables, data });
  const g  = d?.paginaPadel ?? {};
  const lk = lang === 'es' ? 'Es' : lang === 'en' ? 'En' : lang === 'de' ? 'De' : 'Ca';
  const tf = (field: string) => d?.paginaPadel ? tinaField(d.paginaPadel, field) : undefined;

  const badge    = g[`heroBadge${lk}`]    || g.heroBadgeCa    || 'Pàdel';
  const title    = g[`heroTitle${lk}`]    || g.heroTitleCa    || 'Pàdel a Santanyí';
  const subtitle = g[`heroSubtitle${lk}`] || g.heroSubtitleCa || '';
  const cta      = g[`heroCta${lk}`]      || g.heroCtaCa      || 'Reservar a Playtomic';
  const ctaUrl   = g.heroCtaUrl           || 'https://playtomic.io';
  const cta2     = g[`heroCta2${lk}`]     || g.heroCta2Ca     || '';
  const cta2Url  = g.heroCta2Url          || '/contacte';
  const heroImage = g.heroImage ? (g.heroImage.startsWith('/') ? g.heroImage : `/images/${g.heroImage}`) : '';

  const featuresTitle = g[`featuresTitle${lk}`] || g.featuresTitleCa || 'Tot per als amants del pàdel';
  const features: any[] = g.features ?? [];

  const pricingTitle = g[`pricingTitle${lk}`] || g.pricingTitleCa || 'Preus pistes de pàdel';
  const pricingSlots: any[] = g.pricingSlots ?? [];
  const pricingNote = g[`pricingNote${lk}`] || g.pricingNoteCa || '';

  return (
    <>
      {/* Hero */}
      <section className={`${heroImage ? 'relative overflow-hidden' : 'bg-gradient-to-br from-orange-800 via-orange-600 to-amber-500'} text-white py-20`}>
        {heroImage && <>
          <img src={heroImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-800/85 via-orange-600/70 to-transparent"></div>
        </>}
        <div className={`container-site ${heroImage ? 'relative z-10' : ''}`}>
          <div className="max-w-3xl">
            <span
              className="badge bg-white/20 text-white border border-white/30 mb-4"
              data-tina-field={tf(`heroBadge${lk}`)}
            >{badge}</span>
            <h1
              className="font-display font-bold text-4xl sm:text-5xl text-white mb-4"
              data-tina-field={tf(`heroTitle${lk}`)}
            >{title}</h1>
            <p
              className="text-white/80 text-xl mb-8"
              data-tina-field={tf(`heroSubtitle${lk}`)}
            >{subtitle}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={ctaUrl}
                target={ctaUrl.startsWith('http') ? '_blank' : undefined}
                rel={ctaUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="btn-primary"
                data-tina-field={tf(`heroCta${lk}`)}
              >{cta}</a>
              {cta2 && (
                <a
                  href={localePath(lang, cta2Url)}
                  className="btn-ghost"
                  data-tina-field={tf(`heroCta2${lk}`)}
                >{cta2}</a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="section-title mb-6"
                data-tina-field={tf(`featuresTitle${lk}`)}
              >{featuresTitle}</h2>
              <div className="space-y-5">
                {features.map((f: any, i: number) => (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                      data-tina-field={tinaField(f, 'icon')}
                    >{f.icon}</div>
                    <div>
                      <h3
                        className="font-semibold text-dark mb-1"
                        data-tina-field={tinaField(f, `title${lk}`)}
                      >{f[`title${lk}`] || f.titleCa}</h3>
                      <p
                        className="text-gray-500 text-sm leading-relaxed"
                        data-tina-field={tinaField(f, `desc${lk}`)}
                      >{f[`desc${lk}`] || f.descCa}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Court illustration */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl h-80 flex items-center justify-center border border-orange-100">
              <div className="text-center">
                <div className="text-6xl mb-3">🎾</div>
                <div
                  className="font-display font-bold text-orange-700 text-xl"
                  data-tina-field={tf('courtLabel')}
                >{g.courtLabel || 'Pàdel'}</div>
                <div
                  className="text-orange-500 text-sm mt-1"
                  data-tina-field={tf('courtSublabel')}
                >{g.courtSublabel || 'Santanyí'}</div>
                <a
                  href={g.playtomicUrl || 'https://playtomic.io'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-xl hover:bg-orange-600 transition-colors"
                  data-tina-field={tf('playtomicLabel')}
                >
                  {g.playtomicLabel || 'Playtomic'}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section bg-gray-50">
        <div className="container-site text-center">
          <h2
            className="section-title mb-4"
            data-tina-field={tf(`pricingTitle${lk}`)}
          >{pricingTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mt-8">
            {pricingSlots.map((slot: any, i: number) => (
              <div key={i} className="card p-6 text-center hover:shadow-md transition-shadow">
                <div
                  className="font-semibold text-dark mb-1"
                  data-tina-field={tinaField(slot, `label${lk}`)}
                >{slot[`label${lk}`] || slot.labelCa}</div>
                <div
                  className="text-sm text-gray-400 mb-3"
                  data-tina-field={tinaField(slot, 'hours')}
                >{slot.hours}</div>
                <div className="font-display font-bold text-3xl text-orange-500">
                  <span data-tina-field={tinaField(slot, 'price')}>{slot.price}</span>
                  <span className="text-base text-gray-400 font-normal">/h</span>
                </div>
              </div>
            ))}
          </div>
          <p
            className="text-sm text-gray-400 mt-4"
            data-tina-field={tf(`pricingNote${lk}`)}
          >{pricingNote}</p>
        </div>
      </section>
    </>
  );
}
