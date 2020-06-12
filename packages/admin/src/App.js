import React from 'react';
import Layout from './components/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import UserManagement from './components/UserManagement/UserManagement';
import OrderManagement from './components/OrderManagement/OrderManagement';
import WashersList from './components/UserManagement/WasherList/WasherList';
import Addwasher from './components/UserManagement/AddWasher/AddWasher';
import Logout from './components/Logout/Logout';

import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/order-management' component={OrderManagement} />
          <Route path='/user-management' component={UserManagement} />
          <Route path='/user-management/washerslist' component={WashersList} />
          <Route path='/user-management/addwashers' component={Addwasher} />
          <Route path='/logout' component={Logout} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
