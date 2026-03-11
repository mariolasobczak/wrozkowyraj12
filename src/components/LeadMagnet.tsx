export default function LeadMagnet() {
    return (
        <section className="py-24 px-6 bg-primary-dark relative flex items-center justify-center overflow-hidden">
            {/* Glow Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/30 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="glass-panel max-w-4xl mx-auto w-full rounded-3xl p-8 md:p-12 relative z-10 text-center shadow-2xl border-accent/30">

                <div className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-bold mb-6 tracking-wide border border-accent/20">
                    Darmowy Krok ⭐️
                </div>

                <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
                    Wahasz się? Otwórz <span className="text-accent italic">"Jedną Kartę"</span> przed rozmową.
                </h2>

                <p className="font-body text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Zapisz się, a w ramach wstępnego kontaktu wylosuję dla Ciebie jedną kartę z Przesłaniem Anielskim na obecny miesiąc. Pozwoli Ci to poznać moją energię.
                </p>

                <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
                    <input
                        type="email"
                        placeholder="Twój adres e-mail"
                        className="flex-grow bg-background/50 border border-white/20 rounded-full px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-accent font-body transition-colors"
                        required
                    />
                    <button
                        type="submit"
                        className="whitespace-nowrap rounded-full px-8 py-4 font-heading text-lg font-bold transition-transform hover:scale-105 active:scale-95 bg-accent text-background border border-accent/50 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
                    >
                        Odbierz Kartę
                    </button>
                </form>

                <p className="mt-4 text-xs text-white/50 font-body">Szanuję Twoją prywatność. Zero spamu.</p>

            </div>
        </section>
    );
}
