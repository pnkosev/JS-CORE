// function getArticleGenerator(articles) {
//     let container = $('#content');

//     return function () {
//         if (articles.length > 0) {
//             container.append($('<article>')
//                 .text(articles.shift()));
//         }
//     }
// }

function getArticleGenerator(articles) {
    let container = $('#content');

    return function () {
        if (articles.length > 0) {
            let article = $('<article>');
            article.append($(`<p>${articles.shift()}</p>`));
            container.append(article);
        }
    }
}