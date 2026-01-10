
import React, { useState } from 'react';
import { Frame } from '../types';

interface CheckoutProps {
  frame: Frame;
  onSuccess: () => void;
  onCancel: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ frame, onSuccess, onCancel }) => {
  const [method, setMethod] = useState<'MCX' | 'VISA' | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onSuccess();
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 animate-fade-in">
      <div className="bg-white rounded-3xl shadow-xl border overflow-hidden">
        <div className="p-8 border-b bg-gray-50 flex justify-between items-center">
          <h2 className="text-2xl font-black">Finalizar Compra</h2>
          <button onClick={onCancel} className="text-gray-400 hover:text-gray-900">Cancelar</button>
        </div>
        
        <div className="p-8">
          <div className="flex items-center gap-6 mb-10 p-4 bg-indigo-50 rounded-2xl">
             <img src={frame.image} className="w-24 h-24 rounded-xl object-cover" />
             <div>
               <div className="text-sm font-bold text-indigo-600 uppercase mb-1">{frame.brand}</div>
               <div className="text-xl font-bold">{frame.name}</div>
               <div className="text-2xl font-black text-gray-900">{frame.price.toLocaleString()} Kz</div>
             </div>
          </div>

          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Escolha o Método de Pagamento</h3>
          
          <div className="grid grid-cols-2 gap-4 mb-10">
            <button 
              onClick={() => setMethod('MCX')}
              className={`p-6 rounded-2xl border-2 transition-all flex flex-col items-center gap-4 ${
                method === 'MCX' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-100 hover:bg-gray-50'
              }`}
            >
              <div className="w-16 h-10 bg-blue-600 rounded flex items-center justify-center font-bold text-white text-[10px] uppercase italic">MCX Express</div>
              <span className="font-bold text-sm">Multicaixa Express</span>
            </button>
            <button 
              onClick={() => setMethod('VISA')}
              className={`p-6 rounded-2xl border-2 transition-all flex flex-col items-center gap-4 ${
                method === 'VISA' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-100 hover:bg-gray-50'
              }`}
            >
              <div className="w-16 h-10 bg-indigo-900 rounded flex items-center justify-center font-bold text-white text-xs">VISA</div>
              <span className="font-bold text-sm">Cartão VISA / GPO</span>
            </button>
          </div>

          {method === 'MCX' && (
            <div className="animate-fade-in space-y-4 mb-10">
               <label className="text-xs font-bold text-gray-500 uppercase">Número Associado ao MCX Express</label>
               <input type="tel" className="w-full p-5 bg-gray-50 border rounded-2xl outline-none focus:ring-2 focus:ring-indigo-600" placeholder="9xx xxx xxx" />
               <p className="text-xs text-gray-500 italic">Receberá uma notificação no seu telemóvel para autorizar.</p>
            </div>
          )}

          {method === 'VISA' && (
            <div className="animate-fade-in space-y-4 mb-10">
               <div className="space-y-2">
                 <label className="text-xs font-bold text-gray-500 uppercase">Número do Cartão</label>
                 <input type="text" className="w-full p-4 bg-gray-50 border rounded-2xl outline-none" placeholder="xxxx xxxx xxxx xxxx" />
               </div>
               <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-2">
                   <label className="text-xs font-bold text-gray-500 uppercase">Validade</label>
                   <input type="text" className="w-full p-4 bg-gray-50 border rounded-2xl outline-none" placeholder="MM/YY" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-xs font-bold text-gray-500 uppercase">CVV</label>
                   <input type="text" className="w-full p-4 bg-gray-50 border rounded-2xl outline-none" placeholder="***" />
                 </div>
               </div>
            </div>
          )}

          <button 
            disabled={!method || isProcessing}
            onClick={handlePay}
            className={`w-full py-5 rounded-2xl font-black text-xl transition-all shadow-xl ${
              !method ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
          >
            {isProcessing ? 'PROCESSANDO...' : `PAGAR ${frame.price.toLocaleString()} Kz`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
