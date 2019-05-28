function result(str) {
    let that = this;
    let processor = (() => {
        function upvote() {
            that.upvotes++;
        }

        function downvote() {
            that.downvotes++;
        }

        function score() {
            let rating = getRating();
            if (+that.upvotes + +that.downvotes <= 50) {
                return [that.upvotes, that.downvotes, that.upvotes - that.downvotes, rating];
            } else {
                let greater = Math.max(that.upvotes, that.downvotes);
                let upvotes = that.upvotes + Math.ceil(greater * 0.25);
                let downvotes = that.downvotes + Math.ceil(greater * 0.25);
                return [upvotes, downvotes, upvotes - downvotes, rating];
            }
        }

        function getRating() {
            let totalVotes = that.upvotes + that.downvotes;
            if (totalVotes < 10) {
                return 'new';
            } else if (that.downvotes > that.upvotes) {
                return 'unpopular';
            } else if (that.upvotes / totalVotes > 0.66) {
                return 'hot';
            } else if ((that.upvotes > 100 || that.downvotes > 100) && that.upvotes >= that.downvotes) {
                return 'controversial';
            }
            return 'new';
        }

        return {
            upvote,
            downvote,
            score
        }
    })();

    return processor[str]();
}

var forumPost = {
    id: '1234',
    author: 'author name',
    content: 'these fields are irrelevant',
    upvotes: 50,
    downvotes: 0
};

var answer = result.call(forumPost, 'score');
console.log(answer);

result.call(forumPost, 'upvote');
answer = result.call(forumPost, 'score');
console.log(answer);
