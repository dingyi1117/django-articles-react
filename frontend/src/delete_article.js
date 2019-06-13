import React, {
    Component
} from 'react';
import './App.css';

class DeleteArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.prodectId,
            title: '',
        };
    };



    onDelete = (e) => {

        // product to delete
        var productId = this.props.productId;

        /*
           // submit form data to api
           $.ajax({
               url: "http://localhost/api/product/delete.php",
               type : "POST",
               contentType : 'application/json',
               data : JSON.stringify({'id' : productId}),
               success : function(response) {
                   this.props.changeAppMode('read');
               }.bind(this),
               error: function(xhr, resp, text){
                   // show error in console
                   console.log(xhr, resp, text);
             
             */
        this.props.changeAppMode('show');
    };
    render() {
        return (
            <div className='row'>
            <div className='col-md-3'></div>
            <div className='col-md-6'>
                <div className='panel panel-default'>
                    <div className='panel-body text-align-center'>Are you sure?</div>
                    <div className='panel-footer clearfix'>
                        <div className='text-align-center'>
                            <button onClick={this.onDelete}
                                className='btn btn-danger m-r-1em'>Yes</button>
                            <button onClick={() => this.props.changeAppMode('show')}
                                className='btn btn-primary'>No</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-3'></div>
        </div>
        );
    }


}

export default DeleteArticle;