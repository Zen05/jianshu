import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';//css文件在一个文件中引入后全局生效
// import './style.js'; //安装的styled-components保证可以将样式写在js文件中，通过yarn add styled-components安装
// import {GlobalStyle} from './statics/iconfont/iconfont.js'
import './statics/iconfont/iconfont.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

