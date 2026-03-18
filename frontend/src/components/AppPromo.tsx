import { useTina, tinaField } from 'tinacms/dist/react';

type Lang = 'ca' | 'es' | 'en' | 'de';

interface Props {
  query: string; variables: object; data: any;
  lang: Lang;
}

export default function AppPromo({ query, variables, data, lang }: Props) {
  const { data: d } = useTina({ query, variables, data });
  const ap = d?.appPromo ?? {};

  const lk = lang === 'es' ? 'Es' : lang === 'en' ? 'En' : lang === 'de' ? 'De' : 'Ca';

  const badge    = ap[`badge${lk}`]    || ap.badgeCa    || 'Nova App';
  const title    = ap[`title${lk}`]    || ap.titleCa    || 'Gestiona les teves reserves des del mòbil';
  const subtitle = ap[`subtitle${lk}`] || ap.subtitleCa || '';
  const features: any[] = ap.features ?? [];
  const mockupRaw = ap.mockupImage || '';
  const mockupSrc = mockupRaw ? (mockupRaw.startsWith('http') ? mockupRaw : `/${mockupRaw.replace(/^\/+/, '').replace(/^public\//, '')}`) : '';

  return (
    <section className="section pool-bg text-white relative overflow-hidden" aria-labelledby="app-heading">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/3" />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>
            <span className="badge bg-white/20 text-white border border-white/30 mb-4">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span data-tina-field={d?.appPromo ? tinaField(d.appPromo, `badge${lk}`) : undefined}>{badge}</span>
            </span>
            <h2
              id="app-heading"
              className="font-display font-bold text-4xl text-white mb-4"
              data-tina-field={d?.appPromo ? tinaField(d.appPromo, `title${lk}`) : undefined}
            >{title}</h2>
            <p
              className="text-white/80 text-lg mb-8"
              data-tina-field={d?.appPromo ? tinaField(d.appPromo, `subtitle${lk}`) : undefined}
            >{subtitle}</p>

            <ul className="space-y-3 mb-10">
              {features.map((f: any, i: number) => (
                <li key={i} className="flex items-center gap-3 text-white/90">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span data-tina-field={tinaField(f, `text${lk}`)}>{f[`text${lk}`] || f.textCa}</span>
                </li>
              ))}
            </ul>

          </div>

          {/* App mockup — imatge editable o fallback decoratiu */}
          <div className="flex justify-center" data-tina-field={d?.appPromo ? tinaField(d.appPromo, 'mockupImage') : undefined}>
            {mockupSrc ? (
              <img
                src={mockupSrc}
                alt="App Piscines Santanyí"
                className="max-w-xs w-full rounded-3xl shadow-2xl"
                loading="lazy"
              />
            ) : (
              <div className="relative">
                <div className="w-64 h-[500px] bg-dark rounded-[3rem] border-4 border-white/20 shadow-2xl flex flex-col overflow-hidden relative">
                  <div className="flex-1 bg-gradient-to-b from-primary-50 to-white p-5 pt-10">
                    <div className="flex justify-between text-xs text-gray-400 mb-6">
                      <span>9:41</span>
                      <span>●●●</span>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-primary-500 rounded-xl flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
                          <path d="M2 20c1.5 0 2.5-1 4-1s2.5 1 4 1"/><circle cx="9" cy="8" r="3"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-dark">Piscines Santanyí</div>
                        <div className="text-xs text-gray-400">Bon dia, Joan!</div>
                      </div>
                    </div>
                    <div className="bg-primary-500 rounded-2xl p-4 text-white mb-4">
                      <div className="text-xs mb-2 opacity-80">Accés QR</div>
                      <div className="w-16 h-16 bg-white rounded-xl mx-auto flex items-center justify-center">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="black" aria-hidden="true">
                          <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
                          <rect x="5" y="5" width="3" height="3" fill="white"/><rect x="16" y="5" width="3" height="3" fill="white"/><rect x="5" y="16" width="3" height="3" fill="white"/>
                          <rect x="14" y="14" width="3" height="3"/><rect x="17" y="17" width="4" height="4"/><rect x="14" y="17" width="2" height="2" fill="white"/>
                        </svg>
                      </div>
                      <div className="text-center text-xs mt-2 opacity-80">Santanyí · Adult</div>
                    </div>
                    <div className="bg-white rounded-xl p-3 border border-gray-100">
                      <div className="text-xs text-gray-400 mb-1">Propera activitat</div>
                      <div className="font-semibold text-dark text-sm">Aqua-fitness</div>
                      <div className="flex items-center gap-1 text-xs text-primary-600">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                        </svg>
                        Dimecres 9:00
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border-t border-gray-100 px-6 py-3 flex justify-between">
                    {['🏠','📅','🎫','👤'].map(icon => (
                      <div key={icon} className="w-8 h-8 flex items-center justify-center rounded-lg text-lg">{icon}</div>
                    ))}
                  </div>
                </div>
                <div className="absolute -right-4 top-20 bg-white rounded-xl shadow-xl px-3 py-2 text-sm font-semibold text-dark animate-float">
                  📅 Reserva feta!
                </div>
                <div className="absolute -left-8 bottom-20 bg-emerald-500 text-white rounded-xl shadow-xl px-3 py-2 text-sm font-semibold animate-float" style={{ animationDelay: '1s' }}>
                  ✅ Accés OK
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
