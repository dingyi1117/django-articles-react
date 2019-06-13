import React, {
  Component
} from 'react';
//import logo from './logo.svg';
import './App.css';
import ShowArticlesList from './articlesList_show';
import CreateArticle from './article_create';
import ArticleDetail from './article_detail';
import UpdateArticle from './article_update';
import DeleteArticle from './article_delete';

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