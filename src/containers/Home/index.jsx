import React, { Fragment } from 'react';
import Header from '../../components/Header';
import Container from '../../components/Container';

const Home = () => (
  <Fragment>
    <Header />
    <Container>
      <button className="btn bg-theme" type="button">Novo cliente</button>
    </Container>
  </Fragment>
);

export default Home;
