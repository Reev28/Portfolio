'use client';

import { createContext, useContext, useEffect, useState } from 'react'

interface Props {
    children: React.ReactNode;
}
type Theme = "light" | "dark";
type ThemeContextType ={
    theme: Theme;
    toggleTheme:() => void;
}
const themeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider(props: Props) {
    const {children} = props
    const [theme,setTheme] = useState<Theme>("light");

    const toggleTheme = () =>{
        if(theme==="light"){
            setTheme("dark");
            window.localStorage.setItem("theme","dark");
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light");
            window.localStorage.setItem("theme","light");
            document.documentElement.classList.remove("dark");
        }
    }

    useEffect(()=>{
        const localTheme= window.localStorage.getItem('theme') as Theme | null;
        if(localTheme){
            setTheme(localTheme);
            if(localTheme==="dark"){
            document.documentElement.classList.add("dark");
            }
        } else if(window.matchMedia("(prefers-color-scheme: dark)").matches){
            setTheme('dark');
            document.documentElement.classList.add("dark");
        }
    },[]);

    return (
        <themeContext.Provider value={{theme,toggleTheme}}>{children}</themeContext.Provider>
    )
}

export function useTheme(){
    const context = useContext(themeContext);

    if(context === null){
        throw new Error("useTheme must be used within a ThemeContextProvider");
    }

    return context;
}