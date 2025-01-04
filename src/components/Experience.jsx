import React, { Suspense } from "react";
import Woman from "./Woman";
import CameraControls from "./CameraControls";

const Experience = () => {
  return (
    <>
      <CameraControls />
      <ambientLight />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize={1024}
      />
      <group position={[0, -1, 0]}>
        <Suspense fallback={null}>
          <Woman />
        </Suspense>
      </group>
      <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        <planeGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};

export default Experience;
