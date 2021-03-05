arr (["mango", "banana", 3, 4, 5, "kiwi", 7, 8]);
arr (["mango", "banana", 3, 4, 5, "kiwi", 3, "pear"]);
function arr(array) { 
var countNumbers = 0;
var countLetters = 0;
array.forEach( function(item) {
   if(typeof item === "number"){
    countNumbers = countNumbers +1;  
   } else {
    countLetters + countLetters +1;
}  
});

console.log(`${array.length} elements in my array.`);
console.log(`${countNumbers} numebers`);
console.log(`${countLetters} letters`);
};