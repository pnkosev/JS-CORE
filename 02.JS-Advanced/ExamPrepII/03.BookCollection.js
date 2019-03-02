class BookCollection {
    constructor(shelfGenre, room, shelfCapacity) {

        if (room === "livingRoom" || room === "bedRoom" || room === "closet") {
            this.shelfGenre = shelfGenre;
            this.room = room;
            this.shelfCapacity = shelfCapacity;
        } else {
            throw new Error("Cannot have book shelf in " + this.room);
        }

        this.shelf = [];
    }

    addBook(bookName, bookAuthor, genre) {
        if (this.shelf.length < this.shelfCapacity) {
            this.shelf.push({
                bookName,
                bookAuthor,
                genre
            });
        } else {
            this.shelf.shift();
            this.shelf.push({
                bookName,
                bookAuthor,
                genre
            });
        }
        this.shelf.sort((a, b) => a.bookAuthor > b.bookAuthor);
        return this;
    }

    throwAwayBook(bookName) {
        // if (Object.keys(this.shelf).indexOf(bookName)) {
        //     this.shelf.splice(Object.keys(this.shelf).indexOf(bookName), 1);
        // }
        this.shelf = this.shelf.filter((b) => b.bookName !== bookName);
    }

    get shelfCondition() {
        return this.shelfCapacity - this.shelf.length;
    }

    showBooks(genre) {
        let output = "";
        let booksFound = this.shelf.filter((b) => b.genre === genre);

        if (booksFound.length > 0) {
            output += `Results for search "${genre}":\n`;
            for (let book in booksFound) {
                output += `\uD83D\uDCD6 ${booksFound[book].bookAuthor} - "${booksFound[book].bookName}"\n`;
            }
        }
        return output.trim();
    }

    toString() {
        let output = "";
        if (this.shelf.length === 0) {
            return "It's an empty shelf";
        } else {
            
            output += `"${this.shelfGenre}" shelf in ${this.room} contains:\n`;
            for (let book in this.shelf) {
                output += `\uD83D\uDCD6 "${this.shelf[book].bookName}" - ${this.shelf[book].bookAuthor}\n`;
            }
        }
        return output.trim();
    }

}
let bedRoom = new BookCollection('Mixed', 'bedRoom', 5);
bedRoom.addBook("John Adams", "David McCullough", "history");
bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
console.log("Shelf's capacity: " + bedRoom.shelfCondition);
console.log(bedRoom.showBooks("history"));
