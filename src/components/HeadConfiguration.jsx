import React from "react";
import { useCharacterCustomization } from "../context/CharacterCustomization";

const colors = Array.from(
  { length: 10 },
  () => "#" + Math.floor(Math.random() * 16777215).toString(16)
);

const HairConfiguration = () => {
  const {
    hairColor,
    setHairColor,
    eyeColor,
    setEyeColor,
    mouthColor,
    setMouthColor,
    glassColor,
    setGlassColor,
  } = useCharacterCustomization();
  return (
    <div className="fixed bottom-3 left-3 p-4">
      <select
        onChange={(e) => setHairColor(e.target.value)}
        className="block p-2 mb-2 text-sm rounded w-full border-blue-400"
        defaultValue={hairColor}
      >
        <option>Select hair color</option>
        {colors.map((color) => (
          <option key={`hair-${color}`} value={color}>
            {color}
          </option>
        ))}
      </select>

      <select
        onChange={(e) => setEyeColor(e.target.value)}
        className="block p-2 mb-2 text-sm rounded w-full border-blue-400"
        defaultValue={eyeColor}
      >
        <option>Select eyes color</option>
        {colors.map((color) => (
          <option key={`eyes-${color}`} value={color}>
            {color}
          </option>
        ))}
      </select>

      <select
        onChange={(e) => setGlassColor(e.target.value)}
        className="block p-2 mb-2 text-sm rounded w-full border-blue-400"
        defaultValue={glassColor}
      >
        <option>Select glass color</option>
        {colors.map((color) => (
          <option key={`glass-${color}`} value={color}>
            {color}
          </option>
        ))}
      </select>

      <select
        onChange={(e) => setMouthColor(e.target.value)}
        className="block p-2 mb-2 text-sm rounded w-full border-blue-400"
        defaultValue={mouthColor}
      >
        <option>Select mouth color</option>
        {colors.map((color) => (
          <option key={`mouth-${color}`} value={color}>
            {color}
          </option>
        ))}
      </select>
    </div>
  );
};

export default HairConfiguration;
