const express = require("express");
const app = express();
const port = 5000;
const path = require("path");

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory


// EndPoints
// EndPoints
// ENDPOINTS
app.get('/', (req, res) => {
    const con = "This is the best content on the internet so far so use it wisely"
    const params = { 'title': 'PubG is the best game', "content": con }
    res.status(200).render('index.pug', params);
})



app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});