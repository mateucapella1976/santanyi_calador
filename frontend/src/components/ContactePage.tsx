import { useTina, tinaField } from 'tinacms/dist/react';

type Lang = 'ca' | 'es' | 'en' | 'de';

interface Props {
  query: string; variables: object; data: any;
  lang: Lang;
}

export default function ContactePage({ query, variables, data, lang }: Props) {
  const { data: d } = useTina({ query, variables, data });
  const g = d?.paginaContacte ?? {};
  const lk = lang === 'es' ? 'Es' : lang === 'en' ? 'En' : lang === 'de' ? 'De' : 'Ca';
  const tf = (field: string) => d?.paginaContacte ? tinaField(d.paginaContacte, field) : undefined;

  const loc1Name    = g.loc1Name    || 'Santanyí';
  const loc1Address = g.loc1Address || 'Carrer Bernat Vidal i Tomàs, 83\n07650 Santanyí';
  const loc1Phone   = g.loc1Phone   || '673 003 828';
  const loc1Email   = g.loc1Email   || 'piscinasantanyi@algaliasport.net';

  const loc2Name    = g.loc2Name    || "Cala d'Or";
  const loc2Address = g.loc2Address || "Avinguda Sementer, S/N\n07691 Cala d'Or";
  const loc2Phone   = g.loc2Phone   || '673 008 715';
  const loc2Email   = g.loc2Email   || 'piscinacalador@algaliasport.net';

  const schTitle       = g[`scheduleTitle${lk}`]  || g.scheduleTitleCa  || 'Horaris';
  const weekdaysLabel  = g[`weekdaysLabel${lk}`]  || g.weekdaysLabelCa  || 'Dilluns – Divendres';
  const weekdaysHours  = g.weekdaysHours   || '7:00 – 22:00';
  const saturdayLabel  = g[`saturdayLabel${lk}`]  || g.saturdayLabelCa  || 'Dissabte';
  const saturdayHours  = g.saturdayHours   || '8:00 – 21:00';
  const sundayLabel    = g[`sundayLabel${lk}`]    || g.sundayLabelCa    || 'Diumenge i festius';
  const sundayHours    = g.sundayHours     || '9:00 – 14:00';

  const followUs       = g[`followUs${lk}`]  || g.followUsCa  || 'Segueix-nos';
  const igHandle       = g.instagramHandle   || '@piscinasantanyicalador';
  const igUrl          = g.instagramUrl      || 'https://www.instagram.com/piscinasantanyicalador/';
  const igFollowers    = g.instagramFollowers || '1.516';
  const followersLabel = g[`followers${lk}`] || g.followersCa || 'seguidors';

  return (
    <div className="space-y-6">
      {/* Santanyí */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
          <h2 className="font-display font-semibold text-dark" data-tina-field={tf('loc1Name')}>{loc1Name}</h2>
        </div>
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-2.5 text-gray-600">
            <svg className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            <span data-tina-field={tf('loc1Address')} dangerouslySetInnerHTML={{ __html: loc1Address.replace(/\n/g, '<br/>') }} />
          </div>
          <a href={`tel:+34${loc1Phone.replace(/\s/g, '')}`} className="flex items-center gap-2.5 text-gray-600 hover:text-primary-600 transition-colors">
            <svg className="w-4 h-4 text-primary-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45a2 2 0 0 1 2-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span data-tina-field={tf('loc1Phone')}>{loc1Phone}</span>
          </a>
          <a href={`mailto:${loc1Email}`} className="flex items-center gap-2.5 text-gray-600 hover:text-primary-600 transition-colors break-all">
            <svg className="w-4 h-4 text-primary-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
            <span data-tina-field={tf('loc1Email')}>{loc1Email}</span>
          </a>
        </div>
      </div>

      {/* Cala d'Or */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
          <h2 className="font-display font-semibold text-dark" data-tina-field={tf('loc2Name')}>{loc2Name}</h2>
        </div>
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-2.5 text-gray-600">
            <svg className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            <span data-tina-field={tf('loc2Address')} dangerouslySetInnerHTML={{ __html: loc2Address.replace(/\n/g, '<br/>') }} />
          </div>
          <a href={`tel:+34${loc2Phone.replace(/\s/g, '')}`} className="flex items-center gap-2.5 text-gray-600 hover:text-teal-600 transition-colors">
            <svg className="w-4 h-4 text-teal-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45a2 2 0 0 1 2-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span data-tina-field={tf('loc2Phone')}>{loc2Phone}</span>
          </a>
          <a href={`mailto:${loc2Email}`} className="flex items-center gap-2.5 text-gray-600 hover:text-teal-600 transition-colors break-all">
            <svg className="w-4 h-4 text-teal-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
            <span data-tina-field={tf('loc2Email')}>{loc2Email}</span>
          </a>
        </div>
      </div>

      {/* Hours */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h3 className="font-display font-semibold text-dark mb-4" data-tina-field={tf(`scheduleTitle${lk}`)}>{schTitle}</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500" data-tina-field={tf(`weekdaysLabel${lk}`)}>{weekdaysLabel}</span>
            <strong className="text-dark" data-tina-field={tf('weekdaysHours')}>{weekdaysHours}</strong>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500" data-tina-field={tf(`saturdayLabel${lk}`)}>{saturdayLabel}</span>
            <strong className="text-dark" data-tina-field={tf('saturdayHours')}>{saturdayHours}</strong>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500" data-tina-field={tf(`sundayLabel${lk}`)}>{sundayLabel}</span>
            <strong className="text-dark" data-tina-field={tf('sundayHours')}>{sundayHours}</strong>
          </div>
        </div>
      </div>

      {/* Social */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h3 className="font-display font-semibold text-dark mb-4" data-tina-field={tf(`followUs${lk}`)}>{followUs}</h3>
        <div className="flex gap-3">
          <a href={igUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
            </svg>
            <span data-tina-field={tf('instagramHandle')}>{igHandle}</span>
          </a>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          <span data-tina-field={tf('instagramFollowers')}>{igFollowers}</span>{' '}
          <span data-tina-field={tf(`followers${lk}`)}>{followersLabel}</span>
        </p>
      </div>
    </div>
  );
}
