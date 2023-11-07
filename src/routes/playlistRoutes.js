import express from 'express';
const router = express.Router();

import playlistController from '../controllers/playlistController.js';

router.get('/', playlistController.getAllPlaylists);
router.get('/user', playlistController.getAllPlaylistsWithUser);
router.get('/public', playlistController.getPublicPlaylists);
router.get('/private/:id', playlistController.getPrivatePlaylistsByUser);
router.get('/:id', playlistController.getPlaylistById); //ultima sempre

export default router;
