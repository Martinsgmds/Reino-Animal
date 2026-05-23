import { MessageCircle } from 'lucide-react'
import { navigationLinks, socialLinks } from '../data/siteData'

export function Footer() {
    return (
        <footer className="border-t border-white/60 bg-slate-950 text-white">
            <div className="container-shell section-padding">
                <div className="grid gap-10 lg:grid-cols-[1fr_auto_auto] lg:items-start">
                    <div className="max-w-md">
                        <p className="text-2xl font-extrabold">Reino Animal</p>
                        <p className="mt-4 text-sm leading-7 text-slate-300">
                            Clínica veterinária moderna, acolhedora e preparada para oferecer um atendimento confiável, visualmente
                            refinado e pensado para a melhor experiência do tutor.
                        </p>
                    </div>

                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Links rápidos</p>
                        <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
                            {navigationLinks.map((item) => (
                                <a key={item.href} href={item.href} className="transition hover:text-white">
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Redes sociais</p>
                        <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
                            {socialLinks.map((item) => (
                                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-white">
                                    <item.icon className="h-4 w-4" />
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                    <p>© 2026 Reino Animal. Todos os direitos reservados.</p>
                    <a
                        href="https://wa.me/5511998765432?text=Olá!%20Quero%20agendar%20um%20atendimento%20na%20Reino%20Animal."
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 font-semibold text-sage-300 transition hover:text-white"
                    >
                        <MessageCircle className="h-4 w-4" />
                        Falar com a clínica
                    </a>
                </div>
            </div>
        </footer>
    )
}
