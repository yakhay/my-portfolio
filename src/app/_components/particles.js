"use client"; // Add this to make it a Client Component

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; // Slim version to reduce the bundle size

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Initialize tsParticles engine with the Slim bundle
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles container loaded:", container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#fffff", // Background color
        },
      },
      fpsLimit: 120, // Frames per second
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse", // Repulse effect on click
          },
          onHover: {
            enable: true,
            mode: "grab", // Grab effect on hover
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: "#0FE1C2", // Particle color
        },
        links: {
          color: "#FFFFFF",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150, // Number of particles
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 4 },
        },
      },
      detectRetina: true, // Retina detection
    }),
    []
  );

  return init ? (
    <Particles id={props.id || "tsparticles"} init={particlesLoaded} options={options} />
  ) : null;
};

export default ParticlesComponent;
