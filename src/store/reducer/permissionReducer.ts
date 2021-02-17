import { AnyAction } from 'redux';

const defaultState = {
    permissionRoutes:[]
}

const permissionReducer = (state = defaultState, action:AnyAction) => {
    switch(action.type) {
        case 'getPermissionRoutes':
            const newState = JSON.parse(JSON.stringify(state))
            newState.permissionRoutes = JSON.parse(JSON.stringify(action.preload))
            return newState;
        default:
            return state;
    }
}

export default permissionReducer