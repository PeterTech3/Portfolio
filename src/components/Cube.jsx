import { useState } from "react";
import "../assets/styles/cube.scss";

export const Cube = ({ frontContent, backContent, index }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`cube-container cube-${index}`}>
      <div className={`cube ${flipped ? "flipped" : ""}`}>
        <aside
          onClick={() => setFlipped(!flipped)}
          className="cube-face cube-face-front"
        >
          <div className="cube-content">{frontContent}</div>
        </aside>
        <aside
          className="cube-face cube-face-back"
          onClick={() => setFlipped(!flipped)}
        >
          <div className="cube-content">{backContent}</div>
        </aside>
        <aside className="cube-face cube-face-left"></aside>
        <aside className="cube-face cube-face-right"></aside>
        <aside className="cube-face cube-face-top"></aside>
        <aside className="cube-face cube-face-bottom"></aside>
      </div>
    </div>
  );
};
