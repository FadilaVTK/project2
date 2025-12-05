"use client";

import FoodCard from "../../components/FoodCard";
import { foods } from "../../data/foods";
import Protected from "../protected";

export default function MenuPage() {
  return (
    <Protected>
      <div>
        <h1 className="text-3xl text-orange-500 font-bold mb-6">Our Menu</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {foods.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </Protected>
  );
}
