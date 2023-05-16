import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './Components/About';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'

function App() {

  const [mode, setMode] = useState("light");
  const darkMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <div>
      <Router>
        <Navbar title="Text Utilities" mode={mode} darkMode={darkMode} />
        <Routes>
          <Route path="/" element={<TextForm mode={mode} darkMode={darkMode} />} />
          <Route path="/About" element={<About mode={mode} darkMode={darkMode} />} />
        </Routes>
        <Footer mode={mode} darkMode={darkMode}/>
      </Router>


    </div>
  )
}

export default App