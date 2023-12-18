"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Header, BodyAnim, BodyAnim2 } from "@/components";
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
    <section
    id="contact"
      className={`lg:px-[6%] md:px-[64px] px-[24px] py-[6%] flex flex-col justify-start bg-primary dark:bg-secondary  w-full`}
    >
      <Header title="Contact" index="05." />
      <div className="flex lg:flex-row flex-col justify-between items-start w-full">
        <div className="flex flex-col items-start lg:w-[65%] w-full">
          <BodyAnim2 className="lg:text-servicesTech md:text-[4.969vw] text-center text-[6.939vw] md:leading-[1] leading-[1.2] font-[700] text-secondary dark:text-primary mb-[1%]">
            Want to say hello? Feel free to reach out!
          </BodyAnim2>
          <BodyAnim2 className="text-grey2 dark:text-grey3 lg:text-aboutParagraph font-[400] md:text-[2.576vw] text-[4.589vw] leading-[1.3]  mb-[4%]">
            I am looking for Summer 2024 internship opportunities.
          </BodyAnim2>
          <input
            id="name"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="w-full appearance-none bg-transparent lg:text-aboutParagraph  md:text-[2.576vw] text-[4.589vw] font-[300] text-grey2 placeholder-grey2 leading-[1.2] tracking-tight border-b-[1px] py-[2%] px-[2%] border-solid border-grey4 focus:outline-none focus:border-grey2"
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
            className="w-full appearance-none bg-transparent lg:text-aboutParagraph md:text-[2.576vw] text-[4.589vw] font-[300] text-grey2 placeholder-grey2 leading-[1.2] tracking-tight border-b-[1px] py-[2%] px-[2%] border-solid border-grey4 focus:outline-none focus:border-grey2"
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
            className="w-full appearance-none bg-transparent lg:text-aboutParagraph md:text-[2.576vw] text-[4.589vw] font-[300] text-grey2 placeholder-grey2 leading-[1.2] lg:h-[300px] md:h-[250px] h-[125px] tracking-tight border-b-[1px] py-[2%] px-[2%] border-solid border-grey4 focus:outline-none focus:border-grey2"
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
              className="text-center font-[700] w-full py-[2%] text-primary tracking-tight leading-[1.3] bg-tertiary rounded-[6px] lg:text-aboutParagraph md:text-[3.980vw] text-[6.361vw] "
            >
              <Button label={"submit"} className="uppercase text-primary bg-tertiary flex justify-center items-center cursor-pointer font-[700] tracking-tight" />
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
        <div className="flex flex-col items-end justify-end lg:w-[25%] lg:gap-8 md:gap-6 gap-4 w-full">
          <div className="flex flex-col items-start w-full">
            <BodyAnim2 className="font-[700] text-secondary dark:text-primary tracking-tight leading-[1.3] lg:text-experiencesHeading md:text-[4.969vw] text-[6.939vw] ">
              Contact details
            </BodyAnim2>
            <a
              href="mailto:n4shum@uwaterloo.ca"
              target="_blank"
            >
              <BodyAnim2 className="lg:text-aboutParagraph md:text-[3.576vw] text-[4.589vw] font-[400] tracking-tight text-grey2">
                n4shum@uwaterloo.ca
              </BodyAnim2>
            </a>
          </div>
          <BodyAnim className="flex flex-col items-start w-full">
            <div className="font-[700] text-secondary dark:text-primary tracking-tight leading-[1.3] lg:text-experiencesHeading md:text-[4.969vw] text-[6.939vw] lg:mb-[6%] mb-[2%]">
              My Socials
            </div>
            <div className="w-full flex flex-col justify-start items-start lg:gap-4 md:gap-2 gap-1 ">
              {socials.map((social) => {
                const { name, link, icon: IconComponent, color } = social;
                return (
                  <a
                    key={name}
                    className={`flex justify-start w-full items-center lg-gap-2 gap-1 cursor-pointer text-grey2`}
                    href={link}
                    target="_blank"
                  >
                    <IconComponent
                      className={`lg:text-contactSub  md:text-[4.576vw] text-[6.361vw] `}
                    />
                    <p className=" lg:text-aboutParagraph md:text-[3.576vw] text-[4.589vw] font-[400] tracking-tight">
                      {name}
                    </p>
                  </a>
                );
              })}
            </div>
          </BodyAnim>
          <BodyAnim className="flex flex-col items-start w-full gap-2">
            <div className="font-[700] text-secondary dark:text-primary tracking-tight leading-[1.3] lg:text-experiencesHeading md:text-[4.969vw] text-[6.939vw]">
              My Resume
            </div>
            <Link
              href="/ShumNickResume.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className={"w-full"}
            >
              <Button
                label={"resume"}
                className="uppercase  flex justify-center items-center cursor-pointer text-center font-[700] w-full py-[2%] text-primary tracking-tight leading-[1.3] bg-tertiary rounded-[6px] lg:text-aboutParagraph md:text-[3.980vw] text-[6.361vw]"
              />
            </Link>
          </BodyAnim>
        </div>
      </div>
    </section>
  );
};

export default Contact;
