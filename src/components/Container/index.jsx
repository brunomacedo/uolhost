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
        {typeof children !== 'undefined' && children}
      </section>
    </Fragment>
  );
};

Container.propTypes = {
  children: PropTypes.instanceOf(Object),
  header: PropTypes.instanceOf(Object).isRequired,
  subHeader: PropTypes.instanceOf(Object).isRequired,
};

Container.defaultProps = {
  children: null,
};

export default Container;
