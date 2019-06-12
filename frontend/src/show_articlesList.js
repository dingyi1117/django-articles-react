import React, {
	Component
} from 'react';
import logo from './logo.svg';
import './App.css';

const articlesItems = [{
	id: 1,
	title: 'aaa',
	description: 'aaa',
	author: 'aaa',
	tags: 'a,a,a',
	created_at: '2019-01-22 10:50:23',
	updated_at: '2019-01-22 10:50:23'
}, {
	id: 2,
	title: 'aaa',
	description: 'aaa',
	author: 'aaa',
	tags: 'a,a,a',
	created_at: '2019-01-22 10:50:23',
	updated_at: '2019-01-22 10:50:23'
}];

class ShowArticlesList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			articlesList: articlesItems,
			currentMode: 'read',
			productId: null
		};
	};


	renderItems() {
		const showitems = this.state.articlesList;
		return showitems.map(item => (
			<tr key={item.id}>
	          <td>{item.id}</td>
	          <td>{item.title}</td>
	          <td>{item.description}</td>
	          <td>{item.author}</td>
	          <td>{item.tags}</td>
	          <td>{item.created_at}</td>
	          <td>{item.updated_at}</td>
	          <td>
	              <a href='#'
	                  onClick={() => this.props.changeAppMode('update', item.id)}
	                  className='btn btn-primary m-r-1em'> Edit
	              </a>
	              <a
	                  onClick={() => this.props.changeAppMode('delete', item.id)}
	                  className='btn btn-danger'> Delete
	              </a>
	          </td>
	        </tr>
		));
	};

	render() {
		return (
			<main className="content">
               <h2 className="text-uppercase text-center my-3">Manage your Ariticles</h2>
               <div className="row ">
                 <div className="col-md-6 col-sm-10 mx-auto p-0">
                   <div className="card p-3">
                     <div className="">
                       <input type="text" id="myInput" placeholder="Author,Tags"></input>
                       <button  onClick={() => this.props.changeAppMode('search') } className="btn btn-info">Search</button>
                       <button  onClick={() => this.props.changeAppMode('add') } className="btn btn-primary">Add Articles</button>
                     </div>
                     <table className="table table-bordered table-hover">
                       <tbody>
                         <tr>
                           <th>ID</th>
                           <th>Title</th>
                           <th>Description</th>
                           <th>Author</th>
                           <th>tags</th>
                           <th>Created Date</th>
                           <th>Updated Date</th>
                           <th>Actions</th>
                         </tr>
                         {this.renderItems()}
                       </tbody>
                     </table>
                   </div>
                 </div>
               </div>
             </main>
		);
	}
}

export default ShowArticlesList;