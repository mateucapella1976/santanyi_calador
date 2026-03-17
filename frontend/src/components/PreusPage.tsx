import { useTina, tinaField } from 'tinacms/dist/react';

type Lang = 'ca' | 'es' | 'en' | 'de';

function localePath(lang: Lang, path: string) {
  return lang === 'ca' ? path : `/${lang}${path}`;
}

interface Props {
  query: string; variables: object; data: any;
  lang: Lang;
}

export default function PreusPage({ query, variables, data, lang }: Props) {
  const { data: d } = useTina({ query, variables, data });
  const g  = d?.preus ?? {};
  const lk = lang === 'es' ? 'Es' : lang === 'en' ? 'En' : lang === 'de' ? 'De' : 'Ca';
  const tf = (field: string) => d?.preus ? tinaField(d.preus, field) : undefined;

  const badge    = g[`heroBadge${lk}`]    || g.heroBadgeCa    || 'Preus clars';
  const title    = g[`heroTitle${lk}`]    || g.heroTitleCa    || 'Preus clars, sense sorpreses';
  const subtitle = g[`heroSubtitle${lk}`] || g.heroSubtitleCa || '';

  const membershipsTitle = g[`membershipsTitle${lk}`] || g.membershipsTitleCa || 'Abonaments mensuals';
  const membershipsSub   = g[`membershipsSub${lk}`]   || g.membershipsSubCa   || '';
  const membershipsNote  = g[`membershipsNote${lk}`]  || g.membershipsNoteCa  || '';
  const membershipsCta   = g[`membershipsCta${lk}`]   || g.membershipsCtaCa   || "Fes-te abonat ara";

  const plans: any[] = g.plans ?? [];
  const extraServices: any[] = g.extraServices ?? [];
  const extraTitle = g[`extraTitle${lk}`] || g.extraTitleCa || 'Serveis addicionals';

  const referralTitle = g[`referralTitle${lk}`] || g.referralTitleCa || '';
  const referralDesc  = g[`referralDesc${lk}`]  || g.referralDescCa  || '';
  const referralCta   = g[`referralCta${lk}`]   || g.referralCtaCa   || '';

  const periodLabel: Record<string, string> = {
    mes: '/mes', trimestre: '/trim', any: '/any', sessio: lang === 'en' ? '/day' : lang === 'de' ? '/Tag' : '/dia',
  };

  return (
    <>
      {/* Hero */}
      <section className="pool-bg text-white py-16">
        <div className="container-site text-center">
          <span
            className="badge bg-white/20 text-white border border-white/30 mb-4"
            data-tina-field={tf(`heroBadge${lk}`)}
          >{badge}</span>
          <h1
            className="font-display font-bold text-4xl sm:text-5xl text-white mb-4"
            data-tina-field={tf(`heroTitle${lk}`)}
          >{title}</h1>
          <p
            className="text-white/80 text-xl max-w-xl mx-auto"
            data-tina-field={tf(`heroSubtitle${lk}`)}
          >{subtitle}</p>
        </div>
      </section>

      {/* Memberships */}
      <section className="section bg-gray-50">
        <div className="container-site">
          <h2
            className="section-title text-center mb-4"
            data-tina-field={tf(`membershipsTitle${lk}`)}
          >{membershipsTitle}</h2>
          <p
            className="section-subtitle text-center mb-10"
            data-tina-field={tf(`membershipsSub${lk}`)}
          >{membershipsSub}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {plans.map((plan: any, i: number) => {
              const isPopular = plan.highlighted;
              const name     = plan[`name${lk}`] || plan.nameCa || '';
              const age      = plan[`age${lk}`]  || plan.ageCa  || '';
              const planBadge = plan[`badge${lk}`] || plan.badgeCa || '';
              const features = plan[`features${lk}`] || plan.featuresCa || [];
              const period   = periodLabel[plan.period] || '/mes';

              return (
                <div
                  key={i}
                  className={`rounded-2xl p-6 flex flex-col relative ${
                    isPopular
                      ? 'bg-primary-500 text-white shadow-xl shadow-primary-500/30 ring-4 ring-primary-200'
                      : 'bg-white border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all'
                  }`}
                >
                  {isPopular && planBadge && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                      ⭐ <span data-tina-field={tinaField(plan, `badge${lk}`)}>{planBadge}</span>
                    </span>
                  )}
                  <div className="mb-4">
                    <div
                      className={`font-display font-bold text-lg ${isPopular ? 'text-white' : 'text-dark'}`}
                      data-tina-field={tinaField(plan, `name${lk}`)}
                    >{name}</div>
                    <div
                      className={`text-sm ${isPopular ? 'text-primary-100' : 'text-gray-400'}`}
                      data-tina-field={tinaField(plan, `age${lk}`)}
                    >{age}</div>
                  </div>
                  <div className="mb-5">
                    <span
                      className={`font-display font-bold text-4xl ${isPopular ? 'text-white' : 'text-dark'}`}
                      data-tina-field={tinaField(plan, 'price')}
                    >{plan.price}€</span>
                    <span className={`text-sm ml-1 ${isPopular ? 'text-primary-100' : 'text-gray-400'}`}>{period}</span>
                  </div>
                  <ul className="space-y-2 flex-1 mb-6">
                    {features.map((f: string, fi: number) => (
                      <li key={fi} className={`flex items-center gap-2 text-sm ${isPopular ? 'text-primary-100' : 'text-gray-600'}`}>
                        <svg className={`w-4 h-4 flex-shrink-0 ${isPopular ? 'text-white' : 'text-emerald-500'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={localePath(lang, '/contacte')}
                    className={`block text-center py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                      isPopular ? 'bg-white text-primary-600 hover:bg-primary-50' : 'bg-primary-50 text-primary-600 hover:bg-primary-100'
                    }`}
                    data-tina-field={tf(`membershipsCta${lk}`)}
                  >{membershipsCta}</a>
                </div>
              );
            })}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-700 flex items-start gap-2">
            <svg className="w-4 h-4 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <span data-tina-field={tf(`membershipsNote${lk}`)}>{membershipsNote}</span>
          </div>
        </div>
      </section>

      {/* Extra services */}
      <section className="section bg-white">
        <div className="container-site">
          <h2
            className="section-title text-center mb-10"
            data-tina-field={tf(`extraTitle${lk}`)}
          >{extraTitle}</h2>
          <div className="max-w-3xl mx-auto">
            <div className="divide-y divide-gray-100">
              {extraServices.map((svc: any, i: number) => (
                <div key={i} className="flex items-center justify-between py-4 gap-4">
                  <div>
                    <div
                      className="font-medium text-dark"
                      data-tina-field={tinaField(svc, `name${lk}`)}
                    >{svc[`name${lk}`] || svc.nameCa}</div>
                    <div
                      className="text-sm text-gray-400"
                      data-tina-field={tinaField(svc, `note${lk}`)}
                    >{svc[`note${lk}`] || svc.noteCa}</div>
                  </div>
                  <div
                    className="font-display font-bold text-primary-600 text-xl flex-shrink-0"
                    data-tina-field={tinaField(svc, 'price')}
                  >{svc.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Referral */}
      {referralTitle && (
        <section className="section bg-gray-50">
          <div className="container-site">
            <div className="max-w-2xl mx-auto text-center">
              <div className="text-5xl mb-4">🎁</div>
              <h2
                className="section-title mb-4"
                data-tina-field={tf(`referralTitle${lk}`)}
              >{referralTitle}</h2>
              <p
                className="text-gray-500 mb-6"
                data-tina-field={tf(`referralDesc${lk}`)}
              >{referralDesc}</p>
              <a
                href={localePath(lang, '/contacte')}
                className="btn-primary"
                data-tina-field={tf(`referralCta${lk}`)}
              >{referralCta}</a>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
