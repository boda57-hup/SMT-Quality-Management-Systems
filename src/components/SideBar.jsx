import { NavLink } from "react-router-dom";
import dashboardIcon from "../assets/dashicon.png";
import inspectionIcon from "../assets/inspectionIcon.png";
import deffectIcon from "../assets/deffectIcon.png";
import mountoringIcon from "../assets/mountoringIcon.png";
import reportIcon from "../assets/reportIcon.png";
import capaIcon from "../assets/capaIcon.png";
import userIcon from "../assets/userIcon.png";
import auditIcon from "../assets/auditIcon.png";

export default function SideBar() {
  return (
    <div className="w-64 h-screen bg-mainSidebar text-Title font-medium p-4 flex flex-col">

      {/* Logo / Header */}
      <div className="flex flex-col items-center justify-center pb-10 border-b-2 border-borderSideBar">
        <h2 className="text-2xl font-bold text-white">SMT PRECISION</h2>
        <p className="uppercase text-paragrafTitle text-sm tracking-widest">Quality Management System</p>
      </div>

      {/* Navigation Menu */}
      <div className="pt-6 flex-1">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `group flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all duration-200 uppercase text-sm font-medium ${
              isActive 
                ? "bg-bordercolor2 text-white border-l-4 border-green-500" 
                : "hover:bg-[#1F2A44] hover:text-white hover:border-l-4 hover:border-green-500"
            }`
          }
        >
          <img src={dashboardIcon} alt="" className="w-5 h-5" />
          <span>GLOBAL DASHBOARD</span>
        </NavLink>

        <NavLink
          to="/inspection"
          className={({ isActive }) =>
            `group flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all duration-200 uppercase text-sm font-medium ${
              isActive 
                ? "bg-bordercolor2 text-white border-l-4 border-green-500" 
                : "hover:bg-[#1F2A44] hover:text-white hover:border-l-4 hover:border-green-500"
            }`
          }
        >
          <img src={inspectionIcon} alt="" className="w-5 h-5" />
          <span>INSPECTION ENTRY</span>
        </NavLink>

        <NavLink
          to="/defect"
          className={({ isActive }) =>
            `group flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all duration-200 uppercase text-sm font-medium ${
              isActive 
                ? "bg-bordercolor2 text-white border-l-4 border-green-500" 
                : "hover:bg-[#1F2A44] hover:text-white hover:border-l-4 hover:border-green-500"
            }`
          }
        >
          <img src={deffectIcon} alt="" className="w-5 h-5" />
          <span>DEFECT CATALOG</span>
        </NavLink>

        <NavLink
          to="/linemonitoring"
          className={({ isActive }) =>
            `group flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all duration-200 uppercase text-sm font-medium ${
              isActive 
                ? "bg-bordercolor2 text-white border-l-4 border-green-500" 
                : "hover:bg-[#1F2A44] hover:text-white hover:border-l-4 hover:border-green-500"
            }`
          }
        >
          <img src={mountoringIcon} alt="" className="w-5 h-5" />
          <span>LINE MONITORING</span>
        </NavLink>

        <NavLink
          to="/reports"
          className={({ isActive }) =>
            `group flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all duration-200 uppercase text-sm font-medium ${
              isActive 
                ? "bg-bordercolor2 text-white border-l-4 border-green-500" 
                : "hover:bg-[#1F2A44] hover:text-white hover:border-l-4 hover:border-green-500"
            }`
          }
        >
          <img src={reportIcon} alt="" className="w-5 h-5" />
          <span>REPORTS & PDF</span>
        </NavLink>

        <NavLink
          to="/capa"
          className={({ isActive }) =>
            `group flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all duration-200 uppercase text-sm font-medium ${
              isActive 
                ? "bg-bordercolor2 text-white border-l-4 border-green-500" 
                : "hover:bg-[#1F2A44] hover:text-white hover:border-l-4 hover:border-green-500"
            }`
          }
        >
          <img src={capaIcon} alt="" className="w-5 h-5" />
          <span>CAPA TRACKING</span>
        </NavLink>

        <NavLink
          to="/usercontrol"
          className={({ isActive }) =>
            `group flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all duration-200 uppercase text-sm font-medium ${
              isActive 
                ? "bg-bordercolor2 text-white border-l-4 border-green-500" 
                : "hover:bg-[#1F2A44] hover:text-white hover:border-l-4 hover:border-green-500"
            }`
          }
        >
          <img src={userIcon} alt="" className="w-5 h-5" />
          <span>USER CONTROL</span>
        </NavLink>

        <NavLink
          to="/auditcomplance"
          className={({ isActive }) =>
            `group flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all duration-200 uppercase text-sm font-medium ${
              isActive 
                ? "bg-bordercolor2 text-white border-l-4 border-green-500" 
                : "hover:bg-[#1F2A44] hover:text-white hover:border-l-4 hover:border-green-500"
            }`
          }
        >
          <img src={auditIcon} alt="" className="w-5 h-5" />
          <span>COMPLIANCE & AUDIT</span>
        </NavLink>
      </div>

      {/* Footer Version */}
      <div className="mt-auto pt-6">
        <div className="bg-[#1F252D] text-xs text-gray-400 p-3 rounded-lg">
          <div>SW_VER: 4.2.0-STABLE</div>
          <div>ENC_STATUS: ACTIVE</div>
        </div>
      </div>

    </div>
  );
}