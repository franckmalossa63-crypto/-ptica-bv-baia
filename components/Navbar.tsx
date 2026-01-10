
import React from 'react';
import { ViewType } from '../types';
import { CLINIC_INFO } from '../constants';

interface NavbarProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
  isAdmin: boolean;
  onToggleAdmin: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, isAdmin, onToggleAdmin }) => {
  return (
    <nav className="bg-white/80 backdrop-blur-xl border-b sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center cursor-pointer group" onClick={() => onNavigate(ViewType.HOME)}>
            <div className="bg-[#0033A0] p-2.5 rounded-xl text-white mr-3 shadow-lg shadow-blue-900/20 group-hover:rotate-6 transition-transform">
              <span className="font-black text-2xl tracking-tighter">BV</span>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl text-[#0033A0] leading-none">BAIA</span>
              <span className="font-bold text-[10px] text-gray-400 tracking-[0.3em] uppercase">Óptica Premium</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            <button 
              onClick={() => onNavigate(ViewType.HOME)}
              className={`${currentView === ViewType.HOME ? 'bg-[#0033A0] text-white' : 'text-gray-500 hover:bg-gray-100'} px-5 py-2.5 rounded-xl text-sm font-black transition-all`}
            >
              INÍCIO
            </button>
            <button 
              onClick={() => onNavigate(ViewType.CATALOG)}
              className={`${currentView === ViewType.CATALOG ? 'bg-[#0033A0] text-white' : 'text-gray-500 hover:bg-gray-100'} px-5 py-2.5 rounded-xl text-sm font-black transition-all`}
            >
              CATÁLOGO
            </button>
            <button 
              onClick={() => onNavigate(ViewType.BOOKING)}
              className={`${currentView === ViewType.BOOKING ? 'bg-[#0033A0] text-white' : 'text-gray-500 hover:bg-gray-100'} px-5 py-2.5 rounded-xl text-sm font-black transition-all`}
            >
              MARCAR
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={onToggleAdmin}
              className={`hidden sm:block px-4 py-2 text-[10px] rounded-full border-2 font-black transition-all uppercase tracking-widest ${isAdmin ? 'bg-yellow-50 border-yellow-500 text-yellow-600' : 'bg-gray-50 border-transparent text-gray-400 hover:border-gray-200'}`}
            >
              {isAdmin ? 'ADMIN' : 'EQUIPA'}
            </button>
            <a 
              href={`https://wa.me/${CLINIC_INFO.whatsapp}`}
              target="_blank"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl text-sm font-black transition-all shadow-xl shadow-green-500/30 flex items-center gap-2 active:scale-95"
            >
              <span className="hidden sm:inline">FALAR AGORA</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.204l-.651 2.375 2.431-.637c.881.479 1.878.746 2.962.747h.003c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.77-5.766zm3.377 8.203c-.145.405-.837.739-1.159.785-.322.046-.632.081-1.077-.064-.265-.086-.593-.198-1.011-.381-1.768-.773-2.912-2.571-2.999-2.686-.087-.115-.705-.935-.705-1.783 0-.848.441-1.265.599-1.433.158-.167.346-.209.46-.209s.23.001.329.006c.106.005.249-.04.39.297.145.347.497 1.21.541 1.297.044.086.073.187.014.302-.058.115-.087.187-.174.288-.087.101-.183.225-.26.302-.086.086-.176.18-.076.353.1.173.444.733.951 1.185.653.582 1.205.762 1.378.848.173.086.273.073.374-.044.101-.115.432-.505.548-.677.116-.173.232-.145.39-.086.158.058 1.001.472 1.174.558.173.086.288.13.332.203.044.073.044.419-.101.824z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
