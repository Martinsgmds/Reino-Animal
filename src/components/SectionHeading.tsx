import { motion } from 'framer-motion'

type SectionHeadingProps = {
    eyebrow: string
    title: string
    description: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mx-auto max-w-3xl text-center"
        >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-ocean-600">{eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-slate-900 sm:text-4xl lg:text-5xl">{title}</h2>
            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
        </motion.div>
    )
}
