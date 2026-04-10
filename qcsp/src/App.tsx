import MeshBackground from './pages/MeshBg.tsx'
import Navbar from './pages/Navbar.tsx'
import Hero from './pages/Hero.tsx'
import Rulebook from './pages/Rulebook.tsx'
import Eligibility from './pages/Eligibility.tsx'

function App() {
  return (
    <>
      <Navbar />
      <MeshBackground>
        <Hero />
        <Rulebook />
        <Eligibility />
      </MeshBackground>
    </>
  )
}

export default App