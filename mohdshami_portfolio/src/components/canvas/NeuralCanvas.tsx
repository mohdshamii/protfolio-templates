import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  radius: number;
  layer: number;
  pulsePhase: number;
  activation: number;
}

interface Signal {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  strength: number;
}

export const NeuralCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || 600;
      height = canvas.height = canvas.parentElement?.clientHeight || 500;
      initNetwork();
    };

    window.addEventListener("resize", handleResize);

    const mouse = { x: -1000, y: -1000, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Neural Network Architecture Configuration
    const layers = [4, 6, 7, 5, 3];
    let nodes: Node[] = [];
    let connections: { from: number; to: number; weight: number }[] = [];
    let signals: Signal[] = [];

    const initNetwork = () => {
      nodes = [];
      connections = [];
      signals = [];

      const layerSpacing = width / (layers.length + 1);

      layers.forEach((nodeCount, layerIdx) => {
        const x = (layerIdx + 1) * layerSpacing;
        const totalHeight = height * 0.76;
        const startY = (height - totalHeight) / 2;
        const nodeSpacing = totalHeight / (nodeCount + 1);

        for (let i = 0; i < nodeCount; i++) {
          const y = startY + (i + 1) * nodeSpacing;
          nodes.push({
            x,
            y,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
            baseRadius: layerIdx === 0 || layerIdx === layers.length - 1 ? 5 : 4,
            radius: 4,
            layer: layerIdx,
            pulsePhase: Math.random() * Math.PI * 2,
            activation: 0.3 + Math.random() * 0.7,
          });
        }
      });

      // Connect adjacent layers
      let currentIdx = 0;
      for (let l = 0; l < layers.length - 1; l++) {
        const currentCount = layers[l];
        const nextCount = layers[l + 1];
        const nextStartIdx = currentIdx + currentCount;

        for (let i = 0; i < currentCount; i++) {
          for (let j = 0; j < nextCount; j++) {
            // High connection probability with subtle weight variations
            if (Math.random() > 0.15) {
              connections.push({
                from: currentIdx + i,
                to: nextStartIdx + j,
                weight: 0.2 + Math.random() * 0.8,
              });
            }
          }
        }
        currentIdx += currentCount;
      }
    };

    initNetwork();

    let lastSignalTime = 0;

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Periodically spawn feed-forward data packet signals
      if (time - lastSignalTime > 180 && connections.length > 0) {
        lastSignalTime = time;
        const randomConn = connections[Math.floor(Math.random() * connections.length)];
        signals.push({
          fromNode: randomConn.from,
          toNode: randomConn.to,
          progress: 0,
          speed: 0.012 + Math.random() * 0.018,
          strength: 0.5 + Math.random() * 0.5,
        });
      }

      // Update and draw connections
      connections.forEach((conn) => {
        const from = nodes[conn.from];
        const to = nodes[conn.to];
        if (!from || !to) return;

        // Calculate proximity to mouse
        const midX = (from.x + to.x) / 2;
        const midY = (from.y + to.y) / 2;
        const distToMouse = Math.hypot(mouse.x - midX, mouse.y - midY);
        const mouseFactor = mouse.active && distToMouse < 100 ? (1 - distToMouse / 100) * 0.6 : 0;

        const alpha = Math.min(0.85, 0.08 + conn.weight * 0.12 + mouseFactor);

        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);

        if (mouseFactor > 0.2) {
          ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
          ctx.lineWidth = 1.4;
        } else {
          ctx.strokeStyle = `rgba(30, 58, 95, ${alpha})`;
          ctx.lineWidth = 0.8;
        }
        ctx.stroke();
      });

      // Update and draw data signals
      for (let s = signals.length - 1; s >= 0; s--) {
        const sig = signals[s];
        sig.progress += sig.speed;

        if (sig.progress >= 1) {
          signals.splice(s, 1);
          continue;
        }

        const from = nodes[sig.fromNode];
        const to = nodes[sig.toNode];
        if (!from || !to) continue;

        const currentX = from.x + (to.x - from.x) * sig.progress;
        const currentY = from.y + (to.y - from.y) * sig.progress;

        // Draw pulsing data packet
        ctx.beginPath();
        ctx.arc(currentX, currentY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "#38BDF8";
        ctx.shadowColor = "#38BDF8";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Update and draw nodes
      nodes.forEach((node) => {
        node.pulsePhase += 0.03;
        const pulse = Math.sin(node.pulsePhase) * 0.5;

        // Subtle floating movement
        node.x += node.vx;
        node.y += node.vy;

        // Mouse proximity reaction
        const distToMouse = Math.hypot(mouse.x - node.x, mouse.y - node.y);
        const isHovered = mouse.active && distToMouse < 80;
        const hoverScale = isHovered ? (1 - distToMouse / 80) * 3 : 0;

        node.radius = node.baseRadius + pulse + hoverScale;

        // Outer glow on active node
        const glowGrad = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.radius * 3.5
        );
        glowGrad.addColorStop(0, "rgba(56, 189, 248, 0.4)");
        glowGrad.addColorStop(1, "rgba(56, 189, 248, 0)");

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = glowGrad;
        ctx.fill();

        // Node core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? "#FFFFFF" : "#38BDF8";
        ctx.fill();

        // Inner nucleus
        ctx.beginPath();
        ctx.arc(node.x, node.y, Math.max(1, node.radius * 0.4), 0, Math.PI * 2);
        ctx.fillStyle = "#FFFFFF";
        ctx.fill();
      });

      // Layer annotation labels
      const layerLabels = ["Input (X)", "Encoder", "Latent (Z)", "Dense", "Inference (Y)"];
      ctx.font = "10px Inter, system-ui, sans-serif";
      ctx.fillStyle = "rgba(148, 163, 184, 0.55)";
      ctx.textAlign = "center";

      layers.forEach((_, idx) => {
        const x = (idx + 1) * (width / (layers.length + 1));
        const label = layerLabels[idx] || `Layer ${idx}`;
        ctx.fillText(label, x, height - 16);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] flex items-center justify-center overflow-hidden rounded-2xl bg-[#090B10]/60 border border-[#1C2538] shadow-2xl backdrop-blur-sm">
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Model Architecture Status Pills */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1117]/80 border border-[#1C2538] text-[11px] text-slate-300 backdrop-blur-md">
        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
        <span className="font-mono text-sky-400">Deep Learning / CNN</span>
        <span className="text-slate-500">•</span>
        <span className="font-mono text-slate-400">Latency: 12ms</span>
      </div>

      <div className="absolute top-4 right-4 z-10 hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1117]/80 border border-[#1C2538] text-[11px] text-slate-300 backdrop-blur-md">
        <span className="text-slate-400 font-mono">Topology:</span>
        <span className="text-sky-300 font-mono">4-6-7-5-3</span>
        <span className="text-slate-500">•</span>
        <span className="text-emerald-400 font-mono">AUC 0.91</span>
      </div>

      <canvas ref={canvasRef} className="w-full h-full block cursor-crosshair" />

      {/* Interactive prompt on bottom right */}
      <div className="absolute bottom-4 right-4 z-10 hidden sm:block text-[11px] text-slate-500 font-mono">
        Hover nodes to inspect weights
      </div>
    </div>
  );
};

export default NeuralCanvas;
