import React from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_E7v11h5kTFbt5ke42zWlB");
const ContactMe = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ctrg68i",
        "template_ih8fc5j",
        e.target,
        "user_E7v11h5kTFbt5ke42zWlB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <form
      onSubmit={sendEmail}
      className="flex"
      style={{ paddingTop: 90, paddingBottom: 90 }}
    >
      <div
        style={{ backgroundColor: "#84fab0" }}
        className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800"
      >
        <div
          style={{
            fontWeight: "bold",
            fontSize: 50,
            fontFamily: '"Times New Roman"',
          }}
          className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white"
        >
          Contact Me
        </div>

        <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
          <label>Name</label>
          <input
            style={{ paddingLeft: 10, borderRadius: 50 }}
            type="text"
            name="from_name"
            placeholder="Enter your name"
          />
          <label>Email</label>
          <input
            style={{ paddingLeft: 10, borderRadius: 50 }}
            type="email"
            name="from_email"
            placeholder="Enter your email"
          />
          <label>Message</label>
          <textarea
            style={{ paddingLeft: 10, borderRadius: 10 }}
            name="message"
            placeholder="Type your message here"
          />

          <button
            type="submit"
            className="py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactMe;
