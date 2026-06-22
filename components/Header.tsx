'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const NAV_LINKS = [
  { href: '#nosotros', label: 'Nosotros',   id: 'nosotros' },
  { href: '#catalogo', label: 'Catálogo',   id: 'catalogo' },
  { href: '#pedidos',  label: 'Cómo Pedir', id: 'pedidos'  },
  { href: '#horarios', label: 'Horarios',   id: 'horarios' },
  { href: '#contacto', label: 'Contacto',   id: 'contacto' },
]

const WA_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'

const WAIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d={WA_PATH} />
  </svg>
)

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [activeId,  setActiveId]  = useState('')
  const headerRef = useRef<HTMLElement>(null)
  const pathname  = usePathname()
  const isHome    = pathname === '/'

  // Header background on scroll
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handle, { passive: true })
    return () => window.removeEventListener('scroll', handle)
  }, [])

  // Active section detection
  useEffect(() => {
    const sections = NAV_LINKS
      .map(l => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-20% 0px -75% 0px' }
    )

    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Close mobile menu on outside click
  useEffect(() => {
    if (!menuOpen) return
    const handle = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handle)
    return () => document.removeEventListener('mousedown', handle)
  }, [menuOpen])

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-wood-900/97 backdrop-blur-md shadow-xl shadow-wood-950/30'
          : 'bg-transparent'
      }`}
    >
      <nav aria-label="Navegación principal" className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="El Mercadito"
            width={48}
            height={48}
            className="object-contain transition-transform duration-500 group-hover:rotate-3"
          />
          <div className="leading-none">
            <span className="block font-playfair text-cream-100 text-lg font-bold tracking-wide">
              El Mercadito
            </span>
            <span className="block font-lato text-cream-600 text-[10px] tracking-[0.22em] uppercase">
              Carnicería · Carabanchel
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={isHome ? link.href : `/${link.href}`}
                className={`nav-link font-lato text-xs tracking-widest uppercase transition-colors duration-300 ${
                  activeId === link.id
                    ? 'text-cream-100 active'
                    : 'text-cream-400 hover:text-cream-100'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* WhatsApp CTA desktop */}
        <a
          href="https://wa.me/34675628688"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white font-lato text-xs font-bold tracking-widest uppercase hover:bg-[#1da851] transition-colors duration-300"
        >
          <WAIcon />
          Pedir Hoy
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-cream-100 p-2"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-6 h-6 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{ transform: menuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu — smooth slide-down via maxHeight */}
      <div
        id="mobile-menu"
        className="md:hidden overflow-hidden bg-wood-900/98 backdrop-blur-md border-t border-wood-700/40"
        style={{
          maxHeight: menuOpen ? '420px' : '0',
          opacity:   menuOpen ? 1 : 0,
          transition: 'max-height 0.32s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease',
        }}
      >
        <ul className="flex flex-col py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={isHome ? link.href : `/${link.href}`}
                onClick={() => setMenuOpen(false)}
                className={`block px-6 py-3.5 font-lato text-sm tracking-widest uppercase transition-colors duration-200 border-l-2 ${
                  activeId === link.id
                    ? 'text-cream-100 bg-wood-800/60 border-wood-400'
                    : 'text-cream-400 hover:text-cream-100 hover:bg-wood-800/40 border-transparent'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="px-6 pt-3">
            <a
              href="https://wa.me/34675628688"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3.5 bg-[#25D366] text-white font-lato text-sm font-bold tracking-widest uppercase hover:bg-[#1da851] transition-colors"
            >
              <WAIcon />
              Pedir por WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
