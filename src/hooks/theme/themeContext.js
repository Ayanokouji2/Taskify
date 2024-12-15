import { useContext, createContext } from "react";


export const ThemeContext = createContext()

export default function useTheme(){
    return useContext(ThemeContext)
}