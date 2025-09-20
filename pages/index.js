// pages/index.js
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

// URL de un clip real de Pexels (flor roja con fondo de nubes/espacio)
const backgroundImageUrl = "https://images.pexels.com/photos/1032902/pexels-photo-1032902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

export default function FlorellaScreen() {
  const bgRef = useRef(null);

  useEffect(() => {
    gsap.to(bgRef.current, {
      opacity: 1,
      duration: 1.5,
      ease: 'power2.inOut',
    });
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* CSS para el brillo radial */}
      <style jsx global>{`
        .radial-glow::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
      `}</style>

      {/* Fondo con clip de flor + gradiente */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center opacity-0 radial-glow"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 via-purple-600/20 to-blue-700/10"></div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center p-5">
        {/* Título "FLORELLA" */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-block px-8 py-4 rounded-lg bg-red-600/90">
            <h1
              className="text-6xl font-bold text-white text-shadow"
              style={{
                fontFamily: "'Glow Roses', sans-serif",
                textShadow: '3px 3px 6px rgba(0, 0, 0, 0.4)',
                transform: 'perspective(300px) rotateX(8deg)',
              }}
            >
              FLORELLA
            </h1>
          </div>
        </motion.div>

        {/* Subtítulo */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg font-light text-white/80 mb-10"
        >
          Eventos y Detalles
        </motion.p>

        {/* Botón */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-8 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white"
        >
          Ver Eventos
        </motion.button>
      </div>

      {/* Tab Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md p-4 flex justify-around">
        {['Inicio', 'Explorar', 'Favoritos', 'Calendario', 'Perfil'].map((item) => (
          <button key={item} className="text-purple-300 text-xl">
            <span>{item}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
