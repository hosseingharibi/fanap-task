import type { Route } from "./+types/home";
import ProductList from "../components/ProductList";
import { useProducts } from "../hooks/useProducts";
import { useState } from "react";
import Pagination from "~/components/Pagination";
import ProductItemSkeleton from "../components/ProductItemSkeleton";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Fanap Task - Product list" }];
}

export default function Home() {
  const PAGE_SIZE = 10;
  const [page, setPage] = useState(1);
  const { products, total, loading } = useProducts(page, PAGE_SIZE);

  const totalPages = Math.ceil(total / PAGE_SIZE);
  return (
    <main className="py-20">
      <h1 className="mb-12 text-center font-sans text-5xl font-bold text-gray-900">Product List</h1>
      
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          Array.from({ length: PAGE_SIZE }).map((_, index) => <ProductItemSkeleton key={index} />)
        ) : (
          <ProductList products={products} />
        )}
      </div>

      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </main>
  );
}
