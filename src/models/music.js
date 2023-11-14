import db from "../../database.js";

const Music = {};

Music.getAllMusics = async (callback) => {
    await db
      .query(`SELECT id_musics AS id,
              titulo,
              artista,
              duracao,
                  nome_arquivo_audio
          FROM spotify.musics;`)
      .then((result) => {
        callback(null, result[0]);
      })
      .catch((err) => {
        callback(err, null);
      });
};

export default Music;