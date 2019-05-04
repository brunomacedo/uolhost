import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './container.sass';

import Header from '../Header';
import HeaderPage from '../HeaderPage';
import SubHeaderPage from '../SubHeaderPage';

const Container = (props) => {
  const { children, header, subHeader } = props;

  return (
    <Fragment>
      <Header />
      <section className="container">
        <HeaderPage {...header} />
        <SubHeaderPage {...subHeader} />
        {children}
      </section>
    </Fragment>
  );
};

Container.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  header: PropTypes.instanceOf(Object).isRequired,
  subHeader: PropTypes.instanceOf(Object).isRequired,
};

export default Container;
