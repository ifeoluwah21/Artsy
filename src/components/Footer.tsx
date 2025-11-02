import { ErrorMessage, Field, Form, Formik } from "formik";
import { type FC } from "react";
import { BsEnvelope } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";

import * as yup from "yup";

const Footer: FC = () => {
  return (
    <footer className="space-y-8 px-4 pt-6 pb-20 lg:px-20">
      <div className="space-y-8 lg:flex lg:flex-col lg:flex-nowrap lg:place-items-center lg:border lg:border-[#333333] lg:p-12">
        {" "}
        <h2 className="font-Exo text-2xl uppercase lg:text-4xl">Newsletter</h2>
        <p className="text-xs font-extralight uppercase lg:text-3xl">
          Subscribe to our daily update and newsletters
        </p>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={yup.object({
            email: yup
              .string()
              .email("Invalid Email Address")
              .required("Email can not be blank"),
          })}
          onSubmit={() => {
            console.log("Submitting");
          }}
        >
          <Form className="font-Inter lg:flex lg:w-full lg:justify-center">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="grid grid-rows-[36px_auto] lg:w-7/10 lg:max-w-[840px] lg:min-w-[720px] lg:grid-cols-[auto_250px]">
              <p className="pb-2.5 text-xs text-red-400 opacity-100 transition-opacity duration-100">
                <ErrorMessage name="email" />
              </p>
              <Field
                id="email"
                autoComplete="email"
                name="email"
                type="email"
                className="mb-8 block w-4/5 border border-[#333333] p-4 text-xs text-[#333333] placeholder:text-[#333333] placeholder:uppercase focus:outline-none lg:col-[1/2] lg:m-0 lg:text-base"
                placeholder="Enter your email here"
              />
              <button
                type="submit"
                className="w-[244px] bg-black px-2 py-4 font-Inter font-extralight text-white uppercase"
              >
                Subscribe
              </button>
            </div>
          </Form>
        </Formik>
      </div>
      <div className="space-y-6 font-extralight">
        <h3 className="text-base lg:text-2xl">Reach us</h3>
        <a href="#" className="block space-x-6">
          {" "}
          <BsEnvelope className="inline h-6 w-6 lg:h-10 lg:w-10" />{" "}
          <span className="lg:text-2xl">artsystudios@gmail.com</span>
        </a>
        <a href="#" className="block space-x-6">
          {" "}
          <SlLocationPin className="inline h-6 w-6 lg:h-10 lg:w-10" />{" "}
          <span className="lg:text-2xl">Lagos, Nigeria.</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
