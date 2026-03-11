import { Sparkles, LayoutList, PhoneCall } from 'lucide-react';

export default function Pricing() {
    return (
        <section className="py-24 px-6 bg-background relative overflow-hidden" id="cennik">
            {/* Tło i mgliste kulki (Glow) */}
            <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-accent/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
                        Moje <span className="text-accent italic">Ceny</span>
                    </h2>
                    <p className="font-body text-white/70 text-lg max-w-2xl mx-auto">
                        Wybierz formę współpracy, która najbardziej Ci odpowiada. Pamiętaj, że inwestujesz w swój spokój i jasność sytuacji.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Pakiet: Krótkie Pytania i Wahadło */}
                    <div className="glass-panel p-8 rounded-3xl relative flex flex-col hover:border-accent/40 transition-colors duration-500">
                        <div className="w-14 h-14 bg-primary/40 rounded-2xl flex items-center justify-center mb-6 border border-accent/20 text-accent">
                            <Sparkles className="w-7 h-7" />
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-white mb-2">Pytania i Wahadło</h3>
                        <p className="text-sm text-white/60 font-body mb-8 border-b border-white/10 pb-6">
                            Szybkie i konkretne odpowiedzi na nurtujące Cię kwestie.
                        </p>

                        <div className="space-y-6 flex-grow">
                            <div className="flex justify-between items-start gap-4">
                                <div>
                                    <span className="text-white font-medium block">1 Pytanie do kart/wahadła</span>
                                    <span className="text-xs text-white/50">Konkretnie sprecyzowane (np. co czuje X? czy dostanę pracę? czy sprzedam dom?)</span>
                                </div>
                                <span className="text-accent font-bold whitespace-nowrap mt-1">26 zł</span>
                            </div>
                            <div className="flex justify-between items-center gap-4">
                                <span className="text-white font-medium">3 Pytania do kart/wahadła</span>
                                <span className="text-accent font-bold whitespace-nowrap">66 zł</span>
                            </div>
                        </div>

                        <a href="https://m.me/61568993163565" target="_blank" rel="noopener noreferrer" className="mt-10 block text-center w-full py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold border border-white/10 hover:border-accent/50 transition-all">
                            Wybieram
                        </a>
                    </div>

                    {/* Pakiet: Rozkłady Tematyczne */}
                    <div className="glass-panel p-8 rounded-3xl relative flex flex-col border border-accent/60 shadow-[0_0_40px_rgba(212,175,55,0.15)] transform lg:-translate-y-4">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-background px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                            Kompleksowa Analiza
                        </div>
                        <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center mb-6 border border-accent/40 text-accent">
                            <LayoutList className="w-7 h-7" />
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-white mb-2">Rozkłady Tematyczne</h3>
                        <p className="text-sm text-white/60 font-body mb-8 border-b border-white/10 pb-6">
                            Głębokie wglądy tarota w najróżniejsze sfery życia.
                        </p>

                        <div className="space-y-6 flex-grow">
                            <div className="flex justify-between items-start gap-4">
                                <div>
                                    <span className="text-white font-medium block">Partnerski Standardowy</span>
                                    <span className="text-xs text-white/50">Co czuje/myśli? Zamiary? Ocena relacji i przewidywana przyszłość.</span>
                                </div>
                                <span className="text-accent font-bold mt-1 whitespace-nowrap">69 zł</span>
                            </div>
                            <div className="flex justify-between items-start gap-4">
                                <div>
                                    <span className="text-white font-medium block">Partnerski Rozszerzony</span>
                                    <span className="text-xs text-white/50">Wgląd dodatkowo w "osoby trzecie", wygląd, co przyciąga/zniechęca.</span>
                                </div>
                                <span className="text-accent font-bold mt-1 whitespace-nowrap">99 zł</span>
                            </div>
                            <div className="flex justify-between items-start gap-4">
                                <div>
                                    <span className="text-white font-medium block">Rozwiązanie Problemu</span>
                                    <span className="text-xs text-white/50">Sygnifikator sprawy, blokady/sprzyjanie, strategia działania, możliwy wynik.</span>
                                </div>
                                <span className="text-accent font-bold mt-1 whitespace-nowrap">69 zł</span>
                            </div>
                            <div className="flex justify-between items-start gap-4">
                                <div>
                                    <span className="text-white font-medium block">Rozkład na dwie drogi</span>
                                    <span className="text-xs text-white/50">Jasne porównanie dwóch możliwości w życiu/pracy/związku.</span>
                                </div>
                                <span className="text-accent font-bold mt-1 whitespace-nowrap">76 zł</span>
                            </div>
                            <div className="flex justify-between items-start gap-4">
                                <div>
                                    <span className="text-white font-medium block">Rozkład Finansowy</span>
                                    <span className="text-xs text-white/50">Aktualna sfera, zmiany, analiza pracy (możliwości i zagrożenia).</span>
                                </div>
                                <span className="text-accent font-bold mt-1 whitespace-nowrap">76 zł</span>
                            </div>
                        </div>

                        <a href="https://m.me/61568993163565" target="_blank" rel="noopener noreferrer" className="mt-10 block text-center w-full py-4 rounded-xl bg-gradient-to-r from-accent to-[#ffe680] text-background font-bold hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all">
                            Zamawiam Rozkład
                        </a>
                    </div>

                    {/* Pakiet: Sesje Indywidualne Live */}
                    <div className="glass-panel p-8 rounded-3xl relative flex flex-col hover:border-accent/40 transition-colors duration-500">
                        <div className="w-14 h-14 bg-primary/40 rounded-2xl flex items-center justify-center mb-6 border border-accent/20 text-accent">
                            <PhoneCall className="w-7 h-7" />
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-white mb-2">Sesje Live / Video</h3>
                        <p className="text-sm text-white/60 font-body mb-8 border-b border-white/10 pb-6">
                            Indywidualna sesja by przedyskutować sprawę. Pytania bez limitu.
                        </p>

                        <div className="space-y-6 flex-grow">
                            <div>
                                <h4 className="text-xs uppercase text-accent font-bold tracking-wider mb-4">Spotkania 1 na 1</h4>
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center gap-4">
                                        <span className="text-white font-medium text-lg">Czat (15 minut)</span>
                                        <span className="text-accent font-bold whitespace-nowrap text-xl">85 zł</span>
                                    </div>
                                    <div className="flex justify-between items-center gap-4">
                                        <span className="text-white font-medium text-lg text-balance pr-2">Rozmowa tel. / video (30 min)</span>
                                        <span className="text-accent font-bold whitespace-nowrap text-xl">130 zł</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a href="https://m.me/61568993163565" target="_blank" rel="noopener noreferrer" className="mt-auto pt-10 block text-center w-full py-4 rounded-xl bg-accent text-background font-bold hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all">
                            Umów spotkanie
                        </a>
                    </div>
                </div>

                <div className="mt-12 text-center">
                   <p className="text-white/50 text-sm font-body max-w-xl mx-auto">
                       Wszystkie usługi wykonywane są po wcześniejszym ustaleniu terminu w wiadomości prywatnej na Facebooku. 100% dyskrecji.
                   </p>
                </div>
            </div>
        </section>
    );
}
