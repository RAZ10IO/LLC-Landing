import React from "react";
import { ClipboardCheck, Code2, Brain, Palette, Languages, Stethoscope } from "lucide-react";

export default function ServicesPage() {
    const sections = [
    {
      title: "1. Technical Project Management",
      icon: <ClipboardCheck className="w-6 h-6 text-indigo-600" />, 
      services: [
        "Agile/Scrum project planning and execution",
        "Sprint planning, backlog grooming, and roadmap creation",
        "Stakeholder & developer communication/bridging technical and non-technical teams",
        "Team collaboration setup and process optimization (Notion, Jira, GitHub, G-Suite)"
      ],
      deliverables: [
        "Project kickoff & alignment plans",
        "Agile workflow implementation",
        "Progress reports, KPIs, and retrospective documentation"
      ],
      clients: "Startups or small companies needing structured yet flexible project management for technical teams."
    },
    {
      title: "2. Full-Stack Web Development",
      icon: <Code2 className="w-6 h-6 text-indigo-600" />, 
      services: [
        "UI/UX implementation and improvement",
        "Accessibility-focused interface design",
        "Single Page Applications (SPA) and dashboards",
        "API development and integrations",
        "Database design and optimization",
        "Feature creation and refactoring legacy code"
      ],
      deliverables: [
        "Fully functional MVPs (front-to-back)",
        "Scalable APIs with secure authentication/authorization",
        "Code reviews and technical documentation"
      ],
      clients: "Businesses needing scalable web apps, startups wanting MVPs, or companies modernizing legacy systems."
    },
    {
      title: "3. AI & Data-Driven Product Development",
      icon: <Brain className="w-6 h-6 text-indigo-600" />, 
      services: [
        "Integrating AI/ML features into applications (workflow automation, enhanced UI/UX)",
        "Designing data pipelines using GraphQL/SQL",
        "Collaboration with data science teams to productize AI tools"
      ],
      deliverables: [
        "AI-assisted prototypes",
        "Interactive dashboards and data-driven features",
        "Documentation for AI product lifecycle integration"
      ],
      clients: "AI-driven startups or SaaS companies exploring ML-powered features."
    },
    {
      title: "4. UX/UI Design & Accessibility",
      icon: <Palette className="w-6 h-6 text-indigo-600" />, 
      services: [
        "UX design informed by Google UX Design Certificate training",
        "Usability testing, wireframing, and prototyping",
        "Accessibility compliance (WCAG-focused improvements)"
      ],
      deliverables: [
        "Wireframes, mockups, and design systems",
        "User flow maps and journey documentation",
        "UX/UI improvements integrated into production code"
      ],
      clients: "Companies with underdeveloped UX or accessibility gaps, especially in SaaS and consumer apps."
    },
    {
      title: "5. Multilingual & Culturally Aware Development",
      icon: <Languages className="w-6 h-6 text-indigo-600" />, 
      services: [
        "Building multilingual applications (English, Kurdish, Arabic)",
        "Designing apps/platforms for culturally diverse audiences",
        "Localization and internationalization (i18n) support"
      ],
      deliverables: [
        "Multilingual front-end apps (React Native, web)",
        "Integrated translation workflows",
        "Documentation for scaling to new languages"
      ],
      clients: "NGOs, educational tech, health-tech, and startups expanding globally."
    },
    {
      title: "6. Specialized Healthcare Tech Support",
      icon: <Stethoscope className="w-6 h-6 text-indigo-600" />, 
      services: [
        "Building and maintaining healthcare data systems",
        "Workflow optimization for clinics and patient management",
        "Compliance-minded tech support (HIPAA, patient records)"
      ],
      deliverables: [
        "Patient management dashboards",
        "Database management solutions for healthcare",
        "Training resources for non-technical medical staff"
      ],
      clients: "Small to mid-sized clinics, digital health startups, nonprofits serving refugees or vulnerable populations."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 antialiased px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-12 text-center">Freelance & Contractor Offerings</h1>

        <div className="grid gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                {section.icon}
                <h2 className="text-2xl font-bold text-indigo-700">{section.title}</h2>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Services:</h3>
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  {section.services.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Deliverables:</h3>
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  {section.deliverables.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </div>
              <p className="italic text-gray-600"><strong>Ideal Clients:</strong> {section.clients}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
