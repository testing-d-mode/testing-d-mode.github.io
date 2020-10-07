const btn = document.querySelector('.btn');
const dataContainer = document.querySelector('.data');
btn.addEventListener('click', evt => {
    evt.preventDefault();
    const mode = window.matchMedia('(prefers-color-scheme: dark)');
    // console.log(mode);
    dataContainer.innerHTML = `Стиль: ${mode.media}` + ' | ' + `Запрошен: ${mode.matches}`;
    if (mode.media == 'not all' || mode.matches) {
        dataContainer.innerHTML = `Стиль: ${mode.media}` + ' | ' + `Запрошен: ${mode.matches}`;
    } else {
        dataContainer.innerHTML = `Стиль: ${mode.media}` + ' | ' + `Запрошен: ${mode.matches}`;
    }
});
