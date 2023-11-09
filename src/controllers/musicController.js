import Music from "../models/music.js";

const musicController = {};

musicController.getAllMusic = (req, res) => {
    Music.getAllMusics((err, musics) => {
      if (err) {
        console.error("Erro ao buscar as musicas:", err);
        res.status(500).json({ error: "Erro no servidor" });
      } else {
        res.json(musics);
      }
    });
  };

export default musicController;