import React, {
	Component
} from 'react';
import './App.css';
import axios from 'axios';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import $ from "jquery";
class ShowArticlesList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			articlesList: [],
			currentMode: 'read',
			productId: null
		};

		this.renderTable = this.renderTable.bind(this)
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


	renderTable() {
		const data = this.state.articlesList
		const columns = [{
			Header: 'ID',
			accessor: 'id',
			width: 30
		}, {
			Header: 'Title',
			accessor: 'title',
			resizable: true
		}, {
			Header: 'Author',
			accessor: 'author'
		}, {
			Header: 'Tags',
			accessor: 'tags'
		}, {
			Header: 'Created Date',
			accessor: 'created_at',
			width: 110
		}, {
			Header: 'Updated Date',
			accessor: 'updated_at',
			width: 110
		}, {
			Header: 'Action',
			width: 180,
			Cell: row => (
				<div>
                <button onClick={() => this.props.changeAppMode('detail', row.original.id)}>Detail</button>
                <span> </span>
                <button onClick={() => this.props.changeAppMode('update', row.original.id)}>Edit</button>
                <span> </span>
                <button onClick={() => this.props.changeAppMode('delete', row.original.id)}>Delete</button>
            	</div>
			)
		}]

		return <ReactTable 
			minRows={0}
			defaultPageSize={10}
			className="-striped -highlight"
            getTableProps={() => {
            return {
              onScroll: e => {
                if (this.tableScrollTop === e.target.scrollTop) {
                  let left = e.target.scrollLeft > 0 ? e.target.scrollLeft : 0;
                  $(".ReactTable .rt-tr .frozen").css({ left: left });
                } else {
                  this.tableScrollTop = e.target.scrollTop;
                }
              }
            };
           }}
			data={data}
			columns={columns}/>

	}


	render() {
		return (
			<main className="content">
               <h2 className="text-uppercase text-center my-3">Manage your Ariticles</h2>
               <div className="row">
                 <div className="col-md-11 col-sm-12 mx-auto p-0" >
       
                     <div className="">
                       <button  onClick={() => this.props.changeAppMode('create') }
                        className="btn btn-primary">Add Article</button>
                     </div>
                     
                     {this.renderTable()}
                     
                 </div>
               </div>
             </main>
		);
	}
}

export default ShowArticlesList;