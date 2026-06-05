import Header from '@/components/Header'
import Hero from '@/components/Hero'
import DeliveryBanner from '@/components/DeliveryBanner'
import About from '@/components/About'
import Catalog from '@/components/Catalog'
import HowToOrder from '@/components/HowToOrder'
import Hours from '@/components/Hours'
import Contact from '@/components/Contact'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <DeliveryBanner />
      <About />
      <Catalog />
      <HowToOrder />
      <Hours />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
