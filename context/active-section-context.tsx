'use client'
import React,{createContext, useContext, useState} from 'react'
import {links} from "@/lib/data"

type SectionName = (typeof links)[number]["name"];
type ActiveSectionContextProvider = {children:React.ReactNode};
type ActiveSectionContextType = {activeSection:SectionName,setActiveSection:React.Dispatch<React.SetStateAction<SectionName>>};


export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);
  
export default function ActiveSectionContextProvider({children}:ActiveSectionContextProvider) {

    
    const [activeSection,setActiveSection]=useState<SectionName>('Home');

    return ( 
    <ActiveSectionContext.Provider value={{activeSection,setActiveSection}}>{children}</ActiveSectionContext.Provider>
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