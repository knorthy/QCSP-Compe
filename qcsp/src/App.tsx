import Rulebook from './Rulebook.tsx'
import MeshBackground from './pages/MeshBg.tsx'
import Navbar from './pages/Navbar.tsx'
import Hero from './pages/Hero.tsx'
import Rulebook from './pages/Rulebook.tsx'

function App() {
  return (
    <>
      <Navbar />
      <MeshBackground>
        <Hero />
        <Rulebook />
      </MeshBackground>
    </>
  )
}

export default App