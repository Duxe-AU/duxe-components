"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface UseSliderProps<T> {
  items: T[];
  config?: {
    startIndex?: number;
    highlightIndex?: number;
    numQueues?: number;
    transitionDuration?: number;
    includeNextPrevious?: boolean;
    autoRoll?: {
      enabled?: boolean;
      interval?: number;
    }
  }
}

export default function useSlider<T>({
  items,
  config: {
    startIndex = 0,
    highlightIndex = 0,
    numQueues = 3,
    transitionDuration = 500,
    includeNextPrevious = true,
    autoRoll,
  } = {},
}: UseSliderProps<T>) {
  const [queue, setQueue] = useState<T[]>([]);
  const [transitioning, setTransitioning] = useState(false);
  const direction = useRef<"prev" | "next">();
  const currentSlide = useRef(startIndex);
  const autoRollInterval = useRef<number>();
  const autoRollPaused = useRef<boolean>(false);

  const getQueue = useCallback((index: number = 0) => {
    if (items.length == 0) return [];
    if (items.length == 1) return items;

    const newItems = items.concat(items);
    const endIndex = index + numQueues;
    const queue = newItems.slice(index, endIndex);

    if (!includeNextPrevious) {
      return queue;
    }

    const previousItem = index === 0
      ? items[items.length - 1]
      : items[index - 1];

    const nextItem = endIndex === newItems.length
      ? items[0]
      : newItems[endIndex];

    return [previousItem, ...queue, nextItem];
  }, [items, numQueues, includeNextPrevious]);

  const reset = useCallback(() => {
    currentSlide.current = startIndex;
    setQueue(getQueue(currentSlide.current));
  }, [startIndex, getQueue]);

  const activeData = useMemo(() => queue[highlightIndex], [queue, highlightIndex]);

  const nextSlide = useCallback(() => {
    direction.current = "next";
    currentSlide.current = (currentSlide.current + 1) % items.length;
    setTransitioning(true);
    setTimeout(() => {
      setQueue(getQueue(currentSlide.current));
      setTransitioning(false);

      if (autoRoll && autoRollPaused.current) {
        autoRollInterval.current = setInterval(() => {
          nextSlide();
          autoRollPaused.current = false;
        }, autoRoll.interval);
      }
    }, transitionDuration);
  }, [items, transitionDuration, getQueue, autoRoll])

  const previousSlide = useCallback(() => {
    direction.current = "prev";
    currentSlide.current = (currentSlide.current - 1 + items.length) % items.length;
    setTransitioning(true);
    setTimeout(() => {
      setQueue(getQueue(currentSlide.current));
      setTransitioning(false);

      if (autoRoll && autoRollPaused.current) {
        autoRollInterval.current = setInterval(() => {
          nextSlide();
          autoRollPaused.current = false;
        }, autoRoll.interval);
      }
    }, transitionDuration);
  }, [items, transitionDuration, getQueue, autoRoll, nextSlide])

  const hanldePreviousSlideClick = useCallback(() => {
    clearInterval(autoRollInterval.current);
    autoRollPaused.current = true;
    previousSlide();
  }, [previousSlide])

  const hanldeNextSlideClick = useCallback(() => {
    clearInterval(autoRollInterval.current);
    autoRollPaused.current = true;
    nextSlide();
  }, [nextSlide])

  useEffect(() => {
    setQueue(getQueue(currentSlide.current));

    if (autoRoll?.enabled && autoRoll.interval) {
      autoRollInterval.current = setInterval(() => {
        nextSlide();
      }, autoRoll.interval);
    }

    return () => {
      clearInterval(autoRollInterval.current);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleJumpSlide = useCallback((index: number, node: T) => {
    if (index == currentSlide.current) return;

    const distance = currentSlide.current - index;
    const isNext = distance < 0;

    if (Math.abs(distance) === 1) {
      isNext ? nextSlide() : previousSlide();
      return;
    }

    const addend = index < currentSlide.current ? -1 : 1;
    const nodeIndex = items.indexOf(node);

    setQueue(queue => {
      const newQueue = queue;
      newQueue.splice(1 + addend, 1, node);

      return newQueue;
    });

    direction.current = isNext ? "next" : "prev";
    currentSlide.current = nodeIndex;

    setTransitioning(true);
    clearInterval(autoRollInterval.current);
    autoRollPaused.current = true;

    setTimeout(() => {
      setTransitioning(false);
      setQueue(getQueue(nodeIndex));

      if (autoRoll && autoRollPaused.current) {
        autoRollInterval.current = setInterval(() => {
          nextSlide();
          autoRollPaused.current = false;
        }, autoRoll.interval);
      }
    }, transitionDuration);
  }, [items, transitionDuration, getQueue, nextSlide, previousSlide, autoRoll]);

  return {
    direction: direction.current,
    currentSlide: currentSlide.current,
    queue,
    transitioning,
    activeData,
    getQueue,
    previousSlide: hanldePreviousSlideClick,
    nextSlide: hanldeNextSlideClick,
    reset,
    handleJumpSlide,
  };
}
