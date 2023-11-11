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

playlistController.getPlaylistsByUser = (req, res) => {
  const id = req.params.email;

  Playlist.getPlaylistsByUser(id, (err, playlist) => {
    if (err) {
      console.error("Erro ao buscar as Playlists:", err);
      res.status(500).json({ error: "Erro no servidor" });
    } else {
      res.json(playlist);
    }
  });
};

playlistController.getPublicPlaylists = (req, res) => {
  Playlist.getPublicPlaylists((err, playlists) => {
    if (err) {
      console.error("Erro ao buscar as Playlists:", err);
      res.status(500).json({ error: "Erro no servidor" });
    } else {
      res.json(playlists);
    }
  });
};

playlistController.getPrivatePlaylistsByUser = (req, res) => {
  const email = req.params.email;

  Playlist.getPrivatePlaylistsByUser(email, (err, playlists) => {
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

playlistController.createPlaylist = (req, res) => {
  const userEmail = req.body.email;

  Playlist.createPlaylist(userEmail, (err, playlist) => {
    if(err) {
      console.error("Erro ao criar a Playlist:", err);
      res.status(418).json({ error: "Fui tomar um chá" });
    } else {
      res.json(playlist);
    }
  });
};

playlistController.deletePlaylist = (req, res) => {
  const playlistID = req.params.id;

  Playlist.deletePlaylist(playlistID, (err, playlist) => {
    if(err) {
      console.error("Erro ao criar a Playlist:", err);
      res.status(418).json({ error: "Fui tomar um chá" });
    } else {
      res.json(playlist);
    }
  });
}

export default playlistController;
