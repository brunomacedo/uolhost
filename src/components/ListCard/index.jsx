import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './list-card.sass';
import withStyles from 'react-jss';

/* Just a simple example how to use JSS */
const styles = {
  status: {
    display: 'inline-block',
    verticalAlign: 'middle',
    borderRadius: '50%',
    width: '14px',
    height: '14px',
    marginRight: '8px',
    marginTop: '-2px',
  },
  disclaimer: {
    padding: '30px 0',
  },
};

const ListCard = ({ list, classes }) => (
  <Fragment>
    <ul className="listStyle">
      {list.length ? (
        list.map((item) => {
          const {
            _id: itemId,
            name,
            cpf,
            status,
            contact,
          } = item;
          return (
            <li key={itemId}>
              <div>
                <strong>{name}</strong>
                <br />
                {contact.email}
              </div>
              <div>
                <strong>{cpf}</strong>
                <br />
                {contact.tel}
              </div>
              <div>
                <span className={`status-${status.split(' ')[0].toLowerCase()} ${classes.status}`} />
                {status}
              </div>
              <div>
                <Link
                  to={`/clientes/${itemId}`}
                  className="btn btn--white"
                >
                  Editar
                </Link>
              </div>
            </li>
          );
        })
      ) : (
        <li>Nenhum item disponível...</li>
      )
    }
    </ul>
    <p className={classes.disclaimer}>
      {`Exibindo ${list.length} clientes`}
    </p>
  </Fragment>
);

ListCard.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  list: PropTypes.instanceOf(Object).isRequired,
};

export default withStyles(styles)(ListCard);
