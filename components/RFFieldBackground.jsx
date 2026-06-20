"use client";

import { useEffect, useRef } from "react";

const COLORS = {
  grid: "rgba(125, 211, 252, 0.055)",
  cyan: "rgba(56, 189, 248, 0.18)",
  green: "rgba(34, 197, 94, 0.13)",
  amber: "rgba(251, 191, 36, 0.09)",
};

export default function RFFieldBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let frame = 0;
    let lastFrame = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const drawGrid = (phase) => {
      const spacing = width < 640 ? 44 : 56;
      const drift = reducedMotion.matches ? 0 : (phase * 4) % spacing;
      context.strokeStyle = COLORS.grid;
      context.lineWidth = 1;
      context.beginPath();
      for (let x = -spacing + drift; x < width + spacing; x += spacing) {
        context.moveTo(x, 0);
        context.lineTo(x, height);
      }
      for (let y = 0; y < height + spacing; y += spacing) {
        context.moveTo(0, y);
        context.lineTo(width, y);
      }
      context.stroke();
    };

    const drawSignal = ({ baseline, amplitude, frequency, speed, color }, phase) => {
      context.strokeStyle = color;
      context.lineWidth = 1.25;
      context.beginPath();
      for (let x = 0; x <= width; x += 4) {
        const envelope = 0.45 + 0.55 * Math.sin((x / width) * Math.PI);
        const y = baseline * height + Math.sin(x * frequency + phase * speed) * amplitude * envelope;
        if (x === 0) context.moveTo(x, y);
        else context.lineTo(x, y);
      }
      context.stroke();
    };

    const drawPhaseArcs = (phase) => {
      const centerX = width * 0.83;
      const centerY = height * 0.37;
      const maxRadius = Math.max(width, height) * 0.72;
      context.lineWidth = 1;

      for (let radius = 110; radius < maxRadius; radius += 86) {
        const offset = reducedMotion.matches ? 0 : phase * 0.08;
        context.strokeStyle = radius % 172 === 0 ? COLORS.green : COLORS.cyan;
        context.beginPath();
        context.arc(centerX, centerY, radius, 0.18 + offset, 2.45 + offset);
        context.stroke();
      }

      context.strokeStyle = COLORS.amber;
      context.beginPath();
      context.moveTo(centerX, centerY);
      context.lineTo(
        centerX - Math.cos(phase * 0.12) * maxRadius,
        centerY + Math.sin(phase * 0.12) * maxRadius
      );
      context.stroke();
    };

    const drawMeasurementNodes = (phase) => {
      const points = [
        [0.12, 0.26],
        [0.28, 0.68],
        [0.47, 0.41],
        [0.69, 0.79],
        [0.88, 0.18],
      ];

      points.forEach(([x, y], index) => {
        const pulse = reducedMotion.matches ? 0.55 : 0.35 + 0.3 * Math.sin(phase * 0.7 + index);
        context.fillStyle = `rgba(125, 211, 252, ${pulse})`;
        context.fillRect(x * width - 2, y * height - 2, 4, 4);
      });
    };

    const render = (time = 0) => {
      if (!reducedMotion.matches && time - lastFrame < 50) {
        frame = window.requestAnimationFrame(render);
        return;
      }
      lastFrame = time;
      const phase = time / 1000;
      context.clearRect(0, 0, width, height);
      drawGrid(phase);
      drawPhaseArcs(phase);
      drawSignal(
        { baseline: 0.22, amplitude: 18, frequency: 0.018, speed: 1.25, color: COLORS.cyan },
        phase
      );
      drawSignal(
        { baseline: 0.72, amplitude: 12, frequency: 0.027, speed: -0.9, color: COLORS.green },
        phase
      );
      drawMeasurementNodes(phase);

      if (!reducedMotion.matches) frame = window.requestAnimationFrame(render);
    };

    resize();
    render();
    window.addEventListener("resize", resize);

    const handleMotionChange = () => {
      window.cancelAnimationFrame(frame);
      render();
    };
    reducedMotion.addEventListener("change", handleMotionChange);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      reducedMotion.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return <canvas ref={canvasRef} className="rf-field-background" aria-hidden="true" />;
}
