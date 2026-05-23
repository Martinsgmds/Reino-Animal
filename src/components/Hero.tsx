import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react'

export function Hero() {
    return (
        <section id="inicio" className="relative overflow-hidden bg-hero-radial">
            <div className="absolute inset-0 -z-0 opacity-40">
                <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-ocean-200/50 blur-3xl" />
                <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-sage-200/50 blur-3xl" />
            </div>

            <div className="container-shell section-padding relative z-10 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="max-w-2xl"
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-ocean-100 bg-white px-4 py-2 text-sm font-semibold text-ocean-700 shadow-sm">
                        <Sparkles className="h-4 w-4" />
                        Cuidado premium para cães e gatos
                    </span>

                    <h1 className="mt-6 font-display text-4xl leading-tight text-slate-950 sm:text-5xl lg:text-7xl">
                        Cuidando do seu melhor amigo com amor e dedicação
                    </h1>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
                        A Reino Animal entrega uma experiência acolhedora, profissional e moderna para tutores que buscam
                        confiança, segurança e atendimento humanizado em cada visita.
                    </p>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                        <a
                            href="https://wa.me/5511998765432?text=Olá!%20Quero%20agendar%20um%20atendimento%20na%20Reino%20Animal."
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-3 rounded-full bg-ocean-600 px-6 py-4 text-sm font-bold text-white shadow-glow transition-transform duration-300 hover:-translate-y-0.5 hover:bg-ocean-700 focus-ring"
                        >
                            Agendar Atendimento
                            <ArrowRight className="h-4 w-4" />
                        </a>
                        <a
                            href="#servicos"
                            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-4 text-sm font-bold text-slate-700 shadow-sm transition hover:border-ocean-200 hover:text-ocean-700 focus-ring"
                        >
                            Conhecer serviços
                        </a>
                    </div>

                    <div className="mt-10 grid gap-4 sm:grid-cols-3">
                        {[
                            { icon: HeartHandshake, title: 'Atendimento próximo', text: 'Orientação clara e acolhedora' },
                            { icon: ShieldCheck, title: 'Estrutura segura', text: 'Ambiente pensado para o bem-estar' },
                            { icon: Sparkles, title: 'Experiência premium', text: 'Fluxo moderno e visual refinado' },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.15 * index }}
                                className="glass-panel rounded-3xl p-5 shadow-soft"
                            >
                                <item.icon className="h-5 w-5 text-ocean-600" />
                                <p className="mt-3 text-sm font-bold text-slate-900">{item.title}</p>
                                <p className="mt-1 text-sm text-slate-600">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24, scale: 0.98 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="relative"
                >
                    <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-white/70 blur-2xl" />
                    <div className="absolute -bottom-6 right-10 h-28 w-28 rounded-full bg-sage-200/60 blur-3xl" />

                    <div className="glass-panel relative overflow-hidden rounded-[2rem] p-3 shadow-soft">
                        <img
                            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1400&q=80"
                            alt="Veterinária acolhendo um cachorro com carinho"
                            className="h-[520px] w-full rounded-[1.5rem] object-cover"
                        />

                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute left-4 top-4 w-fit rounded-3xl bg-white/90 px-4 py-3 shadow-soft backdrop-blur"
                        >
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-ocean-600">Atendimento premium</p>
                            <p className="mt-1 text-sm text-slate-700">Cuidado, tecnologia e carinho em um só lugar.</p>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute bottom-4 right-4 rounded-3xl bg-slate-950/90 px-5 py-4 text-white shadow-soft"
                        >
                            <p className="text-xs uppercase tracking-[0.2em] text-sage-300">Atendimento humanizado</p>
                            <p className="mt-1 text-lg font-bold">Seu pet em boas mãos</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
