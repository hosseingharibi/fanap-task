import type { Route } from "./+types/home";
import { useParams } from "react-router";
import ProductDetails from "../../components/ProductDetails";
import ProductDetailsSkeleton from "../../components/ProductDetailsSkeleton";
import { useEffect, useState } from "react";
import type { Product } from "~/types/product";

export function meta({}: Route.MetaArgs) {
  const { id } = useParams();
  return [{ title: id ? `Fanap Task - Product ID: ${id}` : "Product ID not found" }];
}

export default function ProductDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("Product ID not found");
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error("Error fetching product");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
        setError("An error occurred while fetching the product data.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <ProductDetailsSkeleton />;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!product) return null;

  return <ProductDetails product={product} />;
}
