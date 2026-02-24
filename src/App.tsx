import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <span className="logo-icon">🌟</span>
            <span className="logo-text">Velcom</span>
          </div>
          <nav className="nav">
            <button 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => scrollToSection('home')}
            >
              Home
            </button>
            <button 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => scrollToSection('about')}
            >
              About
            </button>
            <button 
              className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
              onClick={() => scrollToSection('services')}
            >
              Services
            </button>
            <button 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="highlight">Velcom</span>
          </h1>
          <p className="hero-subtitle">
            Professional services tailored to your needs. We're here to help you succeed.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('about')}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Us</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                We are a dedicated organization committed to providing excellent services 
                to our community. With years of experience and a passionate team, 
                we strive to make a positive impact in everything we do.
              </p>
              <p>
                Our mission is to deliver quality solutions that meet the unique needs 
                of each client while maintaining the highest standards of professionalism 
                and integrity.
              </p>
            </div>
            <div className="about-features">
              <div className="feature-card">
                <div className="feature-icon">✓</div>
                <h3>Quality Service</h3>
                <p>Committed to excellence in every project</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">✓</div>
                <h3>Professional Team</h3>
                <p>Experienced experts at your service</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">✓</div>
                <h3>Customer Focus</h3>
                <p>Your needs are our top priority</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📋</div>
              <h3>Consultation</h3>
              <p>Professional advice and guidance for your projects</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <h3>Implementation</h3>
              <p>Expert execution of plans and solutions</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Analysis</h3>
              <p>Comprehensive evaluation and reporting</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎯</div>
              <h3>Strategy</h3>
              <p>Customized solutions for your goals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Address</h4>
                  <p>123 Business Street<br />City, State 12345</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>info@velcom.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <h4>Phone</h4>
                  <p>(555) 123-4567</p>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows={5} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

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

export default App
