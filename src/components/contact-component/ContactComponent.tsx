"use client";

import { useState, FormEvent } from "react";
import axios from "axios";

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    name: "johnny",
    email: "test@test.com",
    message: "test message",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const FUNCTION_URL = "https://contact-form-541622433066.us-west1.run.app";

  function submitForm(data: {
    name: string;
    email?: string;
    message?: string;
  }) {
    // Clear previous messages
    setErrorMessage("");
    setSuccessMessage("");

    return axios
      .post(FUNCTION_URL, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Function response:", response.data);
        setSuccessMessage(
          response.data["message"] ?? "Message sent successfully!"
        );
        return response.data;
      })
      .catch((error) => {
        console.error("Function error:", error);
        // Extract error message from axios error response
        const errorMsg =
          error.response?.data?.error ||
          "Failed to send message. Please try again.";
        setErrorMessage(errorMsg);
        throw error;
      });
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(""); // Clear previous errors
    setSuccessMessage(""); // Clear previous success messages

    submitForm({
      name: formData.name.trim(),
      email: formData.email.trim() || undefined,
      message: formData.message.trim() || undefined,
    })
      .then(() => {
        // Reset form on success
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setIsSubmitting(false);
      })
      .catch(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="relative flex flex-col w-full min-h-[20vh] overflow-hidden bg-lime-600/20">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(/images/filipino-tattoo.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center 80%",
          backgroundRepeat: "no-repeat",
          opacity: 0.1,
        }}
      />

      <div className="relative z-10 flex flex-col w-full min-h-[20vh] items-center justify-center">
        <div className="flex flex-col w-1/2 gap-4 m-10">
          <h2 className="flex text-5xl font-semibold border-gray-50 border-b-4 pb-1 w-fit">
            reach out
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
            <div className="flex flex-row w-full gap-4">
              <input
                className="flex-1 bg-gray-50 rounded-md p-2"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                className="flex-1 bg-gray-50 rounded-md p-2"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-row w-full">
              <textarea
                className="flex-1 resize-none bg-gray-50 rounded-md p-2"
                name="message"
                placeholder="Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            {successMessage && (
              <div className="text-lime-800 text-xl self-end">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="text-red-800 text-xl self-end">
                {errorMessage}
              </div>
            )}
            <button
              type="submit"
              className="bg-lime-600 text-white self-end rounded-md py-2 px-4 w-fit disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
