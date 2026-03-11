
export default function ThePlan() {
    return (
        <section className="py-24 px-6 bg-background relative overflow-hidden">
            <div className="max-w-5xl mx-auto">

                <div className="text-center mb-20">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
                        Jak wygląda <span className="text-accent italic">współpraca?</span>
                    </h2>
                    <p className="mt-6 text-white/70 font-body text-lg max-w-2xl mx-auto">
                        Proste 3 kroki do odzyskania wewnętrznego spokoju i rozwiązania Twojego problemu.
                    </p>
                </div>

                <div className="relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">

                        {/* Step 1 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 rounded-full bg-primary-dark border border-accent/40 flex items-center justify-center text-2xl font-heading font-bold text-accent mb-6 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                                1
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Napisz do mnie</h3>
                            <p className="text-white/70 font-body leading-relaxed">
                                Skontaktuj się ze mną przez Messenger. W kilku słowach nakreśl, co Cię dręczy i jakiej pomocy potrzebujesz.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center text-center mt-0 md:mt-12">
                            <div className="w-20 h-20 rounded-full bg-primary-dark border border-accent/40 flex items-center justify-center text-2xl font-heading font-bold text-accent mb-6 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                                2
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Ustalamy formę</h3>
                            <p className="text-white/70 font-body leading-relaxed">
                                Wspólnie dobieramy odpowiedni rozkład kart lub rodzaj sesji (czat, e-mail) dopasowany do Twojej sytuacji powiększonej o psychologiczną analizę.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 rounded-full bg-primary-dark border border-accent/40 flex items-center justify-center text-2xl font-heading font-bold text-accent mb-6 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                                3
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Otrzymujesz spokój</h3>
                            <p className="text-white/70 font-body leading-relaxed">
                                Przeprowadzam sesję i przekazuję Ci dokładne, pełne empatii i konkretów opisy, dające gotowe wskazówki do działania.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
