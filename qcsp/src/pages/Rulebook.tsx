import '../components/Rulebook.css'
import { MdMenuBook, MdEmojiEvents } from 'react-icons/md'
import { useRef, useState, useEffect } from 'react'

export default function Rulebook() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [activeCard, setActiveCard] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, scrollLeft: 0 })
  const dragRef = useRef({ isDragging: false, startX: 0, scrollStart: 0 })

  const cards = [
    {
      id: 1,
      icon: <MdMenuBook className="rulebook-card-icon" />,
      title: 'General Guidelines',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      id: 2,
      icon: <MdEmojiEvents className="rulebook-card-icon" />,
      title: 'How to win',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    }
  ]

  const carouselCards = [
    {
      id: 1,
      icon: <MdEmojiEvents className="carousel-card-icon" />,
      title: 'Scoring System',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 2,
      icon: <MdEmojiEvents className="carousel-card-icon" />,
      title: 'Scoring System',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 3,
      icon: <MdEmojiEvents className="carousel-card-icon" />,
      title: 'Scoring System',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 4,
      icon: <MdEmojiEvents className="carousel-card-icon" />,
      title: 'Scoring System',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 5,
      icon: <MdEmojiEvents className="carousel-card-icon" />,
      title: 'Scoring System',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 6,
      icon: <MdEmojiEvents className="carousel-card-icon" />,
      title: 'Scoring System',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ]

  // Calculate how many cards to duplicate for infinite scroll
  const cardsToShowAtOnce = 3
  const duplicateCount = cardsToShowAtOnce

  // Create infinite carousel: [...duplicated end cards, ...original cards, ...duplicated start cards]
  const infiniteCarouselCards = [
    ...carouselCards.slice(-duplicateCount).map((card, idx) => ({ ...card, id: `${card.id}-end-${idx}` })),
    ...carouselCards,
    ...carouselCards.slice(0, duplicateCount).map((card, idx) => ({ ...card, id: `${card.id}-start-${idx}` }))
  ]

  // Initialize carousel position to the first real card (offset by duplicated cards)
  useEffect(() => {
    if (carouselRef.current && activeCard === 0) {
      const cardWidth = 350 + 32 // card width (350px) + gap (2rem = 32px)
      const initialScroll = duplicateCount * cardWidth
      carouselRef.current.scrollLeft = initialScroll
    }
  }, [])

  // Handle scroll to detect and snap duplicated cards
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const handleScroll = () => {
      if (dragRef.current.isDragging) return

      const cardWidth = 350 + 32
      const scrollLeft = carousel.scrollLeft
      const newActive = Math.round(scrollLeft / cardWidth) - duplicateCount

      // Determine if we've reached the end
      const maxScroll = carousel.scrollWidth - carousel.clientWidth
      const threshold = cardWidth * 0.5

      // Snap to end duplicates (user scrolled to the right)
      if (scrollLeft > maxScroll - threshold) {
        carousel.scrollLeft = duplicateCount * cardWidth
        setActiveCard(0)
      }
      // Snap to start duplicates (user scrolled to the left)
      else if (scrollLeft < threshold) {
        carousel.scrollLeft = (carouselCards.length + duplicateCount - 1) * cardWidth
        setActiveCard(carouselCards.length - 1)
      } else {
        setActiveCard(Math.max(0, Math.min(newActive, carouselCards.length - 1)))
      }
    }

    carousel.addEventListener('scroll', handleScroll)
    return () => carousel.removeEventListener('scroll', handleScroll)
  }, [carouselCards.length, duplicateCount])

  // Mouse down - start dragging
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (carouselRef.current) {
      dragRef.current = {
        isDragging: true,
        startX: e.clientX,
        scrollStart: carouselRef.current.scrollLeft
      }
      setIsDragging(true)
      setDragStart({ x: e.clientX, scrollLeft: carouselRef.current.scrollLeft })
    }
  }

  // Mouse move - drag scrolling
  const handleMouseMove = (e: MouseEvent) => {
    if (!dragRef.current.isDragging || !carouselRef.current) return

    const distance = e.clientX - dragRef.current.startX
    const scrollPosition = dragRef.current.scrollStart - distance

    // Smooth dragging with resistance at boundaries
    carouselRef.current.scrollLeft = scrollPosition
  }

  // Mouse up - stop dragging
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

  const handleDotClick = (index: number) => {
    setActiveCard(index)
    if (carouselRef.current) {
      const cardWidth = 350 + 32 // card width + gap
      const targetScroll = (index + duplicateCount) * cardWidth
      carouselRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="rulebook-section">
      <div className="rulebook-container">
        <div className="rulebook-header">
          <h2 className="rulebook-title">Rulebook</h2>
          <p className="rulebook-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        <div className="rulebook-cards-grid">
          {cards.map((card) => (
            <div key={card.id} className="rulebook-card">
              <div className="rulebook-card-header">
                {card.icon}
                <h3 className="rulebook-card-title">{card.title}</h3>
              </div>
              <p className="rulebook-card-description">{card.description}</p>
              <div className="rulebook-card-arrow">→</div>
            </div>
          ))}
        </div>

        <div className="carousel-wrapper">
          <div
            className="carousel-scroll"
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            {infiniteCarouselCards.map((card) => (
              <div key={card.id} className="carousel-card">
                <div className="carousel-card-header">
                  {card.icon}
                  <h3 className="carousel-card-title">{card.title}</h3>
                </div>
                <p className="carousel-card-description">{card.description}</p>
                <div className="carousel-card-arrow">→</div>
              </div>
            ))}
          </div>
          
          {/* Navigation Dots */}
          <div className="carousel-navigation">
            {carouselCards.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${activeCard === index ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
