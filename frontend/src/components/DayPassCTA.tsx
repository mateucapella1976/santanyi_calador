import { useTina, tinaField } from 'tinacms/dist/react';

type Lang = 'ca' | 'es' | 'en' | 'de';

function localePath(lang: Lang, path: string) {
  return lang === 'ca' ? path : `/${lang}${path}`;
}

interface Props {
  query: string; variables: object; data: any;
  lang: Lang;
  variant?: 'section' | 'banner';
}

export default function DayPassCTA({ query, variables, data, lang, variant = 'section' }: Props) {
  const { data: d } = useTina({ query, variables, data });
  const dp = d?.daypass ?? {};

  const lk = lang === 'es' ? 'Es' : lang === 'en' ? 'En' : lang === 'de' ? 'De' : 'Ca';

  const badge    = dp[`badge${lk}`]       || dp.badgeCa       || 'Turistes · Visitants';
  const title    = dp[`title${lk}`]       || dp.titleCa       || "Day Pass – Accés d'un dia";
  const subtitle = dp[`subtitle${lk}`]    || dp.subtitleCa    || '';
  const pricePool   = dp.pricePool    || '5';
  const priceGym    = dp.pricePoolGym || '8';
  const poolLabel   = dp[`poolLabel${lk}`]    || dp.poolLabelCa    || 'Piscina';
  const poolGymLabel= dp[`poolGymLabel${lk}`] || dp.poolGymLabelCa || 'Piscina + Gimnàs';
  const perDay      = dp[`perDay${lk}`]   || dp.perDayCa   || '/ dia';
  const includes    = dp[`includes${lk}`] || dp.includesCa || 'Inclou: vestuaris, dutxes, caseller';
  const cta         = dp[`cta${lk}`]      || dp.ctaCa      || 'Compra Day Pass';
  const or          = dp[`or${lk}`]       || dp.orCa       || 'o consulta a recepció';
  const buttons: any[] = dp.buttons ?? [];

  if (variant === 'banner') {
    return (
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 justify-between">
        <div>
          <div
            className="font-display font-semibold text-amber-800 mb-1"
            data-tina-field={d?.daypass ? tinaField(d.daypass, `title${lk}`) : undefined}
          >{title}</div>
          <div
            className="text-sm text-amber-600"
            data-tina-field={d?.daypass ? tinaField(d.daypass, `subtitle${lk}`) : undefined}
          >{subtitle}</div>
        </div>
        <a href={localePath(lang, '/day-pass')} className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-white font-semibold rounded-xl hover:bg-amber-600 transition-colors"
          data-tina-field={d?.daypass ? tinaField(d.daypass, `bannerCta${lk}`) : undefined}
        >{dp[`bannerCta${lk}`] || dp.bannerCtaCa || `${cta} – des de ${pricePool}€`}</a>
      </div>
    );
  }

  return (
    <section className="section bg-white" aria-labelledby="daypass-heading">
      <div className="container-site">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-400 via-orange-400 to-orange-500 p-10 md:p-16">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="dp-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M30 5 L55 30 L30 55 L5 30 Z" stroke="white" strokeWidth="1" fill="none"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dp-pattern)"/>
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="flex-shrink-0">
              <div className="w-28 h-28 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/30">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" aria-hidden="true">
                  <rect x="3" y="6" width="18" height="13" rx="2"/>
                  <path d="M8 6V4m8 2V4M3 10h18"/>
                  <path d="M8 14h.01M12 14h.01M16 14h.01"/>
                </svg>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <span
                className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide"
                data-tina-field={d?.daypass ? tinaField(d.daypass, `badge${lk}`) : undefined}
              >{badge}</span>
              <h2
                id="daypass-heading"
                className="font-display font-bold text-white text-3xl md:text-4xl mb-3"
                data-tina-field={d?.daypass ? tinaField(d.daypass, `title${lk}`) : undefined}
              >{title}</h2>
              <p
                className="text-white/90 text-lg mb-6"
                data-tina-field={d?.daypass ? tinaField(d.daypass, `subtitle${lk}`) : undefined}
              >{subtitle}</p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/30 text-center">
                  <div
                    className="font-display font-bold text-white text-3xl"
                    data-tina-field={d?.daypass ? tinaField(d.daypass, 'pricePool') : undefined}
                  >{pricePool}€</div>
                  <div
                    className="text-white/80 text-sm"
                    data-tina-field={d?.daypass ? tinaField(d.daypass, `poolLabel${lk}`) : undefined}
                  >{poolLabel}</div>
                  <div
                    className="text-white/60 text-xs"
                    data-tina-field={d?.daypass ? tinaField(d.daypass, `perDay${lk}`) : undefined}
                  >{perDay}</div>
                </div>
                <div className="bg-white rounded-2xl px-6 py-4 text-center shadow-xl">
                  <div
                    className="font-display font-bold text-orange-500 text-3xl"
                    data-tina-field={d?.daypass ? tinaField(d.daypass, 'pricePoolGym') : undefined}
                  >{priceGym}€</div>
                  <div
                    className="text-gray-700 text-sm font-medium"
                    data-tina-field={d?.daypass ? tinaField(d.daypass, `poolGymLabel${lk}`) : undefined}
                  >{poolGymLabel}</div>
                  <div className="text-gray-400 text-xs">{perDay}</div>
                </div>
              </div>

              <div
                className="text-white/80 text-sm mb-6"
                data-tina-field={d?.daypass ? tinaField(d.daypass, `includes${lk}`) : undefined}
              >{includes}</div>

              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {buttons.length > 0 ? buttons.map((btn: any, i: number) => {
                  const label = btn[`label${lk}`] || btn.labelCa || '';
                  const href = btn.url?.startsWith('/') ? localePath(lang, btn.url) : (btn.url || '#');
                  const styleMap: Record<string, string> = {
                    primary:   'inline-flex items-center gap-2 px-8 py-3.5 bg-white text-orange-600 font-bold rounded-xl hover:bg-orange-50 transition-colors text-lg shadow-lg',
                    secondary: 'inline-flex items-center gap-2 px-6 py-3.5 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors border border-white/30',
                    amber:     'inline-flex items-center gap-2 px-8 py-3.5 bg-amber-500 text-white font-bold rounded-xl hover:bg-amber-400 transition-colors text-lg shadow-lg',
                  };
                  return (
                    <a
                      key={i}
                      href={href}
                      className={styleMap[btn.style] ?? styleMap.secondary}
                      {...(btn.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      <span data-tina-field={tinaField(btn, `label${lk}`)}>{label}</span>
                    </a>
                  );
                }) : (
                  <>
                    <a href={localePath(lang, '/day-pass')} className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-orange-600 font-bold rounded-xl hover:bg-orange-50 transition-colors text-lg shadow-lg">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <rect x="3" y="6" width="18" height="13" rx="2"/>
                        <path d="M8 6V4m8 2V4M3 10h18"/>
                      </svg>
                      <span data-tina-field={d?.daypass ? tinaField(d.daypass, `cta${lk}`) : undefined}>{cta}</span>
                    </a>
                    <a href="tel:+34673003828" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors border border-white/30">
                      <span data-tina-field={d?.daypass ? tinaField(d.daypass, `or${lk}`) : undefined}>{or}</span>
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
