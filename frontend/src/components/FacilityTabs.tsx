import { useTina, tinaField } from 'tinacms/dist/react';
import { useState } from 'react';

type Lang = 'ca' | 'es' | 'en' | 'de';

function localePath(lang: Lang, path: string) {
  return lang === 'ca' ? path : `/${lang}${path}`;
}

interface Props {
  galSantanyiQuery: string; galSantanyiVariables: object; galSantanyiData: any;
  galCalaDorQuery: string;  galCalaDorVariables: object;  galCalaDorData: any;
  settingsQuery: string;    settingsVariables: object;    settingsData: any;
  lang: Lang;
}

export default function FacilityTabs({ galSantanyiQuery, galSantanyiVariables, galSantanyiData, galCalaDorQuery, galCalaDorVariables, galCalaDorData, settingsQuery, settingsVariables, settingsData, lang }: Props) {
  const [tab, setTab] = useState<'santanyi' | 'calaDor'>('santanyi');

  const { data: gs } = useTina({ query: galSantanyiQuery, variables: galSantanyiVariables, data: galSantanyiData });
  const { data: gc } = useTina({ query: galCalaDorQuery,  variables: galCalaDorVariables,  data: galCalaDorData });
  const { data: sd } = useTina({ query: settingsQuery,    variables: settingsVariables,    data: settingsData });

  const santanyiRaw    = (gs?.galeriaSantanyi?.fotos ?? []) as any[];
  const calaDorRaw     = (gc?.galeriaCalaDor?.fotos  ?? []) as any[];
  const s = sd?.settings ?? {};

  const phone1  = s.phoneSantanyi      || '673 003 828';
  const phone2  = s.phoneCalaDor       || '673 008 715';
  const email1  = s.emailSantanyi      || 'piscinasantanyi@algaliasport.net';
  const email2  = s.emailCalaDor       || 'piscinacalador@algaliasport.net';
  const addr1   = s.addressSantanyi    || 'Carrer Bernat Vidal i Tomàs, 83';
  const addr2   = s.addressCalaDor     || "Avinguda Sementer, S/N";
  const maps1   = s.googleMapsSantanyi || 'https://maps.google.com/?q=Carrer+Bernat+Vidal+Santanyi';
  const maps2   = s.googleMapsCalaDor  || 'https://maps.google.com/?q=Avinguda+Sementer+Cala+d+Or';

  const label = { title: lang === 'es' ? 'Instalaciones' : lang === 'en' ? 'Facilities' : lang === 'de' ? 'Anlagen' : 'Instal·lacions', subtitle: lang === 'es' ? 'Dos centros a tu disposición en Mallorca.' : lang === 'en' ? 'Two centres at your disposal in Mallorca.' : lang === 'de' ? 'Zwei Zentren auf Mallorca.' : 'Dos centres a la teva disposició a Mallorca.', view: lang === 'es' ? 'Ver instalación' : lang === 'en' ? 'View facility' : lang === 'de' ? 'Anlage ansehen' : 'Veure instal·lació' };

  const features1 = ['Piscina coberta 25m', 'Gimnàs equipat', 'Activitats dirigides', 'Pàdel', 'Vestuaris moderns', 'Aparcament'];
  const features2 = ['Piscina', 'Gimnàs modern', 'Activitats dirigides', 'Pàdel', 'Zona exterior', 'Proper al port'];

  const photos     = tab === 'santanyi' ? santanyiRaw : calaDorRaw;
  const features   = tab === 'santanyi' ? features1 : features2;
  const facName    = tab === 'santanyi' ? 'Piscina Municipal Santanyí' : "Piscina Municipal Cala d'Or";
  const facDesc    = tab === 'santanyi'
    ? (lang === 'es' ? 'Centro deportivo municipal con piscina cubierta de 25m, gimnasio, pádel y actividades dirigidas.' : lang === 'en' ? 'Municipal sports centre with covered 25m pool, gym, padel and group activities.' : lang === 'de' ? 'Kommunales Sportzentrum mit 25m-Hallenbad, Fitnessstudio, Padel und Gruppenaktivitäten.' : 'Centre esportiu municipal amb piscina coberta de 25m, gimnàs, pàdel i activitats dirigides.')
    : (lang === 'es' ? 'Centro deportivo con piscina, gimnasio moderno y actividades dirigidas, cerca del puerto de Cala d\'Or.' : lang === 'en' ? 'Sports centre with pool, modern gym and group activities, near Cala d\'Or marina.' : lang === 'de' ? 'Sportzentrum mit Pool, modernem Fitnessstudio und Gruppenaktivitäten, nahe dem Hafen von Cala d\'Or.' : "Centre esportiu amb piscina, gimnàs modern i activitats dirigides, prop del port de Cala d'Or.");
  const phone = tab === 'santanyi' ? phone1 : phone2;
  const email = tab === 'santanyi' ? email1 : email2;
  const addr  = tab === 'santanyi' ? addr1  : addr2;
  const maps  = tab === 'santanyi' ? maps1  : maps2;
  const pageUrl = tab === 'santanyi' ? '/santanyi' : '/cala-dor';

  return (
    <section className="section bg-gray-50" aria-labelledby="facilities-heading">
      <div className="container-site">
        <div className="text-center mb-12">
          <span className="badge-blue mb-3">{label.title}</span>
          <h2 id="facilities-heading" className="section-title">{label.title}</h2>
          <p className="section-subtitle">{label.subtitle}</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 bg-white rounded-2xl p-1.5 shadow-sm border border-gray-100 mb-8 w-fit mx-auto">
          {(['santanyi', 'calaDor'] as const).map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all ${tab === t ? 'bg-primary-500 text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              aria-selected={tab === t}>
              {t === 'santanyi' ? 'Santanyí' : "Cala d'Or"}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Gallery */}
          <div className="grid grid-cols-2 gap-3">
            {photos.map((f: any, i: number) => (
              <div key={i} className={`rounded-2xl overflow-hidden ${i === 0 ? 'col-span-2 h-56' : 'h-36'}`}>
                <img
                  src={f.imatge}
                  alt={f.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  data-tina-field={tinaField(f, 'imatge')}
                />
              </div>
            ))}
          </div>

          {/* Info */}
          <div>
            <h3 className="font-display font-bold text-2xl text-dark mb-2">{facName}</h3>
            <p className="text-gray-500 mb-6 leading-relaxed">{facDesc}</p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {features.map(f => (
                <div key={f} className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-primary-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  {f}
                </div>
              ))}
            </div>
            <div className="space-y-2.5 text-sm mb-6">
              <div className="flex items-start gap-2 text-gray-600">
                <svg className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span data-tina-field={sd?.settings ? tinaField(sd.settings, tab === 'santanyi' ? 'addressSantanyi' : 'addressCalaDor') : undefined}>{addr}</span>
              </div>
              <a href={`tel:+34${phone.replace(/\s/g,'')}`} className="flex items-center gap-2 text-gray-600 hover:text-primary-500 transition-colors">
                <svg className="w-4 h-4 text-primary-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45a2 2 0 0 1 2-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span data-tina-field={sd?.settings ? tinaField(sd.settings, tab === 'santanyi' ? 'phoneSantanyi' : 'phoneCalaDor') : undefined}>{phone}</span>
              </a>
              <a href={`mailto:${email}`} className="flex items-center gap-2 text-gray-600 hover:text-primary-500 transition-colors">
                <svg className="w-4 h-4 text-primary-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span data-tina-field={sd?.settings ? tinaField(sd.settings, tab === 'santanyi' ? 'emailSantanyi' : 'emailCalaDor') : undefined}>{email}</span>
              </a>
            </div>
            <div className="flex gap-3">
              <a href={localePath(lang, pageUrl)} className="btn-primary text-sm py-2.5">{label.view}</a>
              <a href={maps} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm py-2.5">Google Maps</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
