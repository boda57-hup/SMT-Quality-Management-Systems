import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <SideBar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden">

        {/* Navbar */}
        <Navbar />

        {/* Page Content - هنا هتظهر Dashboard وكل الصفحات */}
        <div className="flex-1 p-6 overflow-auto bg-mainBackGround">
          <Outlet />
        </div>

      </div>
    </div>
  );
}