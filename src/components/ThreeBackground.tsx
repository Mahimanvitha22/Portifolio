import { useEffect, useRef } from 'react';

interface Props {
  isDark: boolean;
}

export default function ThreeBackground({ isDark }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let mouse = { x: width / 2, y: height / 2 };

    canvas.width = width;
    canvas.height = height;

    // Particles
    const PARTICLE_COUNT = 120;
    type Particle = {
      x: number; y: number; vx: number; vy: number;
      size: number; color: string; alpha: number;
    };

    const colors = isDark
      ? ['rgba(168,85,247,', 'rgba(56,189,248,', 'rgba(244,114,182,']
      : ['rgba(138,43,226,', 'rgba(2,132,199,', 'rgba(219,39,119,'];

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2.5 + 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.6 + 0.2,
    }));

    // Sphere wireframe
    const SPHERE_POINTS = 80;
    const SPHERE_R = Math.min(width, height) * 0.18;
    let angle = 0;

    const getSpherePoints = (a: number) => {
      const pts: [number, number, number][] = [];
      for (let i = 0; i < SPHERE_POINTS; i++) {
        const phi = Math.acos(-1 + (2 * i) / SPHERE_POINTS);
        const theta = Math.sqrt(SPHERE_POINTS * Math.PI) * phi + a;
        const x = SPHERE_R * Math.sin(phi) * Math.cos(theta);
        const y = SPHERE_R * Math.sin(phi) * Math.sin(theta);
        const z = SPHERE_R * Math.cos(phi);
        pts.push([x, y, z]);
      }
      return pts;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw sphere
      angle += 0.004;
      const sphereX = width * 0.82;
      const sphereY = height * 0.25;
      const pts = getSpherePoints(angle);

      // Draw connections between nearby sphere points
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i][0] - pts[j][0];
          const dy = pts[i][1] - pts[j][1];
          const dz = pts[i][2] - pts[j][2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < SPHERE_R * 0.55) {
            const alpha = (1 - dist / (SPHERE_R * 0.55)) * 0.35;
            ctx.beginPath();
            ctx.moveTo(sphereX + pts[i][0], sphereY + pts[i][1]);
            ctx.lineTo(sphereX + pts[j][0], sphereY + pts[j][1]);
            ctx.strokeStyle = `rgba(168,85,247,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw sphere points
      for (const [x, y] of pts) {
        ctx.beginPath();
        ctx.arc(sphereX + x, sphereY + y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(56,189,248,0.6)';
        ctx.fill();
      }

      // Neon glow ring around sphere
      const grad = ctx.createRadialGradient(sphereX, sphereY, SPHERE_R * 0.7, sphereX, sphereY, SPHERE_R * 1.4);
      grad.addColorStop(0, 'rgba(168,85,247,0.08)');
      grad.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(sphereX, sphereY, SPHERE_R * 1.4, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Update and draw particles
      for (const p of particles) {
        // Mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120 * 0.8;
          p.vx += (dx / dist) * force * 0.2;
          p.vy += (dy / dist) * force * 0.2;
        }

        p.vx *= 0.99;
        p.vy *= 0.99;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();
      }

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            const alpha = (1 - dist / 100) * 0.2;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(168,85,247,${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: isDark ? 1 : 0.4,
      }}
    />
  );
}
