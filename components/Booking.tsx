
import React, { useState } from 'react';
import { CLINIC_INFO } from '../constants';

const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    type: 'Exame de Vista',
    date: '',
    time: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-20 animate-fade-in">
      <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px] border">
        {/* Left Side: Brand Info */}
        <div className="md:w-2/5 bg-indigo-900 p-12 text-white flex flex-col">
          <div className="mb-auto">
            <div className="bg-white/20 w-12 h-12 rounded-2xl flex items-center justify-center font-black text-2xl mb-6">BV</div>
            <h2 className="text-3xl font-bold mb-4">Agende a sua Consulta</h2>
            <p className="opacity-70 leading-relaxed">
              Equipa especializada em saúde visual. Garantimos o seu bem-estar com os equipamentos mais modernos de Angola.
            </p>
          </div>
          <div className="mt-8 pt-8 border-t border-indigo-800">
             <div className="text-sm font-bold opacity-40 uppercase tracking-widest mb-4">Horário de Atendimento</div>
             <p className="text-sm mb-1 font-semibold">Segunda - Sexta: 08:00 - 18:00</p>
             <p className="text-sm font-semibold">Sábado: 09:00 - 14:00</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="md:w-3/5 p-12 flex flex-col justify-center">
          {step === 1 ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Nome Completo</label>
                <input 
                  required
                  type="text" 
                  className="w-full p-4 bg-gray-50 border rounded-2xl outline-none focus:ring-2 focus:ring-indigo-600 transition-all"
                  placeholder="Seu nome"
                  value={form.name}
                  onChange={(e) => setForm({...form, name: e.target.value})}
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Serviço</label>
                  <select 
                    className="w-full p-4 bg-gray-50 border rounded-2xl outline-none focus:ring-2 focus:ring-indigo-600 transition-all appearance-none"
                    value={form.type}
                    onChange={(e) => setForm({...form, type: e.target.value as any})}
                  >
                    <option>Exame de Vista</option>
                    <option>Estilismo Visual</option>
                    <option>Lentes de Contacto</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Telefone</label>
                  <input 
                    required
                    type="tel" 
                    className="w-full p-4 bg-gray-50 border rounded-2xl outline-none focus:ring-2 focus:ring-indigo-600 transition-all"
                    placeholder="9xx xxx xxx"
                    value={form.phone}
                    onChange={(e) => setForm({...form, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Data</label>
                  <input 
                    required
                    type="date" 
                    className="w-full p-4 bg-gray-50 border rounded-2xl outline-none focus:ring-2 focus:ring-indigo-600 transition-all"
                    value={form.date}
                    onChange={(e) => setForm({...form, date: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Hora</label>
                  <input 
                    required
                    type="time" 
                    className="w-full p-4 bg-gray-50 border rounded-2xl outline-none focus:ring-2 focus:ring-indigo-600 transition-all"
                    value={form.time}
                    onChange={(e) => setForm({...form, time: e.target.value})}
                  />
                </div>
              </div>

              <button className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100">
                CONFIRMAR MARCAÇÃO
              </button>
            </form>
          ) : (
            <div className="text-center py-10 animate-fade-in">
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                 </svg>
              </div>
              <h2 className="text-3xl font-black mb-4">Quase Tudo Pronto!</h2>
              <p className="text-gray-600 mb-10 leading-relaxed px-4">
                Enviamos uma mensagem de confirmação para o seu WhatsApp. Por favor, valide o horário para finalizar a marcação.
              </p>
              <button 
                onClick={() => setStep(1)}
                className="bg-gray-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-black transition-all"
              >
                Voltar ao Início
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
