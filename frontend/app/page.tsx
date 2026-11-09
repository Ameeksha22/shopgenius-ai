//navbar contain logo,home,products,search,signin,categoriess,deal,cart

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-slate-800">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-400">
          ShopGenius AI
        </h1>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 text-slate-300">
          <a href="#" className="hover:text-blue-400">Home</a>
          <a href="/products" className="hover:text-blue-400">Products</a>
          <a href="#" className="hover:text-blue-400">Categories</a>
        </div>

        <input
        type="text"
        placeholder="Search products..."
        className="w-48 rounded-lg bg-slate-800 px-4 py-2 text-white outline-none"
        />

        {/* Cart Signin*/}
        <div className="flex items-center gap-3">
        <button className="rounded-lg border border-blue-500 px-4 py-2 text-blue-400">
        Sign In
        </button>

        <button className="rounded-lg bg-blue-600 px-5 py-2 hover:bg-blue-700">
          Cart (0)
        </button>
        </div>

      </nav>

      
{/* Hero Section */}
<section className="px-8 py-24 text-center">

  <p className="mb-4 text-sm font-semibold tracking-widest text-blue-400">
    SMART SHOPPING STARTS HERE
  </p>

  <h2 className="mb-6 text-4xl font-bold md:text-6xl">
    Discover Products with
    <span className="text-blue-400"> ShopGenius AI</span>
  </h2>

  <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-400">
    Find the perfect products with your personal AI shopping assistant.
    Explore, compare and shop smarter.
  </p>

  <button className="rounded-lg bg-blue-600 px-8 py-3 font-semibold hover:bg-blue-700 transition">
    Start Shopping
  </button>

    </section>
    


{/* Categories Section */}
<section className="px-8 py-16">

  <div className="mb-10 text-center">
    <h2 className="text-3xl font-bold">
      Shop by Category
    </h2>

    <p className="mt-3 text-slate-400">
      Explore products from your favourite categories.
    </p>
  </div>

  <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

    {["Electronics", "Fashion", "Footwear", "Home & Living"].map((category) => (
      <div
        key={category}
        className="rounded-xl border border-slate-800 bg-slate-900 p-8 text-center hover:border-blue-500 transition"
      >
        <h3 className="text-lg font-semibold">
          {category}
        </h3>
      </div>
    ))}

  </div>

</section>


{/* Featured Products Section */}
<section className="px-8 py-16">

  <div className="mb-10 flex items-center justify-between">
    <div>
      <h2 className="text-3xl font-bold">
        Featured Products
      </h2>

      <p className="mt-2 text-slate-400">
        Handpicked products for you.
      </p>
    </div>

    <a href="/products" className="text-blue-400 hover:text-blue-300">
      View All →
    </a>
  </div>

  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

    {[
      { name: "Wireless Headphones", price: "₹2,499", category: "Electronics" },
      { name: "Smart Watch", price: "₹3,999", category: "Electronics" },
      { name: "Running Shoes", price: "₹1,999", category: "Footwear" },
      { name: "Backpack", price: "₹1,499", category: "Fashion" },
    ].map((product) => (
      <div
        key={product.name}
        className="rounded-xl border border-slate-800 bg-slate-900 p-6 hover:border-blue-500 transition"
      >
        <div className="mb-5 flex h-36 items-center justify-center rounded-lg bg-slate-800 text-slate-500">
          Product Image
        </div>

        <p className="text-sm text-blue-400">
          {product.category}
        </p>

        <h3 className="mt-2 text-lg font-semibold">
          {product.name}
        </h3>

        <p className="mt-2 font-bold">
          {product.price}
        </p>

        <button className="mt-4 w-full rounded-lg bg-blue-600 py-2 hover:bg-blue-700">
          View Product
        </button>
      </div>
    ))}

  </div>

</section>


{/* Footer Section */}
<footer className="border-t border-slate-800 bg-slate-900 px-8 py-12">

  <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

    {/* Company Information */}
    <div>
      <h2 className="text-2xl font-bold text-blue-400">
        ShopGenius AI
      </h2>

      <p className="mt-4 text-slate-400">
        Your intelligent shopping companion.
        Discover and shop smarter with AI.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="mb-4 text-lg font-semibold">
        Quick Links
      </h3>

      <div className="flex flex-col gap-3 text-slate-400">
        <a href="/" className="hover:text-blue-400">Home</a>
        <a href="/products" className="hover:text-blue-400">Products</a>
        <a href="/categories" className="hover:text-blue-400">Categories</a>
      </div>
    </div>

    {/* Customer Support */}
    <div>
      <h3 className="mb-4 text-lg font-semibold">
        Customer Support
      </h3>

      <div className="flex flex-col gap-3 text-slate-400">
        <p>Contact Us</p>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
      </div>
    </div>

  </div>

  <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
    © 2026 ShopGenius AI. All rights reserved.
  </div>

</footer>


    </main>
  );
}

// feature product section m seelected famous prod we want to add on home screeen they will be appear