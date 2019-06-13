import React, {
    Component
} from 'react';
import axios from "axios";
import './App.css';
import moment from "moment"


class UpdateArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.prodectId,
            title: '',
            description: '',
            author: '',
            tags: '',
            created_at: '',
            updated_at: '',
            successUpdate: '',
            date: new Date()
        };
    };


    componentDidMount() {
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

    onSave = (e) => {
        // data in the form
        var form_data = {
            id: this.props.productId,
            title: this.state.title,
            author: this.state.author,
            description: this.state.description,
            tags: this.state.tags,
            created_at: this.state.created_at,
            updated_at: moment(this.state.date).format('YYYY-MM-DD')
        };

        axios
            .put(`/api/articles/${this.props.productId}/`, form_data)
            .then(res => {
                this.setState({
                    successUpdate: "Success",
                    updated_at: moment(this.state.date).format('YYYY-MM-DD')
                })
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    successUpdate: "Fail"
                })
            })
        e.preventDefault();
    };

    onTitleChange = (e) => {
        this.setState({
            title: e.target.value
        });
    };

    onAuthorChange = (e) => {
        this.setState({
            author: e.target.value
        });
    };

    onDescriptionChange = (e) => {
        this.setState({
            description: e.target.value
        });
    };

    onTagsChange = (e) => {
        this.setState({
            tags: e.target.value
        });
    };
    render() {
        return (
            <div>
            {
                this.state.successUpdate === "Success" ?
                    <div className='alert alert-success'>
                        Article was updated.
                    </div>
                : null
            }
            {
                this.state.successUpdate === "Fail" ?
                    <div className='alert alert-danger'>
                        Unable to update Article. Please try again.
                    </div>
                : null
            }
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
                    <td>
                        <input
                        type='text'
                        className='form-control'
                        value={this.state.title}
                        required
                        onChange={this.onTitleChange} />
                    </td>
                </tr>
 
                <tr>
                    <td>Author</td>
                    <td>
                        <textarea
                        type='text'
                        className='form-control'
                        required
                        value={this.state.author}
                        onChange={this.onAuthorChange}>
                        </textarea>
                    </td>
                </tr>

                <tr>
                    <td>Description</td>
                    <td>
                        <textarea
                        type='text'
                        className='form-control'
                        required
                        value={this.state.description}
                        onChange={this.onDescriptionChange}>
                        </textarea>
                    </td>
                </tr>

                <tr>
                    <td>Tags</td>
                    <td>
                        <textarea
                        type='text'
                        className='form-control'
                        required
                        value={this.state.tags}
                        onChange={this.onTagsChange}>
                        </textarea>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button
                        className='btn btn-primary'
                        onClick={this.onSave}>Save</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </form>
 
        </div>
        );
    }
}

export default UpdateArticle;