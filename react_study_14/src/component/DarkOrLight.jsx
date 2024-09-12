import { useState, useCallback } from "react";
import ThemeContext from "./ThemeContext";
import MainContents from "./MainContents";

function DarkOrLight(props) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = useCallback(() => {
        if (theme == "light") {
            setTheme("dark");
        }
        else {
            setTheme("light")
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <MainContents />
        </ThemeContext.Provider>
    )
}

export default DarkOrLight;