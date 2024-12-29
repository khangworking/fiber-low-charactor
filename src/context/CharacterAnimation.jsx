import React, { createContext, useState, useContext } from "react";

const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
  const [animationIndex, setAnimationIndex] = useState(1);
  const [animations, setAnimations] = useState([]);

  return (
    <AnimationContext.Provider
      value={{ animationIndex, setAnimationIndex, animations, setAnimations }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => {
  return useContext(AnimationContext);
};
