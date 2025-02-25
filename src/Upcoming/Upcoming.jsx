import React from "react";
import { FaCalendar } from "react-icons/fa6";

const events = [
  {
    id: 1,
    title: "React Basics Webinar",
    date: "March 10, 2025",
    description: "Learn the fundamentals of React in this beginner-friendly webinar.",
    link: "#",
  },
  {
    id: 2,
    title: "Advanced Next.js Workshop",
    date: "March 15, 2025",
    description: "A deep dive into server-side rendering and API routes in Next.js.",
    link: "#",
  },
  {
    id: 3,
    title: "UI/UX Best Practices Webinar",
    date: "March 20, 2025",
    description: "Enhance your design skills with practical UI/UX tips and tricks.",
    link: "#",
  },
];

const EventCard = ({ event }) => {
  return (
    <div className="!p-4 shadow-lg rounded-2xl border border-gray-200">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">{event.title}</h3>
        <div className="flex items-center text-gray-600">
            <FaCalendar />
          <span>{event.date}</span>
        </div>
        <p className="text-gray-700">{event.description}</p>
        <button className="!mt-2 w-full" variant="outline" onClick={() => window.location.href = event.link}>
          Register Now
        </button>
      </div>
    </div>
  );
};

const UpcomingEvents = () => {
  return (
    <div className="max-w-3xl mx-auto !p-6 space-y-4">
      <h2 className="text-2xl font-bold">Upcoming Events & Webinars</h2>
      <div className="grid gap-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
