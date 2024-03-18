import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App>
      <div style={{ backgroundColor: "yellow", height: "100%", width: "100%" }}></div>
      <div style={{ backgroundColor: "blue", height: "100%", width: "100%" }}></div>
      <div style={{ backgroundColor: "red", height: "100%", width: "100%" }}></div>
      <div style={{ backgroundColor: "green", height: "100%", width: "100%" }}></div>
      <div style={{ backgroundColor: "violet", height: "100%", width: "100%" }}></div>
      <div style={{ backgroundColor: "orange", height: "100%", width: "100%" }}></div>
    </App>
  </React.StrictMode>,
)
