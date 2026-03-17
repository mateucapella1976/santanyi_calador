import { useState } from 'react';

interface Props {
  lang: 'ca' | 'es' | 'en' | 'de';
  variant?: 'full' | 'compact';
}

const translations = {
  ca: {
    title: 'Posa\'t en contacte',
    subtitle: 'Resolvem els teus dubtes en menys de 24 hores',
    name: 'Nom complet',
    email: 'Correu electrònic',
    phone: 'Telèfon (opcional)',
    facility: 'Instal·lació',
    facilityOptions: ['Santanyí', 'Cala d\'Or', 'Indistint'],
    interest: 'Servei d\'interès',
    interestOptions: ['Abonat mensual', 'Curs natació', 'Gimnàs', 'Activitats dirigides', 'Entrenador personal', 'Pàdel', 'Day Pass', 'Altra consulta'],
    message: 'Missatge (opcional)',
    messagePlaceholder: 'Escriu aquí la teva consulta...',
    submit: 'Enviar consulta',
    submitting: 'Enviant...',
    privacy: 'Accepto la política de privacitat',
    success: '✅ Missatge enviat! Ens posarem en contacte aviat.',
    error: '❌ Error en enviar. Torna-ho a intentar o truca\'ns al 673 003 828.',
  },
  es: {
    title: 'Ponte en contacto',
    subtitle: 'Resolvemos tus dudas en menos de 24 horas',
    name: 'Nombre completo',
    email: 'Correo electrónico',
    phone: 'Teléfono (opcional)',
    facility: 'Instalación',
    facilityOptions: ['Santanyí', 'Cala d\'Or', 'Indistinto'],
    interest: 'Servicio de interés',
    interestOptions: ['Abonado mensual', 'Curso natación', 'Gimnasio', 'Actividades dirigidas', 'Entrenador personal', 'Pádel', 'Day Pass', 'Otra consulta'],
    message: 'Mensaje (opcional)',
    messagePlaceholder: 'Escribe aquí tu consulta...',
    submit: 'Enviar consulta',
    submitting: 'Enviando...',
    privacy: 'Acepto la política de privacidad',
    success: '✅ ¡Mensaje enviado! Nos pondremos en contacto pronto.',
    error: '❌ Error al enviar. Inténtalo de nuevo o llámanos al 673 003 828.',
  },
  en: {
    title: 'Get in touch',
    subtitle: "We'll answer your questions within 24 hours",
    name: 'Full name',
    email: 'Email address',
    phone: 'Phone (optional)',
    facility: 'Facility',
    facilityOptions: ['Santanyí', "Cala d'Or", 'Either'],
    interest: 'Service of interest',
    interestOptions: ['Monthly membership', 'Swimming course', 'Gym', 'Fitness classes', 'Personal training', 'Padel', 'Day Pass', 'Other enquiry'],
    message: 'Message (optional)',
    messagePlaceholder: 'Write your enquiry here...',
    submit: 'Send enquiry',
    submitting: 'Sending...',
    privacy: 'I accept the privacy policy',
    success: '✅ Message sent! We\'ll be in touch soon.',
    error: '❌ Sending error. Please try again or call us at 673 003 828.',
  },
  de: {
    title: 'Kontakt aufnehmen',
    subtitle: 'Wir beantworten Ihre Fragen innerhalb von 24 Stunden',
    name: 'Vollständiger Name',
    email: 'E-Mail-Adresse',
    phone: 'Telefon (optional)',
    facility: 'Anlage',
    facilityOptions: ['Santanyí', "Cala d'Or", 'Egal'],
    interest: 'Gewünschter Service',
    interestOptions: ['Monatsmitgliedschaft', 'Schwimmkurs', 'Fitnessstudio', 'Gruppenkurse', 'Personal Training', 'Padel', 'Tagesticket', 'Andere Anfrage'],
    message: 'Nachricht (optional)',
    messagePlaceholder: 'Schreiben Sie Ihre Anfrage hier...',
    submit: 'Anfrage senden',
    submitting: 'Wird gesendet...',
    privacy: 'Ich akzeptiere die Datenschutzrichtlinie',
    success: '✅ Nachricht gesendet! Wir melden uns bald.',
    error: '❌ Sendefehler. Bitte erneut versuchen oder anrufen: 673 003 828.',
  },
};

export default function ContactForm({ lang = 'ca', variant = 'full' }: Props) {
  const t = translations[lang];

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    facility: t.facilityOptions[0],
    interest: t.interestOptions[0],
    message: '',
    privacy: false,
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!form.name.trim()) newErrors.name = 'Required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email';
    if (!form.privacy) newErrors.privacy = 'Required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, lang }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', facility: t.facilityOptions[0], interest: t.interestOptions[0], message: '', privacy: false });
      } else {
        throw new Error('Server error');
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputClass = (field: keyof typeof form) =>
    `input-field ${errors[field] ? 'border-red-400 ring-red-200' : ''}`;

  if (status === 'success') {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <p className="text-emerald-800 font-semibold text-lg">{t.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">
          {t.error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="contact-name">
            {t.name} *
          </label>
          <input
            id="contact-name"
            type="text"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            className={inputClass('name')}
            placeholder="Joan García"
            required
            autoComplete="name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="contact-email">
            {t.email} *
          </label>
          <input
            id="contact-email"
            type="email"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            className={inputClass('email')}
            placeholder="joan@example.com"
            required
            autoComplete="email"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="contact-phone">
            {t.phone}
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={form.phone}
            onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
            className="input-field"
            placeholder="+34 6XX XXX XXX"
            autoComplete="tel"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="contact-facility">
            {t.facility}
          </label>
          <select
            id="contact-facility"
            value={form.facility}
            onChange={e => setForm(f => ({ ...f, facility: e.target.value }))}
            className="input-field"
          >
            {t.facilityOptions.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="contact-interest">
          {t.interest}
        </label>
        <select
          id="contact-interest"
          value={form.interest}
          onChange={e => setForm(f => ({ ...f, interest: e.target.value }))}
          className="input-field"
        >
          {t.interestOptions.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>

      {variant === 'full' && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="contact-message">
            {t.message}
          </label>
          <textarea
            id="contact-message"
            rows={4}
            value={form.message}
            onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
            className="input-field resize-none"
            placeholder={t.messagePlaceholder}
          />
        </div>
      )}

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={form.privacy}
            onChange={e => setForm(f => ({ ...f, privacy: e.target.checked }))}
            className="mt-0.5 w-4 h-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
          />
          <span className={`text-sm ${errors.privacy ? 'text-red-500' : 'text-gray-500'}`}>
            {t.privacy}{' '}
            <a href="/privacitat" className="text-primary-600 hover:underline">
              {lang === 'en' ? 'privacy policy' : lang === 'de' ? 'Datenschutzerklärung' : lang === 'es' ? 'política de privacidad' : 'política de privacitat'}
            </a>
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full justify-center py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
      >
        {status === 'submitting' ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="30 60"/>
            </svg>
            {t.submitting}
          </>
        ) : (
          <>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
            {t.submit}
          </>
        )}
      </button>
    </form>
  );
}
