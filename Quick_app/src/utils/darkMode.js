import { getDarkMode } from "./settingsStorage";


export const applyDarkMode = () => {

    const isDark = getDarkMode();

    if (isDark) {

        document.documentElement.classList.add("dark");

    }

    else {

        document.documentElement.classList.remove("dark");

    }

};


export const toggleDarkMode = () => {

    const isDark = document
        .documentElement
        .classList
        .contains("dark");


    if (isDark) {

        document
            .documentElement
            .classList
            .remove("dark");

    }

    else {

        document
            .documentElement
            .classList
            .add("dark");

    }

};
