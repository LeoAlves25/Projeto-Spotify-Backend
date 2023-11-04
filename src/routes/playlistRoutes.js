import express from 'express';
const router = express.Router();

import playlistController from '../controllers/playlistController.js';

router.get('/', playlistController.getAllPlaylists);
router.get('/user', playlistController.getAllPlaylistsWithUser);
router.get('/:id', playlistController.getPlaylistById);

export default router;
