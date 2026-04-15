import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

import AccessRoleIcon from '../assets/AccessRoleIcone.svg';
import EmployeeIcon from '../assets/EmployeeIcon.svg';
import SecurityKeyIcon from '../assets/SecurityKeyIcon.svg';
import SubmitIcone from '../assets/SubmitIcone.svg';
import WorningNote from '../components/WarningNote';

export default function Inputs() {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    role: Yup.string().required("Role is required"),

    employeeId: Yup.string()
      .required("Employee ID is required")
      .length(5, "Employee ID must be exactly 5 digits")
      .matches(/^\d{5}$/, "Employee ID must contain only 5 numbers"),

    securityKey: Yup.string()
      .required("Security key is required")
      .length(10, "Security key must be exactly 10 characters")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10}$/,
        "Security key must contain both letters and numbers (exactly 10 characters)"
      ),
  });

  return (
    <div className="p-8 max-w-md mx-auto">
      <Formik
        initialValues={{
          role: "",
          employeeId: "",
          securityKey: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Login Data:", values);

          // هنا هتحط axios بعدين
          // await axios.post('/api/login', values);

          setSubmitting(false);
          navigate("/");
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6">

            {/* Access Role */}
            <div>
              <label className="font-bold text-[10px] leading-3.75 tracking-[0.5px] font-Inter text-paragrafTitle flex items-center gap-2 mb-2">
                <img src={AccessRoleIcon} alt="" className="w-4 h-4" />
                ACCESS ROLE
              </label>
              <div className="relative">
                <Field
                  as="select"
                  name="role"
                  className="w-full appearance-none bg-[#2E353E] text-white px-4 py-3.5 rounded-lg focus:outline-none border border-transparent focus:border-Info"
                >
                  <option value="">Select Role</option>
                  <option value="inspector">Inspector</option>
                  <option value="manager">Manager</option>
                </Field>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400 text-xl">
                  ▼
                </div>
              </div>
              <ErrorMessage name="role" component="p" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Employee ID - بالظبط 5 أرقام */}
            <div>
              <label className="font-bold text-[10px] leading-3.75 tracking-[0.5px] font-Inter text-paragrafTitle flex items-center gap-2 mb-2">
                <img src={EmployeeIcon} alt="" className="w-4 h-4" />
                EMPLOYEE ID
              </label>
              <Field
                type="text"
                name="employeeId"
                maxLength={5}
                className="w-full bg-[#2E353E] px-4 py-3.5 text-white rounded-lg focus:outline-none border border-transparent focus:border-Info placeholder:text-gray-500"
                placeholder="12345"
              />
              <ErrorMessage name="employeeId" component="p" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Security Key - بالظبط 5 أرقام */}
            <div>
              <label className="font-bold text-[10px] leading-3.75 tracking-[0.5px] font-Inter text-paragrafTitle flex items-center gap-2 mb-2">
                <img src={SecurityKeyIcon} alt="" className="w-4 h-4" />
                SECURITY KEY
              </label>
              <Field
                type="password"
                name="securityKey"
                maxLength={10}
                className="w-full bg-[#2E353E] px-4 py-3.5 text-white rounded-lg focus:outline-none border border-transparent focus:border-Info placeholder:text-[#43474F] placeholder:text-5xl placeholder:tracking-[8px]"
                placeholder=". . . . ."
              />
              <ErrorMessage name="securityKey" component="p" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 mt-4 bg-bordercolor2 hover:bg-[#062849] disabled:bg-gray-600 flex items-center justify-center gap-3 rounded-xl transition-all duration-200 font-medium"
            >
              <span className="font-bold font-Space text-[16px] leading-6 tracking-[1.6px] uppercase text-white">
                Authenticate Session
              </span>
              <img src={SubmitIcone} alt="" className="w-5 h-5" />
            </button>

          </Form>
        )}
      </Formik>

      <div className="mt-8">
        <WorningNote />
      </div>
    </div>
  );
}