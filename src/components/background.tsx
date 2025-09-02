"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";

export default function BackgroundParticles(): React.ReactElement {
  const particlesInit = useCallback(async (engine: Engine) => {
    // Load only the features you need to reduce bundle size
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      console.log("Particles loaded", container);
    },
    []
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent", // Let your CSS gradients show through
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
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
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ["#4f46e5", "#7c3aed", "#db2777", "#2563eb", "#059669", "#d97706"],
          },
          links: {
            color: "#4f46e5",
            distance: 150,
            enable: true,
            opacity: 0.08,
            width: 1,
            triangles: {
              enable: false,
            },
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1.2,
            straight: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
          number: {
            density: {
              enable: true,
              area: 1200,
            },
            value: 60,
          },
          opacity: {
            value: 0.4,
            random: true,
            anim: {
              enable: true,
              speed: 0.8,
              opacity_min: 0.1,
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.5,
              sync: false,
            },
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.02,
              opacity: 0.8,
            },
          },
        },
        detectRetina: true,
        smooth: true,
        style: {
          position: "fixed",
        },
        themes: [
          {
            name: "dark",
            default: {
              value: true,
              mode: "dark",
            },
            options: {
              particles: {
                color: {
                  value: ["#4f46e5", "#7c3aed", "#db2777", "#2563eb", "#059669"],
                },
                links: {
                  color: "#4f46e5",
                  opacity: 0.06,
                },
              },
            },
          },
        ],
      }}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}