// Components
export { Carousel } from "./components/Carousel";
export { Modal } from "./components/Modal";

// Hooks
export { useHubspot } from "./hooks/useHubspot";
export { useModal } from "./hooks/useModal";
export { useSlider } from "./hooks/useSlider";

// Providers
export { DuxeComponentsProvider } from "./providers";

// types
export type { CarouselProps } from "./components/Carousel";

// Hubspot
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    hbspt: any;
  }
}