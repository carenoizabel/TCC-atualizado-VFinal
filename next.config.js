/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Ativa o modo estrito do React, ajudando a detectar problemas no código
    images: {
      domains: ['m.media-amazon.com', 'youtu.be'], // Permite carregar imagens de domínios externos
    },
    i18n: {
      locales: ['en', 'pt-BR'], // Configuração para internacionalização (idiomas suportados)
      defaultLocale: 'pt-BR', // Define o idioma padrão
    },
    // Outras configurações que você pode adicionar
  };
  
  module.exports = nextConfig;
  