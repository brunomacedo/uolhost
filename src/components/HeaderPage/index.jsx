import React from 'react';
import PropTypes from 'prop-types';
import './header-page.sass';

const HeaderPage = (props) => {
  const {
    text, icon,
    component: Component,
    ...rest
  } = props;
  return (
    <Component {...rest} className="page-title">
      {icon && <span className="icon-background" style={{ backgroundImage: `url(${icon})` }} />}
      {text}
    </Component>
  );
};

HeaderPage.propTypes = {
  component: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
};

HeaderPage.defaultProps = {
  component: 'h1',
  icon: String(),
  text: String(),
};

export default HeaderPage;
