//We need a separate file to store all our product information. Later, we'll fetch this information from PostgreSQL.
//initially we add 4 products only
//Allows other files to use this data.
// Array containing multiple products.
//{} — Each object represents one product.
//product data bnaya
export const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2499,
    category: "Electronics",
    image: "/products/headphones.jpg",
    description: "Premium wireless headphones with clear sound.",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 3999,
    category: "Electronics",
    image: "/products/watch.jpg",
    description: "Smart watch with fitness tracking features.",
    rating: 4.3,
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 1999,
    category: "Footwear",
    image: "/products/shoes.jpg",
    description: "Comfortable shoes for everyday running.",
    rating: 4.4,
  },
  {
    id: 4,
    name: "Backpack",
    price: 1499,
    category: "Fashion",
    image: "/products/backpack.jpg",
    description: "Stylish backpack for everyday use.",
    rating: 4.2,
  },
];
