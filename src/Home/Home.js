import React from "react";
import Navbar from "../Components/Navbar";
import Img1 from "../Assest/1.jpeg";
import Img2 from "../Assest/2.jpeg";
import Img3 from "../Assest/3.jpeg";
import Img4 from "../Assest/4.jpeg";
import Img5 from "../Assest/file (1).jpg";
import Img6 from "../Assest/logo.png";
import {
  FaBusinessTime,
  FaChevronLeft,
  FaChevronRight,
  FaUserGroup,
} from "react-icons/fa6";
import { FcBriefcase } from "react-icons/fc";
import { CgChevronLeft } from "react-icons/cg";
import { MdBusinessCenter, MdCardMembership } from "react-icons/md";
import { GrTechnology, GrWorkshop } from "react-icons/gr";

const stats = [
  { id: 1, label: "Total Valuation", value: "1000 Cr+" },
  { id: 2, label: "Revenue Generated By Startups", value: "108 Cr+" },
  { id: 3, label: "Sectors In Focus", value: "9+" },
  { id: 4, label: "Registered Startups", value: "24" },
  { id: 5, label: "Women Entrepreneurs", value: "25+" },
  { id: 6, label: "Sustainability Focused Startups", value: "40" },
];

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-3 gap-4">
        <div className="p-6 max-w-xl mx-auto bg-white rounded-xl space-y-4 bg-gray-50 mt-10">
          <img src={Img1} className="w-23 h-23" alt="Image 1" />
        </div>
        <div>
          <div className="p-6 max-w-xl mx-auto bg-white rounded-xl border space-y-4 bg-gray-50 mt-16">
            <div className="text-center">
              <h1 className="text-2xl font-bold font-lora">
                The{" "}
                <span className="text-green-500">
                  1<sup>st</sup> Pre-Incubator
                </span>{" "}
                On A College Campus In India
              </h1>
              <p className="mt-4 text-gray-600 font-dmsans text-justify">
                Nirmaan, The Pre-incubator of IIT Madras, is the first dedicated
                pre-incubator on a college campus in India. Established in
                October 2015, we provide a supportive and collaborative
                environment for enterprising student teams to transform their
                innovative ideas into successful startups.
              </p>
            </div>
          </div>
        </div>
        <div className="p-6 max-w-xl mx-auto bg-white rounded-xl space-y-4 bg-gray-50 mt-10">
          <img src={Img2} className="w-23 h-23" alt="Image 2" />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-3">
        <div className="p-6 max-w-xl mx-auto bg-white rounded-xl space-y-4 bg-gray-50 mt-2">
          <img src={Img2} className="w-23 h-23" alt="Image 3" />
        </div>
        <div className="p-6 max-w-xl mx-auto bg-white rounded-xl space-y-4 bg-gray-50 mt-16">
          <img src={Img3} className="w-23 h-23" alt="Image 4" />
        </div>
        <div className="p-6 max-w-xl mx-auto bg-white rounded-xl space-y-4 bg-gray-50 mt-2">
          <img src={Img4} className="w-23 h-23" alt="Image 5" />
        </div>
        <div className="p-6 max-w-xl mx-auto bg-white rounded-xl space-y-4 bg-gray-50 mt-16">
          <img src={Img1} className="w-23 h-23" alt="Image 1" />
        </div>
        <div className="p-6 max-w-xl mx-auto bg-white rounded-xl space-y-4 bg-gray-50 mt-2">
          <img src={Img4} className="w-23 h-23" alt="Image 6" />
        </div>
      </div>
      <div className="p-4">
        <div className="border-t border-b border-l border-black  p-8 relative">
          <div className="grid grid-cols-3 gap-8">
            <div className="relative">
              <span className="absolute -top-11 left-24 bg-white px-2">
                <MdCardMembership />
              </span>
              <div className="absolute -top-7 left-20 mb-6 px-2 font-semibold font-dmsans">
                <span>Membership</span>
              </div>
              <div className="text-sm ml-6 font-dmsans">
                Nirmaan connects startups with experienced
                <br />
                mentors who provide specialized technical
                <br />
                and business guidance. Our mentors help
                <br />
                young entrepreneurs navigate challenges and
                <br />
                achieve their goals.
              </div>
            </div>
            <div className="relative">
              <span className="absolute -top-11 left-32 bg-white px-2">
                <MdBusinessCenter />
              </span>
              <div className="absolute -top-7 left-24 mb-6 px-2 font-semibold font-dmsans">
                <span>Business Guidance</span>
              </div>
              <div className="text-sm ml-6 font-dmsans">
                Nirmaan offers business guidance to help
                <br />
                entrepreneurs navigate the complexities of
                <br />
                the market. Our experts provide strategic
                <br />
                advice on business planning, marketing, and
                <br /> scaling.
              </div>
            </div>
            <div className="relative">
              <span className="absolute -top-11 right-36 bg-white px-2">
                <FaBusinessTime />
              </span>
              <div className="absolute -top-7 right-24 mb-6 px-2 font-semibold font-dmsans">
                <span>Infrastructure</span>
              </div>
              <div className="text-sm ml-16 font-dmsans">
                Nirmaan provides a well-equipped workspace
                <br />
                with state-of-the-art facilities. This nurturing
                <br /> environment enables young entrepreneurs to
                <br /> focus on developing and growing their
                <br /> startups.
              </div>
            </div>
          </div>
        </div>
        <div className="border-r border-b  border-black  p-8 relative">
          <div className="relative">
            <div className="flex items-center justify-center">
              <span className="absolute absolute -top-12 center bg-white px-2 text-3xl font-bold font-lora">
                We give everything you need
              </span>
              <div className="items-center justify-center font-dmsans text-sm">
                At Nirmaan, we offer technical support, business guidance, and
                mentorship to help students
                <br />
                develop their business ideas into technically sound and
                economically viable enterprises. Our
                <br />
                comprehensive support includes infrastructure, financial
                assistance, workshops, and access to a
                <br />
                network of experienced mentors who provide specialized guidance.
              </div>
            </div>
          </div>
        </div>
        <div className="  border-black  p-8 relative">
          <div className="grid grid-cols-3 gap-8">
            <div className="relative">
              <span className="absolute -top-11 left-24 bg-white px-2">
                <FaUserGroup />
              </span>
              <div className="absolute -top-7 left-20 mb-6 px-2 font-semibold font-dmsans">
                <span>Financial Assistance</span>
              </div>
              <div className="text-sm ml-6 font-dmsans">
                Nirmaan provides financial assistance to young entrepreneurs,
                helping them secure the necessary funding to develop their
                business ideas. This support ensures startups have the resources
                needed to grow and succeed.
              </div>
            </div>
            <div className="relative">
              <span className="absolute -top-11 left-32 bg-white px-2 ">
                <GrWorkshop />
              </span>
              <div className="absolute -top-7 left-24 mb-6 px-2 font-semibold font-dmsans">
                <span>workshops</span>
              </div>
              <div className="text-sm ml-6 font-dmsans">
                Nirmaan conducts workshops to equip young entrepreneurs with
                essential skills and knowledge. These sessions cover various
                aspects of business development, from idea generation to
                execution.
              </div>
            </div>
            <div className="relative">
              <span className="absolute -top-11 right-36 bg-white px-2">
                <GrTechnology />
              </span>
              <div className="absolute -top-7 right-24 mb-6 px-2 font-semibold font-dmsans">
                <span>Technical Support</span>
              </div>
              <div className="text-sm ml-16 font-dmsans">
                Nirmaan offers technical support to help students turn their
                innovative ideas into viable products. Our experts assist with
                technical challenges, ensuring projects are sound and feasible.
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 max-w-xl mx-auto bg-white rounded-xl space-y-4 bg-gray-50 mt-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold font-lora">NIRMAAN in Numbers</h1>
            <p className="mt-4 text-gray-600 font-dmsans text-justify">
              Our commitment to nurturing entrepreneurship has been recognized
              through various awards and accolades. Nirmaan has been honored as
              one of the leading incubators in the region, reflecting our
              dedication to supporting the next generation of entrepreneurs.
            </p>
          </div> 
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="p-6 bg-gray-100 rounded-lg shadow-lg text-center"
              >
                <div className="text-3xl font-semibold text-green-700">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-gray-600 font-dmsans">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 text-white p-8 mt-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="font-lora ">
                <div className="text-left ">
                  <h1 className="text-2xl font-semibold font-lora">
                    Inspiring{" "}
                    <span className="text-green-500">
                      Stories <br />
                    </span>{" "}
                    from the members
                    <br /> of the past
                  </h1>
                  <p className="text-xs">
                    Nirmaan has been a valuable partner in our journey from
                    concept to a thriving startup.<br/> Their comprehensive
                    support...
                  </p>

                </div>
                <button className="mt-4 flex items-center">
                      <FaChevronLeft />
                      <FaChevronRight />
                </button>
              </div>
            </div>
            <div>
            <div className="flex items-start">
  <img src={Img6} className="w-12 h-12 mr-2.5" alt="Logo" />
  <div className="font-dmsans">
    <div className="font-bold text-md">
      <span>Akash Anand</span>
      <div className="text-xs">Founder, Clueso</div>
    </div>
    <div className="text-sm mt-2 mr-8">
      <p>
        "Nirmaan has been an invaluable partner in our journey from concept to a thriving startup. 
        Their comprehensive support, including technical assistance, financial aid, and access to
         a network of experienced mentors, has been instrumental in our success. 
         The workshops provided us with essential skills, and the state-of-the-art infrastructure 
         offered an ideal environment for innovation and growth. Nirmaan's dedication to nurturing 
         young entrepreneurs is truly commendable, and we are grateful for their unwavering support.
      </p>
      <p>
        Thanks to Nirmaan, Clueso has transformed from a mere idea into a successful business."
      </p>
    </div>
  </div>
</div>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
