import React from 'react';
import Particle from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

const StarsBg = () => {
  async function loadingParticle(main: Engine) {
    await loadFull(main);
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Particle
        id="smallStars"
        init={loadingParticle}
        options={{
          background: { color: '#050F0F' },
          fpsLimit: 60,
          particles: {
            number: { value: 180, density: { enable: false, area: 800 } },
            color: {
              value: ['#ffffff', '#ffddcc', '#ccffdd', '#ccccff', '#ffccff'],
            },
            shape: { type: 'circle' },
            opacity: {
              value: 0.8,
              random: { enable: true, minimumValue: 0.5 },
              anim: { enable: true, speed: 1, minimumValue: 0.5, sync: false },
            },
            size: {
              value: 1.7,
              random: { enable: true, minimumValue: 0.5 },
              anim: { enable: false },
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: 'right' as any,
              random: false,
              straight: true,
              outModes: { default: 'out' },
            },
            links: {
              enable: true,
              distance: 64, // меньше — реже связи
              color: 'random', // линии будут цветом из палитры частиц
              opacity: 0.35,
              width: 1,
              triangles: { enable: false },
              blink: false,
              warp: false,
            },
          },
          resize: false,
          detectRetina: true,
        }}
      />
      <Particle
        className="w-full h-full absolute top-0 left-0 pointer-events-none"
        id="bigStars"
        init={loadingParticle}
        options={{
          background: { color: 'transparent' },
          fpsLimit: 60,
          particles: {
            number: { value: 12, density: { enable: false } },
            color: {
              value: ['#ff7777', '#77ff77', '#7777ff', '#ffff77', '#ff77ff'],
            },
            shape: { type: 'circle' },
            opacity: {
              value: 1,
              random: { enable: true, minimumValue: 0.4 },
              anim: {
                enable: true,
                speed: 1.5,
                minimumValue: 0.4,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: { enable: true, minimumValue: 2 },
              anim: { enable: false },
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: 'right' as any,
              random: false,
              straight: true,
              outModes: { default: 'out' },
            },

            // Добавляем мягкое свечение — через shadow
            shadow: {
              enable: true,
              color: '#ffffff',
              blur: 15,
            },
          },
          resize: false,
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default StarsBg;
