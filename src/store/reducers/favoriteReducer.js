import {ADD_PESON_TO_FAVORITE, REMOVE_PESON_FROM_FAVORITE} from '@store/actions/index.js'

const favoriteReducer = (state, action) => {
    switch (action.type) {
        case ADD_PESON_TO_FAVORITE:
            return {
                ...state,
                ...action.payload,
            }
        case REMOVE_PESON_FROM_FAVORITE:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;

    }
}

export default favoriteReducer;