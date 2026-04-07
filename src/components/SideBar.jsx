import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="w-64 h-screen bg-mainSidebar text-Title font-medium p-4">


      <div className="flex flex-col items-center justify-center pb-10 border-b-2 border-borderSideBar">
        <div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">SMT QUALITY</h2>
          <p className="uppercase text-paragrafTitle ">enterprise qms</p>
        </div>
      </div>

      <div className="pt-5">
        <NavLink to="/" className="flex items-center gap-3 p-3 uppercase hover:bg-linksHovor hover:text-white ">
          {/* هنا حط الايكون */}
          <span>GLOBAL DASHBOARD</span>
        </NavLink>
        <NavLink to="/inspection" className="flex items-center gap-3 p-3 uppercase hover:bg-linksHovor hover:text-white">
          {/* هنا حط الايكون */}
          <span>inspection entry</span>
        </NavLink>
        <NavLink to="/defect" className="flex items-center gap-3 p-3 uppercase hover:bg-linksHovor hover:text-white">
          {/* هنا حط الايكون */}
          <span>defect catalog</span>
        </NavLink>
        <NavLink to="/linemonitoring" className="flex items-center gap-3 p-3 uppercase hover:bg-linksHovor hover:text-white">
          {/* هنا حط الايكون */}
          <span>line monitoring</span>
        </NavLink>
        <NavLink to="/reports" className="flex items-center gap-3 p-3 uppercase hover:bg-linksHovor hover:text-white">
          {/* هنا حط الايكون */}
          <span>reports & pdf</span>
        </NavLink>
        <NavLink to="/capa" className="flex items-center gap-3 p-3 uppercase hover:bg-linksHovor hover:text-white">
          {/* هنا حط الايكون */}
          <span>capa tracking</span>
        </NavLink>
        <NavLink to="/usercontrol" className="flex items-center gap-3 p-3 uppercase hover:bg-linksHovor hover:text-white">
          {/* هنا حط الايكون */}
          <span>user control</span>
        </NavLink>
        <NavLink to="/auditcomplance" className="flex items-center gap-3 p-3 uppercase hover:bg-linksHovor hover:text-white">
          {/* هنا حط الايكون */}
          <span>compliance</span>
        </NavLink>
        
      </div>
    </div>
  );
}