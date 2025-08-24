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
              <p>As part of my Google UX Design course, I created a mobile booking app for a restaurant. The app went through a full design cycle from research to hi-fi prototypes.</p>
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

  <section className="text-center px-4 max-w-3xl mx-auto space-y-4">
  <p className="text-gray-700 text-lg">
    I observed varying needs between users who face challenges with foreign cuisines and those
    frustrated by booking limitations. Personas helped us represent these distinct user groups and
    keep their goals in mind throughout the design process.
  </p>
</section>

</section>
  <h2 className="text-3xl font-bold text-gray-800">Personas</h2>
<section className="grid md:grid-cols-2 gap-12 items-center">
 <div className="w-full">
    <img
      src="/Design6.jpg" 
      alt="Persona Mahesh"
      className="rounded-lg  pt-6 shadow-md w-full max-w-xl "
    />
  </div>
  <div className="space-y-6">
   <div className="w-full">
  
    <img
      src="/Design7.jpg" 
      alt="Persona Emily"
      className="rounded-lg  pt-6 shadow-md w-full max-w-xl "
    />
  </div>
  </div>
</section>
<section className="text-center px-4 max-w-3xl mx-auto space-y-4">
  <p className="text-gray-700 text-lg">
    "After identifying core personas like Mahesh and Emily, I translated their key pain points into user stories. These concise narratives helped guide design decisions by focusing on what users want to accomplish and why."
  </p>
</section>

<section className="space-y-16">

  {/* Mahesh's Journey Map */}
  <div className="space-y-10">
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-800">User journey map</h2>
        <p className="text-gray-600 text-lg">
          Tracing Mahesh’s user journey helps me understand what to incorporate in the prototype.
        </p>
      </div>

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
          <tr>
            <td className="p-3 border font-medium gap-2">🗺️ Journey Step</td>
            <td className="p-3 border">Search up the restaurant’s name on Google</td>
            <td className="p-3 border">Check the menu and inspect food offerings</td>
            <td className="p-3 border">Download app, register, and fill in booking details</td>
          </tr>
          <tr>
            <td className="p-3 border font-medium gap-2">👨‍💻 Task List</td>
            <td className="p-3 border">A. Open browser<br />B. Type in Google.com<br />C. Search restaurant name</td>
            <td className="p-3 border">A. Browse the website<br />B. Look what is offered<br />C. Check the menu</td>
            <td className="p-3 border">A. Download the app<br />B. Register<br />C. Fill-in date, time, and seat</td>
          </tr>
          <tr>
            <td className="p-3 border font-medium gap-2">🎭 Feeling</td>
            <td className="p-3 border">Curious</td>
            <td className="p-3 border">Surprised with what’s in store</td>
            <td className="p-3 border">Excitement</td>
          </tr>
          <tr className="bg-blue-50">
            <td className="p-3 border font-medium gap-2">🏗️ Improvement Opportunities</td>
            <td className="p-3 border">Should be on top of Google search.</td>
            <td className="p-3 border">• Website should be simple yet engaging.<br />• Pictures should be enticing.</td>
            <td className="p-3 border">Booking confirmation should contain directions to the restaurant.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  {/* Emily's Journey Map */}
  <div className="space-y-10">
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <div className="space-y-4">
        
        <p className="text-gray-600 text-lg">
          Mapping Emily’s journey helps design for users who care about ambiance and visual clarity.
        </p>
      </div>

      <div className="bg-purple-50 rounded-lg p-4 border">
        <h3 className="font-semibold">Persona Name: Emily</h3>
        <p className="text-sm text-gray-700">
          Goal: Discover inspiring places with visually clear menus, especially for Japanese cuisine.
        </p>
        <div className="mt-2 text-sm text-gray-600 flex items-center gap-2">
          <span>🎯</span> <span>Journey goal</span>
        </div>
      </div>
    </div>

    <div className="overflow-x-auto">
      <table className="w-full table-auto border border-gray-300 text-left text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border"> </th>
            <th className="p-3 border">Discover a place</th>
            <th className="p-3 border">Preview Menu & Vibe</th>
            <th className="p-3 border">Decide to Visit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3 border font-medium gap-2">🗺️ Journey Step</td>
            <td className="p-3 border">Find new cafés or Japanese restaurants to try</td>
            <td className="p-3 border">Check photos of ambiance and Japanese dishes</td>
            <td className="p-3 border">Choose whether to visit or try somewhere else</td>
          </tr>
          <tr>
            <td className="p-3 border font-medium gap-2">👩‍🎨 Task List</td>
            <td className="p-3 border">A. Browse Instagram<br />B. Ask friends<br />C. Search local spots</td>
            <td className="p-3 border">A. Look for ambiance photos<br />B. Check if Japanese food is visually appealing<br />C. Read visual menus if available</td>
            <td className="p-3 border">A. Decide based on visuals<br />B. Look up directions<br />C. Prepare to visit</td>
          </tr>
          <tr>
            <td className="p-3 border font-medium gap-2">🎭 Feeling</td>
            <td className="p-3 border">Hopeful</td>
            <td className="p-3 border">Inspired and curious</td>
            <td className="p-3 border">Satisfied or disappointed</td>
          </tr>
          <tr className="bg-purple-50">
            <td className="p-3 border font-medium gap-2">🏗️ Improvement Opportunities</td>
            <td className="p-3 border">Local discovery should be more visual and personalized.</td>
            <td className="p-3 border">• Menus should show actual photos<br />• Ambiance previews help her decide</td>
            <td className="p-3 border">Allow easy saving or bookmarking for return visits.</td>
          </tr>
        </tbody>
      </table>
    </div>
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
       <div className="w-full pt-20">
  <section className="w-full">
    <img 
      src="/Frame.png" 
      alt="Fin-Tastic Division Project" 
      className="w-full h-auto object-cover"
    />
  </section>
</div>

<div className="max-w-7xl mx-auto px-2  space-y-16 pt-20">
          <section className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-extrabold mb-2">Project Overview</h2>
              <p>“Fin-Tastic Divisions is a captivating and educational game developed by a dynamic 12-member team, tailored specifically for first and second graders. Set in a vibrant, ocean-themed world, the game transforms the abstract concept of division into a fun, interactive, and visual experience designed to engage early learners. I contributed as the UX/UI Designer, focusing on creating intuitive interfaces and playful user flows that support young children's learning and cognitive abilities. The game was exclusively designed for Android device models.”</p>
            </div>
            <div>
              <h2 className="text-xl font-extrabold mb-2">My Role & Responsibilities</h2>
              <p>UX/UI Designer — I led the full design process from research and wireframes to high-fidelity prototypes and user flows. I created tap-friendly interfaces, interactive assets, and engaging visuals tailored for children aged 6–8. I also contributed character designs, backgrounds, and basic animations using Unity, Adobe Firefly, and Sketchbook.</p>
            </div>
          </section>


          <section className="mt-12">
  <h2 className="text-xl font-extrabold mb-2">Problem</h2>
  
    <p>Young learners in grades 1–2 often struggle to grasp division because it is an abstract concept that requires strong visualization skills. Traditional classroom methods and worksheets are text-heavy, leaving many children disengaged and unmotivated to practice.</p>
    <br></br>

<p>Existing math apps intended for children were often cluttered, unintuitive, and not designed with tap-friendly interfaces that suit smaller hands and developing motor skills. Many apps relied heavily on text, without considering accessibility features such as voice assistance.

, Another challenge was the lack of attractive animations and audio feedback to keep learners engaged. Without calming background sounds or rewarding cues for correct answers, children quickly lost interest and abandoned the activity.</p>

  
</section>


<section className="mt-12">
  <h2 className="text-xl font-extrabold mb-2">Goal</h2>
  <p>
  To design a colorful, ocean-themed game app that transforms division into something children genuinely enjoy practicing. Instead of worksheets or text-heavy lessons, the game turns problems into quick, tap-friendly challenges guided by playful fish characters and treasure-like rewards that spark excitement.
  </p>
  <br></br>
  <p>
    The game uses vibrant animations and clear visual feedback so children instantly know when they’re on the right track.
A built-in voice assistant reads each question aloud and guides them through correct and incorrect answers.
Cheerful sound effects and calming background music make learning feel like play, not study.
Large, tap-friendly buttons ensure smooth interaction for small hands.
Together, these elements keep kids engaged, smiling, and eager to practice division again and again.
  </p>
</section>

  <section className="w-full px-6 py-12">
  <div className="flex justify-center">
    <img 
      src="/Frame 5.png" 
      alt="Fin-Tastic Division Project" 
      className="w-full h-auto object-cover rounded-xl"
    />
  </div>
</section>







    

{/* User Research Section */}
<section className="space-y-8">
  <div className="space-y-4 text-base text-muted-foreground">
    <h3 className="text-2xl font-extrabold tracking-tight text-gray-900">User Research</h3>

    <p>
      To better understand how to create an engaging and educational experience for children, I combined peer collaboration with real-world observations. I began by discussing ideas with my teammates to explore different directions, then moved into direct user research with my target audience.
    </p>

    <p>
      I conducted informal interviews with my nephew, neighborhood kids, and a few other children aged 6–8. I asked them about the games they enjoyed, what made them want to keep playing, and what frustrated them. I also observed their behavior while interacting with other educational games and mobile apps.
    </p>

    <p>
      From these sessions, I noticed that <strong>small animations</strong>, <strong>gentle background music</strong>, and <strong>soft, eye-friendly color palettes</strong> helped children stay engaged for longer periods. Overly bright visuals, rapid transitions, or loud sound effects often caused distraction or disinterest.
    </p>

    <p>
      My design goal became clear: create an environment that keeps kids engaged on-screen while learning division in a way that feels fun, calm, and rewarding. I prioritized simple interaction patterns, rewarding animations, and accessible visual design tailored for children.
    </p>

    <p>
      Since I was working with a tight timeline, I used a <strong>qualitative research</strong> approach to quickly gather insights that directly informed both the gameplay and UI design. These findings shaped the decision to design specifically for <strong>Android mobile devices</strong> with large, tap-friendly elements.
    </p>
  </div>
</section>

{/* Pain Points Section */}
<section className="space-y-10 text-center">
  <h2 className="text-2xl font-bold text-gray-900">User Research: Pain Points</h2>
  <div className="grid md:grid-cols-4 gap-8 text-sm text-gray-800">
    <div className="space-y-4">
      <div className="w-12 h-12 rounded-full bg-gray-100 mx-auto flex items-center justify-center text-xl font-bold text-blue-900">1</div>
      <h3 className="font-semibold text-red-700">Concept Difficulty</h3>
      <p>Division is a tough concept for kids to grasp, especially without strong visuals or interactive guidance to make it click.</p>
    </div>
    <div className="space-y-4">
      <div className="w-12 h-12 rounded-full bg-gray-100 mx-auto flex items-center justify-center text-xl font-bold text-blue-900">2</div>
      <h3 className="font-semibold text-red-700">Text Overload</h3>
      <p>Too much on-screen text can overwhelm younger learners who are still developing their reading skills.</p>
    </div>
    <div className="space-y-4">
      <div className="w-12 h-12 rounded-full bg-gray-100 mx-auto flex items-center justify-center text-xl font-bold text-blue-900">3</div>
      <h3 className="font-semibold text-red-700">Low Engagement</h3>
      <p>Kids may lose interest quickly without rewards, animation, or progress tracking to keep them motivated.</p>
    </div>
    <div className="space-y-4">
      <div className="w-12 h-12 rounded-full bg-gray-100 mx-auto flex items-center justify-center text-xl font-bold text-blue-900">4</div>
      <h3 className="font-semibold text-red-700">Interface Complexity</h3>
      <p>Complex or small interface elements can be hard for kids to tap and navigate on mobile devices.</p>
    </div>
  </div>
</section>
{/* Affinity Diagram & Iterations */}
<section id="affinity-iterations" className="space-y-10">
  {/* Header & Rationale */}
  <div className="space-y-3">
    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
      Affinity Diagram & Iterations
    </h2>
    <p className="text-gray-700">
      After interviews and observations, I clustered notes into an affinity diagram to surface patterns
      around engagement, readability, feedback, and input. This synthesis guided fast, targeted changes.
    </p>
    <div className="grid gap-3 sm:grid-cols-3">
      <p className="text-gray-800"><span className="font-semibold">Why:</span> Group related findings and identify the most impactful design priorities.</p>
      <p className="text-gray-800"><span className="font-semibold">What I learned:</span> Clear visual cues, audio support for early readers, and rewarding feedback are essential.</p>
      <p className="text-gray-800"><span className="font-semibold">What I changed:</span> Voice assistant, gentle animations, slower transitions, ocean palette for calm focus.</p>
    </div>
  </div>

  {/* Theme chips */}
  <ul className="flex flex-wrap gap-2">
    {[
      "Minimal Text",
      "Voice Assistance",
      "Tap-Friendly Targets",
      "Positive Feedback",
      "Calming Audio",
      "High Contrast",
      "One Action / Screen",
      "Smooth Transitions"
    ].map((t) => (
      <li
        key={t}
        className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-800"
      >
        {t}
      </li>
    ))}
  </ul>

  {/* Single combined infographic (Problems → Solutions) */}
  <figure className="space-y-2">
    <h3 className="text-lg font-semibold text-gray-900">Problems → Solutions (Infographic)</h3>
    <div className="flex justify-center overflow-hidden rounded-xl">
      <img
        src="/Affinity.jpg"  /* <- save your generated image here */
        alt="Two-column infographic mapping problems to solutions based on affinity themes and iterations"
        className="w-100 h-auto object-cover t"
        loading="lazy"
      />
    </div>
    <figcaption className="text-sm text-center text-gray-600">
      Synthesized problems and the corresponding design iterations that addressed them.
    </figcaption>
  </figure>

</section>


{/* Personas – Fin-Tastic Division */}
<section id="personas" className="space-y-10">
  {/* Intro */}
  <div className="space-y-4">
    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Personas</h2>
    <p className="text-gray-700">
      In preparation for wireframing, I went where our learners and caretakers are most active—parent and teacher forums,
      kids’ learning communities, app-store reviews, and early play sessions with children aged 6–8. By engaging directly,
      I built an empathetic picture of their hopes, challenges, and daily usage patterns.
    </p>
    <p className="text-gray-700">
      This research informed two primary personas for <strong>Fin-Tastic Division</strong>, which then guided task flows and user journeys.
    </p>
  </div>

  {/* Persona cards */}
  <div className="grid gap-2 md:grid-cols-2">
    {/* Phoebe */}
   
  <div className="relative w-full h-[420px]">
    <img
      src="/Phoebe.png"
      alt="Persona: Phoebe, 2nd grade learner"
      className="absolute inset-0 w-full h-full object-contain"
    />
  </div>

   <div className="relative w-full h-[420px]">
    <img
      src="/Ajay.png"
      alt="Persona: Phoebe, 2nd grade learner"
      className="absolute inset-0 w-full h-full object-contain"
    />
  </div>
  </div>

  {/* Closing sentence for case-study narrative */}
  <p className="text-gray-700">
    These personas shaped our task flows (Question → Action → Feedback → Reward) and informed wireframes that prioritize
    <strong> minimal text, voice support, and tap-first interaction</strong> for early learners.
  </p>
</section>


{/* Starting the Design Section */}
<section className=" text-black py-12 px-2">
  <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-8 items-center">
    <div className="text-center md:text-left">
      <h2 className="text-2xl font-extrabold leading-tight">
        Starting<br />the design
      </h2>
    </div>
    <div className="flex md:border-l border-black pl-10">
      <ul className="space-y-4 text-lg font-medium">
        <li>• Paper wireframes</li>
        <li>• Low-fidelity prototype</li>
        <li>• High-fidelity prototype</li>
      </ul>
    </div>
  </div>
</section>

{/* Paper Wireframes */}
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

{/* Low Fidelity Prototype */}
<section className="space-y-8">
  <div className="space-y-4 text-base text-muted-foreground">
    <h3 className="text-2xl font-extrabold tracking-tight text-gray-900">Low-fidelity prototype</h3>
    <p>
      I turned the paper sketches into a clickable low-fidelity prototype in Figma.
    </p>
    <p><strong>Why:</strong> Validate navigation flow and hierarchy with early testing.</p>
    <p><strong>What I learned:</strong> Tap targets needed to be even larger; kids wanted visual feedback.</p>
    <p><strong>What I changed:</strong> Increased tap areas, added placeholder animations, simplified flow.</p>
    <img
      src="/Low.jpg"
      width="1500"
      alt="LowFidelitySketches"
      className="detail-image rounded-lg shadow-md"
    />
  </div>
</section>

{/* High Fidelity Prototype */}
<section className="space-y-8">
  <div className="space-y-4 text-base text-muted-foreground">
    <h3 className="text-2xl font-extrabold tracking-tight text-gray-900">High-fidelity prototype</h3>
    <p>
      I refined the low-fidelity flow into high-fidelity screens in Figma with final visuals, characters, and animations.
    </p>
    <p><strong>Why:</strong> Deliver a polished, playful, and calm final game environment.</p>
    <p><strong>What I learned:</strong> Soft gradients, gentle animations, and character reactions improved focus.</p>
    <p><strong>What I changed:</strong> Adjusted animation speed, improved contrast, refined character expressions.</p>
    <img
      src="/High.jpg"
      width="1500"
      alt="HighFidelityScreens"
      className="detail-image rounded-lg shadow-md"
    />
  </div>
</section>

{/* Gameplay Experience */}
<section className="space-y-8 text-center py-16">
  <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">🎮 Gameplay Experience</h2>
  <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left text-base text-gray-800">
    <div className="space-y-2">
      <h3 className="font-semibold text-blue-700">🌊 Animated Game Screens</h3>
      <p> Ocean-themed visuals come to life with playful bubble animations and expressive fish characters that react to each answer—cheering with happy fish for correct responses and showing sad fish for incorrect ones.</p>
    </div>
    <div className="space-y-2">
      <h3 className="font-semibold text-blue-700">🗣️ Voice Assistant</h3>
      <p> A gentle voice assistant was integrated into the game screen to read out each math question, supporting early readers and enhancing accessibility during gameplay.</p>
    </div>
    <div className="space-y-2">
      <h3 className="font-semibold text-blue-700">🎵 Calming Music & Sounds</h3>
      <p>Background music and ambient sound effects are carefully selected to maintain focus and relaxation, ensuring a calm, enjoyable environment during gameplay.</p>
    </div>
    <div className="space-y-2">
      <h3 className="font-semibold text-blue-700">👆 Tap-Friendly Interface</h3>
      <p>Designed specifically for small hands, all interactive elements are large, simple, and responsive—perfect for kids using mobile devices.</p>
    </div>
  </div>
</section>

{/* Impact & Learnings */}
<section className="grid md:grid-cols-2 gap-12 items-start">
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
  <div className="space-y-4">
    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
      <span className="text-gray-900 text-2xl">📖</span>
    </div>
    <h2 className="text-2xl font-bold text-gray-900">What I learned:</h2>
    <ul className="list-disc list-inside space-y-1">
      <li>Designing with empathy for early learners</li>
      <li>Balancing fun with educational value</li>
      <li>Using visual and audio cues to sustain engagement</li>
      <li>Applying feedback from both peers and child-friendly testing</li>
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
