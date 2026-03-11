'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

const slides = [
    {
        type: "video",
        src: "/media/film2.mp4",
        title1: "Poznaj co kryje",
        title2: "Przeznaczenie."
    },
    {
        type: "image",
        src: "/media/1.jpg",
        title1: "Odkryj swoją",
        title2: "Prawdziwą Ścieżkę."
    },
    {
        type: "image",
        src: "/media/8.jpg",
        title1: "Znajdź wewnętrzną",
        title2: "Harmonię."
    }
];

export default function Hero() {
    const container = useRef<HTMLElement>(null);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate text on slide change
            gsap.fromTo('.hero-text-anim',
                { y: 60, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power3.out' }
            );
        }, container);
        return () => ctx.revert();
    }, [current]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000); // 6s per slide
        return () => clearInterval(interval);
    }, []);

    return (
        <section ref={container} className="relative h-[100dvh] w-full overflow-hidden flex flex-col justify-end pb-24 px-8 md:px-24">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}
                >
                    {slide.type === 'video' ? (
                        <video
                            src={slide.src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="object-cover w-full h-full opacity-60 scale-105 animate-[zoom_20s_linear_infinite]"
                        />
                    ) : (
                        <Image
                            src={slide.src}
                            alt={slide.title2}
                            fill
                            className="object-cover opacity-60 scale-105 animate-[zoom_20s_linear_infinite]"
                            priority={index === 0}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                </div>
            ))}

            <div className="relative z-10 max-w-4xl" key={current}>
                <h1 className="flex flex-col gap-2">
                    <span className="hero-text-anim font-heading font-medium text-2xl md:text-3xl text-accent pb-2">
                        {slides[current].title1}
                    </span>
                    <span className="hero-text-anim font-heading font-bold text-5xl md:text-8xl text-white leading-[1.1] mb-6 drop-shadow-lg">
                        {slides[current].title2}
                    </span>
                </h1>

                <div className="hero-text-anim font-body text-base md:text-xl text-white/90 max-w-2xl mb-10 space-y-6">
                    <p className="leading-relaxed">
                        Zrozumienie i jasność w trudnym momencie – potęga Tarota w służbie fachowej psychologii.
                        Jako dyplomowany psycholog i psychotronik pomogę Ci odzyskać spokój i pewność siebie.
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-3 text-sm font-medium">
                        <span className="flex items-center gap-2 bg-primary/40 px-4 py-2 rounded-full border border-primary/30 backdrop-blur-sm">🔮 Profesjonalny Tarot</span>
                        <span className="flex items-center gap-2 bg-primary/40 px-4 py-2 rounded-full border border-primary/30 backdrop-blur-sm">⚖️ Dyplomowany Psycholog</span>
                        <span className="flex items-center gap-2 bg-primary/40 px-4 py-2 rounded-full border border-primary/30 backdrop-blur-sm">✨ Oczyszczanie Energetyczne</span>
                    </div>
                </div>

                <div className="hero-text-anim flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-12">
                    <a href="https://m.me/61568993163565" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden rounded-full px-8 py-4 font-heading text-lg font-bold transition-all hover:scale-[1.03] active:scale-95 group bg-accent text-background border border-accent/20 shadow-[0_0_30px_rgba(212,175,55,0.4)] inline-block text-center cursor-pointer">
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Napisz i poznaj odpowiedź</span>
                        <span className="absolute inset-0 bg-primary translate-y-[100%] transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:translate-y-0" />
                    </a>
                    <div className="flex items-center gap-3 text-sm text-white/80 font-body">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface border border-white/10 backdrop-blur-sm">
                            🔒
                        </span>
                        <div className="flex flex-col">
                            <span className="font-semibold text-accent">Gwarancja 100% dyskrecji</span>
                            <span>Nie straszę, daję rozwiązania</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slider Indicators */}
            <div className="absolute bottom-8 right-8 md:right-24 flex gap-3 z-10">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`h-1 transition-all duration-500 rounded-full ${idx === current ? 'w-12 bg-primary' : 'w-4 bg-white/20'}`}
                    />
                ))}
            </div>
        </section>
    );
}
