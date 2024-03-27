# useSlider

The `useSlider` hook is a utility for managing a slider/carousel functionality in React applications. It allows you to easily create dynamic sliding interfaces with customizable options.

## Parameters

This hook accepts an object parameter:

| Key      | Type       | Required? | Description                                              |
| -------- | ---------- | --------- | -------------------------------------------------------- |
| `items`  | `T[]`      | Yes       | An array of items to be displayed in the slider          |
| `config` | `object`   | No        | An optional configuration object to customize the behavior of the slider. |

#### Config

- `startIndex?: number:` The index of the item to start the slider from. Default is `0`.
- `highlightIndex?: number:` The index of the item to highlight initially. Default is `0`.
- `numQueues?: number:` The number of items to display in the slider at once. Default is `3`.
- `transitionDuration?: number:` The duration of the transition between slides (in milliseconds). Default is `500`.
- `includeNextPrevious?: boolean:` Determines whether to include the hidden items before and after the first and last of the queue respectively. Default is `true`.
- `autoRoll?: object:` An object controlling automatic sliding.
    - `enabled?: boolean:` Enables or disables automatic sliding. Default is `true`.
    - `interval?: number:` The interval between automatic slides (in milliseconds). Default is `5000`.

## Return

This hook returns the following object:

| Key               | Type       | Description                                                                                             |
| ----------------- | ---------- | ------------------------------------------------------------------------------------------------------- |
| `direction`       | `string`   | The direction of sliding ("next" or "prev").                                                            |
| `currentSlide`    | `number`   | The index of the current slide.                                                                         |
| `queue`           | `T[]`      | The array of items currently visible in the slider.                                                     |
| `transitioning`   | `boolean`  | A boolean indicating whether the slider is currently transitioning between slides.                      |
| `activeData`      | `T`        | The data of the currently active item.                                                                  |
| `previousSlide`   | `function` | A function to navigate to the previous slide.                                                           |
| `nextSlide`       | `function` | A function to navigate to the next slide.                                                               |
| `handleJumpSlide` | `function` | A function to navigate to a specific slide by index. Accepts a `number` parameter as destination index. |
| `reset`           | `function` | A function to reset the slider to its initial state.                                                    |


## Example styled width TailwindCSS:
```jsx
import useSlider from "duxe-components"
import { ReactNode } from "react"

type SliderProps = {
  children: ReactNode[];
}

export default function Slider({ children }: SliderProps) {
  const {
    previousSlide,
    nextSlide,
    direction,
    currentSlide,
    transitioning,
    queue,
  } = useSlider({ items: children, });

  return (
    <div className="w-full h-full relative">
      {/* Content */}
      <div className="h-full w-full flex">
        {queue.map((node, index) => {
          return (
            <div
              key={index}
              className={`relative -left-[100%] grow-0 shrink-0 basis-full h-full ${transitioning ? "transition-transform ease-in-out duration-500 transform" : ""}`}
              style={queue.length == 1
                ? {}
                : {
                ...(transitioning
                  ? { transform: `translateX(${100 * (direction === "next" ? -1 : 1)}%)` }
                  : {}),
                }}
            >
              {node}
            </div>
          )
        })}
      </div>

      {/* Controls */}
      <div className="w-full px-5 flex items-center justify-end h-12 gap-8 relative">
        <button
          onClick={previousSlide}
          disabled={transitioning}
          className={queue.length > 1 ? "cursor-pointer" : "cursor-not-allowed"}
        >Previous</button>

        <p>{`${currentSlide + 1}/${children.length}`}</p>

        <button
          onClick={nextSlide}
          disabled={transitioning}
          className={queue.length > 1 ? "cursor-pointer" : "cursor-not-allowed"}
        >Next</button>
      </div>
    </div>
  )
}
```