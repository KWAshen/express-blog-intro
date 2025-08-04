const express = require('express');

const app = express();

const port = 3000;



app.get('/',(req,res) => {
  res.send('Server del mio blog');
})

app.get('/2',(req,res) => {
  const posts= [
    {
      titolo:'Titolo 1',
      contenuto:"lorem",
      immagine:'.img/post.jpg',
      tag:['calcio','tennis','basket','pallavolo','nuoto'],
    },
    {
      titolo:'Titolo 2',
      contenuto:"lorem",
      immagine:'.img/post.jpg',
      tag:['calcio','tennis','basket','pallavolo','nuoto'],
    },
    {
      titolo:'Titolo 3',
      contenuto:"lorem",
      immagine:'.img/post.jpg',
      tag:['calcio','tennis','basket','pallavolo','nuoto'],
    },
    {
      titolo:'Titolo 4',
      contenuto:"lorem",
      immagine:'.img/post.jpg',
      tag:['calcio','tennis','basket','pallavolo','nuoto'],
    },
    {
      titolo:'Titolo 5',
      contenuto:"lorem",
      immagine:'.img/post.jpg',
      tag:['calcio','tennis','basket','pallavolo','nuoto'],
    },
  ]
})

app.listen(port,()=>{
  console.log(`Server is running on http://localhost:${port}`);
});