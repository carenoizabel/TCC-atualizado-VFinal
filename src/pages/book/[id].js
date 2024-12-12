import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const books = [
  {
    id: 1,
    title: 'Pequeno Manual Antirracista',
    author: 'Djamila Ribeiro',
    image: 'https://m.media-amazon.com/images/I/71D3cAdm0GL._AC_UL480_FMwebp_QL65_.jpg',
    description: ' Este livro é uma leitura essencial para entender as nuances do racismo no Brasil. Com 11 capítulos curtos e objetivos, Djamila Ribeiro apresenta reflexões sobre o impacto histórico do racismo estrutural na sociedade brasileira...',
    trailerUrl: '/videos/trailerPMA.mp4', // Trailer exemplo
    readLink: ''
  },
  {
    id: 2,
    title: 'O Genocídio do Negro Brasileiro',
    author: 'Abdias Nascimento',
    image: 'https://m.media-amazon.com/images/I/71ImR3L0lIL._AC_UL480_FMwebp_QL65_.jpg',
    description: 'Esta obra de Abdias Nascimento é um marco nos estudos sobre racismo no Brasil. O autor denuncia o genocídio simbólico e físico da população negra...',
    trailerUrl: '/videos/trailerGNB.mp4', // Trailer exemplo
    readLink: ''
  },
  {
    id: 3,
    title: 'Quarto de Despejo',
    author: 'Carolina Maria de Jesus',
    image: 'https://m.media-amazon.com/images/I/71z42zpEwbL._AC_UL480_FMwebp_QL65_.jpg',
    description: 'Este é o diário visceral de Carolina Maria de Jesus, uma mulher negra e catadora de papel que viveu na favela do Canindé, em São Paulo. Com uma linguagem simples, mas poderosa, Carolina descreve a realidade da fome, da violência, e do preconceito. Ela narra o cotidiano duro da favela, onde mulheres lutam para sustentar suas famílias em meio ao descaso social. Apesar das adversidades, a escrita de Carolina é permeada por resiliência e sonhos de uma vida melhor. "Quarto de Despejo" é um testemunho único da pobreza urbana, oferecendo uma visão sem filtros da exclusão social no Brasil.',
    trailerUrl: '/videos/trailerQD.mp4', // Trailer exemplo
    readLink: ''
  },
  {
    id: 4,
    title: 'Mulheres, Raça e Classe',
    author: 'Angela Davis',
    image: 'https://m.media-amazon.com/images/I/81PP53v0mML._AC_UL480_FMwebp_QL65_.jpg',
    description: 'Nesta obra seminal, Angela Davis analisa a interseção entre racismo, sexismo e opressão de classe. A autora revisita eventos históricos, como a escravidão e os movimentos feministas e trabalhistas, demonstrando como mulheres negras foram frequentemente excluídas das lutas por igualdade. Davis evidencia que a luta pela justiça social deve ser interseccional, reconhecendo que as opressões estão interligadas. O livro também celebra a força e a resistência das mulheres negras, oferecendo uma análise profunda e transformadora sobre desigualdade e ativismo político.',
    trailerUrl: '/videos/trailerMRC.mp4', // Trailer exemplo
    readLink: ''
  },
  {
    id: 5,
    title: 'O Perigo de uma História Única',
    author: 'Chimamanda Ngozi Adichie',
    image: 'https://m.media-amazon.com/images/I/71AGPh3u4HL._AC_UL480_FMwebp_QL65_.jpg',
    description: 'Neste ensaio inspirado por uma famosa palestra do TED, Chimamanda Ngozi Adichie explora como histórias únicas podem distorcer nossa visão do mundo. A autora reflete sobre sua infância na Nigéria e como foi impactada pelas narrativas limitadas sobre África difundidas globalmente. Adichie argumenta que histórias únicas criam estereótipos, desumanizam culturas e limitam o potencial de empatia. Ela defende a diversidade de vozes e perspectivas como uma forma de combater preconceitos e promover compreensão intercultural. Este texto é um alerta poderoso contra os perigos da generalização.',
    trailerUrl: '/videos/trailerPHU.mp4', // Trailer exemplo
    readLink: ''
  },
];

export default function BookDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [isSummaryLoading, setIsSummaryLoading] = useState(true);
  const [isTrailerLoading, setIsTrailerLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false)

  const book = books.find((b) => b.id === parseInt(id));

  useEffect(() => {
    if (book) {
      setTimeout(() => setIsSummaryLoading(false), 2000); // Simula 2 segundos de carregamento
      setTimeout(() => setIsTrailerLoading(false), 3000); // Simula 3 segundos de carregamento
    }
  }, [book]);

  if (!book) return <p>Livro não encontrado.</p>;

  const handleReadClick = () => {
    if (!book.readLink) {
      alert("A opção de ler/visualizar o livro ainda não está disponível. Em futuras atualizações, você poderá acessar o conteúdo diretamente aqui.");
    }
  };

  return (
    <>
      <Header />
      <div className="book-detail">
        <div className="book-header">
          <img src={book.image} alt={book.title} className="book-image" />
          <div className="book-info">
            <h1>{book.title}</h1>
            <p className="author"><strong>Autor:</strong> {book.author}</p>

            {isSummaryLoading ? (
              <p className="loading-summary">Gerando resumo<span className="dots"></span></p>
            ) : (
              <p className="description">{book.description}</p>
            )}
          </div>
        </div>

        <h2>Trailer</h2>
        <div className="video-container">
          {isTrailerLoading ? (
            <p className="loading-trailer">Gerando trailer<span className="dots"></span></p>
          ) : (
            <iframe
              src={book.trailerUrl}
              title={`Trailer de ${book.title}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>

        {showAlert && (
          <div className="alert">
            <p><strong>Atenção:</strong> A opção de ler/visualizar o livro ainda não está disponível. Em futuras atualizações, você poderá acessar o conteúdo diretamente aqui.</p>
          </div>
        )}

        <div className="read-button-container">
          <button className="read-button" onClick={handleReadClick}>
            Ler/Visualizar o Livro
          </button>
        </div>

        <style jsx>{`
          .book-detail {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 30px;
            background: linear-gradient(to bottom, #f0f4c3, #ffffff);
            color: #333;
            max-width: 1000px;
            margin: 20px auto;
            border-radius: 12px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          }

          .book-header {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin-bottom: 30px;
            width: 100%;
          }

          .book-image {
            max-width: 250px;
            margin-right: 20px;
            border-radius: 12px;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
          }

          .book-info {
            flex: 1;
          }

          h1 {
            font-size: 2.8rem;
            color: #d32f2f;
            margin-bottom: 10px;
            font-family: 'Roboto', sans-serif;
          }

          .author {
            font-size: 1.5rem;
            color: #4caf50;
            margin-bottom: 20px;
            font-family: 'Arial', sans-serif;
          }

          .description {
            font-size: 1.2rem;
            line-height: 1.8;
            color: #555;
            font-family: 'Georgia', serif;
          }

          .loading-summary,
          .loading-trailer {
            font-size: 1.2rem;
            color: #888;
            text-align: center;
            margin: 20px 0;
          }

          .dots::after {
            content: '';
            display: inline-block;
            animation: dots 1.5s steps(3, end) infinite;
          }

          @keyframes dots {
            0% {
              content: '';
            }
            33% {
              content: '.';
            }
            66% {
              content: '..';
            }
            100% {
              content: '...';
            }
          }

          .video-container {
            width: 100%;
            max-width: 700px;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
          }

          iframe {
            width: 100%;
            height: 400px;
            border: none;
          }

          .alert {
            background-color: #ffcc00;
            padding: 15px;
            margin-top: 20px;
            border-radius: 8px;
            color: #333;
            font-weight: bold;
            text-align: center;
          }

          .read-button-container {
            margin-top: 20px;
          }

          .read-button {
            display: inline-block;
            padding: 12px 25px;
            background-color: #4caf50;
            color: #fff;
            font-size: 1.2rem;
            text-decoration: none;
            border-radius: 8px;
            text-align: center;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.2s;
          }

          .read-button:hover {
            background-color: #388e3c;
            transform: scale(1.05);
          }

          .read-button:disabled {
            cursor: not-allowed;
            opacity: 0.6;
          }

          @media (max-width: 768px) {
            .book-detail {
              padding: 20px;
            }

            .book-header {
              flex-direction: column;
              align-items: center;
            }

            .book-image {
              margin-bottom: 20px;
            }

            h1 {
              font-size: 2.2rem;
              text-align: center;
            }

            .author {
              font-size: 1.2rem;
              text-align: center;
            }

            iframe {
              height: 250px;
            }
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
}
