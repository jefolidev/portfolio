import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./contexts/theme-context";
import { router } from "./routes";

export function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <Helmet titleTemplate="%s | Portfólio " />
        <RouterProvider router={router} />
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
