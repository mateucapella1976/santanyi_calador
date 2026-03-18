import { useTina, tinaField } from 'tinacms/dist/react';

type Lang = 'ca' | 'es' | 'en' | 'de';

function localePath(lang: Lang, path: string) {
  return lang === 'ca' ? path : `/${lang}${path}`;
}

interface Props {
  query: string; variables: object; data: any;
  lang: Lang;
}

const t: Record<Lang, Record<string, string>> = {
  ca: { tagline: "Gaudeix de les millors instal·lacions esportives de Santanyí i Cala d'Or.", swimming: 'Natació', gym: 'Gimnàs', activities: 'Activitats', padel: 'Pàdel', personal: 'Entrenador personal', santanyi: 'Santanyí', calaDor: "Cala d'Or", prices: 'Preus', schedule: 'Horaris', contact: 'Contacte', privacy: 'Privacitat', cookies: 'Cookies', legal: 'Avís legal' },
  es: { tagline: 'Disfruta de las mejores instalaciones deportivas de Santanyí y Cala d\'Or.', swimming: 'Natación', gym: 'Gimnasio', activities: 'Actividades', padel: 'Pádel', personal: 'Entrenador personal', santanyi: 'Santanyí', calaDor: 'Cala d\'Or', prices: 'Precios', schedule: 'Horarios', contact: 'Contacto', privacy: 'Privacidad', cookies: 'Cookies', legal: 'Aviso legal' },
  en: { tagline: 'Enjoy the best sports facilities in Santanyí and Cala d\'Or.', swimming: 'Swimming', gym: 'Gym', activities: 'Activities', padel: 'Padel', personal: 'Personal trainer', santanyi: 'Santanyí', calaDor: 'Cala d\'Or', prices: 'Prices', schedule: 'Schedule', contact: 'Contact', privacy: 'Privacy', cookies: 'Cookies', legal: 'Legal notice' },
  de: { tagline: 'Genießen Sie die besten Sportanlagen in Santanyí und Cala d\'Or.', swimming: 'Schwimmen', gym: 'Fitnessstudio', activities: 'Aktivitäten', padel: 'Padel', personal: 'Personal Trainer', santanyi: 'Santanyí', calaDor: 'Cala d\'Or', prices: 'Preise', schedule: 'Öffnungszeiten', contact: 'Kontakt', privacy: 'Datenschutz', cookies: 'Cookies', legal: 'Impressum' },
};

export default function Footer({ query, variables, data, lang }: Props) {
  const { data: sd } = useTina({ query, variables, data });
  const s = sd?.settings ?? {};
  const tr = t[lang];

  const phone1   = s.phoneSantanyi   || '673 003 828';
  const email1   = s.emailSantanyi   || 'piscinasantanyi@algaliasport.net';
  const addr1    = s.addressSantanyi || 'Carrer Bernat Vidal i Tomàs, 83';
  const addr2    = s.addressCalaDor  || "Avinguda Sementer, S/N";
  const ig       = s.instagram       || 'https://www.instagram.com/piscinasantanyicalador/';
  const fb       = s.facebook        || 'https://www.facebook.com/piscinasantanyi';
  const logoFt   = s.logoFooter      ? `/${s.logoFooter.replace(/^\/+/, '').replace(/^public\//, '')}` : '/logo-footer.png';

  return (
    <footer className="text-white" style={{ background: '#333333' }}>
      <div className="container-site py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href={localePath(lang, '/')} className="inline-block mb-4">
              <img
                src={logoFt}
                alt="Piscines Santanyí Cala d'Or"
                className="h-16 w-auto"
                width={140} height={64} loading="lazy"
                data-tina-field={sd?.settings ? tinaField(sd.settings, 'logoFooter') : undefined}
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{tr.tagline}</p>
            <div className="flex items-center gap-3">
              <a href={ig} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-colors" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href={fb} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-colors" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Serveis */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">{tr.swimming} & {tr.gym}</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {[['natacio', tr.swimming], ['gimnas', tr.gym], ['activitats', tr.activities], ['padel', tr.padel], ['entrenador-personal', tr.personal]].map(([path, label]) => (
                <li key={path}><a href={localePath(lang, `/${path}`)} className="hover:text-primary-400 transition-colors">{label}</a></li>
              ))}
            </ul>
          </div>

          {/* Instal·lacions */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">Instal·lacions</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {[['santanyi', tr.santanyi], ['cala-dor', tr.calaDor], ['preus', tr.prices], ['horaris', tr.schedule], ['day-pass', 'Day Pass']].map(([path, label]) => (
                <li key={path}><a href={localePath(lang, `/${path}`)} className={`transition-colors ${path === 'day-pass' ? 'hover:text-amber-400' : 'hover:text-primary-400'}`}>{label}</a></li>
              ))}
            </ul>
          </div>

          {/* Contacte */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">{tr.contact}</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-primary-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span data-tina-field={sd?.settings ? tinaField(sd.settings, 'addressSantanyi') : undefined}>{addr1}</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-primary-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span data-tina-field={sd?.settings ? tinaField(sd.settings, 'addressCalaDor') : undefined}>{addr2}</span>
              </li>
              <li>
                <a href={`tel:+34${phone1.replace(/\s/g,'')}`} className="flex items-center gap-2 hover:text-primary-400 transition-colors">
                  <svg className="w-4 h-4 text-primary-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45a2 2 0 0 1 2-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <span data-tina-field={sd?.settings ? tinaField(sd.settings, 'phoneSantanyi') : undefined}>{phone1}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${email1}`} className="flex items-center gap-2 hover:text-primary-400 transition-colors break-all">
                  <svg className="w-4 h-4 text-primary-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <span data-tina-field={sd?.settings ? tinaField(sd.settings, 'emailSantanyi') : undefined}>{email1}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} Algàlia Esport SL · Piscines Municipals de Santanyí</span>
          <nav className="flex items-center gap-4" aria-label="Peu de pàgina">
            <a href={localePath(lang, '/politica-privacitat')} className="hover:text-gray-300 transition-colors">{tr.privacy}</a>
            <a href={localePath(lang, '/politica-cookies')} className="hover:text-gray-300 transition-colors">{tr.cookies}</a>
            <a href={localePath(lang, '/avis-legal')} className="hover:text-gray-300 transition-colors">{tr.legal}</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
