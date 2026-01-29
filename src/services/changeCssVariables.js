export const changeCssVariables = theme => {
    const root = document.querySelector(':root');

    // указываем, какое свойство и на какое значение меняем
    // root.style.setProperty('--theme-default-header', `var(--theme-${theme}-header)`);
    // root.style.setProperty('--theme-default-bgimage', `var(--theme-${theme}-bgimage)`);

    // оптимизировали написанное выше, т.к. для каждой темы может быть множество переменных
    // Формат css-переменной:
    // --theme-default-ИМЯ   #дефолтная переменная
    // --theme-light-ИМЯ     #переменная для light
    // --theme-neitral-ИМЯ   #переменная для neitral
    // --theme-dark-ИМЯ      #переменная для dark
    const cssVariables = ['header', 'bgimage'];

    cssVariables.forEach(element => {
        root.style.setProperty(`--theme-default-${element}`, `var(--theme-${theme}-${element})`);
    })
}