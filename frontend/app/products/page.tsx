
//client component ki trh run krn h 
//.sort() unhi filtered products ka order change karta hai.
"use client";//tells nextjs that this component needs client side functionality

import { useState } from "react";//usestae data store and update
import { products } from "@/data/products";
import ProductCard from "@/components/productCard";
//Ye hamara reusable ProductCard component hai Iska kaam ek product ki UI/card display karna hai  Har product ke liye same component reuse hoga.
export default function ProductsPage() {

                          // Store what the user types
  const [search, setSearch] = useState("");//search-> stores what the user types  setsearch updates the search value initially search box empty
  const [selectedCategory, setSelectedCategory] = useState("All"); //selectedCategory stores the selected category.setSelectedCategory changes the selected category.means initially show every product.
  //User Electronics select karta hai: Ab sirf Electronics category ke products show honge. "All" = initially saari categories ke products show honge.
    const [sortBy, setSortBy] = useState("default");
 //sortBy current sorting option store karega. setSortBy sorting option update karega."default" ka matlab original order.
  
 
 // Filter products according to search
  const filteredProducts = products.filter((product) => {
  const matchesSearch = product.name
    .toLowerCase()
    .includes(search.toLowerCase());
//1. .toLowerCase() = text ko lowercase mein convert karta hai.
//.includes() = check karta hai ki search text product name mein present hai ya nahi.matchesSearch = result ko true ya false mein store karta hai.
  const matchesCategory =
    selectedCategory === "All" ||
    product.category === selectedCategory;

  return matchesSearch && matchesCategory;
});

const sortedProducts = [...filteredProducts].sort((a, b) => {
  if (sortBy === "low-to-high") {
    return a.price - b.price;//1000,3000 -> 1000-3000 -2000 measn cheap to 1st prod phle thn 2nd asc order
  }

  if (sortBy === "high-to-low") {
    return b.price - a.price;
  }

  if (sortBy === "name-az") {
    return a.name.localeCompare(b.name);
  }

  if (sortBy === "name-za") {
    return b.name.localeCompare(a.name);
  }

  return 0;
});

  return (
    <main className="min-h-screen bg-slate-950 px-8 py-12 text-white">

      <h1 className="text-3xl font-bold">
        All Products
      </h1>

      <p className="mt-3 text-slate-400">
        Explore our collection and find your favourite products.
      </p>

      {/* Search Bar */}
      <div className="mt-8">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
        />
      </div>
      <select
  value={selectedCategory}
  onChange={(e) => setSelectedCategory(e.target.value)}
  className="mt-4 rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white"
>
  <option value="All">All Categories</option>
  <option value="Electronics">Electronics</option>
  <option value="Footwear">Footwear</option>
  <option value="Fashion">Fashion</option>
</select>

{/* Sorting Dropdown */}
<select
  value={sortBy}
  onChange={(e) => setSortBy(e.target.value)}
  className="mt-4 ml-3 rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white"
>
  <option value="default">Default Sorting</option>
  <option value="low-to-high">Price: Low to High</option>
  <option value="high-to-low">Price: High to Low</option>
  <option value="name-az">Name: A to Z</option>
  <option value="name-za">Name: Z to A</option>
</select>


      <section className="mt-10">

        <h2 className="mb-6 text-2xl font-semibold">
          Explore Our Products
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

        {sortedProducts.length === 0 && (
          <p className="mt-8 text-center text-slate-400">
            No products found.
          </p>
        )}

      </section>

    </main>
  );
}


