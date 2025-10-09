import { ShoppingCart, MapPin, Info } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  cartCount: number;
  onCartClick: () => void;
  onInfoClick: () => void;
  onLocationClick: () => void;
}

export default function Header({ activeSection, onSectionChange, cartCount, onCartClick, onInfoClick, onLocationClick }: HeaderProps) {
  const sections = [
    { id: 'pizzas', name: 'Pizzas' },
    { id: 'bebidas', name: 'Bebidas' },
    { id: 'espaguetis', name: 'Espaguetis' }
  ];

  return (
    <header className="bg-yellow-400 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src='/1.png' alt='image' className='w-16 h-8 lg:w-32 lg:h-16'/>
              <img src='/2.png' alt='image' className='w-20 h-8 lg:w-40 lg:h-16'>
              </img>

          </div>

          <nav className="hidden md:flex items-center gap-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                className={`text-lg font-medium transition-all duration-200 px-4 py-2 rounded-lg ${
                  activeSection === section.id
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'hover:bg-green-500'
                }`}
              >
                {section.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <button
              onClick={onInfoClick}
              className="bg-orange-500 hover:bg-orange-600 p-2 md:p-3 rounded-full transition-all duration-200 shadow-lg"
            >
              <Info className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <button
              onClick={onLocationClick}
              className="bg-orange-500 hover:bg-orange-600 p-2 md:p-3 rounded-full transition-all duration-200 shadow-lg"
            >
              <MapPin className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <button
              onClick={onCartClick}
              className="relative bg-orange-500 hover:bg-orange-600 p-2 md:p-3 rounded-full transition-all duration-200 shadow-lg"
            >
              <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        <nav className="md:hidden flex gap-2 mt-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={`flex-1 text-sm font-medium transition-all duration-200 px-3 py-2 rounded-lg ${
                activeSection === section.id
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'bg-green-500 hover:bg-green-600'
              }`}
            >
              {section.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
