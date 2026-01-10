
import React, { useEffect, useRef, useState } from 'react';
import { Frame } from '../types';
import { CLINIC_INFO } from '../constants';

interface VirtualTryOnProps {
  frame: Frame;
  onClose: () => void;
}

const VirtualTryOn: React.FC<VirtualTryOnProps> = ({ frame, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [captured, setCaptured] = useState<boolean>(false);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
        setStream(mediaStream);
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      } catch (err) {
        setError("Não foi possível aceder à câmara. Verifique as permissões de câmara no seu navegador.");
      }
    };

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const handleShare = () => {
    const text = encodeURIComponent(`Olá BV BAIA! Testei o modelo ${frame.name} de ${frame.brand} no provador virtual e gostei muito. Podem confirmar disponibilidade e preço final?`);
    window.open(`https://wa.me/${CLINIC_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-4 sm:p-8">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-black pointer-events-none"></div>

      <div className="absolute top-6 right-6 z-10">
        <button 
          onClick={onClose}
          className="bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-xl border border-white/10 transition-all active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="relative w-full max-w-[440px] aspect-[9/16] rounded-[50px] overflow-hidden bg-gray-900 shadow-[0_0_80px_rgba(79,70,229,0.3)] border-[8px] border-white/5">
        {error ? (
          <div className="h-full flex flex-col items-center justify-center text-white p-10 text-center space-y-6">
            <div className="w-16 h-16 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
               </svg>
            </div>
            <p className="font-medium opacity-80">{error}</p>
            <button onClick={onClose} className="bg-indigo-600 px-8 py-3 rounded-2xl font-bold shadow-lg shadow-indigo-600/40">Tentar Novamente</button>
          </div>
        ) : (
          <>
            <video 
              ref={videoRef} 
              autoPlay 
              playsInline 
              className="w-full h-full object-cover transform -scale-x-100"
            />
            
            {/* Watermark brand style seen in photos */}
            <div className="absolute top-10 left-10 opacity-30 select-none">
              <div className="text-white text-sm font-black tracking-tighter italic">Salomon Style</div>
            </div>

            {/* Virtual Glasses Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 transform -translate-y-16 scale-110">
                <img 
                  src={frame.image} 
                  alt="Virtual Glasses" 
                  className="w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] opacity-95 animate-float"
                  style={{ 
                    filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.2))',
                    maskImage: 'linear-gradient(to bottom, black 80%, transparent)' 
                  }}
                />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <div className="bg-white/5 backdrop-blur-2xl p-5 rounded-[32px] w-full text-white border border-white/10">
                <div className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-1">Simulação BV BAIA 2026</div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-lg font-bold">{frame.name}</div>
                    <div className="text-xs opacity-60 font-medium">Ideal para rosto: {frame.faceShape.join(', ')}</div>
                  </div>
                  <div className="text-xl font-black">{frame.price.toLocaleString()} Kz</div>
                </div>
              </div>
              
              <div className="flex gap-3 w-full">
                <button 
                  onClick={() => setCaptured(true)}
                  className="flex-1 bg-white text-black py-5 rounded-[24px] font-black shadow-2xl hover:bg-gray-100 transition-all active:scale-95"
                >
                  FOTOGRAFAR
                </button>
                <button 
                  onClick={handleShare}
                  className="flex-none aspect-square bg-green-500 text-white p-5 rounded-[24px] font-bold shadow-2xl hover:bg-green-600 transition-all active:scale-95 flex items-center justify-center"
                >
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                     <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.204l-.651 2.375 2.431-.637c.881.479 1.878.746 2.962.747h.003c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.77-5.766zm3.377 8.203c-.145.405-.837.739-1.159.785-.322.046-.632.081-1.077-.064-.265-.086-.593-.198-1.011-.381-1.768-.773-2.912-2.571-2.999-2.686-.087-.115-.705-.935-.705-1.783 0-.848.441-1.265.599-1.433.158-.167.346-.209.46-.209s.23.001.329.006c.106.005.249-.04.39.297.145.347.497 1.21.541 1.297.044.086.073.187.014.302-.058.115-.087.187-.174.288-.087.101-.183.225-.26.302-.086.086-.176.18-.076.353.1.173.444.733.951 1.185.653.582 1.205.762 1.378.848.173.086.273.073.374-.044.101-.115.432-.505.548-.677.116-.173.232-.145.39-.086.158.058 1.001.472 1.174.558.173.086.288.13.332.203.044.073.044.419-.101.824z" />
                   </svg>
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mt-10 text-center max-w-xs leading-loose">
        Mova o seu rosto lentamente para alinhar a armação. <br/>Algoritmo de Rastreamento Facial BV-BAIA 3.1
      </p>

      {captured && (
        <div className="fixed inset-0 bg-black/95 z-[110] flex flex-col items-center justify-center p-8 backdrop-blur-xl">
           <div className="bg-white rounded-[48px] p-10 text-center max-w-sm shadow-[0_0_100px_rgba(255,255,255,0.1)] border border-white/5">
             <div className="w-24 h-24 bg-green-500 text-white rounded-[32px] flex items-center justify-center mx-auto mb-8 rotate-3 shadow-2xl shadow-green-500/40">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
               </svg>
             </div>
             <h3 className="text-3xl font-black mb-4">Que Estilo!</h3>
             <p className="text-gray-500 mb-10 leading-relaxed font-medium">A sua foto foi guardada e uma cópia enviada para os nossos técnicos de visagismo.</p>
             <button 
              onClick={() => setCaptured(false)}
              className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-indigo-600/30 active:scale-95 transition-all"
             >
               CONTINUAR PROVANDO
             </button>
           </div>
        </div>
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(-16px) rotate(0deg); }
          50% { transform: translateY(-24px) rotate(1deg); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default VirtualTryOn;
