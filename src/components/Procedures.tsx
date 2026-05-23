import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { procedureCategories, procedures } from '../data/siteData'
import { SectionHeading } from './SectionHeading'

export function Procedures() {
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('Todas')

    const filteredProcedures = procedures.filter((procedure) => {
        const matchesSearch =
            procedure.name.toLowerCase().includes(search.toLowerCase()) ||
            procedure.description.toLowerCase().includes(search.toLowerCase())
        const matchesCategory = category === 'Todas' || procedure.category === category

        return matchesSearch && matchesCategory
    })

    return (
        <section id="procedimentos" className="section-padding">
            <div className="container-shell">
                <SectionHeading
                    eyebrow="Procedimentos e valores"
                    title="Encontre rapidamente o procedimento ideal"
                    description="A interface foi pensada para facilitar filtros, buscas e futuras atualizações sem complicar a manutenção."
                />

                <div className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft sm:p-6">
                    <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
                        <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm focus-within:border-ocean-300">
                            <Search className="h-5 w-5 text-slate-400" />
                            <input
                                type="search"
                                value={search}
                                onChange={(event) => setSearch(event.target.value)}
                                placeholder="Buscar procedimento, exame ou serviço"
                                className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                            />
                        </label>

                        <div className="flex flex-wrap gap-2">
                            {procedureCategories.map((item) => {
                                const isActive = item === category

                                return (
                                    <button
                                        key={item}
                                        type="button"
                                        onClick={() => setCategory(item)}
                                        className={`rounded-full px-4 py-2 text-sm font-semibold transition focus-ring ${isActive
                                                ? 'bg-ocean-600 text-white shadow-glow'
                                                : 'bg-ocean-50 text-ocean-700 hover:bg-ocean-100'
                                            }`}
                                    >
                                        {item}
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-slate-200">
                        <div className="hidden grid-cols-[1.2fr_1.5fr_0.6fr] gap-4 border-b border-slate-200 bg-slate-50 px-5 py-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-500 md:grid">
                            <span>Procedimento</span>
                            <span>Descrição</span>
                            <span>Valor</span>
                        </div>

                        <div className="grid gap-3 bg-white p-4 md:p-5">
                            {filteredProcedures.length > 0 ? (
                                filteredProcedures.map((procedure, index) => (
                                    <motion.article
                                        key={procedure.name}
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{ duration: 0.35, delay: index * 0.04 }}
                                        className="grid gap-4 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-ocean-50/70 p-5 md:grid-cols-[1.2fr_1.5fr_0.6fr] md:items-center"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-ocean-600 shadow-sm">
                                                <procedure.icon className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <p className="text-base font-bold text-slate-900">{procedure.name}</p>
                                                <p className="mt-1 text-sm text-slate-500 md:hidden">{procedure.value}</p>
                                            </div>
                                        </div>
                                        <p className="text-sm leading-7 text-slate-600">{procedure.description}</p>
                                        <div className="hidden md:block">
                                            <span className="inline-flex rounded-full bg-sage-50 px-4 py-2 text-sm font-bold text-sage-700">
                                                {procedure.value}
                                            </span>
                                        </div>
                                    </motion.article>
                                ))
                            ) : (
                                <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center text-slate-500">
                                    Nenhum procedimento encontrado com os filtros atuais.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
