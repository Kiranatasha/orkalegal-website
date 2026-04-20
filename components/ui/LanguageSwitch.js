"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { motion } from "framer-motion";

export function LanguageSwitch({ checked, onCheckedChange }) {
  const [isChecked, setIsChecked] = React.useState(checked ?? false);
  const [isTapped, setIsTapped] = React.useState(false);

  React.useEffect(() => {
    if (checked !== undefined) setIsChecked(checked);
  }, [checked]);

  const handleChange = (value) => {
    setIsChecked(value);
    onCheckedChange?.(value);
  };

  return (
    <div className="lang-switch-wrapper">
      <span className={`lang-switch-label ${!isChecked ? "lang-switch-label--active" : ""}`}>
        EN
      </span>

      <SwitchPrimitives.Root
        checked={isChecked}
        onCheckedChange={handleChange}
        asChild
      >
        <motion.button
          className="lang-switch-track"
          data-state={isChecked ? "checked" : "unchecked"}
          style={{ justifyContent: isChecked ? "flex-end" : "flex-start" }}
          whileTap="tap"
          initial={false}
          onTapStart={() => setIsTapped(true)}
          onTapCancel={() => setIsTapped(false)}
          onTap={() => setIsTapped(false)}
          aria-label={isChecked ? "Switch to English" : "Switch to Bahasa Indonesia"}
        >
          <SwitchPrimitives.Thumb asChild>
            <motion.div
              className="lang-switch-thumb"
              layout
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
              animate={
                isTapped
                  ? { width: 22, transition: { duration: 0.08 } }
                  : { width: 18, transition: { duration: 0.08 } }
              }
            />
          </SwitchPrimitives.Thumb>
        </motion.button>
      </SwitchPrimitives.Root>

      <span className={`lang-switch-label ${isChecked ? "lang-switch-label--active" : ""}`}>
        ID
      </span>
    </div>
  );
}
