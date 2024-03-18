# Carousel

The Carousel component provides a user-friendly slider interface. Supports infinite scrolling out of the box.

## Usage:
```jsx
import { Carousel } from 'duxe-components/Carousel'

function App() {
  return (
    <Carousel>
      <div style={{ backgroundColor: "yellow", height: "100%", width: "100%" }}></div>
      <div style={{ backgroundColor: "blue", height: "100%", width: "100%" }}></div>
      <div style={{ backgroundColor: "red", height: "100%", width: "100%" }}></div>
      {/* add more elements */}
    </Carousel>
  )
}

export default App
```

## Props
This component also accepts the following props:
| Prop                   | Type      | Required? | Description                                                                     | Default Value |
| ---------------------- | --------- | --------- | ------------------------------------------------------------------------------- | ------------- |
| `transitionDuration`   | `number`  | No        | Sets the duration of the transition between slides (in milliseconds).           | `500`         |
| `showIndicators`       | `boolean` | No        | Determines whether dot indicators are displayed at the bottom of the component. | `true`       |

This component is uses the [useSlider](../../hooks/useSlider/README.md) hook. If you prefer, you can utilize this hook independently to craft your personalized Carousel/Slider component.
