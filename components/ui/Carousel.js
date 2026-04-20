"use client";

import {
  Children,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion, useMotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ─── Context ───────────────────────────────────────── */

const CarouselContext = createContext(undefined);

function useCarousel() {
  const ctx = useContext(CarouselContext);
  if (!ctx) throw new Error("useCarousel must be used within CarouselProvider");
  return ctx;
}

function CarouselProvider({
  children,
  initialIndex = 0,
  onIndexChange,
  disableDrag = false,
}) {
  const [index, setIndex] = useState(initialIndex);
  const [itemsCount, setItemsCount] = useState(0);

  useEffect(() => { setIndex(initialIndex); }, [initialIndex]);

  const handleSetIndex = (newIndex) => {
    setIndex(newIndex);
    onIndexChange?.(newIndex);
  };

  return (
    <CarouselContext.Provider value={{ index, setIndex: handleSetIndex, itemsCount, setItemsCount, disableDrag }}>
      {children}
    </CarouselContext.Provider>
  );
}

/* ─── Carousel root ─────────────────────────────────── */

export function Carousel({
  children,
  className = "",
  initialIndex = 0,
  index: externalIndex,
  onIndexChange,
  disableDrag = false,
}) {
  const [internalIndex, setInternalIndex] = useState(initialIndex);
  const isControlled = externalIndex !== undefined;
  const currentIndex = isControlled ? externalIndex : internalIndex;

  const handleIndexChange = (newIndex) => {
    if (!isControlled) setInternalIndex(newIndex);
    onIndexChange?.(newIndex);
  };

  return (
    <CarouselProvider initialIndex={currentIndex} onIndexChange={handleIndexChange} disableDrag={disableDrag}>
      <div className={`carousel-root ${className}`}>
        <div className="carousel-overflow">{children}</div>
      </div>
    </CarouselProvider>
  );
}

/* ─── Navigation arrows ─────────────────────────────── */

export function CarouselNavigation({ className = "", classNameButton = "", alwaysShow = false }) {
  const { index, setIndex, itemsCount } = useCarousel();

  return (
    <div className={`carousel-nav ${className}`}>
      <button
        type="button"
        aria-label="Previous slide"
        className={`carousel-nav-btn ${alwaysShow ? "carousel-nav-btn--visible" : ""} ${classNameButton}`}
        disabled={index === 0}
        onClick={() => { if (index > 0) setIndex(index - 1); }}
      >
        <ChevronLeft size={16} />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        className={`carousel-nav-btn ${alwaysShow ? "carousel-nav-btn--visible" : ""} ${classNameButton}`}
        disabled={index + 1 === itemsCount}
        onClick={() => { if (index < itemsCount - 1) setIndex(index + 1); }}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}

/* ─── Dot indicator ─────────────────────────────────── */

export function CarouselIndicator({ className = "", classNameButton = "" }) {
  const { index, itemsCount, setIndex } = useCarousel();

  return (
    <div className={`carousel-indicator ${className}`}>
      {Array.from({ length: itemsCount }, (_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Go to slide ${i + 1}`}
          onClick={() => setIndex(i)}
          className={`carousel-dot ${index === i ? "carousel-dot--active" : ""} ${classNameButton}`}
        />
      ))}
    </div>
  );
}

/* ─── Scrollable track ──────────────────────────────── */

export function CarouselContent({ children, className = "", transition }) {
  const { index, setIndex, setItemsCount, disableDrag } = useCarousel();
  const [visibleItemsCount, setVisibleItemsCount] = useState(1);
  const dragX = useMotionValue(0);
  const containerRef = useRef(null);
  const itemsLength = Children.count(children);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleItemsCount(entries.filter((e) => e.isIntersecting).length);
      },
      { root: containerRef.current, threshold: 0.5 }
    );
    Array.from(containerRef.current.children).forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, [children]);

  useEffect(() => {
    if (itemsLength) setItemsCount(itemsLength);
  }, [itemsLength, setItemsCount]);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -10 && index < itemsLength - 1) setIndex(index + 1);
    else if (x >= 10 && index > 0) setIndex(index - 1);
  };

  return (
    <motion.div
      drag={disableDrag ? false : "x"}
      dragConstraints={disableDrag ? undefined : { left: 0, right: 0 }}
      dragMomentum={disableDrag ? undefined : false}
      style={{ x: disableDrag ? undefined : dragX }}
      animate={{ translateX: `-${index * (100 / visibleItemsCount)}%` }}
      onDragEnd={disableDrag ? undefined : onDragEnd}
      transition={transition || { damping: 18, stiffness: 90, type: "spring", duration: 0.2 }}
      className={`carousel-track ${!disableDrag ? "carousel-track--draggable" : ""} ${className}`}
      ref={containerRef}
    >
      {children}
    </motion.div>
  );
}

/* ─── Individual item ───────────────────────────────── */

export function CarouselItem({ children, className = "" }) {
  return (
    <motion.div className={`carousel-item ${className}`}>
      {children}
    </motion.div>
  );
}
