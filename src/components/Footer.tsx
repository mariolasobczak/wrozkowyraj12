'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="relative bg-[#15021c] text-white/80 rounded-t-[4rem] px-8 md:px-24 pt-24 pb-12 mt-[-2rem] z-20 border-t border-accent/20 overflow-hidden">
            {/* Decorative Blur Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/20 blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 mb-20 relative z-10">
                <div className="md:w-1/3">
                    <h3 className="font-heading text-4xl font-bold tracking-tight text-white mb-6">
                        Wróżka <span className="text-accent italic">Ewelina</span>
                    </h3>
                    <p className="font-body text-white/70 text-sm leading-relaxed mb-8">
                        Zrozumienie i jasność w trudnym momencie. Ponad 5500 osób odzyskało ze mną swój życiowy balans.
                    </p>

                    <Link href="https://www.facebook.com/profile.php?id=61568993163565" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden inline-flex rounded-full px-6 py-3 font-heading text-base font-bold transition-all hover:scale-[1.03] active:scale-95 group bg-primary text-white border border-accent/30 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                        <span className="relative z-10 transition-colors duration-300">Napisz na Messenger</span>
                        <span className="absolute inset-0 bg-accent translate-y-[100%] transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:translate-y-0" />
                    </Link>
                </div>

                <div className="flex gap-16 md:gap-24 font-body text-sm">
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-semibold mb-2 text-lg font-heading">Szybkie linki</h4>
                        <Link href="#uslugi" className="text-white/70 hover:text-accent transition-colors">Moje Usługi</Link>
                        <Link href="#wspolpraca" className="text-white/70 hover:text-accent transition-colors">Jak wygląda współpraca</Link>
                        <Link href="#opinie" className="text-white/70 hover:text-accent transition-colors">Opinie Klientek</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-semibold mb-2 text-lg font-heading">Kontakt</h4>
                        <Link href="https://www.facebook.com/profile.php?id=61568993163565" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors">Facebook (Wiadomość prywatna)</Link>
                        <span className="text-white/70">Dostępność online: ustalana indywidualnie</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-body text-white/40 relative z-10">
                <p>&copy; {new Date().getFullYear()} Wróżka Ewelina. Dyplomowany psycholog i psychotronik.</p>
                <div className="flex gap-4 md:gap-8 flex-wrap justify-center">
                    <Link href="/regulamin" className="hover:text-accent transition-colors">Regulamin Świadczenia Usług</Link>
                    <Link href="/polityka-prywatnosci" className="hover:text-accent transition-colors">Polityka Prywatności</Link>
                    <Link href="https://www.facebook.com/profile.php?id=61568993163565" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Odwiedź Fanpage</Link>
                </div>
            </div>
        </footer>
    );
}
