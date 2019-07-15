export const rotateCard = (state) => {
    //console.log(text);
    return {
        type: 'ROTATE_CARD',
        payload: state
    }
}

export const rotateGameView = (state) => {
    //console.log(text);
    return {
        type: 'ROTATE_GAMEVIEW',
        payload: state
    }
}

export const setTitle = (title) => {
    return {
        type: 'SET_TITLE',
        payload: title
    }
}