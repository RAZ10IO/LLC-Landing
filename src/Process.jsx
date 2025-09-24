import React from "react";


 export default function ProcessPage() {
const containers = [
    {
      title: "3-Month Ultra-Sprint Management",
      description: "An intensive engagement designed to bring clarity, momentum, and measurable progress to your project in record time.",
      pricing: "$37,500 ($12,500/month)",
      appeal: "Perfect for teams that need rapid alignment, agile delivery, and visible results in just one quarter."
    },
    {
      title: "6-Month Off-the-Ground Build & Management",
      description: "Half-year engagement to build, structure, and manage your product pipeline while ensuring scalability and resilience.",
      pricing: "$66,000 ($11,000/month)",
      appeal: "Ideal for startups ready to go from zero to MVP with steady, guided execution."
    },
    {
      title: "1+ Year Retainer: Initiate, Launch & Maintain",
      description: "Full-cycle commitment to initiate, launch, and maintain your project over a long-term horizon.",
      pricing: "$120,000/year ($10,000/month)",
      appeal: "Best for organizations looking for consistency, stability, and ongoing technical leadership."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-6 py-12 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-12 text-center">How I Work</h1>
        <div className="grid gap-8">
          {containers.map((c, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-8 group">
              <h2 className="text-2xl font-bold text-indigo-700 mb-2">{c.title}</h2>
              <p className="text-gray-700 mb-3">{c.description}</p>
              <p className="text-gray-600 italic mb-3">{c.appeal}</p>
              <p className="font-semibold text-gray-900 blur-sm group-hover:blur-0 transition duration-300">{c.pricing}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}