# Modal

The Modal component provides an unopinionated way to display content in a modal dialog box.

## Prerequisite

To utilize this component, you need to enclose the root component within the provided wrapper component. Usage and additional information can be found [here](https://github.com/Duxe-AU/duxe-components/blob/main/src/providers/README.md)

## Usage

```jsx
import { useState } from "react"
import { Modal } from "duxe-components";

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <button onClick={() => setModalVisible(true)}>
      {modalVisible && <Modal onClose={() => setModalVisible(false)}>
        <h2>Hello, World!</h2>
        <p>This is some modal content.</p>
      </Modal>}
    </>
  );
}
```

The provided example demonstrates the use of conditional rendering to control the visibility of modals. This method is recommended for interacting with the component.

## Props
This component also accepts the following props:
| Prop                  | Type          | Default   | Required | Description                                                                                                                |
| --------------------- | ------------- | --------- | -------- | -------------------------------------------------------------------------------------------------------------------------- |
| `children`            | ReactNode     | -         | Yes      | The content to be displayed inside the modal.                                                                              |
| `showCloseButton`     | boolean       | `true`    | No       | Determines whether to show the close button in the modal header.                                                           |
| `closeOnOutsideClick` | boolean       | `true`    | No       | Determines whether the modal should close when clicking outside the modal.                                                 |
| `backgroundBlur`      | number        | `0.8`     | No       | The amount of blur to apply to the background when the modal is open (from 0 to 1).                                        |
| `onClose`             | function      | -         | No       | A callback function to be called when the modal is closed, either by clicking the close button or pressing the escape key. |

This component is uses the [useModal](https://github.com/Duxe-AU/duxe-components/blob/main/src/hooks/useModal/README.md) hook.