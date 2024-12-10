import React from 'react';

export default function Environment() {
  return (
    <div className="environment">
      <div className="overlay">
        <h1>Bem-vindo à <span>Biblioteca Virtual 3D</span></h1>
        <p>
          Explore uma coleção de livros e descubra histórias incríveis. Este é apenas o início de uma jornada que conecta cultura e aprendizado.
        </p>
      </div>

      <style jsx>{`
        .environment {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: url('/imgs/library-background.png') no-repeat center center/cover;
          position: relative;
          text-align: center;
          color: white;
          overflow: hidden;
        }

        .overlay {
          background: rgba(0, 0, 0, 0.5);
          padding: 20px;
          border-radius: 12px;
          max-width: 800px;
          width: 90%;
          animation: fadeIn 1.5s ease-in-out;
        }

        h1 {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }

        h1 span {
          color: #ffeb3b; /* Amarelo destacando o nome */
          font-weight: bold;
        }

        p {
          font-size: 1.2rem;
          margin-bottom: 30px;
        }

        .start-button {
          background-color: #388e3c; /* Verde simbolizando esperança */
          color: white;
          padding: 15px 30px;
          font-size: 1.2rem;
          font-weight: bold;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .start-button:hover {
          background-color: #2e7d32;
          transform: scale(1.05);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }

          p {
            font-size: 1rem;
          }

          .start-button {
            font-size: 1rem;
            padding: 10px 20px;
          }
        }
      `}</style>
    </div>
  );
}
