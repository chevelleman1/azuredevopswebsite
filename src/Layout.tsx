import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Layout() {
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'

  const handleNavClick = (sectionId: string) => {
    if (!isHome) {
      navigate('/', { state: { scrollTo: sectionId } })
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <span className="logo-icon">🌟</span>
            <span className="logo-text">Velcom</span>
          </div>
          <nav className="nav">
            <button
              className="nav-link"
              onClick={() => handleNavClick('home')}
            >
              Home
            </button>
            <button
              className="nav-link"
              onClick={() => handleNavClick('about')}
            >
              About
            </button>
            <button
              className="nav-link"
              onClick={() => handleNavClick('services')}
            >
              Services
            </button>
            <button
              className="nav-link"
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <Outlet />

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </a>
            </div>
            <div className="footer-logo">
              <span className="logo-icon">🌟</span>
              <span className="logo-text">Velcom</span>
            </div>
            <p className="footer-text">
              © 2024 Velcom. All rights reserved.
            </p>
            <div className="footer-links">
              <a href="#home">Privacy Policy</a>
              <a href="#home">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
