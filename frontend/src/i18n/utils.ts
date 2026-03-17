import ca from './ca.json';
import es from './es.json';
import en from './en.json';
import de from './de.json';

export const languages = { ca, es, en, de } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'ca';
export const supportedLangs: Lang[] = ['ca', 'es', 'en', 'de'];

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const keys = key.split('.');
    let result: unknown = languages[lang];
    for (const k of keys) {
      if (result && typeof result === 'object' && k in (result as Record<string, unknown>)) {
        result = (result as Record<string, unknown>)[k];
      } else {
        // fallback to default language
        result = languages[defaultLang];
        for (const k2 of keys) {
          if (result && typeof result === 'object' && k2 in (result as Record<string, unknown>)) {
            result = (result as Record<string, unknown>)[k2];
          } else {
            return key;
          }
        }
        break;
      }
    }
    return typeof result === 'string' ? result : key;
  };
}

export function getTranslationObj<T>(lang: Lang, path: string): T {
  const keys = path.split('.');
  let result: unknown = languages[lang];
  for (const k of keys) {
    if (result && typeof result === 'object' && k in (result as Record<string, unknown>)) {
      result = (result as Record<string, unknown>)[k];
    } else {
      return {} as T;
    }
  }
  return result as T;
}

export function localePath(lang: Lang, path: string): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}

export function getAlternateLangs(path: string): Record<string, string> {
  const result: Record<string, string> = {};
  for (const lang of supportedLangs) {
    result[lang] = localePath(lang, path);
  }
  return result;
}
