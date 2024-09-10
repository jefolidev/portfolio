import { Outlet } from "react-router-dom";
import { useTheme } from "../../contexts/theme-context";
import { ContactMe } from "../app/main/contact-me";

export function AppLayout() {
  const { theme } = useTheme();
  return (
    <div className={`flex flex-col ${theme}`}>
      <Outlet />
      <ContactMe />
    </div>
  );
}
