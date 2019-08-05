import React from 'react';
import {GlobalStyle} from './style.js'//导入全局设置文件
import Header from './common/header'
import store from './store';
import { Provider } from 'react-redux'
function App() {
  return (
    <Provider store={store} >
      <GlobalStyle/>
      <Header/>
    </Provider>
  );
}

export default App;
