import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './App.css'

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Handle scroll-to when navigating back from another page
    const scrollTo = location.state?.scrollTo
    if (scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(scrollTo)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [location.state])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
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
              <div className="feature-card">
                <div className="feature-icon">✓</div>
                <h3>Years Of Experience</h3>
                <p>
                  Over 20 years of proven experience. Click{' '}
                  <Link to="/completed-projects" className="inline-link">here</Link>{' '}
                  for more details.
                </p>
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
            <form className="contact-form" onSubmit={(e) => {
              e.preventDefault()
              setFormSubmitted(true)
              e.currentTarget.reset()
              setTimeout(() => setFormSubmitted(false), 5000)
            }}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" rows={5} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
              {formSubmitted && <div className="form-success">We'll get back to you shortly!</div>}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
