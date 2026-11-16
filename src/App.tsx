import { useState } from 'react';
import { ArrowDown, ArrowUp, ArrowUpRight, Minus, Plus } from 'lucide-react';
import { ContactSection } from './components/ContactSection';
import { Navbar } from './components/Navbar';
import { WorkArtwork } from './components/WorkArtwork';
import { WorkModal } from './components/WorkModal';
import {
  EDUCATION_ITEMS,
  EXPERIENCE_ITEMS,
  INTEREST_ITEMS,
  MARQUEE_ITEMS,
  PRACTICAL_TRAJECTORY_ITEMS,
  SKILL_GROUPS,
  WORK_ITEMS,
  type SkillFocus,
  type WorkCategory,
  type WorkItem,
} from './data/portfolioData';

type FilterOption = 'all' | WorkCategory;
type SkillFilterOption = 'all' | SkillFocus;

const FILTER_OPTIONS: { id: FilterOption; label: string }[] = [
  { id: 'all', label: 'Todas' },
  { id: 'digital', label: 'Digital' },
  { id: 'marca', label: 'Marca' },
];

const SKILL_FILTER_OPTIONS: { id: SkillFilterOption; label: string }[] = [
  { id: 'all', label: 'Todas' },
  { id: 'digital', label: 'Marketing y Web' },
  { id: 'creativo', label: 'Redes y Visual' },
  { id: 'perfil', label: 'Herramientas y Perfil' },
];

export default function App() {
  const [heroImgFailed, setHeroImgFailed] = useState(false);
  const [footerImgFailed, setFooterImgFailed] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<FilterOption>('all');
  const [selectedSkillFilter, setSelectedSkillFilter] =
    useState<SkillFilterOption>('all');
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const [openInterestId, setOpenInterestId] = useState<string | null>(
    INTEREST_ITEMS[0]?.id ?? null,
  );

  const filteredWork =
    selectedFilter === 'all'
      ? WORK_ITEMS
      : WORK_ITEMS.filter((item) => item.category === selectedFilter);

  const filteredSkills =
    selectedSkillFilter === 'all'
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((group) => group.focus === selectedSkillFilter);

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#080808] text-[#f0eee9] selection:bg-[#b5092b] selection:text-[#f0eee9]">
      <Navbar />

      <main id="inicio">
        {/* Hero */}
        <section className="border-b border-[#2c2727]">
          <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
            <div className="grid grid-cols-1 gap-12 py-16 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14">
              {/* Left Column */}
              <div className="flex flex-col justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#b8b2ac]">
                    Pensar bien · Crear con sentido · Hacer que pase
                  </p>

                  <h1 className="mt-6 text-balance text-5xl font-extrabold leading-[0.94] tracking-[-0.04em] text-[#f0eee9] sm:text-6xl md:text-7xl lg:text-[84px]">
                    Ideas que{' '}
                    <span className="text-[#b5092b]">mueven.</span>
                  </h1>

                  <p className="mt-7 max-w-[54ch] text-base leading-relaxed text-[#d4cec8] md:text-lg">
                    Soy Sergio. Trabajo entre el marketing, las marcas y los proyectos digitales para convertir ideas claras en páginas web, contenidos y estrategias comprensibles.
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href="#trabajo"
                    className="inline-flex min-h-[44px] shrink-0 items-center gap-2.5 bg-[#b5092b] px-6 py-3 font-mono text-xs font-medium uppercase tracking-[0.12em] text-[#f0eee9] transition-colors duration-150 hover:bg-[#d10c34]"
                  >
                    <span>Explorar trabajo</span>
                    <ArrowDown className="h-4 w-4" />
                  </a>

                  <a
                    href="#sobre-mi"
                    className="inline-flex min-h-[44px] shrink-0 items-center gap-2 border border-[#2c2727] bg-[#111010] px-6 py-3 font-mono text-xs font-medium uppercase tracking-[0.12em] text-[#f0eee9] transition-colors duration-150 hover:border-[#b5092b]"
                  >
                    <span>Sobre mí</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Floating Tilted ST Emblem over Concentric Rings */}
              <div className="relative flex h-[290px] items-center justify-center md:h-[440px]">
                {/* Concentric geometric hairlines */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute h-[250px] w-[250px] rounded-full border border-[#292324] md:h-[370px] md:w-[370px]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute h-[195px] w-[195px] rounded-full border border-[#292324] md:h-[290px] md:w-[290px]"
                />

                {!heroImgFailed ? (
                  <img
                    src="/src/assets/images/st_logo_emblem_1794856610330.jpg"
                    alt="Emblema gráfico ST de Sergio"
                    width={310}
                    height={310}
                    referrerPolicy="no-referrer"
                    onError={() => setHeroImgFailed(true)}
                    className="relative z-10 h-[205px] w-[205px] -rotate-[7deg] object-contain drop-shadow-[0_20px_60px_rgba(181,9,43,0.18)] transition-transform duration-300 hover:rotate-0 md:h-[310px] md:w-[310px]"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="relative z-10 flex h-[205px] w-[205px] -rotate-[7deg] items-center justify-center border border-[#292324] bg-[#040404] text-6xl font-extrabold text-[#b5092b] drop-shadow-[0_20px_60px_rgba(181,9,43,0.18)] md:h-[310px] md:w-[310px]"
                  >
                    ST
                  </div>
                )}
              </div>
            </div>

            {/* Foundational 4-Cell Strip */}
            <div className="grid grid-cols-1 border-t border-[#2c2727] sm:grid-cols-2 lg:grid-cols-4">
              <div className="border-b border-[#2c2727] py-5 sm:border-r sm:pr-6 lg:border-b-0">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-[#b8b2ac]">
                  Ubicación
                </p>
                <p className="mt-1.5 text-sm font-semibold text-[#f0eee9]">
                  Granada · España
                </p>
              </div>
              <div className="border-b border-[#2c2727] py-5 sm:pl-6 lg:border-r lg:border-b-0 lg:px-6">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-[#b8b2ac]">
                  Titulación
                </p>
                <p className="mt-1.5 text-sm font-semibold text-[#f0eee9]">
                  Marketing y Publicidad
                </p>
              </div>
              <div className="border-b border-[#2c2727] py-5 sm:border-r sm:border-b-0 sm:pr-6 lg:px-6">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-[#b8b2ac]">
                  Base
                </p>
                <p className="mt-1.5 text-sm font-semibold text-[#f0eee9]">
                  Actividades Comerciales
                </p>
              </div>
              <div className="py-5 sm:pl-6">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-[#b8b2ac]">
                  Enfoque
                </p>
                <p className="mt-1.5 text-sm font-semibold text-[#f0eee9]">
                  Web · Marca · Digital
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Marquee Divider */}
        <div className="marquee-wrapper overflow-hidden border-b border-[#2c2727] bg-[#111010] py-4">
          <div className="marquee-track">
            <div className="flex shrink-0 items-center">
              {MARQUEE_ITEMS.map((text) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-6 px-6 font-mono text-xs uppercase tracking-[0.14em] text-[#d4cec8]"
                >
                  <span>{text}</span>
                  <span className="text-[#b5092b]" aria-hidden="true">
                    ✳
                  </span>
                </span>
              ))}
            </div>
            <div className="flex shrink-0 items-center" aria-hidden="true">
              {MARQUEE_ITEMS.map((text) => (
                <span
                  key={`dup-${text}`}
                  className="inline-flex items-center gap-6 px-6 font-mono text-xs uppercase tracking-[0.14em] text-[#d4cec8]"
                >
                  <span>{text}</span>
                  <span className="text-[#b5092b]">✳</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sobre mí */}
        <section id="sobre-mi" className="border-b border-[#2c2727] py-20 md:py-28">
          <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-6">
                <h2 className="text-balance text-3xl font-extrabold leading-tight tracking-tight text-[#f0eee9] md:text-5xl">
                  Criterio práctico para que una idea se entienda y funcione.
                </h2>
              </div>

              <div className="max-w-[65ch] space-y-5 text-base leading-relaxed text-[#d4cec8] lg:col-span-6">
                <p>
                  Soy titulado en{' '}
                  <strong className="font-semibold text-[#f0eee9]">
                    Grado Superior de Marketing y Publicidad
                  </strong>{' '}
                  y me interesa especialmente el mundo del marketing digital, la comunicación y el diseño.
                </p>
                <p>
                  Durante mi formación y mis prácticas he tenido la oportunidad de trabajar con posicionamiento SEO, gestión de páginas web, comercio electrónico y redes sociales, adquiriendo una primera experiencia en el entorno profesional.
                </p>
                <p>
                  Me considero una persona organizada, curiosa y con ganas de aprender. Disfruto explorando nuevas herramientas, desarrollando ideas y buscando formas de mejorar la comunicación y la presencia digital de las marcas.
                </p>
                <p>
                  Actualmente quiero seguir creciendo profesionalmente, ampliar mis conocimientos y participar en proyectos que me permitan combinar creatividad, tecnología y marketing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mi trabajo */}
        <section id="trabajo" className="border-b border-[#2c2727] py-20 md:py-28">
          <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h2 className="text-balance text-3xl font-extrabold tracking-tight text-[#f0eee9] md:text-5xl">
                  Áreas donde aporto valor
                </h2>
              </div>

              {/* Filter Tabs */}
              <div
                role="group"
                aria-label="Filtrar áreas de trabajo"
                className="flex flex-wrap items-center gap-2"
              >
                {FILTER_OPTIONS.map((option) => {
                  const isActive = selectedFilter === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setSelectedFilter(option.id)}
                      className={`min-h-[44px] shrink-0 whitespace-nowrap border px-4 py-2 font-mono text-xs uppercase tracking-[0.1em] transition-colors duration-150 ${
                        isActive
                          ? 'border-[#b5092b] bg-[#b5092b] text-[#f0eee9]'
                          : 'border-[#2c2727] bg-[#111010] text-[#b8b2ac] hover:border-[#f0eee9] hover:text-[#f0eee9]'
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2-Column Work Grid */}
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              {filteredWork.map((item) => (
                <article
                  key={item.id}
                  className="group border border-[#2c2727] bg-[#111010] transition-colors duration-150 hover:border-[#b5092b]"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedWork(item)}
                    className="flex h-full w-full flex-col text-left focus-visible:outline-none"
                  >
                    <WorkArtwork variant={item.artVariant} />

                    <div className="flex flex-1 flex-col justify-between p-6 md:p-7">
                      <div>
                        <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.12em] text-[#b8b2ac]">
                          <span>
                            <span className="tabular-nums text-[#b5092b]">
                              {item.index}
                            </span>{' '}
                            · {item.categoryLabel}
                          </span>
                          <span className="inline-flex items-center gap-1 text-[#f0eee9] transition-colors group-hover:text-[#b5092b]">
                            <span>Ver detalle</span>
                            <ArrowUpRight className="h-4 w-4" />
                          </span>
                        </div>

                        <h3 className="mt-4 text-2xl font-bold tracking-tight text-[#f0eee9]">
                          {item.title}
                        </h3>

                        <p className="mt-2.5 text-sm leading-relaxed text-[#d4cec8]">
                          {item.summary}
                        </p>
                      </div>
                    </div>
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Experiencia práctica */}
        <section
          id="experiencia"
          className="border-b border-[#2c2727] bg-[#111010]/40 py-20 md:py-28"
        >
          <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h2 className="text-balance text-3xl font-extrabold tracking-tight text-[#f0eee9] md:text-4xl">
                  Aprendizaje en entorno real
                </h2>
                <p className="mt-4 max-w-[38ch] text-sm leading-relaxed text-[#b8b2ac]">
                  Experiencia adquirida en periodos de formación práctica y colaboración con equipos profesionales.
                </p>
              </div>

              <div className="divide-y divide-[#2c2727] border-t border-b border-[#2c2727] lg:col-span-8">
                {EXPERIENCE_ITEMS.map((exp) => (
                  <div
                    key={exp.index}
                    className="grid grid-cols-1 gap-4 py-7 sm:grid-cols-[80px_1fr]"
                  >
                    <span className="font-mono text-sm font-medium tabular-nums text-[#b5092b]">
                      {exp.index}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-[#f0eee9]">
                        {exp.title}
                      </h3>
                      <p className="mt-2 max-w-[65ch] text-sm leading-relaxed text-[#d4cec8]">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Formación */}
        <section id="formacion" className="border-b border-[#2c2727] py-20 md:py-28">
          <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
            <h2 className="text-balance text-3xl font-extrabold tracking-tight text-[#f0eee9] md:text-5xl">
              Base académica
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {EDUCATION_ITEMS.map((edu) => (
                <div
                  key={edu.title}
                  className="border border-[#2c2727] bg-[#111010] p-7 md:p-8"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-[#b5092b]">
                    {edu.level}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#f0eee9]">
                    {edu.title}
                  </h3>
                  <p className="mt-3 max-w-[50ch] text-sm leading-relaxed text-[#d4cec8]">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {PRACTICAL_TRAJECTORY_ITEMS.map((item) => (
                <article
                  key={item.company}
                  className="flex flex-col border border-[#2c2727] bg-[#111010] p-7 md:p-8"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-[#b5092b]">
                    {item.role}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#f0eee9]">
                    {item.company}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#d4cec8]">
                    {item.summary}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-[#2c2727] pt-5 text-sm leading-relaxed text-[#d4cec8]">
                    {item.tasks.map((task) => (
                      <li key={task} className="flex items-start gap-2.5">
                        <span
                          className="font-mono text-[#b5092b]"
                          aria-hidden="true"
                        >
                          —
                        </span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Habilidades */}
        <section
          id="habilidades"
          className="border-b border-[#2c2727] bg-[#111010]/40 py-20 md:py-28"
        >
          <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <h2 className="text-balance text-3xl font-extrabold tracking-tight text-[#f0eee9] md:text-5xl">
                  Capacidades y herramientas
                </h2>
              </div>

              <div
                role="group"
                aria-label="Filtrar habilidades"
                className="flex flex-wrap items-center gap-2"
              >
                {SKILL_FILTER_OPTIONS.map((option) => {
                  const isActive = selectedSkillFilter === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setSelectedSkillFilter(option.id)}
                      className={`min-h-[44px] shrink-0 whitespace-nowrap border px-4 py-2 font-mono text-xs uppercase tracking-[0.1em] transition-colors duration-150 ${
                        isActive
                          ? 'border-[#b5092b] bg-[#b5092b] text-[#f0eee9]'
                          : 'border-[#2c2727] bg-[#111010] text-[#b8b2ac] hover:border-[#f0eee9] hover:text-[#f0eee9]'
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredSkills.map((group) => (
                <article
                  key={group.id}
                  className="flex flex-col border border-[#2c2727] bg-[#080808] p-6 md:p-7"
                >
                  <div className="flex items-baseline justify-between border-b border-[#2c2727] pb-4">
                    <h3 className="text-xl font-bold tracking-tight text-[#f0eee9]">
                      {group.title}
                    </h3>
                    <span className="font-mono text-xs font-medium tabular-nums text-[#b5092b]">
                      {group.index}
                    </span>
                  </div>

                  <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-[#d4cec8]">
                    {group.items.map((skill) => (
                      <li key={skill} className="flex items-start gap-2.5">
                        <span
                          className="font-mono text-[#b5092b]"
                          aria-hidden="true"
                        >
                          —
                        </span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Lo que me interesa (Expandable Rows) */}
        <section id="intereses" className="py-20 md:py-28">
          <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
            <h2 className="text-balance text-3xl font-extrabold tracking-tight text-[#f0eee9] md:text-5xl">
              Líneas en las que sigo profundizando
            </h2>

            <div className="mt-10 divide-y divide-[#2c2727] border-t border-b border-[#2c2727]">
              {INTEREST_ITEMS.map((interest) => {
                const isOpen = openInterestId === interest.id;
                const panelId = `${interest.id}-panel`;
                return (
                  <div key={interest.id}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() =>
                        setOpenInterestId((prev) =>
                          prev === interest.id ? null : interest.id,
                        )
                      }
                      className="flex min-h-[68px] w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-[#b5092b]"
                    >
                      <div className="grid flex-1 grid-cols-1 gap-2 md:grid-cols-[80px_1fr_1fr] md:items-baseline md:gap-6">
                        <span className="font-mono text-xs tabular-nums text-[#b5092b]">
                          {interest.index}
                        </span>
                        <span className="text-xl font-bold tracking-tight text-[#f0eee9]">
                          {interest.title}
                        </span>
                        <span className="text-sm text-[#b8b2ac]">
                          {interest.shortDescription}
                        </span>
                      </div>

                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-[#2c2727] text-[#f0eee9]">
                        {isOpen ? (
                          <Minus className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        id={panelId}
                        className="pb-7 md:pl-[104px]"
                      >
                        <p className="max-w-[65ch] text-sm leading-relaxed text-[#d4cec8]">
                          {interest.detail}
                        </p>
                        <p className="mt-4 font-mono text-xs uppercase tracking-[0.1em] text-[#b8b2ac]">
                          {interest.focusPoints.join(' · ')}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 06. Contacto */}
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-[#2c2727] bg-[#080808] py-10 text-[#b8b2ac]">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center md:px-10">
          <div className="flex items-center gap-3">
            {!footerImgFailed ? (
              <img
                src="/src/assets/images/st_logo_emblem_1794856610330.jpg"
                alt=""
                width={24}
                height={24}
                referrerPolicy="no-referrer"
                onError={() => setFooterImgFailed(true)}
                className="h-6 w-6 object-contain mix-blend-lighten"
              />
            ) : (
              <span
                aria-hidden="true"
                className="inline-flex h-6 w-6 items-center justify-center border border-[#b5092b] text-xs font-extrabold text-[#b5092b]"
              >
                ST
              </span>
            )}
            <span className="text-sm font-extrabold tracking-[0.18em] text-[#f0eee9]">
              SERGIO
            </span>
            <span className="hidden font-mono text-xs uppercase tracking-[0.1em] text-[#b8b2ac] sm:inline">
              · Marketing · Marcas · Proyectos
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-mono text-xs uppercase tracking-[0.1em]">
            <span>© {currentYear} Sergio · Granada, España</span>
            <a
              href="#inicio"
              className="inline-flex items-center gap-1.5 text-[#f0eee9] transition-colors hover:text-[#b5092b]"
            >
              <span>Volver arriba</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </footer>

      <WorkModal item={selectedWork} onClose={() => setSelectedWork(null)} />
    </div>
  );
}
