import { Outlet, ScrollRestoration } from "react-router-dom";
import { useTheme } from "../../contexts/theme-context";
import { ContactMe } from "../app/main/contact-me";

export function AppLayout() {
  const { theme } = useTheme();
  return (
    <div className={`flex flex-col overflow-x-hidden ${theme}`}>
      <Outlet />
      <ContactMe />
      <ScrollRestoration />
    </div>
  );
}
