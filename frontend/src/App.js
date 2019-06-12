import React, {
  Component
} from 'react';
//import logo from './logo.svg';
import './App.css';
import ShowArticlesList from './show_articlesList';
import AddArticle from './add_article';
import ArticleDetail from './article_detail';

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
      case 'add':
        modeComponent = <AddArticle changeAppMode={this.changeAppMode} currentMode = {this.state.currentMode}/>;
        break;
      case 'delete':
        modeComponent = <ArticleDetail changeAppMode={this.changeAppMode} productId={this.state.productId}/>;
        break;
      default:
        break;
    }

    return modeComponent;
  }
}
export default App;