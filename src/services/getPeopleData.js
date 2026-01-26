import { HTTP, HTTPS, SWAPI_ROOT, SWAPI_PEOPLE } from '@constants/api.js'

const checkProtocol = url => {
    if (url.indexOf(HTTPS) !== -1) {
        return HTTPS;
    }

    return HTTP;
}

// Получить ID персонажа по URL
//-----------------------------------------------
const getId = (url, category) => {
    const protocol = checkProtocol(url);

    const id = url
        .replace(HTTP+SWAPI_ROOT+category, '')
        .replace(protocol+SWAPI_ROOT+category, '')
        .replace(/\//g, '')

    return id;
}

export const getPeopleId = (url) => getId(url, SWAPI_PEOPLE);

// TODO: найти замену апи с картинками
export const getPeopleImage = (id) => `https://i.pinimg.com/originals/28/83/1e/28831e2dd3a6b2b1f9c563c75fabdea4.jpg`