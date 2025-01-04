import React, { createContext, useState, useContext } from "react";

const CharacterCustomizationContext = createContext();

export const cameraModes = {
  FREE: "FREE",
  HEAD: "HEAD",
  TOP: "TOP",
  BOTTOM: "BOTTOM",
};

export const CharacterCustomizationProvider = ({ children }) => {
  const [cameraMode, setCameraMode] = useState(cameraModes.FREE);
  const [hairColor, setHairColor] = useState("#000000");
  const [eyeColor, setEyeColor] = useState("#000000");
  const [mouthColor, setMouthColor] = useState("#000000");
  const [glassColor, setGlassColor] = useState("#000000");
  const [shirtColor, setShirtColor] = useState("#000000");
  const [paintsColor, setPaintsColor] = useState("#000000");
  const [shoseColor, setShoseColor] = useState("#000000");
  const [lacesColor, setLacesColor] = useState("#000000");
  const [soleColor, setSoleColor] = useState("#000000");

  return (
    <CharacterCustomizationContext.Provider
      value={{
        cameraMode,
        setCameraMode,
        hairColor,
        setHairColor,
        eyeColor,
        setEyeColor,
        mouthColor,
        setMouthColor,
        glassColor,
        setGlassColor,
        shirtColor,
        setShirtColor,
        paintsColor,
        setPaintsColor,
        shoseColor,
        setShoseColor,
        lacesColor,
        setLacesColor,
        soleColor,
        setSoleColor,
      }}
    >
      {children}
    </CharacterCustomizationContext.Provider>
  );
};

export const useCharacterCustomization = () => {
  return useContext(CharacterCustomizationContext);
};
