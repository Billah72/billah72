import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { personalInfo } from "../../constants";
import {
  FiMail,
  FiMapPin,
  FiSend,
  FiCopy,
  FiCheck,
  FiMessageSquare,
  FiPhoneCall,
  FiClock,
} from "react-icons/fi";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    toast.success("Email copied to clipboard! 📋", {
      position: "bottom-right",
      autoClose: 2500,
      theme: "dark",
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_axbtt7a",
        "template_1ziboq3",
        form.current,
        "Rz7W9pVF0HdDryNNL"
      )
      .then(
        () => {
          setIsSending(false);
          form.current.reset();
          toast.success("Thank you! Your message has been sent successfully. 🚀", {
            position: "bottom-right",
            autoClose: 4000,
            theme: "dark",
          });
        },
        (error) => {
          setIsSending(false);
          console.error("EmailJS Error:", error);
          toast.error(
            "Failed to send message via automated service. Please contact directly via email.",
            {
              position: "bottom-right",
              autoClose: 4000,
              theme: "dark",
            }
          );
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto relative">
      <ToastContainer position="bottom-right" theme="dark" />

      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <FiMessageSquare />
          <span>Get In Touch</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
          Let's Work <span className="text-gradient">Together</span>
        </h2>
        <p className="text-gray-400 text-base sm:text-lg">
          Have a project in mind, a freelance opportunity, or just want to connect? My inbox is always open.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Contact Information & Cards */}
        <div className="lg:col-span-5 space-y-6">
          {/* Status Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-b from-[#10162f]/90 to-[#0c1022]/90 border border-white/10 backdrop-blur-xl shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <h3 className="text-lg font-bold text-white">Current Availability</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              I am actively available for full-time frontend/MERN stack developer roles, remote contracts, and freelance projects.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-800/30 px-3 py-1.5 rounded-xl">
              <FiClock /> Fast Response Time (Within 24 Hours)
            </div>
          </div>

          {/* Direct Email Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-b from-[#10162f]/90 to-[#0c1022]/90 border border-white/10 backdrop-blur-xl shadow-xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 text-xl shrink-0">
                <FiMail />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-mono tracking-wider">
                  Direct Email
                </p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm sm:text-base font-semibold text-white hover:text-purple-300 transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer shrink-0 ml-2"
              title="Copy Email"
            >
              {copied ? <FiCheck className="text-emerald-400" /> : <FiCopy />}
            </button>
          </div>

          {/* Location & Socials Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-b from-[#10162f]/90 to-[#0c1022]/90 border border-white/10 backdrop-blur-xl shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-xl shrink-0">
                <FiMapPin />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-mono tracking-wider">
                  Location
                </p>
                <p className="text-base font-semibold text-white">
                  {personalInfo.location}
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-400 uppercase font-mono tracking-wider mb-3">
              Social Profiles
            </p>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-gray-300 hover:text-white transition-all hover:scale-102"
              >
                <FaGithub size={16} />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#0a66c2]/15 hover:bg-[#0a66c2]/25 border border-[#0a66c2]/30 text-xs font-semibold text-cyan-300 hover:text-white transition-all hover:scale-102"
              >
                <FaLinkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#1877f2]/15 hover:bg-[#1877f2]/25 border border-[#1877f2]/30 text-xs font-semibold text-blue-300 hover:text-white transition-all hover:scale-102"
              >
                <FaFacebook size={16} />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#111730]/90 to-[#0c1020]/90 border border-white/10 backdrop-blur-xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-2">
              Send a Direct Message ✉️
            </h3>
            <p className="text-gray-400 text-sm mb-8">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="e.g. John Doe"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] text-white border border-white/10 focus:border-purple-500 focus:bg-white/[0.05] focus:outline-none transition-all placeholder:text-gray-600 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="e.g. john@example.com"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] text-white border border-white/10 focus:border-purple-500 focus:bg-white/[0.05] focus:outline-none transition-all placeholder:text-gray-600 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="e.g. Frontend Project Inquiry / Job Opportunity"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] text-white border border-white/10 focus:border-purple-500 focus:bg-white/[0.05] focus:outline-none transition-all placeholder:text-gray-600 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project, timeline, or requirements..."
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] text-white border border-white/10 focus:border-purple-500 focus:bg-white/[0.05] focus:outline-none transition-all placeholder:text-gray-600 text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:opacity-95 shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSending ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <FiSend size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
