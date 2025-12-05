"use client";

import { restaurants } from "../data/restaurants";

export default function FoodCard({ item }) {

  // Find the restaurant this food belongs to
  const restaurant = restaurants.find(r => r.id === item.restaurantId);

  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
      <img
        src={item.image}
        alt={item.name}
        className="w-full aspect-square object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg">{item.name}</h3>

        {/* RESTAURANT NAME */}
        {restaurant && (
          <p className="text-gray-600 text-sm mt-1">
            {restaurant.name}
          </p>
        )}

        <p className="text-red-500 font-bold mt-1">₹{item.price}</p>

        <button className="mt-3 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
