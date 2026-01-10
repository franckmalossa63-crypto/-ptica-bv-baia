
import React from 'react';
import { ViewType } from '../types';
import { CLINIC_INFO } from '../constants';

interface HomeProps {
  onNavigate: (view: ViewType) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in bg-white">
      {/* Hero Section - Themed in BV BAIA Blue */}
      <section className="relative h-[750px] flex items-center bg-[#0033A0] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-10" 
            alt="BV BAIA Clinic"
          />
          {/* Yellow flare effect matching logo colors */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-400/10 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl text-yellow-400 text-sm font-black mb-8 tracking-widest uppercase border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Líder em Angola
            </div>
            <h1 className="text-7xl font-black mb-8 leading-tight drop-shadow-lg">
              {CLINIC_INFO.slogan}
            </h1>
            <p className="text-2xl mb-12 text-blue-50 leading-relaxed max-w-2xl font-light">
              Desde consultas de oftalmologia a armações de luxo como <span className="font-bold text-yellow-400 italic">Cartier, Dior e LV</span>. 
              Agora na palma da sua mão com nosso Provador Virtual.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => onNavigate(ViewType.CATALOG)}
                className="bg-[#D4AF37] text-white px-10 py-6 rounded-[30px] font-black text-xl hover:bg-yellow-600 transition-all text-center shadow-2xl shadow-black/30 border-b-4 border-yellow-800"
              >
                PROVAR ÓCULOS AGORA
              </button>
              <button 
                onClick={() => onNavigate(ViewType.BOOKING)}
                className="bg-white text-[#0033A0] px-10 py-6 rounded-[30px] font-black text-xl hover:bg-gray-50 transition-all text-center shadow-xl border-b-4 border-gray-200"
              >
                MARCAR CONSULTA
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer Banner - December Birthdays */}
      <div className="bg-[#D4AF37] py-4 text-center text-white font-black text-lg tracking-widest flex items-center justify-center gap-4 animate-pulse">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
        ANIVERSARIANTES DE DEZEMBRO: 30% DE DESCONTO EM QUALQUER PRODUTO!
      </div>

      {/* Services Flyer Integration */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#0033A0] mb-4">Nossos Serviços & Preçários</h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Transparência e qualidade em cada detalhe</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[40px] shadow-xl border-t-8 border-[#0033A0] transform transition-hover hover:-translate-y-2">
               <h3 className="text-2xl font-black mb-6">Armações</h3>
               <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center pb-4 border-b border-dashed">
                    <span className="font-bold text-gray-600">Modelos BV Baia</span>
                    <span className="text-[#0033A0] font-black">Desde 5.000 Kz</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-dashed">
                    <span className="font-bold text-gray-600">Marcas de Luxo</span>
                    <span className="text-[#0033A0] font-black">Sob consulta</span>
                  </div>
               </div>
               <button onClick={() => onNavigate(ViewType.CATALOG)} className="w-full bg-[#0033A0] text-white py-4 rounded-2xl font-black">VER CATÁLOGO</button>
            </div>

            <div className="bg-white p-10 rounded-[40px] shadow-xl border-t-8 border-yellow-500 transform transition-hover hover:-translate-y-2">
               <h3 className="text-2xl font-black mb-6">Lentes Graduadas</h3>
               <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center pb-4 border-b border-dashed">
                    <span className="font-bold text-gray-600">Lentes Branco</span>
                    <span className="text-yellow-600 font-black">Desde 10.000 Kz</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-dashed">
                    <span className="font-bold text-gray-600">Lentes Fotogray</span>
                    <span className="text-yellow-600 font-black">Desde 10.500 Kz</span>
                  </div>
               </div>
               <button onClick={() => onNavigate(ViewType.BOOKING)} className="w-full bg-yellow-500 text-white py-4 rounded-2xl font-black">ENVIAR RECEITA</button>
            </div>

            <div className="bg-[#0033A0] p-10 rounded-[40px] shadow-xl text-white transform transition-hover hover:-translate-y-2">
               <h3 className="text-2xl font-black mb-6">Reparação & Manutenção</h3>
               <p className="mb-8 opacity-80 leading-relaxed">
                 O seu óculos precisa de um ajuste ou reparo? Temos técnicos especializados para garantir que a sua visão não pare.
               </p>
               <ul className="space-y-3 mb-8 text-sm">
                  <li className="flex items-center gap-2 font-bold"><span className="text-yellow-400">✔</span> Limpeza Ultrassónica</li>
                  <li className="flex items-center gap-2 font-bold"><span className="text-yellow-400">✔</span> Ajuste de Plaquetas</li>
                  <li className="flex items-center gap-2 font-bold"><span className="text-yellow-400">✔</span> Substituição de Hastes</li>
               </ul>
               <a href={`https://wa.me/${CLINIC_INFO.whatsapp}`} target="_blank" className="block text-center w-full bg-white text-[#0033A0] py-4 rounded-2xl font-black">FALAR COM TÉCNICO</a>
            </div>
          </div>
        </div>
      </section>

      {/* Interior & Models Showcase */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black text-[#0033A0] mb-4">A Experiência BV BAIA</h2>
              <p className="text-gray-600 text-lg">
                Visite as nossas lojas e descubra um mundo de clareza. Tecnologia de ponta num ambiente premium desenhado para o seu conforto.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 1, tag: 'Nossa Clínica', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=800&fit=crop' },
              { id: 2, tag: 'Luxo no Rosto', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop' },
              { id: 3, tag: 'Novas Coleções', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop' },
              { id: 4, tag: 'Equipa Especializada', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop' }
            ].map(item => (
              <div key={item.id} className="group relative overflow-hidden rounded-[40px] aspect-[3/4] shadow-2xl border-4 border-white">
                <img 
                  src={item.img} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={item.tag}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0033A0]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <span className="text-yellow-400 text-xs font-black uppercase tracking-widest mb-1">Destaque</span>
                  <span className="text-white text-2xl font-black">{item.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 bg-[#0033A0] text-white">
        <div className="max-w-7xl mx-auto px-4">
           <div className="flex flex-col md:flex-row gap-16">
              <div className="md:w-1/2">
                 <h2 className="text-5xl font-black mb-8 tracking-tight">Onde nos encontrar</h2>
                 <div className="space-y-10">
                    {CLINIC_INFO.locations.map((loc, i) => (
                      <div key={i} className="flex gap-6 items-start">
                         <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                         </div>
                         <div>
                            <h3 className="text-2xl font-black mb-2">{loc.city}</h3>
                            <p className="text-blue-100/60 leading-relaxed font-medium">{loc.area}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="md:w-1/2 bg-white/5 rounded-[50px] p-12 border border-white/10 flex flex-col justify-center items-center text-center">
                 <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(250,204,21,0.3)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#0033A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                 </div>
                 <h4 className="text-3xl font-black mb-4">Precisa de Ajuda Imediata?</h4>
                 <p className="mb-10 text-blue-200">Fale com a nossa equipa de suporte especializada agora.</p>
                 <a href={`https://wa.me/${CLINIC_INFO.whatsapp}`} className="bg-green-500 text-white px-12 py-5 rounded-full font-black text-lg shadow-2xl hover:bg-green-600 transition-all flex items-center gap-3">
                    WHATSAPP: {CLINIC_INFO.whatsapp}
                 </a>
              </div>
           </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="bg-white py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-4">
              <div className="bg-[#0033A0] p-3 rounded-xl text-white font-black text-lg">BV</div>
              <span className="text-[#0033A0] font-black text-xl tracking-tighter">BAIA Óptica</span>
           </div>
           <p className="text-gray-400 font-bold text-sm tracking-widest uppercase">
             &copy; 2026 ANGOLA - EXCELÊNCIA EM VISÃO
           </p>
           <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-[#0033A0] transition-colors font-black">FB</a>
              <a href="#" className="text-gray-400 hover:text-[#0033A0] transition-colors font-black">IG</a>
              <a href="#" className="text-gray-400 hover:text-[#0033A0] transition-colors font-black">WA</a>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
