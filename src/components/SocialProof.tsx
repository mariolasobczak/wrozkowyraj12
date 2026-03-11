import { Users } from 'lucide-react';

export default function SocialProof() {
    return (
        <div className="w-full bg-primary-dark/80 backdrop-blur-md border-b border-primary/20 py-4 relative z-20">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-3">
                <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-surface border-2 border-primary-dark flex items-center justify-center shadow-lg">
                            <Users className="w-4 h-4 text-accent/80" />
                        </div>
                    ))}
                </div>
                <div className="font-body text-sm font-medium text-white/90 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span>Dołącz do <strong className="text-accent font-bold">5500+</strong> zaufanych klientek</span>
                    <span className="hidden sm:inline text-white/30">•</span>
                    <span className="text-white/70">Wsparcie psychologiczne i duchowe</span>
                </div>
            </div>
        </div>
    );
}
