import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

//Las formas se unen al raton
export const ParticlesBackground = ({ config, id }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine); // Carga todas las formas, incluyendo caracteres
    }).then(() => {
      setInit(true);
    });
  }, []);
  
  if (init) {
    return <Particles id={id} options={config} />;
  }

  return null;
};

