import React, {Component, useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import {connect} from "react-redux";
import {accountDelete} from "../../Actions";



class DefaultModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
        }
        this.toggleModal = this.toggleModal.bind(this)
    }
    onDelete(row){
        this.props.accountDelete(row.id);
    }
    toggleModal(){
        this.setState({
            modalIsOpen: ! this.state.modalIsOpen
        });
    }

    render() {
        return (
            <div>
                <Button variant="outline-danger" onClick = {this.toggleModal}>Delete</Button>&nbsp;
                <Modal show={this.state.modalIsOpen}>
                    <Modal.Header closeButton onClick={this.toggleModal} >
                        <Modal.Title>Warning</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Are you sure you want to delete this record?</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick = {()=>{this.onDelete(this.props.row)}}>Yes</Button>
                        <Button variant="secondary" onClick={this.toggleModal}>No</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return{
        accounts:state.accounts
    };
}

// export default connect(mapStateToProps,{accountDelete})(DefaultModal);
export default connect(mapStateToProps,{accountDelete})(DefaultModal);