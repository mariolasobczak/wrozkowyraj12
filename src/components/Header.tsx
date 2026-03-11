import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 py-6 px-8 md:px-24 flex justify-between items-center bg-gradient-to-b from-background/90 to-transparent backdrop-blur-sm">
            <div className="text-white font-heading font-bold text-xl tracking-wider">
                <Link href="/">Wróżka Ewelina</Link>
            </div>
            <a
                href="https://www.facebook.com/profile.php?id=61568993163565"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors duration-300 flex items-center gap-3 bg-surface/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:border-accent/40"
                aria-label="Profil Facebook"
            >
                <span className="hidden md:inline text-sm font-medium font-body">Napisz wiadomość</span>
                <svg xmlns="http://www.facebook.com/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
            </a>
        </header>
    );
}
