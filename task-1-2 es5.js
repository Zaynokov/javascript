function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    this.text = text;
};

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
};

let newPost = new Post('Alex', 'random text', '15.5.2020');
let newAttachedPost = new AttachedPost('Alex', 'random text', '15.5.2020');
newPost.edit('random text');
newAttachedPost.makeTextHighlighted();