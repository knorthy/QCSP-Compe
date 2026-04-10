import MeshBackground from './MeshBg.tsx'
import Navbar from './Navbar.tsx'
import Hero from './Hero.tsx'
import Rulebook from './Rulebook.tsx'

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