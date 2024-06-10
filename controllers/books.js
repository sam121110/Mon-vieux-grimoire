const Book = require('../models/book');

// afficher tous les livres
exports.getAllBooks = (req, res, next) => {
    Book.find()
        .then(books => {
            res.status(200).json(books);
        })
        .catch(error => {
            res.status(500).json({
                message: 'Fetching books failed!'
            });
        });
};

// pour redirection vers un livre spécifique
exports.getOneBook = (req, res, next) => {
    Book.findOne({ _id: req.params.id })
    .then(book => res.status(200).json(book))
    .catch(error => res.status(404).json({ error }));
};

// pour enregistrer un nouveau livre
exports.createBook = (req, res, next) => {
    Book.create(req.body)
        .then(newBook => {
            res.status(201).json({
                status: 'success',
                data: {
                    book: newBook
                }
            });
        const Book = require('../models/book');

// afficher tous les livres
exports.getAllBooks = (req, res, next) => {
    Book.find()
        .then(books => {
            res.status(200).json(books);
        })
        .catch(error => {
            res.status(500).json({
                message: 'Fetching books failed!'
            });
        });
        book.save()
        .then(() => { res.status(201).json({ message: 'Objet enregistré !' }) })
        .catch(error => { res.status(400).json( { error }) })
};

// pour redirection vers un livre spécifique
exports.getOneBook = (req, res, next) => {
    Book.findOne({ _id: req.params.id })
    .then(book => res.status(200).json(book))
    .catch(error => res.status(404).json({ error }));
};

// pour enregistrer un nouveau livre
exports.createBook = (req, res, next) => {
    Book.create(req.body)
        .then(newBook => {
            res.status(201).json({
                status: 'success',
                data: {
                    book: newBook
                }
            });
        })
        .catch(error => {
            res.status(500).json({
                status: 'error',
                message: error.message
            });
        });
};

// modification d'un livre
exports.updateBook = (req, res, next) => {
    Book.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !' }))
        .catch(error => res.status(400).json({ error }));
};

// suppression d'un livre
exports.deleteBook = (req, res, next) => {
    Book.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
        .catch(error => res.status(400).json({ error }));
};
        })
        .catch(error => {
            res.status(500).json({
                status: 'error',
                message: error.message
            });
        });
};

// modification d'un livre
exports.updateBook = (req, res, next) => {
    Book.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !' }))
        .catch(error => res.status(400).json({ error }));
};

// suppression d'un livre
exports.deleteBook = (req, res, next) => {
    Book.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
        .catch(error => res.status(400).json({ error }));
};