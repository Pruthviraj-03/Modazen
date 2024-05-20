import React from "react";

const Aboutus = () => {
  return (
    <div className="flex justify-center items-center w-full h-auto flex-col mb-50 bg-dark-white gap-20 mt-25">
      <div className="flex justify-center items-center w-80 h-full">
        <span className="font-poppins text-main-color text-36 font-700 tracking-1">
          ModaZen/About
        </span>
      </div>
      <div className="flex w-80 h-auto min-h-400 flex-col p-20 gap-50">
        <div className="flex w-full h-auto flex-col gap-20">
          <span className="font-poppins text-main-color text-22 font-700 tracking-1">
            About ModaZen: Elevating Your Style Experience
          </span>
          <p className="font-poppins text-dark-grey text-18 font-500">
            Welcome to ModaZen, your ultimate destination for elevating your
            fashion and lifestyle choices. As a leading e-commerce platform
            dedicated to fashion enthusiasts, ModaZen curates a seamless and
            enriching shopping journey, ensuring you find everything you need to
            express your unique style effortlessly.
          </p>
        </div>
        <div className="flex w-full h-auto flex-col gap-20">
          <span className="font-poppins text-main-color text-22 font-700 tracking-1">
            Our Vision
          </span>
          <p className="font-poppins text-dark-grey text-18 font-500">
            At ModaZen, our vision is to redefine the way you experience
            fashion. We believe that clothing is not just about covering your
            body but expressing your personality, aspirations, and creativity.
            Our platform is designed to empower you to embrace fashion as an
            extension of yourself, celebrating diversity, innovation, and
            individuality.
          </p>
        </div>
        <div className="flex w-full h-auto flex-col gap-20">
          <span className="font-poppins text-main-color text-22 font-700 tracking-1">
            Why ModaZen?
          </span>
          <p className="font-poppins text-dark-grey text-18 font-500">
            <h3 className="font-poppins text-main-color text-18 font-600 mb-15">
              1. Unrivaled Selection:
            </h3>{" "}
            Explore a vast and diverse collection of apparel, accessories, and
            footwear from renowned Indian and international brands. From
            timeless classics to the latest trends, we offer something for every
            style preference.
          </p>
          <p className="font-poppins text-dark-grey text-18 font-500">
            <h3 className="font-poppins text-main-color text-18 font-600 mb-15">
              2. Authenticity Guaranteed:
            </h3>{" "}
            Shop with confidence knowing that every product on ModaZen is 100%
            authentic, ensuring you receive top-quality items that meet your
            expectations.
          </p>
          <p className="font-poppins text-dark-grey text-18 font-500">
            <h3 className="font-poppins text-main-color text-18 font-600 mb-15">
              3. Convenience Redefined:
            </h3>
            Experience hassle-free shopping with our user-friendly interface,
            secure payment options, and prompt delivery services. Our dedicated
            customer support team is available round-the-clock to assist you
            with any queries or concerns.
          </p>
          <p className="font-poppins text-dark-grey text-18 font-500">
            <h3 className="font-poppins text-main-color text-18 font-600 mb-15">
              4. Style Inspiration:
            </h3>{" "}
            Stay updated with the latest fashion trends, styling tips, and
            exclusive collections curated by our team of experts. Discover new
            ways to elevate your wardrobe and express your unique style
            effortlessly.
          </p>
        </div>
        <div className="flex w-full h-auto flex-col gap-20">
          <span className="font-poppins text-main-color text-22 font-700 tracking-1">
            Our Commitment
          </span>
          <p className="font-poppins text-dark-grey text-18 font-500">
            At ModaZen, we are committed to revolutionizing your fashion
            experience. Whether you're looking for everyday essentials,
            statement pieces, or special occasion attire, we strive to be your
            trusted partner in enhancing your style journey. Join us in
            embracing the beauty of fashion and expressing your authentic self
            with confidence.
            <br></br>
            <br></br> Elevate Your Style, Embrace ModaZen!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
