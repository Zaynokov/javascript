class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let newPost = new Post('Alex', 'random text', '15.5.2020');
let newAttachedPost = new AttachedPost('Alex', 'random text', '15.5.2020');
newPost.edit('random text');
newAttachedPost.makeTextHighlighted();