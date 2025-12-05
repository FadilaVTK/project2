"use client";

import { useParams } from "next/navigation";
import { foods } from "../../../data/foods";
import { restaurants } from "../../../data/restaurants";
import Protected from "../../protected";
import Link from "next/link";
import FoodCard from "../../../components/FoodCard";

export default function FoodDetails() {
  const { id } = useParams();
  const foodId = parseInt(id);

  const food = foods.find(f => f.id === foodId);

  const matchingFoods = foods.filter(
    f => f.name.toLowerCase() === food.name.toLowerCase()
  );

  const foodsWithRestaurant = matchingFoods.map(f => {
    const r = restaurants.find((res) => res.id === f.restaurantId);
    return { ...f, restaurant: r };
  });

  return (
    <Protected>
      <div className="space-y-6 mt-6 max-w-2xl mx-auto">

        <img
          src={food.image}
          className="w-full h-60 object-cover rounded-xl"
        />

        <h1 className="text-3xl font-bold">{food.name}</h1>
        <p className="text-red-500 text-xl font-semibold">₹{food.price}</p>

        <h2 className="text-2xl font-semibold mt-6">Available At</h2>

        <div className="space-y-5">
          {foodsWithRestaurant.map((item) => (
            <Link key={item.id} href={`/restaurant/${item.restaurant.id}`}>
              <div className="border rounded-xl p-4 bg-white shadow-sm hover:shadow-md flex gap-4">

                <img
                  src={item.image}
                  className="w-28 h-28 object-cover rounded-lg"
                />

                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-red-500 font-bold">₹{item.price}</p>
                  <p className="text-gray-600 mt-1">
                    {item.restaurant.name}
                  </p>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </Protected>
  );
}
