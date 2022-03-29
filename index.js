const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

// try app.get here
// learn the fs module, eery time a task is created, send it back to express and let
// express save it to a json file, and it could load from the json file

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));