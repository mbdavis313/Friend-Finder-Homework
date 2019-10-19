// Your `server.js` file should require the basic npm packages we've used in class: `express` and `path`.
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Routes
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Starting the server, syncing our models ------------------------------------/
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
module.exports = app;
