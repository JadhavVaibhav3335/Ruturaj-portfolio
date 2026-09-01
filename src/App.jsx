import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Vision from './components/Vision.jsx'
import Services from './components/Services.jsx'
import Work from './components/Work.jsx'
import Process from './components/Process.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { ScrollProgress, BackToTop } from './components/Extras.jsx'

export default function App() {
  return (
    <div className="site">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <Services />
        <Work />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
