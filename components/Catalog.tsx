
import React, { useState } from 'react';
import { MOCK_FRAMES } from '../constants';
import { Frame, ViewType } from '../types';

interface CatalogProps {
  onSelectFrame: (frame: Frame) => void;
  onTryOn: (frame: Frame) => void;
}

const Catalog: React.FC<CatalogProps> = ({ onSelectFrame, onTryOn }) => {
  const [filter, setFilter] = useState<string>('Todos');

  const filteredFrames = filter === 'Todos' 
    ? MOCK_FRAMES 
    : MOCK_FRAMES.filter(f => f.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
        <div>
          <h1 className="text-4xl font-bold mb-2">Catálogo Digital</h1>
          <p className="text-gray-600">Explore as novidades em armações e lentes de alta performance.</p>
        </div>
        
        <div className="flex space-x-2 overflow-x-auto pb-2 w-full md:w-auto">
          {['Todos', 'Masculino', 'Feminino', 'Infantil', 'Unissexo'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                filter === cat 
                  ? 'bg-indigo-600 text-white shadow-lg' 
                  : 'bg-white text-gray-600 border hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredFrames.map(frame => (
          <div key={frame.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border group">
            <div className="relative aspect-square bg-gray-100 overflow-hidden">
              <img 
                src={frame.image} 
                alt={frame.name} 
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  frame.stock > 3 ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                }`}>
                  {frame.stock > 3 ? 'Em Stock' : `Últimas ${frame.stock} unidades`}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="text-xs text-indigo-600 font-bold uppercase tracking-wider mb-1">{frame.brand}</div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">{frame.name}</h3>
              <div className="text-gray-500 text-sm mb-4">Material: {frame.material}</div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-black text-gray-900">{frame.price.toLocaleString('pt-PT')} Kz</span>
                <span className="text-xs text-gray-400">Rostos: {frame.faceShape.join(', ')}</span>
              </div>
              
              <div className="flex flex-col gap-2">
                <button 
                  onClick={() => onTryOn(frame)}
                  className="w-full bg-indigo-50 text-indigo-600 py-3 rounded-xl font-bold hover:bg-indigo-100 transition-colors flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  Provador Virtual
                </button>
                <button 
                  onClick={() => onSelectFrame(frame)}
                  className="w-full bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-black transition-colors"
                >
                  Comprar / Reservar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
