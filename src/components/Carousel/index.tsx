"use client"

import { ReactNode } from "react";
import { useSlider } from "../../hooks/useSlider";
import styles from "./index.module.css";

export type CarouselProps = {
  children?: ReactNode[];
  transitionDuration?: number;
  showIndicators?: boolean;
}

export function Carousel({
  children = [],
  transitionDuration = 500,
  showIndicators = true,
}: CarouselProps) {
  const {
    queue,
    transitioning,
    direction,
    currentSlide,
    previousSlide,
    nextSlide,
    handleJumpSlide,
  } = useSlider({ items: children, config: {
    transitionDuration,
  }});

  return (
    <div className={styles.slider}>
      <button
        onClick={previousSlide}
        className={`${styles.controls} ${styles.previous}`}
        disabled={transitioning}
      ></button>
      <button
        onClick={nextSlide}
        className={`${styles.controls} ${styles.next}`}
        disabled={transitioning}
      ></button>

      <div className={styles.content}>
        {queue.map((node, index) => {
          return (
            <div
              key={index}
              className={styles.item}
              style={queue.length == 1
                ? {}
                : {
                ...(transitioning
                  ? {
                    transition: "transform ease-in-out",
                    transitionDuration: `${transitionDuration}ms`,
                    transform: `translateX(${100 * (direction === "next" ? -1 : 1)}%)`,
                  }
                  : {}),
                }}
            >
              {node}
            </div>
          )
        })}
      </div>

      {showIndicators && <div className={styles.indicators}>
        {children.map((node, index) => {
          return (
            <button
              key={index}
              style={{
                transitionDuration: `${transitionDuration}ms`,
                backgroundColor: index == currentSlide ? "#666" : "#eeeeee"
              }}
              onClick={() => handleJumpSlide(index, node)}
              disabled={transitioning}
            ></button>
          )
        })}
      </div>}
    </div>
  )
}