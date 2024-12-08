import React from "react";

const Serve = () => {
  return (
    <section className="bg-white mt-20">
      <div className="py-16 px-6 mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-center mb-12 lg:text-left">
            <div>
                <h5 className="text-lg font-extrabold text-green-600 mb-2">
                What We Serve ?
                </h5>
                <h3 className="text-3xl font-extrabold text-textDark leading-snug">
                Explore the Features <br />
                That Make Us Unique
                </h3>
            </div>
            <div>
                <p className="text-gray-500 text-textDark leading-relaxed">
                Explore how VegiScan stands out with smart features that simplify your
                life, reduce waste, and deliver top-quality vegetables.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-smooth rounded-lg">
            <div className="flex items-center justify-start mb-6">
              <img
                src="https://via.placeholder.com/50"
                alt="Vegetable Quality"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-xl font-bold text-textDark mb-2">
              Vegetable Quality Diagnosis
            </h3>
            <p className="text-textDark">
              Analyze your vegetables' freshness and quality in seconds.
            </p>
          </div>

          <div className="p-6 bg-white shadow-smooth rounded-lg">
            <div className="flex items-center justify-start mb-6">
              <img
                src="https://via.placeholder.com/50"
                alt="Recipe Recommendations"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-xl font-bold text-textDark mb-2">
              Personalized Recipe Recommendations
            </h3>
            <p className="text-textDark">
              Discover recipes based on ingredients you already have.
            </p>
          </div>

          <div className="p-6 bg-white shadow-smooth rounded-lg">
            <div className="flex items-center justify-start mb-6">
              <img
                src="https://via.placeholder.com/50"
                alt="Reducing Food Waste"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-xl font-bold text-textDark mb-2">
              Reducing Food Waste
            </h3>
            <p className="text-textDark">
              Empower smarter choices to minimize food waste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Serve;
