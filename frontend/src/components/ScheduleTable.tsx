import { useTina, tinaField } from 'tinacms/dist/react';

type Lang = 'ca' | 'es' | 'en' | 'de';

interface Props {
  query: string; variables: object; data: any;
  lang: Lang;
  compact?: boolean;
}

export default function ScheduleTable({ query, variables, data, lang, compact = false }: Props) {
  const { data: d } = useTina({ query, variables, data });
  const horaris = d?.horaris ?? {};

  const temporada = horaris.temporada ?? '';
  const rows = horaris.rows ?? [];

  const lk = lang === 'es' ? 'Es' : lang === 'en' ? 'En' : lang === 'de' ? 'De' : 'Ca';
  const tf = (field: string) => d?.horaris ? tinaField(d.horaris, field) : undefined;

  const days = [
    { key: 'dilluns',   label: horaris.dayLabelDl || 'Dl' },
    { key: 'dimarts',   label: horaris.dayLabelDm || 'Dm' },
    { key: 'dimecres',  label: horaris.dayLabelDc || 'Dc' },
    { key: 'dijous',    label: horaris.dayLabelDj || 'Dj' },
    { key: 'divendres', label: horaris.dayLabelDv || 'Dv' },
    { key: 'dissabte',  label: horaris.dayLabelDs || 'Ds' },
  ];

  const actLabel = horaris[`activityLabel${lk}`] || horaris.activityLabelCa || 'Activitat';
  const schTitle = lang === 'es' ? 'Horarios' : lang === 'en' ? 'Schedule' : lang === 'de' ? 'Öffnungszeiten' : 'Horaris';
  const schSub   = lang === 'es' ? 'Consulta todas las actividades y horarios disponibles.' : lang === 'en' ? 'Check all available activities and schedules.' : lang === 'de' ? 'Alle verfügbaren Aktivitäten und Zeiten.' : 'Consulta totes les activitats i horaris disponibles.';
  const noteText = horaris[`footerNote${lk}`] || horaris.footerNoteCa || 'Els horaris poden variar en festius.';

  if (compact) {
    return (
      <div className="bg-primary-50 rounded-2xl p-6 border border-primary-100">
        <h3 className="font-display font-semibold text-dark mb-4">{schTitle}</h3>
        {temporada && <p className="text-xs text-primary-600 font-medium mb-3" data-tina-field={tf('temporada')}>{temporada}</p>}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left py-1 pr-3 text-gray-500 font-medium" data-tina-field={tf(`activityLabel${lk}`)}>{actLabel}</th>
                {days.map(d => <th key={d.key} className="text-center py-1 px-1 text-gray-500 font-medium">{d.label}</th>)}
              </tr>
            </thead>
            <tbody>
              {rows.map((row: any, i: number) => (
                <tr key={i} className="border-t border-primary-100">
                  <td className="py-1.5 pr-3 font-semibold text-dark" data-tina-field={tinaField(row, 'activitat')}>{row.activitat}</td>
                  {days.map(d => <td key={d.key} className="text-center py-1.5 px-1 text-gray-600 text-xs" data-tina-field={tinaField(row, d.key)}>{row[d.key] || '–'}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <section className="section bg-white" aria-labelledby="schedule-heading">
      <div className="container-site">
        <div className="text-center mb-12">
          <span className="badge-blue mb-3">{schTitle}</span>
          <h2 id="schedule-heading" className="section-title">{schTitle}</h2>
          <p className="section-subtitle">{schSub}</p>
          {temporada && <p className="text-sm text-primary-600 font-semibold mt-2" data-tina-field={tf('temporada')}>{temporada}</p>}
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-primary-500 text-white">
              <tr>
                <th className="text-left px-4 py-3 font-semibold rounded-tl-2xl" data-tina-field={tf(`activityLabel${lk}`)}>{actLabel}</th>
                {days.map((d, i) => (
                  <th key={d.key} className={`text-center px-3 py-3 font-semibold ${i === days.length - 1 ? 'rounded-tr-2xl' : ''}`}>{d.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row: any, i: number) => (
                <tr key={i} className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                  <td className="px-4 py-3 font-semibold text-dark" data-tina-field={tinaField(row, 'activitat')}>{row.activitat}</td>
                  {days.map(d => <td key={d.key} className="text-center px-3 py-3 text-gray-600" data-tina-field={tinaField(row, d.key)}>{row[d.key] || '–'}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-xl text-sm text-gray-500 flex items-start gap-2">
          <svg className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <span data-tina-field={tf(`footerNote${lk}`)}>{noteText}</span>
        </div>
      </div>
    </section>
  );
}
