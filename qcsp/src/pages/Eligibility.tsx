import '../components/Eligibility.css'
import { MdPerson, MdSchool, MdCheckCircle, MdEmojiEvents } from 'react-icons/md'
import { useRef, useEffect, useState } from 'react'
import { motion } from 'motion/react'

export default function Eligibility() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  const eligibilityItems = [
    {
      id: 1,
      icon: <MdPerson className="eligibility-card-icon" />,
      title: 'Requirement One',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      position: 'right'
    },
    {
      id: 2,
      icon: <MdSchool className="eligibility-card-icon" />,
      title: 'Requirement Two',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      position: 'left'
    },
    {
      id: 3,
      icon: <MdCheckCircle className="eligibility-card-icon" />,
      title: 'Requirement Three',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      position: 'right'
    },
    {
      id: 4,
      icon: <MdEmojiEvents className="eligibility-card-icon" />,
      title: 'Requirement Four',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      position: 'left'
    }
  ]

  // Track scroll progress for the progress line
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const sectionTop = sectionRef.current.getBoundingClientRect().top
      const sectionHeight = sectionRef.current.getBoundingClientRect().height
      const windowHeight = window.innerHeight

      // Calculate how far through the section we are
      const distanceFromTop = windowHeight - sectionTop
      const progress = Math.max(0, Math.min(1, distanceFromTop / sectionHeight))

      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="eligibility-section" ref={sectionRef}>
      <div className="eligibility-container">
        {/* Header */}
        <div className="eligibility-header">
          <h2 className="eligibility-title">Eligibility</h2>
          <p className="eligibility-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="timeline-wrapper">
          {/* Central Line */}
          <div className="line-background"></div>
          <motion.div
            className="line-progress"
            style={{ scaleY: scrollProgress }}
          ></motion.div>

          {/* Cards with integrated dots */}
          {eligibilityItems.map((item, index) => (
            <div key={item.id} className="timeline-row">
              {/* Card - Left or Right */}
              <div className={`card-side ${item.position}`}>
                <div className="eligibility-card">
                  <div className="card-content">
                    <div className="card-header">
                      {item.icon}
                      <h3 className="card-title">{item.title}</h3>
                    </div>
                    <p className="card-description">{item.description}</p>
                  </div>
                  <div className="card-arrow">→</div>
                </div>
              </div>

              {/* Dot - Centered */}
              <div className="dot-wrapper">
                <div className="dot"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
