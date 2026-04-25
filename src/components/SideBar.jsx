import { NavLink } from "react-router-dom";
/*---------------الايقونات العادية --------------*/
import dashboardIcon from "../assets/dashboardIcon.png";
import inspectionIcon from "../assets/inspectionIcon.png";
import deffectIcon from "../assets/deffectIcon.png";
import mountoringIcon from "../assets/mountoringIcon.png";
import reportIcon from "../assets/reportIcon.png";
import capaIcon from "../assets/capaIcon.png";
import userIcon from "../assets/userIcon.png";
import auditIcon from "../assets/auditIcon.png";
import iconTopSidebar from "../assets/SMTLogo.png";
/*---------------الايقونات الصفراء --------------*/
import dashIconYelow from "../assets/dashIconYelow.png";
import inspectionIconYelow from "../assets/inspectionIconYelow.png";
import defectIconYelow from "../assets/defectIconYelow.png";
import productionIconYelow from "../assets/productionIconYelow.png";
import reportIconYelow from "../assets/reportIconYelow.png";
import CAPAIconYelow from "../assets/CAPAIconYelow.png";
import UserIconYelow from "../assets/UserIconYelow.png";
import AuditIconYelow from "../assets/AuditIconYelow.png";

export default function SideBar() {
  return (
    <div className="w-64 h-screen bg-mainSidebar text-Title font-medium p-4 flex flex-col">

      {/* Logo / Header */}
      <div className="flex flex-col items-center justify-center py-3 gap-3 border-b-2 border-borderSideBar">
        <img src={iconTopSidebar} alt=""  className="w-20"/>
        <h2 className="text-2xl font-bold text-white">SMT QUALITY</h2>
      </div>

      {/* Navigation Menu */}
      <div className="pt-6 flex-1">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `group flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all duration-200 uppercase text-sm font-medium ${isActive
              ? "bg-bordercolor2 text-[#00E639] border-l-4 border-green-500"
              : "hover:bg-[#1F2A44] hover:text-[#00E639] hover:border-l-4 hover:border-green-500"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <img
                src={isActive ? dashIconYelow : dashboardIcon}
                alt=""
                className="w-5 h-5 transition-colors "
              />
              <span>GLOBAL DASHBOARD</span>
            </>
          )}
        </NavLink>
        {/* Navigation Inspection */}
        <NavLink
          to="/inspection"
          className={({ isActive }) =>
            `group flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all duration-200 uppercase text-sm font-medium ${isActive
              ? "bg-bordercolor2 text-[#00E639] border-l-4 border-green-500"
              : "hover:bg-[#1F2A44] hover:text-[#00E639] hover:border-l-4 hover:border-green-500"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <img
                src={isActive ? inspectionIconYelow : inspectionIcon}
                alt=""
                className="w-5 h-5 transition-colors "
              />
              <span>Inspection</span>
            </>
          )}
        </NavLink>
        {/* Navigation devect */}
        <NavLink
          to="/defect"
          className={({ isActive }) =>
            `group flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all duration-200 uppercase text-sm font-medium ${isActive
              ? "bg-bordercolor2 text-[#00E639] border-l-4 border-green-500"
              : "hover:bg-[#1F2A44] hover:text-[#00E639] hover:border-l-4 hover:border-green-500"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <img
                src={isActive ? defectIconYelow : deffectIcon}
                alt=""
                className="w-5 h-5 transition-colors "
              />
              <span>Defect Management</span>
            </>
          )}
        </NavLink>
        {/* Navigation LInemonitoring */}
        <NavLink
          to="/linemonitoring"
          className={({ isActive }) =>
            `group flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all duration-200 uppercase text-sm font-medium ${isActive
              ? "bg-bordercolor2 text-[#00E639] border-l-4 border-green-500"
              : "hover:bg-[#1F2A44] hover:text-[#00E639] hover:border-l-4 hover:border-green-500"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <img
                src={isActive ? productionIconYelow : mountoringIcon}
                alt=""
                className="w-5 h-5 transition-colors "
              />
              <span>Line Monitoring</span>
            </>
          )}
        </NavLink>
        {/* Navigation Report */}
        <NavLink
          to="/reports"
          className={({ isActive }) =>
            `group flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all duration-200 uppercase text-sm font-medium ${isActive
              ? "bg-bordercolor2 text-[#00E639] border-l-4 border-green-500"
              : "hover:bg-[#1F2A44] hover:text-[#00E639] hover:border-l-4 hover:border-green-500"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <img
                src={isActive ? reportIconYelow : reportIcon}
                alt=""
                className="w-5 h-5 transition-colors "
              />
              <span>Reports</span>
            </>
          )}
        </NavLink>
        {/* Navigation CAPA */}
        <NavLink
          to="/capa"
          className={({ isActive }) =>
            `group flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all duration-200 uppercase text-sm font-medium ${isActive
              ? "bg-bordercolor2 text-[#00E639] border-l-4 border-green-500"
              : "hover:bg-[#1F2A44] hover:text-[#00E639] hover:border-l-4 hover:border-green-500"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <img
                src={isActive ? CAPAIconYelow : capaIcon}
                alt=""
                className="w-5 h-5 transition-colors "
              />
              <span>CAPA</span>
            </>
          )}
        </NavLink>
        {/* Navigation Usercontrol */}
        <NavLink
          to="/usercontrol"
          className={({ isActive }) =>
            `group flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all duration-200 uppercase text-sm font-medium ${isActive
              ? "bg-bordercolor2 text-[#00E639] border-l-4 border-green-500"
              : "hover:bg-[#1F2A44] hover:text-[#00E639] hover:border-l-4 hover:border-green-500"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <img
                src={isActive ? UserIconYelow : userIcon}
                alt=""
                className="w-5 h-5 transition-colors "
              />
              <span>User Management</span>
            </>
          )}
        </NavLink>
        {/* Navigation Auditcomplance */}
        <NavLink
          to="/auditcomplance"
          className={({ isActive }) =>
            `group flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all duration-200 uppercase text-sm font-medium ${isActive
              ? "bg-bordercolor2 text-[#00E639] border-l-4 border-green-500"
              : "hover:bg-[#1F2A44] hover:text-[#00E639] hover:border-l-4 hover:border-green-500"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <img
                src={isActive ? AuditIconYelow : auditIcon}
                alt=""
                className="w-5 h-5 transition-colors "
              />
              <span>Audit & Compliance</span>
            </>
          )}
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