'use client'
import type { SectionName } from '@/lib/types';
import React,{createContext, useContext, useState} from 'react'


type ActiveSectionContextProvider = {children:React.ReactNode};
type ActiveSectionContextType = {
    activeSection:SectionName,
    setActiveSection:React.Dispatch<React.SetStateAction<SectionName>>
    timeOfLastClick:number,
    settimeOfLastClick:React.Dispatch<React.SetStateAction<number>>
};


export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);
  
export default function ActiveSectionContextProvider({children}:ActiveSectionContextProvider) {

    
    const [activeSection,setActiveSection] = useState<SectionName>('Home');
    const [timeOfLastClick,settimeOfLastClick] = useState(0);


    return ( 
    <ActiveSectionContext.Provider value={{activeSection,setActiveSection,timeOfLastClick,settimeOfLastClick}}>{children}</ActiveSectionContext.Provider>
    )
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);

    if(context === null){
        throw new Error(
        "ActiveSectionContext must be used with an ActiveSectionContextProvider"
        );
    }
    return context;
}
