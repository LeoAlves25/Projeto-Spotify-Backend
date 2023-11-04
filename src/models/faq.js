import db from "../../database.js";

const Faq = {};

Faq.getAllFaqs = async (callback) => {
  await db
    .query("SELECT * FROM faq")
    .then((result) => {
      callback(null, result[0]);
    })
    .catch((err) => {
      callback(err, null);
    });
};

export default Faq;
