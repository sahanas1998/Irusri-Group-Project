import React from "react";
import { useFormik } from "formik";
import Button from "../Button";

function SignInCard({ closeModal }) {
  // Formik initialization
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validate: (values) => {
      const errors = {};
      if (values.password !== values.confirmpassword) {
        errors.confirmpassword = "Passwords do not match";
      }
      if (!values.fullname) {
        errors.fullname = "Full Name is required";
      }
      if (!values.email) {
        errors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is invalid";
      }
      if (!values.password) {
        errors.password = "Password is required";
      }
      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      existingUsers.push(values);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      console.log("Form Submitted", values);
      resetForm();
      alert("Account created successfully!");
      closeModal();
    },
  });

  return (
    <div className="py-[24px] px-[36px] bg-[#0b0706] flex items-center justify-center">
      <div className="flex flex-col py-[40px] px-[24px] gap-[28px] border-t-2 border-b-2 w-[600px] border-[#7a7a7a]">
        <h1 className="font-bold font-Urbanist text-[40px] text-center text-[#a72425]">
          Sign In
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-[18px] text-white">
            <div className="flex flex-col gap-[12px] w-full">
              <label className="text-[20px]">Full Name</label>
              <input
                type="text"
                name="fullname"
                placeholder="John"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullname}
                className={`border text-black ${
                  formik.errors.fullname && formik.touched.fullname
                    ? "border-red-500"
                    : "border-black"
                } rounded-[12px] py-[8px] px-[12px] h-[50px]`}
              />
              {formik.errors.fullname && formik.touched.fullname && (
                <div className="text-red-500 text-sm">
                  {formik.errors.fullname}
                </div>
              )}
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-[12px]">
              <label className="text-[20px]">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={`border text-black ${
                  formik.errors.email && formik.touched.email
                    ? "border-red-500"
                    : "border-black"
                } rounded-[12px] py-[8px] px-[12px] h-[50px]`}
              />
              {formik.errors.email && formik.touched.email && (
                <div className="text-red-500 text-sm">
                  {formik.errors.email}
                </div>
              )}
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-[12px]">
              <label className="text-[20px]">Password</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className={`border text-black ${
                  formik.errors.password && formik.touched.password
                    ? "border-red-500"
                    : "border-black"
                } rounded-[12px] py-[8px] px-[12px] h-[50px]`}
              />
              {formik.errors.password && formik.touched.password && (
                <div className="text-red-500 text-sm">
                  {formik.errors.password}
                </div>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="flex flex-col gap-[12px] w-full">
              <label className="text-[20px]">Confirm Password</label>
              <input
                type="password"
                name="confirmpassword"
                placeholder="confirm password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmpassword}
                className={`border text-black ${
                  formik.errors.confirmpassword &&
                  formik.touched.confirmpassword
                    ? "border-red-500"
                    : "border-black"
                } rounded-[12px] py-[8px] px-[12px] h-[50px]`}
              />
              {formik.errors.confirmpassword &&
                formik.touched.confirmpassword && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.confirmpassword}
                  </div>
                )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <Button name="Sign In" clickFunction={formik.handleSubmit} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignInCard;
