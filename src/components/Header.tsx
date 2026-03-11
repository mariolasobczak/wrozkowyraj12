import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 py-6 px-8 md:px-24 flex justify-between items-center bg-gradient-to-b from-background/90 to-transparent backdrop-blur-sm">
            <div className="text-white font-heading font-bold text-xl tracking-wider">
                <Link href="/">Wróżka Ewelina</Link>
            </div>
            <div className="flex items-center gap-3">
                <a
                    href="tel:+48533992425"
                    className="text-white hover:text-accent transition-colors duration-300 flex items-center gap-2 bg-surface/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:border-accent/40"
                    aria-label="Zadzwoń: 533 992 425"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span className="hidden md:inline text-sm font-medium font-body">533 992 425</span>
                </a>
                <a
                    href="https://www.facebook.com/profile.php?id=61568993163565"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-accent transition-colors duration-300 flex items-center gap-3 bg-surface/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:border-accent/40"
                    aria-label="Profil Facebook"
                >
                    <span className="hidden md:inline text-sm font-medium font-body">Napisz wiadomość</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                </a>
            </div>
        </header>
    );
}
