import User from "../models/user.js";

const userController = {};

userController.getAllUsers = (req, res) => {
  User.getAllUsers((err, faqs) => {
    if (err) {
      console.error("Erro ao buscar os usuários:", err);
      res.status(500).json({ error: "Erro no servidor" });
    } else {
      res.json(faqs);
    }
  });
};

userController.postUser = (req, res) => {
  const user = req.body;

  User.postUser(user, (err, result) => {
    if (err) {
      console.error("Erro ao inserir o usuário:", err);
      res.status(500).json({ error: "Erro no servidor" });
    } else {
      res.json(result);
    }
  });
};

userController.putUser = (req, res) =>{
  const user = req.body;
  console.log(user)
  User.putUser(user,(err, result) => {
    if (err) {
      console.error("Erro ao atualizar o usuario", err);
      res.status(500).json({ error: "Erro no servidor" });
    } else {
      res.json(result);
    }
  });
};

userController.getUserByEmail = (req, res) => {
  const email = req.params.email;

  User.getUserByEmail(email, (err, result) => {
    if (err) {
      console.error("Erro ao buscar o usuário:", err);
      res.status(500).json({ error: "Erro no servidor" });
    } else {
      res.json(result);
    }
  });
};

userController.getUserByEmailAndPassword = (req, res) => {
  const { email, password } = req.body;

  User.getUserByEmailAndPassword(email, password, (err, result) => {
    if (err) {
      console.error("Erro ao buscar o usuário:", err);
      res.status(500).json({ error: "Erro no servidor" });
    } else if (!result) {
      res.status(404).json({ error: "Usuário não encontrado" });
    } else {
      res.json(result);
    }
  });
};

export default userController;
