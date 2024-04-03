# useModal

The `useModal` hook is a utility used as an alternative to show/hide a modal within your application

## Prerequisite

To utilize this component, you need to enclose the root component within the provided wrapper component. Usage and additional information can be found [here](https://github.com/Duxe-AU/duxe-components/blob/main/src/providers/README.md)

## Return

This hook returns the following object:

| Key         | Type       | Parameter                                   | Description                                                                             |
| ----------- | ---------- | ------------------------------------------- | --------------------------------------------------------------------------------------- |
| `showModal` | `function` | `children: ReactNode, config?: ModalConfig` | A function that shows the modal and displays the passed `children` parameter as content |
| `hideModal` | `function` | -                                           | A function that hides the modal                                                         |

The `config` parameter of `showModal` aligns with the props accepted by the [Modal](https://github.com/Duxe-AU/duxe-components/blob/main/src/components/Modal/README.md) component.

## Example styled width TailwindCSS:
```jsx
import { useModal } from "duxe-components";
import { memo } from "react";

export default function ModalSection() {
  const modal = useModal();

  const Modal = memo(function ModalContent() {
    return (
      <div className="max-w-sm h-60 bg-slate-100 mx-auto">
        <h1>Hello world</h1>
      </div>
    )
  });

  return (
    <section className="container mx-auto px-4 h-screen grid place-content-center">
      <button
        className="py-1 px-3 bg-slate-500 text-white"
        onClick={() => modal.showModal(
          <Modal />,
          { backgroundBlur: 0.5 },
        )}
      >Open Modal via hook</button>
    </section>
  )
}
```