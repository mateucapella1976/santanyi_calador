import { useTina, tinaField } from 'tinacms/dist/react';

type Lang = 'ca' | 'es' | 'en' | 'de';

interface Props {
  query: string; variables: object; data: any;
  lang: Lang;
}

export default function ContactInfo({ query, variables, data, lang }: Props) {
  const { data: sd } = useTina({ query, variables, data });
  const s = sd?.settings ?? {};

  const phone1   = s.phoneSantanyi || '673 003 828';
  const phone2   = s.phoneCalaDor  || '673 008 715';
  const whatsapp = s.whatsapp      || '34673003828';

  const waText = lang === 'es' ? 'Hola! Quiero información sobre las piscinas de Santanyí.'
               : lang === 'en' ? 'Hello! I would like information about the Santanyí pools.'
               : lang === 'de' ? 'Hallo! Ich möchte Informationen über die Bäder von Santanyí.'
               : 'Hola! Vull informació sobre les piscines de Santanyí.';
  const waLabel = lang === 'es' ? 'Xateja per WhatsApp'
                : lang === 'en' ? 'Chat on WhatsApp'
                : lang === 'de' ? 'WhatsApp-Chat'
                : 'Xateja per WhatsApp';

  return (
    <div className="space-y-4">
      <a
        href={`tel:+34${phone1.replace(/\s/g,'')}`}
        className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all group"
      >
        <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-colors">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45a2 2 0 0 1 2-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </div>
        <div>
          <div className="text-xs text-gray-400">Santanyí</div>
          <div
            className="font-semibold text-dark"
            data-tina-field={sd?.settings ? tinaField(sd.settings, 'phoneSantanyi') : undefined}
          >{phone1}</div>
        </div>
      </a>

      <a
        href={`tel:+34${phone2.replace(/\s/g,'')}`}
        className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-teal-200 hover:shadow-md transition-all group"
      >
        <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center group-hover:bg-teal-500 group-hover:text-white transition-colors">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45a2 2 0 0 1 2-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </div>
        <div>
          <div className="text-xs text-gray-400">Cala d'Or</div>
          <div
            className="font-semibold text-dark"
            data-tina-field={sd?.settings ? tinaField(sd.settings, 'phoneCalaDor') : undefined}
          >{phone2}</div>
        </div>
      </a>

      <a
        href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(waText)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-green-200 hover:shadow-md transition-all group"
      >
        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.122.553 4.111 1.519 5.845L.057 23.428l5.733-1.502A11.938 11.938 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.005-1.373l-.359-.213-3.72.975.992-3.622-.234-.371A9.818 9.818 0 1 1 12 21.818z"/>
          </svg>
        </div>
        <div>
          <div className="text-xs text-gray-400">WhatsApp</div>
          <div
            className="font-semibold text-dark"
            data-tina-field={sd?.settings ? tinaField(sd.settings, 'whatsapp') : undefined}
          >{waLabel}</div>
        </div>
      </a>
    </div>
  );
}
