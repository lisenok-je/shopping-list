/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

const inputWrapper = document.querySelector('.input-wrapper')
const inputEnter = document.querySelector('#input');
const itemsContainer = document.querySelector('.items');

inputEnter.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        const productText = inputEnter.value;

        const newItems = document.createElement('div');
        newItems.classList.add('product');
        newItems.textContent = productText;

        itemsContainer.append(productText);

        newItems.addEventListener('click', () => {
            newItems.classList.toggle('done');
        })

        inputEnter.value = ' ';

    }
});
