import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine, Container } from "tsparticles-engine";
import { loadFull } from "tsparticles";

// Props for the ParticleBackground component
export interface ParticleBackgroundProps {
  // Number of particles to render (default: 80)
  particleCount?: number;
  // Color for the particles (default: "#e68e2e")
  particleColor?: string;
  // Color for the connecting links (default: "#f5d393")
  linkColor?: string;
  // Movement speed of particles (default: 1)
  speed?: number;
  // CSS class to position/size the canvas. Defaults to an absolute full-bleed background
  className?: string; // Tailwind-compatible extra classes
  // If true, covers the entire viewport; otherwise, fills the parent container
  fullScreen?: boolean;
}

/**
 * ParticleBackground
 * - If fullScreen === true → fixed full-viewport layer
 * - If fullScreen === false → absolute inset-0 layer that fills its parent container
 * - Canvas placed behind content (zIndex: -1) and pointerEvents: 'none'
 * - particleCount directly controls particles.number.value (density disabled)
 */
const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  particleCount = 80,
  particleColor = "#4169e1",
  linkColor = "#00aaff",
  speed = 1,
  className = "",
  fullScreen = false,
}) => {
  // Safety/perf clamp
  const MAX_PARTICLES = 1000;
  const safeParticleCount = Math.min(Math.max(0, Math.floor(particleCount)), MAX_PARTICLES);
  const enableLinks = safeParticleCount <= 300;

  const particlesInit = useCallback(async (engine: Engine) => {
    try {
      await loadFull(engine);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Error initializing particles engine:", error);
    }
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    // eslint-disable-next-line no-console
    console.debug("Particles loaded:", container);
  }, []);

  const options = {
    // We control sizing via the wrapper; keep tsparticles fullScreen disabled
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: false },
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: { push: { quantity: 4 }, repulse: { distance: 200, duration: 0.4 } },
    },
    particles: {
      color: { value: particleColor },
      links: {
        enable: enableLinks,
        color: linkColor,
        distance: 150,
        opacity: enableLinks ? 0.5 : 0.15,
        width: enableLinks ? 1 : 0.5,
      },
      collisions: { enable: true },
      move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed, straight: false },
      number: {
        // direct control: density disabled so value equals actual particle count
        value: safeParticleCount,
        density: { enable: false },
      },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  };

  // wrapper style: full viewport when fullScreen, otherwise fill parent (absolute inset-0)
  const wrapperStyle: React.CSSProperties = fullScreen
    ? {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
      }
    : {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      };

  // Tailwind compatibility: allow passing classes in className; these will be applied to the wrapper div
  const wrapperClassName = className;

  return (
    <div className={wrapperClassName} style={wrapperStyle}>
      <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={options} style={{ width: "100%", height: "100%", pointerEvents: "none" }} />
    </div>
  );
};

export default ParticleBackground;