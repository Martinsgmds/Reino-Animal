import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { aboutParagraphs, clinicFeatures, clinicHighlights } from '../data/siteData'
import { SectionHeading } from './SectionHeading'

export function About() {
    return (
        <section id="sobre" className="section-padding">
            <div className="container-shell">
                <SectionHeading
                    eyebrow="Sobre a clínica"
                    title="Estrutura pensada para acolher, orientar e cuidar"
                    description="A Reino Animal combina atendimento próximo, ambiente agradável e processos modernos para entregar mais tranquilidade a cada tutor."
                />

                <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="glass-panel rounded-[2rem] p-8 shadow-soft"
                    >
                        <span className="inline-flex items-center gap-2 rounded-full bg-ocean-50 px-4 py-2 text-sm font-semibold text-ocean-700">
                            <Sparkles className="h-4 w-4" />
                            Missão e valores
                        </span>

                        <div className="mt-6 space-y-4 text-slate-600">
                            {aboutParagraphs.map((paragraph) => (
                                <p key={paragraph} className="text-base leading-8">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                            {clinicHighlights.map((item) => (
                                <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {clinicFeatures.map((feature, index) => (
                            <motion.article
                                key={feature.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{ duration: 0.55, delay: index * 0.08 }}
                                className="group rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ocean-50 text-ocean-700 transition group-hover:bg-ocean-600 group-hover:text-white">
                                    <feature.icon className="h-5 w-5" />
                                </div>
                                <h3 className="mt-5 text-xl font-bold text-slate-900">{feature.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
