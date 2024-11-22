import React from "react";
import { Link } from "react-router-dom";
import Speedometer from "./speedometer";
import FeaturesSection from "./FeaturesSection.jsx"; // Import the FeaturesSection component
import CircleWithArrows from "./CircleWithArrows.jsx";
import ImageUpload from "./ImageUpload.jsx";
import OrderTracking from "./OrderTracking.jsx";
import Leaderboard from "./leaderboardData.jsx";
import VideoResources from "./VideoResources.jsx";
import Chatbot from "./Chatbot.jsx";


const Homepage = () => {
  // Define your desired percentage values
  const percentage1 = 70;
  const percentage2 = 60;
  const percentage3 = 45;

  return (  
    <div class="overflow-x-hidden">
      {/* section1 */}
      <section className="relative w-screen h-screen flex items-center">
  {/* Video Background */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    style={{ objectPosition: 'right' }} // Ensures the right side of the video is focused
    autoPlay
    loop
    muted
  >
    <source src="../assets/bgvdo.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Content Area */}
  <div className="relative z-10 flex flex-col w-full px-5">
    {/* Heading Section */}
    <div className="flex flex-col justify-start w-full pl-8 pr-10 max-w-3xl">
      <h1 className="text-6xl font-bold text-white">
        Welcome to
      </h1>
      <h1 className="text-7xl font-playfair text-black" style={{ textShadow: '2px 2px 5px blue' }}>
        PathFinder
      </h1>
    </div>

    {/* Description Section Below the Heading */}
    <div className="flex flex-col w-full pl-10 mt-6 max-w-3xl">
      <h3 className="text-lg w-[50%] text-blue-900 font-serif flex flex-wrap font-bold ">
      PathFinder is an AI-powered platform offering personalized career counseling, tailored recommendations, and resource guidance for UG and master’s students, helping them make informed career decisions.
      </h3>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-4" >
        <Link to="/signup">
          <button className="border border-richblack-700 bg-blue-600  text-[12px] lg:text-[16px] px-2 py-1 lg:px-[12px] lg:py-[8px]  text-black font-semibold rounded-md hover:scale-95 transition-all duration-200" >
            Sign Up
          </button>
        </Link>

        <Link to="/login">
          <button className="border border-richblack-700 bg-richblack-700 text-[12px] lg:text-[16px] px-2 py-1 lg:px-[12px] lg:py-[8px] text-richblack-5 font-semibold rounded-md hover:scale-95 transition-all duration-200">
            Log In
          </button>
        </Link>
      </div>
    </div>
  </div>
</section>
 {/* section2 */}
 <section className="py-12 flex justify-center items-center">
        <div className="flex space-x-2 flex items-center justify-center ">
          {/* Heading Circle */}
          <div className="flex justify-center items-center w-50 h-40 p-3 bg-blue-700 text-white rounded-full shadow-lg">
            <p className="text-center text-3xl font-bold px-4">What We Do</p>
          </div>

          {/* Description Circle */}
          <div className="flex flex-wrap justify-center items-center w-[70%] h-[40%] text-blue-800 bg-blue-200 rounded-full shadow-lg border border-blue-300 p-6">
            <p className="text-lg text-center text-black ">
            Virtual Career Counseling is a remote guidance service that helps individuals explore career options, set goals, and develop skills to achieve them. It uses online platforms for consultations, assessments, and personalized advice, making career planning accessible and flexible with recommendation of suitable courses for your carrier advancement.
            </p>
          </div>
        </div>
      </section>
<section className="container mx-auto p-6">
        <Chatbot />
</section>

      <VideoResources/>
      <Leaderboard/>
      
      
      
     

      {/* section3 */}
      <section className="py-10 bg-blue-100">
        <p className="text-center text-2xl font-bold mb-10 text-black">
          Facts and Statistics
        </p>
        <div className="flex justify-around gap-8">
          {/* Sub-Section 1 */}
          <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 w-[300px] border border-blue-300">
            <Speedometer percentage={percentage1} />
            <p className="mt-4 text-center text-blue-700">
            70% of Indian college students are unsure of the careers they wish to pursue
            <br></br>
            (Source: The Hindu)
            </p>
          </div>
          {/* Sub-Section 2 */}
          <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 w-[300px] border border-blue-300">
            <Speedometer percentage={percentage2} />
            <p className="mt-4 text-center text-blue-700">
            60% of professionals consider career change due to lack of guidance 
            <br></br>(Source: IMPRI- Impact and Policy Research Institute)

            </p>
          </div>
          {/* Sub-Section 3 */}
          <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 w-[300px] border border-blue-300">
            <Speedometer percentage={percentage3} />
            <p className="mt-4 text-center text-blue-700">
            45% of graduates feel unprepared for the workforce  <br></br>(Source: AICTE)
            </p>
          </div>
        </div>
      </section>

      {/* section4 */}
      {/* <section>
        <FeaturesSection />
      </section> */}

      {/* section5 */}
      <section >
        <p class="text-center font-poppins text-[40px] text-blue-900 pt-5 ">
          Stay Ahead with PathFinder
        </p>
        <CircleWithArrows />
      </section>

      {/* section6 */}
      <section>
        <footer className="bg-blue-900 text-white py-4 w-full text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} PathFinder. All rights reserved.
          </p>
        </footer>
      </section>
    </div>
  );
};

export default Homepage;