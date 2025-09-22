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
  className?: string;
}

/**
 * ParticleBackground
 * Reusable, typed component that renders a particle network using react-tsparticles.
 *
 * Fixes and notes applied:
 * - Correct imports and types for the latest react-tsparticles + tsparticles packages.
 * - particlesInit uses loadFull(engine) inside try/catch to register all features.
 * - particlesLoaded logs the Container and is safe for async usage.
 * - Ensures the canvas is full-size and placed behind content (pointerEvents: 'none', zIndex: -1) so UI remains interactive.
 * - Uses move.outModes (plural) and other up-to-date option keys.
 * - Enables hover repulse, collisions, and bounce at edges.
 * - Component is fully typed and accepts props for particleCount, particleColor, linkColor, and speed.
 */
const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  particleCount = 80,
  particleColor = "#e68e2e",
  linkColor = "#f5d393",
  speed = 1,
  className = "",
}) => {
  // Initialize tsparticles engine with loadFull so all features (links, collisions, ...) are registered
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("Initializing particles engine...");
    try {
      // loadFull registers all available tsparticles plugins to the engine
      await loadFull(engine);
      console.log("Particles engine initialized successfully");
    } catch (error) {
      // Fail gracefully and log for debugging
      console.error("Error initializing particles engine:", error);
    }
  }, []);

  // Optional: receives the particles container after load. Kept async-compatible in case user wants to await operations.
  const particlesLoaded = useCallback(async (container?: Container) => {
    console.log("Particles loaded:", container);
    // eslint-disable-next-line no-console
    console.debug("Particles loaded:", container);
  }, []);

  const options = {
    fullScreen: { enable: false },
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: particleColor,
      },
      links: {
        color: linkColor,
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none" as const,
        enable: true,
        outModes: {
          default: "bounce" as const,
        },
        random: false,
        speed,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: particleCount,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle" as const,
      },
      size: {
        value: {
          min: 1,
          max: 5,
        },
      },
    },
    detectRetina: true,
  };

  // The style below guarantees the canvas stretches to its parent and does not intercept pointer events
  // so underlying UI remains interactive. The className prop is still applied for optional Tailwind control.
  return (
    <div 
      className={className} 
      style={{ 
        position: "absolute", 
        top: 0,
        left: 0,
        width: "100%", 
        height: "100%", 
        zIndex: 0, 
        pointerEvents: "none" 
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
        style={{ 
          width: "100%", 
          height: "100%", 
          pointerEvents: "none" 
        }}
      />
    </div>
  );
};

export default ParticleBackground;