import React,{Component} from 'react';
import {Provider} from 'react-redux';
import {GlobalStyle} from './style.js';
import Header from './common/header';
import {GlobalStyleIconfont} from './statics/iconfont/iconfont';
import store from './store';

class App extends Component {
  render (){
    return (
      <Provider store={store}>
        <GlobalStyle />
        <GlobalStyleIconfont />
        <Header />
        hello world
      </Provider>
    );
  }
}

export default App;
