export default function KpiCard({title, value, change, status, color = "green",}) {
  const colorMap = {
    green: {
      text: "text-[#00E639]",
      border: "border-[#00E639]",
      bg: "bg-[#00E639]",
    },
    red: {
      text: "text-[#FF4D4F]",
      border: "border-[#FF4D4F]",
      bg: "bg-[#FF4D4F]",
    },
    gray: {
      text: "text-gray-400",
      border: "border-gray-500",
      bg: "bg-gray-400",
    },
  };

  return (
    <div className="relative bg-mainSidebar px-5 py-4 my-5 rounded-md border border-[#1f2937] overflow-hidden">

      {/* الخط الجانبي */}
      <div className={`absolute left-0 top-0 h-full w-0.5 ${colorMap[color].bg}`} />

      {/* Title */}
      <p className="text-[11px] tracking-widest text-gray-400 mb-2">
        {title}
      </p>

      {/* Value + Change */}
      <div className="flex items-center gap-2">
        <h2 className="text-2xl font-bold text-white">{value}</h2>

        {change && (
          <span className={`text-xs ${colorMap[color].text}`}>
            {change}
          </span>
        )}
      </div>

      {/* Status */}
      {status && (
        <p className={`text-xs mt-1 ${colorMap[color].text}`}>
          {status}
        </p>
      )}

      {/* Progress Bar */}
      <div className="mt-3 h-1 bg-gray-700 rounded">
        <div
          className={`h-full ${colorMap[color].bg}`}
          style={{ width: "60%" }} // نعدلها ديناميك بعدين
        />
      </div>

    </div>
  );
}