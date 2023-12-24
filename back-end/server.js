const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});

/*
  Notes:
  * Need to add a length check for how long price can be
  * Need to add a cap for how many items (total cost) the user is allowed in their cart
  * Need to add a check to verify if the data is valid yyyy-MM-dd
*/
