// To run tests, use command in terminal below:
// npm test getTheTitles.spec.js

// use the .map method on existing array, use it to create a new array that contains the titles

// Resources: https://www.youtube.com/watch?v=HB1ZC7czKRs

// https://discord.com/channels/505093832157691914/505093832157691916/1054201913236791316

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]



  const getTheTitles = function(books) {
    return books.map(book => book.title);
};


// Do not edit below this line
module.exports = getTheTitles;
