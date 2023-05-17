import { createContext, useState } from "react";

export const FilterContext = createContext();

export function FilterContextProvider({ children }) {
    const [sliderValue, setSliderValue] = useState(3);
    const [category,setCategory] = useState("");
    const [isLoading,setIsLoading] = useState(false);
  return <FilterContext.Provider value={{sliderValue,setSliderValue,isLoading,setIsLoading,category,setCategory}}>{children}</FilterContext.Provider>;
}
