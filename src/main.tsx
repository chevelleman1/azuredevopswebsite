import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './Layout.tsx'
import App from './App.tsx'
import CompletedProjects from './CompletedProjects.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/completed-projects" element={<CompletedProjects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
