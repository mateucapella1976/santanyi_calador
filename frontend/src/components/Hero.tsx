import { useTina, tinaField } from 'tinacms/dist/react';

type Lang = 'ca' | 'es' | 'en' | 'de';

interface Props {
  query: string;
  variables: object;
  data: any;
  lang: Lang;
}

function localePath(lang: Lang, path: string) {
  return lang === 'ca' ? path : `/${lang}${path}`;
}

export default function Hero({ query, variables, data, lang }: Props) {
  const { data: d } = useTina({ query, variables, data });
  const hero = d?.hero ?? {};

  const titleField    = lang === 'es' ? 'titleEs'    : lang === 'en' ? 'titleEn'    : lang === 'de' ? 'titleDe'    : 'titleCa';
  const subtitleField = lang === 'es' ? 'subtitleEs' : lang === 'en' ? 'subtitleEn' : lang === 'de' ? 'subtitleDe' : 'subtitleCa';
  const ctaField      = lang === 'es' ? 'ctaPrimaryEs' : lang === 'en' ? 'ctaPrimaryEn' : lang === 'de' ? 'ctaPrimaryDe' : 'ctaPrimaryCa';

  const title    = hero[titleField]    || 'El teu gimnàs i piscina a Santanyí i Cala d\'Or';
  const subtitle = hero[subtitleField] || 'Natació, fitness, pàdel i activitats dirigides';
  const ctaLabel = hero[ctaField]      || 'Inscriu-te ara';

  const stats: any[] = hero.stats ?? [];
  const labelKey = `label${lang === 'es' ? 'Es' : lang === 'en' ? 'En' : lang === 'de' ? 'De' : 'Ca'}`;

  const badgeField = `badge${lang === 'es' ? 'Es' : lang === 'en' ? 'En' : lang === 'de' ? 'De' : 'Ca'}`;
  const badge = hero[badgeField] || hero.badgeCa || "Obert tot l'any";
  const ctaSec = lang === 'es' ? 'Ver precios' : lang === 'en' ? 'See prices' : lang === 'de' ? 'Preise ansehen' : 'Veure preus';

  const heroImageRaw = hero.heroImage || '';
  const heroImageSrc = heroImageRaw
    ? heroImageRaw.startsWith('http') ? heroImageRaw : `/${heroImageRaw.replace(/^\/+/, '').replace(/^public\//, '').replace(/^images\/images\//, 'images/')}`
    : '';

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{ background: heroImageSrc ? undefined : 'linear-gradient(135deg, #1a4543 0%, #2e7e7a 40%, #5db7b3 100%)' }}
      aria-labelledby="hero-heading"
    >
      {heroImageSrc ? (
        <>
          <img
            src={heroImageSrc}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            data-tina-field={d?.hero ? tinaField(d.hero, 'heroImage') : undefined}
          />
          <div className="absolute inset-0 bg-dark/50" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="wave-pattern" x="0" y="0" width="80" height="40" patternUnits="userSpaceOnUse">
                  <path d="M0 20 Q20 10 40 20 Q60 30 80 20" stroke="white" strokeWidth="1.5" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#wave-pattern)" />
            </svg>
          </div>
          <div className="absolute top-20 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-300/10 rounded-full blur-3xl" />
        </>
      )}

      <div className="container-site relative z-10 py-20">
        <div className="max-w-3xl">
          <div
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6 border border-white/20"
            data-tina-field={d?.hero ? tinaField(d.hero, badgeField) : undefined}
          >
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            {badge}
          </div>

          <h1
            id="hero-heading"
            className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4"
            data-tina-field={d?.hero ? tinaField(d.hero, titleField) : undefined}
          >
            {title}
          </h1>

          <p
            className="text-primary-200 text-xl font-medium mb-8 max-w-xl"
            data-tina-field={d?.hero ? tinaField(d.hero, subtitleField) : undefined}
          >
            {subtitle}
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <a
              href={localePath(lang, '/contacte')}
              className="btn-primary text-lg px-8 py-4 shadow-xl shadow-primary-900/30"
              data-tina-field={d?.hero ? tinaField(d.hero, ctaField) : undefined}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              {ctaLabel}
            </a>
            <a href={localePath(lang, '/preus')} className="btn-ghost text-lg px-8 py-4">
              {ctaSec}
            </a>
            <a href={localePath(lang, '/day-pass')} className="inline-flex items-center gap-2 px-6 py-4 bg-amber-500 hover:bg-amber-400 text-white font-semibold rounded-xl transition-colors text-lg shadow-lg shadow-amber-900/20">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="6" width="18" height="13" rx="2" />
                <path d="M8 6V4m8 2V4M3 10h18" />
              </svg>
              Day Pass
            </a>
          </div>

          {stats.length > 0 && (
            <div className={`grid grid-cols-2 ${stats.length >= 4 ? 'sm:grid-cols-4' : stats.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'} gap-4`}>
              {stats.map((stat: any, i: number) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20 text-center">
                  <div className="text-2xl mb-1" data-tina-field={tinaField(stat, 'icon')}>{stat.icon}</div>
                  <div className="text-white font-bold text-lg leading-tight" data-tina-field={tinaField(stat, 'number')}>{stat.number}</div>
                  <div className="text-primary-200 text-xs mt-0.5" data-tina-field={tinaField(stat, labelKey)}>{stat[labelKey] || stat.labelCa}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,20 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
