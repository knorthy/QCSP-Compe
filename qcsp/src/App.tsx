import { useState } from 'react'
import MeshBackground from './pages/MeshBg.tsx'
import Navbar from './pages/Navbar.tsx'
import Hero from './pages/Hero.tsx'
import Rulebook from './pages/Rulebook.tsx'
import Eligibility from './pages/Eligibility.tsx'
import OtherCompetitions from './pages/OtherCompetitions.tsx'
import Footer from './pages/Footer.tsx'
import { useModal } from './types/useModal.ts'
import RightSideModal from './components/RightSideModal'
import type { EventData } from './types/EventData'

function App() {
  const { isOpen, event, openModal, closeModal } = useModal()
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null)

  const handleOpenModal = (eventData: EventData) => {
    setSelectedEvent(eventData)
    openModal(eventData)
  }

  return (
    <>
      <Navbar />
      <MeshBackground>
        <Hero onOpenModal={handleOpenModal} />
        <Rulebook />
        <Eligibility />
        <OtherCompetitions />
      </MeshBackground>
      <Footer />
      <RightSideModal isOpen={isOpen} onClose={closeModal} event={event} />
    </>
  )
}

export default App