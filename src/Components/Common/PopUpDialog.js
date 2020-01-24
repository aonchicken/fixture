import React, {Component} from 'react';
import {Button,Modal} from "react-bootstrap";

class PopUpDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false

        }
        this.handleShowToggle = this.handleShowToggle.bind(this);
    }
    handleShowToggle(){this.setState(
        {
            show:!this.state.show
        }
    )} ;

    render() {
        return (
            <div>
                <Button variant="primary" onClick={this.handleShowToggle}>
                    Launch demo modal
                </Button>
                <Modal show={this.state.show}>
                    <Modal.Header closeButton onClick={this.handleShowToggle}>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleShowToggle}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleShowToggle}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default PopUpDialog;