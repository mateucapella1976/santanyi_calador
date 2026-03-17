import { useTina, tinaField } from 'tinacms/dist/react';

type Lang = 'ca' | 'es' | 'en' | 'de';

function localePath(lang: Lang, path: string) {
  return lang === 'ca' ? path : `/${lang}${path}`;
}

interface Props {
  query: string; variables: object; data: any;
  dataKey: string;
  lang: Lang;
  bgClass: string;
  centerText?: boolean;
}

export default function PageHeroSection({ query, variables, data, dataKey, lang, bgClass, centerText = false }: Props) {
  const { data: d } = useTina({ query, variables, data });
  const g = (d as any)?.[dataKey] ?? {};
  const lk = lang === 'es' ? 'Es' : lang === 'en' ? 'En' : lang === 'de' ? 'De' : 'Ca';

  const badge    = g[`heroBadge${lk}`]    || g.heroBadgeCa    || '';
  const title    = g[`heroTitle${lk}`]    || g.heroTitleCa    || '';
  const subtitle = g[`heroSubtitle${lk}`] || g.heroSubtitleCa || '';
  const cta      = g[`heroCta${lk}`]      || g.heroCtaCa      || '';
  const ctaUrl   = g.heroCtaUrl           || '/contacte';
  const cta2     = g[`heroCta2${lk}`]     || g.heroCta2Ca     || '';
  const cta2Url  = g.heroCta2Url          || '';

  const isExternal = (url: string) => url.startsWith('http');

  return (
    <section className={`${bgClass} text-white py-20`}>
      <div className="container-site">
        <div className={`max-w-3xl${centerText ? ' mx-auto text-center' : ''}`}>
          {badge && (
            <span
              className="badge bg-white/20 text-white border border-white/30 mb-4"
              data-tina-field={(d as any)?.[dataKey] ? tinaField((d as any)[dataKey], `heroBadge${lk}`) : undefined}
            >{badge}</span>
          )}
          <h1
            className="font-display font-bold text-4xl sm:text-5xl text-white mb-4"
            data-tina-field={(d as any)?.[dataKey] ? tinaField((d as any)[dataKey], `heroTitle${lk}`) : undefined}
          >{title}</h1>
          <p
            className="text-white/80 text-xl mb-8"
            data-tina-field={(d as any)?.[dataKey] ? tinaField((d as any)[dataKey], `heroSubtitle${lk}`) : undefined}
          >{subtitle}</p>
          {(cta || cta2) && (
            <div className={`flex flex-wrap gap-3${centerText ? ' justify-center' : ''}`}>
              {cta && (
                <a
                  href={isExternal(ctaUrl) ? ctaUrl : localePath(lang, ctaUrl)}
                  className="btn-primary"
                  {...(isExternal(ctaUrl) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  data-tina-field={(d as any)?.[dataKey] ? tinaField((d as any)[dataKey], `heroCta${lk}`) : undefined}
                >{cta}</a>
              )}
              {cta2 && cta2Url && (
                <a
                  href={isExternal(cta2Url) ? cta2Url : localePath(lang, cta2Url)}
                  className="btn-ghost"
                  {...(isExternal(cta2Url) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  data-tina-field={(d as any)?.[dataKey] ? tinaField((d as any)[dataKey], `heroCta2${lk}`) : undefined}
                >{cta2}</a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
