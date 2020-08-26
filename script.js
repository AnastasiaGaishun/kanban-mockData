const appElement = document.querySelector('.app');

let htmlString = '';

for (let index = 0; index < GET_COLUMNS_RESPONSE.length; index++) {

    const colmnId = GET_COLUMNS_RESPONSE[index].id;
    const currentColumnCards = getCardsByColumnId(colmnId);
    let allCardsForColumnHtml = '';

    currentColumnCards.forEach(function (x) {
        allCardsForColumnHtml += getCard(x.title, x.description, x.userId);
    });


    htmlString += `<div class="col">
                        <div class="col__header">${GET_COLUMNS_RESPONSE[index].name}</div>
                        <div class="col_content">${allCardsForColumnHtml}</div>
                    </div>`;
}

appElement.innerHTML = htmlString;

function getCardsByColumnId(id) {
    return GET_CARDS_RESPONSE.filter(function (card) {
        return card.columnId === id;
    })
}

function getCard(title, description, userName) {
    return `<div class="card">
                <div class="card__inform">
                    <div class="card__title">${title}</div>
                    <div class="card__description">${description}</div>
                </div>
                <div class="card__user">
                    <div class="card__user-name">${userName}</div>
                </div>
            </div>`;
}






const appElement = document.querySelector('.app');

let htmlString = '';


GET_COLUMNS_RESPONSE.forEach((column) => {

    const colmnId = column.id;
    const currentColumnCards = getCardsByColumnId(colmnId);
    let allCardsForColumnHtml = '';

    currentColumnCards.forEach(function (x) {
        debugger
        let userName = GET_USERS_RESPONSE;
        //Найти имя плдьзователя по его id, чтобы в карточках отображалось имя пользователя
        //Искать можно с помощью [1, 2, 3]
        allCardsForColumnHtml += getCard(x.title, x.description, x.userId);
    });


    htmlString += `<div class="col">
                        <div class="col__header">${GET_COLUMNS_RESPONSE[index].name}</div>
                        <div class="col_content">${allCardsForColumnHtml}</div>
                    </div>`;
});

appElement.innerHTML = htmlString;

function getCardsByColumnId(id) {
    return GET_CARDS_RESPONSE.filter(function (card) {
        return card.columnId === id;
    })
}

function getCard(title, description, userName) {
    return `<div class="card">
                <div class="card__inform">
                    <div class="card__title">${title}</div>
                    <div class="card__description">${description}</div>
                </div>
                <div class="card__user">
                    <div class="card__user-name">${userName}</div>
                </div>
            </div>`;
}
