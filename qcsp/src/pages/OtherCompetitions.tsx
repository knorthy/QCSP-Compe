import '../components/OtherCompetitions.css'
import placeholderImage from '../assets/QCSP-Placeholder.png'
import { MdCalendarToday, MdLocationOn } from 'react-icons/md'
import { useRef, useState, useEffect } from 'react'

export default function OtherCompetitions() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const dragRef = useRef({ isDragging: false, startX: 0, scrollStart: 0 })

  const competitions = [
    {
      id: 1,
      title: 'Quantum Quiz2Bit',
      date: 'Monday, April 3',
      location: 'Online',
      image: placeholderImage
    },
    {
      id: 2,
      title: 'Circuit Crunch',
      date: 'Monday, April 3',
      location: 'Online',
      image: placeholderImage
    },
    {
      id: 3,
      title: 'Quantum Quiz2Bit',
      date: 'Monday, April 3',
      location: 'Online',
      image: placeholderImage
    }
  ]

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (carouselRef.current) {
      dragRef.current = {
        isDragging: true,
        startX: e.clientX,
        scrollStart: carouselRef.current.scrollLeft
      }
      setIsDragging(true)
    }
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragRef.current.isDragging || !carouselRef.current) return

    const distance = e.clientX - dragRef.current.startX
    const scrollPosition = dragRef.current.scrollStart - distance

    carouselRef.current.scrollLeft = scrollPosition
  }

  const handleMouseUp = () => {
    dragRef.current.isDragging = false
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    dragRef.current.isDragging = false
    setIsDragging(false)
  }

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <section className="other-competitions-section">
      <div className="other-competitions-container">
        <div className="competitions-header">
          <h2 className="competitions-title">
            Other <span className="highlight">Competitions</span>
          </h2>
          <p className="competitions-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        <div className="competitions-carousel-wrapper">
          <div
            className="competitions-carousel"
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            {competitions.map((competition) => (
              <div key={competition.id} className="competition-card">
                <div className="competition-image">
                  <img src={competition.image} alt={competition.title} />
                </div>
                <div className="competition-content">
                  <h3 className="competition-title">{competition.title}</h3>
                  <div className="competition-info">
                    <div className="info-item">
                      <MdCalendarToday className="info-icon" />
                      <span className="info-value">{competition.date}</span>
                    </div>
                    <div className="info-item">
                      <MdLocationOn className="info-icon" />
                      <span className="info-value">{competition.location}</span>
                    </div>
                  </div>
                  <button className="competition-button">Button →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
