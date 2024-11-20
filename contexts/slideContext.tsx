import React, { createContext, useState, ReactNode } from "react";
import { View, Text } from "react-native";

interface SlideContextType {
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
}

interface SlideProviderProps {
  children: ReactNode;
}

export const SlideContext = createContext<SlideContextType | undefined>(undefined);

const SlideProvider = ({ children }: SlideProviderProps) => {
  const [currentSlide, setCurrentSlide] = useState<number>(1);

  return (
    <SlideContext.Provider value={{ currentSlide, setCurrentSlide }}>
      {children}
    </SlideContext.Provider>
  );
};

export default SlideProvider;
