import React from 'react'
import {Footer, Blog, Posibility, Features, WhatGPT3, Header} from "./containers";
import {Brand, Navbar, CTA} from "./components"
import "./App.css"
const app = () => {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Posibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default app
