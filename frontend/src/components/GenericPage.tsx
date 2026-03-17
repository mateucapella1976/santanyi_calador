import { useTina, tinaField } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

type Lang = 'ca' | 'es' | 'en' | 'de';

function localePath(lang: Lang, path: string) {
  return lang === 'ca' ? path : `/${lang}${path}`;
}

const BG_CLASSES: Record<string, string> = {
  blue:   'bg-gradient-to-br from-primary-800 via-primary-600 to-primary-500',
  purple: 'bg-gradient-to-br from-purple-900 via-purple-700 to-primary-600',
  orange: 'bg-gradient-to-br from-orange-800 via-orange-600 to-amber-500',
  green:  'bg-gradient-to-br from-emerald-800 via-emerald-600 to-teal-500',
  pool:   'pool-bg',
};

interface Props {
  query: string;
  variables: object;
  data: any;
  lang: Lang;
}

export default function GenericPage({ query, variables, data, lang }: Props) {
  const { data: d } = useTina({ query, variables, data });
  const g  = (d as any)?.pagines ?? {};
  const lk = lang === 'es' ? 'Es' : lang === 'en' ? 'En' : lang === 'de' ? 'De' : 'Ca';

  const heroBg      = BG_CLASSES[g.heroBg || 'blue'] || BG_CLASSES.blue;
  const badge       = g[`heroBadge${lk}`]    || g.heroBadgeCa    || '';
  const title       = g[`heroTitle${lk}`]    || g.heroTitleCa    || '';
  const subtitle    = g[`heroSubtitle${lk}`] || g.heroSubtitleCa || '';
  const cta         = g[`heroCta${lk}`]      || g.heroCtaCa      || '';
  const ctaUrl      = g.heroCtaUrl           || '/contacte';
  const contingut   = g[`contingut${lk}`]    || g.contingutCa    || null;
  const ctaTitle    = g[`ctaTitle${lk}`]     || g.ctaTitleCa     || '';
  const ctaBtn1     = g[`ctaBtn1${lk}`]      || g.ctaBtn1Ca      || '';
  const ctaBtn1Url  = g.ctaBtn1Url           || '/contacte';
  const ctaBtn2     = g[`ctaBtn2${lk}`]      || g.ctaBtn2Ca      || '';
  const ctaBtn2Url  = g.ctaBtn2Url           || '/preus';

  return (
    <>
      {/* Hero */}
      <section className={`${heroBg} text-white py-20`}>
        <div className="container-site">
          <div className="max-w-3xl">
            {badge && (
              <span
                className="badge bg-white/20 text-white border border-white/30 mb-4"
                data-tina-field={g ? tinaField(g, `heroBadge${lk}`) : undefined}
              >{badge}</span>
            )}
            <h1
              className="font-display font-bold text-4xl sm:text-5xl text-white mb-4"
              data-tina-field={g ? tinaField(g, `heroTitle${lk}`) : undefined}
            >{title}</h1>
            {subtitle && (
              <p
                className="text-white/80 text-xl mb-8"
                data-tina-field={g ? tinaField(g, `heroSubtitle${lk}`) : undefined}
              >{subtitle}</p>
            )}
            {cta && (
              <a
                href={ctaUrl.startsWith('http') ? ctaUrl : localePath(lang, ctaUrl)}
                className="btn-primary"
                {...(ctaUrl.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                data-tina-field={g ? tinaField(g, `heroCta${lk}`) : undefined}
              >{cta}</a>
            )}
          </div>
        </div>
      </section>

      {/* Rich-text body */}
      {contingut && (
        <section className="section bg-white">
          <div className="container-site">
            <div
              className="prose prose-lg max-w-4xl mx-auto prose-headings:font-display prose-headings:text-dark prose-a:text-primary-600 hover:prose-a:text-primary-700"
              data-tina-field={g ? tinaField(g, `contingut${lk}`) : undefined}
            >
              <TinaMarkdown content={contingut} />
            </div>
          </div>
        </section>
      )}

      {/* CTA final */}
      {ctaTitle && (
        <section className="section bg-gray-50">
          <div className="container-site text-center">
            <h2
              className="section-title mb-8"
              data-tina-field={g ? tinaField(g, `ctaTitle${lk}`) : undefined}
            >{ctaTitle}</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {ctaBtn1 && (
                <a
                  href={ctaBtn1Url.startsWith('http') ? ctaBtn1Url : localePath(lang, ctaBtn1Url)}
                  className="btn-primary"
                  data-tina-field={g ? tinaField(g, `ctaBtn1${lk}`) : undefined}
                >{ctaBtn1}</a>
              )}
              {ctaBtn2 && (
                <a
                  href={ctaBtn2Url.startsWith('http') ? ctaBtn2Url : localePath(lang, ctaBtn2Url)}
                  className="btn-secondary"
                  data-tina-field={g ? tinaField(g, `ctaBtn2${lk}`) : undefined}
                >{ctaBtn2}</a>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
