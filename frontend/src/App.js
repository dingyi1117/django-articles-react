import React, {
  Component
} from 'react';
import './App.css';
import ShowArticlesList from './component/articlesList_show';
import CreateArticle from './component/article_create';
import ArticleDetail from './component/article_detail';
import UpdateArticle from './component/article_update';
import DeleteArticle from './component/article_delete';


import {
  configure
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({
  adapter: new Adapter()
});
/* eslint-disable */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMode: 'show',
      productId: null
    };
  };

  changeAppMode = (newMode, productId) => {
    this.setState({
      currentMode: newMode
    });
    if (productId !== undefined) {
      this.setState({
        productId: productId
      });
    }
  };

  render() {
    var modeComponent = <ShowArticlesList changeAppMode={this.changeAppMode}/>;
    switch (this.state.currentMode) {
      case 'show':
        break;
      case 'detail':
        modeComponent = <ArticleDetail productId={this.state.productId} changeAppMode={this.changeAppMode}/>;
        break;
      case 'create':
        modeComponent = <CreateArticle changeAppMode={this.changeAppMode}/>;
        break;
      case 'update':
        modeComponent = <UpdateArticle changeAppMode={this.changeAppMode} productId={this.state.productId}/>;
        break;
      case 'delete':
        modeComponent = <DeleteArticle changeAppMode={this.changeAppMode} productId={this.state.productId}/>;
        break;
      default:
        break;
    }

    return modeComponent;
  }
}
export default App;