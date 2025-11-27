// Don't delete code bellow and this code must be at the bottom of the file

//Adding some books
type addBook = {
  title: string;
  author: string;
  publicationYear: number;
};

let books: addBook[] = [];

function addBook(title: string, author: string, publicationYear: number): void {
  const newBook: addBook = { title, author, publicationYear };
  books.push(newBook);
  console.log(`Book added: "${title}" by ${author} (${publicationYear})`);
}

//Displaying All Books
function listBooks(): void {
  console.log("All Books,:");
  books.forEach((book) => {
    console.log(`- ${book.title} by ${book.author} (${book.publicationYear})`);
  });
}

function searchBook(title?: string): void {
  // Jika title tidak diberikan → tampilkan semua buku
  if (!title) {
    console.log("All Books:");
    for (const book of books) {
      console.log(`${book.title} - ${book.author} (${book.publicationYear})`);
    }
    return;
  }

  // Jika title diisi → lakukan pencarian
  const results = books.filter(book => book.title === title);

  if (results.length === 0) {
    console.log(`Book with title "${title}" not found.`);
  } else {
    console.log(`Search results for "${title}":`);
    for (const book of results) {
      console.log(`${book.title} - ${book.author} (${book.publicationYear})`);
    }
  }
}


//Searching for a book title

export { addBook, listBooks, searchBook };
