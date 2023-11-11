import express from 'express';
const router = express.Router();

import playlistController from '../controllers/playlistController.js';

router.get('/', playlistController.getAllPlaylists);
router.get('/user', playlistController.getAllPlaylistsWithUser);
router.get('/user/:email', playlistController.getPlaylistsByUser);
router.get('/public', playlistController.getPublicPlaylists);
router.get('/private/:email', playlistController.getPrivatePlaylistsByUser);
router.post('/create', playlistController.createPlaylist);
router.delete('/delete/:id', playlistController.deletePlaylist);
router.get('/:id', playlistController.getPlaylistById); //ultima sempre

export default router;
