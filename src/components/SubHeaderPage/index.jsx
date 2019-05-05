import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './sub-header-page.sass';

const SubHeaderPage = (props) => {
  const {
    title,
    description,
    button,
  } = props;

  return (
    <article className="page-article">
      <header>
        {title && <h2>{title}</h2>}
        {description && <h3>{description}</h3>}
      </header>
      {button && (
        button.link ? (
          <Link
            className={`btn ${button.classes}`}
            to={button.link}
          >
            {button.text}
          </Link>
        ) : (
          <button
            className={`btn ${button.classes}`}
            type="button"
          >
            {button.text}
          </button>
        )
      )}
    </article>
  );
};

SubHeaderPage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.instanceOf(Object),
};

SubHeaderPage.defaultProps = {
  title: String(),
  description: String(),
  button: null,
};

export default SubHeaderPage;
