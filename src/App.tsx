import { useState } from 'react';
import Header from './components/Header';
import ProductSection from './components/ProductSection';
import Cart from './components/Cart';
import LocationModal from './components/LocationModal';
import InfoModal from './components/InfoModal';
import productsData from './data/products.json';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface CartItems {
  [key: string]: {
    id: string;
    name: string;
    price: number;
    quantity: number;
  };
}

function App() {
  const [activeSection, setActiveSection] = useState('pizzas');
  const [cartItems, setCartItems] = useState<CartItems>({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const allProducts = [...productsData.pizzas, ...productsData.bebidas, ...productsData.espaguetis] as Product[];

  const handleCartAdd = (productId: string) => {
    const product = allProducts.find(p => p.id === productId);
    if (product) handleAddToCart(product);
  };

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev[product.id];
      if (existing) {
        return {
          ...prev,
          [product.id]: {
            ...existing,
            quantity: existing.quantity + 1,
          },
        };
      }
      return {
        ...prev,
        [product.id]: {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        },
      };
    });
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prev) => {
      const existing = prev[productId];
      if (!existing) return prev;

      if (existing.quantity === 1) {
        const newCart = { ...prev };
        delete newCart[productId];
        return newCart;
      }

      return {
        ...prev,
        [productId]: {
          ...existing,
          quantity: existing.quantity - 1,
        },
      };
    });
  };

  const getCartQuantities = () => {
    const quantities: { [key: string]: number } = {};
    Object.values(cartItems).forEach((item) => {
      quantities[item.id] = item.quantity;
    });
    return quantities;
  };

  const getTotalCartCount = () => {
    return Object.values(cartItems).reduce((sum, item) => sum + item.quantity, 0);
  };

  const getSectionProducts = () => {
    return productsData[activeSection as keyof typeof productsData] as Product[];
  };

  const getSectionTitle = () => {
    const titles: { [key: string]: string } = {
      pizzas: 'Nuestras Pizzas',
      bebidas: 'Bebidas',
      espaguetis: 'Espaguetis',
    };
    return titles[activeSection];
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ backgroundImage: 'url(/bg.png)', backgroundRepeat: 'repeat', backgroundSize: 'auto' }}>
      <Header
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        cartCount={getTotalCartCount()}
        onCartClick={() => setIsCartOpen(true)}
        onInfoClick={() => setIsInfoOpen(true)}
        onLocationClick={() => setIsLocationOpen(true)}
      />

      <ProductSection
        title={getSectionTitle()}
        products={getSectionProducts()}
        cartItems={getCartQuantities()}
        onAdd={handleAddToCart}
        onRemove={handleRemoveFromCart}
      />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={Object.values(cartItems)}
        onAdd={handleCartAdd}
        onRemove={handleRemoveFromCart}
      />

      <LocationModal
        isOpen={isLocationOpen}
        onClose={() => setIsLocationOpen(false)}
      />

      <InfoModal
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
      />
    </div>
  );
}

export default App;
