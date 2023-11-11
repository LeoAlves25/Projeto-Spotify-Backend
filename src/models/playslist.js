import e from "cors";
import db from "../../database.js";

const Playlist = {};

Playlist.getAllPlaylists = async (callback) => {
  await db
    .query("SELECT * FROM playlists")
    .then((result) => {
      callback(null, result[0]);
    })
    .catch((err) => {
      callback(err, null);
    });
};

Playlist.getPublicPlaylists = async (callback) => {
  await db
    .query(
      `SELECT p.*, u.firstName, u.email
      FROM playlists p
      JOIN user u ON u.id_user = p.id_user
      WHERE public = 1`
    )
    .then((result) => {
      const playlistsWithUser = result[0].map((playlist) => ({
        id: playlist.id_playlists,
        nome_playlist: playlist.nome_playlist,
        descricao: playlist.descricao,
        capa: playlist.capa,
        public: playlist.public,
        criador: {
          id: playlist.id_user,
          firstName: playlist.firstName,
          email: playlist.email,
        },
      }));
      callback(null, playlistsWithUser);
    })
    .catch((err) => {
      console.log(err)
      callback(err, null);
    });

}

Playlist.getPrivatePlaylistsByUser = async (email, callback) => {
  await db
    .query(
      `SELECT p.*, u.firstName, u.email
      FROM playlists p
      JOIN user u ON u.id_user = p.id_user
      WHERE public <> 1 AND u.email = ?`,
      [email]
    )
    .then((result) => {
      const playlistsWithUser = result[0].map((playlist) => ({
        id: playlist.id_playlists,
        nome_playlist: playlist.nome_playlist,
        descricao: playlist.descricao,
        capa: playlist.capa,
        public: playlist.public,
        criador: {
          id: playlist.id_user,
          firstName: playlist.firstName,
          email: playlist.email,
        },
      }));
      callback(null, playlistsWithUser);
    })
    .catch((err) => {
      console.log(err)
      callback(err, null);
    });

}

Playlist.getPlaylistsByUser = async (email, callback) => {
  console.log(email)
  await db
    .query(
      `SELECT p.*, u.firstName, u.email
      FROM playlists p
      JOIN user u ON u.id_user = p.id_user
      WHERE u.email = ?`,
      [email]
    )
    .then((result) => {
      const playlistsWithUser = result[0].map((playlist) => ({
        id: playlist.id_playlists,
        nome_playlist: playlist.nome_playlist,
        descricao: playlist.descricao,
        capa: playlist.capa,
        public: playlist.public,
        criador: {
          id: playlist.id_user,
          firstName: playlist.firstName,
          email: playlist.email,
        },
      }));
      callback(null, playlistsWithUser);
    })
    .catch((err) => {
      console.log(err)
      callback(err, null);
    });
};

Playlist.getAllPlaylistsWithUser = async (callback) => {
  await db
    .query(
      `SELECT p.*, u.*
        FROM playlists p
        JOIN user u ON p.id_user = u.id_user`
    )
    .then((result) => {
      const playlistsWithUser = result[0].map((playlist) => ({
        id: playlist.id_playlists,
        nome_playlist: playlist.nome_playlist,
        descricao: playlist.descricao,
        capa: playlist.capa,
        public: playlist.public,
        criador: {
          id: playlist.id_user,
          firstName: playlist.firstName,
          email: playlist.email,
        },
      }));
      callback(null, playlistsWithUser);
    })
    .catch((err) => {
      callback(err, null);
    });
};

Playlist.getPlaylistById = async (id, callback) => {
  await db
    .query(
      `SELECT
        JSON_OBJECT(
            'playlist', JSON_OBJECT('id', p.id_playlists, 'nome_playlist', p.nome_playlist, 'descricao', p.descricao, 'capa', p.capa, 'public', p.public,
            'criador', JSON_OBJECT('id', u.id_user, 'firstName', u.firstName, 'lastName', u.lastName, 'email', u.email, 'password', password),
            'musicas', JSON_ARRAYAGG(JSON_OBJECT('id', m.id_musics, 'titulo', m.titulo, 'artista', m.artista, 'duracao', m.duracao, 'nome_arquivo_audio', nome_arquivo_audio)
            ))
        ) AS result
        FROM playlists p
            LEFT JOIN playlists_musics pm ON p.id_playlists = pm.id_playlists
            LEFT JOIN musics m ON pm.id_musics = m.id_musics
            JOIN user u ON p.id_user = u.id_user
            WHERE p.id_playlists = ?;`,
      [id]
    )
    .then((result) => {
      callback(null, result[0][0].result.playlist);
    })
    .catch((err) => {
      callback(err, null);
    });
};

Playlist.createPlaylist = async (email, callback) => {
  await db
    .query(
      `
      SET @idUser = (SELECT id_user FROM spotify.user
				  WHERE email = ?
				);

        INSERT INTO playlists (nome_playlist, descricao, capa, public, id_user)
        VALUES ("Sua Playlist", "Descrição da sua playlist", "/IMG/playlist.png", 0, @idUser)
      `,
      [email]
    )
    .then((result) => {
      callback(null, true);
    })
    .catch((err) => {
      console.log(err);
      callback(null, false);
    });
};

Playlist.deletePlaylist = async (id_playlist, callback) => {
  await db.query(
    `
      DELETE FROM playlists_musics
      WHERE id_playlists = ${id_playlist};
    
      DELETE FROM playlists
      WHERE id_playlists = ${id_playlist};
    `
  )
  .then(() => {
    callback(null, true);
  })
  .catch((err) => {
    console.log(err)
    callback(null, false);
  });
}

export default Playlist;
