import { useTina, tinaField } from 'tinacms/dist/react';

type Lang = 'ca' | 'es' | 'en' | 'de';

function localePath(lang: Lang, path: string) {
  return lang === 'ca' ? path : `/${lang}${path}`;
}

interface Props {
  query: string; variables: object; data: any;
  lang: Lang;
}

const colorMap: Record<string, { bg: string; hover: string; ring: string }> = {
  blue:   { bg: 'bg-blue-50',    hover: 'group-hover:bg-blue-500',    ring: 'hover:ring-blue-200' },
  purple: { bg: 'bg-purple-50',  hover: 'group-hover:bg-purple-500',  ring: 'hover:ring-purple-200' },
  green:  { bg: 'bg-emerald-50', hover: 'group-hover:bg-emerald-500', ring: 'hover:ring-emerald-200' },
  orange: { bg: 'bg-orange-50',  hover: 'group-hover:bg-orange-500',  ring: 'hover:ring-orange-200' },
  red:    { bg: 'bg-rose-50',    hover: 'group-hover:bg-rose-500',    ring: 'hover:ring-rose-200' },
  teal:   { bg: 'bg-primary-50', hover: 'group-hover:bg-primary-500', ring: 'hover:ring-primary-200' },
};

export default function ServicesGrid({ query, variables, data, lang }: Props) {
  const { data: d } = useTina({ query, variables, data });
  const s = d?.serveis ?? {};
  const items: any[] = s.items ?? [];

  const titleKey    = lang === 'es' ? 'titleEs'    : lang === 'en' ? 'titleEn'    : lang === 'de' ? 'titleDe'    : 'titleCa';
  const subtitleKey = lang === 'es' ? 'subtitleEs' : lang === 'en' ? 'subtitleEn' : lang === 'de' ? 'subtitleDe' : 'subtitleCa';
  const descKey     = lang === 'es' ? 'descEs'     : lang === 'en' ? 'descEn'     : lang === 'de' ? 'descDe'     : 'descCa';

  const moreLabel = lang === 'es' ? 'Saber más' : lang === 'en' ? 'Learn more' : lang === 'de' ? 'Mehr erfahren' : 'Saber-ne més';
  const badgeLabel = lang === 'es' ? 'Servicios' : lang === 'en' ? 'Services' : lang === 'de' ? 'Leistungen' : 'Serveis';

  return (
    <section className="section bg-white" aria-labelledby="services-heading">
      <div className="container-site">
        <div className="text-center mb-14">
          <span className="badge-blue mb-3">{badgeLabel}</span>
          <h2
            id="services-heading"
            className="section-title"
            data-tina-field={d?.serveis ? tinaField(d.serveis, titleKey) : undefined}
          >{s[titleKey] || s.titleCa}</h2>
          <p
            className="section-subtitle max-w-xl mx-auto"
            data-tina-field={d?.serveis ? tinaField(d.serveis, subtitleKey) : undefined}
          >{s[subtitleKey] || s.subtitleCa}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item: any, i: number) => {
            const c = colorMap[item.color] ?? colorMap.teal;
            return (
              <a
                key={i}
                href={localePath(lang, item.href)}
                className={`card p-6 group transition-all duration-200 cursor-pointer hover:ring-2 ${c.ring}`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-200 ${c.bg} ${c.hover}`}>
                  <img
                    src={item.img}
                    alt={item[titleKey] || item.titleCa}
                    className="w-9 h-9 object-contain group-hover:brightness-0 group-hover:invert transition-all"
                    loading="lazy"
                    width="36"
                    height="36"
                    data-tina-field={tinaField(item, 'img')}
                  />
                </div>
                <h3
                  className="font-display font-semibold text-dark text-lg mb-2"
                  data-tina-field={tinaField(item, titleKey)}
                >{item[titleKey] || item.titleCa}</h3>
                <p
                  className="text-gray-500 text-sm leading-relaxed"
                  data-tina-field={tinaField(item, descKey)}
                >{item[descKey] || item.descCa}</p>
                <div className="mt-4 flex items-center gap-1 text-primary-500 text-sm font-semibold group-hover:gap-2 transition-all">
                  <span>{moreLabel}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
