import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Polityka Prywatności | Wróżka Ewelina',
  description: 'Zasady przetwarzania danych osobowych oraz wykorzystywania plików cookies.',
};

export default function PolitykaPrywatnosciPage() {
    return (
        <main className="bg-background min-h-screen relative selection:bg-primary/30 selection:text-primary">
            <div className="noise-overlay" />
            <Header />
            
            <section className="pt-40 pb-24 px-6 md:px-24 max-w-5xl mx-auto relative z-10 text-white/80 font-body">
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-12">
                    Polityka <span className="text-accent italic">Prywatności</span>
                </h1>

                <div className="space-y-8 glass-panel p-8 md:p-12 rounded-3xl">
                    <div className="p-4 bg-accent/10 border border-accent/30 rounded-xl mb-8">
                        <p className="text-accent font-bold text-sm">
                            ⚠️ UWAGA: Poniższy tekst to ogólny wzór. Pamiętaj o uzupełnieniu danych Administratora i poprawności z wymogami RODO, w zależności od narzędzi analitycznych (np. Google Analytics, Facebook Pixel), których faktycznie używasz w projekcie.
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-4">1. Informacje Ogólne</h2>
                    <p>
                        Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem z usług realizowanych przez MAGIC PARADISE Ewelina Kulej, NIP: 8831882774 (zwaną dalej „Administratorem”).
                    </p>

                    <h2 className="text-2xl font-bold text-white mb-4 mt-8">2. Administrator Danych Osobowych</h2>
                    <p>
                        Administratorem Twoich danych osobowych przekazywanych w celu świadczenia usług (np. imię, data urodzenia niezbędna do rozkładów, pseudonim lub adres portalu społecznościowego na którym się komunikujemy) jest:<br/><br/>
                        MAGIC PARADISE Ewelina Kulej<br/>
                        29 57-343 Jeleniów<br/>
                        E-mail kontaktowy: Mix9xx@gmail.com<br/>
                    </p>

                    <h2 className="text-2xl font-bold text-white mb-4 mt-8">3. Cel Przetwarzania Danych</h2>
                    <p>
                        Przekazane przez Ciebie dane (np. imię i data urodzenia do odczytania kart) mogą być przetwarzane w następujących celach:<br />
                        - realizacji usługi (na podstawie Twojej zgody) - m.in. postawienia kart Tarota lub wykonania innej usługi ezoterycznej,<br />
                        - realizacji obowiązków podatkowo-rozliczeniowych, jeżeli wykonana usługa takich wymaga,<br />
                        - kontaktu za pomocą mediów społecznościowych (korzystanie z wtyczek Facebook).
                    </p>

                    <h2 className="text-2xl font-bold text-white mb-4 mt-8">4. Prawa Użytkownika i Dostęp do danych</h2>
                    <p>
                        Każdej osobie, z uwagi na przepisy RODO (Rozporządzenie o Ochronie Danych Osobowych z dnia 27 kwietnia 2016r.) przysługują następujące prawa:<br/>
                        - prawo dostępu do swoich danych oraz otrzymania ich kopii,<br/>
                        - prawo do sprostowania (poprawiania) swoich danych,<br/>
                        - prawo do usunięcia danych (tzw. „prawo do bycia zapomnianym”),<br/>
                        - prawo do ograniczenia przetwarzania danych.<br/>
                        Żądania te można kierować wiadomością poprzez profil Messenger (Facebook) lub e-mailem bezpośrednio do Administratora.
                    </p>
                    
                    <h2 className="text-2xl font-bold text-white mb-4 mt-8">5. Dyskrecja Zapewniona</h2>
                    <p>
                        Podstawą moich usług jest 100% dyskrecji. Oznacza to, że żadne informacje przekazane mi podczas rozmowy (w tym wgląd w relacje, sekrety, historie życiowe) nie są używane, odsprzedawane ani przekazywane podmiotom trzecim. Służą wyłączenie odczytowi informacji z pola energetycznego podczas naszej aktualnej sesji.
                    </p>
                    
                    <h2 className="text-2xl font-bold text-white mb-4 mt-8">6. Pliki Cookies (Ciasteczka)</h2>
                    <p>
                        1. Strona wykorzystuje pliki „cookies” (ciasteczka) w celu zapewnienia jej prawidłowego funkcjonowania, a także w celach analitycznych/statystycznych (np. w przypadku podpięcia do jej kodu Google Analytics czy Facebook Pixel).<br/>
                        2. Pliki „cookies” to niewielkie pliki tekstowe wysyłane przez platformę i przechowywane na urządzeniu końcowym (np. w pamięci komputera lub smartfona).<br/>
                        3. Możesz w każdej chwili zmienić ustawienia dotyczące plików cookies lub zablokować ich używanie w ustawieniach swojej przeglądarki. Do tego czasu pozostaną one na Twoim komputerze przez określony w ich właściwościach czas, albo do momentu ich ręcznego skasowania.
                    </p>
                </div>
            </section>
            
            <Footer />
        </main>
    );
}
