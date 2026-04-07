import Warningimg from '../assets/Warningimg.svg'

export default function WarningNote() {
    return (
        <div className="flex justify-center items-start gap-3  p-3 bg-[#171e25] border-l-bordercolor border-l-2">
            <img src={Warningimg} alt="" className="w-10" />
            <p className="text-md text-[9px] text-warning leading-[11.3px] tracking-[0px] ">
                AUTHORIZED PERSONNEL ONLY. ALL ACTIONS ARE LOGGED UNDER ISO-
                9001 COMPLIANCE PROTOCOLS. UNAUTHORIZED ACCESS ATTEMPTS
                TRIGGER AUTO-LOCKOUT.
            </p>
        </div>
    )
}
