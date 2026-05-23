import { motion } from 'framer-motion'
import { gallery } from '../data/siteData'
import { SectionHeading } from './SectionHeading'

export function Gallery() {
    return (
        <section className="section-padding bg-white/70">
            <div className="container-shell">
                <SectionHeading
                    eyebrow="Galeria"
                    title="Imagens que transmitem cuidado e proximidade"
                    description="O grid responsivo organiza fotos grandes com hover elegante, reforçando a sensação de um serviço premium e acolhedor."
                />

                <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {gallery.map((item, index) => (
                        <motion.figure
                            key={item.src}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.55, delay: index * 0.05 }}
                            className="group relative overflow-hidden rounded-[1.8rem] shadow-soft"
                        >
                            <img
                                src={item.src}
                                alt={item.alt}
                                loading="lazy"
                                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent opacity-100 transition duration-300 group-hover:from-slate-950/20" />
                        </motion.figure>
                    ))}
                </div>
            </div>
        </section>
    )
}
