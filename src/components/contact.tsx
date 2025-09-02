"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { SiGmail } from "react-icons/si";
import { FiSend, FiMail, FiMessageSquare, FiUser } from "react-icons/fi";
import { Mail } from "lucide-react";
import { sendEmail } from "@/utils/email";
import { text } from "stream/consumers";

interface FormData {
  email: string;
  message: string;
  name: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
        await sendEmail({
            ...formData,
            subject: "Email from client"
        })
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({ email: "", message: "", name: ""});
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <section id="contact" className="py-12 px-4 sm:px-6">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-2">
            <Mail className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-white">Send a Message</h2>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/10 p-5 border border-gray-700 rounded-lg shadow-sm">
          {submitStatus === "success" && (
            <div className="mb-4 p-2 bg-green-100 text-green-700 text-sm rounded text-center">
              Message sent successfully!
            </div>
          )}
          {submitStatus === "error" && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 text-sm rounded text-center">
              Error sending message. Please try again.
            </div>
          )}


          <div className="mb-4">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="h-4 w-4 text-gray-400" />
                </div>
                <input
                    type="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="pl-9 text-sm w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-gray-400 focus:border-gray-400 outline-none"
                    placeholder="What should i call you?"
                />
            </div>
          </div>
          <div className="mb-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="pl-9 text-sm w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-gray-400 focus:border-gray-400 outline-none"
                placeholder="Your email"
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="relative">
              <div className="absolute top-2 left-3 flex items-center pointer-events-none">
                <FiMessageSquare className="h-4 w-4 text-gray-400" />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={3}
                className="pl-9 text-sm w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-gray-400 focus:border-gray-400 outline-none"
                placeholder="Your message"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-purple-800 text-white text-sm py-2 px-4 rounded hover:bg-gray-800 transition-colors flex items-center justify-center disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                <FiSend className="mr-2" />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}