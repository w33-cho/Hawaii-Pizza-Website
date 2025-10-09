import { X } from 'lucide-react';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LocationModal({ isOpen, onClose }: LocationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>

      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-t-2xl flex items-center justify-between">
          <h2 className="text-2xl font-bold">Nuestra Ubicación</h2>
          <button
            onClick={onClose}
            className="hover:bg-white/20 p-2 rounded-full transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Hawaii Pizza</h3>
            <p className="text-gray-600 mb-4">
               #528, esquina Zenea y Amado Estévez<br />
              Bayamo, Granma, Cuba
            </p>
            <p className="text-gray-700 font-semibold">
              📞 Teléfono: +53 53597272 +53 55444746
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233.7744284817027!2d-76.64340075105426!3d20.366768322164514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ed1ef00013bf0a7%3A0x3f6144d99b7a58f!2sHawaii%20Pizza!5e0!3m2!1ses-419!2scu!4v1759968675809!5m2!1ses-419!2scu"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Hawaii Pizza"
            ></iframe>
          </div>

          <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-gray-700">
              <span className="font-semibold">Horario:</span><br />
              Lunes a Domingo: 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
