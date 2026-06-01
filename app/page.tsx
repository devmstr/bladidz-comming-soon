import Image from 'next/image'
import Countdown from '@/components/Countdown'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#011a14] text-white flex flex-col">
      {/* Nav */}
      <nav className="flex flex-col sm:flex-row items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Bladidz.com logo"
            width={36}
            height={36}
            priority
          />
          <span className="text-lg font-semibold tracking-wide">
            Bladidz.com
          </span>
        </div>
        <a
          href="mailto:contact@bladidz.com"
          className="text-sm pl-6 md:pl-0 text-nowrap text-white hover:text-[#a6e39d] transition-colors"
        >
          Contactez-nous ! contact@bladidz.com
        </a>
      </nav>

      {/* Hero */}
      <section className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-7xl w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-16">
              Bientôt
              <br />
              Disponible
            </h1>
            <Countdown target="2026-07-05T00:00:00" />
          </div>

          {/* Right */}
          <div className="text-white text-base md:text-lg leading-relaxed max-w-sm space-y-4">
            <p>
              <span className="text-[#a6e39d] font-semibold">Bladidz.com</span>{' '}
              est l&apos;écosystème complet du retour pour les membres de la
              diaspora algérienne prêts à rentrer au pays.
            </p>
            <p>
              Nous connectons les candidats qualifiés avec des entreprises
              locales, institutions, banques, avocats et partenaires immobiliers
              — bien au-delà d&apos;une simple bourse d&apos;emploi, avec un
              matching sponsorisé, des plans d&apos;accès, un workflow de
              parrainage structuré, un forum communautaire et une gouvernance
              complète.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
