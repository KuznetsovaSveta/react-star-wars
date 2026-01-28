import {ADD_PESON_TO_FAVORITE, REMOVE_PESON_FROM_FAVORITE} from '@store/actions/index.js'

// пишем функции, которые вернут объекты
export const addPersonToFavoite = () => ({
    type: ADD_PESON_TO_FAVORITE,
    payload: '',
})

export const removePersonFromFavoite = () => ({
    type: REMOVE_PESON_FROM_FAVORITE,
    payload: '',
})