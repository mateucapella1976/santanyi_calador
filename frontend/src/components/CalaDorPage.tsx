import { useTina, tinaField } from 'tinacms/dist/react';

type Lang = 'ca' | 'es' | 'en' | 'de';

interface Props {
  query: string; variables: object; data: any;
  lang: Lang;
}

export default function CalaDorPage({ query, variables, data, lang }: Props) {
  const { data: d } = useTina({ query, variables, data });
  const g = d?.paginaCalaDor ?? {};
  const lk = lang === 'es' ? 'Es' : lang === 'en' ? 'En' : lang === 'de' ? 'De' : 'Ca';
  const tf = (field: string) => d?.paginaCalaDor ? tinaField(d.paginaCalaDor, field) : undefined;

  const badge    = g[`heroBadge${lk}`]    || g.heroBadgeCa    || "Instal·lació Cala d'Or";
  const title    = g[`heroTitle${lk}`]    || g.heroTitleCa    || "Piscina de Cala d'Or";
  const desc     = g[`heroDesc${lk}`]     || g.heroDescCa     || '';
  const address  = g.heroAddress          || "Avinguda Sementer, S/N, 07691 Cala d'Or";
  const phone    = g.heroPhone            || '673 008 715';
  const mapsUrl  = g.heroMapsUrl          || 'https://maps.google.com/?q=Avinguda+Sementer+Cala+d+Or';
  const mapsLabel = g[`heroMapsLabel${lk}`] || g.heroMapsLabelCa || 'Google Maps';

  const gallery: any[] = g.gallery ?? [];
  const services: any[] = g.services ?? [];
  const servicesTitle = g[`servicesTitle${lk}`] || g.servicesTitleCa || "Què hi ha a Cala d'Or";

  const mapTitle      = g[`mapTitle${lk}`]      || g.mapTitleCa      || 'Com trobar-nos';
  const addressLabel  = g[`addressLabel${lk}`]  || g.addressLabelCa  || 'Adreça';
  const fullAddress   = g.fullAddress           || "Avinguda Sementer, S/N\n07691 Cala d'Or (Mallorca)";
  const email         = g.email                 || 'piscinacalador@algaliasport.net';
  const mapBtn        = g[`mapBtn${lk}`]        || g.mapBtnCa        || 'Obrir a Google Maps';

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-900 via-teal-700 to-emerald-600 text-white py-20">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="badge bg-white/20 text-white border border-white/30 mb-4" data-tina-field={tf(`heroBadge${lk}`)}>{badge}</span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4" data-tina-field={tf(`heroTitle${lk}`)}>{title}</h1>
            <p className="text-white/80 text-xl mb-6" data-tina-field={tf(`heroDesc${lk}`)}>{desc}</p>
            <div className="flex items-center gap-2 text-white/70 text-sm mb-8">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <span data-tina-field={tf('heroAddress')}>{address}</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={`tel:+34${phone.replace(/\s/g, '')}`} className="btn-primary" style={{ backgroundColor: '#0d9488' }}>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45a2 2 0 0 1 2-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span data-tina-field={tf('heroPhone')}>{phone}</span>
              </a>
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost" data-tina-field={tf(`heroMapsLabel${lk}`)}>
                {mapsLabel}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="py-8 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {gallery.map((photo: any, i: number) => {
              const src = photo.src ? `/${photo.src.replace(/^\/+/, '').replace(/^public\//, '')}` : `/images/img_${i + 7}.jpg`;
              const isLarge = photo.size === 'large';
              return (
                <div key={i} className={`rounded-2xl overflow-hidden ${isLarge ? 'col-span-2 md:col-span-2 h-56' : 'h-36'} ${i < 2 ? 'h-56' : 'h-36'}`}>
                  <img
                    src={src}
                    alt={photo.alt || ''}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    data-tina-field={tinaField(photo, 'src')}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-white">
        <div className="container-site">
          <h2 className="section-title text-center mb-10" data-tina-field={tf(`servicesTitle${lk}`)}>{servicesTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc: any, i: number) => (
              <div key={i} className="card p-6 hover:shadow-md transition-shadow text-center hover:border-teal-200">
                <div className="text-4xl mb-3" data-tina-field={tinaField(svc, 'icon')}>{svc.icon}</div>
                <h3 className="font-display font-semibold text-dark mb-2" data-tina-field={tinaField(svc, `title${lk}`)}>{svc[`title${lk}`] || svc.titleCa}</h3>
                <p className="text-gray-500 text-sm" data-tina-field={tinaField(svc, `desc${lk}`)}>{svc[`desc${lk}`] || svc.descCa}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map + contact */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="section-title mb-6" data-tina-field={tf(`mapTitle${lk}`)}>{mapTitle}</h2>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3 text-gray-600">
                  <svg className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  <div>
                    <strong className="text-dark" data-tina-field={tf(`addressLabel${lk}`)}>{addressLabel}</strong><br />
                    <span data-tina-field={tf('fullAddress')} dangerouslySetInnerHTML={{ __html: fullAddress.replace(/\n/g, '<br/>') }} />
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <svg className="w-5 h-5 text-teal-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45a2 2 0 0 1 2-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <a href={`tel:+34${phone.replace(/\s/g, '')}`} className="hover:text-teal-600 transition-colors" data-tina-field={tf('heroPhone')}>{phone}</a>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <svg className="w-5 h-5 text-teal-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <a href={`mailto:${email}`} className="hover:text-teal-600 transition-colors break-all" data-tina-field={tf('email')}>{email}</a>
                </div>
              </div>
              <div className="mt-6">
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm" data-tina-field={tf(`mapBtn${lk}`)}>
                  {mapBtn}
                </a>
              </div>
            </div>

            {/* Mini gallery */}
            <div className="grid grid-cols-2 gap-3">
              {(g.contactGallery ?? gallery.slice(0, 3)).map((photo: any, i: number) => {
                const src = photo.src ? `/${photo.src.replace(/^\/+/, '').replace(/^public\//, '')}` : `/images/img_${i + 7}.jpg`;
                return (
                  <div key={i} className={`rounded-2xl overflow-hidden ${i === 0 ? 'col-span-2 h-48' : 'h-32'}`}>
                    <img
                      src={src}
                      alt={photo.alt || ''}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      data-tina-field={tinaField(photo, 'src')}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}