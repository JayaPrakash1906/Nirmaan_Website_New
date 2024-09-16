import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Img1 from "../Assets/Incubation-logo.png";
import Img2 from "../Assets//hyperverge-logo.webp";
import Img3 from "../Assets/Seafund-Logo-1.webp";
import Img4 from "../Assets/logo-cogniphy.png";
import Img5 from "../Assets/5.jpg";
import Img6 from "../Assets/6.jpeg";
import Img7 from "../Assets/7.jpeg";
import Img8 from "../Assets/Paststudent.png";
import Img9 from "../Assets/sobusyoutube.jpg";
import Img11 from "../Assets/nexus.png";
import Img12 from "../Assets/nithin.png";
import Img13 from "../Assets/Eashwar.png";
import Img14 from "../Assets/Krishaka.png";
import Img15 from "../Assets/1.jpeg";
import Img16 from "../Assets/logo.png";
import Img17 from "../Assets/image.jpg";
import Img18 from "../Assets/image (1).jpg";
import Img19 from "../Assets/X .png";
import Img20 from "../Assets/FB.png";
import Img21 from "../Assets/algram.png";
import Img22 from "../Assets/NATESAN.jpg";
import Img23 from "../Assets/aptiv.png"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import CountUp from "react-countup";
import { CiLocationOn, CiMail, CiYoutube } from "react-icons/ci";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";
import Marquee from "react-fast-marquee";
const stats = [
  { id: 1, label: "Total Valuation", value: 1000, },
  { id: 2, label: "Revenue Generated By Startups", value: 108 },
  { id: 3, label: "Sectors In Focus", value: 9 },
  { id: 4, label: "Active Teams", value: 88 },
  { id: 5, label: "Women Entrepreneurs", value: 25 },
  { id: 6, label: "Total Number of Teams Trained", value: 148 },
  { id: 7, label: "Registered Startups", value: 26 },
  { id: 8, label: "Sustainability Focused Teams", value: 40 },
];

const Carousel = () => {
  const slides = [
    {
      Img: Img8,
      img: Img16,
      name: "Akash Anand",
      title: "Founder, Clueso",
      content: (
        <>
          <p>
            Nirmaan has been an invaluable partner in our journey from concept
            to a thriving startup. Their comprehensive support, including
            technical assistance, financial aid, and access to a network of
            experienced mentors, has been instrumental in our success. The
            workshops provided us with essential skills, and the
            state-of-the-art infrastructure offered an ideal environment for
            innovation and growth. Nirmaan's dedication to nurturing young
            entrepreneurs is truly commendable, and we are grateful for their
            unwavering support.
          
            Thanks to Nirmaan, Clueso has transformed from a mere idea into a
            successful business.
          </p>
        </>
      ),
    },
    {
      Img: Img12,
      img: Img11,
      name: "Nithin Maloth",
      title: "Founder, Nexuscare",
      content: (
        <>
          <p>
          From the very beginning, I've been with Nirmaan and have seen it evolve into a model of excellence. 
          Medlock (now registered as Nexuscare) has benefitted immensely from the steadfast support of the Nirmaan 
          team, particularly under the guidance of manager Nandini Ma’am. I recommend Nirmaan as the perfect starting 
          point for any entrepreneur. The founder’s journey is typically solitary and perplexing, but with Nirmaan, it 
          has been a collaborative and clear path.

          </p>
          
        </>
      ),
    },
    {
      Img: Img13,
      img: Img14,
      name: "Easwar Veeragandham",
      title: "Founder, Krishaka",
      content: (
        <>
          <p>
          "Krishaka has been part of the Nirmaan Preincubation Cell at IIT Madras for the past two years. 
          Nirmaan provided us with invaluable mentorship, field contacts, manufacturing support, and prototyping funding.
           Their organized talks with industry veterans enriched our knowledge and guided our growth. 
           Thanks to their unwavering commitment to innovation, Krishaka could turn ideas into a feasible business. 
           Special thanks to Nandhini mam for her constant support throughout our journey."

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
    <div
      className=" text-white p-4 mt-8 px-8"
      style={{ backgroundColor: "#abf7af" }}
    >
      <div className="relative w-full max-w-7xl mx-auto mt-6 ">
        <div className="grid grid-cols-2 gap-1">
          {/* Left Column: Slide Content */}
          <div
            className="overflow-hidden rounded-lg shadow-lg  "
            style={{ backgroundColor: "#4c9c50" }}
          >
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0 p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-2 mt-1">
                      <img
                        src={slide.Img}
                        className="h-16 rounded-full"
                        alt={slide.name}
                      />
                    </div>

                    <div className="mr-2 mt-1">
                      <img src={slide.img} className="h-7" alt={slide.name} />
                    </div>
                    <div>
                      <span className="font-semibold">{slide.name}</span>
                      <div className="text-md">{slide.title}</div>
                    </div>
                  </div>
                  <div className="text-sm mt-2 text-justify">
                    {slide.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Arrows and Dots */}
          <div className="font- ">
            <div className="text-left  ">
              <h1 className="text-[25px] font-semibold font-dmsans mt-6 ml-16 text-black">
                Inspiring <span className="text-green-600">stories</span> from
                the members
                <br /> of the past
              </h1>
              
            </div>
            <div className="flex items-center space-x-4 ml-16 mt-4">
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
      </div>
      <div className="flex justify-center mt-4 space-x-2 mr-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-green-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const StatCounter = ({ stat }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the count-up once
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  return (
    <div className="p-6 rounded-lg shadow-lg text-center">
      <div className="text-3xl font-semibold text-white font-dmsans">
        <div
          className="rounded-lg p-2"
          ref={ref}
          style={{ backgroundColor: "#4c9c50" }}
        >
          {inView && (
            <CountUp
              end={stat.value}
              suffix={
                stat.label === "Total Valuation" ||
                stat.label === "Revenue Generated By Startups"
                  ? " Cr+"
                  : stat.label === "Total Number of Teams Trained" ||
                    stat.label === "Sectors In Focus" ||
                    stat.label === "Women Entrepreneurs"
                  ? "+"
                  : ""
              }
              duration={2} // Duration of the count-up animation in seconds
            />
          )}
        </div>
      </div>
      
      <div className="mt-4 text-sm text-gray-900 font-dmsans">{stat.label}</div>
      
      {/* Conditionally render the 2023-2024 cohorts information below "Active Teams" */}
      {stat.label === "Active Teams" && (
        <div className="mt-2 text-xs text-gray-600 font-dmsans">
          2023-2024 Cohorts
        </div>
      )}
      {stat.label === "Total Number of Teams Trained" && (
        <div className="mt-2 text-xs text-gray-600 font-dmsans">
          till 2023 Cohorts
        </div>
      )}
    </div>
  );
};


const Home = () => {
  return (
    <div>
      <Navbar />
      <div
        className="relative overflow-hidden whitespace-nowrap  mt-32"
        style={{ backgroundColor: "#4c9c50" }}
      >
        <div className="flex animate-marquee font-dmsans  text-white">
          <span className="mx-6"> DEMO DAY: 27 September 2024</span>
          <span className="mx-6"> DEMO DAY: 27 September 2024</span>
          <span className="mx-6"> DEMO DAY: 27 September 2024</span>
          <span className="mx-6"> DEMO DAY: 27 September 2024</span>
          <span className="mx-6"> DEMO DAY: 27 September 2024</span>
          <span className="mx-6"> DEMO DAY: 27 September 2024</span>
          <span className="mx-6"> DEMO DAY: 27 September 2024</span>
          <span className="mx-6"> DEMO DAY: 27 September 2024</span>
          <span className="mx-6"> DEMO DAY: 27 September 2024</span>
          <span className="mx-6"> DEMO DAY: 27 September 2024</span>
          <span className="mx-6"> DEMO DAY: 27 September 2024</span>
          <span className="mx-6"> DEMO DAY: 27 September 2024</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 ">
        <div>
          <div className=" max-w-xl mx-auto bg-white rounded-xl space-y-4 bg-gray-50 mt-16 content-left">
            <div className="text-center">
              <h1 className=" font-bold font-dmsans">
                <span className="text-green-600 text-6xl">NIRMAAN</span> <br />
                <div className="text-xl">THE PRE- INCUBATOR , IIT MADRAS</div>
              </h1>
              <p className="mt-8 text-gray-900 font-dmsans text-justify">
                Nirmaan at IIT Madras is the first of its kind dedicated
                pre-incubator on a college campus in the country. Nirmaan is
                committed to advancing innovation and entrepreneurship by
                providing comprehensive technical guidance and business
                mentorship to students. Our support focuses on enhancing the
                robustness of their business ideas and ensuring their economic
                feasibility. Through mentorship and strategic insights, we help
                students transform their ideas into successful, 
                ventures.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-[-10px] mr-6">
          <motion.div
            className="col-span-6 mt-8 max-w-xl mx-auto bg-white rounded-xl bg-gray-50 "
            initial={{ opacity: 0}}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={Img6}
              className="h-[180px] border border-green-800 rounded-lg"
              alt="Image 1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}   
              transition={{ duration: 0.5 }}     
            />
          </motion.div>
          <motion.div
            className="col-span-6 mt-8 mr-6 max-w-xl mx-auto bg-white rounded-xl bg-gray-50 content"
            initial={{ opacity: 0}}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={Img15}
              className="h-[180px] border border-green-800 rounded-lg"
              alt="Image 9"
            />
          </motion.div>
          <motion.div
            className="col-span-4 p-6 max-w-xl mx-auto bg-white rounded-xl bg-gray-50 content"
            initial={{ opacity: 0}}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={Img17}
              className="h-21 border border-green-800 rounded-lg"
              alt="Image 1"
            />
          </motion.div>
          <motion.div
            className="col-span-4 p-6 max-w-xl mx-auto bg-white rounded-xl bg-gray-50 content"
            initial={{ opacity: 0}}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={Img18}
              className="h-21 border border-green-800 rounded-lg"
              alt="Image 1"
            />
          </motion.div>
          <motion.div
            className="col-span-4 p-6 max-w-xl mx-auto bg-white rounded-xl bg-gray-50 content"
            initial={{ opacity: 0}}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={Img5}
              className="h-21 border border-green-800 rounded-lg"
              alt="Image 1"
            />
          </motion.div>
        </div>
      </div>

      <div className="p-6 max-w-xl mx-auto bg-white rounded-xl space-y-4 bg-gray-50 mt-8 content-bottom">
        <div className="text-center">
          <h1 className="text-4xl font-bold font-dmsans text-green-600">
            NIRMAAN IN NUMBERS
          </h1>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-cols-4 gap-4 content-bottom">
            {stats.map((stat) => (
              <StatCounter key={stat.id} stat={stat} />
            ))}
          </div>
        </div>
        <div>
      <div className="flex items-center justify-center text-4xl font-bold mt-16 mb-8 font-dmsans text-green-600">
        OUR SUPPORTERS
      </div>

      <Marquee>
        <div className="flex space-x-6">
          <img src={Img23} alt="supporter-logo" className="h-[100px] ms-10" />
          <img src={Img1} alt="supporter-logo" className="h-[100px]" />
          <img src={Img2} alt="supporter-logo" className="h-[100px]" />
          <img src={Img3} alt="supporter-logo" className="h-[35px] mt-7" />
          <img src={Img4} alt="supporter-logo" className="h-[50px] mt-6" />
          <img src={Img22} alt="supporter-logo" className="h-[50px] mt-5" />
          <img src={Img9} alt="supporter-logo" className="h-[100px]" />
          <img src={Img21} alt="supporter-logo" className="h-[40px] mt-7 " />
          {/* <img src={Img1} alt="supporter-logo" className="h-[100px]" />
          <img src={Img1} alt="supporter-logo" className="h-[100px]" />
          <img src={Img1} alt="supporter-logo" className="h-[100px]" />
          <img src={Img1} alt="supporter-logo" className="h-[100px]" />
          <img src={Img1} alt="supporter-logo" className="h-[100px]" />
           */}
        </div>
      </Marquee>
    </div>
      </div>

      <Carousel />

      <Footer />
    </div>
  );
};

export default Home;
