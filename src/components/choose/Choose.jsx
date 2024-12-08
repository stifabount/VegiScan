import React from "react";
import ChooseImg from "../../assets/image/choose.png";

const WhyChoose = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-8  mt-12 flex flex-col md:flex-row items-center gap-8 py-12">
      <div className="w-full md:w-1/2">
        <p className="text-secondary font-medium text-lg mb-2">
          Why Choose VegiScan
        </p>
        <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-6">
          Fresher, Healthier, and Sustainable Vegetables
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
              <h3 className="font-bold text-lg textDark">
                Powered by advanced AI technology
              </h3>
              <p className="text-textDark text-sm">
                Provides farmers with early detection of crop issues, enabling
                timely intervention and better yield.
              </p>
            </div>
          </div>

          {/* Repeat Card Items */}
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
                <h3 className="font-bold text-lg textDark">
                  Lorem ipsum dolor sit amet consectetur
                </h3>
                <p className="textDark text-sm">
                  Lorem ipsum dolor sit amet consectetur. Sed eros lorem ut sit
                  consectetur tellus aliquet.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={ChooseImg}
          alt="Vegetable Image"
          className="rounded-lg max-w-lg"
        />
      </div>
    </section>
  );
};

export default WhyChoose;
