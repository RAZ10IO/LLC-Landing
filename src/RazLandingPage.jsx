import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Github, Mail } from "lucide-react";


const calLink = "https://calendly.com/sarwerraz"; // <- replaced
const linkedin = "https://www.linkedin.com/in/razaljaf/"; // <- replaced
const github = "https://github.com/thatonekurdishse"; // <- replaced
const email = "mailto:aljafrsolutions@gmail.com"; // <- replaced

export default function RazLandingPage() {
  return (
      <main className="max-w-6xl mx-auto px-6 pb-20">
        {/* Hero Section */}
<section className="bg-white rounded-3xl shadow-lg p-10 md:p-16 text-center relative overflow-hidden">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
AI projects delivered — without the chaos.
          </h2>
<p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
Fractional AI Technical Project Management that bridges product, data, and engineering so your team ships production-ready models and features on time.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={calLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-indigo-700 transition"
            >
              Book 15-min call
            </a>
            <Link to="/services" className="inline-flex items-center justify-center border border-gray-300 px-6 py-3 rounded-lg font-medium hover:border-indigo-400 hover:text-indigo-600 transition">
              View services
            </Link>
          </div>
        </section>


        {/* Get to Know Me Section */}
        <section className="mt-20 text-center">
<h3 className="text-2xl font-bold mb-4">Let's connect and collaborate!</h3>
<p className="text-gray-600 mb-6 max-w-xl mx-auto">
    I help startups, SaaS companies, and mission-driven teams accelerate product development by bridging product, data, and engineering — combining hands-on engineering expertise with proven technical project management.
          </p>
          <div className="flex justify-center gap-6">
<a href={linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition">
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
<a href={github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition">
              <Github className="w-5 h-5" /> GitHub
            </a>
<a href={email} className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition">
              <Mail className="w-5 h-5" /> Email
            </a>
          </div>
        </section>
      </main>
  )
}