import { motion } from 'framer-motion'
import { services } from '../data/siteData'
import { SectionHeading } from './SectionHeading'

export function Services() {
    return (
        <section id="servicos" className="section-padding scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-white/70">
            <div className="container-shell">
                <SectionHeading
                    eyebrow="Serviços"
                    title="Atendimento completo para cada etapa da saúde do pet"
                    description="Do preventivo ao emergencial, a clínica reúne soluções modernas com uma apresentação visual clara e elegante."
                />

                <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.article
                            key={service.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.55, delay: index * 0.06 }}
                            className="group rounded-[1.8rem] border border-slate-200 bg-gradient-to-br from-white to-ocean-50/60 p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow"
                        >
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-ocean-600 shadow-sm transition duration-300 group-hover:scale-105 group-hover:bg-ocean-600 group-hover:text-white">
                                <service.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mt-5 text-xl font-bold text-slate-900">{service.title}</h3>
                            <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}
