// src/components/Header.js
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Header() {
  const router = useRouter();
  const [showAbout, setShowAbout] = useState(false);

  const handleBackToHome = () => {
    router.push('/');
  };

  const toggleAbout = () => {
    setShowAbout((prev) => !prev);
  };

  const handleAccessVirtual3D = () => {
    alert("Funcionalidade Virtual 3D em desenvolvimento."); // Simula uma funcionalidade futura
  };

  return (
    <header className="header">
      <div className="logo">
        <img
          src="/imgs/logo.png" /* Caminho da imagem da logo */
          alt="Logo do BibliCultuON"
          className="logo-image"
        />
        <h1>BibliCultuON</h1>
      </div>
      <nav>
        <ul>
          <li>
            <button onClick={handleBackToHome} className="nav-button">
              Início
            </button>
          </li>
          <li>
            <button onClick={toggleAbout} className="nav-button">
              Sobre
            </button>
          </li>
          <li>
            <button onClick={handleAccessVirtual3D} className="nav-button">
              Virtual 3D
            </button>
          </li>
        </ul>
      </nav>
      {showAbout && (
        <div className="about-section">
          <p>
            <strong>BibliCultuON</strong> é um protótipo de site que demonstra como o 
            projeto final poderá funcionar no futuro. Atualmente, todas as funcionalidades são estáticas 
            e exibidas como exemplo. As funcionalidades reais serão implementadas com base em pesquisas futuras.
          </p>
        </div>
      )}

      <style jsx>{`
        .header {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #4caf50; /* Verde vibrante */
          color: #fdd835; /* Amarelo brilhante */
          padding: 20px;
          border-radius: 10px;
          margin-bottom: 20px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .logo-image {
          width: 100%;
          height: 100px;
          border-radius: 10%;
          object-fit: cover;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .logo h1 {
          font-size: 1.8rem;
          font-weight: bold;
          letter-spacing: 1px;
          margin: 0;
          color: #fdd835;
        }

        nav ul {
          display: flex;
          gap: 10px;
          list-style: none;
          padding: 0;
          margin: 15px 0 0;
        }

        .nav-button {
          font-size: 0.9rem;
          font-weight: 600;
          padding: 8px 15px;
          border: none;
          border-radius: 20px;
          background-color: #fdd835; /* Amarelo */
          color: #4caf50; /* Verde */
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-button:hover {
          background-color: #4caf50; /* Verde */
          color: #fdd835; /* Amarelo */
          transform: scale(1.05);
        }

        .about-section {
          margin-top: 15px;
          padding: 15px;
          background-color: #fdd835; /* Amarelo */
          color: #4caf50; /* Verde */
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          max-width: 500px;
          text-align: center;
        }

        .about-section p {
          margin: 0;
          font-size: 1rem;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .header {
            padding: 15px;
          }

          .logo h1 {
            font-size: 1.5rem;
          }

          nav ul {
            flex-direction: column;
            gap: 8px;
          }

          .nav-button {
            width: 100%;
            text-align: center;
          }

          .about-section {
            width: 100%;
          }
        }
      `}</style>
    </header>
  );
}
