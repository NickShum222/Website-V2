"use client";

import React from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@material-tailwind/react";
import { FaLinkedin, FaInstagram, FaGithub, FaIntercom } from "react-icons/fa";
import { Button } from "@/components";

const Contact = () => {
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
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            values,
            process.env.NEXT_PUBLIC_PUBLIC_KEY
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
      className={`lg:px-[128px] md:px-[64px] px-[24px] py-[6%] flex flex-col justify-start bg-primary dark:bg-secondary  w-full`}
    >
      <div className="flex w-full justify-end md:mb-[4%] mb-[5%]">
        <div className="flex justify-start items-start sm:w-[80%] w-[90%] lg:gap-6 md:gap-4 gap-2">
          <div
            className="text-tertiary dark:text-primary md:text-[3.125vw]
            sm:text-[3.980vw] text-[5.089vw]
            italic tracking-tighter font-[500] leading-[0.9] lg:mt-1"
          >
            05.
          </div>
          <div className="lg:text-headingLgClamp md:text-[10vw] sm:text-[10.092vw] text-[12.427vw] leading-[0.8] tracking-tight  font-[700] text-tertiary dark:text-primary border-b-2 border-solid w-full border-tertiary dark:border-primary pb-[4%]">
            CONTACT
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-between items-start w-full">
        <div className="flex flex-col items-start lg:w-[65%] w-full">
          <div className="lg:text-[4.722vw] sm:text-[5.305vw] text-[7.952vw] w-full font-[700] dark:text-primary text-secondary leading-[1.1] tracking-tighter mb-[2%]">
            Want to say hello? <br className="lg:inline hidden" /> Feel free to
            reach out!
          </div>
          <div className="lg:text-[3.125vw] sm:text-[3.980vw] text-[6.361vw] font-[500] dark:text-primary text-grey2 leading-[1.2] tracking-tight mb-[4%]">
            I am looking for Summer 2024 internship opportunities.
          </div>
          <input
            id="name"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="w-full appearance-none bg-transparent lg:text-[2.083vw] sm:text-[2.985vw] text-[5.089vw] font-[300] text-grey2 placeholder-grey2 leading-[1.2] tracking-tight border-b-[1px] py-[2%] px-[2%] border-solid border-grey4 focus:outline-none focus:border-grey2"
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
            className="w-full appearance-none bg-transparent lg:text-[2.083vw] sm:text-[2.985vw] text-[5.089vw] font-[300] text-grey2 placeholder-grey2 leading-[1.2] tracking-tight border-b-[1px] py-[2%] px-[2%] border-solid border-grey4 focus:outline-none focus:border-grey2"
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
            className="w-full appearance-none bg-transparent lg:text-[2.083vw] sm:text-[2.985vw] text-[5.089vw] font-[300] text-grey2 placeholder-grey2 leading-[1.2] lg:h-[300px] md:h-[250px] h-[125px] tracking-tight border-b-[1px] py-[2%] px-[2%] border-solid border-grey4 focus:outline-none focus:border-grey2"
          />
          <div
            className={`mb-4 mt-1 lg:text-[16px] text-[14px] text-[#A31621]`}
          >
            {formik.errors.message}
          </div>
          <div className="flex w-full justify-end">
            <button
              onClick={formik.handleSubmit}
              type="submit"
              className="text-center font-[700] w-full py-[2%] text-primary tracking-tight leading-[1.3] bg-tertiary rounded-[6px] lg:text-[2.083vw] sm:text-[3.980vw] text-[7.634vw] ld:mb-0 mb-[10%] "
            >
              <Button
                label={"submit"}
                className=""
              />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-end justify-end lg:w-[25%]  w-full md:gap-24 gap-12">
          <div className="flex flex-col items-start w-full gap-2">
            <div className="font-[700] text-grey2 dark:text-grey3 tracking-tight leading-[1.3] lg:text-[3.125vw] sm:text-[5.305vw] text-[7.952vw]">
              My Resume
            </div>
            <Button
              label={"resume"}
              className="text-center font-[700] w-full py-[2%] text-primary tracking-tight leading-[1.3] bg-tertiary rounded-[6px] lg:text-[2.083vw] sm:text-[3.980vw] text-[7.634vw]"
            />
          </div>
          <div className="flex flex-col items-start w-full">
            <div className="font-[700] text-grey2 dark:text-grey3 tracking-tight leading-[1.3] lg:text-[3.125vw] sm:text-[5.305vw] text-[7.952vw] lg:mb-[8%] mb-[4%]">
              My Socials
            </div>
            <div className="w-full flex flex-col justify-start items-start lg:gap-8 ">
              <div className="flex justify-start w-full items-center lg:gap-2 gap-1">
                <FaLinkedin className="lg:text-[2.778vw]  sm:text-[5.305vw] text-[6.361vw] text-grey4" />
                <div className="text-grey4 lg:text-[2.083vw]  sm:text-[5.305vw] text-[6.361vw] font-[500] tracking-tight">
                  LinkedIn
                </div>
              </div>
              <div className="flex justify-start w-full items-center lg:gap-2 gap-1">
                <FaInstagram className="lg:text-[2.778vw]  sm:text-[5.305vw] text-[6.361vw] text-grey4" />
                <div className="text-grey4 lg:text-[2.083vw]  sm:text-[5.305vw] text-[6.361vw] font-[500] tracking-tight">
                  Instagram
                </div>
              </div>
              <div className="flex justify-start w-full items-center lg:gap-2 gap-1">
                <FaGithub className="lg:text-[2.778vw]  sm:text-[5.305vw] text-[6.361vw] text-grey4" />
                <div className="text-grey4 lg:text-[2.083vw]  sm:text-[5.305vw] text-[6.361vw] font-[500] tracking-tight">
                  Github
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
