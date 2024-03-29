import Playlist from "../models/playslist.js";

const playlistController = {};

playlistController.getAllPlaylists = (req, res) => {
  Playlist.getAllPlaylists((err, playlists) => {
    if (err) {
      console.error("Erro ao buscar as Playlists:", err);
      res.status(500).json({ error: "Erro no servidor" });
    } else {
      res.json(playlists);
    }
  });
};

playlistController.getAllPlaylistsWithUser = (req, res) => {
  Playlist.getAllPlaylistsWithUser((err, playlists) => {
    if (err) {
      console.error("Erro ao buscar as Playlists:", err);
      res.status(500).json({ error: "Erro no servidor" });
    } else {
      res.json(playlists);
    }
  });
};

playlistController.getPlaylistById = (req, res) => {
  const id = req.params.id;
  
  Playlist.getPlaylistById(id, (err, playlist) => {
    if (err) {
      console.error("Erro ao buscar as Playlists:", err);
      res.status(500).json({ error: "Erro no servidor" });
    } else {
      res.json(playlist);
    }
  });
};

export default playlistController;
