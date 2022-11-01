import React from 'react'
import './index.css'
import Header from '../src/Header/Header'
import Nav from '../src/Nav/Nav'
import About from '../src/About/About'
import Experience from '../src/Experience/Experience'
import Contact from '../src/Contact/Contact'


const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Contact/>
    </>
  )
}

export default App