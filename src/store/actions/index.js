import {
  ADD_PERSON_TO_FAVORITE,
  REMOVE_PERSON_FROM_FAVORITE,
} from "@store/constants/actiontypes.js";

// пишем функции, которые вернут объекты
// принимает объект person и возвращает объект person дальше - в reducer
export const addPersonToFavoite = person => ({
    type: ADD_PERSON_TO_FAVORITE,
    payload: person,
})

export const removePersonFromFavoite = personId => ({
  type: REMOVE_PERSON_FROM_FAVORITE,
  payload: personId,
});
