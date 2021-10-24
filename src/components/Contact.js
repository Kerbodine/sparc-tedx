import React from "react";
import FormInput from "./FormInput";
import { ReactComponent as ContactIcon } from "./contact.svg";

export default function Contact() {
  return (
    <div className="px-8 pt-8 mx-auto max-w-4xl flex flex-col-reverse md:flex-row gap-8 pb-16">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Contact Us:</h2>
        <div className="flex gap-4">
          <div className="w-full">
            <FormInput label="First name:" id="first-name" type="text" />
          </div>
          <div className="w-full">
            <FormInput label="Last name:" id="last-name" type="text" />
          </div>
        </div>
        <FormInput label="Email address:" id="email" type="email" />
        <FormInput label="Subject:" id="subject" type="subject" />
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-bold text-gray-500"
          >
            Message:
          </label>
          <textarea
            id="message"
            className="w-full h-28 resize-none bg-gray-100 rounded-md outline-none p-2 focus:ring-2 focus:ring-ted-red"
          />
        </div>
      </div>
      <div>
        <ContactIcon />
      </div>
    </div>
  );
}
