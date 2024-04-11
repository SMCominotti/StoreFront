import React from 'react';
import Card from "./Card";

const products = [
  {
    img: "meat.jpg",
    description: " Grilled beef steak on the dark wooden surface",
    price: "€18.50",
    inventory: "20 dishes available"
  },
  {
    img: "chicken.jpg",
    description: "Chicken skewers with slices of sweet peppers and dill",
    price: "€14.20",
    inventory: "25 dishes available"
  },
  {
    img: "fresh-salad.jpg",
    description: "Fresh Salad",
    price: "€8.50",
    inventory: "40 dishes available"
  },
  {
    img: "pizza.jpg",
    description: "Italian Pizza",
    price: "€12.00",
    inventory: "40 dishes available"
  },
  {
    img: "chocolate-brownie.jpg",
    description: "Chocolate brownie",
    price: "€9.80",
    inventory: "50 dishes available"
  },
  {
    img: "pancakes.jpg",
    description: "Pancakes with strawberries and chocolate",
    price: "€7.50",
    inventory:  "40 dishes available"
  },
];

const ProductListCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <div key={index} className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
          <img src={product.img} alt={product.description} className="w-36 h-36 object-cover rounded-full" />
          <p className="text-lg">{product.description}</p>
          <p className="text-base text-gray-500">{product.price}</p>
          <p className="text-base text-gray-500">{product.inventory}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductListCard;

