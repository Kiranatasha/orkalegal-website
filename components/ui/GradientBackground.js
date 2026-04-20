"use client";

import { GrainGradient } from "@paper-design/shaders-react";

export function GradientBackground({ speed = 0.35, intensity = 0.38, overlay = true }) {
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
      <GrainGradient
        style={{ height: "100%", width: "100%" }}
        colorBack="hsl(30, 8%, 4%)"
        softness={0.82}
        intensity={intensity}
        noise={0.06}
        shape="corners"
        offsetX={0}
        offsetY={0}
        scale={1.15}
        rotation={0}
        speed={speed}
        colors={["hsl(43, 68%, 40%)", "hsl(28, 52%, 24%)", "hsl(0, 0%, 6%)"]}
      />
      {overlay && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(10, 8, 6, 0.52)",
          }}
        />
      )}
    </div>
  );
}
