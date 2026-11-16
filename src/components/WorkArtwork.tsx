import { useState } from 'react';
import type { WorkItem } from '../data/portfolioData';

interface WorkArtworkProps {
  variant: WorkItem['artVariant'];
}

export function WorkArtwork({ variant }: WorkArtworkProps) {
  const [imgFailed, setImgFailed] = useState(false);

  if (variant === 'browser') {
    return (
      <div className="flex h-52 w-full items-center justify-center bg-[#171313] p-6">
        <div className="w-full max-w-[300px] -rotate-2 border border-[#5e5456] bg-[#090909] shadow-[10px_10px_0_#b5092b] transition-transform duration-200 group-hover:rotate-0">
          <div className="flex h-4 items-center gap-1.5 border-b border-[#3a3234] px-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b5092b]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#6d6465]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#6d6465]" />
          </div>
          <div className="grid grid-cols-[1fr_auto] items-center gap-4 p-4">
            <div>
              <p className="m-0 text-lg font-extrabold leading-[0.95] tracking-tight text-[#f0eee9]">
                UNA MARCA.
                <br />
                UNA IDEA.
              </p>
              <p className="mt-2.5 mb-0 font-mono text-[11px] uppercase tracking-[0.08em] text-[#b8b2ac]">
                Diseño · Mensaje · Web
              </p>
            </div>
            {!imgFailed ? (
              <img
                src="/src/assets/images/st_logo_emblem_1794856610330.jpg"
                alt="Símbolo de identidad ST"
                width={52}
                height={52}
                referrerPolicy="no-referrer"
                onError={() => setImgFailed(true)}
                className="h-13 w-13 object-contain mix-blend-lighten"
              />
            ) : (
              <div
                aria-hidden="true"
                className="flex h-13 w-13 items-center justify-center border border-[#b5092b] font-extrabold text-[#b5092b]"
              >
                ST
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'social') {
    return (
      <div className="flex h-52 w-full items-center justify-center bg-[#eeeae3] p-6 text-[#111010]">
        <div className="flex items-center gap-4">
          <div className="flex h-32 w-26 flex-col justify-between bg-white p-3 text-[#111010] shadow-[7px_7px_0_#b5092b] transition-transform duration-200 group-hover:-translate-y-1">
            <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-[#555]">
              Comunicación
            </span>
            <p className="m-0 text-sm font-extrabold leading-tight tracking-tight">
              Una idea que se recuerda.
            </p>
          </div>
          <div className="flex h-32 w-26 -translate-y-2 rotate-3 flex-col justify-between bg-[#b5092b] p-3 text-[#f0eee9] shadow-[7px_7px_0_#111010] transition-transform duration-200 group-hover:rotate-0">
            <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-[#f0eee9]">
              Contenido
            </span>
            <p className="m-0 text-sm font-extrabold leading-tight tracking-tight">
              Tu marca también habla.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'content') {
    return (
      <div className="flex h-52 w-full items-center justify-center bg-[#1b1718] p-6">
        <div className="grid w-full max-w-[320px] grid-cols-2 gap-3">
          <div className="flex h-28 flex-col justify-between border border-[#5a4c50] bg-[#111010] p-3.5 transition-colors duration-200 group-hover:border-[#b5092b]">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#c7b8ba]">
              Identidad · 01
            </span>
            <p className="m-0 text-sm font-bold leading-snug tracking-tight text-[#f0eee9]">
              Una imagen con sentido.
            </p>
          </div>
          <div className="flex h-28 flex-col justify-between border border-[#5a4c50] bg-[#111010] p-3.5 transition-colors duration-200 group-hover:border-[#b5092b]">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#c7b8ba]">
              Mensaje · 02
            </span>
            <p className="m-0 text-sm font-bold leading-snug tracking-tight text-[#f0eee9]">
              Comunicar con claridad.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-52 w-full items-center justify-center bg-[#b5092b] p-6">
      <div className="flex w-full max-w-[320px] items-center justify-center gap-2">
        <span className="border border-[#f0eee9]/80 bg-[#080808]/15 px-3 py-2 font-mono text-xs font-medium tracking-[0.08em] text-[#f0eee9]">
          IDEA
        </span>
        <span className="h-px w-4 bg-[#f0eee9]" aria-hidden="true" />
        <span className="border border-[#f0eee9]/80 bg-[#080808]/15 px-3 py-2 font-mono text-xs font-medium tracking-[0.08em] text-[#f0eee9]">
          PLAN
        </span>
        <span className="h-px w-4 bg-[#f0eee9]" aria-hidden="true" />
        <span className="border border-[#f0eee9] bg-[#080808] px-3 py-2 font-mono text-xs font-medium tracking-[0.08em] text-[#f0eee9]">
          ACCIÓN
        </span>
      </div>
    </div>
  );
}
