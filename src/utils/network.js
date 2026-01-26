// сначала написали запрос с помощью промисов, но лучше это делать асинхронными функциями
// export const getApiResource = (url) => {
//     fetch(url)
//     .then(res => res.json())
//     .then(body => console.log(body))
//     .catch(error => console.log(error.message))
// }

// способ с асинхронной функцией
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