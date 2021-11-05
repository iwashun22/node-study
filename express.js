const express = require('express');
const path = require('path');
const app = express();

// app.get
// app.post
// app.put
// app.all
// app.use
// app.listen

app.use(express.static('./homepage'));

// app.get('/', (req, res) => {
//    res.sendFile(path.resolve(__dirname, './homepage/index.html'));
// })

app.get('/about', (req, res) => {
   res.status(200).send('<h1>About us</h1>');
})

// this is defining any other url
app.all('*', (req, res) => {
   res.status(404).send('<h1>Page can not found</h1>');
})

app.listen(8000, () => {
   console.log('Listening on port 8000...');
})