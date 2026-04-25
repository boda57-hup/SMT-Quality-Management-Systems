import { lineData } from "../../data/dashboardData";

export default function LinePerformance() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {lineData.map((line, i) => (
        <div key={i} className="bg-mainSidebar p-4 rounded-lg">
          <p className="text-gray-400">{line.name}</p>

          <h2 className="text-xl text-white">{line.percent}%</h2>

          <span
            className={
              line.status === "running"
                ? "text-green-500"
                : "text-red-500"
            }
          >
            {line.status}
          </span>
        </div>
      ))}
    </div>
  );
}