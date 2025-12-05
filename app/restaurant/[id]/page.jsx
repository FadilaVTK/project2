"use client";

import { useParams } from "next/navigation";
import { foods } from "../../../data/foods";
import { restaurants } from "../../../data/restaurants";
import FoodCard from "../../../components/FoodCard";
import Protected from "../../protected";
import Link from "next/link";

export default function RestaurantPage() {
  const { id } = useParams();
  const restaurantId = parseInt(id);

  const restaurant = restaurants.find(r => r.id === restaurantId);
  const restaurantFoods = foods.filter(f => f.restaurantId === restaurantId);

  return (
    <Protected>
      <div className="space-y-6 mt-4">
        
        <img
          src={restaurant.image}
          className="w-full h-56 object-cover rounded-xl"
        />

        <h1 className="text-3xl font-bold">{restaurant.name}</h1>

        <h2 className="text-2xl font-semibold mt-4">Menu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {restaurantFoods.map(item => (
            <Link key={item.id} href={`/food/${item.id}`}>
              <FoodCard item={item} />
            </Link>
          ))}
        </div>

      </div>
    </Protected>
  );
}
