import { useState } from 'react';
import { useTina, tinaField } from 'tinacms/dist/react';

type Lang = 'ca' | 'es' | 'en' | 'de';

function localePath(lang: Lang, path: string) {
  return lang === 'ca' ? path : `/${lang}${path}`;
}

interface Props {
  query: string; variables: object; data: any;
  lang: Lang;
}

export default function NatacioPage({ query, variables, data, lang }: Props) {
  const { data: d } = useTina({ query, variables, data });
  const g  = d?.paginaNatacio ?? {};
  const lk = lang === 'es' ? 'Es' : lang === 'en' ? 'En' : lang === 'de' ? 'De' : 'Ca';
  const tf = (field: string) => d?.paginaNatacio ? tinaField(d.paginaNatacio, field) : undefined;

  const badge      = g[`heroBadge${lk}`]    || g.heroBadgeCa    || 'Natació';
  const title      = g[`heroTitle${lk}`]    || g.heroTitleCa    || '25 Cursos de Natació';
  const subtitle   = g[`heroSubtitle${lk}`] || g.heroSubtitleCa || '';
  const cta        = g[`heroCta${lk}`]      || g.heroCtaCa      || "Inscriure'm";
  const ctaUrl     = g.heroCtaUrl           || '/contacte';
  const cta2       = g[`heroCta2${lk}`]     || g.heroCta2Ca     || '';
  const cta2Url    = g.heroCta2Url          || '/preus';

  const whyTitle   = g[`whyTitle${lk}`]     || g.whyTitleCa     || 'Per què aprendre a nedar amb nosaltres?';
  const fixPath = (p: string) => p ? (p.startsWith('http') ? p : '/' + p.replace(/^\/+/, '').replace(/^public\//, '').replace(/^images\//, 'images/')) : '';
  const whyImage   = g.whyImage ? fixPath(g.whyImage) : '/images/img_2.jpg';
  const whyGallery: any[] = (g.whyGallery ?? []).filter((img: any) => img?.src);
  const allImages = whyGallery.length > 0
    ? whyGallery.map((img: any) => ({ src: fixPath(img.src), alt: img.alt || whyTitle }))
    : [{ src: whyImage, alt: whyTitle }];
  const [imgIdx, setImgIdx] = useState(0);
  const whyItems: any[] = g.whyItems ?? [];

  const coursesTitle = g[`coursesTitle${lk}`] || g.coursesTitleCa || 'Els nostres cursos de natació';
  const coursesSub   = g[`coursesSub${lk}`]    || g.coursesSubCa   || '';
  const coursesCta   = g[`coursesCta${lk}`]    || g.coursesCtaCa   || 'Reservar la meva plaça';
  const coursesCtaUrl = g.coursesCtaUrl       || '/contacte';
  const courses: any[] = g.courses ?? [];

  const freeTitle  = g[`freeTitle${lk}`]  || g.freeTitleCa  || 'Natació lliure – neda al teu ritme';
  const freeDesc   = g[`freeDesc${lk}`]   || g.freeDescCa   || '';
  const freeCta    = g[`freeCta${lk}`]    || g.freeCtaCa    || "Abona't des de 10€/mes";
  const freeCtaUrl = g.freeCtaUrl         || '/preus';

  const nameKey = lang === 'es' ? 'nameEs' : lang === 'en' ? 'nameEn' : lang === 'de' ? 'nameDe' : 'nameCa';
  const whyTextKey = lang === 'es' ? 'textEs' : lang === 'en' ? 'textEn' : lang === 'de' ? 'textDe' : 'textCa';

  return (
    <>
      {/* Hero */}
      <section className="pool-bg text-white py-20">
        <div className="container-site">
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
                href={localePath(lang, ctaUrl)}
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

      {/* Why swimming */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-4" data-tina-field={tf(`whyTitle${lk}`)}>{whyTitle}</h2>
              <div className="space-y-4 text-gray-600">
                {whyItems.map((item: any, i: number) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span data-tina-field={tinaField(item, whyTextKey)}>{item[whyTextKey] || item.textCa}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden h-80 relative group">
              <img
                src={allImages[imgIdx]?.src || whyImage}
                alt={allImages[imgIdx]?.alt || whyTitle}
                className="w-full h-full object-cover transition-opacity duration-300"
                loading="lazy"
                data-tina-field={whyGallery.length > 0 ? tinaField(g.whyGallery[imgIdx], 'src') : tf('whyImage')}
              />
              {allImages.length > 1 && (
                <>
                  <button
                    onClick={() => setImgIdx((imgIdx - 1 + allImages.length) % allImages.length)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Previous"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                  </button>
                  <button
                    onClick={() => setImgIdx((imgIdx + 1) % allImages.length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Next"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                  </button>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {allImages.map((_: any, i: number) => (
                      <button
                        key={i}
                        onClick={() => setImgIdx(i)}
                        className={`w-2 h-2 rounded-full transition-colors ${i === imgIdx ? 'bg-white' : 'bg-white/50'}`}
                        aria-label={`Photo ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="section bg-gray-50">
        <div className="container-site">
          <div className="text-center mb-10">
            <h2 className="section-title" data-tina-field={tf(`coursesTitle${lk}`)}>{coursesTitle}</h2>
            <p className="section-subtitle" data-tina-field={tf(`coursesSub${lk}`)}>{coursesSub}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {courses.map((c: any, i: number) => (
              <div key={i} className="card p-5 hover:border-primary-200 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <h3
                  className="font-display font-semibold text-dark mb-1"
                  data-tina-field={tinaField(c, nameKey)}
                >{c[nameKey] || c.nameCa}</h3>
                <div className="flex items-center justify-between mt-2 text-sm">
                  <span className="text-gray-400">{lang === 'en' ? 'Age:' : lang === 'de' ? 'Alter:' : lang === 'es' ? 'Edad:' : 'Edat:'} <strong className="text-dark" data-tina-field={tinaField(c, 'age')}>{c.age}</strong></span>
                  <span className="text-gray-400">{lang === 'en' ? 'Max' : 'Màx'} <strong className="text-dark" data-tina-field={tinaField(c, 'max')}>{c.max}</strong></span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href={localePath(lang, coursesCtaUrl)} className="btn-primary" data-tina-field={tf(`coursesCta${lk}`)}>{coursesCta}</a>
          </div>
        </div>
      </section>

      {/* Free swimming */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="bg-primary-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="font-display font-bold text-2xl text-dark mb-3" data-tina-field={tf(`freeTitle${lk}`)}>{freeTitle}</h2>
              <p className="text-gray-500" data-tina-field={tf(`freeDesc${lk}`)}>{freeDesc}</p>
            </div>
            <a href={localePath(lang, freeCtaUrl)} className="btn-primary flex-shrink-0" data-tina-field={tf(`freeCta${lk}`)}>{freeCta}</a>
          </div>
        </div>
      </section>
    </>
  );
}
