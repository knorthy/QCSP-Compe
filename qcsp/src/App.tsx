import MeshBackground from './MeshBg.tsx'
import Navbar from './Navbar.tsx' // Import the new navbar

function App() {
  return (
    <>
      <Navbar />
      <MeshBackground>
        {/* page content */}
      </MeshBackground>
    </>
  )
}

export default App