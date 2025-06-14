const Movie = require('../models/Movie');

// Criar filme
exports.createMovie = async (req, res) => {
  try {
    const movie = new Movie({ ...req.body, createdBy: req.user.userId });
    await movie.save();
    res.status(201).json(movie);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao criar filme', error: err.message });
  }
};

// Listar filmes do usuário logado
exports.getMyMovies = async (req, res) => {
  try {
    const movies = await Movie.find({ createdBy: req.user.userId });
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar filmes', error: err.message });
  }
};

// Admin: listar todos os filmes
exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find().populate('createdBy', 'name email');
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar todos os filmes', error: err.message });
  }
};

// Editar filme
exports.updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user.userId },
      req.body,
      { new: true }
    );
    if (!movie) return res.status(404).json({ message: 'Filme não encontrado ou sem permissão' });
    res.json(movie);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao editar filme', error: err.message });
  }
};

// Deletar filme
exports.deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findOneAndDelete({ _id: req.params.id, createdBy: req.user.userId });
    if (!movie) return res.status(404).json({ message: 'Filme não encontrado ou sem permissão' });
    res.json({ message: 'Filme deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao deletar filme', error: err.message });
  }
};
