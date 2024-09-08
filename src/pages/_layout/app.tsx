import { Outlet } from "react-router-dom";
import { ContactMe } from "../app/main/contact-me";

export function AppLayout() {
  return (
    <div className="flex flex-col">
      <Outlet />
      <ContactMe />
    </div>
  );
}
