import { Sparkles, Activity, Gem } from 'lucide-react';

const services = [
    {
        id: 1,
        title: "Profesjonalny Tarot",
        description: "Klucz do rozwiązania problemów w miłości, pracy i sprawach finansowych. Zobacz jasno to, co ukryte.",
        icon: <Sparkles className="w-6 h-6 text-accent" />,
        features: ["Pełny wgląd w relacje", "Odpowiedzi na trudne pytania", "Analiza psychologiczna"]
    },
    {
        id: 2,
        title: "Praca z Wahadłem (Oczyszczanie)",
        description: "Poczuj niesamowitą ulgę i lekkość. Zdejmuję blokady i przywracam naturalny przepływ pozytywnej energii.",
        icon: <Activity className="w-6 h-6 text-accent" />,
        features: ["Odcięcie od toksycznych więzów", "Balansowanie czakr", "Natychmiastowa ulga"]
    },
    {
        id: 3,
        title: "Rozwój Osobisty (Runy i Anioły)",
        description: "Twój duchowy drogowskaz na najbliższe miesiące. Odkryj swój prawdziwy potencjał i misję życiową.",
        icon: <Gem className="w-6 h-6 text-accent" />,
        features: ["Przesłania Anielskie", "Wskazówki z Run", "Długoterminowe strategie"]
    }
];

export default function Services() {
    return (
        <section className="py-24 px-6 bg-primary-dark/30 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.primary.DEFAULT/0.1),transparent_50%)]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20 max-w-2xl mx-auto">
                    <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-4 block">Moje Usługi</span>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">W czym mogę <span className="italic text-primary-light">pomóc?</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div key={service.id} className="group relative glass-panel rounded-3xl p-8 hover:bg-surface/80 transition-colors overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />

                            <div className="w-14 h-14 rounded-2xl bg-primary/30 flex items-center justify-center mb-8 border border-accent/20">
                                {service.icon}
                            </div>

                            <h3 className="font-heading text-2xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="font-body text-white/70 mb-8 leading-relaxed h-24">{service.description}</p>

                            <ul className="space-y-3 mb-8">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-white/80">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <a href="https://m.me/61568993163565" target="_blank" rel="noopener noreferrer" className="block text-center w-full py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium transition-colors border border-white/10">
                                Wybieram
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
