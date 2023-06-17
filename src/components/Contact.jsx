import React from "react";
import Title from "./resources/Title";

const Contact = () => {
  return (
    <div className="h-screen flex justify-center items-center ">
      <div className=" w-[70%] mx-auto ">
        <Title title={"Contact"} subTitle={"Get in touch with me"} />

        <div className=" flex gap-3 ">
          <div className=" basis-1/2 ">

            <form className=" flex flex-col gap-3 ">

              <div>
                <label>Your Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className=" mt-1 py-3 px-4 rounded-sm w-full border border-slate-800 "
                />
              </div>

              <div>
                <label>Your Email</label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className=" mt-1 py-3 px-4 rounded-sm w-full border border-slate-800 "
                />
              </div>

              <div>
                <label>Your Message</label>
                <textarea
                  className="mt-1 py-3 px-4 rounded-sm w-full border border-slate-800  "
                  cols="30"
                  rows="5"
                  placeholder="Enter Your Message "
                ></textarea>
              </div>

              <div className=" text-center ">
                <button className=" py-3 px-5 border border-slate-800 rounded-sm ">
                  Send Message
                </button>
              </div>

            </form>

          </div>

          <div className=" basis-1/2 ">

            <iframe
              className=" rounded-lg "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27828247.32986419!2d115.69702694140422!3d31.63377240529192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34674e0fd77f192f%3A0xf54275d47c665244!2sJapan!5e0!3m2!1sen!2smm!4v1687012095825!5m2!1sen!2smm"
              width="100%"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
