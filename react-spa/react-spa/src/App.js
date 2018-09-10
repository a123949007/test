import React, { Component } from 'react';
import { Layout } from 'antd';
import SideNav from './component/layout/SideNav';
import RootHeader from './component/layout/RootHeader';
import Welcome from './page/Welcome';
import Search from './page/Search';
import Setting from './page/Setting';
import './App.css';
import 'antd/dist/antd.css';
import {Route} from 'react-router-dom';
const {Content} = Layout;

class App extends Component {
  render() {
    return (
      <Layout style={{minHeight:'100vh'}}>
        <RootHeader/>
        <Layout style={{paddingTop:'64px'}}>
          <SideNav/>
          <Content style={{ margin: '16px 16px' }}>
            <div style={{ padding: 24, background: '#fff'}}>
              <Route path='/' component={Welcome} exact></Route>
              <Route path='/search' component={Search} exact />
              <Route path='/setting' component={Setting} exact />
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
