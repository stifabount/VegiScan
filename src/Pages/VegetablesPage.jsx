import React, { useState } from "react";
import VegetablesCard from "../components/cards/VegetableCard";
import DetailCard from "../components/cards/DetailCard";

import broccoliImg from "../assets/image/broccoli.jpg";
import cabbageImg from "../assets/image/cabbage.jpg";
import mustardGreensImg from "../assets/image/mustard_greens.jpg";
import kailanImg from "../assets/image/kailan.jpg";
import bokChoyImg from "../assets/image/bok_choy.jpg";
import cassavaLeavesImg from "../assets/image/cassava_leaves.jpg";
import spinachGreenImg from "../assets/image/spinach_green.jpg";
import spinachRedImg from "../assets/image/spinach_red.jpg";
import waterSpinachImg from "../assets/image/water_spinach.jpg";

const Vegetables = () => {
  const [selectedVegetable, setSelectedVegetable] = useState(null);

  const vegetables = [
    {
      id: 1,
      name: "Broccoli",
      image: broccoliImg,
      description: "Broccoli is a nutrient-rich vegetable high in fiber and vitamin C, known for its green florets.",
      details: "Broccoli is a superfood that is rich in vitamins, minerals, and antioxidants. It helps boost immunity and supports overall health.",
    },
    {
      id: 2,
      name: "Cabbage",
      image: cabbageImg,
      description: "Cabbage is a leafy vegetable used in many cuisines, often consumed raw in salads or cooked in dishes.",
      details: "Broccoli is a superfood that is rich in vitamins, minerals, and antioxidants. It helps boost immunity and supports overall health.",
    },
    {
      id: 3,
      name: "Mustard Greens",
      image: mustardGreensImg,
      description: "Mustard greens are spicy, flavorful greens commonly used in soups, stir-fries, and salads.",
      details: "Broccoli is a superfood that is rich in vitamins, minerals, and antioxidants. It helps boost immunity and supports overall health.",
    },
    {
      id: 4,
      name: "Kailan",
      image: kailanImg,
      description: "Kailan, or Chinese broccoli, is a leafy green vegetable with thick stems, often stir-fried or steamed.",
      details: "Broccoli is a superfood that is rich in vitamins, minerals, and antioxidants. It helps boost immunity and supports overall health.",
    },
    {
      id: 5,
      name: "Bok Choy",
      image: bokChoyImg,
      description: "Bok choy is a popular Asian vegetable with crunchy stalks and tender green leaves, used in soups and stir-fries.",
      details: "Broccoli is a superfood that is rich in vitamins, minerals, and antioxidants. It helps boost immunity and supports overall health.",
    },
    {
      id: 6,
      name: "Cassava Leaves",
      color: "Green",
      image: cassavaLeavesImg,
      description: "Cassava leaves are used in many tropical cuisines, often cooked to remove bitterness and enhance flavor.",
      details: "Broccoli is a superfood that is rich in vitamins, minerals, and antioxidants. It helps boost immunity and supports overall health.",
    },
    {
      id: 7,
      name: "Spinach (Green)",
      color: "Green",
      image: spinachGreenImg,
      description: "Green spinach is a versatile leafy vegetable rich in iron and often used in salads, soups, and smoothies.",
      details: "Broccoli is a superfood that is rich in vitamins, minerals, and antioxidants. It helps boost immunity and supports overall health.",
    },
    {
      id: 8,
      name: "Spinach (Red)",
      color: "Red",
      image: spinachRedImg,
      description: "Red spinach, with its vibrant color, is a nutrient-dense vegetable popular in Asian and African dishes.",
      details: "Broccoli is a superfood that is rich in vitamins, minerals, and antioxidants. It helps boost immunity and supports overall health.",
    },
    {
      id: 9,
      name: "Water Spinach",
      color: "Green",
      image: waterSpinachImg,
      description: "Water spinach, also known as kangkong, is a popular vegetable in Southeast Asia, often stir-fried or used in soups.",
      details: "Broccoli is a superfood that is rich in vitamins, minerals, and antioxidants. It helps boost immunity and supports overall health.",
    },
  ];

  return (
    <section className="bg-white">
      {selectedVegetable ? (
        // Full-page DetailCard
        <DetailCard
          name={selectedVegetable.name}
          image={selectedVegetable.image}
          details={selectedVegetable.details}
          onClose={() => setSelectedVegetable(null)} // Kembali ke daftar
        />
      ) : (
        // Daftar sayuran
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mb-8 lg:mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-textDark">
              All About Vegetables for Freshness and Quality
            </h2>
            <p className="text-textDark sm:text-xl">
              Explore our vegetable collection for detailed information about quality, benefits, and more.
            </p>
          </div>

          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {vegetables.map((vegetable) => (
              <VegetablesCard
                key={vegetable.id}
                name={vegetable.name}
                image={vegetable.image}
                description={vegetable.description}
                onClick={() => setSelectedVegetable(vegetable)} // Pilih sayuran
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Vegetables;
