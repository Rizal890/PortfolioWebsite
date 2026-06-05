import { useEffect, useRef } from 'react';

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Setup particles representing sensor nodes
    const particleCount = Math.min(Math.floor((width * height) / 25000), 50);
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      pulse: number;
    }[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 1.0,
        pulse: Math.random() * Math.PI
      });
    }

    // Trace path simulations resembling PCB tracks (frighteningly clean design)
    const tracesCount = 6;
    const pcbTraces: {
      points: { x: number; y: number }[];
      progress: number;
      speed: number;
      color: string;
      delay: number;
    }[] = [];

    const generateTrace = () => {
      const isHorizontal = Math.random() > 0.5;
      const points: { x: number; y: number }[] = [];
      
      const startX = isHorizontal ? (Math.random() > 0.5 ? 0 : width) : Math.random() * width;
      const startY = isHorizontal ? Math.random() * height : (Math.random() > 0.5 ? 0 : height);
      points.push({ x: startX, y: startY });

      // Create a 2-segment PCB trace with 45-degree corner
      const length1 = Math.random() * 150 + 100;
      const angle = Math.floor(Math.random() * 4) * 45 * (Math.PI / 180);
      const m1X = startX + Math.cos(angle) * length1;
      const m1Y = startY + Math.sin(angle) * length1;
      points.push({ x: m1X, y: m1Y });

      const length2 = Math.random() * 200 + 150;
      // Force second segment to align horizontally or vertically (typical PCB layout logic)
      let m2X = m1X;
      let m2Y = m1Y;
      if (Math.random() > 0.5) {
        m2X += (Math.random() > 0.5 ? 1 : -1) * length2;
      } else {
        m2Y += (Math.random() > 0.5 ? 1 : -1) * length2;
      }
      points.push({ x: m2X, y: m2Y });

      return {
        points,
        progress: 0,
        speed: Math.random() * 0.005 + 0.002,
        color: Math.random() > 0.4 ? 'rgba(234, 88, 12, 0.15)' : 'rgba(18, 18, 18, 0.1)',
        delay: Math.random() * 200
      };
    };

    for (let i = 0; i < tracesCount; i++) {
      pcbTraces.push(generateTrace());
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Main animation loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw engineering grid lines
      ctx.strokeStyle = 'rgba(18, 18, 18, 0.035)';
      ctx.lineWidth = 1;
      const gridSize = 48;
      
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw custom background glows matching branding colors
      const glow1X = width * 0.2;
      const glow1Y = height * 0.3;
      const gr1 = ctx.createRadialGradient(glow1X, glow1Y, 0, glow1X, glow1Y, Math.min(width, 600));
      gr1.addColorStop(0, 'rgba(234, 88, 12, 0.015)');
      gr1.addColorStop(1, 'rgba(248, 249, 250, 0)');
      ctx.fillStyle = gr1;
      ctx.beginPath();
      ctx.arc(glow1X, glow1Y, Math.min(width, 600), 0, Math.PI * 2);
      ctx.fill();

      const glow2X = width * 0.8;
      const glow2Y = height * 0.7;
      const gr2 = ctx.createRadialGradient(glow2X, glow2Y, 0, glow2X, glow2Y, Math.min(width, 700));
      gr2.addColorStop(0, 'rgba(18, 18, 18, 0.012)');
      gr2.addColorStop(1, 'rgba(248, 249, 250, 0)');
      ctx.fillStyle = gr2;
      ctx.beginPath();
      ctx.arc(glow2X, glow2Y, Math.min(width, 700), 0, Math.PI * 2);
      ctx.fill();

      // Render the PCB traces with glowing signals
      pcbTraces.forEach((trace, idx) => {
        if (trace.delay > 0) {
          trace.delay--;
          return;
        }

        ctx.strokeStyle = 'rgba(18, 18, 18, 0.04)';
        ctx.lineWidth = 1;
        
        ctx.beginPath();
        ctx.moveTo(trace.points[0].x, trace.points[0].y);
        ctx.lineTo(trace.points[1].x, trace.points[1].y);
        ctx.lineTo(trace.points[2].x, trace.points[2].y);
        ctx.stroke();

        // Glowing packet travelling the traces
        const p = trace.progress;
        const pts = trace.points;
        let currentX = pts[0].x;
        let currentY = pts[0].y;

        // Path interpolation
        if (p < 0.5) {
          const ratio = p * 2;
          currentX = pts[0].x + (pts[1].x - pts[0].x) * ratio;
          currentY = pts[0].y + (pts[1].y - pts[0].y) * ratio;
        } else {
          const ratio = (p - 0.5) * 2;
          currentX = pts[1].x + (pts[2].x - pts[1].x) * ratio;
          currentY = pts[1].y + (pts[2].y - pts[1].y) * ratio;
        }

        // Draw light signal
        ctx.fillStyle = trace.color;
        
        ctx.beginPath();
        ctx.arc(currentX, currentY, 3, 0, Math.PI * 2);
        ctx.fill();

        // Draw node pads
        ctx.strokeStyle = trace.color;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(pts[1].x, pts[1].y, 4, 0, Math.PI * 2);
        ctx.stroke();

        trace.progress += trace.speed;
        if (trace.progress >= 1.0) {
          pcbTraces[idx] = generateTrace();
        }
      });

      // Update and draw live Sensor Network Particles
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.01;

        // Circular wrapping boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const currentRadius = p.radius + Math.sin(p.pulse) * 0.4;
        ctx.fillStyle = 'rgba(18, 18, 18, 0.12)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();

        // Draw connection links between close proximity nodes (sensor mesh network)
        for (let j = i + 1; j < particleCount; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.08;
            ctx.strokeStyle = `rgba(18, 18, 18, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="bg-particle-network"
      className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-[#F8F9FA]"
    />
  );
}
