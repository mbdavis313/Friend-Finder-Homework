
/* You should save your application's data inside of `app/data/friends.js` as an array of objects. Each of these 
objects should roughly follow the format below. */

// Question - How do you save application's data as an array of objects?
// Question - Is this the exact format below from beginning to end with all instructions?

/* Nested Arrays in JSON Objects
Values in an array can also be another array, or even another JSON object:
https://www.w3schools.com/js/js_json_arrays.asp */

// Creates Friends Data Array
const friendsdataArray = [
{
  "name":"Marvin",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
},

{
  "name":"Tammy",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}];

// Exports Friends Data Array to Any File
module.exports = friendsdataArray
// Note how we export the array. This makes it accessible to other files using require.
// module.exports = incomingfriendssurveyData; 