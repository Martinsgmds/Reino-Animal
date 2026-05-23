import {
    Activity,
    BadgeDollarSign,
    Bath,
    HeartPulse,
    ShieldCheck,
    Syringe,
    Scissors,
    Stethoscope,
    TestTube2,
    ThermometerSun,
    Sparkles,
    Phone,
    Mail,
    MapPin,
    Clock3,
    MessageCircle,
} from 'lucide-react'

export const navigationLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Procedimentos', href: '#procedimentos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
]

export const clinicHighlights = [
    'Atendimento humanizado',
    'Equipe especializada',
    'Ambiente seguro',
    'Agilidade e acolhimento',
]

export const clinicFeatures = [
    {
        title: 'Atendimento humanizado',
        description: 'Cada consulta é conduzida com escuta ativa, carinho e orientação clara para o tutor.',
        icon: HeartPulse,
    },
    {
        title: 'Equipe especializada',
        description: 'Profissionais preparados para cuidar de cães, gatos e pets com necessidades específicas.',
        icon: Stethoscope,
    },
    {
        title: 'Ambiente seguro',
        description: 'Estrutura organizada, higienizada e pensada para reduzir o estresse dos animais.',
        icon: ShieldCheck,
    },
    {
        title: 'Atendimento rápido',
        description: 'Fluxo otimizado para acolher, avaliar e encaminhar cada caso com eficiência.',
        icon: Sparkles,
    },
]

export const services = [
    {
        title: 'Consultas veterinárias',
        description: 'Avaliações completas para prevenção, diagnóstico e acompanhamento da saúde do pet.',
        icon: Stethoscope,
    },
    {
        title: 'Vacinação',
        description: 'Protocolos vacinais seguros para manter cães e gatos protegidos o ano todo.',
        icon: Syringe,
    },
    {
        title: 'Banho e tosa',
        description: 'Cuidados estéticos e de higiene com atenção ao conforto e bem-estar do animal.',
        icon: Bath,
    },
    {
        title: 'Cirurgias',
        description: 'Procedimentos com avaliação prévia, estrutura adequada e monitoramento responsável.',
        icon: Scissors,
    },
    {
        title: 'Exames laboratoriais',
        description: 'Resultados que auxiliam em diagnósticos rápidos, precisos e mais seguros.',
        icon: TestTube2,
    },
    {
        title: 'Atendimento emergencial',
        description: 'Suporte imediato para situações urgentes que exigem resposta ágil e precisa.',
        icon: ThermometerSun,
    },
]

export const procedures = [
    {
        name: 'Consulta veterinária',
        description: 'Avaliação clínica geral com orientação preventiva e diagnóstico inicial.',
        value: 'A partir de R$ 120',
        category: 'Consulta',
        icon: Stethoscope,
    },
    {
        name: 'Vacinas',
        description: 'Aplicação conforme espécie, idade e calendário vacinal do paciente.',
        value: 'A partir de R$ 85',
        category: 'Prevenção',
        icon: Syringe,
    },
    {
        name: 'Castração',
        description: 'Procedimento cirúrgico com avaliação pré-operatória e recuperação assistida.',
        value: 'A partir de R$ 480',
        category: 'Cirurgia',
        icon: Scissors,
    },
    {
        name: 'Exames laboratoriais',
        description: 'Hemograma, bioquímica e exames complementares para investigação clínica.',
        value: 'A partir de R$ 95',
        category: 'Exame',
        icon: TestTube2,
    },
    {
        name: 'Limpeza dentária',
        description: 'Higienização odontológica para manutenção da saúde bucal do pet.',
        value: 'A partir de R$ 260',
        category: 'Odontologia',
        icon: Sparkles,
    },
    {
        name: 'Atendimento emergencial',
        description: 'Triagem e suporte imediato em situações que exigem resposta rápida.',
        value: 'Sob avaliação',
        category: 'Emergência',
        icon: Activity,
    },
]

export const gallery = [
    {
        src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80',
        alt: 'Cachorro feliz com expressão acolhedora',
    },
    {
        src: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=80',
        alt: 'Gato descansando em ambiente confortável',
    },
    {
        src: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1200&q=80',
        alt: 'Veterinária examinando um cão com cuidado',
    },
    {
        src: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=80',
        alt: 'Filhote em atendimento premium',
    },
    {
        src: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=1200&q=80',
        alt: 'Gato observando com curiosidade',
    },
    {
        src: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&w=1200&q=80',
        alt: 'Cachorro com expressão tranquila ao lado da equipe',
    },
]

export const contactDetails = [
    { label: 'Telefone', value: '(67) 99920-1818', icon: Phone },
    { label: 'WhatsApp', value: '(67) 99920-1818', icon: MessageCircle },
    { label: 'Email', value: 'contato@reinoanimal.com.br', icon: Mail },
    { label: 'Endereço', value: 'R. Monte Alegre, 4700 - Jardim Ouro Verde, Dourados - MS, 79830-070', icon: MapPin },
    { label: 'Horário', value: 'Segunda a sábado, 8h às 20h', icon: Clock3 },
]

export const socialLinks = [
    { label: 'Instagram', href: 'https://instagram.com', icon: Sparkles },
    { label: 'Facebook', href: 'https://facebook.com', icon: BadgeDollarSign },
    { label: 'WhatsApp', href: 'https://wa.me/5567999201818', icon: MessageCircle },
]

export const aboutParagraphs = [
    'A Reino Animal foi pensada para unir acolhimento, tecnologia e confiança em uma experiência leve para tutores e pets.',
    'Nosso objetivo é tornar cada visita mais tranquila com uma jornada clara, atendimento próximo e soluções preventivas que fortalecem a saúde animal.',
]

export const procedureCategories = ['Todas', 'Consulta', 'Prevenção', 'Cirurgia', 'Exame', 'Odontologia', 'Emergência']
