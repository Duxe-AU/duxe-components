import React from "react";
import { useModal } from "./hooks/useModal"

export default function App() {
  const modal = useModal();

  return (
    <div>
      <button
        onClick={() => {
          modal.showModal((
            <div style={{
              height: 360,
              maxWidth: 480,
              backgroundColor: "#eee",
            }}>
              <h1>Hello world</h1>
            </div>
          ), {
            backgroundBlur: 1,
          });
        }}
      >Click me</button>
    </div>
  )
}
