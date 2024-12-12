import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Header() {
  const router = useRouter();
  const [showAbout, setShowAbout] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleBackToHome = () => {
    router.push('/');
  };

  const toggleAbout = () => {
    setShowAbout((prev) => !prev);
  };

  const handleAccessVirtual3D = () => {
    alert("Funcionalidade Virtual 3D em desenvolvimento.");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Você está buscando por: ${searchQuery}`);
  };

  return (
    <header className="header">
      <div className="logo">
        <img
          src="/imgs/logo.png"
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
          <li>
            <button className="nav-button">Favoritos</button>
          </li>
          <li>
            <button className="nav-button">Contate-nos</button>
          </li>
        </ul>
      </nav>

      {/* Campo de busca */}
      <div className="search-container">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Buscar livros..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            Buscar
          </button>
        </form>
      </div>

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
          background-color: #3e2723; /* Marrom escuro */
          color: #fdd835; /* Amarelo brilhante */
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 20px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease-in-out;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .logo-image {
          width: 150px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          background-color:  #DEB887 ;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }

        .logo h1 {
          font-size: 2.2rem;
          font-weight: 700;
          letter-spacing: 2px;
          margin: 0;
          color: #fdd835;
          text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
        }

        nav ul {
          display: flex;
          gap: 20px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .nav-button {
          font-size: 1rem;
          font-weight: 600;
          padding: 10px 20px;
          border: 2px solid #fdd835;
          border-radius: 30px;
          background-color: transparent;
          color: #fdd835;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-button:hover {
          background-color: #fdd835;
          color: #3e2723; /* Marrom escuro */
          transform: scale(1.05);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }

        .search-container {
          margin-top: 20px;
          display: flex;
          gap: 10px;
          justify-content: center;
        }

        .search-input {
          padding: 8px 15px;
          border: 2px solid #fdd835;
          border-radius: 25px;
          font-size: 1rem;
          width: 250px;
          background-color: transparent;
          color: #fff;
        }

        .search-button {
          padding: 8px 15px;
          border: none;
          border-radius: 25px;
          background-color: #fdd835;
          color: #3e2723; /* Marrom escuro */
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .search-button:hover {
          background-color: #c8a400;
        }

        .about-section {
          margin-top: 20px;
          padding: 20px;
          background-color: #fdd835;
          color: #3e2723;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          max-width: 600px;
          text-align: center;
          animation: slideIn 0.5s ease-out;
        }

        .about-section p {
          margin: 0;
          font-size: 1rem;
          line-height: 1.6;
        }

        @keyframes slideIn {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .header {
            padding: 15px;
          }

          .logo h1 {
            font-size: 1.6rem;
          }

          nav ul {
            flex-direction: column;
            gap: 12px;
          }

          .nav-button {
            width: 100%;
            text-align: center;
            padding: 12px 20px;
            font-size: 1.1rem;
          }

          .search-container {
            flex-direction: column;
            width: 100%;
          }

          .search-input {
            width: 80%;
          }

          .about-section {
            width: 90%;
          }
        }
      `}</style>
    </header>
  );
}
