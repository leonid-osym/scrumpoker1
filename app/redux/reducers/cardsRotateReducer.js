const INITIAL_STATE = {
    title: '',
    gameMode: 'standard'
};
export default (state = INITIAL_STATE, action) => {
    //console.log('action', action);
    switch (action.type) {
        case 'SET_GAME_MODE': {
            return {
                ...state,
                gameMode: action.payload
            }
        }
        default: return state;
    }
}