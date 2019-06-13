import React, {
    Component
} from 'react';
import '../App.css';
import axios from "axios";


class ArticleDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            title: '',
            description: '',
            author: '',
            tags: '',
            created_at: '',
            updated_at: ''
        };
    };


    componentDidMount = () => {
        axios
            .get(`/api/articles/${this.props.productId}`)
            .then(res => {
                this.setState({
                    title: res.data.title,
                    author: res.data.author,
                    description: res.data.description,
                    tags: res.data.tags,
                    created_at: res.data.created_at,
                    updated_at: res.data.updated_at
                });
            })
            .catch(err => console.log(err))
    };

    onUpdate = () => {
        this.props.changeAppMode('update', this.props.productId)
    }

    render() {
        return (
            <main className="content">
               <h3 className="text-uppercase text-center my-3">Article Detail</h3>
               <div className="row">
                 <div className="col-md-11 col-sm-12 mx-auto p-0" >
                    <div className="">
                       <button  onClick={() => this.props.changeAppMode('show') }
                        className="btn btn-primary">Back to List</button>
                    </div>
 
                    <form onSubmit={this.onUpdate}>
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
                                <tr>
                                    <td></td>
                                    <td>
                                        <button
                                        className='btn btn-primary'
                                        onClick={ this.onUpdate}>Update</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        </main>
        );
    }
}

export default ArticleDetail;