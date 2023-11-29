export const RESTORE_TOKEN = 'RESTORE_TOKEN';
export const SIGNIN = 'SIGN_IN';
export const SIGNOUT = 'SIGN_OUT';

export const initialState = {
    userToken: null,
    user: null
}
const AuthReducer = (prevState = initialState, action) => {
    switch(action.type){
        case RESTORE_TOKEN:{
            return{
                ...prevState,
                userToken: action.token,
                user: action.user
            }
        }
        case SIGNIN:{
            return{
                ...prevState,
                userToken: action.token,
                user: action.user
            }
        }
        case SIGNOUT:{
            return{
                ...prevState,
                userToken: null,
                user: null
            }
        }   
    }
}

export default AuthReducer