const bookArray=[
    {'id_book':'1','name' :"Kirja1", 'author' :"Jim Smith", "isbn":"978-3-16-148410-0"},
    {'id_book':'2','name' :"Kirja2", 'author' :"Lisa Jones", "isbn":"978-1-23-456789-7"},
    {'id_book':'3','name' :"Kirja3", 'author' :"Bob Daniels", "isbn":"978-0-12-345678-9"}
   
];

console.log("***************");

console.log(typeof bookArray);
console.log("***************");

console.log(bookArray);
console.log("***************");

console.log(bookArray[0]);
console.log("***************");

console.log(bookArray[0].name);
console.log("***************");

console.log(bookArray.length);
console.log("***************");

for (let i = 0; i < bookArray.length; i++) {
    console.log(bookArray[i].name);
}