import React, { useEffect, useRef } from "react";

export default function DNAHelixCanvas({
    width = 900,
    height = 420,
    speed = 0.012,
    turns = 2.2,
    amplitude = 80,
    backboneOffset = 24,
    rungEvery = 14,
    title = "Portfolio",
    name = "Romuald Francis Yang",
}) {
    const canvasRef = useRef(null);
    const rafRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const dpr = Math.max(1, window.devicePixelRatio || 1);
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        let t = 0;

        const colorA = "#57D6FF";
        const colorB = "#FF6BD6";

        const depth01 = (s) => (s + 1) * 0.5;

        function withAlpha(hex, a) {
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);
            return `rgba(${r},${g},${b},${a})`;
        }

        function draw() {
            t += speed;

            // Clear to transparent
            ctx.clearRect(0, 0, width, height);

            // Add subtle translucent vignette so the helix remains visible on light backgrounds
            // (still "transparent" overall because alpha < 1)
            const vignette = ctx.createRadialGradient(
                width * 0.5,
                height * 0.5,
                40,
                width * 0.5,
                height * 0.5,
                Math.max(width, height) * 0.75
            );
            vignette.addColorStop(0, "rgba(0,0,0,0.10)");
            vignette.addColorStop(1, "rgba(0,0,0,0.30)");
            ctx.fillStyle = vignette;
            ctx.fillRect(0, 0, width, height);

            const midY = height / 2;
            const leftPad = 40;
            const rightPad = 40;
            const usableW = width - leftPad - rightPad;

            // Rungs first
            for (let x = leftPad; x <= width - rightPad; x += rungEvery) {
                const u = (x - leftPad) / usableW;
                const phase = u * Math.PI * 2 * turns + t;

                const s1 = Math.sin(phase);
                const s2 = Math.sin(phase + Math.PI);

                const y1 = midY + s1 * amplitude;
                const y2 = midY + s2 * amplitude;

                const z = Math.cos(phase);
                const front = depth01(z);

                const alpha = 0.18 + front * 0.60;
                const lw = 1 + front * 2.6;

                const dx = backboneOffset + front * 12;
                const x1 = x - dx;
                const x2 = x + dx;

                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.lineWidth = lw;
                ctx.strokeStyle = `rgba(240, 248, 255, ${alpha})`;
                ctx.stroke();
            }

            // Backbones (points)
            const step = 3;
            for (let x = leftPad; x < width - rightPad; x += step) {
                const u = (x - leftPad) / usableW;
                const phase = u * Math.PI * 2 * turns + t;

                const s = Math.sin(phase);
                const z = Math.cos(phase);
                const front = depth01(z);

                const yA = midY + s * amplitude;
                const yB = midY - s * amplitude;

                const dx = backboneOffset + front * 12;

                // Left backbone
                ctx.beginPath();
                ctx.arc(x - dx, yA, 1.3 + front * 1.9, 0, Math.PI * 2);
                ctx.fillStyle = withAlpha(colorA, 0.30 + front * 0.65);
                ctx.fill();

                // Right backbone
                ctx.beginPath();
                ctx.arc(x + dx, yB, 1.3 + front * 1.9, 0, Math.PI * 2);
                ctx.fillStyle = withAlpha(colorB, 0.30 + front * 0.65);
                ctx.fill();
            }

            rafRef.current = requestAnimationFrame(draw);
        }

        rafRef.current = requestAnimationFrame(draw);
        return () => cancelAnimationFrame(rafRef.current);
    }, [width, height, speed, turns, amplitude, backboneOffset, rungEvery]);

    return (
        <div style={{ position: "relative", width, height }}>
            <canvas
                ref={canvasRef}
                style={{
                    display: "block",
                    borderRadius: 14,
                    // Transparent background; shadow optional
                    boxShadow: "0 12px 40px rgba(0,0,0,0.20)",
                }}
            />
            <h1
                style={{
                    position: "absolute",
                    inset: 0,
                    margin: 0,
                    display: "grid",
                    placeItems: "center",
                    pointerEvents: "none",
                }}
            >
                <span
                    style={{
                        position: "relative",
                        color: "rgba(255,255,255,0.95)",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        textAlign: "center",
                        lineHeight: 1.4,
                        padding: 0,
                        border: 0,
                        display: "inline-block"
                    }}
                >
                    <svg
                        width="340"
                        height="60"
                        viewBox="0 0 340 60"
                        style={{
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 0,
                            pointerEvents: "none"
                        }}
                    >
                        <defs>
                            <radialGradient id="ellipseShadow" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#0B1020" stopOpacity="0.92" />
                                <stop offset="70%" stopColor="#0B1020" stopOpacity="0.55" />
                                <stop offset="100%" stopColor="#0B1020" stopOpacity="0.08" />
                            </radialGradient>
                        </defs>
                        <ellipse
                            cx="170"
                            cy="30"
                            rx="150"
                            ry="22"
                            fill="url(#ellipseShadow)"
                        />
                    </svg>
                    <span style={{ display: "block", fontSize: "0.9em", fontFamily: "system-ui, -apple-system, sans-serif", position: "relative", zIndex: 1 }}>{name}</span>
                    <span style={{ display: "block", fontSize: "0.65em", opacity: 0.7, fontWeight: 600, letterSpacing: "0.2em", fontFamily: "system-ui, -apple-system, sans-serif", position: "relative", zIndex: 1 }}>{title}</span>
                </span>
            </h1>
        </div>
    );
}