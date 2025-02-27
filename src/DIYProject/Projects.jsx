import React from "react";

const projects = [
  {
    title: "DIY Solar Phone Charger",
    description: "Build a portable solar-powered phone charger using a small solar panel and a battery pack.",
    shortDescription: "Harness the sun to charge your devices anywhere.",
    image: "./assets/images/Charger.jpg"
  },
  {
    title: "Hydro Power Generator",
    description: "Construct a small water wheel to harness energy from flowing water.",
    shortDescription: "Generate power from moving water.",
    image: "./assets/images/HydroPower.jpg"
  },
  {
    title: "Biogas Plant",
    description: "Make a small-scale biogas digester to convert organic waste into usable gas.",
    shortDescription: "Turn organic waste into clean energy.",
    image: "./assets/images/BioGas.jpg"
  },
  {
    title: "Solar Oven",
    description: "Create a simple solar oven to cook food using the power of the sun.",
    shortDescription: "Cook meals using only solar energy.",
    image: "./assets/images/SolarOven.jpg"
  },
  {
    title: "Hand Crank Generator",
    description: "Build a hand-crank generator to produce electricity manually.",
    shortDescription: "Generate power with human effort.",
    image: "./assets/images/HandCrank.jpg"
  },
  {
    title: "Piezoelectric Floor Tiles",
    description: "Install floor tiles that generate electricity when stepped on.",
    shortDescription: "Harvest energy from footsteps.",
    image: "./assets/images/floortile.jpg"
  },
  {
    title: "Saltwater Battery",
    description: "Create a simple battery using saltwater to generate electricity.",
    shortDescription: "Use saltwater to store and generate power.",
    image: "./assets/images/battery.jpg"
  }
];

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-80 transition-transform transform hover:scale-105 cursor-pointer">
      <img src={project.image} alt={project.title} className="rounded-md" />
      <p className="text-gray-500 text-sm mt-1">{project.shortDescription}</p>
      <h2 className="text-xl font-semibold mt-3">{project.title}</h2>
      <p className="text-gray-600 mt-2">{project.description}</p>
    </div>
  );
};

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-10">
      <div className="flex justify-center items-center mb-6">
        <h1 className="text-3xl font-bold text-center">DIY Renewable Energy Projects</h1>
        <img src="./assets/images/Ecology.gif" alt="Animated Logo" className="w-16 h-16 ml-3 rounded-full" />
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
