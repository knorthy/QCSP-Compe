import '../components/Hero.css'
import ccLogo from '../assets/CC 1.png'
import placeholderImage from '../assets/QCSP-Placeholder.png'
import { MdCalendarToday, MdLocationOn } from 'react-icons/md'
import TiltedCard from './TiltedCard'
import type { EventData } from '../types/EventData'

interface HeroProps {
  onOpenModal: (event: EventData) => void
}

export default function Hero({ onOpenModal }: HeroProps) {
  const handleOpenModal = () => {
    onOpenModal({
      id: 1,
      title: 'Circuit Crunch',
      host: 'Lorem, Ipsum & Dolor',
      date: 'Monday, April 3',
      time: '10:00 am - 5:00 pm',
      location: 'Online - Zoom Meeting',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: placeholderImage,
    })
  }

  return (
    <section className="hero-section">
      <div className="hero-left">
        <TiltedCard
          imageSrc={placeholderImage}
          altText="Event Image"
          captionText="Circuit Crunch"
          containerHeight="450px"
          containerWidth="450px"
          imageHeight="450px"
          imageWidth="450px"
          rotateAmplitude={12}
          scaleOnHover={1.05}
          showMobileWarning={false}
          showTooltip
          displayOverlayContent={false}
        />
      </div>


      <div className="hero-right">
        <img src={ccLogo} alt="Circuit Crunch" className="hero-logo" />

        <h2 className="hero-heading">About Event</h2>

        <p className="hero-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        <div className="hero-footer">
          <button className="hero-button" onClick={handleOpenModal}>Button →</button>
          
          <div className="hero-details">
            <div className="detail-item">
              <MdCalendarToday className="detail-icon" />
              <div className="detail-text">
                <strong>Monday, April 3</strong>
                <p>10:00 am - 5:00 pm</p>
              </div>
            </div>
            
            <div className="detail-item">
              <MdLocationOn className="detail-icon" />
              <div className="detail-text">
                <strong>Online</strong>
                <p>Zoom Meeting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
