import "dotenv/config";
import prisma from "../lib/prisma";
import { products } from "../data/products";

async function main() {
  // Insert products into PostgreSQL
  const result = await prisma.product.createMany({
    data: products.map((product) => ({
      ...product,
      price: product.price.toString(),
    })),
    skipDuplicates: true,
  });

  console.log(`${result.count} products inserted successfully!`);
}

main()
  .catch((error) => {
    console.error("Error inserting products:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
