import React, {
	Component
} from 'react';
import './App.css';
import axios from "axios";


class ShowArticlesList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			articlesList: [],
			currentMode: 'read',
			productId: null
		};
	};


	componentDidMount = () => {
		this.refreshTable();
	}

	refreshTable = () => {
		axios
			.get("/api/articles")
			.then(res => this.setState({
				articlesList: res.data
			}))
			.catch(err => console.log(err))
	}


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
	                  onClick={() => this.props.changeAppMode('detail', item.id)}
	                  className='btn btn-primary m-r-1em'> Detail
	              </a>
	              <a
	                  onClick={() => this.props.changeAppMode('update', item.id)}
	                  className='btn btn-primary m-r-1em'> Update
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
                       <button  onClick={() => this.props.changeAppMode('search') }
                        className="btn btn-info">Search</button>
                       <button  onClick={() => this.props.changeAppMode('create') }
                        className="btn btn-primary">Add Article</button>
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