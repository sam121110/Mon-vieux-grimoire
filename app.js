const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
require('dotenv').config();
const Book = require('./models/book');

const password = process.env.MONGODB_PASSWORD;

mongoose.connect(`mongodb+srv://sam121110987654321:${password}@cluster16.vssydqk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster16`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
  

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(express.json());

app.post('/api/books', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'Objet créé !'
  });
});

app.use('/api/books', (req, res, next) => {
    const books = [{
        "id": "1",
        "userId" : "clc4wj5lh3gyi0ak4eq4n8syr",
        "title" : "Milwaukee Mission",
        "author": "Elder Cooper",
        "imageUrl" : "https://via.placeholder.com/206x260",
        "year" : 2021,
        "genre" : "Policier",
        "ratings" : [{
          "userId" : "1",
          "grade": 5
        },
          {
            "userId" : "1",
            "grade": 5
          },
          {
            "userId" : "clc4wj5lh3gyi0ak4eq4n8syr",
            "grade": 5
          },
          {
            "userId" : "1",
            "grade": 5
          }],
        "averageRating": 3
      },
        {
          "id": "2",
          "userId" : "clbxs3tag6jkr0biul4trzbrv",
          "title" : "Book for Esther",
          "author": "Alabaster",
          "imageUrl" : "https://via.placeholder.com/206x260",
          "year" : 2022,
          "genre" : "Paysage",
          "ratings" : [{
            "userId" : "clbxs3tag6jkr0biul4trzbrv",
            "grade": 4
          },
            {
              "userId" : "1",
              "grade": 5
            },
            {
              "userId" : "1",
              "grade": 5
            },
            {
              "userId" : "1",
              "grade": 5
            }],
          "averageRating": 4.2
        },
        {
          "id": "3",
          "userId" : "1",
          "title" : "The Kinfolk Table",
          "author": "Nathan Williams",
          "imageUrl" : "https://via.placeholder.com/206x260",
          "year" : 2022,
          "genre" : "Cuisine",
          "ratings" : [{
            "userId" : "1",
            "grade": 5
          },
            {
              "userId" : "1",
              "grade": 5
            },
            {
              "userId" : "1",
              "grade": 5
            },
            {
              "userId" : "1",
              "grade": 5
            }],
          "averageRating": 3
        },
        {
          "id": "4",
          "userId" : "1",
          "title" : "Milwaukee Mission",
          "author": "Elder Cooper",
          "imageUrl" : "https://via.placeholder.com/206x260",
          "year" : 2021,
          "genre" : "Policier",
          "ratings" : [{
            "userId" : "1",
            "grade": 5
          },
            {
              "userId" : "1",
              "grade": 5
            },
            {
              "userId" : "1",
              "grade": 5
            },
            {
              "userId" : "1",
              "grade": 5
            }],
          "averageRating": 3
        },
        {
          "id": "5",
          "userId" : "1",
          "title" : "Book for Esther",
          "author": "Alabaster",
          "imageUrl" : "https://via.placeholder.com/206x260",
          "year" : 2022,
          "genre" : "Paysage",
          "ratings" : [{
            "userId" : "1",
            "grade": 5
          },
            {
              "userId" : "1",
              "grade": 5
            },
            {
              "userId" : "1",
              "grade": 5
            },
            {
              "userId" : "1",
              "grade": 5
            }],
          "averageRating": 4
        },
        {
          "id": "6",
          "userId" : "1",
          "title" : "The Kinfolk Table",
          "author": "Nathan Williams",
          "imageUrl" : "https://via.placeholder.com/206x260",
          "year" : 2022,
          "genre" : "Cuisine",
          "ratings" : [{
            "userId" : "1",
            "grade": 5
          },
            {
              "userId" : "1",
              "grade": 5
            },
            {
              "userId" : "1",
              "grade": 5
            },
            {
              "userId" : "1",
              "grade": 5
            }],
          "averageRating": 3
        },
        {
          "id": "7",
          "userId" : "1",
          "title" : "Milwaukee Mission",
          "author": "Elder Cooper",
          "imageUrl" : "https://via.placeholder.com/206x260",
          "year" : 2021,
          "genre" : "Policier",
          "ratings" : [{
            "userId" : "1",
            "grade": 5
          },
            {
              "userId" : "1",
              "grade": 5
            },
            {
              "userId" : "1",
              "grade": 5
            },
            {
              "userId" : "1",
              "grade": 5
            }],
          "averageRating": 3
        },
        {
          "id": "8",
          "userId" : "clc7s9xnh7zpt0ak4fisdwuj1",
          "title" : "Book for Esther",
          "author": "Alabaster",
          "imageUrl" : "https://via.placeholder.com/206x260",
          "year" : 2022,
          "genre" : "Paysage",
          "ratings" : [{
            "userId" : "1",
            "grade": 5
          },
            {
              "userId" : "1",
              "grade": 5
            },
            {
              "userId" : "1",
              "grade": 5
            },
            {
              "userId" : "1",
              "grade": 5
            }],
          "averageRating": 4
        },
        {
          "id": "9",
          "userId" : "clc4wj5lh3gyi0ak4eq4n8syr",
          "title" : "The Kinfolk Table",
          "author": "Nathan Williams",
          "imageUrl" : "https://via.placeholder.com/206x260",
          "year" : 2022,
          "genre" : "Cuisine",
          "ratings" : [{
            "userId" : "1",
            "grade": 5
          },
            {
              "userId" : "1",
              "grade": 5
            },
            {
              "userId" : "1",
              "grade": 5
            },
            {
              "userId" : "clc4wj5lh3gyi0ak4eq4n8syr",
              "grade": 1
            }],
          "averageRating": 3
        }
      ]
    res.status(200).json(books);
  });

  app.post('/api/books', (req, res, next) => {
    delete req.body._id;
    const book = new Book({
      ...req.body
    });
    book.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  });

  app.use('/api/books', (req, res, next) => {
    Book.find()
      .then(books => res.status(200).json(books))
      .catch(error => res.status(400).json({ error }));
  });

  app.get('/api/books/:id', (req, res, next) => {
    Book.findOne({ _id: req.params.id })
      .then(book => res.status(200).json(book))
      .catch(error => res.status(404).json({ error }));
  });

  app.put('/api/books/:id', (req, res, next) => {
    Book.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
  });

  app.delete('/api/books/:id', (req, res, next) => {
    Book.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  });

app.use('/api/auth', userRoutes);

module.exports = app;