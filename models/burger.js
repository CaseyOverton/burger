
  // * In `models`, make a `burger.js` file.

  // * Inside `burger.js`, import `orm.js` into `burger.js`

  // * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

  // * Export at the end of the `burger.js` file.

 
// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");


    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devoured
    }).then(
      function() {
        location.reload();
      }
    );


  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#new").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".devoured-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

