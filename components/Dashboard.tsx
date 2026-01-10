
import React, { useState } from 'react';
import { MOCK_FRAMES, CLINIC_INFO } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const data = [
  { name: 'Seg', vendas: 12, agendamentos: 18 },
  { name: 'Ter', vendas: 19, agendamentos: 22 },
  { name: 'Qua', vendas: 15, agendamentos: 25 },
  { name: 'Qui', vendas: 22, agendamentos: 20 },
  { name: 'Sex', vendas: 30, agendamentos: 28 },
  { name: 'Sáb', vendas: 25, agendamentos: 30 },
];

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'VISÃO GERAL' | 'INVENTÁRIO' | 'FATURAÇÃO'>('VISÃO GERAL');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">BV BAIA Command</h1>
          <p className="text-gray-500 font-medium">Gestão centralizada da clínica e stock</p>
        </div>
        <div className="flex bg-white p-1 rounded-xl shadow-sm border">
          {(['VISÃO GERAL', 'INVENTÁRIO', 'FATURAÇÃO'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                activeTab === tab ? 'bg-indigo-600 text-white' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'VISÃO GERAL' && (
        <div className="space-y-8 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-indigo-100">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Total Pacientes</div>
              <div className="text-3xl font-black text-indigo-900">{CLINIC_INFO.metrics.patients}</div>
              <div className="text-green-500 text-xs font-bold mt-2">↑ 12% este mês</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-indigo-100">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Vendas Hoje</div>
              <div className="text-3xl font-black text-indigo-900">142.500 Kz</div>
              <div className="text-indigo-500 text-xs font-bold mt-2">8 armações vendidas</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-indigo-100">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Agendamentos</div>
              <div className="text-3xl font-black text-indigo-900">24</div>
              <div className="text-orange-500 text-xs font-bold mt-2">6 pendentes</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-indigo-100">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Stock Crítico</div>
              <div className="text-3xl font-black text-red-600">3</div>
              <div className="text-red-400 text-xs font-bold mt-2">Reposição necessária</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border">
              <h3 className="text-xl font-bold mb-8">Performance Semanal</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="vendas" fill="#4f46e5" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="agendamentos" fill="#9333ea" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border">
              <h3 className="text-xl font-bold mb-8">Últimos Pacientes</h3>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
                        P{i}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Paciente Exemplo {i}</div>
                        <div className="text-xs text-gray-500">Exame de Vista • 10:30</div>
                      </div>
                    </div>
                    <button className="text-indigo-600 text-sm font-bold">Ver Ficha</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'INVENTÁRIO' && (
        <div className="bg-white rounded-3xl shadow-sm border overflow-hidden animate-fade-in">
          <div className="p-6 border-b flex justify-between items-center">
             <h2 className="text-xl font-bold">Gestão de Armações</h2>
             <button className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-bold text-sm">Adicionar Novo (+)</button>
          </div>
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-500 text-xs font-bold uppercase">
              <tr>
                <th className="px-6 py-4">Modelo</th>
                <th className="px-6 py-4">Brand</th>
                <th className="px-6 py-4">Preço</th>
                <th className="px-6 py-4">Stock</th>
                <th className="px-6 py-4 text-right">Acções</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {MOCK_FRAMES.map(frame => (
                <tr key={frame.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 flex items-center gap-3">
                    <img src={frame.image} className="w-10 h-10 rounded-lg object-cover" />
                    <span className="font-bold text-gray-900">{frame.name}</span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{frame.brand}</td>
                  <td className="px-6 py-4 font-semibold">{frame.price.toLocaleString()} Kz</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${frame.stock > 3 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {frame.stock} unid.
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-indigo-600 font-bold text-sm mr-4">Editar</button>
                    <button className="text-gray-400 font-bold text-sm">QR Code</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'FATURAÇÃO' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
           <div className="md:col-span-2 bg-white rounded-3xl shadow-sm border overflow-hidden">
             <div className="p-6 border-b">
               <h2 className="text-xl font-bold">Faturação Digital</h2>
             </div>
             <div className="p-8 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-xs font-bold text-gray-500 uppercase">Nome do Cliente</label>
                     <input type="text" className="w-full p-4 bg-gray-50 border rounded-2xl outline-none focus:ring-2 focus:ring-indigo-600 transition-all" placeholder="Ex: João Manuel" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-xs font-bold text-gray-500 uppercase">Telefone/WhatsApp</label>
                     <input type="text" className="w-full p-4 bg-gray-50 border rounded-2xl outline-none focus:ring-2 focus:ring-indigo-600 transition-all" placeholder="9xx xxx xxx" />
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-bold text-gray-500 uppercase">Armação Selecionada</label>
                   <select className="w-full p-4 bg-gray-50 border rounded-2xl outline-none focus:ring-2 focus:ring-indigo-600 transition-all appearance-none">
                     {MOCK_FRAMES.map(f => <option key={f.id}>{f.name} - {f.price.toLocaleString()} Kz</option>)}
                   </select>
                </div>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <button className="w-full bg-gray-900 text-white py-4 rounded-2xl font-black text-lg">EMITIR FATURA PDF</button>
                  <button className="w-full bg-green-500 text-white py-4 rounded-2xl font-black text-lg">ENVIAR WHATSAPP</button>
                </div>
             </div>
           </div>
           
           <div className="bg-indigo-900 text-white rounded-3xl p-8 shadow-xl flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-6">Resumo de Hoje</h3>
              <div className="space-y-4 mb-8">
                 <div className="flex justify-between border-b border-indigo-800 pb-2">
                   <span className="opacity-60">Total Bruto</span>
                   <span className="font-bold">420.500 Kz</span>
                 </div>
                 <div className="flex justify-between border-b border-indigo-800 pb-2">
                   <span className="opacity-60">Impostos (IVA)</span>
                   <span className="font-bold">58.870 Kz</span>
                 </div>
                 <div className="flex justify-between pb-2 text-xl">
                   <span className="opacity-60">Líquido</span>
                   <span className="font-bold">361.630 Kz</span>
                 </div>
              </div>
              <div className="mt-auto">
                <div className="text-xs font-bold opacity-40 uppercase tracking-widest mb-4">Metas do Mês</div>
                <div className="w-full bg-indigo-950 h-3 rounded-full mb-2 overflow-hidden">
                   <div className="bg-green-400 h-full w-[72%]"></div>
                </div>
                <div className="text-right text-xs font-bold">72% da meta alcançada</div>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
