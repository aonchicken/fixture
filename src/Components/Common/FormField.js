import React from "react";
import {Form,Alert} from "react-bootstrap";


export default ({input, label, type,required, meta: {error,touched}}) => {

    const aaa = () => {
        console.log(type);
    }
    return(
        <div>
            <Form.Group>
                    {/*<input  type={type}/>*/}
                <Form.Label>{label}</Form.Label>
                {label!="Group"&&(
                <Form.Control type={type} required={required} {...input}/>
                )}
                {label==="Group"&&(
                    <Form.Control type={type} required={required} {...input} as="select">
                        <option value="2">User</option>
                        <option value="3">Operator</option>
                        <option value="1">Admin</option>
                    </Form.Control>
                )}
                {error && touched && (
                    <Alert variant="danger mt-2">
                        {error}
                    </Alert>
                )}
            </Form.Group>
        </div>
    )
}