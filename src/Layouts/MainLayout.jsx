import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function MainLayout() {
  const [navData, setNavData] = useState({
    navLeft: null,
    statusList: [],
    actions: null,
  });

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <SideBar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden">

        {/* Navbar */}
        <Navbar
          navLeft={navData.navLeft}
          statusList={navData.statusList}
          actions={navData.actions}
        />

        {/* Pages */}
        <div className="flex-1 text-white overflow-hidden bg-mainBackGround">
          <Outlet context={{ setNavData }} />
        </div>

      </div>
    </div>
  );
}