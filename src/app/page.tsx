export default function Home() {
  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden px-2 sm:px-4 bg-black">
      {/* 🔷 Cube Grid Background */}
      <div className="absolute inset-0 bg-black bg-grid animate-pan z-0"></div>

      {/* 💬 Text Content */}
      <div className="relative z-10 text-center max-w-full w-full animate-float scale-90 sm:scale-100">
        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
            }

            @keyframes glow {
              0%, 100% {
                text-shadow: 0 0 8px rgba(255,255,255,0.15);
              }
              50% {
                text-shadow: 0 0 20px rgba(255,255,255,0.5);
              }
            }

            @keyframes gradientShift {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }

            @keyframes panBackground {
              0% { background-position: 0 0; }
              100% { background-position: 100px 100px; }
            }

            .animate-float {
              animation: float 4s ease-in-out infinite;
            }

            .animate-glow {
              animation: glow 2.5s ease-in-out infinite;
            }

            .animate-gradient {
              background-size: 200% 200%;
              animation: gradientShift 6s ease infinite;
            }

            .bg-grid {
              background-image:
                linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px);
              background-size: 50px 50px;
            }

            .animate-pan {
              animation: panBackground 30s linear infinite;
            }
          `}
        </style>

        <h1 className="text-[10vw] sm:text-[8vw] md:text-[6vw] font-extrabold text-white animate-glow leading-tight">
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-yellow-300 animate-gradient drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Texto
          </span>
        </h1>

        <p className="mt-3 text-[4vw] sm:text-lg md:text-xl text-gray-300 tracking-wide">
          A smarter way to connect. Launching soon...
        </p>

        <p className="mt-2 text-[3vw] sm:text-sm md:text-base text-gray-500">
          Stay tuned for real-time conversations like never before.
        </p>
      </div>
    </div>
  );
}
