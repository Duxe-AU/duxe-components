# Duxe Component Provider

This component acts as a centralized container within your React application that encapsulates the context providers.

## Props

This component also accepts the following props:

| Prop                   | Type                   | Required? | Description                                                                     |
| ---------------------- | ---------------------- | --------- | ------------------------------------------------------------------------------- |
| `hubspot`              | `HubspotProviderProps` | No        | Configuration for the [`useHubspot`](https://github.com/Duxe-AU/duxe-components/blob/main/src/hooks/useHubspot/README.md) hook |

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
- HubspotProvider
- ModalsProvider