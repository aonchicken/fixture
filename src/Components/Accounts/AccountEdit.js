import React, {Component} from 'react';
import UserForm from "../Accounts/UserForm";
import {connect} from "react-redux";
import {accountCreate,accountFetch,authEdit} from "../../Actions/AccountActions";


class AccountEdit extends Component {

    componentDidMount() {
        if(this.props.match.params.id){
            this.props.accountFetch(this.props.match.params.id)
        }
    }

    render() {
        const {formValues, match , accounts , accountCreate , authEdit} = this.props;
        console.log(match);
        return (
            <div>
                <div className="container col-md-5">
                    {match.path.indexOf("add") > 0 && (
                        <div>
                            <h2>Add Account</h2>
                            <UserForm onAccountSubmit={()=> accountCreate(formValues)} />
                        </div>
                    )}
                    {match.path.indexOf("edit") > 0 && (
                        <div>
                            <h2>Edit Account</h2>
                            <UserForm onAccountSubmit={()=> authEdit(accounts.id,formValues)} />
                        </div>
                    )}

                </div>
            </div>
        );
    }
}
function mapStateToProps({form,accounts}) {
    return {
        formValues: form.userForm ? form.userForm.values: null, accounts
    }
}

export default connect(mapStateToProps,{accountFetch,authEdit,accountCreate})(AccountEdit);