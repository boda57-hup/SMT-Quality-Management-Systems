import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import navIcon from "../assets/navIcon.png";
import KpiCard from "../components/dashboard/KpiCard.jsx";
import LinePerformance from "../components/dashboard/LineCard.jsx";
import TrendChart from "../components/dashboard/TrendChart.jsx";
import RecentActivity from "../components/dashboard/RecentActivity.jsx";
import TopDefects from "../components/dashboard/TopDefects.jsx";
import { kpiData } from "../data/dashboardData";

export default function Dashboard() {
  const { setNavData } = useOutletContext();
  useEffect(() => {
    setNavData({
      navLeft: (
        <div className="flex items-center gap-3">
          <img src={navIcon} alt="" className="w-5 h-5" />
          <h1 className="text-[14px] font-bold text-[#00E639] tracking-[-0.7px]">
            SMT QUALITY - QMS
          </h1>
        </div>
      ),

      statusList: [
        { label: "DB_SYNC", status: "online" },
        { label: "SENSOR_ARRAY", status: "online" },
      ],


    });
  }, []);


  return (
    <div className='w-full h-dvh bg-[#0D141C]'>
      {/* KPI */}
      <div className="grid grid-cols-5 gap-4">
        {kpiData.map((item, i) => (
          <KpiCard
            key={i}
            title={item.title}
            value={item.value}
          />
        ))}
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-3 gap-4">

        {/* Left */}
        <div className="col-span-2 flex flex-col gap-4">
          <LinePerformance />
          <TrendChart />
        </div>

        {/* Right */}
        <div className="flex flex-col gap-4">
          <RecentActivity />
          <TopDefects />
        </div>

      </div>
    </div>
  )
}
