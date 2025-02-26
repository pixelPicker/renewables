import React from "react";


const caseStudies = [
  {
    id: 1,
    title: "Solar Energy Transformation",
    summary: "How a rural community adopted solar energy and reduced costs by 50%.",
    link: "#",
  },
  {
    id: 2,
    title: "Wind Power for Industries",
    summary: "A case study on how wind energy optimized power usage in manufacturing.",
    link: "#",
  },
  {
    id: 3,
    title: "Smart Grid Implementation",
    summary: "Enhancing energy distribution efficiency with smart grid technology.",
    link: "#",
  },
];

const CaseStudyCard = ({ study }) => {
  return (
    <div className="!p-4 shadow-lg rounded-2xl border border-blue-300 bg-blue-50">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-blue-700">{study.title}</h3>
        <p className="text-blue-800">{study.summary}</p>
        <button className="!mt-2 w-full bg-blue-600 text-white hover:bg-blue-700" onClick={() => window.location.href = study.link}>
          Read More
        </button>
      </div>
    </div>
  );
};

const CaseStudies = () => {
  return (
    <div className="max-w-3xl mx-auto !p-6 space-y-4 bg-blue-100 border border-blue-300 rounded-lg">
      <h2 className="text-2xl font-bold text-blue-700">Case Studies & Success Stories</h2>
      <div className="grid gap-4">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
