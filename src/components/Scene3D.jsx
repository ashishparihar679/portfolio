import { useRef } from "react";
import { useReducedMotion } from "framer-motion";
import portrait from "../assets/profile.jpg";

/** A lightweight, pointer-reactive CSS 3D scene; it needs no WebGL runtime. */
export default function Scene3D() {
  const sceneRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const handlePointerMove = (event) => {
    if (reduceMotion || event.pointerType !== "mouse" || !sceneRef.current) return;
    const bounds = sceneRef.current.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    sceneRef.current.style.setProperty("--scene-rx", `${-y * 10}deg`);
    sceneRef.current.style.setProperty("--scene-ry", `${x * 14}deg`);
    sceneRef.current.style.setProperty("--scene-x", `${x * 12}px`);
    sceneRef.current.style.setProperty("--scene-y", `${y * 12}px`);
  };

  const resetPointer = () => {
    if (!sceneRef.current) return;
    sceneRef.current.style.setProperty("--scene-rx", "0deg");
    sceneRef.current.style.setProperty("--scene-ry", "0deg");
    sceneRef.current.style.setProperty("--scene-x", "0px");
    sceneRef.current.style.setProperty("--scene-y", "0px");
  };

  return (
    <div
      ref={sceneRef}
      className="scene-3d"
      role="img"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      aria-label="Portrait of Ashish Ahirwar surrounded by floating developer skill labels"
    >
      <div className="scene-glow" />
      <div className="scene-orbit scene-orbit-a" />
      <div className="scene-orbit scene-orbit-b" />
      <div className="scene-plane" />

      <div className="scene-object" aria-hidden="true">
        <div className="scene-cube">
          <span className="cube-face cube-front">&lt;/&gt;</span>
          <span className="cube-face cube-back" />
          <span className="cube-face cube-right" />
          <span className="cube-face cube-left" />
          <span className="cube-face cube-top" />
          <span className="cube-face cube-bottom" />
        </div>
      </div>

      <div className="portrait-card">
        <img src={portrait} alt="" />
        <span className="portrait-caption"><i /> Building thoughtful digital products</span>
      </div>

      <div className="scene-chip chip-react"><b>⚛</b> React.js</div>
      <div className="scene-chip chip-python"><b>Py</b> Python</div>
      <div className="scene-chip chip-django"><b>◈</b> Django REST</div>
      <div className="scene-code" aria-hidden="true">01 <span> / </span> 04<br /><small>BUILD · SHIP · IMPROVE</small></div>
    </div>
  );
}
