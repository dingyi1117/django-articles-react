import React, {
	Component
} from 'react';
import './App.css';

const article = {
	id: 1,
	title: 'aaa',
	description: 'aaa',
	author: 'aaa',
	tags: 'a,a,a',
	created_at: '2019-01-22 10:50:23',
	updated_at: '2019-01-22 10:50:23'
}

class ArticleDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.prodectId,
			title: '',
			description: '',
			author: '',
			tags: '',
			created_at: '',
			updated_at: ''
		};
	};


	componentDidMount = () => {
		this.setState({
			id: article.id,
			title: article.title,
			description: article.description,
			author: article.author,
			tags: article.tags,
			created_at: article.created_at,
			updated_at: article.updated_at
		})
	};

	render() {
		return (
			<div>
            <a href='#'
                onClick={() => this.props.changeAppMode('show')}
                className='btn btn-primary margin-bottom-1em'>
                Article list
            </a>
 
            <form onSubmit={this.onSave}>
                <table className='table table-bordered table-hover'>
                    <tbody>
                    <tr>
                        <td>Title</td>
                        <td>{this.state.title}</td>
                    </tr>
 
                    <tr>
                        <td>Description</td>
                        <td>{this.state.description}</td>
                    </tr>

                    <tr>
                        <td>Author</td>
                        <td>{this.state.author}</td>
                    </tr>
 
                    <tr>
                        <td>Tags</td>
                        <td>{this.state.tags}</td>
                    </tr>
 
                    <tr>
                        <td>Created Date</td>
                        <td>{this.state.created_at}</td>
                    </tr>

                    <tr>
                        <td>Updated Date</td>
                        <td>{this.state.updated_at}</td>
                    </tr>
 
                    </tbody>
                </table>
            </form>
        </div>
		);
	}
}

export default ArticleDetail;