import {ACCOUNT_CREATE,ACCOUNT_FETCH,ACCOUNT_UPDATE,ACCOUNTS_FETCH,ACCOUNTS_ERROR} from "../Actions/types";


export default function(state = [], action) {
    switch (action.type) {
        case ACCOUNTS_FETCH :
        case ACCOUNT_FETCH :
            return action.payload;
        case ACCOUNT_UPDATE :
            return { saved: true, msg: "ทำการบันทึกเรียบร้อย"};
        case ACCOUNT_CREATE :
            return { ...state, saved: true, msg: "ทำการบันทึกเรียบร้อย"};
        case ACCOUNTS_ERROR:
            return state.concat([action.error]);
        default :
            return state;
    }
}