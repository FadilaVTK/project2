"use client";

import Link from "next/link";
import { restaurants } from "../data/restaurants";
import { foods } from "../data/foods";
import Protected from "./protected";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { categoryImages} from "../data/categoryImages";
import Banner from "../components/Banner";

export default function Home() {
  const { user } = useContext(AuthContext);
  const categories = [...new Set(foods.map(f => f.category))];
  return (
    <Protected>
      <div className="space-y-10 mt-6">
        {user && (
          <p className="text-base">
            <b className="text-orange-600">Welcome Back , {user.name}!</b>
          </p>
        )} 
        <Banner />
        <section>
          <h2 className="text-2xl text-orange-500 font-bold mb-4">Top Restaurants</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {restaurants.map(r => (
              <Link key={r.id} href={`/restaurant/${r.id}`}>
                <div className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md">
                  <img
                    src={r.image}
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                  <h3 className="font-semibold text-lg mt-2">{r.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl text-orange-500 font-bold mb-4">Popular Foods</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {categories.map((cat, i) => (

              <Link key={i} href={`/category/${cat}`}>
                <div className="bg-white  rounded-xl p-4 text-center">
                  
                  <img
                    src={categoryImages.find(c => c.name.toLowerCase() === cat.toLowerCase())?.image}
                    className="w-full aspect-square object-cover rounded-full"
                  />
                  
                  <h3 className="font-semibold text-lg mt-2">{cat}</h3>
                </div>
              </Link>

            ))}
          </div>
        </section>

      </div>
    </Protected>
  );
}
