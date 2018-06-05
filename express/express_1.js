const express = require('express');

const app = express();


app.get('/', (req, res) => {

	res.send('<h1>Hello</h1>');

});

app.get('/api', (req, res) => {

	// res.send('<h1>API Page</h1>');

	// JSON.stringify({ name : 'james' }); => global object "JSON"
	// req and res of express() do not define JSON.stringify
	// res and req define "json" method instead 
	// *************8
	res.json({ name : 'james' });

});

// id or _id must be different.
app.get('/api/:id/cat/:_id', (req, res) => {

	console.log(req.params) // => { id: '2', _id: '3' }
	const { id } = req.params;
	const { _id } = req.params;

	res.send(`<p>URL is api/${id}/cat/${_id}</p>`);

})

// if a directory is including '/css', it picks up express static function.
// 		Then execute object of css file.
// ******** https://expressjs.com/en/starter/static-files.html
// when sets up the specific path and whenever the path is usesd in the background
// 		the directory will be used only for that link.
// For instance localhost:5000/css/"file.extension"
//		particulary when the relative path is equivalent to absolute path
app.use('/css', express.static(__dirname + '/css'));

app.get('/api/black', (req, res) => {

	res.send(`<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/css/style.css"></link>
    <title>Form</title>
</head>
<body>

        <form action="" method="post">

            <label for="title">Title</label>
            <input type="text" id="title" name="title"><br>
            <label for="category">Category</label>
            <input type="text" id="category" name="category"><br>
            <label for="description">Description</label>
            <input type="text" id="description" name="description">

            <button>Submit</button>
        </form>


</body>
</html>`);

});

const PORT = process.env.PORT || 5000;
app.listen(PORT);{ name : 'james'}

	
console.log(`Connected on port ${PORT}`)