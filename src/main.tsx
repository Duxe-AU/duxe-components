import React from 'react'
import ReactDOM from 'react-dom/client'
import { DuxeComponentsProvider } from './providers'
import App from './app'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DuxeComponentsProvider>
      <App />
    </DuxeComponentsProvider>
  </React.StrictMode>,
)
