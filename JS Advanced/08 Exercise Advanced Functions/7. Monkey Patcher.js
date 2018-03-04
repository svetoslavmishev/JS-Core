function monkeyPatcher(instruction) {
    let self = this;

    let command = (() => {
        function upvote() {
            return self.upvotes++;
        }

        function downvote() {
            return self.downvotes++;
        }

        function score() {
            let upVotes = self.upvotes;
            let downVotes = self.downvotes;
            let balance = upVotes + downVotes;
            let rating = 'new';

            if (balance >= 10) {
                if (upVotes / balance > 0.66) {
                    rating = 'hot';
                } else if ((upVotes > 100 || downVotes > 100) && upVotes >= downVotes > 0) {
                    rating = 'controversial';
                } else if (downVotes > upVotes) {
                    rating = 'unpopular';
                } else {
                    rating = "new";
                }
            } else {
                rating = 'new';
            }

            let bonusVote = Math.ceil(0.25 * Math.max(upVotes, downVotes));
            if (balance > 50) {
                return [upVotes + bonusVote, downVotes + bonusVote, upVotes - downVotes, rating];
            } else {
                return [upVotes, downVotes, upVotes - downVotes, rating];
            }
        }

        return {upvote, downvote, score};
    })();

    return command[instruction]();
}

// let post = {
//     id: '3',
//     author: 'emil',
//     content: 'wazaaaaa',
//     upvotes: 100,
//     downvotes: 100
// };

var forumPost = {
    id: '1234',
    author: 'author name',
    content: 'these fields are irrelevant',
    upvotes: 4,
    downvotes: 5
};
console.log(monkeyPatcher.call(forumPost, 'score'));

//
// monkeyPatcher.call(post, 'upvote');
// monkeyPatcher.call(post, 'downvote');
// let score = monkeyPatcher.call(post, 'score'); // [127, 127, 0, 'controversial']
// console.log(score);
// monkeyPatcher.call(post, 'downvote');        // (executed 50 times)
// score = monkeyPatcher.call(post, 'score');
