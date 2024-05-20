import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Contactus = () => {
  return (
    <div className="aboutUs flex justify-center items-center w-full h-auto flex-col mb-50 bg-dark-white gap-20 mt-25">
      <div className="aboutUs-title flex justify-center items-center w-80 h-full">
        <span className="font-poppins text-main-color text-36 font-700 tracking-1">
          ModaZen/Contact
        </span>
      </div>
      <div className="aboutUs-container flex w-80 h-auto min-h-400 flex-col p-20 gap-50">
        <div className="flex w-full h-auto flex-col gap-20">
          <p className="font-poppins text-dark-grey text-18 font-500">
            We value your feedback and are here to assist you in any way we can.
            Please feel free to reach out to us via the following channels:
          </p>
        </div>
        <div className="flex w-full h-auto flex-col gap-20">
          <span className="font-poppins text-main-color text-22 font-700 tracking-1">
            Customer Support:
          </span>
          <p className="font-poppins text-dark-grey text-18 font-500">
            For any inquiries, concerns, or assistance with your orders, our
            dedicated customer support team is available 24/7. You can contact
            us at modaZen@support.com or call us at +1234567890
          </p>
        </div>
        <div className="flex w-full h-auto flex-col gap-20">
          <span className="font-poppins text-main-color text-22 font-700 tracking-1">
            Business Inquiries:
          </span>
          <p className="font-poppins text-dark-grey text-18 font-500">
            For partnerships, collaborations, or business-related inquiries,
            please email us at modaZen@support.com
          </p>
        </div>
        <div className="flex w-full h-auto flex-col gap-20">
          <span className="font-poppins text-main-color text-22 font-700 tracking-1">
            Feedback and Suggestions:
          </span>
          <p className="font-poppins text-dark-grey text-18 font-500">
            We welcome your feedback and suggestions to improve your experience
            with ModaZen. Share your thoughts with us at modaZen@support.com
          </p>
        </div>
        <div className="flex w-full h-auto flex-col gap-20">
          <span className="font-poppins text-main-color text-22 font-700 tracking-1">
            Visit Us:
          </span>
          <p className="font-poppins text-dark-grey text-18 font-500">
            If you prefer to visit us in person, our office is located at:{" "}
            <br></br>
            <br></br>
            Mumbai
            <p className="font-poppins text-dark-grey text-18 font-500">
              We Work Spectrum, 307, Chincholi Bunder Road, Malad, Rajan Pada,
              Mindspace, Malad West, Mumbai, Maharashtra 400064.
            </p>
          </p>
        </div>
        <div className="flex w-full h-auto flex-col gap-20">
          <span className="font-poppins text-main-color text-22 font-700 tracking-1">
            Follow Us:
          </span>
          <p className="font-poppins text-dark-grey text-18 font-500">
            Stay connected and updated with ModaZen by following us on social
            media: <br></br>
            <br></br>
            <div className="flex flex-col gap-10">
              <div className="aboutUs-container-info-social-icon hover:text-main-color flex items-center flex-row gap-10 w-6">
                <FontAwesomeIcon className="facebook-icon" icon={faFacebook} />
                <Link to="https://www.facebook.com/">
                  <p className="font-poppins text-dark-grey text-18 font-500">
                    Facebook
                  </p>
                </Link>
              </div>
              <div className="aboutUs-container-info-social-icon hover:text-main-color flex items-center flex-row gap-10 w-6">
                <FontAwesomeIcon className="insta-icon" icon={faInstagram} />
                <Link to="https://www.instagram.com/">
                  <p className="font-poppins text-dark-grey text-18 font-500">
                    Instagram
                  </p>
                </Link>
              </div>
              <div className="aboutUs-container-info-social-icon hover:text-main-color flex items-center flex-row gap-10 w-6">
                <FontAwesomeIcon className="twitter-icon" icon={faTwitter} />
                <Link to="https://twitter.com/i/flow/login">
                  <p className="font-poppins text-dark-grey text-18 font-500">
                    Twitter
                  </p>
                </Link>
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
