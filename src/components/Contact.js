import React from "react";
import FormInput from "./FormInput";
import { ReactComponent as ContactIcon } from "./contact.svg";

export default function Contact() {
  return (
    <div className="px-8 pt-8 mx-auto max-w-4xl flex flex-col-reverse md:flex-row gap-8 pb-16">
      <form className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-ted-red">Contact Us:</h2>
        <div className="flex gap-4">
          <div className="w-full">
            <FormInput
              label="First name: *"
              id="first-name"
              type="text"
              required="true"
            />
          </div>
          <div className="w-full">
            <FormInput
              label="Last name:"
              id="last-name"
              type="text"
              required=""
            />
          </div>
        </div>
        <FormInput
          label="Email address: *"
          id="email"
          type="email"
          required="true"
        />
        <FormInput
          label="Subject: *"
          id="subject"
          type="subject"
          required="true"
        />
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-bold text-gray-500"
          >
            Message: *
          </label>
          <textarea
            id="message"
            required
            className="w-full h-28 resize-none bg-gray-100 rounded-md outline-none p-2 focus:ring-2 focus:ring-ted-red"
          />
        </div>
        <p className="text-sm text-gray-500 -mt-2">*required</p>
        <button
          type="submit"
          className="px-4 py-2 bg-gray-200 text-black hover:text-white hover:bg-ted-red rounded-md"
        >
          Submit
        </button>
      </form>
      <div>
        <ContactIcon />
      </div>
    </div>
  );
}
