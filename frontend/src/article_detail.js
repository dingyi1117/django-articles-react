import React, {
	Component
} from 'react';
//import logo from './logo.svg';
import './App.css';

class ArticleDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			articlesList: null,
			currentMode: 'detail',
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

export default ArticleDetail;