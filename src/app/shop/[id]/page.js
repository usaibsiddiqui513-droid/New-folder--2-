import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import ProductDetailClient from "@/components/ProductDetailClient";
import { products } from "@/data/products";

// Statically prerender all 16 product pages for maximum performance
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

// Generate dynamic SEO metadata
export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return {
      title: "Product Not Found — NexaStore",
      description: "The requested product does not exist in our catalog.",
    };
  }

  return {
    title: `${product.name} — NexaStore`,
    description: product.shortDesc,
    openGraph: {
      title: `${product.name} | NexaStore`,
      description: product.shortDesc,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <div className="bg-white rounded-3xl border border-slate-200 p-12 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mx-auto mb-4">
            <ShoppingBag className="w-8 h-8 opacity-60" />
          </div>
          <h1 className="text-2xl font-black text-slate-900 mb-2">
            Product Not Found
          </h1>
          <p className="text-sm text-slate-500 max-w-md mx-auto mb-6 leading-relaxed">
            We couldn&apos;t find any item matching the product identifier &ldquo;{id}&rdquo;. It may have been discontinued or moved to a different category.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-violet-600/30 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Shop Catalog</span>
          </Link>
        </div>
      </div>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return <ProductDetailClient product={product} related={related} />;
}
