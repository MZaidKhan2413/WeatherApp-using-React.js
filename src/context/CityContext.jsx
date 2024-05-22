import { createContext, useState } from "react";

export const CityContext = createContext();

export default function CityProvider({children}) {
    const [city, setCity] = useState("");

    const providerValue = {city, setCity}

    return (
        <CityContext.Provider value={providerValue}>
            {children}
        </CityContext.Provider>
    )
}