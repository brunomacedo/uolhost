import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import userIcon from '../../assets/images/user.png';
import Container from '../../components/Container';
import { loadCustomers } from '../../store/actions/customers';
import ListCard from '../../components/ListCard';

class Home extends Component {
  componentDidMount() {
    const { loadCustomers: propsLoadCustomers } = this.props;
    propsLoadCustomers();
  }

  render() {
    const { customers } = this.props;
    return (
      <Container
        header={{
          icon: userIcon,
          component: 'h1',
          text: 'Painel de clientes',
        }}
        subHeader={{
          title: 'Listagem de usuários',
          description: 'Escolha um cliente para visualizar os detalhes',
          button: {
            text: 'Novo cliente',
            classes: 'btn--theme',
          },
        }}
      >
        <ListCard list={customers} />
      </Container>
    );
  }
}

Home.propTypes = {
  customers: PropTypes.instanceOf(Object).isRequired,
  loadCustomers: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  customers: state.customersReducer.customers,
});

export default connect(mapStateToProps, {
  loadCustomers,
})(Home);
