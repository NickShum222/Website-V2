"use client";

import React from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@material-tailwind/react";

const Contact = () => {
  console.log(process.env.NEXT_PUBLIC_SERVICE_ID);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values, { resetForm, setSubmitting }) => {
      console.log(values);
      try {
        emailjs
          .send(
            process.env.REACT_APP_SERVICE_ID,
            "template_i6xxiwi",
            values,
            "wO24vRyimtsLwsozE"
          )
          .then(() => {
            setSubmitting(false);
            resetForm();
          });
      } catch (error) {
        console.log(error);
        setSubmitting(false);
      }
    },
  });

  return (
    <div
      className={`lg:px-[128px] md:px-[64px] px-[24px] py-[6%] flex flex-col justify-start bg-primary  w-full`}
    >
      <div className="flex w-full justify-end md:mb-12 sm:mb-8 mb-4">
        <div className="flex justify-start items-start sm:w-[80%] w-[90%] lg:gap-6 md:gap-4 gap-2">
          <div
            className="text-tertiary md:text-[3.125vw]
            sm:text-[3.980vw] text-[5.089vw]
            italic tracking-tighter font-[500] leading-[0.9] lg:mt-1"
          >
            05.
          </div>
          <div className="lg:text-headingLgClamp md:text-[10vw] sm:text-[10.092vw] text-[12.427vw] leading-[0.8] tracking-tight  font-[700] text-tertiary border-b-2 border-solid w-full border-tertiary pb-[4%]">
            CONTACT
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-start w-full">
        <div className="flex flex-col items-start w-[70%]">
          <div className="text-[4.722vw] font-[700] text-secondary leading-[1.1] tracking-tighter">
            Want to say hello? <br /> Feel free to reach out!
          </div>
          <div className="text-[3.125vw] font-[500] text-grey2 leading-[1.2] tracking-tight">
            I am looking for Summer 2024 internship opportunities.
          </div>
          <input
            id="name"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="w-full appearance-none bg-transparent text-[2.083vw] font-[300] text-grey2 placeholder-grey2 leading-[1.2] tracking-tight border-b-[1px] py-[2%] px-[2%] border-solid border-grey4 focus:outline-none focus:border-grey2"
          />
          <div
            className={`mb-4 mt-1 lg:text-[16px] text-[14px] text-[#A31621]`}
          >
            {formik.errors.name}
          </div>
          <input
            id="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="w-full appearance-none bg-transparent text-[2.083vw] font-[300] text-grey2 placeholder-grey2 leading-[1.2] tracking-tight border-b-[1px] py-[2%] px-[2%] border-solid border-grey4 focus:outline-none focus:border-grey2"
          />
          <div
            className={`mb-4 mt-1 lg:text-[16px] text-[14px] text-[#A31621]`}
          >
            {formik.errors.email}
          </div>
          <textarea
            id="message"
            placeholder="Message"
            onChange={formik.handleChange}
            value={formik.values.message}
            className="w-full appearance-none bg-transparent text-[2.083vw] font-[300] text-grey2 placeholder-grey2 leading-[1.2] h-[300px] tracking-tight border-b-[1px] py-[2%] px-[2%] border-solid border-grey4 focus:outline-none focus:border-grey2"
          />
          <div
            className={`mb-4 mt-1 lg:text-[16px] text-[14px] text-[#A31621]`}
          >
            {formik.errors.message}
          </div>
          <button
            type="submit"
            onClick={formik.handleSubmit}
            className="text-primary font-[700] tracking-tight cursor-pointer text-[2.083vw] px-[7%] py-[0.25%] bg-tertiary"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
