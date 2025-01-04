import React from "react";
import { useAnimation } from "../context/CharacterAnimation";
import {
  cameraModes,
  useCharacterCustomization,
} from "../context/CharacterCustomization";
import HairConfiguration from "./HeadConfiguration";
import TopConfiguration from "./TopConfiguration";
import BottomConfiguration from "./BottomComfigucation";

const Configuration = () => {
  const { animations, setAnimationIndex } = useAnimation();
  const { setCameraMode, cameraMode } = useCharacterCustomization();
  return (
    <>
      <div className="fixed top-3 left-3">
        {Object.keys(cameraModes).map((mode) => (
          <button
            key={`cameraMode-${mode}`}
            className={`px-2 py-1 mr-1 text-sm text-white rounded ${
              mode === cameraMode ? "bg-blue-500" : "bg-blue-300"
            }`}
            onClick={() => setCameraMode(cameraModes[mode])}
          >
            {cameraModes[mode]}
          </button>
        ))}
      </div>
      {cameraMode === cameraModes.HEAD && <HairConfiguration />}
      {cameraMode === cameraModes.TOP && <TopConfiguration />}
      {cameraMode === cameraModes.BOTTOM && <BottomConfiguration />}
      <div className="fixed top-3 right-3 p-4 bg-slate-200 bg-opacity-70 rounded-md">
        <div className="text-sm pb-2 border-b border-b-black mb-2">
          Animations
        </div>
        {animations.map((animation, index) => (
          <button
            key={`animation-${index}`}
            className="block p-2 mb-2 text-sm text-white bg-blue-500 rounded w-full"
            onClick={() => setAnimationIndex(index)}
          >
            {animation}
          </button>
        ))}
      </div>
    </>
  );
};

export default Configuration;
