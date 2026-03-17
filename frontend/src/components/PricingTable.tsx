import { useTina, tinaField } from 'tinacms/dist/react';

type Lang = 'ca' | 'es' | 'en' | 'de';

function localePath(lang: Lang, path: string) {
  return lang === 'ca' ? path : `/${lang}${path}`;
}

interface Props {
  query: string; variables: object; data: any;
  lang: Lang;
}

export default function PricingTable({ query, variables, data, lang }: Props) {
  const { data: d } = useTina({ query, variables, data });
  const preus = d?.preus ?? {};

  const nameKey = lang === 'es' ? 'nameEs' : lang === 'en' ? 'nameEn' : lang === 'de' ? 'nameDe' : 'nameCa';
  const descKey = lang === 'es' ? 'descEs' : lang === 'en' ? 'descEn' : lang === 'de' ? 'descDe' : 'descCa';

  const periodLabel: Record<string, string> = {
    mes:       lang === 'es' ? '/mes'       : lang === 'en' ? '/month'   : lang === 'de' ? '/Monat'  : '/mes',
    trimestre: lang === 'es' ? '/trimestre' : lang === 'en' ? '/quarter' : lang === 'de' ? '/Quartal': '/trimestre',
    any:       lang === 'es' ? '/año'       : lang === 'en' ? '/year'    : lang === 'de' ? '/Jahr'   : '/any',
    sessio:    lang === 'es' ? '/sesión'    : lang === 'en' ? '/session' : lang === 'de' ? '/Einheit': '/sessió',
  };

  const rawPlans: any[] = preus.plans ?? [];

  const title    = lang === 'es' ? 'Tarifas y precios' : lang === 'en' ? 'Rates & prices' : lang === 'de' ? 'Tarife & Preise' : 'Tarifes i preus';
  const subtitle = lang === 'es' ? 'Planes para toda la familia' : lang === 'en' ? 'Plans for the whole family' : lang === 'de' ? 'Pläne für die ganze Familie' : 'Plans per a tota la família';
  const monthly  = lang === 'es' ? 'Cuota mensual' : lang === 'en' ? 'Monthly fee' : lang === 'de' ? 'Monatsbeitrag' : 'Quota mensual';
  const popular  = lang === 'es' ? 'Más popular' : lang === 'en' ? 'Most popular' : lang === 'de' ? 'Am beliebtesten' : 'Més popular';
  const ctaTxt   = lang === 'es' ? 'Inscribirse' : lang === 'en' ? 'Sign up' : lang === 'de' ? 'Anmelden' : 'Inscriure\'s';
  const seeAll   = lang === 'es' ? 'Ver todos los precios' : lang === 'en' ? 'Full price list' : lang === 'de' ? 'Vollständige Preisliste' : 'Veure tots els preus';
  const enrollment = lang === 'es' ? 'Matrícula' : lang === 'en' ? 'Enrollment' : lang === 'de' ? 'Einschreibegebühr' : 'Matrícula';
  const noCommit = lang === 'es' ? 'Sin permanencia' : lang === 'en' ? 'No commitment' : lang === 'de' ? 'Keine Mindestlaufzeit' : 'Sense permanència';
  const resNote  = lang === 'es' ? 'Precios especiales para residentes en Santanyí.' : lang === 'en' ? 'Special prices for Santanyí residents.' : lang === 'de' ? 'Sonderpreise für Einwohner von Santanyí.' : 'Preus especials per a residents a Santanyí.';

  return (
    <section className="section bg-gray-50" aria-labelledby="pricing-heading" id="preus">
      <div className="container-site">
        <div className="text-center mb-12">
          <span className="badge-blue mb-3">{monthly}</span>
          <h2 id="pricing-heading" className="section-title">{title}</h2>
          <p className="section-subtitle max-w-lg mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
          {rawPlans.map((p: any, i: number) => {
            const name = p[nameKey] || p.nameCa;
            const desc = p[descKey] || p.descCa;
            const period = periodLabel[p.period] ?? `/${p.period}`;
            return (
              <div key={i} className={`rounded-2xl p-6 flex flex-col relative transition-all duration-200 ${p.highlighted ? 'bg-primary-500 text-white shadow-xl shadow-primary-500/30 scale-105' : 'bg-white border border-gray-200 hover:border-primary-300 hover:shadow-md'}`}>
                {p.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">⭐ {popular}</span>
                )}
                <div className="mb-4">
                  <div
                    className={`font-display font-bold text-lg ${p.highlighted ? 'text-white' : 'text-dark'}`}
                    data-tina-field={tinaField(p, nameKey)}
                  >{name}</div>
                  {desc && <div
                    className={`text-sm mt-1 leading-snug ${p.highlighted ? 'text-primary-100' : 'text-gray-400'}`}
                    data-tina-field={tinaField(p, descKey)}
                  >{desc}</div>}
                </div>
                <div className="mb-5">
                  <span
                    className={`font-display font-bold text-4xl ${p.highlighted ? 'text-white' : 'text-dark'}`}
                    data-tina-field={tinaField(p, 'price')}
                  >{p.price}€</span>
                  <span className={`text-sm ml-1 ${p.highlighted ? 'text-primary-100' : 'text-gray-400'}`}>{period}</span>
                </div>
                <div className="flex-1" />
                <a href={localePath(lang, '/contacte')} className={`block text-center py-2.5 rounded-xl text-sm font-semibold transition-colors mt-4 ${p.highlighted ? 'bg-white text-primary-600 hover:bg-primary-50' : 'bg-primary-50 text-primary-600 hover:bg-primary-100'}`}>
                  {ctaTxt}
                </a>
              </div>
            );
          })}
        </div>

        <div className="bg-primary-50 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-4 justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </div>
            <div>
              <div className="font-semibold text-dark text-sm">{enrollment}: 20€ (pagament únic)</div>
              <div className="text-xs text-gray-500 mt-0.5">{noCommit}</div>
            </div>
          </div>
          <a href={localePath(lang, '/preus')} className="btn-primary text-sm py-2 whitespace-nowrap">{seeAll}</a>
        </div>
        <p className="text-center text-sm text-gray-400">* {resNote}</p>
      </div>
    </section>
  );
}
