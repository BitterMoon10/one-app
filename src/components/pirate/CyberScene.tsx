import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const BACKGROUND = 0x07070f;
const STAR_MIN_Z = -150;
const STAR_MAX_Z = 65;
const STAR_DEPTH = STAR_MAX_Z - STAR_MIN_Z;
const STAR_LAYERS = [
  { count: 1600, size: 0.22, speed: 0.65, opacity: 0.82 },
  { count: 700, size: 0.42, speed: 1.4, opacity: 0.9 },
  { count: 180, size: 0.85, speed: 2.3, opacity: 0.98 },
] as const;

const createGlowTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const context = canvas.getContext('2d');
  if (context) {
    const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.18, 'rgba(255,255,255,0.95)');
    gradient.addColorStop(0.45, 'rgba(255,255,255,0.28)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    context.fillStyle = gradient;
    context.fillRect(0, 0, 64, 64);
  }
  return new THREE.CanvasTexture(canvas);
};

const createNebulaTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const context = canvas.getContext('2d');
  if (context) {
    let seed = 731;
    const random = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };

    context.globalCompositeOperation = 'lighter';
    for (let i = 0; i < 30; i += 1) {
      const x = 46 + i * 14 + (random() - 0.5) * 42;
      const y = 340 - i * 5 + Math.sin(i * 0.58) * 58 + (random() - 0.5) * 54;
      const radius = 42 + random() * 76;
      context.save();
      context.translate(x, y);
      context.rotate(-0.5 + random() * 0.35);
      context.scale(1.5, 0.55 + random() * 0.45);
      const gradient = context.createRadialGradient(0, 0, 0, 0, 0, radius);
      gradient.addColorStop(0, 'rgba(255,255,255,0.24)');
      gradient.addColorStop(0.35, 'rgba(255,255,255,0.14)');
      gradient.addColorStop(0.72, 'rgba(255,255,255,0.045)');
      gradient.addColorStop(1, 'rgba(255,255,255,0)');
      context.fillStyle = gradient;
      context.fillRect(-radius, -radius, radius * 2, radius * 2);
      context.restore();
    }

    context.filter = 'blur(9px)';
    context.lineCap = 'round';
    for (let i = 0; i < 5; i += 1) {
      context.beginPath();
      context.moveTo(40, 350 + i * 14);
      context.bezierCurveTo(170, 210 - i * 18, 300, 360 - i * 32, 486, 150 + i * 13);
      context.strokeStyle = `rgba(255,255,255,${0.12 - i * 0.014})`;
      context.lineWidth = 18 - i * 2;
      context.stroke();
    }
    context.filter = 'none';
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
};

type StarLayer = {
  points: THREE.Points;
  geometry: THREE.BufferGeometry;
  material: THREE.PointsMaterial;
  positions: Float32Array;
  baseZ: Float32Array;
  count: number;
  speed: number;
};

const createStarLayer = (
  config: (typeof STAR_LAYERS)[number],
  glowTexture: THREE.CanvasTexture,
  isMobile: boolean,
): StarLayer => {
  const count = isMobile ? Math.floor(config.count / 2) : config.count;
  const positions = new Float32Array(count * 3);
  const baseZ = new Float32Array(count);
  const colors = new Float32Array(count * 3);
  const color = new THREE.Color();

  for (let i = 0; i < count; i += 1) {
    const offset = i * 3;
    positions[offset] = (Math.random() - 0.5) * 180;
    positions[offset + 1] = -25 + Math.random() * 90;
    baseZ[i] = STAR_MIN_Z + Math.random() * STAR_DEPTH;
    positions[offset + 2] = baseZ[i];

    const colorRoll = Math.random();
    color.setHex(colorRoll < 0.75 ? 0xe6f2ff : colorRoll < 0.97 ? 0x8fb6ff : 0xffdfc2);
    colors[offset] = color.r;
    colors[offset + 1] = color.g;
    colors[offset + 2] = color.b;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const material = new THREE.PointsMaterial({
    size: config.size,
    map: glowTexture,
    vertexColors: true,
    transparent: true,
    opacity: config.opacity,
    alphaTest: 0.01,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  });
  const points = new THREE.Points(geometry, material);
  return { points, geometry, material, positions, baseZ, count, speed: config.speed };
};

const createNebulae = (nebulaTexture: THREE.CanvasTexture) => {
  const configs = [
    { position: [-32, 20, -105], scale: [92, 62], color: 0x6f8cff, opacity: 0.65, rotation: -0.35 },
    { position: [35, 25, -120], scale: [80, 68], color: 0xa07be0, opacity: 0.58, rotation: 0.5 },
    { position: [0, 22, -105], scale: [110, 70], color: 0x527bd4, opacity: 0.52, rotation: 0.1 },
  ] as const;

  return configs.map((config) => {
    const material = new THREE.SpriteMaterial({
      map: nebulaTexture,
      color: config.color,
      transparent: true,
      opacity: config.opacity,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      rotation: config.rotation,
      fog: false,
    });
    const sprite = new THREE.Sprite(material);
    sprite.position.set(config.position[0], config.position[1], config.position[2]);
    sprite.scale.set(config.scale[0], config.scale[1], 1);
    return { sprite, material };
  });
};

const createMeteor = () => {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute([0, 0, 0, 7, 3.4, 0], 3),
  );
  const material = new THREE.LineBasicMaterial({
    color: 0xc9e2ff,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const line = new THREE.Line(geometry, material);
  line.visible = false;
  return { line, geometry, material };
};

const CyberScene = () => {
  const hostRef = useRef<HTMLDivElement>(null);
  const [isCyber, setIsCyber] = useState(
    () => document.documentElement.dataset.theme === 'cyber',
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsCyber(document.documentElement.dataset.theme === 'cyber');
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const host = hostRef.current;
    if (!isCyber || !host) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: window.innerWidth >= 640,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    let disposed = false;
    let rafId = 0;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(BACKGROUND);
    scene.fog = new THREE.Fog(BACKGROUND, 70, 230);

    const camera = new THREE.PerspectiveCamera(
      58,
      window.innerWidth / window.innerHeight,
      0.1,
      260,
    );

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(BACKGROUND, 1);
    renderer.domElement.dataset.cyberScene = 'starfield';
    renderer.domElement.setAttribute('aria-hidden', 'true');
    Object.assign(renderer.domElement.style, {
      position: 'fixed',
      inset: '0',
      zIndex: '0',
      pointerEvents: 'none',
      display: 'block',
    });
    host.appendChild(renderer.domElement);

    const glowTexture = createGlowTexture();
    const isMobile = window.innerWidth < 640;
    const starLayers = STAR_LAYERS.map((config) =>
      createStarLayer(config, glowTexture, isMobile),
    );
    starLayers.forEach(({ points }) => scene.add(points));

    const nebulaTexture = createNebulaTexture();
    const nebulae = createNebulae(nebulaTexture);
    nebulae.forEach(({ sprite }) => scene.add(sprite));

    const meteor = createMeteor();
    scene.add(meteor.line);
    let meteorStart = -1;
    let nextMeteor = 4 + Math.random() * 4;

    const resize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', resize);

    const animate = (time: number) => {
      if (disposed) return;
      const elapsed = time * 0.001;
      const driftX = Math.sin(elapsed * 0.08) * 0.45;
      const driftY = Math.sin(elapsed * 0.11) * 0.16;
      camera.position.set(driftX, 1.2 + driftY, 45);
      camera.lookAt(driftX * 0.25, 0, -45);

      starLayers.forEach((layer) => {
        for (let i = 0; i < layer.count; i += 1) {
          layer.positions[i * 3 + 2] =
            STAR_MIN_Z + ((layer.baseZ[i] + elapsed * layer.speed - STAR_MIN_Z) % STAR_DEPTH);
        }
        layer.geometry.attributes.position.needsUpdate = true;
      });

      if (meteorStart < 0 && elapsed >= nextMeteor) meteorStart = elapsed;
      if (meteorStart >= 0) {
        const progress = (elapsed - meteorStart) / 1.15;
        if (progress >= 1) {
          meteorStart = -1;
          nextMeteor = elapsed + 9 + Math.random() * 10;
          meteor.line.visible = false;
        } else {
          meteor.line.visible = true;
          meteor.line.position.set(55 - progress * 95, 38 - progress * 48, -30);
          meteor.material.opacity = Math.sin(progress * Math.PI) * 0.72;
        }
      }

      renderer.render(scene, camera);
      rafId = window.requestAnimationFrame(animate);
    };
    rafId = window.requestAnimationFrame(animate);

    return () => {
      disposed = true;
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      starLayers.forEach(({ points, geometry, material }) => {
        scene.remove(points);
        geometry.dispose();
        material.dispose();
      });
      nebulae.forEach(({ sprite, material }) => {
        scene.remove(sprite);
        material.dispose();
      });
      scene.remove(meteor.line);
      meteor.geometry.dispose();
      meteor.material.dispose();
      glowTexture.dispose();
      nebulaTexture.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement.remove();
    };
  }, [isCyber]);

  if (!isCyber) return null;
  return <div ref={hostRef} aria-hidden className="pointer-events-none fixed inset-0 z-0" />;
};

export default CyberScene;
