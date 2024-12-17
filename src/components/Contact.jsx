import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const SERVICE_ID = import.meta.env.VITE_APP_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_APP_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_APP_PUBLIC_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      user_name: formData.user_name,
      user_email: formData.user_email,
      user_message: formData.user_message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send message. Please try again.");
      }
    );

    setFormData({
      user_name: "",
      user_email: "",
      user_message: "",
    });
  };

  return (
    <section
      id="contact"
      className="lg:py-24 border-b border-neutral-500 text-gray-900 dark:text-gray-100"
    >
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mt-12 mb-8 text-center hover:tracking-widest transition-all duration-300 ease-in-out"
      >
        &lt; Contact Me /&gt;
      </motion.h1>
      <motion.form
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto px-6 py-10 lg:p-12 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out "
      >
        <h2 className="text-center text-xl font-thin hover:tracking-widest transition-all duration-500 ease-in-out">
          -- Get in Touch --
        </h2>
        <div className="mb-4">
          <label
            htmlFor="user_name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Name
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 bg-gray-100 dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="user_email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 bg-gray-100 dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="user_message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Message
          </label>
          <textarea
            id="user_message"
            name="user_message"
            value={formData.user_message}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 bg-gray-100 dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border-2 shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send Message
          </button>
        </div>
      </motion.form>
    </section>
  );
};

export default Contact;
