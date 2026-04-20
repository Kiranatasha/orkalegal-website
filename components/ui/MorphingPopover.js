"use client";

import {
  useState,
  useId,
  useRef,
  useEffect,
  createContext,
  useContext,
} from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useClickOutside } from "../../hooks/useClickOutside";

const TRANSITION = { type: "spring", bounce: 0.1, duration: 0.4 };

const MorphingPopoverContext = createContext(null);

function useMorphingPopover() {
  const ctx = useContext(MorphingPopoverContext);
  if (!ctx) throw new Error("Must be used inside MorphingPopover");
  return ctx;
}

/* ─── Root ──────────────────────────────────────────── */

export function MorphingPopover({ children, className = "" }) {
  const uniqueId = useId();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MorphingPopoverContext.Provider
      value={{
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
        uniqueId,
      }}
    >
      <MotionConfig transition={TRANSITION}>
        <div
          className={`morphing-popover-root ${className}`}
          key={uniqueId}
        >
          {children}
        </div>
      </MotionConfig>
    </MorphingPopoverContext.Provider>
  );
}

/* ─── Trigger ───────────────────────────────────────── */

export function MorphingPopoverTrigger({ children, className = "" }) {
  const { open, uniqueId } = useMorphingPopover();

  return (
    <motion.div
      layoutId={`popover-${uniqueId}`}
      className={`morphing-popover-trigger ${className}`}
      onClick={open}
      style={{ cursor: "pointer" }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Content ───────────────────────────────────────── */

export function MorphingPopoverContent({ children, className = "" }) {
  const { isOpen, close, uniqueId } = useMorphingPopover();
  const ref = useRef(null);
  useClickOutside(ref, close);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="morphing-popover-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />

          {/* Morphing content — shares layoutId with trigger */}
          <motion.div
            ref={ref}
            layoutId={`popover-${uniqueId}`}
            className={`morphing-popover-content ${className}`}
            id={`popover-content-${uniqueId}`}
            role="dialog"
            aria-modal="true"
          >
            {/* Close button */}
            <motion.button
              className="morphing-popover-close"
              onClick={close}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.15 }}
              aria-label="Close"
            >
              ✕
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ delay: 0.1, duration: 0.25 }}
            >
              {children}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
