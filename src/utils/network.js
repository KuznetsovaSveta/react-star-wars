import { HTTPS, HTTP } from '@constants/api.js'

// сначала написали запрос с помощью промисов, но лучше это делать асинхронными функциями
// export const getApiResource = (url) => {
//     fetch(url)
//     .then(res => res.json())
//     .then(body => console.log(body))
//     .catch(error => console.log(error.message))
// }

/**
 * Функция изменяет url с HTTP на HTTPS
 * @param {String} url - url для изменения
 * @returns {String} - url с HTTPS
 */
export const changeHTTP = url => {
    const result = url ? url.replace(HTTP, HTTPS) : url
    return result
}

// способ с асинхронной функцией
/**
 * Отправляет fetch запрос
 * @param {String} url - url для запроса
 * @returns {Promise} - Promise с результатом запроса
 */
export const getApiResource = async (url) => {
    try{
        const res = await fetch(url);

        if(!res.ok){
            console.error('Could not fetch.', res.status);
            return false;
        }

        return await res.json();
    } catch (error){
        console.error('Could not fetch.', error.message)
        return false;
    }
}

// вызов фцнкции с обработкой промиса, но предпочтительнее использовать асинхр. самовызывающуюся функцию
// getApiResource(SWAPI_ROOT + SWAPI_PEOPLE)
// .then(body => console.log(body))

// асинхронная самовызывающаяся функция
// (async() => {
//     const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE)
//     console.log(body)
// })();

// пришел массив урлов, которые перебираются и на каждой итерации цикла берется элемент массива(один урл), на который мы делаем запрос через fetch, получаем ответ - это все попадает в Promise.all
export const makeConcurrentRequest = async (url) => {
    const res = await Promise.all(url.map(res => {
        return fetch(res).then(res => res.json())
    }));

    return res;
}