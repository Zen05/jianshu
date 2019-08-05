import React from 'react';
import {GlobalStyle} from './style.js';//导入全局设置文件
import Header from './common/header';
import store from './store';
import {BrowserRouter,Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import Detail from './pages/detail';
import Home from './pages/home';
import Login from './pages/login';
import Write from './pages/write';

function App() {
  return (
    <Provider store={store} >
      <GlobalStyle/>
      <BrowserRouter>
        <div>
          <Header/>
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/write' exact component={Write}></Route>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
