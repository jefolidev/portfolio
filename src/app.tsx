import { RouterProvider } from "react-router-dom";
import { ThemeProvider, useTheme } from "./contexts/theme-context";
import { router } from "./routes";

export function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider>
      <div className={theme}>
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
