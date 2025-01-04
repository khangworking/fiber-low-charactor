import React from "react";
import { useCharacterCustomization } from "../context/CharacterCustomization";

const colors = Array.from(
  { length: 10 },
  () => "#" + Math.floor(Math.random() * 16777215).toString(16)
);

const BottomConfiguration = () => {
  const {
    paintsColor,
    setPaintsColor,
    shoseColor,
    setShoseColor,
    lacesColor,
    setLacesColor,
    soleColor,
    setSoleColor,
  } = useCharacterCustomization();
  return (
    <div className="fixed bottom-3 left-3 p-4">
      <select
        onChange={(e) => setPaintsColor(e.target.value)}
        className="block p-2 mb-2 text-sm rounded w-full border-blue-400"
        defaultValue={paintsColor}
      >
        <option>Select pant color</option>
        {colors.map((color) => (
          <option key={`paint-${color}`} value={color}>
            {color}
          </option>
        ))}
      </select>

      <select
        onChange={(e) => setShoseColor(e.target.value)}
        className="block p-2 mb-2 text-sm rounded w-full border-blue-400"
        defaultValue={shoseColor}
      >
        <option>Select shoses color</option>
        {colors.map((color) => (
          <option key={`pant-${color}`} value={color}>
            {color}
          </option>
        ))}
      </select>

      <select
        onChange={(e) => setLacesColor(e.target.value)}
        className="block p-2 mb-2 text-sm rounded w-full border-blue-400"
        defaultValue={lacesColor}
      >
        <option>Select lace color</option>
        {colors.map((color) => (
          <option key={`lace-${color}`} value={color}>
            {color}
          </option>
        ))}
      </select>

      <select
        onChange={(e) => setSoleColor(e.target.value)}
        className="block p-2 mb-2 text-sm rounded w-full border-blue-400"
        defaultValue={soleColor}
      >
        <option>Select sole color</option>
        {colors.map((color) => (
          <option key={`sole-${color}`} value={color}>
            {color}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BottomConfiguration;
