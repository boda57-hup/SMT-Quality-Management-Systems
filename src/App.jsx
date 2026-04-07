import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Inspection from "./pages/Inspection";
import Defect from "./pages/Defect";
import LineMonitoring from "./pages/LineMonitoring";
import Reports from "./pages/Reports"
import Capa from "./pages/Capa"
import UserControl from "./pages/UserControl"
import ScanPcb from "./pages/ScanPcb"
import AuditComplance from "./pages/AuditComplance"


import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index  element={<Dashboard />} />
          <Route path="/inspection"  element={<Inspection />} />
          <Route path="/defect"  element={<Defect />} />
          <Route path="/linemonitoring"  element={<LineMonitoring />} />
          <Route path="/reports"  element={<Reports />} />
          <Route path="/capa" element={<Capa />} />
          <Route path="/usercontrol" element={<UserControl />} />
          <Route path="/scanpcb" element={<ScanPcb />} />
          <Route path="/auditcomplance" element={<AuditComplance />} />
     

        </Route>

        
        <Route path="/login" element={<LoginPage />} />

      </Routes>
    </BrowserRouter>
  );
}

/*
          <Route path="/inspection" element={<Inspection />} />
          <Route path="/defect" element={<Defect />} />
          <Route path="/linemonitoring" element={<LineMonitoring />} />
          <Route path="/report" element={<Report />} />
          <Route path="/capa" element={<Capa />} />
          <Route path="/usercontrol" element={<UserControl />} />
          <Route path="/scanpcb" element={<ScanPcb />} />
          <Route path="/auditcomplance" element={<AuditComplance />} />


*/