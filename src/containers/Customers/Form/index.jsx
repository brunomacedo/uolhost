import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './form.sass';

import userIcon from '../../../assets/images/user.png';
import Container from '../../../components/Container';
import { loadCustomers } from '../../../store/actions/customers';
import Loading from '../../../components/Loading';

class CustomersForm extends Component {
  state = {
    editing: false,
    loading: true,
    customer: {
      name: String(),
      cpf: String(),
      contact: {
        email: String(),
        tel: String(),
      },
      status: String(),
    },
  }

  async componentDidMount() {
    const { loadCustomers: propLoadCustomers } = this.props;
    await propLoadCustomers();
    await this.setState({ loading: false });
    await this.onPageLoad();
  }

  onPageLoad = () => {
    const { match, customers } = this.props;

    const customer = customers.find(({ _id }) => (
      _id.toString() === match.params.id.toString()
    ));

    if (customer) {
      this.setState({
        editing: true,
        customer,
      });
    }
  }

  onHandleChangeOne = ({ target }) => {
    const { value, name } = target;

    this.setState(prevState => ({
      customer: {
        ...prevState.customer,
        [name]: value,
      },
    }));
  }

  onHandleChangeLevel = ({ target }) => {
    const { value, name } = target;

    this.setState(prevState => ({
      customer: {
        ...prevState.customer,
        contact: {
          ...prevState.customer.contact,
          [name]: value,
        },
      },
    }));
  }

  render() {
    const { loading, editing, customer } = this.state;
    const {
      name, contact, cpf, status,
    } = customer;
    const { email, tel } = contact;

    return (
      <Container
        header={{
          icon: userIcon,
          component: 'h1',
          text: 'Painel de clientes',
        }}
        subHeader={{
          title: `${editing ? 'Editar' : 'Novo'} usuário`,
          description: `Informe os campos a seguir para ${editing ? 'editar' : 'criar novo'} usuário:`,
        }}
      >
        {!loading ? (
          <form className="page-form" onSubmit={e => e.preventDefault()}>
            <input value={name} name="name" onChange={this.onHandleChangeOne} placeholder="Nome" type="text" />
            <input value={email} name="email" onChange={this.onHandleChangeLevel} placeholder="E-mail" type="text" />
            <input value={cpf} name="cpf" onChange={this.onHandleChangeOne} placeholder="CPF" type="text" />
            <input value={tel} name="tel" onChange={this.onHandleChangeLevel} placeholder="Telefone" type="text" />
            <select name="status" value={status} onChange={this.onHandleChangeOne}>
              <option value="Ativo">Ativo</option>
              <option value="Inativo">Inativo</option>
              <option value="Aguardando ativação">Aguardando ativação</option>
              <option value="Desativado">Desativado</option>
            </select>
            <button
              type="submit"
              className="btn btn--theme"
            >
              {editing ? 'Salvar' : 'Criar'}
            </button>
            <Link to="/" className="btn btn--white">
              Voltar
            </Link>
          </form>
        ) : (
          <Loading />
        )}
      </Container>
    );
  }
}

CustomersForm.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
  customers: PropTypes.instanceOf(Object).isRequired,
  loadCustomers: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  customers: state.customersReducer.customers,
});

export default connect(mapStateToProps, {
  loadCustomers,
})(CustomersForm);
