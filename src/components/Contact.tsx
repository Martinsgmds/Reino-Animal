import { motion } from 'framer-motion'
import { MapPin, MessageCircle, Phone, Mail, Clock3, Navigation } from 'lucide-react'
import { contactDetails } from '../data/siteData'
import { SectionHeading } from './SectionHeading'

export function Contact() {
    return (
        <section id="contato" className="section-padding scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36">
            <div className="container-shell">
                <SectionHeading
                    eyebrow="Contato"
                    title="Fale com a Reino Animal"
                    description="Informações organizadas para facilitar o contato, o acesso à clínica e o agendamento pelo canal preferido do tutor."
                />

                <div className="mt-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="glass-panel rounded-[2rem] p-8 shadow-soft"
                    >
                        <div className="grid gap-4">
                            {contactDetails.map((item) => (
                                <div key={item.label} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-ocean-50 text-ocean-700">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
                                        <p className="mt-1 text-sm font-semibold text-slate-800">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                            <a
                                href="https://wa.me/5567999201818?text=Olá!%20Quero%20agendar%20um%20atendimento%20na%20Reino%20Animal."
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-sage-500 px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:bg-sage-600 focus-ring"
                            >
                                <MessageCircle className="h-4 w-4" />
                                Abrir WhatsApp
                            </a>
                            <a
                                href="https://maps.google.com/?q=R.%20Monte%20Alegre%2C%204700%20-%20Jardim%20Ouro%20Verde%2C%20Dourados%20-%20MS%2C%2079830-070"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm transition hover:border-ocean-200 hover:text-ocean-700 focus-ring"
                            >
                                <Navigation className="h-4 w-4" />
                                Ver no mapa
                            </a>
                        </div>
                    </motion.div>

                    <div className="grid gap-4">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                            className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft"
                        >
                            <iframe
                                title="Mapa da Clínica Reino Animal"
                                src="https://www.google.com/maps?q=R.%20Monte%20Alegre%2C%204700%20-%20Jardim%20Ouro%20Verde%2C%20Dourados%20-%20MS%2C%2079830-070&output=embed"
                                className="h-[360px] w-full border-0"
                                loading="lazy"
                            />
                        </motion.div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {[
                                { title: 'Telefone', text: '(67) 99920-1818', icon: Phone },
                                { title: 'Email', text: 'contato@reinoanimal.com.br', icon: Mail },
                                { title: 'Horário', text: 'Segunda a sábado, 8h às 20h', icon: Clock3 },
                                { title: 'Endereço', text: 'R. Monte Alegre, 4700 - Jardim Ouro Verde, Dourados - MS, 79830-070', icon: MapPin },
                            ].map((item) => (
                                <div key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ocean-50 text-ocean-700">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <p className="mt-4 text-sm font-bold text-slate-900">{item.title}</p>
                                    <p className="mt-1 text-sm text-slate-600">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
