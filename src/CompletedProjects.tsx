import { useNavigate } from 'react-router-dom'
import './App.css'

const projects = [
  {
    name: 'Enterprise Cloud Migration',
    client: 'Acme Corporation',
    year: 2024,
    description: 'Migrated legacy on-premise infrastructure to a fully managed cloud environment, reducing operational costs by 40%.',
  },
  {
    name: 'E-Commerce Platform Redesign',
    client: 'ShopWave Inc.',
    year: 2023,
    description: 'Complete redesign and rebuild of a high-traffic e-commerce platform, improving conversion rates by 25%.',
  },
  {
    name: 'Healthcare Data Analytics Dashboard',
    client: 'MedTech Solutions',
    year: 2023,
    description: 'Built a real-time analytics dashboard for patient data, enabling faster clinical decision-making.',
  },
  {
    name: 'Financial Services API Integration',
    client: 'FinServ Global',
    year: 2022,
    description: 'Designed and implemented a secure API gateway connecting multiple banking systems for seamless transactions.',
  },
  {
    name: 'Smart City IoT Network',
    client: 'Metro City Council',
    year: 2022,
    description: 'Deployed an IoT sensor network across the city for traffic management, air quality monitoring, and energy optimization.',
  },
  {
    name: 'Supply Chain Management System',
    client: 'LogiTrans Ltd.',
    year: 2021,
    description: 'Developed an end-to-end supply chain management platform with real-time tracking and predictive analytics.',
  },
  {
    name: 'Educational Learning Platform',
    client: 'EduBright Academy',
    year: 2021,
    description: 'Created an interactive online learning platform supporting 50,000+ concurrent users with video streaming and assessments.',
  },
  {
    name: 'Retail POS System Modernization',
    client: 'QuickMart Stores',
    year: 2020,
    description: 'Modernized point-of-sale systems across 200+ retail locations with cloud-based inventory management.',
  },
  {
    name: 'Government Portal Accessibility Upgrade',
    client: 'State Department of Services',
    year: 2019,
    description: 'Redesigned government services portal to meet WCAG 2.1 AA accessibility standards, serving 2 million+ citizens.',
  },
  {
    name: 'Telecommunications Network Optimization',
    client: 'ConnectTel',
    year: 2018,
    description: 'Optimized network routing algorithms, improving data throughput by 35% and reducing latency across the region.',
  },
]

function CompletedProjects() {
  const navigate = useNavigate()

  return (
    <main className="completed-projects-page">
      <div className="container">
        <h2 className="section-title">Completed Projects</h2>
        <p className="projects-intro">
          With over 20 years of experience, we have successfully delivered projects across
          a wide range of industries. Here is a selection of our completed work.
        </p>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-year">{project.year}</div>
              <div className="project-details">
                <h3>{project.name}</h3>
                <p className="project-client">Client: {project.client}</p>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="projects-back">
          <button className="btn btn-primary" onClick={() => navigate('/')}>
            ← Back to Home
          </button>
        </div>
      </div>
    </main>
  )
}

export default CompletedProjects
