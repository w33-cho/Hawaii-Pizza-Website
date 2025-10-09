import ProductCard from './ProductCard';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
  cartItems: { [key: string]: number };
  onAdd: (product: Product) => void;
  onRemove: (productId: string) => void;
}

export default function ProductSection({
  title,
  products,
  cartItems,
  onAdd,
  onRemove
}: ProductSectionProps) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-orange-400">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              quantity={cartItems[product.id] || 0}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
