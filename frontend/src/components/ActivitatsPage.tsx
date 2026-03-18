import { useTina, tinaField } from 'tinacms/dist/react';

type Lang = 'ca' | 'es' | 'en' | 'de';

function localePath(lang: Lang, path: string) {
  return lang === 'ca' ? path : `/${lang}${path}`;
}

interface Props {
  query: string; variables: object; data: any;
  lang: Lang;
}

const INTENSITY_COLOR: Record<string, string> = {
  'Low': 'bg-green-100 text-green-700', 'Low-Medium': 'bg-emerald-100 text-emerald-700', 'Medium': 'bg-yellow-100 text-yellow-700',
  'Baixa': 'bg-green-100 text-green-700', 'Baixa-Mitjana': 'bg-emerald-100 text-emerald-700', 'Mitjana': 'bg-yellow-100 text-yellow-700',
  'Baja': 'bg-green-100 text-green-700', 'Baja-Media': 'bg-emerald-100 text-emerald-700', 'Media': 'bg-yellow-100 text-yellow-700',
  'Medium-High': 'bg-orange-100 text-orange-700', 'Mitjana-Alta': 'bg-orange-100 text-orange-700', 'Media-Alta': 'bg-orange-100 text-orange-700',
  'High': 'bg-red-100 text-red-700', 'Alta': 'bg-red-100 text-red-700',
  'Mittel': 'bg-yellow-100 text-yellow-700', 'Niedrig': 'bg-green-100 text-green-700', 'Hoch': 'bg-red-100 text-red-700',
  'Mittel-Hoch': 'bg-orange-100 text-orange-700', 'Niedrig-Mittel': 'bg-emerald-100 text-emerald-700',
};

export default function ActivitatsPage({ query, variables, data, lang }: Props) {
  const { data: d } = useTina({ query, variables, data });
  const g  = d?.paginaActivitats ?? {};
  const lk = lang === 'es' ? 'Es' : lang === 'en' ? 'En' : lang === 'de' ? 'De' : 'Ca';

  const badge    = g[`heroBadge${lk}`]    || g.heroBadgeCa    || 'Activitats';
  const title    = g[`heroTitle${lk}`]    || g.heroTitleCa    || 'Les nostres activitats';
  const subtitle = g[`heroSubtitle${lk}`] || g.heroSubtitleCa || '';
  const cta      = g[`heroCta${lk}`]      || g.heroCtaCa      || 'Inscriure\'m';
  const ctaUrl   = g.heroCtaUrl           || '/contacte';
  const cta2     = g[`heroCta2${lk}`]     || g.heroCta2Ca     || '';
  const cta2Url  = g.heroCta2Url          || '/horaris';
  const heroImage = g.heroImage ? (g.heroImage.startsWith('/') ? g.heroImage : `/images/${g.heroImage}`) : '';
  const activities: any[] = g.activities ?? [];

  const intensityKey = lang === 'es' ? 'intensityEs' : lang === 'en' ? 'intensityEn' : lang === 'de' ? 'intensityDe' : 'intensityCa';
  const tf = (field: string) => d?.paginaActivitats ? tinaField(d.paginaActivitats, field) : undefined;

  const allTitle  = g[`allTitle${lk}`]  || g.allTitleCa  || 'Totes les nostres activitats';
  const allSub    = g[`allSub${lk}`]    || g.allSubCa    || '';
  const ctaTitle  = g[`ctaTitle${lk}`]  || g.ctaTitleCa  || 'Preparat per començar?';
  const ctaSub    = g[`ctaSub${lk}`]    || g.ctaSubCa    || '';
  const ctaBtn    = g[`ctaBtn${lk}`]    || g.ctaBtnCa    || "Inscriure'm";
  const ctaBtnUrl = g.ctaBtnUrl         || '/contacte';
  const ctaBtn2   = g[`ctaBtn2${lk}`]   || g.ctaBtn2Ca   || 'Horaris';
  const ctaBtn2Url = g.ctaBtn2Url       || '/horaris';

  return (
    <>
      {/* Hero */}
      <section className={`${heroImage ? 'relative overflow-hidden' : 'bg-gradient-to-br from-emerald-800 via-emerald-600 to-teal-500'} text-white py-20`}>
        {heroImage && <>
          <img src={heroImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-800/85 via-emerald-600/70 to-transparent"></div>
        </>}
        <div className={`container-site ${heroImage ? 'relative z-10' : ''}`}>
          <div className="max-w-3xl">
            <span
              className="badge bg-white/20 text-white border border-white/30 mb-4"
              data-tina-field={d?.paginaActivitats ? tinaField(d.paginaActivitats, `heroBadge${lk}`) : undefined}
            >{badge}</span>
            <h1
              className="font-display font-bold text-4xl sm:text-5xl text-white mb-4"
              data-tina-field={d?.paginaActivitats ? tinaField(d.paginaActivitats, `heroTitle${lk}`) : undefined}
            >{title}</h1>
            <p
              className="text-white/80 text-xl mb-8"
              data-tina-field={d?.paginaActivitats ? tinaField(d.paginaActivitats, `heroSubtitle${lk}`) : undefined}
            >{subtitle}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={localePath(lang, ctaUrl)}
                className="btn-primary"
                data-tina-field={d?.paginaActivitats ? tinaField(d.paginaActivitats, `heroCta${lk}`) : undefined}
              >{cta}</a>
              {cta2 && (
                <a
                  href={localePath(lang, cta2Url)}
                  className="btn-ghost"
                  data-tina-field={d?.paginaActivitats ? tinaField(d.paginaActivitats, `heroCta2${lk}`) : undefined}
                >{cta2}</a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Activities list */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="text-center mb-10">
            <h2 className="section-title" data-tina-field={tf(`allTitle${lk}`)}>{allTitle}</h2>
            <p className="section-subtitle" data-tina-field={tf(`allSub${lk}`)}>{allSub}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {activities.map((act: any, i: number) => {
              const intensity = act[intensityKey] || act.intensityCa || '';
              const colorClass = INTENSITY_COLOR[intensity] || 'bg-gray-100 text-gray-700';
              return (
                <div key={i} className="card p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl" data-tina-field={tinaField(act, 'emoji')}>{act.emoji}</span>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${colorClass}`} data-tina-field={tinaField(act, intensityKey)}>{intensity}</span>
                  </div>
                  <h3 className="font-display font-semibold text-dark mb-2" data-tina-field={tinaField(act, 'name')}>{act.name}</h3>
                  <div className="text-sm text-gray-500 space-y-1">
                    <div><span data-tina-field={tinaField(act, 'days')}>{act.days}</span> · <span data-tina-field={tinaField(act, 'time')}>{act.time}</span></div>
                    <div className="text-xs text-gray-400" data-tina-field={tinaField(act, 'location')}>{act.location}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gray-50">
        <div className="container-site text-center">
          <h2 className="section-title mb-4" data-tina-field={tf(`ctaTitle${lk}`)}>{ctaTitle}</h2>
          <p className="section-subtitle mb-8" data-tina-field={tf(`ctaSub${lk}`)}>{ctaSub}</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={localePath(lang, ctaBtnUrl)} className="btn-primary" data-tina-field={tf(`ctaBtn${lk}`)}>{ctaBtn}</a>
            <a href={localePath(lang, ctaBtn2Url)} className="btn-secondary" data-tina-field={tf(`ctaBtn2${lk}`)}>{ctaBtn2}</a>
          </div>
        </div>
      </section>
    </>
  );
}
