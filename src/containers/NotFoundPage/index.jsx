import React from 'react';
import Container from '../../components/Container';

const NotFoundPage = () => (
  <Container
    header={{
      component: 'h1',
      text: 'Página não encontrada',
    }}
    subHeader={{
      title: 'Desculpe, não encontramos a página',
      description: 'Parece que você tentou acessar uma página que foi não existe ou pode ter sido removida',
    }}
  />
);

export default NotFoundPage;
