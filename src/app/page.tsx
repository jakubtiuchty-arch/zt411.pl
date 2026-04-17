import Header from '@/components/Header'
import Hero from '@/components/Hero'
import DlaKogo from '@/components/DlaKogo'
import Przewagi from '@/components/Przewagi'
import Porownanie from '@/components/Porownanie'
import Warianty from '@/components/Warianty'
import BonusSection from '@/components/BonusSection'
import Specyfikacja from '@/components/Specyfikacja'
import Akcesoria from '@/components/Akcesoria'
import FAQ from '@/components/FAQ'
import Serwis from '@/components/Serwis'
import Kontakt from '@/components/Kontakt'
import Footer from '@/components/Footer'

export default function Home() {
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
        <Akcesoria />
        <Specyfikacja />
        <Serwis />
        <Kontakt />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
