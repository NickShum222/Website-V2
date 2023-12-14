"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Header } from "@/components";
import { socials } from "@/constants";
import Link from "next/link";


const Contact = () => {
  const [submit, setSubmit] = useState(false);
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
            setSubmit(true);
            setSubmitting(false);
            resetForm();
          });
      } catch (error) {
        console.log(error);
        setSubmitting(false);
        setSubmit(false);
      }
    },
  });

  return (
    <div
      className={`lg:px-[6%] md:px-[64px] px-[24px] py-[6%] flex flex-col justify-start bg-primary dark:bg-secondary  w-full`}
    >
      <Header title="Contact" index="05." />
      <div className="flex lg:flex-row flex-col justify-between items-start w-full">
        <div className="flex flex-col items-start lg:w-[65%] w-full">
          <div className="lg:text-servicesTech md:text-[4.969vw] text-[6.939vw] md:leading-[1.1] leading-[1.2] font-[700] text-secondary dark:text-primary mb-[1%]">
            Want to say hello? <br className="lg:inline hidden" /> Feel free to
            reach out!
          </div>
          <div className="text-grey2 dark:text-grey3 lg:text-aboutParagraph font-[400] md:text-[2.576vw] text-[4.589vw] leading-[1.3]  mb-[4%]">
            I am looking for Summer 2024 internship opportunities.
          </div>
          <input
            id="name"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="w-full appearance-none bg-transparent lg:text-aboutParagraph  md:text-[2.576vw] text-[5.089vw] font-[300] text-grey2 placeholder-grey2 leading-[1.2] tracking-tight border-b-[1px] py-[2%] px-[2%] border-solid border-grey4 focus:outline-none focus:border-grey2"
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
            className="w-full appearance-none bg-transparent lg:text-aboutParagraph md:text-[2.576vw] text-[5.089vw] font-[300] text-grey2 placeholder-grey2 leading-[1.2] tracking-tight border-b-[1px] py-[2%] px-[2%] border-solid border-grey4 focus:outline-none focus:border-grey2"

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
            className="w-full appearance-none bg-transparent lg:text-aboutParagraph md:text-[2.576vw] text-[5.089vw] font-[300] text-grey2 placeholder-grey2 leading-[1.2] lg:h-[300px] md:h-[250px] h-[125px] tracking-tight border-b-[1px] py-[2%] px-[2%] border-solid border-grey4 focus:outline-none focus:border-grey2"
          />
          <div
            className={`mb-4 mt-1 lg:text-[16px] text-[14px] text-[#A31621]`}
          >
            {formik.errors.message}
          </div>
          <div className="flex flex-col w-full justify-end lg:mb-0 mb-[10%]">
            <button
              onClick={formik.handleSubmit}
              type="submit"
              className="text-center font-[700] w-full py-[2%] text-primary tracking-tight leading-[1.3] bg-tertiary rounded-[6px] lg:text-contactForm sm:text-[3.980vw] text-[7.634vw] "
            >
              <Button label={"submit"} className="" />
            </button>
            <div
              className={`text-green-700 lg:text-[16px] text-[14px] pt-3 mb-0 pb-0 ${
                submit ? "" : "hidden"
              }`}
            >
              Message sent! I will get back with you shortly.
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-end lg:w-[25%]  w-full md:gap-24 gap-12">
          <div className="flex flex-col items-start w-full gap-2">
            <div className="font-[700] text-grey2 dark:text-grey3 tracking-tight leading-[1.3] lg:text-servicesSub sm:text-[5.305vw] text-[7.952vw]">
              My Resume
            </div>
            <Link href="/ShumNickResume.pdf" target="_blank" rel="noreferrer noopener" className={"w-full"}>
              <Button
                  label={"resume"}
                  className="text-center font-[700] w-full py-[2%] text-primary tracking-tight leading-[1.3] bg-tertiary rounded-[6px] lg:text-contactForm sm:text-[3.980vw] text-[7.634vw]"
              />
            </Link>
          </div>
          <div className="flex flex-col items-start w-full">
            <div className="font-[700] text-grey2 dark:text-grey3 tracking-tight leading-[1.3] lg:text-servicesSub sm:text-[5.305vw] text-[7.952vw] lg:mb-[8%] mb-[4%]">
              My Socials
            </div>
            <div className="w-full flex flex-col justify-start items-start lg:gap-8 ">
              {socials.map((social) => {
                const { name, link, icon: IconComponent, color } = social;
                return (
                  <a
                    key={name}
                    className={`flex justify-start w-full items-center lg-gap-2 gap-1 cursor-pointer text-grey4`}
                    href={link}
                    target="_blank"
                  >
                    <IconComponent className={`lg:text-contactSub  sm:text-[5.305vw] text-[6.361vw] `} />
                    <div className=" lg:text-contactForm  sm:text-[5.305vw] text-[6.361vw] font-[500] tracking-tight">
                      {name}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
