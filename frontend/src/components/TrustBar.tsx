import { useTina, tinaField } from 'tinacms/dist/react';

type Lang = 'ca' | 'es' | 'en' | 'de';

interface Props {
  query: string; variables: object; data: any;
  lang: Lang;
}

const icons: Record<string, string> = {
  users:     '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  award:     '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 L17 22l-5-3-5 3 1.523-9.11"/>',
  activity:  '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
  book:      '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  'map-pin': '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
};

export default function TrustBar({ query, variables, data, lang }: Props) {
  const { data: d } = useTina({ query, variables, data });
  const items: any[] = d?.trustbar?.items ?? [];
  const labelKey = lang === 'es' ? 'labelEs' : lang === 'en' ? 'labelEn' : lang === 'de' ? 'labelDe' : 'labelCa';

  return (
    <section className="py-10 bg-gray-50 border-b border-gray-100" aria-label="Xifres clau">
      <div className="container-site">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
          {items.map((item: any, i: number) => (
            <div key={i} className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-200">
                <svg
                  width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  aria-hidden="true"
                  dangerouslySetInnerHTML={{ __html: icons[item.icon] || icons['activity'] }}
                />
              </div>
              <div>
                <div
                  className="font-display font-bold text-dark text-2xl leading-none"
                  data-tina-field={tinaField(item, 'value')}
                >{item.value}</div>
                <div
                  className="text-gray-500 text-sm mt-0.5"
                  data-tina-field={tinaField(item, labelKey)}
                >{item[labelKey] || item.labelCa}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
