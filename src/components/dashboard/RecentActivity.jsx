import { activities } from "../../data/dashboardData";

export default function RecentActivity() {
  return (
    <div className="bg-mainSidebar p-4 rounded-lg">
      <h2 className="text-white mb-3">Recent Activity</h2>

      {activities.map((item, i) => (
        <div key={i} className="flex justify-between text-sm mb-2">
          <span>{item.time}</span>
          <span>{item.id}</span>
          <span
            className={
              item.status === "PASS"
                ? "text-green-500"
                : "text-red-500"
            }
          >
            {item.status}
          </span>
        </div>
      ))}
    </div>
  );
}