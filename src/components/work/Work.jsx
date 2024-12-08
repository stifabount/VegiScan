import React from "react";
import HowItWorkImg from "../../assets/image/works.png";

const HowItWorks = () => {
  return (
    <section className="mx-auto px-6 md:px-12 mt-20 flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={HowItWorkImg}
          alt="Vegetable Image"
          className="rounded-lg max-w-xl"
        />
      </div>
      <div className="w-full md:w-1/2">
        <p className="text-secondary font-medium text-lg mb-2">How It Works ?</p>
        <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-6">
          Smarter Veggie Care
        </h2>
        
        <div className="flex flex-col gap-4">
          <div className="flex items-start p-4 rounded-lg hover:shadow-smooth">
            <div className="flex-shrink-0">
              <img
                src="https://via.placeholder.com/50"
                alt="Icon"
                className="w-12 h-12"
              />
            </div>
            <div className="ml-4">
              <h3 className="font-bold text-lg textDark">Scan your vegetables or crops</h3>
              <p className="text-textDark text-sm">
                Lorem ipsum dolor sit amet consectetur. Sed eros lorem ut sit
                consectetur tellus aliquet.
              </p>
            </div>
          </div>

          {/* Ulang Card Items */}
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="flex items-start p-4 rounded-lg hover:shadow-smooth"
            >
              <div className="flex-shrink-0">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Icon"
                  className="w-12 h-12"
                />
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-lg textDark">Lorem ipsum dolor sit amet consectetur</h3>
                <p className="textDark text-sm">
                  Lorem ipsum dolor sit amet consectetur. Sed eros lorem ut sit
                  consectetur tellus aliquet.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
