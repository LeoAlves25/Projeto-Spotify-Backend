import db from "../../database.js";

const User = {};

User.getAllUsers = async (callback) => {
  await db
    .query("SELECT * FROM user")
    .then((result) => {
      callback(null, result[0]);
    })
    .catch((err) => {
      callback(err, null);
    });
};

User.postUser = async (user, callback) => {
  console.log("teste")
  await db
    .query(
      `INSERT INTO \`user\` (firstName, lastName, email, \`password\`) 
            VALUES (?, ?, ?, ?)`,
      [user.firstName, user.lastName, user.email, user.password]
    )
    .then((result) => {
      callback(null, result[0]);
    })
    .catch((err) => {
      callback(err, null);
    });
};

User.putUser = async (user,callback) =>{
  console.log(user)
  console.log("aki")
  await db.query(`
  UPDATE user
  SET firstName = ?, lastName = ?, email = ?, password = ?
  WHERE id_user = ?
  `,[user.firstName,user.lastName,user.email,user.password,user.user_id]
  )
  .then((result) => {
    callback(null, true);
  })
  .catch((err) => {
    callback(err, false);
  });
}

User.getUserByEmail = async (email, callback) => {
  await db
    .query(
      `SELECT * FROM user 
            WHERE email = ?`,
      [email]
    )
    .then((result) => {
      console.log(result[0][0])
      callback(null, result[0][0]);
    })
    .catch((err) => {
      callback(err, null);
    });
};

User.getUserByEmailAndPassword = async (email, password, callback) => {
  
  await db
    .query(
      `SELECT * FROM \`user\` 
            WHERE email = ? AND \`password\` = ?`,
      [email, password]
    )
    .then((result) => {
      callback(null, result[0][0]);
    })
    .catch((err) => {
      callback(err, null);
    });
};

export default User;
