"use client";

import { useParams } from "next/navigation";
import { foods } from "../../../data/foods";
import { restaurants } from "../../../data/restaurants";
import Protected from "../../protected";
import Link from "next/link";
import FoodCard from "../../../components/FoodCard";

export default function CategoryPage() {
  const { category } = useParams();

  const items = foods.filter(
    f => f.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <Protected>
      <div className="space-y-6 mt-6">

        <h1 className="text-3xl font-bold capitalize">
          {category} Options
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map(item => {
            const restaurant = restaurants.find(
              r => r.id === item.restaurantId
            );

            return (
              <Link key={item.id} href={`/food/${item.id}`}>
                <FoodCard item={item} />
              </Link>
            );
          })}
        </div>

      </div>
    </Protected>
  );
}
