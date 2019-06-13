import React, {
    Component
} from 'react';
import './App.css';
import axios from "axios";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

class CreateArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            title: '',
            description: '',
            author: '',
            tags: '',
            successCreation: "",
            date: new Date()
        }
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

    onDateChange = (date) => {
        this.setState({
            date: date
        });
    }
    // handle description change

    // handle price change
    onSave = (e) => {
        // data in the form
        var form_data = {
            title: this.state.title,
            author: this.state.author,
            description: this.state.description,
            tags: this.state.tags,
            created_at: moment(this.state.date).format('YYYY-MM-DD'),
            updated_at: moment(this.state.date).format('YYYY-MM-DD')
        };

        axios
            .post("/api/articles/", form_data)
            .then(res => {
                this.props.changeAppMode("show");
                this.setState({
                    successCreation: "Accept",
                    title: "",
                    author: "",
                    description: "",
                    tags: ""
                })
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    successCreation: "Fail"
                })
            })
        e.preventDefault();
    };

    render() {
        /*
        - tell the user if a product was created
        - tell the user if unable to create product
        - button to go back to products list
        - form to create a product
        */
        return (
            <div>
             {
 
            this.state.successCreation === "Accept"?
                <div className='alert alert-success'>
                    Product was saved.
                </div>
            : null
        }
 
        {
 
            this.state.successCreation === "Fail" ?
                <div className='alert alert-danger'>
                    Unable to save product. Please try again.
                </div>
            : null
        }

 
        <a href='#'
            onClick={() => this.props.changeAppMode('show')}
            className='btn btn-primary margin-bottom-1em'> Article List
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
                    <td>Create Date</td>
                    <td>
                      <DatePicker 
                      selected={this.state.date} 
                      onChange={this.onDateChange}
                      value={this.state.date}
                      readonly="readonly"/>  
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

export default CreateArticle;