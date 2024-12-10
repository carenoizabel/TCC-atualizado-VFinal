export default function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="branding">
            <h2>BibliCultuON</h2>
            <p>© 2024 - Todos os direitos reservados.</p>
          </div>
          <div className="social-links">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src="/icons/instagram.png" alt="Instagram" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img src="/icons/facebook.png" alt="Facebook" />
            </a>
          </div>
        </div>
        <p className="developer">
          Desenvolvido por <strong>Izabel Careno</strong>
        </p>
  
        <style jsx>{`
          .footer {
            background-color: #1b5e20; /* Verde escuro */
            color: #ffffff; /* Branco */
            padding: 20px 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            border-radius: 10px 10px 0 0;
            box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.2);
          }
  
          .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            max-width: 900px;
            gap: 20px;
          }
  
          .branding h2 {
            font-size: 1.5rem;
            margin: 0;
            color: #fdd835; /* Amarelo */
          }
  
          .branding p {
            margin: 5px 0 0;
            font-size: 0.9rem;
          }
  
          .social-links {
            display: flex;
            gap: 15px;
          }
  
          .social-links a {
            display: inline-block;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;
            background-color: #fdd835; /* Amarelo */
            display: flex;
            justify-content: center;
            align-items: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
  
          .social-links a img {
            width: 24px;
            height: 24px;
          }
  
          .social-links a:hover {
            transform: scale(1.1);
            box-shadow: 0 4px 8px rgba(255, 255, 0, 0.4);
          }
  
          .developer {
            font-size: 0.9rem;
            color: #c8e6c9; /* Verde claro */
          }
  
          @media (max-width: 768px) {
            .footer-content {
              flex-direction: column;
              align-items: center;
              gap: 10px;
            }
  
            .branding h2 {
              font-size: 1.2rem;
            }
  
            .social-links a {
              width: 35px;
              height: 35px;
            }
  
            .social-links a img {
              width: 20px;
              height: 20px;
            }
          }
        `}</style>
      </footer>
    );
  }
  