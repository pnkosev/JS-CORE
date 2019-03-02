function solve() {

    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }

    class SocialMediaPost extends Post{
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = +likes;
            this.dislikes = +dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let string = super.toString() + `\nRating: ${this.likes - this.dislikes}`;
            if (this.comments.length > 0) {
                string += `\nComments:`;
                for (let com of this.comments) {
                    string +=`\n * ${com}`;
                }
            }
            return string;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = +views;
        }
        
        view() {
            this.views++;
            return this;
        }

        toString() {
            return super.toString() + `\nViews: ${this.views}`;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}
let classes = solve();
let test = new classes.SocialMediaPost("TestTitle", "TestContent", 5, 10);
console.log(test.toString());
// let post = new result.Post("Post", "Content");
// console.log(post.toString());
// let scm = new result.SocialMediaPost("TestTitle", "TestContent", 25, 30);
// scm.addComment("Good post");
// scm.addComment("Very good post");
// scm.addComment("Wow!");
// console.log(scm.toString());
// let blogPost = new result.BlogPost("Post", "Content");
// blogPost.view();
// blogPost.view();
// blogPost.view();
// console.log(blogPost.toString());