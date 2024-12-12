import React from 'react';
import { useRouter } from 'next/router';

export default function Environment() {
  const router = useRouter(); // Hook para navegação

  // Função para redirecionar para a página de livros
  const handleStartJourney = () => {
    router.push('/livros'); // Substitua '/livros' pela URL da sua página de livros
  };

  return (
    <div className="environment">
      <div className="overlay">
        <h1>Bem-vindo à <span>Biblioteca Virtual 3D</span></h1>
        <p>
          Explore uma coleção de livros e descubra histórias incríveis. Este é apenas o início de uma jornada que conecta cultura e aprendizado.
        </p>
        <button className="start-button" onClick={handleStartJourney}>Iniciar Jornada</button>
      </div>

      <style jsx>{`
        .environment {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 80vh;
          background: url('/imgs/library-background.png') no-repeat center center/cover;
          background-size: cover; /* Ajusta a imagem para cobrir toda a tela */
          position: relative;
          text-align: center;
          color: white;
          overflow: hidden;
          filter: brightness(50%); /* Torna o fundo mais suave */
        }

        .overlay {
          background: rgba(0, 0, 0, 0.7);
          padding: 30px;
          border-radius: 20px;
          max-width: 900px;
          width: 90%;
          animation: fadeInUp 1.5s ease-out;
          box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.3);
        }

        h1 {
          font-size: 3rem;
          margin-bottom: 20px;
          font-family: 'Montserrat', sans-serif;
          font-weight: bold;
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
        }

        h1 span {
          color: #ffeb3b; /* Amarelo brilhante */
          font-weight: bold;
          letter-spacing: 2px;
        }

        p {
          font-size: 1.2rem;
          margin-bottom: 30px;
          font-family: 'Roboto', sans-serif;
          line-height: 1.8;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
        }

        .start-button {
          background-color: #388e3c; /* Verde fresco */
          color: white;
          padding: 15px 30px;
          font-size: 1.4rem;
          font-weight: bold;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: transform 0.3s ease, background-color 0.3s ease;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
        }

        .start-button:hover {
          background-color: #2e7d32;
          transform: scale(1.1);
          box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.4);
        }

        .start-button:focus {
          outline: none;
          border: 2px solid #ffeb3b; /* Foco em amarelo */
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .overlay {
            padding: 20px;
          }

          h1 {
            font-size: 2.2rem;
          }

          p {
            font-size: 1rem;
            line-height: 1.6;
          }

          .start-button {
            font-size: 1.2rem;
            padding: 12px 24px;
          }
        }
      `}</style>
    </div>
  );
}
