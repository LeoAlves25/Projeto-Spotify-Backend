import db from "../../database.js";

const Music = {};

Music.getAllMusics = async (callback) => {
    await db
      .query("SELECT * FROM musics")
      .then((result) => {
        callback(null, result[0]);
      })
      .catch((err) => {
        callback(err, null);
      });
};

export default Music;