const express = require('express');
const app = express();
const port = 80;

// app.get('/', (req, res) => {
//   res.send('Hello World');
// });
app.use(express.static('dobro-project/dist'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});