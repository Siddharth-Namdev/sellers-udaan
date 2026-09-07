import { useEffect } from 'react'
import logoImg from './imports/WhatsApp_Image_2026-07-28_at_21.45.05.jpeg'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarketplaceStrip from './components/MarketplaceStrip'
import About from './components/About'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Process from './components/Process'
import Industries from './components/Industries'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    // Page title
    document.title = 'Sellers Udaan – E-commerce Marketplace Management'

    // Favicon
    const existing = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null
    const link: HTMLLinkElement = existing ?? document.createElement('link')
    link.rel = 'icon'
    link.type = 'image/jpeg'
    link.href = logoImg
    if (!existing) document.head.appendChild(link)
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <MarketplaceStrip />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
