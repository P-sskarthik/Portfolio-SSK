import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";




const ProjectDetail = () => {
  const { id } = useParams();

  if (id !== '2') return <div className="p-10">Project not found.</div>;

  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto px-2 py-24 space-y-16 pt-40">
        <section>
          <h1 className="text-4xl font-bold mb-2">Japanese restaurant table reservation App</h1>
          <p className="text-muted-foreground">UX Research | UX Design</p>
        </section>

        <section className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-semibold mb-2">Project Overview</h2>
            <p>As part of my UX Design course, I created a mobile booking app for a restaurant. The app went through a full design cycle from research to hi-fi prototypes.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">My Role & Responsibilities</h2>
            <p>UX Researcher & UX Designer — conducting interviews, wireframing, prototyping, and user testing.</p>
          </div>
        </section>

        <img src="/JTable.jpg" alt="Restaurant App" className="rounded-xl px-[200px] shadow-lg h-[500px]" />

        <section className="space-y-8">


  <div className="space-y-4 text-base text-muted-foreground">
    <p><strong>Oishii Booking App Prototype</strong></p>
    <p className="text-sm text-gray-500 italic">UX Research & Design — Dec 2024 to Apr 2025</p>

    <p>
      My first project prompt was to create a mobile app prototype for a restaurant, a booking platform to be exact. This was my first project under a UX Design Course hosted by Google.
    </p>
    <p>
      The project took me 5 months to complete. It involved a 5-step design process with a user-centric approach: <strong>Empathize, Define, Ideate, Prototype</strong>, and <strong>Test</strong>.
    </p>
    <p>
      User research was conducted initially to empathize and define user needs. I carried out qualitative interviews, which led to creating user stories and a journey map that visualized the entire booking flow.
    </p>
    <p>
      The course introduced me to design sprint techniques like <strong>Crazy Eights</strong> and sketching idea solutions, which were helpful during the Ideation stage.
    </p>
    <p>
      I started with hand-drawn wireframes, followed by lo-fi prototypes in Figma. These were tested with users, iterated based on their feedback, and eventually evolved into a high-fidelity prototype that was validated through user testing.
    </p>
  </div>
</section>


<div className="grid grid-cols-1 gap-6">
  <img
    src="/Design1.jpg"
    width="1500"
    alt="Design 1"
    className="detail-image"
  />
  <img
    src="/Design2.jpg"
    width="1500"
    alt="Design 2"
    className="detail-image"
  />
 
   <img
    src="/Design4.jpg"
    width="1500"
    alt="Design 4"
    className="detail-image"
  />
  <img
    src="/Design5.jpg"
    width="1500"
    alt="Design 5"
    className="detail-image"
  />
  <img
    src="/Design6.jpg"
    width="1500"
    alt="Design 6"
    className="detail-image"
  />
  <img
    src="/Design7.jpg"
    width="1500"
    alt="Design 7"
    className="detail-image"
  />
  
  
  
</div>


        <section className="text-center space-y-6">
          <h3 className="text-xl font-bold">Click below to check out the prototypes</h3>
          <div className="flex justify-center gap-4">
            <a target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700">Lo-fi Prototype</a>
            <a  target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-purple-600 text-white rounded-full shadow hover:bg-purple-700">Hi-fi Prototype</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;
