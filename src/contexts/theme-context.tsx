import { createContext, useContext, useState } from "react";
import { MoonIcon } from "../components/ui/icons/moon-icon";
import { SunIcon } from "../components/ui/icons/sun-icon";

type ThemeContextTypes = {
  theme: string;
  darkIcon: JSX.Element;
  themeChanger: () => void;
};

const ThemeContext = createContext({} as ThemeContextTypes);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");
  const [darkIcon, setDarkIcon] = useState(<SunIcon />);

  function themeChanger() {
    theme === "light" ? setTheme("dark") : setTheme("light");
    theme === "light" ? setDarkIcon(<MoonIcon />) : setDarkIcon(<SunIcon />);
  }

  console.log(theme);

  return (
    <ThemeContext.Provider value={{ theme, darkIcon, themeChanger }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
