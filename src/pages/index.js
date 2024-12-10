import Head from 'next/head';
import Navbar from '@/components/Navbar';
import BookShelf from '@/components/BookShelf';
import Environment from '@/components/Environment';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Biblioteca Virtual 3D</title>
        <meta name="description" content="Explore uma biblioteca imersiva em 3D com livros sobre cultura africana e afro-brasileira." />
      </Head>
      <Header />
      <main>
        <Environment />
        <BookShelf />
      </main>
      <Footer />
    </>
  );
}
