const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
    isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
    isAvailable: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
    1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
    isAvailable: false },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
    ];

// Create a function called getAvailableBooks that returns an array of all available
// books.
function getAvailableBooks(){
const newBooks=[]
for(let i=0;i<isAvailable.length;i++){
    if(i===isAvailable){
        newBooks.push(isAvailable[i])
    }
}
return newBooks
}
console.log(newBooks)
// Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.
function getBooksByAuthor(authorsname){
for(let i=0;i<authorsname.length;i++){
    return i
}
}
console.log(getBooksByAuthor(authorsname))
// Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
// publicationYear, and isAvailable).
// function addNewBook(){
//     new_list(=>){
//         title:`Born a crime`,
//         author:`Trevor Noah`,
//         publicationYear:2017,
//         isAvailable:True

//     }

//     }
    
// Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.
function checkoutBook(booktitle){
for(let i=0;i<booktitle.length;i++)
if(b<=booktitle.length){
    return isAvailable===false
}
else{
    return("book is not availabe")
}
}
console.log(checkoutBook(booktitle))

// Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.
function returnBook(booktitle){
    for(let k=0;k<booktitle.length;i++){
        if(k<=booktitle.length){
            return isAvailable===true
        }
        else{
            return("book does not belong to the library")
        }
    }
}
console.log(returnBook(booktitle))
