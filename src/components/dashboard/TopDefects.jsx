import { defects } from "../../data/dashboardData";

export default function TopDefects() {
  return (
    <div className="bg-mainSidebar p-4 rounded-lg">
      <h2 className="text-white mb-3">Top Defects</h2>

      {defects.map((item, i) => (
        <div key={i} className="mb-3">
          <p className="text-sm text-gray-400">{item.name}</p>

          <div className="bg-gray-700 h-2 mt-1">
            <div
              className="bg-blue-400 h-2"
              style={{ width: `${item.percent}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}