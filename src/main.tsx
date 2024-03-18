import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Carousel } from '.'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Carousel>
      <div style={{ backgroundColor: "yellow", height: "100%", width: "100%" }}></div>
      <div style={{ backgroundColor: "blue", height: "100%", width: "100%" }}></div>
      <div style={{ backgroundColor: "red", height: "100%", width: "100%" }}></div>
      <div style={{ backgroundColor: "green", height: "100%", width: "100%" }}></div>
      <div style={{ backgroundColor: "violet", height: "100%", width: "100%" }}></div>
      <div style={{ backgroundColor: "orange", height: "100%", width: "100%" }}></div>
    </Carousel>
  </React.StrictMode>,
)
