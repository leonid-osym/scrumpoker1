const INITIAL_STATE = {
    gameRotated: false,
    cardRotated: true,
    title: ''
};
export default (state = INITIAL_STATE, action) => {
    //console.log('action', action);
    switch (action.type) {
        case 'ROTATE_GAMEVIEW': {
            return {
                ...state,
                gameRotated: action.payload
            }
        }
        case 'ROTATE_CARD': {
            //console.log('ROTATE_CARD', action.payload );
            return {
                ...state,
                cardRotated: action.payload
            }
        }
        case 'SET_TITLE': {
            return {
                ...state,
                title: action.payload
            }
        }
        default: return state;
    }
}