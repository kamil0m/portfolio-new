// import Input from "./Input"
import { useState } from "react"
import { useForm } from "react-hook-form"
import useWeb3Forms from "@web3forms/react"

export default function ContactForm() {

    const {
        register,
        handleSubmit,
        reset,
        // watch,
        // control,
        // setValue,
        formState: { errors, isSubmitSuccessful, isSubmitting },
    } = useForm({
        mode: "onTouched",
      });

    const [isSuccess, setIsSuccess] = useState(false);
    const [message, setMessage] = useState<string | boolean>(false);
    
    const apiKey = "a7392044-834a-4483-aa73-f6ecd00defc2";

    const { submit: onSubmit } = useWeb3Forms({
        access_key: apiKey,
        settings: {
          from_name: "My portfolio",
          subject: "New Contact Message from your Website",
        },
        // onSuccess: (msg, data) => {
        onSuccess: (msg) => {
            setIsSuccess(true);
            setMessage(msg);
            reset();
        },
        // onError: (msg, data) => {
        onError: (msg) => {
            setIsSuccess(false);
            setMessage(msg);
        },
      });

    return (
        <div className="card bg-main-verylight flex flex-col mt-6 tablet:w-full tablet:mx-auto">

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full text-start">
                <input
                type="checkbox"
                id=""
                className="hidden"
                style={{ display: "none" }}
                {...register("botcheck")}></input>

                <div className="mb-5">
                <input
                    type="text"
                    placeholder="Full Name"
                    // autoComplete="false"
                    className={`w-full px-4 py-3 border-1 placeholder:main-dark outline-none   focus:ring-4  ${
                    errors.name
                        ? "border-red-600 focus:border-red-600 ring-red-100 "
                        : "border-gray-300 focus:border-gray-600 ring-gray-100 "
                    }`}
                    {...register("name", {
                    required: "Full name is required",
                    maxLength: 80,
                    })}
                />
                {errors.name && (
                    <div className="mt-1 text-red-600">
                    <small>{typeof errors.name?.message === "string" ? errors.name.message : ""}</small>
                    </div>
                )}
                </div>

                <div className="mb-5">
                <label htmlFor="email_address" className="sr-only">
                    Email Address
                </label>
                <input
                    id="email_address"
                    type="email"
                    placeholder="Email Address"
                    // name="email"
                    // autoComplete="false"
                    className={`w-full px-4 py-3 border-1 outline-none focus:ring-4 placeholder:main-dark ${
                    errors.email
                        ? "border-red-600 focus:border-red-600 ring-red-100"
                        : "border-gray-300 focus:border-gray-600 ring-gray-100"
                    }`}
                    {...register("email", {
                    required: "Enter your email",
                    pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Please enter a valid email",
                    },
                    })}
                />
                {errors.email && (
                    <div className="mt-1 text-red-600">
                    <small>{typeof errors.email?.message === "string" ? errors.email.message : ""}</small>
                    </div>
                )}
                </div>

                <div className="mb-3">
                <textarea
                    // name="message"
                    placeholder="Your Message"
                    className={`w-full px-4 py-3 border-1 outline-none  h-36 focus:ring-4  ${
                    errors.message
                        ? "border-red-600 focus:border-red-600 ring-red-100"
                        : "border-gray-300 focus:border-gray-600 ring-gray-100"
                    }`}
                    {...register("message", {
                    required: "Enter your Message",
                    })}
                />
                {errors.message && (
                    <div className="mt-1 text-red-600">
                    {" "}
                    <small>{typeof errors.message?.message === "string" ? errors.message.message : ""}</small>
                    </div>
                )}
                </div>

                <button
                type="submit"
                className="button button-accent w-auto py-4 font-semibold text-white transition-colors focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7">
                {isSubmitting ? (
                    <svg
                    className="w-5 h-5 mx-auto text-white animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24">
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                ) : (
                    "Send Message"
                )}
                </button>
            </form>

            {isSubmitSuccessful && isSuccess && (
            <div className="mt-3 text-sm text-center text-green-500">
            {message || "Success. Message sent successfully"}
            </div>
            )}
            {isSubmitSuccessful && !isSuccess && (
                <div className="mt-3 text-sm text-center text-red-500">
                {message || "Something went wrong. Please try later."}
                </div>
            )}
            
        </div>
    )
}