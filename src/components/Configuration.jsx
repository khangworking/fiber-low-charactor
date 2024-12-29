import React from "react";
import { useAnimation } from "../context/CharacterAnimation";

const Configuration = () => {
  const { animations, setAnimationIndex } = useAnimation();
  return (
    <div className="fixed bottom-3 right-3 p-4">
      <div className="text-xl uppercase font-semibold">Animations</div>
      {animations.map((animation, index) => (
        <button
          key={index}
          className="block p-2 mb-2 text-sm text-white bg-blue-500 rounded w-full"
          onClick={() => setAnimationIndex(index)}
        >
          {animation}
        </button>
      ))}
    </div>
  );
};

export default Configuration;
