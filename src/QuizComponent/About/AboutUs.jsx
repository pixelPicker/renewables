import React from "react";

const teamMembers = [
  {
    name: "Dhiraj Woli",
    image: "./assets/images/dhiraj.jpg",
    // role: "Full Stack Developer",
    social: {
      twitter: "#",
      instagram: "#",
      github: "#",
    }
  },
  {
    name: "Carlton",
    image: "./assets/images/carlton.jpg",
    // role: "UI/UX Designer",
    social: {
      twitter: "#",
      instagram: "#",
      github: "#",
    }
  },
  {
    name: "Rahul jain",
    image: "./assets/images/dhiraj.jpg",
    // role: "Backend Developer",
    social: {
      twitter: "#",
      instagram: "#",
      github: "#",
    }
  },
  {
    name: "Yash",
    image: "./assets/images/yash.jpg",
    // role: "Frontend Developer",
    social: {
      twitter: "#",
      instagram: "#",
      github: "#",
    }
  },
  {
    name: "Hrithik",
    image: "./assets/images/hrithik.jpg",
    // role: "DevOps Engineer",
    social: {
      twitter: "#",
      instagram: "#",
      github: "#",
    }
  },
  {
    name: "Hareesh",
    image: "./assets/images/dhiraj.jpg",
    // role: "QA Engineer",
    social: {
      twitter: "#",
      instagram: "#",
      github: "#",
    }
  }
];

const TeamCard = ({ member }) => (
  <div className="group">
    <div className="card bg-white rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative">
        <div className="img h-[150px] w-[150px] mx-auto rounded-full overflow-hidden bg-gradient-to-r from-green-400 to-blue-500 p-1">
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover rounded-full transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="text-center mt-4 space-y-2">
        <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
        <p className="text-sm text-gray-600 font-medium">{member.role}</p>
        
        <div className="flex justify-center space-x-4 pt-2">
          <a href={member.social.twitter} className="transform transition-transform hover:scale-125 hover:text-blue-500">
            <i className="ri-twitter-x-line text-xl"></i>
          </a>
          <a href={member.social.instagram} className="transform transition-transform hover:scale-125 hover:text-pink-500">
            <i className="ri-instagram-line text-xl"></i>
          </a>
          <a href={member.social.github} className="transform transition-transform hover:scale-125 hover:text-purple-500">
            <i className="ri-github-line text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
);

function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Meet Our Team
            </h1>
            <video
              src="./assets/images/renewable-energy.mp4"
              loop
              muted
              autoPlay
              className="w-16 h-16 rounded-full border-2 border-white shadow-lg object-cover"
            />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
          We are a team of students passionate about web development, collaborating to build meaningful and user-friendly projects. Through this website, we aim to apply our learning, enhance our skills, and create something valuable for our college community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard 
              key={index} 
              member={member}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;