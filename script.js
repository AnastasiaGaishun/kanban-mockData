const appElement = document.querySelector('.app');

let htmlString = '';



GET_COLUMNS_RESPONSE.forEach((column) => {

    const columnId = column.id;
    const currentColumnCards = getCardsByColumnId(columnId);
    let allCardsForColumnHtml = '';

    currentColumnCards.forEach(function (x) {
        debugger
        let userName = GET_USERS_RESPONSE.find(item => item.id == 1);
    allCardsForColumnHtml += getCard(x.title, x.description, userName);
});

htmlString += `<div class="col">
                        <div class="col__header">${column.name}</div>
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
                    <div class="card__user-name">${userName.name}</div>
                </div>
            </div>`;
}
