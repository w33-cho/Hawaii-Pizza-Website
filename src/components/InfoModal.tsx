import { X } from 'lucide-react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InfoModal({ isOpen, onClose }: InfoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>

      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-t-2xl flex items-center justify-between">
          <h2 className="text-2xl font-bold">¡Bienvenidos a Hawaii Pizza!</h2>
          <button
            onClick={onClose}
            className="hover:bg-white/20 p-2 rounded-full transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="space-y-4 text-gray-600">
            <p className="text-lg">
              En el corazón del barrio San Juan de Bayamo, hemos creado un espacio donde los sabores se encuentran. En Hawaii Pizza preparamos pizzas con ingredientes frescos y una masa irresistible, junto a unos espaguetis napolitanos.
            </p>
            <p className="text-lg">
              Para acompañar, disfruta de nuestra variedad de jugos, refrescos, maltas y cerveza bien fría.
            </p>
            <p className="text-lg">
              Ideal para compartir en familia o con amigos. ¡Te esperamos en Hawaii Pizza… tu rincón favorito en Bayamo!
            </p>
            <p className="text-lg">
              📍 Barrio San Juan, Bayamo
            </p>
            <p className="text-lg">
              🍕🍝 ¡Sabor que une! 🍻
            </p>
            <p className="text-lg">
              Contamos con servicio a domicilio 🛵 para más información llamar a los teléfonos 53597272 - 55444746, será un placer atenderle 🙏🏼
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}