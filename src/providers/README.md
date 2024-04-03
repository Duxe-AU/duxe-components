# Duxe Component Provider

This component acts as a centralized container within your React application that encapsulates the context providers.

## Usage

```jsx
import React from "react"
import ReactDOM from "react-dom/client"
import { DuxeComponentsProvider } from "duxe-components"
import App from "./app"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DuxeComponentsProvider>
      <App />
    </DuxeComponentsProvider>
  </React.StrictMode>,
)
```

The following are the context providers encapsulated in this component:
- ModalsProvider