import React, { useContext, useRef, useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import {
  cameraModes,
  useCharacterCustomization,
} from "../context/CharacterCustomization.jsx";
import { useFrame } from "@react-three/fiber";

import * as THREE from "three";

const cameraPositions = {
  [cameraModes.HEAD]: {
    position: new THREE.Vector3(0, 0.5, 1),
    target: new THREE.Vector3(0, 0.5, 0),
  },
  [cameraModes.TOP]: {
    position: new THREE.Vector3(-0.5, 0.2, 1.5),
    target: new THREE.Vector3(0, 0.2, 0),
  },
  [cameraModes.BOTTOM]: {
    position: new THREE.Vector3(0, -0.5, 2.5),
    target: new THREE.Vector3(0, -0.5, 0),
  },
};

const CameraControls = () => {
  const { cameraMode, setCameraMode } = useCharacterCustomization();
  const orbotControls = useRef();

  useFrame(({ camera }, delta) => {
    if (cameraMode === "FREE") {
      return;
    }
    camera.position.lerp(cameraPositions[cameraMode].position, delta * 3);
    orbotControls.current.target.lerp(
      cameraPositions[cameraMode].target,
      delta * 3
    );
  });

  return (
    <OrbitControls
      ref={orbotControls}
      onStart={() => {
        setCameraMode(cameraModes.FREE);
      }}
    />
  );
};

export default CameraControls;
