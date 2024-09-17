import React from "react";
import Img9 from "../Assets/footer.jpg";
import Img17 from "../Assets/youtubenew.png";
import Img18 from "../Assets/Linkedin.png";
import Img19 from "../Assets/X .png";
import Img20 from "../Assets/FB.png";
import Img21 from "../Assets/Instagram.png";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaEnvelope, FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaLocationDot, FaLocationPin, FaLocationPinLock, FaSquareYoutube, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="mt-16 md:mb-auto">
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${Img9})`,
          height: "170px",
        }}
      >
        <div className="grid grid-cols-3 gap-2">
          <div className="text-white ml-10">
            <h3 className="font-semibold mt-4 mb-3">Contact</h3>
            <div className="flex items-start text-md">
              <FaEnvelope className="mr-2 h-6 w-6" />
              Nirmaan@smail.iitm.ac.in
              <br />
            </div>
            <div className="flex items-start">
              <FaLocationDot className="mr-2 h-6 w-6" />
              <div>
                <p>Sudha & Shankar Innovation Hub</p>
                <p>IIT Madras, Chennai</p>
                <p>600036, India</p>
              </div>
            </div>
          </div>
          <div className="text-white ml-10">
            <h3 className="font-semibold mt-4 mb-3">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <a href="/media">Blog <br /></a>
                <a href="/media">Innosphere Podcast <br /></a>
                <a href="/media">Innosphere Magazine <br /></a>
              </div>
            </div>
          </div>
          <div className="text-white ml-10">
            <h3 className="font-semibold mt-4 mb-3">Follow on</h3>
            <div className="flex space-x-6 mt-8">
              {/* <img src={Img17} className="h-[24px]" alt="YouTube" />
              <img src={Img18} className="h-[22px]" alt="LinkedIn" />
              <img src={Img20} className="h-[22px]" alt="Facebook" />
              <img src={Img21} className="h-[22px]" alt="Instagram" /> */}
              <a href="https://www.linkedin.com/company/nirmaan-iitm/"><FaLinkedin className="h-[24px]" size={23}/></a>
              <a href="https://www.youtube.com/channel/UCqXpedHH46Y5_x-7MNY6nCw"><FaYoutube className="h-[24px]" size={23}/></a>
              <a href="https://www.instagram.com/nirmaan_iitm?igsh=YWdocTFid3Y5Zmdx"><FaInstagram className="h-[24px]" size={23}/></a>
              <a href="https://www.facebook.com/nirmaan.iitm?mibextid=ZbWKwL"><FaFacebookF className="h-[24px]" size={23}/></a>
            </div>
          </div>
        </div>
      </div>

      {/* Move the copyright content outside of the background image */}
      <div className="text-center text-white  bg-green-900 py-2">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Designed by Nirmaan Team
        </p>
      </div>
    </div>
  );
};

export default Footer;
