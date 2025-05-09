import { useEffect, useState } from "react";
import type { Product } from "~/types/product";

const PRODUCTS_KEY = "cached_products";

export const useProducts = (page: number, limit: number = 10) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      const skip = (page - 1) * limit;
      const cacheKey = `${PRODUCTS_KEY}_page_${page}_limit_${limit}`;
      const cachedData = localStorage.getItem(cacheKey);

      if (cachedData) {
        const parsed = JSON.parse(cachedData);
        setProducts(parsed.products);
        setTotal(parsed.total);
        setLoading(false);
      } else {
        try {
          const res = await fetch(
            `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
          );
          const data = await res.json();
          setProducts(data.products);
          setTotal(data.total);
          localStorage.setItem(cacheKey, JSON.stringify(data));
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProducts();
  }, [page, limit]);

  return { products, total, loading };
};
