// The test results are in but the machine did a mess. <br> The array one should be the names and the array two should be the scores.

// Create a function that combines the two arrays together and creates an object with key and value pair like this => name: score.

// The two arrays are mixed, but their order is correct.

// Use all the strings elements as keys and the number elements as values to create the "score" object.

// Once you created the score object print it to the console.

var array1 = ['marco', 'antonio', 'luca', 13, 18, 'leo', 'mary']
 var array2 = [21, 19, 12, 'sebastian', 'will', 23, 20]

 var scores = {};
 var numbers = 0;
array1.forEach( function(item) {
   if (typeof item=== "number"){
       scores[array2[numbers]] = array1[numbers];
       numbers = numbers +1;
   } else {
       scores[array1[numbers]] = array2[numbers];
       numbers = numbers +1;
   }
});

console.log(scores);


 
//  for (var el = 0; el < names.length; el++);{ 
//  list.push({'name': names[el], 'scores': scores[el]});
//  }

//  console.log(`${names} name "+" ${scores} score`)



 
// var names = {
//     name: "marco", 
    
// }

// names["name"]

// names.name;

