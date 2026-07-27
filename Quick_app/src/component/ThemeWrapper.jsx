import React from "react";
import { getDarkMode } from "../utils/settingsStorage";

const ThemeWrapper = ({ children }) => {

    const darkMode = getDarkMode();

    return (

        <div
            className={`min-h-screen duration-300 ${
                darkMode
                ?
                "bg-[#0F172A] text-white"
                :
                "bg-white text-black"
            }`}
        >

            {children}

        </div>

    );

};

export default ThemeWrapper;