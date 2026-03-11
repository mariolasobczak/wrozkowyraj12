import { ShieldCheck, EyeOff, Award } from 'lucide-react';
import Image from 'next/image';

const guarantees = [
    {
        icon: <Award className="w-8 h-8 text-accent mb-4" />,
        title: "Dyplomowany Psycholog",
        description: "Łączę rzetelną wiedzę psychologiczną z duchowym wglądem Tarota. Oferuję profesjonalne i bezpieczne sesje."
    },
    {
        icon: <EyeOff className="w-8 h-8 text-accent mb-4" />,
        title: "100% Dyskrecji",
        description: "Twoje sekrety są u mnie całkowicie bezpieczne. Zapewniam pełną anonimowość intymnych spraw."
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-accent mb-4" />,
        title: "Nie straszę, daję rozwiązania",
        description: "Nigdy nie zostawiam z poczuciem lęku. Zawsze szukamy wyjścia z najtrudniejszej sytuacji."
    }
];

export default function Authority() {
    return (
        <section className="py-24 px-6 relative w-full overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                <div className="text-center mb-16 max-w-3xl">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
                        Dlaczego <span className="text-accent italic">Ja?</span>
                    </h2>
                    <p className="font-body text-lg text-white/80 leading-relaxed">
                        Wybór doradcy życiowego to ważna decyzja. Zobacz, co gwarantuję i dlaczego możesz czuć się u mnie absolutnie bezpiecznie.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl relative z-10">
                    {guarantees.map((item, index) => (
                        <div key={index} className="glass-panel rounded-3xl p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-2">
                            {item.icon}
                            <h3 className="font-heading text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="font-body text-white/70 text-sm leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
