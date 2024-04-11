import React from 'react';
import Car from "./Car.jsx";

const products = [
  {
    img: "meat.jpg",
    description: "Grilled beef steak...",
    price: "€18.50",
    inventory: 2
  },
  {
    img: "fresh-salad.jpg",
    description: "Fresh Salad",
    price: "€8.50",
    inventory: 2
  },
  {
    img: "chocolate-brownie.jpg",
    description: "Chocolate brownie",
    price: "€9.80",
    inventory: 1
  },
  {
    img: "pancakes.jpg",
    description: "Pancakes with strawberries...",
    price: "€7.50",
    inventory: 1
  },
];

const ProductListCar = () => {
  return (
    <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
      {products.map((product, index) => (
        <Car key={index} img={product.img} description={product.description} price={product.price} inventory={product.inventory} />
      ))}
    </div>
  );
};

export default ProductListCar;
