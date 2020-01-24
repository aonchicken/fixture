import React, {Component} from 'react';
import {reduxForm, Field, initialize} from "redux-form";
import FormField from "../Common/FormField";
import {Button, Form} from "react-bootstrap";
import {userFormFields} from "./formFields"
import {connect} from "react-redux";





class UserForm extends Component {

    renderFields(formFields) {
        return formFields.map(({label,name,type,required})=>{
            return(
                    <Field key={name} label={label} name={name} type={type} required={required} component={FormField}/>
            )
        })
    }

    render() {
        const { onAccountSubmit} = this.props;
        return (
            <div>
                <Form onSubmit={this.props.handleSubmit(onAccountSubmit)} >
                    {/*<Field name="username" type="text" component="input"/>*/}
                    {/*<Field name="first_name" type="text" component="input"/>*/}
                    {/*<Field name="last_name" type="text" component="input"/>*/}
                    {this.renderFields(userFormFields)}


                    <Button variant="primary btn-block" type="submit">
                        Save
                    </Button>
                </Form>
            </div>
        );
    }
}

function validate(values){
    console.log(values)
    const errors = {}
    userFormFields.forEach(({name,required}) => {
        if(!values[name]&&required){
            errors[name] = "Please Fill Data"
        }
    })
    return errors;
}

function mapStateToProps({accounts}){
    if(accounts&&accounts.id){
        return{initialValues: accounts}
    }else {
        return {}
    }
}

UserForm = reduxForm({validate, form:"userForm"})(UserForm)

export default connect(mapStateToProps)(UserForm);