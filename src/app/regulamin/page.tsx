import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Regulamin Świadczenia Usług | Wróżka Ewelina',
  description: 'Regulamin świadczenia usług wróżbiarskich, analiz portretu psychologicznego i porad życiowych.',
};

export default function RegulaminPage() {
    return (
        <main className="bg-background min-h-screen relative selection:bg-primary/30 selection:text-primary">
            <div className="noise-overlay" />
            <Header />
            
            <section className="pt-40 pb-24 px-6 md:px-24 max-w-5xl mx-auto relative z-10 text-white/80 font-body">
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-12">
                    Regulamin <span className="text-accent italic">Świadczenia Usług</span>
                </h1>

                <div className="space-y-8 glass-panel p-8 md:p-12 rounded-3xl">
                    <div className="p-4 bg-accent/10 border border-accent/30 rounded-xl mb-8">
                        <p className="text-accent font-bold text-sm">
                            ⚠️ UWAGA: Poniższy tekst jest szablonem poglądowym. Zanim zaczniesz oferować usługi, skonsultuj go ze swoimi danymi i upewnij się, że jest zgodny z Twoimi procesami oraz lokalnym prawem (np. dotyczącym zwrotów czy braku gwarancji na skutki "magiczne"). Należy uzupełnić dane w nawiasach kwadratowych.
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-4">§ 1. Postanowienia ogólne</h2>
                    <p>
                        1. Niniejszy regulamin określa zasady korzystania z usług wróżbiarskich, doradztwa życiowego oraz analizy psychologicznej (zwanych dalej "Usługami") świadczonych przez MAGIC PARADISE Ewelina Kulej, z siedzibą: 29 57-343 Jeleniów, NIP: 8831882774 (zwaną dalej "Usługodawcą").<br/>
                        2. Usługi świadczone są drogą elektroniczną (np. poprzez komunikator Facebook Messenger, e-mail lub rozmowę telefoniczną).<br/>
                        3. Z usług mogą korzystać wyłącznie osoby pełnoletnie (powyżej 18. roku życia), posiadające pełną zdolność do czynności prawnych.
                    </p>

                    <h2 className="text-2xl font-bold text-white mb-4 mt-8">§ 2. Rodzaje i zakres Usług</h2>
                    <p>
                        1. W ramach działalności Usługodawca oferuje m.in.:<br/>
                        - wróżby z kart Tarota i kart Anielskich,<br/>
                        - zabiegi oczyszczania energetycznego przy użyciu wahadła,<br/>
                        - ogólne doradztwo życiowe i psychologiczne wsparcie informacyjne.<br/>
                        2. Usługi oferowane przez Usługodawcę nie zastępują w żadnym razie porady medycznej, prawnej, finansowej czy psychiatrycznej. Sesje z Tarota czy inne usługi ezoteryczne uważa się za formę rozrywki i wglądu w duszę. Wszelkie decyzje życiowe Klient podejmuje samodzielnie i na własną odpowiedzialność.
                    </p>

                    <h2 className="text-2xl font-bold text-white mb-4 mt-8">§ 3. Zamawianie Usług i Płatność</h2>
                    <p>
                        1. Chęć skorzystania z Usługi Klient zgłasza poprzez wiadomość prywatną (np. Messenger na stronie Facebook).<br/>
                        2. Po ustaleniu zakresu usługi i potwierdzeniu terminu realizacji, Klient zobowiązany jest do uiszczenia zapłaty.<br/>
                        3. Płatność odbywa się w formie przedpłaty. Szczegółowe instrukcje i informacje o uiszczeniu płatności omawiane i przesyłane są bezpośrednio w wiadomości prywatnej z Klientem.<br/>
                        4. Realizacja Usługi następuje po zaksięgowaniu wpłaty na koncie lub przesłaniu potwierdzenia przelewu.
                    </p>

                    <h2 className="text-2xl font-bold text-white mb-4 mt-8">§ 4. Prawo odstąpienia od umowy i Reklamacje</h2>
                    <p>
                        1. Zgodnie z art. 38 pkt 1 Ustawy z dnia 30 maja 2014 r. o prawach konsumenta, ze względu na charakter usługi (treści cyfrowe i usługi realizowane niemal natychmiast lub w wykonaniu przypisanego zamówienia na życzenie klienta), prawo odstąpienia od umowy po wykonaniu usługi nie przysługuje.<br/>
                        2. Jeżeli Usługodawca nie wywiąże się z terminu realizacji ustalonego z Klientem, Klient ma prawo zażądać zwrotu 100% uiszczonej kwoty.<br/>
                        3. Reklamacje z tytułu tzw. "niespełnienia się wróżby" nie będą uwzględniane, ponieważ karty pokazują jedynie potencjały wokół sprawy na dany moment. Twoje życie zawsze podlega Twojej wolnej woli.
                    </p>

                    <h2 className="text-2xl font-bold text-white mb-4 mt-8">§ 5. Dyskrecja i Ochrona Danych</h2>
                    <p>
                        1. Usługodawca gwarantuje pełną poufność wszelkich informacji przekazanych przez Klienta w trakcie świadczenia Usługi.<br/>
                        2. Dane udostępniane są wyłącznie w celu realizacji Usługi (odczytu) oraz w razie konieczności rozliczeń podatkowych (jeśli dotyczy uiszczenia rachunku). Szczegóły dotyczące przetwarzania danych znajdują się w <strong>Polityce Prywatności</strong>.
                    </p>
                    
                    <h2 className="text-2xl font-bold text-white mb-4 mt-8">§ 6. Postanowienia końcowe</h2>
                    <p>
                        1. Dokonanie wpłaty za Usługę oznacza akceptację niniejszego Regulaminu.<br/>
                        2. Usługodawca zastrzega sobie prawo do wprowadzania zmian w Regulaminie. O zmianach Klienci będą informowani przed zawarciem nowych zamówień.<br/>
                        3. Regulamin wchodzi w życie z dniem jego publikacji.
                    </p>
                </div>
            </section>
            
            <Footer />
        </main>
    );
}
