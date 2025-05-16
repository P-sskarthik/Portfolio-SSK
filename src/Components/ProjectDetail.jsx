import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const ProjectDetail = () => {
  const { id } = useParams();

  const Container = ({ children }) => (
    <div className="min-h-screen bg-[#e6f0f8] text-gray-900 antialiased font-sans leading-relaxed relative overflow-hidden">
      {/* Subtle 3D background blobs */}
      <div className="absolute -top-32 -left-40 w-[600px] h-[600px] bg-white/30 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/20 rounded-full blur-2xl z-0"></div>
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] bg-white/10 rounded-full blur-2xl z-0"></div>

      <Navbar />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );

  if (id === '2') {
    return (
      <Container>
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
          <img
             src="/MM.png"
             alt="Design 2"
             className=" pl-[180px] detail-image h-170 w-auto" 
              />


          

          <section className="space-y-8">
            <div className="space-y-4 text-base text-muted-foreground">
              <p><strong>Oishii Booking App Prototype</strong></p>
              <p className="text-sm text-gray-500 italic">UX Research & Design — Dec 2024 to Apr 2025</p>
              <p>My first project prompt was to create a mobile app prototype for a restaurant, a booking platform to be exact. This was my first project under a UX Design Course hosted by Google.</p>
              <p>The project took me 5 months to complete. It involved a 5-step design process with a user-centric approach: <strong>Empathize, Define, Ideate, Prototype</strong>, and <strong>Test</strong>.</p>
              <p>User research was conducted initially to empathize and define user needs. I carried out qualitative interviews, which led to creating user stories and a journey map that visualized the entire booking flow.</p>
              <p>The course introduced me to design sprint techniques like <strong>Crazy Eights</strong> and sketching idea solutions, which were helpful during the Ideation stage.</p>
              <p>I started with hand-drawn wireframes, followed by lo-fi prototypes in Figma. These were tested with users, iterated based on their feedback, and eventually evolved into a high-fidelity prototype that was validated through user testing.</p>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-12 items-center">
  <div className="space-y-4">
    <h2 className="text-2xl font-bold">Project Overview</h2>
    <p><strong>The product:</strong> Oishii – Reserve your table and discover a world of delicious Japanese flavors. Easy, elegant and made for food lovers.</p>
    <p><strong>Project duration:</strong> December 2024 – April 2025</p>
  </div>
  <div className="flex justify-center">
    <img
      src="/Design1.jpg"
      alt="Mobile screens preview of Oishii app"
      className=" max-w-xs md:max-w-sm w-full h-auto"
    />
  </div>
</section>

          <section className="grid md:grid-cols-2 gap-12 items-center">
  <div className="space-y-4">
    <h2 className="text-2xl font-bold">The Problem</h2>
    <p> Oishii is a Japanese-style restaurant. The restaurant has a static website; however, it doesn't have a booking platform. Customers can book a table through phone, email, or social media.
</p>
  </div>
  
    <div className="space-y-4">
    <h2 className="text-2xl font-bold">The Goal</h2>
    <p> Create a mobile app that allows customers to book a table at the restaurant. The app should be user-friendly, visually appealing, and culturally inspired.</p>

  </div>
  </section>

<section className="grid md:grid-cols-2 gap-12 items-center">
  <div className="space-y-4">
    <h2 className="text-2xl font-bold">User Research Approach</h2>
    <p>
      UX design principles of <strong>Empathize, Define, Ideate, Prototype, Test</strong> were applied to guide the process and ensure user-centered outcomes.
    </p>
  </div>

  <div className="space-y-4">
    <h2 className="text-2xl font-bold">Key Insights</h2>
    <p>
      Qualitative research methods such as <strong>interviews and surveys</strong> were used to understand users’ needs and expectations for a restaurant's digital platform.
      The findings revealed a strong desire for a platform that is <strong>easy to use</strong> and <strong>visually engaging</strong>.
    </p>
  </div>
</section>

<section className="text-center space-y-12">
  <h2 className="text-3xl font-semibold text-gray-800">User research: pain points</h2>

  <div className="grid md:grid-cols-3 gap-8">
    {/* Pain Point 1 */}
    <div className="space-y-4">
      <div className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center mx-auto text-lg font-semibold">
        1
      </div>
      <h3 className="text-lg font-semibold text-red-600">Frustrations in making a booking</h3>
      <p className="text-gray-600">
        Users are frustrated when no one picks up the phone when making a table reservation.
      </p>
    </div>

    {/* Pain Point 2 */}
    <div className="space-y-4">
      <div className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center mx-auto text-lg font-semibold">
        2
      </div>
      <h3 className="text-lg font-semibold text-red-600">Unfamiliarity with foreign food</h3>
      <p className="text-gray-600">
        First time customers who are not familiar with the cuisine don’t have an idea what they will be served,
        despite having descriptions on the menu.
      </p>
    </div>

    {/* Pain Point 3 */}
    <div className="space-y-4">
      <div className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center mx-auto text-lg font-semibold">
        3
      </div>
      <h3 className="text-lg font-semibold text-red-600">Looking for a booking option</h3>
      <p className="text-gray-600">
        Users who frequent the restaurant couldn’t find a booking platform integrated into the restaurant’s website.
      </p>
    </div>
  </div>
</section>
<section className="grid md:grid-cols-2 gap-12 items-center">
  {/* Left Side: Text Content */}
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-800">Persona: <span className="text-black">Mahesh</span></h2>

    <div>
      <h3 className="text-xl font-semibold text-red-600">Problem statement:</h3>
      <p className="text-gray-700 mt-2">
        Mahesh is a foodie who needs image/good visuals on the menu,
        particularly with unfamiliar cuisine.
      </p>
    </div>
  </div>

  {/* Right Side: Persona Card (as image placeholder for now) */}
  <div className="w-full">
    <img
      src="/Design6.jpg" // update path as needed
      alt="Persona Mahesh"
      className="rounded-lg shadow-md w-full max-w-xl mx-auto"
    />
  </div>
</section>

<section className="space-y-10">
  {/* Title and Description */}
  <div className="grid md:grid-cols-2 gap-8 items-start">
    <div className="space-y-4">
      <h2 className="text-3xl font-bold text-gray-800">User journey map</h2>
      <p className="text-gray-600 text-lg">
        Tracing Mahesh’s user journey helps me understand what to incorporate in the prototype.
      </p>
    </div>

    {/* Persona Info Card */}
    <div className="bg-blue-50 rounded-lg p-4 border">
      <h3 className="font-semibold">Persona Name: Mahesh</h3>
      <p className="text-sm text-gray-700">
        Goal: Booking platform with nice visuals of food being offered.
      </p>
      <div className="mt-2 text-sm text-gray-600 flex items-center gap-2">
        <span>🎯</span> <span>Journey goal</span>
      </div>
    </div>
  </div>

  {/* Journey Table */}
  <div className="overflow-x-auto">
    <table className="w-full table-auto border border-gray-300 text-left text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-3 border"> </th>
          <th className="p-3 border">Search for the restaurant's website</th>
          <th className="p-3 border">Browse Content</th>
          <th className="p-3 border">Book</th>
        </tr>
      </thead>
      <tbody>
        {/* Journey Step Row */}
        <tr>
          <td className="p-3  border font-medium  gap-2">
            <span>🗺️</span> Journey Step
          </td>
          <td className="p-3 border">Search up the restaurant’s name on Google</td>
          <td className="p-3 border">Check the menu and inspect food offerings</td>
          <td className="p-3 border">Download app, register, and fill in booking details</td>
        </tr>

        {/* Task List Row */}
        <tr>
          <td className="p-3 border font-medium  gap-2">
            <span>👨‍💻</span> Task List
          </td>
          <td className="p-3 border">
            A. Open browser<br />
            B. Type in Google.com<br />
            C. Search restaurant name
          </td>
          <td className="p-3 border">
            A. Browse the website<br />
            B. Look what is offered<br />
            C. Check the menu
          </td>
          <td className="p-3 border">
            A. Download the app<br />
            B. Register<br />
            C. Fill-in date, time, and seat
          </td>
        </tr>

        {/* Feeling Row */}
        <tr>
          <td className="p-3 border font-medium  gap-2">
            <span>🎭</span> Feeling
          </td>
          <td className="p-3 border">Curious</td>
          <td className="p-3 border">Surprised with what’s in store</td>
          <td className="p-3 border">Excitement</td>
        </tr>

        {/* Improvement Opportunities Row */}
        <tr className="bg-blue-50">
          <td className="p-3 border font-medium  gap-2">
            <span>🏗️</span> Improvement Opportunities
          </td>
          <td className="p-3 border">
            Should be on top of Google search.
          </td>
          <td className="p-3 border">
            • Website should be simple yet engaging.<br />
            • Pictures should be enticing.
          </td>
          <td className="p-3 border">
            Booking confirmation should contain directions to the restaurant.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>





          <div className="grid grid-cols-1 gap-6">
        
            <img src="/Design8.jpg" width="1500" alt="Design 8" className="detail-image" />
            <h1 className="text-3xl">The user flow of the system is presented in this picture. It starts off with a home page. The app has a navigation menu where users can easily go from looking at the menu, booking a table, and checking their reservation.</h1>
            <section className="text-center space-y-4">
              <h1>Click the button below to check the prototype in action</h1>
              <div className="flex justify-center gap-2">
                <a href="https://www.figma.com/proto/aFXQczsK2Ya6rTqkfZEEDL/Digital-Wireframe?node-id=264-41" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-orange-600 text-white rounded-full shadow hover:bg-orange-700">Lo-fi Prototype</a>
              </div>
            </section>
            <img src="/Design9.jpg" width="1500" alt="Design 9" className="detail-image" />

            <section className="text-center space-y-4">
              <h1>Click the button below to check the prototype in action</h1>
              <div className="flex justify-center gap-4">
                <a href="https://www.figma.com/proto/aFXQczsK2Ya6rTqkfZEEDL/Digital-Wireframe?node-id=341-43" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-orange-600 text-white rounded-full shadow hover:bg-orange-700">Hi-fi Prototype</a>
              </div>
            </section>
          </div>
        </div>
      </Container>
    );
  }

  if (id === '1') {
    return (
      <Container>
        <div className="max-w-7xl mx-auto px-2 py-24 space-y-16 pt-40">
          <section>
            <h1 className="text-4xl font-bold mb-2">FIN-TASTIC DIVISION – Educational Math Game</h1>
            <p className="text-muted-foreground">UX/UI Design | Game Designer</p>
          </section>

          <section className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-semibold mb-2">Project Overview</h2>
              <p>“Fin-Tastic Divisions” is a captivating and educational game crafted by a dynamic 12-member team. Designed specifically for first and second graders, the game submerges young learners in an ocean-themed world where I contributed as the UX/UI Designer. Our goal was to transform the abstract concept of division into a lively and interactive experience, making math both visual and meaningful for early learners.”</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">My Role & Responsibilities</h2>
              <p>UX/UI Designer — responsible for designing game wireframes, low & high fidelity prototypes, user flows, and UI assets. Also contributed to character design, backgrounds, and basic animations using tools like Adobe Firefly and Sketchbook.</p>
            </div>
          </section>

          <section className="space-y-8">
            <div className="space-y-4 text-base text-muted-foreground">
              <p><strong>FIN-TASTIC DIVISION Game Design</strong></p>
              <p className="text-sm text-gray-500 italic">UX/UI Designer — Jan 2024 to May 2024</p>
              <p>The game aims to make math, especially division, more engaging for young learners. As the UX/UI Designer, I focused on creating an intuitive and visually appealing experience for children aged 6–8.</p>
              <p>I began by crafting wireframes and lo-fi prototypes to establish basic navigation and task flows. After several iterations and usability tests, I translated these into high-fidelity screens in Figma.</p>
              <p>I also created original character concepts using Adobe Firefly and Sketchbook. These characters served as in-game guides and reward systems. Backgrounds and animated assets were custom-designed to keep the environment playful and educational.</p>
              <p>Affinity diagrams helped us synthesize feedback from peers and test users. I mapped out a clear user flow diagram to ensure logical and child-friendly progression throughout the game.</p>
            </div>
          </section>

          <div className="grid grid-cols-1 gap-6">
            <img src="/Low.jpg" width="1500" alt="Low fidelity" className="detail-image" />
            <img src="/PaperSketches.png" width="1500" alt="PaperSketches" className="detail-image" />
            <img src="/GameCharacter1.jpg" width="1500" alt="Character Design" className="detail-image" />
            <img src="/GameBackground1.jpg" width="1500" alt="Background Design" className="detail-image" />
            <img src="/UserFlowDiagram.jpg" width="1500" alt="User Flow Diagram" className="detail-image" />
            <img src="/AffinityDiagram.jpg" width="1500" alt="Affinity Diagram" className="detail-image" />
          </div>

          <section className="text-center space-y-6">
            <h3 className="text-xl font-bold">Click below to explore prototypes</h3>
            <div className="flex justify-center gap-4">
              <a target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700">Lo-fi Prototype</a>
              <a href="https://www.figma.com/proto/aFXQczsK2Ya6rTqkfZEEDL/Digital-Wireframe?node-id=146-344&p=f&t=4a66W5m1Cmm0Wwf6-0&scaling=scale-down&content-scaling=fixed&page-id=134%3A186&starting-point-node-id=146%3A344" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-purple-600 text-white rounded-full shadow hover:bg-purple-700">Hi-fi Prototype</a>
            </div>
          </section>
        </div>
      </Container>
    );
  }

  return <div className="p-10">Project not found.</div>;
};

export default ProjectDetail;
