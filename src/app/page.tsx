import Header from '@/components/Header'
import Hero from '@/components/Hero'
import DlaKogo from '@/components/DlaKogo'
import Przewagi from '@/components/Przewagi'
import Porownanie from '@/components/Porownanie'
import Warianty from '@/components/Warianty'
import BonusSection from '@/components/BonusSection'
import Specyfikacja from '@/components/Specyfikacja'
import PoznajZT411 from '@/components/PoznajZT411'
import FAQ from '@/components/FAQ'
import Serwis from '@/components/Serwis'
import Kontakt from '@/components/Kontakt'
import Footer from '@/components/Footer'
import { getPrices } from '@/data/prices'

const prices = getPrices()
const sortedByPrice = [...prices.variants].sort((a, b) => a.price - b.price)
const lowPrice = Math.round(sortedByPrice[0].price)
const highPrice = Math.round(sortedByPrice[sortedByPrice.length - 1].price)
const fmtPLN = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
const lowDisplay = fmtPLN(lowPrice)
const highDisplay = fmtPLN(highPrice)

const homepageSchemas = () => {
  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://www.zebrazt411.pl/#webpage',
    url: 'https://www.zebrazt411.pl',
    name: `Zebra ZT411 — drukarka etykiet od ${lowDisplay} zł netto | TAKMA`,
    description: 'Strona produktowa drukarki etykiet Zebra ZT411 prowadzona przez autoryzowanego partnera Zebra — TAKMA.',
    inLanguage: 'pl-PL',
    isPartOf: { '@id': 'https://www.zebrazt411.pl/#website' },
    about: { '@id': 'https://www.zebrazt411.pl/#product' },
    primaryImageOfPage: { '@type': 'ImageObject', url: 'https://www.zebrazt411.pl/images/zt411-hero.jpg' },
    dateModified: prices.lastSync,
    author: { '@id': 'https://takma.com.pl/#organization' },
    publisher: { '@id': 'https://takma.com.pl/#organization' },
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Zebra ZT411', item: 'https://www.zebrazt411.pl' },
    ],
  }

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Ile kosztuje drukarka Zebra ZT411 w Polsce?', acceptedAnswer: { '@type': 'Answer', text: `Zebra ZT411 kosztuje od ${lowDisplay} zł netto (wariant 203 dpi, Wi-Fi + Bluetooth) do ${highDisplay} zł netto (wariant bezpodkładowy — linerless). Wariant z RFID UHF: ok. 10 490 zł netto. Ceny zawierają drukarkę z zasilaczem i kablem USB, bez taśmy barwiącej.` } },
      { '@type': 'Question', name: 'Jaką rozdzielczość druku wybrać: 203, 300 czy 600 dpi?', acceptedAnswer: { '@type': 'Answer', text: '203 dpi — standardowe etykiety logistyczne, kody kreskowe, adresy. 300 dpi — mniejsze czcionki, QR, DataMatrix, etykiety laboratoryjne. 600 dpi — mikrotekst, znakowanie PCB, etykiety farmaceutyczne, drobne kody 2D. W serii ZT400: 600 dpi tylko w ZT411 — ZT421 (6″) nie oferuje tej rozdzielczości.' } },
      { '@type': 'Question', name: 'Czym różni się Zebra ZT411 od ZT421?', acceptedAnswer: { '@type': 'Answer', text: 'ZT411 ma szerokość druku 4" (104 mm), ZT421 ma 6" (168 mm). ZT411 oferuje rozdzielczość 600 dpi, ZT421 tylko 203 i 300 dpi. ZT411 obsługuje druk bezpodkładowy (linerless), ZT421 nie. ZT411 jest lżejsza (16,33 vs 18,14 kg). Dla standardowych etykiet logistycznych — ZT411, dla dużych etykiet paletowych 6" — ZT421.' } },
      { '@type': 'Question', name: 'Czym ZT411 różni się od starszej ZT410?', acceptedAnswer: { '@type': 'Answer', text: 'ZT411 (następca ZT410) oferuje: kolorowy ekran dotykowy 4,3" (vs monochromatyczny w ZT410), Wi-Fi 6/6E i Bluetooth 5.3 (vs Wi-Fi 5 i BT 4.1), szybszy procesor, Zebra Link-OS z Print DNA, 2× port USB host, opcję druku bezpodkładowego (linerless), certyfikat ENERGY STAR. ZT411 to aktualna linia — ZT410 została wycofana z produkcji.' } },
      { '@type': 'Question', name: 'Czy ZT411 obsługuje RFID UHF?', acceptedAnswer: { '@type': 'Answer', text: 'Tak. Opcja RFID UHF (ISO/IEC 18000-63, EPC gen. 2 v2.1, RAIN RFID) możliwa jako wariant fabryczny lub zestaw do instalacji u klienta. Technologia kodowania adaptacyjnego automatycznie dobiera optymalne ustawienia dla danego tagu. Dostępna jest też specjalna wersja RFID On-Metal do znakowania powierzchni metalowych (pojemniki, zasoby metalowe).' } },
      { '@type': 'Question', name: 'Czym jest druk bezpodkładowy (linerless) w ZT411?', acceptedAnswer: { '@type': 'Answer', text: 'Linerless to technologia druku na etykietach bez silikonowego podkładu. Zalety: ~50% więcej etykiet na rolkę, brak odpadów z podkładu, redukcja emisji CO2, mniej przestojów na wymianę rolki. ZT411 to jedyna drukarka przemysłowa Zebra obsługująca linerless. Dostępna jako wariant fabryczny (tylko druk termiczny) lub zestaw do modernizacji istniejących ZT411.' } },
      { '@type': 'Question', name: 'Jakie łączności ma ZT411?', acceptedAnswer: { '@type': 'Answer', text: 'Standard: USB 2.0, RS-232 szeregowy, Ethernet 10/100, Bluetooth 4.2, 2× USB host (do klawiatury, skanera, pendrive). Opcja: dwupasmowy moduł Wi-Fi 802.11ax (Wi-Fi 6/6E) + Bluetooth 5.3, interfejs równoległy, interfejs aplikatora. Dwa otwarte gniazda umożliwiają instalację dodatkowych kart komunikacyjnych w ciągu kilku minut.' } },
      { '@type': 'Question', name: 'Ile kosztuje Zebra ZT411 vs Honeywell PM45?', acceptedAnswer: { '@type': 'Answer', text: `ZT411 od ${lowDisplay} zł netto, PM45 od ok. 7 200 zł netto (porównywalny wariant 203 dpi). ZT411 wygrywa: Wi-Fi 6/6E (PM45 Wi-Fi 5), 600 dpi w opcji (PM45 max 406 dpi), druk bezpodkładowy linerless (PM45 brak), Print DNA gratis (bogatszy ekosystem niż Honeywell). PM45 wygrywa: nieco szybszy druk (300 mm/s @ 300 dpi). Dla firm z flotą Zebra — ZT411.` } },
      { '@type': 'Question', name: 'Jakie języki programowania obsługuje ZT411?', acceptedAnswer: { '@type': 'Answer', text: 'Standardowo: ZPL i ZPL II (Zebra Programming Language — zaawansowane formatowanie etykiet), ZBI 2.0 (BASIC Interpreter dla niezależnych aplikacji). Dodatkowo EPL i EPL2 (Eltron — tylko 203 dpi) dla kompatybilności ze starszymi systemami. Dzięki Unicode drukuje w dowolnym języku — polskim, chińskim, arabskim, cyrylicy.' } },
      { '@type': 'Question', name: 'Jak szybka jest Zebra ZT411?', acceptedAnswer: { '@type': 'Answer', text: 'Maksymalna prędkość druku: 356 mm/s (14"/s) przy 203 dpi. Przy 300 dpi: ok. 305 mm/s. Przy 600 dpi: ok. 152 mm/s. Krótki czas wydruku pierwszej etykiety (<1 s). Najwyższa wydajność w tej klasie urządzeń. Długość ciągłego druku: 3988 mm przy 203 dpi, 1854 mm przy 300 dpi, 991 mm przy 600 dpi.' } },
      { '@type': 'Question', name: 'Jakie akcesoria i materiały eksploatacyjne pasują do ZT411?', acceptedAnswer: { '@type': 'Answer', text: 'Taśmy barwiące Wax/Wax-Resin/Resin (szerokość 51–110 mm, długość do 450 m). Głowice drukujące 203/300/600 dpi (wymienne u klienta). Nawijak pełnej rolki, odklejak, obcinak gilotynowy, klawiatura ZKDU, interfejs aplikatora. Etykiety certyfikowane Zebra (ciągłe, sztancowane, z czarnymi znacznikami, linerless).' } },
      { '@type': 'Question', name: 'Gdzie serwisować Zebra ZT411 w Polsce?', acceptedAnswer: { '@type': 'Answer', text: 'Autoryzowany serwis Zebra w Polsce: TAKMA (Poznań, Premier Solution Partner) oraz portal serwis-zebry.pl. Czas naprawy gwarancyjnej: 3–5 dni roboczych. Kontrakty Zebra OneCare: Essential (naprawa 3 dni, priorytet 8×5), Select (priorytet 24×7, wymiana urządzenia następnego dnia). Wymiana głowic, konserwacja prewencyjna, diagnostyka zdalna przez Printer Profile Manager.' } },
      { '@type': 'Question', name: 'Do jakich zastosowań jest Zebra ZT411?', acceptedAnswer: { '@type': 'Answer', text: 'Produkcja (WIP, oznaczenia identyfikacyjne, numery seryjne, etykiety odbiorcze). Transport i logistyka (kompletacja, wysyłka, przeładunek, etykiety zgodności). Retail (centra dystrybucji, obsługa zaplecza). Ochrona zdrowia (etykiety laboratoryjne, banki krwi, śledzenie zasobów, apteki). Szczególnie rekomendowana gdzie wymagana niezawodność 24/7 i duża liczba drukowanych etykiet dziennie.' } },
      { '@type': 'Question', name: 'Jakie są warunki środowiskowe pracy ZT411?', acceptedAnswer: { '@type': 'Answer', text: 'Druk termotransferowy: 5°C do 40°C. Druk termiczny: 0°C do 40°C. Przechowywanie/transport: -40°C do +60°C. Wilgotność pracy: 20–85% bez kondensacji. Metalowa rama i składana pokrywa z dużym przezroczystym okienkiem. Certyfikat ENERGY STAR (energooszczędna). Trwała powłoka ochraniająca głowicę w trybie druku termicznego.' } },
    ],
  }

  return { webpage, breadcrumb, faq }
}

export default function Home() {
  const { webpage, breadcrumb, faq } = homepageSchemas()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <DlaKogo />
        <Przewagi />
        <Porownanie />
        <Warianty />
        <BonusSection />
        <Specyfikacja />
        <PoznajZT411 />
        <Serwis />
        <Kontakt />
        <FAQ />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  )
}
