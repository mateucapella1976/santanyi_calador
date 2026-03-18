import { useTina, tinaField } from 'tinacms/dist/react';
import { useState } from 'react';

type Lang = 'ca' | 'es' | 'en' | 'de';
const supportedLangs: Lang[] = ['ca', 'es', 'en', 'de'];

function localePath(lang: Lang, path: string) {
  if (lang === 'ca') return path || '/';
  const clean = path.replace(new RegExp(`^/${lang}`), '') || '/';
  return `/${lang}${clean === '/' ? '' : clean}` || `/${lang}`;
}

function switchLangPath(currentPath: string, currentLang: Lang, targetLang: Lang) {
  // Strip current lang prefix to get the base path
  let basePath = currentPath;
  if (currentLang !== 'ca') {
    basePath = currentPath.replace(new RegExp(`^/${currentLang}`), '') || '/';
  }
  return localePath(targetLang, basePath);
}

interface Props {
  navQuery: string; navVariables: object; navData: any;
  settingsQuery: string; settingsVariables: object; settingsData: any;
  lang: Lang;
  currentPath: string;
}

export default function Nav({ navQuery, navVariables, navData, settingsQuery, settingsVariables, settingsData, lang, currentPath }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const { data: nd } = useTina({ query: navQuery, variables: navVariables, data: navData });
  const { data: sd } = useTina({ query: settingsQuery, variables: settingsVariables, data: settingsData });

  const nav      = nd?.navigation ?? {};
  const settings = sd?.settings   ?? {};

  const labelKey = lang === 'es' ? 'labelEs' : lang === 'en' ? 'labelEn' : lang === 'de' ? 'labelDe' : 'labelCa';
  const lk       = lang === 'es' ? 'Es'      : lang === 'en' ? 'En'      : lang === 'de' ? 'De'      : 'Ca';
  const rawItems: any[] = nav.items ?? [];

  const phone1  = settings.phoneSantanyi ?? '673 003 828';
  const phone2  = settings.phoneCalaDor  ?? '673 008 715';
  const ig      = settings.instagram     ?? 'https://www.instagram.com/piscinasantanyicalador/';
  const fb      = settings.facebook      ?? 'https://www.facebook.com/piscinasantanyi';
  const logo    = settings.logo          ? (settings.logo.startsWith('http') ? settings.logo : `/${settings.logo.replace(/^\/+/, '').replace(/^public\//, '')}`) : '/logo.png';

  const dayPassLabel = nav[`ctaDayPassLabel${lk}`] || nav.ctaDayPassLabelCa || 'Day Pass';
  const dayPassUrl   = nav.ctaDayPassUrl || '/day-pass';
  const bookLabel    = nav[`ctaBookLabel${lk}`]    || nav.ctaBookLabelCa    || 'Reservar';
  const bookUrl      = nav.ctaBookUrl    || '/contacte';

  return (
    <>
      {/* Top bar */}
      <div className="bg-dark text-white text-sm py-2 border-b border-white/10">
        <div className="container-site flex items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <span className="text-white/60 text-xs">Santanyí:</span>
              <a href={`tel:+34${phone1.replace(/\s/g,'')}`} className="text-primary-400 font-semibold hover:text-primary-300 transition-colors">{phone1.replace(/\s/g,'')}</a>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-white/60 text-xs">Cala d'Or:</span>
              <a href={`tel:+34${phone2.replace(/\s/g,'')}`} className="text-primary-400 font-semibold hover:text-primary-300 transition-colors">{phone2.replace(/\s/g,'')}</a>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href={fb} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/60 hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href={ig} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/60 hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container-site">
          <nav className="flex items-center justify-between h-[72px]" aria-label="Navegació principal">
            <a href={localePath(lang, '/')} className="flex-shrink-0" aria-label="Inici">
              <img
                src={logo}
                alt="Piscines Santanyí Cala d'Or"
                className="h-14 w-auto"
                width={120} height={56}
                data-tina-field={sd?.settings ? tinaField(sd.settings, 'logo') : undefined}
              />
            </a>

            {/* Desktop nav */}
            <ul className="hidden lg:flex items-center gap-0.5">
              {rawItems.map((item: any) => (
                <li key={item.href}>
                  <a
                    href={localePath(lang, item.href)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-150 ${currentPath === localePath(lang, item.href) ? 'text-primary-500' : 'text-dark hover:text-primary-500'}`}
                    data-tina-field={tinaField(item, labelKey)}
                  >{item[labelKey] || item.labelCa}</a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              {/* Lang switcher */}
              <div className="hidden md:flex items-center gap-1 bg-gray-50 rounded-lg p-1">
                {supportedLangs.map(l => (
                  <a key={l} href={switchLangPath(currentPath, lang, l)}
                    className={`px-2 py-1 rounded text-xs font-bold uppercase transition-colors ${l === lang ? 'bg-primary-500 text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                    lang={l} aria-label={l}>{l}</a>
                ))}
              </div>
              <a href={localePath(lang, dayPassUrl)} className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 bg-amber-500 text-white text-sm font-bold rounded-lg hover:bg-amber-600 transition-colors" data-tina-field={nd?.navigation ? tinaField(nd.navigation, `ctaDayPassLabel${lk}`) : undefined}>{dayPassLabel}</a>
              <a href={localePath(lang, bookUrl)} className="btn-primary text-sm py-2 px-4 hidden sm:inline-flex" data-tina-field={nd?.navigation ? tinaField(nd.navigation, `ctaBookLabel${lk}`) : undefined}>{bookLabel}</a>

              {/* Mobile button */}
              <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors" aria-expanded={menuOpen} aria-label="Menú">
                {menuOpen
                  ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
                }
              </button>
            </div>
          </nav>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="lg:hidden border-t border-gray-100 py-4 pb-6">
              <ul className="space-y-1">
                {rawItems.map((item: any) => (
                  <li key={item.href}>
                    <a href={localePath(lang, item.href)} className="flex items-center px-3 py-2.5 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-500 font-semibold transition-colors" data-tina-field={tinaField(item, labelKey)}>{item[labelKey] || item.labelCa}</a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-2">
                <a href={localePath(lang, dayPassUrl)} className="flex items-center justify-center gap-2 py-2.5 bg-amber-500 text-white font-bold rounded-xl hover:bg-amber-600 transition-colors" data-tina-field={nd?.navigation ? tinaField(nd.navigation, `ctaDayPassLabel${lk}`) : undefined}>{dayPassLabel}</a>
                <a href={localePath(lang, bookUrl)} className="btn-primary w-full justify-center" data-tina-field={nd?.navigation ? tinaField(nd.navigation, `ctaBookLabel${lk}`) : undefined}>{bookLabel}</a>
              </div>
              <div className="mt-3 flex gap-2 justify-center">
                {supportedLangs.map(l => (
                  <a key={l} href={switchLangPath(currentPath, lang, l)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-bold uppercase transition-colors ${l === lang ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                  >{l}</a>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
