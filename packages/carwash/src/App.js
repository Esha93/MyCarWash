import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './components/Layout/Layout';
import Home from './components/Home/Home'
import Packages from './containers/Packages/Packages';
import Login from './containers/Login/Login';
import Signup from './containers/Login/Signup/Signup';
import ContactData from './containers/ContactData/ContactData';
import OrderConfirmation from './components/OrderSummary/OrderConfirmation';
import Logout from './containers/Logout/Logout';
import './App.css';
import * as actions from './store/actions/actions';

class App extends React.Component {
 
  componentDidMount() {
    this.props.onCheckAuth();
  }

  render() {
    return (
      <>
        <Layout isAuthenticated={this.props.isAuth}>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/home" exact component={Home} />
            <Route path="/packages"  component={Packages} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/cart" exact component={ContactData} />
            <Route path='/order-confirmed' component={OrderConfirmation} />
            <Route path='/logout' component={Logout} />
          </Switch>
        </Layout>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.isAuthenticated
  }
}

const mapDispatchToProps = dispatch => {
    return {
      onCheckAuth: () => dispatch(actions.checkAuth()) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
