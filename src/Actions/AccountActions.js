import axios from "axios";
import {AUTH_SIGNUP,AUTH_SIGNIN,ACCOUNT_UPDATE,ACCOUNT_FETCH,ACCOUNTS_FETCH,ACCOUNT_CREATE,ACCOUNTS_ERROR} from "./types";

export const authRegister =  values =>{
    return dispatch => {
        axios.post("http://localhost:3001/products",values).then(
            res => {
                dispatch({type: AUTH_SIGNUP});
            }
        )
    }
}
export const authLogin =  values =>{
    return dispatch => {
        axios.post("http://localhost:3001/products",values).then(
            res => {
                dispatch({type: AUTH_SIGNIN});
            }
        )
    }
}

export const authEdit = (id,values) => {
    return dispatch => {
        axios.patch("http://localhost:8000/auth/users/"+id+"/",values,
            {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('access')}`
                }
            }).then(
            res => {
                dispatch({type: ACCOUNT_UPDATE});
            }
        )
    }
}

export const accountFetch = id =>{
    return  dispatch =>{
        axios.get("http://localhost:8000/auth/users/"+ id,
            {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('access')}`
                }
            }).then(
            res =>{
                dispatch({ type : ACCOUNT_FETCH, payload : res.data});
            }
        )
    }
}

export const accountsFetch = () => {

    return  dispatch =>{
        axios.get("http://localhost:8000/auth/users/",
            {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('access')}`
                }
            }).then(
            res =>{
                // console.log(res)
                dispatch({ type : ACCOUNTS_FETCH, payload : res.data.results});
            }
        ).catch(
            error =>{
                // console.log(error.response.statusText)
                dispatch({ type : ACCOUNTS_ERROR, error : error.response.statusText});
            }
        )
    }
}

export const accountDelete = id => {
    return dispatch => {

        axios.delete("http://localhost:8000/auth/users/" + id,
            {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('access')}`
                }
            }).then(res => {
            axios.get("http://localhost:8000/auth/users/",
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('access')}`
                    }
                }).then(
                res => {
                    dispatch({ type : ACCOUNTS_FETCH, payload: res.data.results})
                }
            ).catch(
                err => {
                    dispatch({ type : ACCOUNTS_ERROR, error: err})
                }
            )
        })
    }
}

export const accountCreate =  values =>{
    return dispatch => {
        axios.post("http://localhost:8000/auth/users/",values,
            {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('access')}`
                }
            }).then(
            res => {
                dispatch({type: ACCOUNT_CREATE});
            }
        )
    }
}
