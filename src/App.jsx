// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { Routes, Route } from 'react-router-dom'
import './App.css'
import {
  Home,
  // Events,
  // Workshops,
  // EventUpdates,
  // WorkshopsDetails,
  // EventDetails,
  // Profile,
  // Referrals,
  // Register,
  // CoreTeam,
  // WebTeam,
  // Speakers,
  // Sponsors,
  // Schedule,
  // About,
} from './pages'
import { NavBar, Footer } from './components'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Home/>
      <Footer />
    </>
  )
}

export default App
