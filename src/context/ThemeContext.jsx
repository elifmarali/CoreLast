import { createContext, useState } from "react";
const ThemeContext = createContext();

function ThemeProvider ({children}){
    const [theme,setTheme]=useState();
    const data={
        theme,
        setTheme
    }
return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}
export default ThemeContext;
export {ThemeProvider};