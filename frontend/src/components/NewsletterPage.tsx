import { useTina, tinaField } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

type Lang = 'ca' | 'es' | 'en' | 'de';

interface Props {
  query: string; variables: object; data: any;
  lang: Lang;
}

function fixImg(src: string) {
  if (!src) return '';
  if (src.startsWith('http')) return src;
  return src.startsWith('/') ? src : `/images/${src}`;
}

export default function NewsletterPage({ query, variables, data, lang }: Props) {
  const { data: d } = useTina({ query, variables, data });
  const g = d?.paginaNewsletter ?? {};
  const lk = lang === 'es' ? 'Es' : lang === 'en' ? 'En' : lang === 'de' ? 'De' : 'Ca';
  const tf = (field: string) => d?.paginaNewsletter ? tinaField(d.paginaNewsletter, field) : undefined;

  const heroTitle = g[`heroTitle${lk}`] || g.heroTitleCa || 'Newsletter';
  const heroSub   = g[`heroSubtitle${lk}`] || g.heroSubtitleCa || '';
  const heroImage = g.heroImage ? fixImg(g.heroImage) : '';
  const edicio    = g.edicio || '';
  const featured  = g.imatgeDestacada ? fixImg(g.imatgeDestacada) : '';
  const contingut = g[`contingut${lk}`] || g.contingutCa || null;

  return (
    <>
      {/* Hero */}
      <section className={`${heroImage ? 'relative overflow-hidden' : 'pool-bg'} text-white py-20`}>
        {heroImage && <>
          <img src={heroImage} alt="" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a4543]/85 via-[#2e7e7a]/70 to-[#5db7b3]/50"></div>
        </>}
        <div className={`container-site text-center ${heroImage ? 'relative z-10' : ''}`}>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4" data-tina-field={tf(`heroTitle${lk}`)}>{heroTitle}</h1>
          <p className="text-white/80 text-xl" data-tina-field={tf(`heroSubtitle${lk}`)}>{heroSub}</p>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-white">
        <div className="container-site max-w-4xl">
          {edicio && (
            <p className="text-center text-sm font-semibold text-primary-600 uppercase tracking-wider mb-8" data-tina-field={tf('edicio')}>
              {edicio}
            </p>
          )}

          {featured && (
            <div className="mb-10 rounded-2xl overflow-hidden shadow-lg" data-tina-field={tf('imatgeDestacada')}>
              <img src={featured} alt="" className="w-full h-auto" loading="lazy" />
            </div>
          )}

          {contingut && (
            <article
              className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-dark prose-p:text-gray-600 prose-a:text-primary-600 prose-img:rounded-xl prose-img:shadow-lg"
              data-tina-field={tf(`contingut${lk}`)}
            >
              <TinaMarkdown content={contingut} />
            </article>
          )}
        </div>
      </section>
    </>
  );
}
