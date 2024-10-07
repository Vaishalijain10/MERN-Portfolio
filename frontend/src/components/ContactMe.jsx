import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for styling

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      // Send form data to backend
      const response = await axios.post("http://localhost:5000/send", formData);

      if (response.status === 200) {
        // Display success toast notification
        toast.success("Message sent successfully!", {
          autoClose: 5000, // Duration in milliseconds (5000ms = 5 seconds)
          closeOnClick: true, // Enable closing on click
          pauseOnHover: true, // Pause timer when hovering over the toast
        });
        console.log("Email sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form fields
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      // Display error toast notification
      toast.error("Failed to send the message.", {
        autoClose: 5000, // Duration in milliseconds
        closeOnClick: true, // Enable closing on click
        pauseOnHover: true, // Pause timer on hover
      });
      console.log("There was an error sending the email.");
      console.error(error);
    }
  };

  return (
    <div className="bg-[#1e1e1e] w-[100%]">
      {/* Divider */}
      <div
        id="contact"
        className="w-3/5 h-px bg-gray-300 border-t border-gray-300 my-10 mx-auto"
      ></div>

      {/* Heading */}
      <h1 className="text-4xl font-semibold mb-8 text-center uppercase tracking-wider text-white">
        Contact Me
      </h1>

      {/* Map and Form Container */}
      <div className="container mx-auto p-0 ">
        <div className="flex flex-col lg:flex-row gap-4 sm:px-6 md:px-8 px-10 w-[90%] mx-auto">
          {/* Map */}
          <div className="lg:w-1/2 h-64 md:h-96 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.6957105573317!2d73.84785631419294!3d18.5204303874075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c065a9b4b741%3A0x5e6f69b8e3f08617!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1694115610161!5m2!1sen!2sus"
              className="w-full h-full border-0 rounded-xl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2 w-full">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="p-2 rounded-md bg-[#2c2c2c] text-white border border-gray-500 focus:outline-none focus:border-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="p-2 rounded-md bg-[#2c2c2c] text-white border border-gray-500 focus:outline-none focus:border-blue-500"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="p-2 rounded-md bg-[#2c2c2c] text-white border border-gray-500 focus:outline-none focus:border-blue-500"
                required
              />
              <textarea
                name="message"
                placeholder="Message..."
                value={formData.message}
                onChange={handleInputChange}
                className="p-2 rounded-md bg-[#2c2c2c] text-white border border-gray-500 focus:outline-none focus:border-blue-500"
                rows="5"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Contact Me
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast container for displaying notifications */}
      <ToastContainer position="bottom-center" />
    </div>
  );
}
