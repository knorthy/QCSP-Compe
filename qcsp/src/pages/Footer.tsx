import '../components/Footer.css'
import { FiGithub, FiLinkedin, FiFacebook } from 'react-icons/fi'
import { IoLogoInstagram } from 'react-icons/io'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-divider"></div>
      
      <div className="footer-content">
        <p className="footer-text">
          © {currentYear} Quantum Computing Society of the Philippines
        </p>
        
        <div className="footer-socials">
          <a href="#" aria-label="GitHub" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FiGithub />
          </a>
          <a href="#" aria-label="Instagram" className="social-icon" target="_blank" rel="noopener noreferrer">
            <IoLogoInstagram />
          </a>
          <a href="#" aria-label="Facebook" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FiFacebook />
          </a>
          <a href="#" aria-label="LinkedIn" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FiLinkedin />
          </a>
        </div>
      </div>
    </footer>
  )
}
