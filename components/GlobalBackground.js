"use client";

import { GrainGradient } from "@paper-design/shaders-react";

export default function GlobalBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <GrainGradient
        style={{ height: "100%", width: "100%" }}
        colorBack="hsl(30, 8%, 4%)"
        softness={0.85}
        intensity={0.36}
        noise={0.05}
        shape="corners"
        offsetX={0}
        offsetY={0}
        scale={1.2}
        rotation={0}
        speed={0.28}
        colors={["hsl(43, 68%, 40%)", "hsl(28, 52%, 24%)", "hsl(0, 0%, 5%)"]}
      />
    </div>
  );
}
