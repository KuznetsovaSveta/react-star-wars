export const getLocalStorage = key => {
    const data = localStorage.getItem(key);

    if (data !== null){
        // здесь наоборот - получаем данные в строке, затем преобразуем в объект
        return JSON.parse(data);
    } 

    return {};
}

// data в данном случае будет представлять собой объект или массив
// но в локальном хранилище их хранить нельзя, потому что там хранятся данные в строковом виде
// поэтому нужно преобразовать данные в строку
export const setLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}