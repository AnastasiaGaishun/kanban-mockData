const appElement = document.querySelector('.app');

let htmlString = '';



GET_COLUMNS_RESPONSE.forEach((column) => {

    const columnId = column.id;
    const currentColumnCards = getCardsByColumnId(columnId);
    let allCardsForColumnHtml = '';

    currentColumnCards.forEach(function (x) {
        debugger
        let name = GET_USERS_RESPONSE.find(user => user.id === x.userId).name;
        let photoUrl = GET_USERS_RESPONSE.find(user => user.id === x.userId).photoUrl;
    allCardsForColumnHtml += getCard(x.id, x.title, x.description, name, photoUrl);
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

function getCard(id, title, description, userName, userPhoto) {
    let selectUsersHtml = '<select>';
    GET_USERS_RESPONSE.forEach(function(user) {
        selectUsersHtml +=`<option>${user.name}<option>`;
        if (userName === user.name) {
            selectUsersHtml += `<option value="${user.id}" selected>${user.name}<option>`;
        } else {
            selectUsersHtml += `<option value="${user.id}">${user.name}<option>`;
        }
    });
    // selectUsersHtml += GET_USERS_RESPONSE.map(function(user) {
    //     return `<option>${user.name}</option>`;
    // }).join('');
    selectUsersHtml += `</select>`;

    return `<div class="card" data-id="${id}">
                <div class="card__inform">
                    <div class="card__title">${title}</div>
                    <div class="card__description">${description}</div>
                </div>
                <div class="card__user">
                    <div class="card__user-photo">
                        <img src="${userPhoto}">
                    </div>
                    <div class="card__user-name">
                        ${selectUsersHtml}
                    </div>
                </div>
            </div>`;
}

document.addEventListener('change', function(e) {
    if(e.target && event.target.classList.contains('card__user-select')) {
        debugger
        let cardDiv = event.target.parentElement.parentElement.parentElement;
        let cardId = cardDiv.dataset.id;
        // need userId into GET_CARDS_RESPONSE
        // => GET_CARDS_RESPONSE.find(card => card.id === 1).userId = 1;
    }
});

// if select user with id = 1 in first card
// event -> "change"
// Use data-cardId and value="userId"
