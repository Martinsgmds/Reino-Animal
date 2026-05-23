import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, MessageCircleHeart } from 'lucide-react'
import { navigationLinks } from '../data/siteData'

export function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 border-b border-white/60 bg-white/75 backdrop-blur-xl">
            <div className="container-shell flex items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
                <a href="#inicio" className="group flex items-center gap-3 focus-ring">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-ocean-500 text-white shadow-glow transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                        <MessageCircleHeart className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-lg font-extrabold text-slate-900">Reino Animal</p>
                        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Clínica Veterinária</p>
                    </div>
                </a>

                <nav className="hidden items-center gap-8 lg:flex">
                    {navigationLinks.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm font-semibold text-slate-600 transition-colors hover:text-ocean-700 focus-ring"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden lg:block">
                    <a
                        href="https://wa.me/5567999201818?text=Olá!%20Quero%20agendar%20um%20atendimento%20na%20Reino%20Animal."
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-sage-500 px-5 py-3 text-sm font-bold text-white shadow-soft transition-transform duration-300 hover:-translate-y-0.5 hover:bg-sage-600 focus-ring"
                    >
                        Agendar pelo WhatsApp
                    </a>
                </div>

                <button
                    type="button"
                    onClick={() => setIsOpen((value) => !value)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-ocean-200 hover:text-ocean-700 lg:hidden focus-ring"
                    aria-label="Abrir menu"
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            <motion.div
                initial={false}
                animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden border-t border-white/60 bg-white/90 lg:hidden"
            >
                <div className="container-shell flex flex-col gap-4 px-4 py-4 sm:px-6">
                    {navigationLinks.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-ocean-50 hover:text-ocean-700 focus-ring"
                        >
                            {item.label}
                        </a>
                    ))}
                    <a
                        href="https://wa.me/5567999201818?text=Olá!%20Quero%20agendar%20um%20atendimento%20na%20Reino%20Animal."
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sage-500 px-4 py-3 text-sm font-bold text-white shadow-soft"
                    >
                        Agendar pelo WhatsApp
                    </a>
                </div>
            </motion.div>
        </header>
    )
}
