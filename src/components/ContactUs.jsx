import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FiMail } from "react-icons/fi";
import Button from "./Button";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";

function ContactUs() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values , {resetForm}) => {
      console.log("Form Data" , values);
      resetForm();
    },
  });


  return (
    <div className="md:py-[60px] py-[40px] md:px-[24px] px-[16px] bg-[#0b0706]">
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col justify-between gap-[30px]">
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[20px]">
              <h1 className="text-[24px] font-Urbanist font-bold text-[#a72425]">
                Contact US
              </h1>
              <p className="text-[36px] lg:w-[450px] w-full font-Raleway text-white">
                Get in touch for More Questions
              </p>
            </div>
            <div className="lg:block hidden">
              <div className="flex flex-col gap-[20px]">
                <div className="flex gap-[12px] items-center">
                  <div className="w-[48px] h-[48px] border flex items-center justify-center text-[24px] border-[#a72425] rounded-full text-[#a72425]">
                    <FiMail />
                  </div>
                  <p className="text-[24px] font-Urbanist text-[#a72425]">
                    info@vavavasport.com
                  </p>
                </div>
                <div className="flex gap-[12px] items-center">
                  <div className="w-[48px] h-[48px] border flex items-center justify-center text-[24px] border-[#a72425] rounded-full text-[#a72425]">
                    <BsWhatsapp />
                  </div>
                  <p className="text-[24px] font-Urbanist text-[#a72425]">
                    +94 77 223 3444
                  </p>
                </div>
                <div className="flex gap-[12px] items-center">
                  <div className="w-[48px] h-[48px] border flex items-center justify-center text-[24px] border-[#a72425] rounded-full text-[#a72425]">
                    <MdOutlineLocationOn />
                  </div>
                  <p className="text-[24px] font-Urbanist text-[#a72425] lg:w-[320px] w-full">
                    Colombo, Sri Lanka
                  </p>
                </div>
              </div>
            </div>
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className="bg-white rounded-[12px] py-[32px] px-[40px] font-Raleway lg:w-[800px] w-full"
          >
            <div className="flex flex-col gap-[24px]">
              <div className="flex md:flex-row flex-col justify-between gap-[24px] w-full">
                <div className="flex flex-col gap-[12px] md:w-1/2">
                  <label className="text-[24px]">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="John"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    className={`border ${
                      formik.errors.firstName && formik.touched.firstName
                        ? "border-red-500"
                        : "border-black"
                    } rounded-[12px] py-[8px] px-[12px] h-[50px]`}
                  />
                  {formik.errors.firstName && formik.touched.firstName ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.firstName}
                    </div>
                  ) : null}
                </div>
                <div className="flex flex-col gap-[12px] md:w-1/2">
                  <label className="text-[24px]">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    className={`border ${
                      formik.errors.lastName && formik.touched.lastName
                        ? "border-red-500"
                        : "border-black"
                    } rounded-[12px] py-[8px] px-[12px] h-[50px]`}
                  />
                  {formik.errors.lastName && formik.touched.lastName ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.lastName}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="flex md:flex-row flex-col justify-between gap-[24px] w-full">
                <div className="flex flex-col gap-[12px] md:w-1/2">
                  <label className="text-[24px]">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className={`border ${
                      formik.errors.email && formik.touched.email
                        ? "border-red-500"
                        : "border-black"
                    } rounded-[12px] py-[8px] px-[12px] h-[50px]`}
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
                <div className="flex flex-col gap-[12px] md:w-1/2">
                  <label className="text-[24px]">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="+94 77 223 3444"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    className={`border ${
                      formik.errors.phone && formik.touched.phone
                        ? "border-red-500"
                        : "border-black"
                    } rounded-[12px] py-[8px] px-[12px] h-[50px]`}
                  />
                  {formik.errors.phone && formik.touched.phone ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.phone}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col gap-[12px]">
                <label className="text-[24px]">Subject</label>
                <select
                  name="subject"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.subject}
                  className={`border ${
                    formik.errors.subject && formik.touched.subject
                      ? "border-red-500"
                      : "border-black"
                  } rounded-[12px] py-[8px] px-[12px] h-[50px]`}
                >
                  <option value="">Select a Subject</option>
                  <option value="order">Order</option>
                  <option value="inquiry">Inquiry</option>
                  <option value="other">Other</option>
                </select>
                {formik.errors.subject && formik.touched.subject ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.subject}
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col gap-[12px]">
                <label className="text-[24px]">Message</label>
                <textarea
                  name="message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  placeholder="Type your message here"
                  className={`border ${
                    formik.errors.message && formik.touched.message
                      ? "border-red-500"
                      : "border-black"
                  } rounded-[12px] py-[8px] px-[12px] h-[120px]`}
                ></textarea>
                {formik.errors.message && formik.touched.message ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.message}
                  </div>
                ) : null}
              </div>
              <Button name="Send Message" clickFunction={formik.handleSubmit} />
            </div>
          </form>
          <div className="lg:hidden block">
            <div className="flex flex-col gap-[20px]">
              <div className="flex gap-[12px] items-center">
                <div className="w-[48px] h-[48px] border flex items-center justify-center text-[24px] border-[#a72425] rounded-full text-[#a72425]">
                  <FiMail />
                </div>
                <p className="text-[24px] font-Urbanist text-[#a72425]">
                  info@vavavasport.com
                </p>
              </div>
              <div className="flex gap-[12px] items-center">
                <div className="w-[48px] h-[48px] border flex items-center justify-center text-[24px] border-[#a72425] rounded-full text-[#a72425]">
                  <BsWhatsapp />
                </div>
                <p className="text-[24px] font-Urbanist text-[#a72425]">
                  +94 77 223 3444
                </p>
              </div>
              <div className="flex gap-[12px] items-center">
                <div className="w-[48px] h-[48px] border flex items-center justify-center text-[24px] border-[#a72425] rounded-full text-[#a72425]">
                  <MdOutlineLocationOn />
                </div>
                <p className="text-[24px] font-Urbanist text-[#a72425] lg:w-[320px] w-full">
                  Colombo, Sri Lanka
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
