const book = {

    bookArray: [
        { id_book: '1', name: "Kirja1", author: "Jim Smith", isbn: "978-3-16-148410-0" },
        { id_book: '2', name: "Kirja2", author: "Lisa Jones", isbn: "978-1-23-456789-7" },
        { id_book: '3', name: "Kirja3", author: "Bob Daniels", isbn: "978-0-12-345678-9" }
    ],

    getAllBooks() {
        console.log(this.bookArray);
    },

    getOneBook(x) {
        console.log(this.bookArray[x]);
    },

    addBook(id_book, name, author, isbn) {
        this.bookArray.push({ id_book, name, author, isbn });
    }
};

book.getAllBooks();
book.getOneBook(0);
book.addBook("4", "Uusi kirja", "Uusi Tekijä", "111-1-11-111111-1");
book.getAllBooks();
