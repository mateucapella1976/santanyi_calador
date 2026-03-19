import { useTina, tinaField } from 'tinacms/dist/react';
import ScheduleTable from './ScheduleTable';

type Lang = 'ca' | 'es' | 'en' | 'de';

function localePath(lang: Lang, path: string) {
  return lang === 'ca' ? path : `/${lang}${path}`;
}

interface Props {
  query: string; variables: object; data: any;
  horarisQuery: string; horarisVariables: object; horarisData: any;
  lang: Lang;
}

export default function GimnasPage({ query, variables, data, horarisQuery, horarisVariables, horarisData, lang }: Props) {
  const { data: d } = useTina({ query, variables, data });
  const g  = d?.paginaGimnas ?? {};
  const lk = lang === 'es' ? 'Es' : lang === 'en' ? 'En' : lang === 'de' ? 'De' : 'Ca';

  const heroBadge    = g[`heroBadge${lk}`]    || g.heroBadgeCa    || 'Gimnàs & Fitness';
  const heroTitle    = g[`heroTitle${lk}`]     || g.heroTitleCa    || "El teu gimnàs a Santanyí i Cala d'Or";
  const heroSubtitle = g[`heroSubtitle${lk}`]  || g.heroSubtitleCa || '';
  const heroCta      = g[`heroCta${lk}`]       || g.heroCtaCa      || "Fes-te abonat";
  const heroCtaUrl   = g.heroCtaUrl            || '/contacte';
  const heroImage    = g.heroImage ? (g.heroImage.startsWith('/') ? g.heroImage : `/images/${g.heroImage}`) : '';

  const trainingymTitle    = g[`trainingymTitle${lk}`]    || g.trainingymTitleCa    || "El teu entrenament personalitzat, al palmell de la mà";
  const trainingymSubtitle = g[`trainingymSubtitle${lk}`] || g.trainingymSubtitleCa || '';
  const trainingymImage    = g.trainingymImage ? `/${g.trainingymImage}` : '/images/img_12.png';
  const trainingymFeatures: any[] = g.trainingymFeatures ?? [];

  const equipmentTitle = g[`equipmentTitle${lk}`] || g.equipmentTitleCa || 'Sala completament equipada';
  const equipmentItems: any[] = g.equipment ?? [];

  const ctaTitle    = g[`ctaTitle${lk}`]    || g.ctaTitleCa    || 'Comença a entrenar avui';
  const ctaSubtitle = g[`ctaSubtitle${lk}`] || g.ctaSubtitleCa || '';
  const ctaBtn1     = g[`ctaBtn1${lk}`]     || g.ctaBtn1Ca     || "Fes-te abonat";
  const ctaBtn1Url  = g.ctaBtn1Url          || '/contacte';
  const ctaBtn2     = g[`ctaBtn2${lk}`]     || g.ctaBtn2Ca     || 'Veure preus';
  const ctaBtn2Url  = g.ctaBtn2Url          || '/preus';

  return (
    <>
      {/* Hero */}
      <section className={`${heroImage ? 'relative overflow-hidden' : 'bg-gradient-to-br from-purple-900 via-purple-700 to-primary-600'} text-white py-20`}>
        {heroImage && <>
          <img src={heroImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/85 via-purple-700/70 to-transparent"></div>
        </>}
        <div className={`container-site ${heroImage ? 'relative z-10' : ''}`}>
          <div className="max-w-3xl">
            <span
              className="badge bg-white/20 text-white border border-white/30 mb-4"
              data-tina-field={d?.paginaGimnas ? tinaField(d.paginaGimnas, `heroBadge${lk}`) : undefined}
            >{heroBadge}</span>
            <h1
              className="font-display font-bold text-4xl sm:text-5xl text-white mb-4"
              data-tina-field={d?.paginaGimnas ? tinaField(d.paginaGimnas, `heroTitle${lk}`) : undefined}
            >{heroTitle}</h1>
            <p
              className="text-white/80 text-xl mb-8"
              data-tina-field={d?.paginaGimnas ? tinaField(d.paginaGimnas, `heroSubtitle${lk}`) : undefined}
            >{heroSubtitle}</p>
            <a
              href={localePath(lang, heroCtaUrl)}
              className="btn-primary"
              data-tina-field={d?.paginaGimnas ? tinaField(d.paginaGimnas, `heroCta${lk}`) : undefined}
            >{heroCta}</a>
          </div>
        </div>
      </section>

      {/* Trainingym */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-blue mb-3">Trainingym</span>
              <h2
                className="section-title mb-4"
                data-tina-field={d?.paginaGimnas ? tinaField(d.paginaGimnas, `trainingymTitle${lk}`) : undefined}
              >{trainingymTitle}</h2>
              <p
                className="text-gray-500 mb-6"
                data-tina-field={d?.paginaGimnas ? tinaField(d.paginaGimnas, `trainingymSubtitle${lk}`) : undefined}
              >{trainingymSubtitle}</p>
              <ul className="space-y-3">
                {trainingymFeatures.map((f: any, i: number) => (
                  <li key={i} className="flex items-center gap-2.5 text-gray-600">
                    <svg className="w-5 h-5 text-purple-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span data-tina-field={tinaField(f, `text${lk}`)}>{f[`text${lk}`] || f.textCa}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl overflow-hidden h-72">
              <img
                src={trainingymImage}
                alt="Sala fitness"
                className="w-full h-full object-cover"
                loading="lazy"
                data-tina-field={d?.paginaGimnas ? tinaField(d.paginaGimnas, 'trainingymImage') : undefined}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="py-8 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl overflow-hidden h-48">
              <img src="/images/img_12.png" alt="Sala fitness Santanyí" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="rounded-2xl overflow-hidden h-48">
              <img src="/images/img_4.png" alt="Sala fitness Cala d'Or" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="section bg-gray-50">
        <div className="container-site">
          <h2
            className="section-title text-center mb-10"
            data-tina-field={d?.paginaGimnas ? tinaField(d.paginaGimnas, `equipmentTitle${lk}`) : undefined}
          >{equipmentTitle}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {equipmentItems.map((item: any, i: number) => (
              <div key={i} className="card p-5 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2" data-tina-field={tinaField(item, 'icon')}>{item.icon}</div>
                <div
                  className="font-display font-bold text-dark text-xl mb-1"
                  data-tina-field={tinaField(item, 'count')}
                >{item.count}</div>
                <div
                  className="text-gray-500 text-xs"
                  data-tina-field={tinaField(item, `name${lk}`)}
                >{item[`name${lk}`] || item.nameCa}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <ScheduleTable query={horarisQuery} variables={horarisVariables} data={horarisData} lang={lang} />
      <section className="py-4 bg-white">
        <div className="container-site">
          <div className="text-center mt-4">
            <p className="text-gray-500 text-sm mb-3"
              data-tina-field={d?.paginaGimnas ? tinaField(d.paginaGimnas, `scheduleNote${lk}`) : undefined}
            >{g[`scheduleNote${lk}`] || g.scheduleNoteCa || "El gimnàs és obert en tot l'horari d'obertura"}</p>
            <a href={localePath(lang, '/horaris')} className="btn-secondary text-sm py-2"
              data-tina-field={d?.paginaGimnas ? tinaField(d.paginaGimnas, `scheduleLink${lk}`) : undefined}
            >{g[`scheduleLink${lk}`] || g.scheduleLinkCa || 'Horari complet'}</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gray-50">
        <div className="container-site text-center">
          <h2
            className="section-title mb-4"
            data-tina-field={d?.paginaGimnas ? tinaField(d.paginaGimnas, `ctaTitle${lk}`) : undefined}
          >{ctaTitle}</h2>
          <p
            className="section-subtitle mb-8"
            data-tina-field={d?.paginaGimnas ? tinaField(d.paginaGimnas, `ctaSubtitle${lk}`) : undefined}
          >{ctaSubtitle}</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={localePath(lang, ctaBtn1Url)}
              className="btn-primary"
              data-tina-field={d?.paginaGimnas ? tinaField(d.paginaGimnas, `ctaBtn1${lk}`) : undefined}
            >{ctaBtn1}</a>
            <a
              href={localePath(lang, ctaBtn2Url)}
              className="btn-secondary"
              data-tina-field={d?.paginaGimnas ? tinaField(d.paginaGimnas, `ctaBtn2${lk}`) : undefined}
            >{ctaBtn2}</a>
          </div>
        </div>
      </section>
    </>
  );
}
