"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
    useEffect(() => {
      Crisp.configure("d4dd1490-c13d-4efa-90e4-66de459dd659")
    }, []);

    return null;
    
}