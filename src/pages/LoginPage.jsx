import { useState } from 'react';
import Inputs from '../components/Inputs';
import IconeLogin from '../assets/IconeLogin.png';
import bg from '../assets/LoginPageBG.png';
import SmtLogin from '../assets/SmtLogin.jpg';   // ← الصورة الصناعية

export default function LoginPage() {
  const [status] = useState("online");

  return (
    <div 
      className='w-full h-screen flex justify-center items-center p-4'
      style={{ 
        backgroundImage: `url(${bg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      {/* Container الرئيسي - Split Design */}
      <div className="w-full max-w-6xl mx-auto bg-mainSidebar rounded-2xl shadow-2xl overflow-hidden flex max-h-[97vh]">

        {/* الجانب الأيسر - الصورة (أوسع دلوقتي) */}
        <div className="hidden lg:block w-7/12 relative">   {/* غيرت من 5/12 إلى 7/12 */}
          <img 
            src={SmtLogin} 
            alt="SMT Manufacturing" 
            className="w-full h-full object-cover"
          />
          {/* Overlay خفيف */}
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />
          
          {/* نص فوق الصورة (اختياري) */}
          <div className="absolute bottom-12 left-12 text-white">
            <p className="text-3xl font-bold font-Space tracking-wide">SMT PRECISION</p>
            <p className="text-lg text-gray-300 mt-2">Advanced Electronics Manufacturing</p>
          </div>
        </div>

        {/* الجانب الأيمن - اللوجن (أنحف دلوقتي) */}
        <div className="flex-1 flex flex-col lg:w-5/12">   {/* غيرت من 7/12 إلى 5/12 */}

          {/* Header */}
          <div className='w-full flex flex-col justify-center items-center pt-8 pb-6 border-b-3 border-amber-400 bg-mainSidebar'>
            <img src={IconeLogin} className='w-20 pb-6' alt="Login Icon" />
            <h1 className='uppercase text-cardsBackground text-[26px] font-bold font-Space leading-8 tracking-[0.6px]'>
              SMT PRECISION
            </h1>
            <p className='uppercase text-paragrafTitle font-Inter text-[10px] leading-3.75 tracking-[2px]'>
              Quality Management System
            </p>
          </div>

          {/* Form Area */}
          <div className="flex-1 px-5 py-0 overflow-auto">
            <Inputs />
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between py-4 px-8 bg-[#151C24] border-t-4 border-bordercolor2 mt-auto">
            <div className="flex items-center gap-3">
              <span
                className={`w-3 h-3 rounded-full shadow-[0_0_8px_#00E639] ${
                  status === "online" ? "bg-[#00E639]" : "bg-red-500"
                }`}
              />
              <p
                className={`font-mono text-sm ${
                  status === "online" ? "text-[#72FF70]" : "text-red-400"
                }`}
              >
                SERVER_STATUS: {status.toUpperCase()}
              </p>
            </div>

            <p className="text-[#43474F] text-sm font-mono">
              V 1.0.1-LTS
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}