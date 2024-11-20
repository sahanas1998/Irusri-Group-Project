import React, {useState , useEffect} from "react";
import { useFormik } from "formik";
import Button from "../Button";
import SignInCard from "../../components/cards/SignInCard";
import { IoClose } from "react-icons/io5";

function LogInCard({ modelClose, setUserName }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
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
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      const user = storedUsers.find(
        (user) =>
          user.email === values.email && user.password === values.password
      );

      if (user) {
        setLoggedInUser(user);
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        alert("Login successful!");
        setUserName(user.fullname);
        modelClose();
        resetForm();
      } else {
        alert("Invalid email or password.");
      }
    },
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setLoggedInUser(storedUser);
    }
  }, []);

  return (
    <div className="py-[24px] px-[36px] bg-[#0b0706] flex items-center justify-center">
      <div className="flex flex-col py-[40px] px-[24px] gap-[28px] border-t-2 border-b-2 w-[600px] border-[#7a7a7a]">
        <h1 className="font-bold font-Urbanist text-[40px] text-center text-[#a72425]">
          Log In
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-[18px] text-white">
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
            <div className="flex justify-end">
              <Button name="Log In" clickFunction={formik.handleSubmit} />
            </div>
            <div onClick={openModal}>
              <p className="text-[20px] underline cursor-pointer">
                Create Account
              </p>
            </div>
          </div>
        </form>
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button onClick={closeModal} className="close-button">
                <IoClose />
              </button>
              <SignInCard closeModal={closeModal} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LogInCard;
