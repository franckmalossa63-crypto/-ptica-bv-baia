
import React, { useState, useEffect } from 'react';
import { ViewType, Frame } from './types';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Catalog from './components/Catalog';
import VirtualTryOn from './components/VirtualTryOn';
import Booking from './components/Booking';
import Dashboard from './components/Dashboard';
import Checkout from './components/Checkout';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>(ViewType.HOME);
  const [selectedFrame, setSelectedFrame] = useState<Frame | null>(null);
  const [tryOnFrame, setTryOnFrame] = useState<Frame | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .animate-fade-in { animation: fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .mirror { transform: scaleX(-1); }
      ::-webkit-scrollbar { width: 8px; }
      ::-webkit-scrollbar-track { background: #f1f1f1; }
      ::-webkit-scrollbar-thumb { background: #0033A0; border-radius: 10px; }
      ::selection { background: #0033A0; color: white; }
    `;
    document.head.appendChild(style);
  }, []);

  const handleNavigate = (view: ViewType) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderView = () => {
    switch (currentView) {
      case ViewType.HOME:
        return <Home onNavigate={handleNavigate} />;
      case ViewType.CATALOG:
        return (
          <Catalog 
            onSelectFrame={(frame) => {
              setSelectedFrame(frame);
              setCurrentView(ViewType.CHECKOUT);
            }} 
            onTryOn={(frame) => setTryOnFrame(frame)}
          />
        );
      case ViewType.BOOKING:
        return <Booking />;
      case ViewType.ADMIN_DASHBOARD:
        return <Dashboard />;
      case ViewType.CHECKOUT:
        return selectedFrame ? (
          <Checkout 
            frame={selectedFrame} 
            onCancel={() => setCurrentView(ViewType.CATALOG)}
            onSuccess={() => {
              alert("Pagamento efetuado com sucesso via GPO! Receberá a fatura digital e confirmação no seu WhatsApp em instantes.");
              setCurrentView(ViewType.HOME);
            }}
          />
        ) : <Catalog onSelectFrame={setSelectedFrame} onTryOn={setTryOnFrame} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col selection:bg-[#0033A0] selection:text-white">
      <Navbar 
        currentView={currentView} 
        onNavigate={handleNavigate} 
        isAdmin={isAdmin}
        onToggleAdmin={() => {
          const pass = prompt("Introduza a palavra-passe de equipa BV BAIA (Admin):");
          if (pass === "baia2026") {
            setIsAdmin(!isAdmin);
            setCurrentView(ViewType.ADMIN_DASHBOARD);
          } else if (pass !== null) {
            alert("Acesso Negado. Credenciais inválidas.");
          }
        }}
      />
      
      <main className="flex-grow pb-24 md:pb-0">
        {renderView()}
      </main>

      {tryOnFrame && (
        <VirtualTryOn 
          frame={tryOnFrame} 
          onClose={() => setTryOnFrame(null)} 
        />
      )}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
        <a 
          href="https://wa.me/932964637" 
          target="_blank" 
          className="bg-green-500 text-white p-5 rounded-[24px] shadow-[0_20px_50px_rgba(34,197,94,0.4)] hover:scale-110 active:scale-95 transition-all group relative"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.204l-.651 2.375 2.431-.637c.881.479 1.878.746 2.962.747h.003c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.77-5.766zm3.377 8.203c-.145.405-.837.739-1.159.785-.322.046-.632.081-1.077-.064-.265-.086-.593-.198-1.011-.381-1.768-.773-2.912-2.571-2.999-2.686-.087-.115-.705-.935-.705-1.783 0-.848.441-1.265.599-1.433.158-.167.346-.209.46-.209s.23.001.329.006c.106.005.249-.04.39.297.145.347.497 1.21.541 1.297.044.086.073.187.014.302-.058.115-.087.187-.174.288-.087.101-.183.225-.26.302-.086.086-.176.18-.076.353.1.173.444.733.951 1.185.653.582 1.205.762 1.378.848.173.086.273.073.374-.044.101-.115.432-.505.548-.677.116-.173.232-.145.39-.086.158.058 1.001.472 1.174.558.173.086.288.13.332.203.044.073.044.419-.101.824zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.176L2 22l4.957-1.301C8.386 21.531 10.125 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.634 0-3.16-.435-4.484-1.196l-.322-.184-2.96.777.791-2.883-.203-.322C4.066 15.06 3.5 13.58 3.5 12c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5z" />
          </svg>
          <span className="absolute right-full mr-6 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-5 py-3 rounded-2xl font-black text-xs shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none uppercase tracking-widest">
            Suporte BV BAIA
          </span>
        </a>
      </div>

      {/* Mobile Tab Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-around items-center z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
         <button onClick={() => handleNavigate(ViewType.HOME)} className={`flex flex-col items-center gap-1 ${currentView === ViewType.HOME ? 'text-[#0033A0]' : 'text-gray-400'}`}>
            <div className="w-6 h-6 bg-current rounded-md opacity-20"></div>
            <span className="text-[10px] font-black uppercase">Início</span>
         </button>
         <button onClick={() => handleNavigate(ViewType.CATALOG)} className={`flex flex-col items-center gap-1 ${currentView === ViewType.CATALOG ? 'text-[#0033A0]' : 'text-gray-400'}`}>
            <div className="w-6 h-6 bg-current rounded-md opacity-20"></div>
            <span className="text-[10px] font-black uppercase">Catálogo</span>
         </button>
         <button onClick={() => handleNavigate(ViewType.BOOKING)} className={`flex flex-col items-center gap-1 ${currentView === ViewType.BOOKING ? 'text-[#0033A0]' : 'text-gray-400'}`}>
            <div className="w-6 h-6 bg-current rounded-md opacity-20"></div>
            <span className="text-[10px] font-black uppercase">Agendar</span>
         </button>
         <button onClick={() => handleNavigate(ViewType.ADMIN_DASHBOARD)} className={`flex flex-col items-center gap-1 ${currentView === ViewType.ADMIN_DASHBOARD ? 'text-[#0033A0]' : 'text-gray-400'}`}>
            <div className="w-6 h-6 bg-current rounded-md opacity-20"></div>
            <span className="text-[10px] font-black uppercase">Gestão</span>
         </button>
      </div>
    </div>
  );
};

export default App;
