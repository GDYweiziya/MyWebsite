import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import ProjectSection from './components/ProjectSection'
import AboutSection from './components/AboutSection'

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="projects">
          <ProjectSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
      </main>
    </>
  )
}

export default App