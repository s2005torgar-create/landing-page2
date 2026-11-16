import { useRef, useState, type FormEvent } from 'react';
import { ArrowUpRight, Mail, Send } from 'lucide-react';

export function ContactSection() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('Proyecto de marketing o web');
  const [message, setMessage] = useState('');
  const [formFeedback, setFormFeedback] = useState<string | null>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const cleanName = name.trim();
  const cleanMessage = message.trim();

  const buildFormattedMessage = () =>
    `Hola Sergio,\n\nSoy ${cleanName}.\nAsunto: ${subject}\n\n${cleanMessage}`;

  const mailtoDraftHref = `mailto:?subject=${encodeURIComponent(
    cleanName ? `${subject} — ${cleanName}` : subject,
  )}&body=${encodeURIComponent(
    cleanName && cleanMessage
      ? buildFormattedMessage()
      : 'Hola Sergio,\n\nMe gustaría comentar un proyecto o colaboración contigo.',
  )}`;

  const handleFocusForm = () => {
    nameInputRef.current?.focus();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!cleanName || !cleanMessage) {
      setFormFeedback('Completa tu nombre y el mensaje antes de enviarlo.');
      return;
    }

    setFormFeedback(
      'Tu consulta está lista. Si tu gestor de correo no se abre automáticamente, puedes usar el botón «Abrir app de correo».',
    );
    window.location.href = mailtoDraftHref;
  };

  return (
    <section
      id="contacto"
      className="border-t border-[#2c2727] bg-[#b5092b] py-20 text-[#f0eee9] md:py-28"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left editorial callout */}
          <div className="lg:col-span-6">
            <h2 className="text-balance text-5xl font-extrabold leading-[0.95] tracking-tight text-[#f0eee9] md:text-7xl">
              ¿Hablamos?
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[#f0eee9]/95">
              Estoy abierto a nuevas oportunidades y proyectos en los que pueda seguir aprendiendo, aportar mis ideas y crecer profesionalmente.
            </p>

            <div className="mt-8 space-y-2 border-t border-[#f0eee9]/25 pt-6 font-mono text-xs uppercase tracking-[0.1em] text-[#f0eee9]">
              <p>Ubicación · Granada, España</p>
              <p>Disponibilidad · Proyectos, prácticas y perfil junior</p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleFocusForm}
                className="inline-flex min-h-[44px] items-center gap-3 bg-[#080808] px-5 py-3 font-mono text-xs uppercase tracking-[0.1em] text-[#f0eee9] transition-colors duration-150 hover:bg-[#1d1919]"
              >
                <Send className="h-4 w-4" />
                <span>Redactar mensaje</span>
              </button>

              <a
                href={mailtoDraftHref}
                className="inline-flex min-h-[44px] items-center gap-2 border border-[#f0eee9]/60 bg-[#080808]/20 px-4 py-3 font-mono text-xs uppercase tracking-[0.08em] text-[#f0eee9] transition-colors duration-150 hover:bg-[#080808]/40"
              >
                <Mail className="h-4 w-4" />
                <span>Abrir app de correo</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right interactive message composer */}
          <div className="border border-[#f0eee9]/25 bg-[#080808] p-6 text-[#f0eee9] md:p-8 lg:col-span-6">
            <h3 className="text-lg font-bold tracking-tight">
              Enviar un mensaje rápido
            </h3>
            <p className="mt-1 text-sm text-[#b8b2ac]">
              Cuéntame brevemente en qué podemos colaborar.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block font-mono text-xs uppercase tracking-[0.1em] text-[#b8b2ac]"
                >
                  Tu nombre
                </label>
                <input
                  ref={nameInputRef}
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej. Laura Martínez"
                  className="mt-2 w-full border border-[#2c2727] bg-[#111010] px-4 py-3 text-sm text-[#f0eee9] placeholder:text-[#847e79] focus:border-[#b5092b] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block font-mono text-xs uppercase tracking-[0.1em] text-[#b8b2ac]"
                >
                  Tema
                </label>
                <select
                  id="contact-subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="mt-2 w-full border border-[#2c2727] bg-[#111010] px-4 py-3 text-sm text-[#f0eee9] focus:border-[#b5092b] focus:outline-none"
                >
                  <option value="Proyecto de marketing o web">
                    Proyecto de marketing o web
                  </option>
                  <option value="Oportunidad junior o prácticas">
                    Oportunidad junior o prácticas
                  </option>
                  <option value="Redes sociales y contenidos">
                    Redes sociales y contenidos
                  </option>
                  <option value="Otra consulta">Otra consulta</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-mono text-xs uppercase tracking-[0.1em] text-[#b8b2ac]"
                >
                  Mensaje
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Cuéntame brevemente la idea, equipo o proyecto..."
                  className="mt-2 w-full resize-y border border-[#2c2727] bg-[#111010] px-4 py-3 text-sm text-[#f0eee9] placeholder:text-[#847e79] focus:border-[#b5092b] focus:outline-none"
                />
              </div>

              {formFeedback && (
                <p
                  role="status"
                  className="border border-[#2c2727] bg-[#111010] px-3.5 py-2.5 text-xs leading-relaxed text-[#f0eee9]"
                >
                  {formFeedback}
                </p>
              )}

              <button
                type="submit"
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 bg-[#b5092b] px-5 py-3 font-mono text-xs font-medium uppercase tracking-[0.12em] text-[#f0eee9] transition-colors duration-150 hover:bg-[#d10c34]"
              >
                <Send className="h-4 w-4" />
                <span>Enviar mensaje</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
