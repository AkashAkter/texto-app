export default function Home() {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* 🔷 Background grid cube effect */}
      <div className="absolute inset-0 bg-black bg-grid animate-pan z-0"></div>

      {/* 🔤 Text content with floating and glowing */}
      <div className="relative z-10 text-center px-4 animate-float">
        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-12px); }
            }

            @keyframes glow {
              0%, 100% {
                text-shadow: 0 0 10px rgba(255,255,255,0.2);
              }
              50% {
                text-shadow: 0 0 20px rgba(255,255,255,0.6);
              }
            }

            @keyframes gradientShift {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }

            @keyframes panBackground {
              0% {
                background-position: 0 0;
              }
              100% {
                background-position: 100px 100px;
              }
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
                linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px);
              background-size: 50px 50px;
            }

            .animate-pan {
              animation: panBackground 20s linear infinite;
            }
          `}
        </style>

        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-white animate-glow">
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-emerald-400 to-yellow-300 animate-gradient drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Texto
          </span>
        </h1>
        <p className="mt-6 text-2xl sm:text-3xl text-gray-300 tracking-wider">
          A smarter way to connect. Launching soon...
        </p>
        <p className="mt-4 text-lg text-gray-500">
          Stay tuned for real-time conversations like never before.
        </p>
      </div>
    </div>
  );
}
