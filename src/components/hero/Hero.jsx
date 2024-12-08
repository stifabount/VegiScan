import React from "react";
import HeroImage from "../../assets/image/hero.png";

const Hero = () => {
    return (
        <section className="bg-white">
            <div className="max-w-screen-xl mx-auto grid py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 px-4 md:px-6">
                <div className="place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl text-textDark font-extrabold tracking-tight leading-loose text-left md:text-5xl xl:text-6xl">
                    Revolutionize the Way You See Vegetables with VegiScan!
                </h1>
                <p className="max-w-2xl mb-6 text-textDark text-left lg:mb-8 md:text-lg lg:text-lg">
                    Diagnose quality, detect issues early, and discover recipes—all <br /> powered by AI. Reduce waste, support farmers, and embrace freshness today!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a
                    href="#"
                    className="inline-flex px-5 py-3 text-white font-medium text-center rounded-lg bg-primary-500 hover:bg-primary-600"
                    >
                    Explore Now
                    <svg
                        className="w-5 h-5 ml-2 mt-1 -mr-1 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                        ></path>
                    </svg>
                    </a>
                </div>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src={HeroImage} alt="Hero image" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
