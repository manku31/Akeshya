"use client";

import { ChangeEvent, MouseEvent, useState } from "react";

import { FaPhone } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import SubmitModal from "./modal/SubmitModal";

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSendMessageClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (name && email && subject && message) {
      setOpen(true);
    } else {
      alert("Please fill out all fields.");
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="my-10">
      <div
        className="flex items-center gap-4 justify-center"
        data-aos="fade-up"
      >
        <div className="border border-blue-900 w-14" />
        <h1 className="text-2xl text-center font-bold">CONTACT US</h1>
        <div className="border border-blue-900 w-14" />
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-5 pt-10 mx-4 lg:mx-24">
        <div className="lg:w-1/3" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-xl font-semibold text-blue-900">Akeshya</h2>
          <p className="text-gray-700">
            Designers, developers & marketeers capable of delivering solutions
            according to your needs,
          </p>
        </div>

        <div
          className="space-y-4 lg:w-1/3"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex gap-4">
            <HiOutlineLocationMarker size={30} className="text-blue-900" />
            <p>
              26-2-789, 7th street, Jyothi Nagar, <br></br> Nellore, Andhra
              Pradesh 524004
            </p>
          </div>
          <div className="flex items-center gap-4">
            <IoMdMail size={30} className="text-blue-900" />
            <p>info@akeshya.com</p>
          </div>
          <div className="flex items-center gap-4">
            <FaPhone size={30} className="text-blue-900" />
            <p>+91 94942 40922</p>
          </div>
        </div>

        <form
          className="flex flex-col gap-5 lg:w-1/3"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <input
            className="border border-gray-400 px-4 py-2"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            className="border border-gray-400 px-4 py-2"
            placeholder="Your Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            className="border border-gray-400 px-4 py-2"
            placeholder="Your Subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
          <textarea
            rows={4}
            cols={4}
            className="border border-gray-400 px-4 py-2"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />

          <button
            type="submit"
            className="text-white bg-blue-900 hover:bg-sky-600 rounded-full px-5 py-2 translate-all duration-200"
            onClick={handleSendMessageClick}
          >
            Send Message
          </button>
        </form>

        {open && <SubmitModal onClose={() => setOpen(false)} />}
      </div>
    </div>
  );
}
