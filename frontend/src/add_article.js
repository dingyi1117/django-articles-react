import React, {
  Component
} from 'react';
//import logo from './logo.svg';
import './App.css';

class AddArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      title: '',
      description: '',
      author: '',
      tags: '',
      created_at: '',
      updated_at: '',
      successCreation: null
    }
  };

  onTitleChange = (e) => {
    this.setState({
      name: e.target.value
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
  // handle description change

  // handle price change
  onSave = (e) => {
    // data in the form
    var form_data = {
      name: this.state.title,
      author: this.state.author,
      description: this.state.description,
      tags: this.state.tags,
    };

    // submit form data to api
    /*    $.ajax({
            url: "http://localhost/api/product/create.php",
            type : "POST",
            contentType : 'application/json',
            data : JSON.stringify(form_data),
            success : function(response) {
     
                // api message
                this.setState({successCreation: response['message']});
     
                // empty form
                this.setState({name: ""});
                this.setState({description: ""});
                this.setState({price: ""});
                this.setState({selectedCategoryId: -1});
     
            }.bind(this),
            error: function(xhr, resp, text){
                // show error to console
                console.log(xhr, resp, text);
            }
        });
        */

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
 
            this.state.successCreation == "Product was created." ?
                <div className='alert alert-success'>
                    Article was saved.
                </div>
            : null
        }
 
        {
 
            this.state.successCreation == "Unable to create product." ?
                <div className='alert alert-danger'>
                    Unable to save Article. Please try again.
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
                    <td>Price ($)</td>
                    <td>
                        <input
                        type='number'
                        step="0.01"
                        className='form-control'
                        value={this.state.price}
                        required
                        onChange={this.onPriceChange}/>
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

export default AddArticle;