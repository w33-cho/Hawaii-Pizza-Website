import { Plus, Minus } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  quantity: number;
  onAdd: (product: Product) => void;
  onRemove: (productId: string) => void;
}

export default function ProductCard({ product, quantity, onAdd, onRemove }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-72 overflow-hidden bg-gray-200">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=400';
          }}
        />
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">${product.price} CUP</span>

          <div className="flex items-center gap-2">
            {quantity > 0 && (
              <>
                <button
                  onClick={() => onRemove(product.id)}
                  className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-colors duration-200"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-bold text-lg w-8 text-center">{quantity}</span>
              </>
            )}
            <button
              onClick={() => onAdd(product)}
              className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg transition-colors duration-200"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
