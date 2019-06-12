import React, {
  Component
} from 'react';
//import logo from './logo.svg';
import './App.css';

class AddArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articlesList: null,
      currentMode: 'add',
      productId: null
    };
  };

  render() {
    return (
      <main className='content'>
        <div>hhhh</div>
      </main>)
  }
}

export default AddArticle;