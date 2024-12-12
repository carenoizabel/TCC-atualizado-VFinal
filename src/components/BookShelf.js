import Link from 'next/link';

const books = [
  {
    id: 1,
    title: 'Pequeno Manual Antirracista',
    author: 'Djamila Ribeiro',
    image: 'https://m.media-amazon.com/images/I/71D3cAdm0GL._AC_UL480_FMwebp_QL65_.jpg',
    description: 'Um guia prático com reflexões sobre o racismo e como combatê-lo no dia a dia.',
  },
  {
    id: 2,
    title: 'O Genocídio do Negro Brasileiro',
    author: 'Abdias Nascimento',
    image: 'https://m.media-amazon.com/images/I/71ImR3L0lIL._AC_UL480_FMwebp_QL65_.jpg',
    description: 'Um estudo contundente sobre o racismo estrutural e as injustiças contra a população negra no Brasil.',
  },
  {
    id: 3,
    title: 'Quarto de Despejo',
    author: 'Carolina Maria de Jesus',
    image: 'https://m.media-amazon.com/images/I/71z42zpEwbL._AC_UL480_FMwebp_QL65_.jpg',
    description: 'O diário de uma mulher negra que vivia na favela do Canindé, expondo a dura realidade da pobreza.',
  },
  {
    id: 4,
    title: 'Mulheres, Raça e Classe',
    author: 'Angela Davis',
    image: 'https://m.media-amazon.com/images/I/81PP53v0mML._AC_UL480_FMwebp_QL65_.jpg',
    description: 'Uma análise interseccional do racismo, do sexismo e da luta de classes ao longo da história.',
  },
  {
    id: 5,
    title: 'O Perigo de uma História Única',
    author: 'Chimamanda Ngozi Adichie',
    image: 'https://m.media-amazon.com/images/I/71AGPh3u4HL._AC_UL480_FMwebp_QL65_.jpg',
    description: 'Um ensaio poderoso que explora como narrativas únicas podem criar estereótipos perigosos e limitantes.',
  },
];

export default function BookShelf() {
  return (
    <div className="bookshelf">
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <div className="book-image">
            <img src={book.image} alt={book.title} />
          </div>
          <div className="book-details">
            <h3>{book.title}</h3>
            <p className="author">{book.author}</p>
            <Link href={`/book/${book.id}`}>
              <button className="details-button">Ler Detalhamento</button>
            </Link>
          </div>
        </div>
      ))}
      <style jsx>{`
        .bookshelf {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          padding: 20px;
          background: #f7f7f7;
          border-radius: 10px;
        }

        .book-card {
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .book-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }

        .book-image img {
          width: 100%;
          height: auto;
          border-bottom: 2px solid #ddd;
        }

        .book-details {
          padding: 15px;
          text-align: center;
          background-color: #fff3e0; /* Amarelo suave */
        }

        .book-details h3 {
          font-size: 1.3rem;
          color: #d32f2f; /* Vermelho */
          margin: 10px 0;
          font-weight: 600;
        }

        .book-details .author {
          font-size: 1.1rem;
          color: #4caf50; /* Verde */
          margin-bottom: 15px;
        }

        .details-button {
          background: #388e3c; /* Verde escuro */
          color: white;
          padding: 12px 20px;
          border: none;
          border-radius: 5px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          margin-top: 10px;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .details-button:hover {
          background: #2e7d32; /* Verde mais escuro */
          transform: scale(1.05);
        }

        .details-button:focus {
          outline: none;
          border: 2px solid #d32f2f; /* Cor vermelha para destacar foco */
        }

        @media (max-width: 768px) {
          .bookshelf {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
