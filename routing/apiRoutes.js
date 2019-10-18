/* Your `apiRoutes.js` file should contain two routes:

   * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
   * A POST routes `/api/friends`. This will be used to handle incoming survey results. 
   * This route will also be used to handle the compatibility logic. */
 
   // REFERENCE - https://expressjs.com/en/guide/routing.html
   // REFERENCE - C:\Users\mbd07\OneDrive\Desktop\My-Repo\12-express\01-Activities\15-HotRestaurant

   // Question - Do I need to build a database for data storage? Yes?
   // Question - What do I use to build a database? Arrays? SQL?
   // Function to find Difference Total

const friendsData = require("../data/friends");
function compareUsers(arr1, arr2){
  let sumOfDifferences = 0;
  for (let index = 0; index < arr1.length; index++) {
    const arr1Num = arr1[index];
    const arr2Num = arr2[index];
    const difference = Math.abs(arr2Num - arr1Num);
    sumOfDifferences += difference;
  } 
 console.log(sumOfDifferences); 
}

module.exports = function(app){
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
    
  });

  app.post("/api/friends", function(req, res) {
    const user1 = [5, 1, 4, 4, 5, 1, 2, 5, 4, 1];
    const user2 = [3, 2, 6, 4, 5, 1, 2, 5, 4, 1];
    //res.json(resultsincomingfriendssurveyData);
    compareUsers(user1, user2);
  });
}