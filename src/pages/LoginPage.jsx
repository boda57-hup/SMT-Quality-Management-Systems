import Inputs from '../components/Inputs';
import IconeLogin from '../assets/IconeLogin.png';
import LoginPageBG3 from '../assets/LoginPageBG3.png';

export default function LoginPage() {
  return (
    <div className='w-full h-screen  flex justify-center items-center'
      style={{ backgroundImage: `url(${LoginPageBG3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className=" bg-mainSidebar max-w-100 w-full mx-auto  rounded-md shadow-[0_10px_25px_rgba(0,0,0,0.15)] flex flex-col ">
        <div className='w-full flex flex-col justify-center items-center pt-5 pb-5 border-b-3 border-amber-400'>
          <img src={IconeLogin} className='w-20 pb-6' />
          <h1 className='uppercase text-cardsBackground  text-[24px] font-bold font-Space leading-8 tracking-[0.6px]'>SMT PRECISION</h1>
          <p className='uppercase text-paragrafTitle font-Inter text-[10px] leading-3.75 tracking-[2px]'>Quality Management System</p>
        </div>
        <div>
          <Inputs />
        </div>

        <div className="flex items-center justify-between py-4 px-6 bg-[#151C24] border-b-4 border-bordercolor2">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-3">
            <span
              className={`w-3 h-3 rounded-full shadow-[0_0_8px_#00E639] ${status === "online"
                  ? "bg-[#00E639]"
                  : "bg-red-500"
                }`}
            />

            <p
              className={`font-mono text-sm ${status === "online"
                  ? "text-[#72FF70]"
                  : "text-red-400"
                }`}
            >
              SERVER_STATUS: {status.toUpperCase()}
            </p>
          </div>

          {/* RIGHT SIDE */}
          <p className="text-[#43474F] text-sm font-mono">
            V 1.0.0-LTS
          </p>

        </div>
      </div>
    </div>
  )
}
