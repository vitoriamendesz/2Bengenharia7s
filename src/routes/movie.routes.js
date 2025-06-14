const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/auth.middleware');
const authorizeRole = require('../middlewares/role.middleware');
const movieController = require('../controllers/movie.controller');

router.post('/', authenticate, movieController.createMovie);
router.get('/me', authenticate, movieController.getMyMovies);
router.put('/:id', authenticate, movieController.updateMovie);
router.delete('/:id', authenticate, movieController.deleteMovie);

router.get('/all', authenticate, authorizeRole('admin'), movieController.getAllMovies);

module.exports = router;
