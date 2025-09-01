import './App.css'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Hero from './pages/Hero/Hero'
import Portfolio from './pages/Portfolio/Portfolio'
import Skills from './pages/Skills/Skills'

function App() {


  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App
