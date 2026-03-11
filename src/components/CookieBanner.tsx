'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Sprawdzamy czy użytkownik już zaakceptował w localStorage (tylko na froncie, po mountzie)
        const hasAccepted = localStorage.getItem('cookieConsent');
        if (!hasAccepted) {
            // Małe opóźnienie przed pojawieniem się
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        setIsVisible(false);
        localStorage.setItem('cookieConsent', 'true');
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[100] px-4 pb-4 md:px-6 md:pb-6 pointer-events-none flex justify-center">
            <div className="bg-[#1a0721] border border-accent/30 shadow-[0_10px_40px_rgba(0,0,0,0.8)] rounded-2xl p-6 md:p-8 max-w-4xl w-full pointer-events-auto flex flex-col md:flex-row gap-6 items-center justify-between relative overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-500">
                {/* Ozdobny błysk */}
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-accent/10 blur-[50px] rounded-full pointer-events-none" />
                
                <div className="flex-grow z-10">
                    <h4 className="text-white font-heading font-bold text-lg mb-2">Szanuję Twoją Prywatność 🍪</h4>
                    <p className="text-sm font-body text-white/70 leading-relaxed">
                        Korzystając ze strony "Wróżka Ewelina", wyrażasz zgodę na używanie krótkich plików Cookies w celach statystycznych i poprawnego działania strony. Pełne szczegóły znajdziesz w naszej{' '}
                        <Link href="/polityka-prywatnosci" className="text-accent hover:underline decoration-accent/50 underline-offset-2 transition-all">
                            Polityce Prywatności
                        </Link>.
                    </p>
                </div>
                
                <div className="flex items-center gap-4 z-10 shrink-0 w-full md:w-auto">
                    <button 
                        onClick={acceptCookies}
                        className="flex-grow md:flex-grow-0 px-8 py-3 bg-accent text-background font-bold text-sm rounded-xl hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all whitespace-nowrap"
                    >
                        Rozumiem i Akceptuję
                    </button>
                    <button 
                        onClick={() => setIsVisible(false)}
                        className="p-3 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-colors border border-white/5"
                        aria-label="Zamknij"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
