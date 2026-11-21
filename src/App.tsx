import { Topbar } from './components/Topbar'
import { Hero } from './components/landing/Hero'
import { About } from './components/landing/About'
import { Projects } from './components/landing/Projects'
import { Certifications } from './components/landing/Certifications'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <Topbar />
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Footer />
    </>
  )
}

export default App
