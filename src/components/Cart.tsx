import { X, Plus, Minus, Send } from 'lucide-react';
import { useState } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onAdd: (productId: string) => void;
  onRemove: (productId: string) => void;
}

export default function Cart({ isOpen, onClose, items, onAdd, onRemove }: CartProps) {
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleWhatsAppOrder = () => {
    if (!customerName || !customerAddress || !customerPhone) {
      alert('Por favor completa todos los campos');
      return;
    }
    if (customerPhone.length !== 8) {
      alert('El número de teléfono debe tener exactamente 8 dígitos');
      return;
    }

    const orderDetails = items
      .map((item) => `${item.quantity}x ${item.name} - $${item.price * item.quantity} CUP`)
      .join('\n');

    const message = `🍕 *NUEVO PEDIDO* 🍕\n\n*Cliente:* ${customerName}\n*Teléfono:* ${customerPhone}\n*Dirección:* ${customerAddress}\n\n*PEDIDO:*\n${orderDetails}\n\n*TOTAL: $${total} CUP*`;

    const whatsappNumber = '53597272';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />

      <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 overflow-y-auto">
        <div className="sticky top-0 bg-green-600 text-white p-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Tu Pedido</h2>
          <button
            onClick={onClose}
            className="hover:bg-green-700 p-2 rounded-full transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4">
          {items.length === 0 ? (
            <p className="text-center text-gray-500 py-8">Tu carrito está vacío</p>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-50 rounded-lg p-4 flex items-center justify-between"
                  >
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800">{item.name}</h3>
                      <p className="text-green-600 font-semibold">
                        ${item.price} CUP × {item.quantity}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onRemove(item.id)}
                        className="bg-red-500 hover:bg-red-600 text-white p-1 rounded transition-colors duration-200"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-bold text-lg w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onAdd(item.id)}
                        className="bg-green-500 hover:bg-green-600 text-white p-1 rounded transition-colors duration-200"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t-2 border-gray-200 pt-4 mb-6">
                <div className="flex items-center justify-between text-xl font-bold">
                  <span>Total:</span>
                  <span className="text-green-600">${total} CUP</span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-lg text-gray-800">Datos de Entrega</h3>

                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                />

                <input
                  type="tel"
                  placeholder="Ej: 53597272"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value.replace(/\D/g, '').slice(0, 8))}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                />

                <textarea
                  placeholder="Tu dirección"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none resize-none"
                />

                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  Enviar Pedido por WhatsApp
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
