import React, { useState } from 'react';
import Navbar from "../Components/Navbar";
import Img6 from "../Assets/6.jpeg";
import Img7 from "../Assets/7.jpeg";
import Img16 from "../Assets/logo.png";
import { useInView } from 'react-intersection-observer';
import CountUp from "react-countup";
import {FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Carousel = () => {
  const slides = [
    {
      img: Img16,
      name: 'Akash Anand',
      title: 'Founder, Clueso',
      content: (
        <>
          <p>
            "Nirmaan has been an invaluable partner in our journey from concept to a 
            thriving startup. Their comprehensive support, including technical assistance, 
            financial aid, and access to a network of experienced mentors, has been instrumental 
            in our success. The workshops provided us with essential skills, and the state-of-the-art 
            infrastructure offered an ideal environment for innovation and growth. Nirmaan's dedication 
            to nurturing young entrepreneurs is truly commendable, and we are grateful for their unwavering 
            support."
          </p>
          <p>
            "Thanks to Nirmaan, Clueso has transformed from a mere idea into a successful business."
          </p>
        </>
      ),
    },
    {
      img: Img16,
      name: 'Akash Anand',
      title: 'Founder, Clueso',
      content: (
        <>
          <p>
            "Nirmaan has been an invaluable partner in our journey from concept to a 
            thriving startup. Their comprehensive support, including technical assistance, 
            financial aid, and access to a network of experienced mentors, has been instrumental 
            in our success. The workshops provided us with essential skills, and the state-of-the-art 
            infrastructure offered an ideal environment for innovation and growth. Nirmaan's dedication 
            to nurturing young entrepreneurs is truly commendable, and we are grateful for their unwavering 
            support."
          </p>
          <p>
            "Thanks to Nirmaan, Clueso has transformed from a mere idea into a successful business."
          </p>
        </>
      ),
    },
    {
      img: Img16,
      name: 'Akash Anand',
      title: 'Founder, Clueso',
      content: (
        <>
          <p>
            "Nirmaan has been an invaluable partner in our journey from concept to a 
            thriving startup. Their comprehensive support, including technical assistance, 
            financial aid, and access to a network of experienced mentors, has been instrumental 
            in our success. The workshops provided us with essential skills, and the state-of-the-art 
            infrastructure offered an ideal environment for innovation and growth. Nirmaan's dedication 
            to nurturing young entrepreneurs is truly commendable, and we are grateful for their unwavering 
            support."
          </p>
          <p>
            "Thanks to Nirmaan, Clueso has transformed from a mere idea into a successful business."
          </p>
        </>
      ),
    },
    {
      img: Img16,
      name: 'Akash Anand',
      title: 'Founder, Clueso',
      content: (
        <>
          <p>
            "Nirmaan has been an invaluable partner in our journey from concept to a 
            thriving startup. Their  for innovation and growth. Nirmaan's dedication 
            to nurturing young entrepreneurs is truly commendable, and we are grateful for their unwavering 
            support."
          </p>
          <p>
            "Thanks to Nirmaan, Clueso has transformed from a mere idea into a successful business."
          </p>
        </>
      ),
    },
    // Additional slides can be added here.
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-8">
      <div className="grid grid-cols-2 gap-4">
        {/* Left Column: Slide Content */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0 p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-2 mt-1">
                    <img src={slide.img} className="h-7" alt={slide.name} />
                  </div>
                  <div>
                    <span className="font-semibold">{slide.name}</span>
                    <div className="text-xs">{slide.title}</div>
                  </div>
                </div>
                <div className="text-sm mt-2 text-justify">{slide.content}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Arrows and Dots */}
        <div className="font- ">
              <div className="text-left ">
                <h1 className="text-2xl font-semibold font-dmsans mt-6 ml-8">
                  Inspiring <span className="text-green-600">stories</span> from
                  the members
                  <br /> of the past
                </h1>
                <p className="text-sm ml-8 mt-4">
                  Nirmaan has been a valuable partner in our journey from
                  concept to a thriving startup.
                  <br /> Their comprehensive support...
                </p>
              </div>
              <div className="flex items-center space-x-4 ml-8 mt-4">
  <button onClick={prevSlide} className="flex items-center">
    <div className="border rounded-lg p-2 bg-green-600">
      <FaChevronLeft />
    </div>
  </button>
  <button onClick={nextSlide} className="flex items-center">
    <div className="border rounded-lg p-2 bg-green-600">
      <FaChevronRight />
    </div>
  </button>
</div>

                
            </div>
        </div>
        <div className="flex justify-center mt-4 space-x-2 mr-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
      </div>
  );
};

const StatCounter = ({ stat }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="p-6 rounded-lg shadow-lg text-center">
      <div className="text-3xl font-semibold text-white">
        <div className="bg-green-700 rounded-lg" ref={ref}>
          {inView && (
            <CountUp
              end={stat.value}
              suffix={
                stat.label === "Total Valuation" ||
                stat.label === "Revenue Generated By Startups"
                  ? " Cr+"
                  : "+"
              }
              duration={2}
            />
          )}
        </div>
      </div>
      <div className="mt-2 text-sm text-gray-900 font-dmsans">
        {stat.label}
      </div>
    </div>
  );
};

const stats = [
  { id: 1, label: "Total Valuation", value: 1000 },
  { id: 2, label: "Revenue Generated By Startups", value: 108 },
  { id: 3, label: "Sectors In Focus", value: 9 },
  { id: 4, label: "Active Teams", value: 89 },
  { id: 5, label: "Women Entrepreneurs", value: 25 },
  { id: 6, label: "Total Number of Teams Travel", value: 148 },
  { id: 7, label: "Registered Startups", value: 24 },
  { id: 8, label: "Sustainability Focused Startups", value: 40 },
];

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="relative overflow-hidden whitespace-nowrap bg-red-300 mt-4">
        <div className="flex animate-marquee font-sans font-semibold">
          <span className="mx-6">NIRMAAN DEMO DAY - 28/09/2024</span>
          {/* Additional messages can be added here */}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-0">
        <div className="col-span-3 p-6 max-w-xl mx-auto bg-white rounded-xl bg-gray-50 mt-16">
          <img
            src={Img7}
            className="h-21 border border-green-800 rounded-lg border-b-16 content"
            alt="Image 1"
          />
        </div>
        <div className="col-span-6">
          <div className="p-6 max-w-xl mx-auto bg-white rounded-xl space-y-4 bg-gray-50 mt-16">
            <div className="text-center">
              <h1 className="text-2xl font-bold font-lora">
                <span className="text-green-600">NIRMAAN</span> THE PRE-INCUBATOR <br /> IIT MADRAS
              </h1>
              <p className="mt-4 text-gray-800 font-dmsans text-justify">
                Nirmaan at IIT Madras (IITM), is the first of its kind dedicated pre-incubator on a college campus in the country. Nirmaan is committed to advancing innovation and entrepreneurship by providing comprehensive technical guidance and business mentorship to students. Our support focuses on enhancing the robustness of their business ideas and ensuring their economic feasibility. Through mentorship and strategic insights, we help students transform their concepts into successful, sustainable ventures.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-3 p-6 max-w-xl mx-auto bg-white rounded-xl space-y-4 bg-gray-50 mt-16">
          <img
            src={Img6}
            className="w-23 h-23 border border-green-800 rounded-lg border-b-16"
            alt="Image 2"
          />
        </div>
      </div>

      {/* New Carousel Component */}
      <Carousel />

      <div className="grid grid-cols-4 gap-4 mt-16">
        {stats.map((stat) => (
          <StatCounter key={stat.id} stat={stat} />
        ))}
      </div>
    </div>
  );
};

export default Home;











// Home images with content 

<div className="grid grid-cols-12 gap-0">
        <motion.div
          className="col-span-3 p-6 max-w-xl mx-auto bg-white rounded-xl bg-gray-50 mt-16"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={Img7}
            className="h-21 border border-green-800 rounded-lg border-b-16"
            alt="Image 1"
            whileHover={{ scale: 1.1 }}
          />
        </motion.div>

        <motion.div
          className="col-span-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-6 max-w-xl mx-auto bg-white rounded-xl space-y-4 bg-gray-50 mt-16">
            <div className="text-center">
              <h1 className="text-2xl font-bold font-lora">
                <span className="text-green-600">NIRMAAN</span> THE PRE-
                INCUBATOR <br />
                IIT MADRAS
              </h1>
              <p className="mt-4 text-gray-800 font-dmsans text-justify">
                Nirmaan at IIT Madras (IITM), is the first of its kind dedicated
                pre-incubator on a college campus in the country. Nirmaan is
                committed to advancing innovation and entrepreneurship by
                providing comprehensive technical guidance and business
                mentorship to students. Our support focuses on enhancing the
                robustness of their business ideas and ensuring their economic
                feasibility. Through mentorship and strategic insights, we help
                students transform their concepts into successful, sustainable
                ventures.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="col-span-3 p-6 max-w-xl mx-auto bg-white rounded-xl space-y-4 bg-gray-50 mt-16"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={Img6}
            className="w-23 h-23 border border-green-800 rounded-lg border-b-16"
            whileHover={{ scale: 1.1 }}
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-5 gap-3">
        <motion.div
          className="p-6 max-w-xl mx-auto bg-white rounded-xl space-y-4 bg-gray-50 mt-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.img
            src={Img3}
            className="w-23 h-23 border border-green-800 rounded-lg border-b-16"
            whileHover={{ scale: 1.1 }}
          />
        </motion.div>

        <motion.div
          className="p-6 max-w-xl mx-auto bg-white rounded-xl space-y-4 bg-gray-50 mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.img
            src={Img4}
            className="w-23 h-23 border border-green-800 rounded-lg border-b-16"
            whileHover={{ scale: 1.1 }}
          />
        </motion.div>

        <motion.div
          className="p-6 max-w-xl mx-auto bg-white rounded-xl space-y-4 bg-gray-50 mt-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.img
            src={Img5}
            className="w-23 h-23 border border-green-800 rounded-lg"
            whileHover={{ scale: 1.1 }}
          />
        </motion.div>

        <motion.div
          className="p-6 max-w-xl mx-auto bg-white rounded-xl space-y-4 bg-gray-50 mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.img
            src={Img2}
            className="w-23 h-23 border border-green-800 rounded-lg border-b-16"
            whileHover={{ scale: 1.1 }}
          />
        </motion.div>

        <motion.div
          className="p-6 max-w-xl mx-auto bg-white rounded-xl space-y-4 bg-gray-50 mt-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.img
            src={Img1}
            className="w-23 h-23 border border-green-800 rounded-lg border-b-16"
            whileHover={{ scale: 1.1 }}
          />
        </motion.div>
      </div>



//What we need 




<div className="grid grid-cols-3 gap-7 mt-16">
          <div className="relative">
            <div className="absolute -top-8 left-20 mb-6 px-2 font-semibold font-dmsans flex items-center">
              <div className="mr-2">
                {" "}
                <img src={Img10} className="h-7 " />
              </div>
              <span>Workspace</span>
            </div>

            <div className="text-sm ml-6 font-dmsans text-justify">
              Nirmaan provides a workplace to interact, collaborate, and
              innovate; at the Sudha & Shankar Innovation Hub.
            </div>
          </div>
          <div className="relative">
            <span className="absolute -top-11 left-32 bg-white px-2"></span>
            <div className="absolute -top-8 left-20 mb-6 px-2 font-semibold font-dmsans flex items-center">
              <div className="mr-2">
                {" "}
                <img src={Img11} className="h-7 " />
              </div>

              <span>Tools & Resources</span>
            </div>
            <div className="text-sm  font-dmsans text-justify mb-8">
              At Nirmaan, you will find an extensive array of resources within
              our workspace, featuring advanced machining tools, sophisticated
              characterization equipment, and top-tier computing facilities.
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-8 left-20 mb-6 px-2 font-semibold font-dmsans flex items-center">
              <div className="mr-2">
                {" "}
                <img src={Img12} className="h-7 " />
              </div>
              <span>Mentorship</span>
            </div>
            <div className="text-sm mr-6 font-dmsans text-justify ">
              Sector-specific mentors provide tailored guidance, helping student
              entrepreneurs navigate problem identification, validate their
              ideas, and uncover customer insights.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-16">
          <div className="relative">
            <div className="flex items-center justify-center ">
              <span className="absolute absolute -top-12 center bg-white px-2 text-3xl font-bold font-dmsans">
                WHAT WE OFFER
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-7 mt-16">
          <div className="relative">
            <div className="absolute -top-8 left-20 mb-6 px-2 font-semibold font-dmsans flex items-center">
              <div className="mr-2">
                {" "}
                <img src={Img13} className="h-7 " />
              </div>
              <span>Workshops</span>
            </div>

            <div className="text-sm ml-6 font-dmsans text-justify">
              Seasoned professionals and industry experts lead immersive
              workshops covering vital startup topics such as customer
              discovery, lean startup principles, business model canvas,
              pitching techniques, and design thinking. These sessions are
              designed to equip student teams with the insights and skills
              needed to make impactful decisions and drive their start-ups
              forward.
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-8 left-20 mb-6 px-2 font-semibold font-dmsans flex items-center">
              <div className="mr-2">
                {" "}
                <img src={Img14} className="h-7 " />
              </div>

              <span>Funding</span>
            </div>
            <div className="text-sm  font-dmsans text-justify ">
              Nirmaan student teams receive INR.2 lakhs during Pratham phase and
              INR.5 lakhs during Akshar phase to manage their expenses and to
              build their first MVP.
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-8 left-20 mb-6 px-2 font-semibold font-dmsans flex items-center">
              <div className="mr-2">
                {" "}
                <img src={Img15} className="h-7 " />
              </div>
              <span>Networking</span>
            </div>
            <div className="text-sm mr-6 font-dmsans text-justify ">
              Student teams have the opportunity to engage with a diverse array
              of industry experts and IITM alumni, allowing them to discuss and
              refine their startup ideas.
            </div>
          </div>
















// contact us 



<div className="p-6 rounded-xl  mt-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold font-dmsans text-green-600">
              CONTACT US
            </h1>
          </div>
          <div className="flex justify-center items-center min-h-screen">
            <div className=" p-6 mt-8  w-full max-w-2xl">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="FirstName"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="FirstName"
                    name="FirstName"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label
                    htmlFor="LastName"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="LastName"
                    name="LastName"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="emailAddress"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label
                    htmlFor="number"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Contact Number
                  </label>
                  <input
                    type="text"
                    id="number"
                    name="contact_number"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="Programname"
                  className="mt-4 block text-gray-700 font-semibold mb-2"
                >
                  Program Name
                </label>
                <input
                  type="text"
                  id="Programname"
                  name="program"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-semibold mb-4 mt-6"
                >
                  Query
                </label>
                <textarea
                  id="description"
                  name="aws_description"
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded resize-none"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button className="border rounded-lg p-2 bg-green-500 text-white">
                  Record your Interest
                </button>
              </div>
            </div>
          </div>




//What we offer new 

<div className="p-4">
      <div className="grid grid-cols-3 gap-5 mt-16">
  <div className="relative">
    <div
      className="absolute inset-0 bg-cover bg-center rounded-lg"
      style={{
        backgroundImage: `url(${Img22})`,
        height: 160,
        opacity: 0.7,
        zIndex: 0,
      }}
    />
    <div className="text-sm ml-2 font-dmsans text-white text-justify mt-4 relative z-10">
      <h2 className="font-bold ml-3 text-3xl">Workspace</h2>
      <div className="mt-8 p-4 mb-2">
        Nirmaan provides a workplace to interact, collaborate, and innovate at the Sudha & Shankar Innovation Hub.
      </div>
    </div>
  </div>

  <div className="relative">
    <div
      className="absolute inset-0 bg-cover bg-center rounded-lg"
      style={{
        backgroundImage: `url(${Img11})`,
        height: 160,
        opacity: 0.7,
        zIndex: 0,
      }}
    />
    <div className="text-sm ml-2 font-dmsans text-white text-justify mt-4 relative z-10">
      <h2 className="font-bold ml-3 text-3xl">Tools & Resources</h2>
      <div className=" p-4 mb-2">
      At Nirmaan, you will find an extensive array of resources within our workspace, 
      featuring advanced machining tools, sophisticated characterization equipment, 
      and top-tier computing facilities.
      </div>
    </div>
  </div>

  <div className="relative">
    <div
      className="absolute inset-0 bg-cover bg-center rounded-lg"
      style={{
        backgroundImage: `url(${Img12})`,
        height: 160,
        opacity: 0.7,
        zIndex: 0,
      }}
    />
    <div className="text-sm ml-2 font-dmsans text-white text-justify mt-4 relative z-10 ">
      <h2 className="font-bold text-3xl ml-3">Mentorship</h2>
      <div className=" p-4">
      Sector-specific mentors provide tailored guidance, helping student entrepreneurs  
      navigate problem identification, validate their ideas, and uncover customer insights.
      </div>
    </div>
  </div>
</div>


        <div className="grid grid-cols-1 gap-8 mt-32">
          <div className="relative">
            <div className="flex items-center justify-center ">
              <span className="absolute absolute -top-12 center bg-white px-2 text-3xl font-bold font-roboto">
                WHAT WE OFFER
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-7 mt-16">
        <div className="relative">
    <div
      className="absolute inset-0 bg-cover bg-center rounded-lg"
      style={{
        backgroundImage: `url(${Img13})`,
        height: 160,
        opacity: 0.7,
        zIndex: 0,
      }}
    />
    <div className="text-sm ml-2 font-dmsans text-white text-justify mt-4 relative z-10">
      <h2 className="font-bold ml-3 text-3xl">Workshops</h2>
      <div className=" p-4 mb-2">
      Seasoned professionals and industry experts lead immersive workshops covering 
      vital startup topics such as customer discovery, lean startup principles, 
      business model canvas, pitching techniques, and design thinking.
      </div>
    </div>
  </div>

      <div className="relative">
    <div
      className="absolute inset-0 bg-cover bg-center rounded-lg"
      style={{
        backgroundImage: `url(${Img14})`,
        height: 160,
        opacity: 0.7,
        zIndex: 0,
      }}
    />
    <div className="text-sm ml-2 font-dmsans text-white text-justify mt-4 relative z-10">
      <h2 className="font-bold ml-3 text-3xl">Funding</h2>
      <div className=" p-4 mb-2">
      At Nirmaan, you will find an extensive array of resources within our workspace, 
      featuring advanced machining tools, sophisticated characterization equipment, 
      and top-tier computing facilities.
      </div>
    </div>
  </div>
      
  <div className="relative">
    <div
      className="absolute inset-0 bg-cover bg-center rounded-lg"
      style={{
        backgroundImage: `url(${Img15})`,
        height: 160,
        opacity: 0.7,
        zIndex: 0,
      }}
    />
    <div className="text-sm ml-2 font-dmsans text-white text-justify mt-4 relative z-10">
      <h2 className="font-bold ml-3 text-3xl">Networking</h2>
      <div className=" p-4 mb-2">
      Student teams have the opportunity to engage with a diverse array of industry experts 
      and IITM alumni, allowing them to discuss and refine their startup ideas.
      </div>
    </div>
  </div>
        </div>






//Footer

import React from 'react'
import Img9 from "../Assets/DSC_1259.jpg";
import Img17 from "../Assets/youtubenew.png";
import Img18 from "../Assets/Linkedin.png";
import Img19 from "../Assets/X .png";
import Img20 from "../Assets/FB.png";
import Img21 from "../Assets/Instagram.png";
import { CiLocationOn, CiMail, CiYoutube } from "react-icons/ci";

const Footer = () => {
  return (
    <div>
        <div className=" text-white p-3 mt-8 px-8 " style={{ backgroundColor: '#83d687' }}>
          <div className=" relative w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative h-full w-full">
              <div
                className="absolute inset-0 bg-cover bg-center mt-5 rounded-lg "
                style={{
                  backgroundImage: `url(${Img9})`,
                  opacity: 0.7,
                  height: '300px',
                  zIndex: 0,
                  marginLeft: "-32px",
                }}
              ></div>
              <div className="relative z-10 p-6 mb-6">
                <div
                  className="text-md flex flex-col items-start "
                  style={{ fontSize: "16px" }}
                >
                  <div className="flex items-center  mt-24">
                    <CiMail className="mr-2 h-6 w-6" />

                    <span>nirmaan@smail.iitm.ac.in</span>
                  </div>
                  <div className="flex items-start text-md">
                    <CiLocationOn className="mr-2 h-6 w-6" />
                    <div>
                      Sudha Shankar Innovation Hub <br />
                      IIT Madras, Chennai <br />
                      600036, India
                    </div>
                  </div>
                  <div className="flex mt-10">
                    <img src={Img17} className="h-[24px] ml-72" />
                    <img src={Img18} className="h-[22px] ml-6" />
                    <img src={Img19} className="h-[22px] ml-6" />
                    <img src={Img20} className="h-[22px] ml-6" />
                    <img src={Img21} className="h-[22px] ml-6" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-left">
                <h1 className="text-2xl font-semibold font-dmsans mt-3">
                  Sign Up for Updates
                </h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                <div className="mt-6">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 border border-gray-600 rounded  focus:outline-none "style={{ backgroundColor: "#c3fac6" }}
                  />
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="emailAddress"
                    className="w-full p-2 border border-gray-600 rounded bg-gray-700 focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-2">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium mb-4 mt-2"
                >
                  Query
                </label>
                <textarea
                  id="description"
                  name="aws_description"
                  rows="3"
                  className="w-full p-2 border border-gray-600 rounded bg-gray-700 focus:outline-none resize-none"
                ></textarea>
              </div>

              <button className="mt-6 block border rounded-lg p-2 text-sm bg-green-500 hover:bg-green-600 text-white w-[150px] mb-6">
                Record your Interest
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer