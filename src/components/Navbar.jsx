import React from 'react'

export default function Navbar({ navLeft, statusList, actions }) {
  return (
    <div className="h-14 flex items-center justify-between px-6 bg-[#0D141C] text-white border-b-4 border-gray-800">

      {/* LEFT */}
      <div>
        {navLeft}
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-6">

        {/* Status */}
        <div className="flex gap-4 text-sm">
          {statusList?.map((item, i) => (
            <div key={item.label} className="flex items-center gap-1">
              <span
                className={`w-2 h-2 rounded-full shadow-[0_0_10px_#00E639,0_0_20px_#00E639,0_0_30px_#00E639] ${
                  item.status === "online"
                    ? "bg-[#00E639]"
                    : "bg-red-500"
                }`}
              ></span>
              <span className="text-paragraphMain text-[13px] leading-3.75 tracking-[0px]">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          {actions}
        </div>

        {/* User */}
        <div className="w-9 h-9 border bg-bordercolor2 border-cyan-500 flex items-center justify-center text-[#00E639] font-bold">
          AA
        </div>

      </div>
    </div>
  );
}
