import React from "react";
import { Link } from "react-router-dom";

export default function ProofPage() {
  const projects = [
    {
      title: "Flight-Disruption AI Chatbot for AirFrance",
      description:
        "Led from kickoff through launch, managing weekly and executive stakeholder calls. Guided sprint planning, backlog grooming, and ensured PII-sensitive data security for an AI-powered passenger disruption chatbot.",
      tags: ["Technical Project Management", "Security & PII Sensitivity", "Client Satisfaction", "Sprint Planning", "Backlog Grooming"]
    },
    {
      title: "Cooper-Smith AI Chatbot",
      description:
        "Managed a 3–5 engineer team through ideation, training, testing, and launch. Balanced development and delivery while aligning client expectations for a production-ready AI chatbot.",
      tags: ["Technical Project Management", "Development", "Client Satisfaction", "Sprint Planning", "Backlog Grooming", "LLM Training"]
    },
    {
      title: "Zengines.AI Data Analysis Interface",
      description:
        "Designed and developed a machine-learning powered data interface with end-to-end data migration and mainframe lineage tracking.",
      tags: ["Design & Development", "Data Analysis"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-6 py-12 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-12 text-center">Proof of Work</h1>
        <div className="grid gap-8">
          {projects.map((p, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-8">
              <h2 className="text-2xl font-bold text-indigo-700 mb-3">{p.title}</h2>
              <p className="text-gray-700 mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag, i) => (
                  <Link
                    key={i}
                    to="/services"
                    className="inline-block bg-indigo-50 text-indigo-700 text-xs font-medium px-3 py-1 rounded-full hover:bg-indigo-100 transition"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}