/* Your `htmlRoutes.js` file should include two routes:

   * A GET Route to `/survey` which should display the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page. */
module.exports = function(app) {
  // Load index page
  app.get("/survey", function(req, res) {
    res.send("../public/survey.html");
  });
  app.get("*", function(req, res) {
    res.render("../public/home.html");
  });
}
