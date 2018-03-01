function getArticleGenerator(articles) {
    return function () {
        if (articles.length > 0) {
            let article = $('<article>');
            let firstLine = articles.shift();
            article.append(firstLine);
            $('#content').append(article);
        }
    }
}