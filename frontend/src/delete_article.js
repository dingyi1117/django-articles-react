import React, {
    Component
} from 'react';
import './App.css';
import axios from "axios";

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
        axios
            .delete(`/api/articles/${this.props.productId}`)
            .then(res => this.props.changeAppMode('show'))
            .catch(err => console.log(err))
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