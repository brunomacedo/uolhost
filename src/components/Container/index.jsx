import React from 'react';
import PropTypes from 'prop-types';
import './container.sass';
import HeaderPage from '../HeaderPage';
import userIcon from '../../assets/images/user.png';

const Container = (props) => {
  const { children } = props;

  return (
    <section className="container">
      <HeaderPage
        icon={userIcon}
        component="h3"
        text="Painel de clientes"
      />
      {children}
    </section>
  );
};

Container.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Container;
