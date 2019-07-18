const INITIAL_STATE = {
    title: '',
    gameMode: 'standard',
    cardRevealMode: false
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
        case 'SET_CARD_REVEAL_MODE': {
            return {
                ...state,
                cardRevealMode: action.payload
            }
        }
        default: return state;
    }
}