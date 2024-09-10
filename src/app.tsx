import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./contexts/theme-context";
import { router } from "./routes";

export function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
