import { Field, Formik, useFormik } from "formik";
import AccessRoleIcon from '../assets/AccessRoleIcone.svg';
import EmployeeIcon from '../assets/EmployeeIcon.svg';
import SecurityKeyIcon from '../assets/SecurityKeyIcon.svg';
import SubmitIcone from '../assets/SubmitIcone.svg';
import WorningNote from '../components/WarningNote';
import { useState } from "react";

// const initialValues = {
//   EmployeeID: '',
//   SecurityKey: '',
// }
export default function Inputs() {
  // useFormik()
  return (
    <div className="p-8">
      <Formik>

        <form>
          <div class="w-full max-w-md">
            <label class="font-bold text-[10px] leading-3.75 tracking-[0.5px] font-Inter text-paragrafTitle flex items-center gap-2 mb-2">

              <img src={AccessRoleIcon} alt="" />
              ACCESS ROLE
            </label>

            <div class="relative">
              <Field
                as="select"
                name="role"
                className="w-full appearance-none bg-[#2E353E] text-white px-4 py-3 focus:outline-none"
              >
                <option value="">Select Role</option>
                <option value="inspector">Inspector</option>
                <option value="manager">Manager</option>
              </Field>


              <div class="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                ▼
              </div>
            </div>
          </div>

          <br />

          <div>
            <label class="font-bold text-[10px] leading-3.75 tracking-[0.5px] font-Inter text-paragrafTitle flex items-center gap-2 mb-2">

              <img src={EmployeeIcon} alt="" />
              EMPLOYE ID
            </label>
            <Field type="number" name="name" className="input w-full bg-[#2E353E] px-4 py-3.5 text-white" />
          </div>

          <br />

          <div>
            <label class="font-bold text-[10px] leading-3.75 tracking-[0.5px] font-Inter text-paragrafTitle flex items-center gap-2 mb-2">

              <img src={SecurityKeyIcon} alt="" />
              Security Key (Numeric)
            </label>
            <Field type="password" name='password' className="input w-full bg-[#2E353E] px-4 py-3.5 text-white placeholder:text-[#43474F] placeholder:text-[30px] placeholder:font-bold" placeholder=" .  .  .  .  ." />
          </div>

          <br />

          <button type="submit" className="w-full py-4   bg-bordercolor2 hover:bg-[#062849] flex flex-row gap-3 justify-center items-center">
            <h1 className="font-bold font-Space text-[16px] leading-6 tracking-[1.6px]  uppercase text-whitee">Authenticate Session</h1>
            <img src={SubmitIcone} alt="" />
          </button>
        </form>

      </Formik>

      <br />

      {/* WorningNote Component */}
      <WorningNote />



      

    </div>
  )
}
