import express from 'express';
const router = express.Router();

import playlistController from '../controllers/playlistController.js';

router.get('/', playlistController.getAllPlaylists);
router.get('/user', playlistController.getAllPlaylistsWithUser);
router.get('/user/:email', playlistController.getPlaylistsByUser);
router.get('/public', playlistController.getPublicPlaylists);
router.get('/private/:email', playlistController.getPrivatePlaylistsByUser);
router.post('/create', playlistController.createPlaylist);
router.post('/music/new', playlistController.createMusicPlaylist);
router.delete('/delete/:id', playlistController.deletePlaylist);
router.delete('/music/delete', playlistController.deleteMusicPlaylist);

router.get('/:id', playlistController.getPlaylistById); //ultima sempre

export default router;
