import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div className="h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-16" data-testid="outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;