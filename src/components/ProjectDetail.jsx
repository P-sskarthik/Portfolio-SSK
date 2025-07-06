import React from "react";
import { useParams } from "react-router-dom";
import Navbar from '../components/Navbar';
import { motion } from "framer-motion";
import { Github, Linkedin, Dribbble } from "lucide-react";
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
  className="detail-image w-full max-w-3xl h-auto mx-auto rounded-md shadow-md"
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

<section className="grid md:grid-cols-2 gap-8 items-start">
  {/* Text Content */}
  <div className="space-y-6 max-w-xl">
    <div className="flex items-center space-x-4">
      
      <h2 className="text-3xl font-bold text-gray-900">Crazy Eights</h2>
    </div>
    <p className="text-gray-700 leading-relaxed">
      To explore a wide range of layout ideas quickly, I used the Crazy Eights ideation method. This helped me sketch eight different UI concepts within a short time, encouraging creative variety before locking in any design direction.
    </p>
    <p className="text-gray-700 leading-relaxed">
      It was especially useful for brainstorming different home screen and menu interactions that felt simple yet culturally appropriate for a Japanese restaurant audience.
    </p>
  </div>

  {/* Image Content */}
  <div className="w-full">
    <img
      src="/CrazyEights.jpg" // Update path as needed
      alt="Crazy Eights Sketches"
      className="w-full rounded-lg shadow-md object-cover"
    />
  </div>
</section>




          <div className="grid grid-cols-1 gap-6">
        <h2 className="text-3xl font-bold text-gray-900">Low-Fidelity Prototype </h2>
            <img src="/Design8.jpg" width="1500" alt="Design 8" className="detail-image" />
            <h1 className="text-xl">The user flow of the system is presented in this picture. It starts off with a home page. The app has a navigation menu where users can easily go from looking at the menu, booking a table, and checking their reservation.</h1>
           
           <h2 className="text-3xl font-bold text-gray-900">High-Fidelity Prototype </h2>
            <img src="/Design9.jpg" width="1500" alt="Design 9" className="detail-image" />

            <section className="text-center space-y-4">
              <h1>Click the button below to check the prototype in action</h1>
              <div className="flex justify-center gap-4">
                <a href="https://www.figma.com/proto/aFXQczsK2Ya6rTqkfZEEDL/Digital-Wireframe?node-id=341-43" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-orange-600 text-white rounded-full shadow hover:bg-orange-700">Hi-fi Prototype</a>
              </div>
            </section>

            <section className="text-center space-y-10">
  <h2 className="text-3xl font-semibold text-gray-800">Usability study: findings</h2>
  <p className="text-gray-600 max-w-xl mx-auto">
    Usability study was conducted for both Low-Fidelity Prototype & High-Fidelity Prototype
  </p>

  <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
    {/* Round 1 Findings */}
    <div className="bg-gray-50 p-6 rounded-lg space-y-4">
      <h3 className="text-xl font-bold text-orange-500">Round 1 findings</h3>
      <div className="flex items-start space-x-4">
        <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
        <p className="text-gray-700">User-Friendly Interface</p>
      </div>
      <div className="flex items-start space-x-4">
        <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
        <p className="text-gray-700">Include description in the Menu bar</p>
      </div>
      <div className="flex items-start space-x-4">
        <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
        <p className="text-gray-700">Edit the Booking</p>
      </div>
    </div>

    {/* Round 2 Findings */}
    <div className="bg-gray-50 p-6 rounded-lg space-y-4">
      <h3 className="text-xl font-bold text-orange-500">Round 2 findings</h3>
      <div className="flex items-start space-x-4">
        <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
        <p className="text-gray-700">Insert Social Media plug-ins</p>
      </div>
      <div className="flex items-start space-x-4">
        <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
        <p className="text-gray-700">Food allergen icons</p>
      </div>
    </div>
  </div>
</section>

<section className="text-center space-y-12">
  <h2 className="text-3xl font-semibold text-gray-800">Accessibility considerations</h2>

  <div className="grid md:grid-cols-3 gap-8">
    {/* Card 1 */}
    <div className="bg-gray-50 p-6 rounded-lg space-y-4">
      <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center mx-auto text-lg font-semibold">
        1
      </div>
      <p className="text-gray-700">
        To make the navigation easier, we added icons for quick recognition. And just in case the icons aren’t obvious to everyone, we also included clear text labels underneath.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-gray-50 p-6 rounded-lg space-y-4">
      <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center mx-auto text-lg font-semibold">
        2
      </div>
      <p className="text-gray-700">
        Not everyone knows what each dish is — so we made sure to use lots of pictures to help users understand the menu visually, especially if they’re new to the cuisine.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-gray-50 p-6 rounded-lg space-y-4">
      <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center mx-auto text-lg font-semibold">
        3
      </div>
      <p className="text-gray-700">
       We used large, legible fonts and high color contrast to make sure the content is easy to read for users with visual impairments or low vision.
      </p>
    </div>
  </div>
</section>


            
            <section className="grid md:grid-cols-2 gap-12 items-start">
  {/* Impact Section */}
  <div className="space-y-4">
    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
      <span className="text-gray-900 text-2xl">📋</span>
    </div>
    <h2 className="text-2xl font-bold text-gray-900">Impact:</h2>
    <p>
      Many users find it inconvenient to book a table at local restaurants, especially when there’s no dedicated or user-friendly platform available. To address this issue, I designed a mobile app for Oishii, a Japanese restaurant, to simplify the reservation process while showcasing the restaurant’s unique ambiance and cuisine. One of the key challenges was designing for a wide range of users — from first-time diners to loyal customers. It was important to create an interface that felt warm, intuitive, and culturally inspired, while making sure the booking experience was seamless and efficient.
    </p>
  </div>

  {/* What I Learned Section */}
  <div className="space-y-4">
    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
      <span className="text-gray-900 text-2xl">📖</span>
    </div>
    <h2 className="text-2xl font-bold text-gray-900">What I learned:</h2>
    <p>
      Working as a UX/UI designer on the Oishii restaurant booking app gave me valuable insights into designing for a broad and diverse user base. Some of the key takeaways from this project include:
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li>Designing with empathy for both tech-savvy and first-time users</li>
      
      <li>Ensuring accessibility across various age groups and comfort levels with mobile apps</li>
      <li>Gathering and implementing feedback through user testing to refine the experience</li>
    </ul>
  </div>
</section>
          </div>
        </div>

        
          <section className="bg-sky-200 text-gray-900 py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Section: Text + Email + Resume */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-bold">Get in touch</h2>

          <div className="bg-white text-black px-4 py-2 rounded-md inline-block font-medium">
            saisuryakarthik.p@gmail.com
          </div>

          <div>
            <a
              href="/Sai_Surya_Karthik_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-800 hover:underline"
            >
              <span role="img" aria-label="chat">💬</span>
              <span className="underline">Sai_Surya_Karthik_Resume.pdf</span>
            </a>
          </div>
        </div>

        {/* Right Section: Animated Social Icons */}
        <motion.div
          className="flex items-center gap-6 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          {[
            { href: "https://github.com/P-sskarthik", icon: <Github size={22} /> },
            { href: "https://www.linkedin.com/in/sai-surya-karthik-p-a80ba5197/", icon: <Linkedin size={22} /> },
            { href: "https://behance.net/saisuryakarthik", icon: <Dribbble size={22} /> },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-800 p-3 rounded-full hover:bg-blue-100 transition-colors"
              whileHover={{ y: -3, scale: 1.1 }}
              aria-label={
                social.href.includes("behance")
                  ? "Behance Profile"
                  : social.href.includes("linkedin")
                  ? "LinkedIn Profile"
                  : "GitHub Profile"
              }
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
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
              <p>“Fin-Tastic Divisions is a captivating and educational game developed by a dynamic 12-member team, tailored specifically for first and second graders. Set in a vibrant, ocean-themed world, the game transforms the abstract concept of division into a fun, interactive, and visual experience designed to engage early learners. I contributed as the UX/UI Designer, focusing on creating intuitive interfaces and playful user flows that support young children's learning and cognitive abilities. The game was exclusively designed for Android device models.”</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">My Role & Responsibilities</h2>
              <p>UX/UI Designer — responsible for designing game wireframes, low & high fidelity prototypes, user flows, and UI assets. Also contributed to character design, backgrounds, and basic animations using tools like Unity, Adobe Firefly and Sketchbook.</p>
            </div>
          </section>

         <section className="px-6 py-12 overflow-x-auto">
  <div className="flex justify-center">
    <div className="flex space-x-4 w-max">
      {[
        "/Screen1.png",
        "/Screen5.png"
      ].map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Screen ${index + 1}`}
          className="h-[500px] w-auto rounded-xl transition-transform hover:scale-105"
        />
      ))}
    </div>
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
          <section className="space-y-8">
  <div className="space-y-4 text-base text-muted-foreground">
    <h3 className="text-2xl font-extrabold tracking-tight text-gray-900">User Research</h3>

    <p>
      To better understand how to create an engaging game for kids, I started by chatting with my teammates to hear their thoughts and ideas. I also did some online research to explore what makes a game both fun and educational, especially for younger children.
    </p>
    <p>
      Since I was working on a tight timeline, I used a <strong>qualitative research</strong> approach. This helped me gather quick insights into what kids enjoy and how to design an experience that's simple, interactive, and visually appealing.
    </p>
    <p>
      These early findings helped shape the design direction of the game, making sure it was tailored for <strong>Android mobile devices</strong> and easy for kids to navigate and enjoy.
    </p>
  </div>
</section>



<section className="space-y-10 text-center">
  <h2 className="text-2xl font-bold text-gray-900">User research: pain points</h2>

  <div className="grid md:grid-cols-4 gap-8 text-sm text-gray-800">
    {/* Pain Point 1 */}
    <div className="space-y-4">
      <div className="w-12 h-12 rounded-full bg-gray-100 mx-auto flex items-center justify-center text-xl font-bold text-blue-900">
        1
      </div>
      <h3 className="font-semibold text-blue-700">Pain point</h3>
      <p>
        Division is a tough concept for kids to grasp, especially without
        strong visuals or interactive guidance to make it click.
      </p>
    </div>

    {/* Pain Point 2 */}
    <div className="space-y-4">
      <div className="w-12 h-12 rounded-full bg-gray-100 mx-auto flex items-center justify-center text-xl font-bold text-blue-900">
        2
      </div>
      <h3 className="font-semibold text-blue-700">Pain point</h3>
      <p>
        Too much on-screen text can overwhelm younger learners who are still
        developing their reading skills.
      </p>
    </div>

    {/* Pain Point 3 */}
    <div className="space-y-4">
      <div className="w-12 h-12 rounded-full bg-gray-100 mx-auto flex items-center justify-center text-xl font-bold text-blue-900">
        3
      </div>
      <h3 className="font-semibold text-blue-700">Pain point</h3>
      <p>
        Kids may lose interest quickly without rewards, animation, or progress
        tracking to keep them motivated.
      </p>
    </div>

    {/* Pain Point 4 */}
    <div className="space-y-4">
      <div className="w-12 h-12 rounded-full bg-gray-100 mx-auto flex items-center justify-center text-xl font-bold text-blue-900">
        4
      </div>
      <h3 className="font-semibold text-blue-700">Pain point</h3>
      <p>
        Complex or small interface elements can be hard for kids to tap and
        navigate on mobile devices.
      </p>
    </div>
  </div>
</section>

<section className="space-y-6">
  <h2 className="text-2xl font-bold text-gray-900">Affinity Diagram & Iterations</h2>
  <p className="text-gray-700">
    After conducting user interviews and gathering feedback, I used an affinity diagram to group key insights and identify recurring themes. Based on those insights, I explored possible design solutions like voice assistance, slow transitions, and gentle animations to enhance usability for younger kids.
  </p>

  <div className="grid md:grid-cols-2 gap-6">
    {/* Affinity Diagram */}
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-gray-800">Affinity Diagram</h3>
      <img
        src="/Affinity.jpg"
        alt="Affinity Diagram Example"
        className="rounded-lg shadow-md w-full"
      />
    </div>

    {/* Solution Iteration Image */}
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-gray-800">Design Iterations</h3>
      <img
        src="/Solutions.jpg" // Replace with your actual image path
        alt="Solution Iteration Highlights"
        className="rounded-lg shadow-md w-full"
      />
    </div>
  </div>
</section>



<section className=" text-black py-12 px-2">
  <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-8 items-center">
    
    {/* Left side title */}
    <div className="text-center md:text-left">
      <h2 className="text-2xl font-extrabold leading-tight">
        Starting<br />the design
      </h2>
    </div>

    {/* Divider + List */}
    <div className="flex md:border-l border-black pl-10">
      <ul className="space-y-4 text-lg font-medium">
        <li>• Paper wireframes</li>
        <li>• Low-fidelity prototype</li>
        <li>• High-fidelity prototype</li>
      </ul>
    </div>

  </div>
</section>

<section className="space-y-8">
  <div className="space-y-4 text-base text-muted-foreground">
    <h3 className="text-2xl font-extrabold tracking-tight text-gray-900">Paper wireframes</h3>
    <p>
      I began the design process by sketching multiple low-fidelity paper wireframes for the home screen.
      Since this is the first screen users interact with, I focused on experimenting with layout variations that would
      best support navigation, engagement, and accessibility for young children.
    </p>
    <p>
      Each version explored different placements of the play button, navigation elements, and visual storytelling cues (like fish and waves),
      all tailored to make the interaction feel intuitive and fun for early learners.
      This step helped validate basic information hierarchy before moving into digital wireframes.
    </p>
    <div className="flex justify-center">
      <img
        src="/Paper.jpg"
        width="500"
        alt="PaperSketches"
        className="detail-image rounded-lg shadow-md"
      />
    </div>
  </div>
</section>



<section className="space-y-8">
  <div className="space-y-4 text-base text-muted-foreground">
    <h3 className="text-2xl font-extrabold tracking-tight text-gray-900">Low-fidelity prototype</h3>
    <img
      src="/Low.jpg"
      width="1500"
      alt="LowFidelitySketches"
      className="detail-image rounded-lg shadow-md"
    />
  </div>
</section>

<section className="space-y-8">
  <div className="space-y-4 text-base text-muted-foreground">
    <h3 className="text-2xl font-extrabold tracking-tight text-gray-900">High-fidelity prototype</h3>
    <img
      src="/High.jpg"
      width="1500"
      alt="HighFidelityScreens"
      className="detail-image rounded-lg shadow-md"
    />
  </div>

  
</section>

<section className="space-y-8 text-center py-16">
  <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">🎮 Gameplay Experience</h2>

  <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left text-base text-gray-800">
    <div className="space-y-2">
      <h3 className="font-semibold text-blue-700">🌊 Animated Game Screens</h3>
      <p>
        Ocean-themed visuals come to life with playful bubble animations and expressive fish characters that react to each answer—cheering with happy fish for correct responses and showing sad fish for incorrect ones.
      </p>
    </div>
    <div className="space-y-2">
      <h3 className="font-semibold text-blue-700">🗣️ Voice Assistant</h3>
      <p>
        A gentle voice assistant was integrated into the game screen to read out each math question, supporting early readers and enhancing accessibility during gameplay.
      </p>
    </div>
    <div className="space-y-2">
      <h3 className="font-semibold text-blue-700">🎵 Calming Music & Sounds</h3>
      <p>
        Background music and ambient sound effects are carefully selected to maintain focus and relaxation, ensuring a calm, enjoyable environment during gameplay.
      </p>
    </div>
    <div className="space-y-2">
      <h3 className="font-semibold text-blue-700">👆 Tap-Friendly Interface</h3>
      <p>
        Designed specifically for small hands, all interactive elements are large, simple, and responsive—perfect for kids using mobile devices.
      </p>
    </div>
  </div>
</section>


<section className="grid md:grid-cols-2 gap-12 items-start">
  {/* Impact Section */}
  <div className="space-y-4">
    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
      <span className="text-gray-900 text-2xl">📋</span>
    </div>
    <h2 className="text-2xl font-bold text-gray-900">Impact:</h2>
    <p>
      Many children find it difficult to connect with traditional ways of learning math,
      especially when it comes to abstract concepts like division. To help solve this
      problem, I designed an interactive game that turns math into a fun, visual experience.
      One of the biggest challenges was designing for young learners aged 6 to 8, who are
      just starting to explore educational technology. It was important to keep the
      interface simple, intuitive, and engaging while ensuring the content stayed educational
      and effective.
    </p>
  </div>

  {/* What I Learned Section */}
  <div className="space-y-4">
    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
      <span className="text-gray-900 text-2xl">📖</span>
    </div>
    <h2 className="text-2xl font-bold text-gray-900">What I learned:</h2>
    <p>
      Working as a UX/UI designer on an educational game for kids taught me a lot about
      designing for young users. Some of the key takeaways include:
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li>Designing with empathy for early learners</li>
      <li>Keeping interfaces playful, clear, and intuitive</li>
      <li>Balancing fun with educational value</li>
      <li>Gathering and applying feedback from both peers and child-friendly testing</li>
    </ul>
  </div>
</section>
  
        </div>
        <section className="bg-sky-200 text-gray-900 py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Section: Text + Email + Resume */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-bold">Get in touch</h2>

          <div className="bg-white text-black px-4 py-2 rounded-md inline-block font-medium">
            saisuryakarthik.p@gmail.com
          </div>

          <div>
            <a
              href="/Sai_Surya_Karthik_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-800 hover:underline"
            >
              <span role="img" aria-label="chat">💬</span>
              <span className="underline">Sai_Surya_Karthik_Resume.pdf</span>
            </a>
          </div>
        </div>

        {/* Right Section: Animated Social Icons */}
        <motion.div
          className="flex items-center gap-6 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          {[
            { href: "https://github.com/P-sskarthik", icon: <Github size={22} /> },
            { href: "https://www.linkedin.com/in/sai-surya-karthik-p-a80ba5197/", icon: <Linkedin size={22} /> },
            { href: "https://behance.net/saisuryakarthik", icon: <Dribbble size={22} /> },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-800 p-3 rounded-full hover:bg-blue-100 transition-colors"
              whileHover={{ y: -3, scale: 1.1 }}
              aria-label={
                social.href.includes("behance")
                  ? "Behance Profile"
                  : social.href.includes("linkedin")
                  ? "LinkedIn Profile"
                  : "GitHub Profile"
              }
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>

      </Container>
      
    );
  }

  return <div className="p-10">Project not found.</div>;
};

export default ProjectDetail;
