import '../components/Hero.css'
import ccLogo from '../assets/CC 1.png'
import placeholderImage from '../assets/QCSP-Placeholder.png'
import { MdCalendarToday, MdLocationOn } from 'react-icons/md'
import TiltedCard from './TiltedCard'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <TiltedCard
          imageSrc={placeholderImage}
          altText="Event Image"
          captionText="Circuit Crunch"
          containerHeight="550px"
          containerWidth="550px"
          imageHeight="550px"
          imageWidth="550px"
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
          <button className="hero-button">Button →</button>
          
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
