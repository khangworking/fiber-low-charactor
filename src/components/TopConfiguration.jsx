import React from "react";
import { useCharacterCustomization } from "../context/CharacterCustomization";

const colors = Array.from(
  { length: 10 },
  () => "#" + Math.floor(Math.random() * 16777215).toString(16)
);

const TopConfiguration = () => {
  const { shirtColor, setShirtColor } = useCharacterCustomization();
  return (
    <div className="fixed bottom-3 left-3 p-4">
      <select
        onChange={(e) => setShirtColor(e.target.value)}
        className="block p-2 mb-2 text-sm rounded w-full border-blue-400"
        defaultValue={shirtColor}
      >
        <option>Select shirt color</option>
        {colors.map((color) => (
          <option key={`shirt-${color}`} value={color}>
            {color}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TopConfiguration;
