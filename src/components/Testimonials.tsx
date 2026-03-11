import { Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        text: "Pani Ewelina to anioł. Trafiłam do niej w bardzo złym momencie mojego życia, po zdradzie męża. Jej diagnoza psychologiczna i rozkład z Tarota otworzyły mi oczy. Zero straszenia, samo wsparcie. Dziękuję!",
        author: "Katarzyna W.",
        rating: 5
    },
    {
        id: 2,
        text: "Miałam wątpliwości czy wróżki działają online. Po sesji oczyszczania wahadłem u Pani Eweliny poczułam, jak spływa ze mnie całe napięcie. Wrócił mi apetyt i w końcu normalnie sypiam.",
        author: "Anna M.",
        rating: 5
    },
    {
        id: 3,
        text: "Konkret, konkret i jeszcze raz konkret. Pytałem o rozwój mojej firmy i dostałem precyzyjne wskazówki. Widać, że ma Pani ogromną wiedzę. Prawdziwa profesjonalistka. Polecam w 100%.",
        author: "Tomasz D.",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 px-6 relative bg-background border-t border-primary/20">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <span className="text-secondary font-bold tracking-wider text-sm uppercase mb-4 block">
                        5500+ zadowolonych osób
                    </span>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
                        Co mówią inni, którzy zaufali <span className="italic text-accent">Wróżce Ewelinie?</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t) => (
                        <div key={t.id} className="glass-panel p-8 rounded-2xl flex flex-col relative group">
                            <div className="absolute top-6 right-6 text-6xl text-primary-dark/40 font-heading leading-none group-hover:text-accent/20 transition-colors">"</div>

                            <div className="flex gap-1 mb-6">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                                ))}
                            </div>

                            <p className="font-body text-white/80 leading-relaxed flex-grow italic mb-8 relative z-10">
                                "{t.text}"
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-accent/50 flex items-center justify-center font-bold text-white shadow-inner">
                                    {t.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-white">{t.author}</p>
                                    <p className="text-xs text-white/50">Weryfikowana opinia (Facebook)</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
