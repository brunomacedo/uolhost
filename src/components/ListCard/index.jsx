import React from 'react';
import PropTypes from 'prop-types';

const ListCard = ({ list }) => (
  <ul>
    {list.length ? (
      list.map((item) => {
        const { _id: itemId, name, contact } = item;
        return (
          <li key={itemId}>
            {name}
            <br />
            {contact.email}
          </li>
        );
      })
    ) : (
      <li>Carregando...</li>
    )
  }
  </ul>
);

ListCard.propTypes = {
  list: PropTypes.instanceOf(Object).isRequired,
};

export default ListCard;
