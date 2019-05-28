function getArticleGenerator(articles) {
    let content = $('#content');

    return function () {
        if (articles.length > 0) {
            let text = articles.shift();
            let p = $(`<p>${text}</p>`);
            p.appendTo(content);
        }
    }
}
