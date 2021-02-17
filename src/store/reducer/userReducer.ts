import { AnyAction } from 'redux';
const defaultState:any = {
    userInfo:{
        name:'sj'
    },
    navbarStatus:false
};

let userReducer = (state = defaultState, action:AnyAction) => {
    switch(action.type) {
        case 'login':
            if(state.userInfo.name){
                return state
            }
            var newState = JSON.parse(JSON.stringify(state))
            newState.userInfo.name='sj'
            return newState
        case 'toggleNavbarStatus':
            var newState = JSON.parse(JSON.stringify(state))
            newState.navbarStatus=action.preload
            return newState
        default:
            return state;
    }
}

export default userReducer;
