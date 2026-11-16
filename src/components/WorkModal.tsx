import { useEffect } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import type { WorkItem } from '../data/portfolioData';
import { WorkArtwork } from './WorkArtwork';

interface WorkModalProps {
  item: WorkItem | null;
  onClose: () => void;
}

export function WorkModal({ item, onClose }: WorkModalProps) {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="work-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#080808]/90 p-4 backdrop-blur-sm md:p-8"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-[#2c2727] bg-[#111010] text-[#f0eee9]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#2c2727] px-6 py-4">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.12em] text-[#b8b2ac]">
            <span className="tabular-nums text-[#b5092b]">{item.index}</span>
            <span aria-hidden="true">·</span>
            <span>{item.categoryLabel}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar detalle"
            className="inline-flex h-11 w-11 items-center justify-center border border-[#2c2727] text-[#f0eee9] transition-colors hover:border-[#b5092b] hover:bg-[#b5092b]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <WorkArtwork variant={item.artVariant} />

        <div className="space-y-6 p-6 md:p-8">
          <div>
            <h3
              id="work-modal-title"
              className="text-2xl font-bold tracking-tight text-[#f0eee9] md:text-3xl"
            >
              {item.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-[#d4cec8]">
              {item.summary}
            </p>
          </div>

          <div className="border-t border-[#2c2727] pt-5">
            <h4 className="font-mono text-xs uppercase tracking-[0.12em] text-[#b8b2ac]">
              Cómo lo abordo
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-[#b8b2ac]">
              {item.approach}
            </p>
          </div>

          <div className="border-t border-[#2c2727] pt-5">
            <h4 className="font-mono text-xs uppercase tracking-[0.12em] text-[#b8b2ac]">
              Qué incluye
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-[#f0eee9]">
              {item.deliverables.map((deliverable) => (
                <li key={deliverable} className="flex items-start gap-3">
                  <span className="font-mono text-[#b5092b]" aria-hidden="true">
                    —
                  </span>
                  <span>{deliverable}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#2c2727] pt-6">
            <button
              type="button"
              onClick={onClose}
              className="min-h-[44px] border border-[#2c2727] px-5 py-2.5 font-mono text-xs uppercase tracking-[0.1em] text-[#d4cec8] transition-colors hover:border-[#f0eee9] hover:text-[#f0eee9]"
            >
              Volver al portfolio
            </button>
            <a
              href="#contacto"
              onClick={onClose}
              className="inline-flex min-h-[44px] items-center gap-2 bg-[#b5092b] px-5 py-2.5 font-mono text-xs uppercase tracking-[0.1em] text-[#f0eee9] transition-colors hover:bg-[#d10c34]"
            >
              <span>Comentar un proyecto</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
