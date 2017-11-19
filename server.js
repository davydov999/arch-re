const express = require('express');

const app = express();

app.use('/', express.static('public'));

app.get('/api/user', (req, res) => {
  setTimeout(() => {
    res.send({
      username: 'Slava Minchonok',
      imageUrl: 'http://localhost:3000/assets/img/slavik-m.jpg',
      email: 'relogn@gmail.com',
    });
  }, 3000);
});

app.listen(3000, function () {
  console.log('Server listening on http://localhost:3000');
});
