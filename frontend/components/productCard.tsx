//Instead of writing the same product-card design repeatedly, we'll create one reusable component that can display any product.
//card k design
type Product = {//define structure of 1 product
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  rating: number;
};

type ProductCardProps = { //Defines what information our component expects to receive.
  product: Product;//product = Variable/prop ka naam  Product = Us variable mein kis type ka data aayega.
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-blue-500 transition">

      {/* Product Image */}
      <div className="mb-4 h-48 overflow-hidden rounded-lg bg-slate-800">
      <img
        src={product.image}//Takes image path from products.ts
        alt={product.name}//Uses product name as alternative text
        className="h-full w-full object-contain"
      />
      </div>

      {/* Product Details */}
      <p className="text-sm text-blue-400">
        {product.category}
      </p>

      <h2 className="mt-2 text-lg font-semibold">
        {product.name}
      </h2>

      <p className="mt-2 text-xl font-bold">
        ₹{product.price.toLocaleString("en-IN")}
      </p>

      <p className="mt-2 text-sm text-slate-400">
        ⭐ {product.rating} / 5
      </p>

      <button className="mt-4 w-full rounded-lg bg-blue-600 py-2 hover:bg-blue-700">
        View Details
      </button>

    </div>
  );
}
